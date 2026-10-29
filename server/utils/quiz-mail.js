import { readFile } from "node:fs/promises";
import path from "node:path";
import { answerLines, styleLabels } from "#shared/utils/quiz";
import { sendMail } from "./mail.js";

function styleName(style) {
  return styleLabels[style] || style;
}

function parcoursLabel(kind) {
  return kind === "mariage" ? "mariage" : "bijou personnalisé";
}

function formatDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ""));
  if (!match) return value || "";
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function fiche(lead) {
  const lines = [
    `Parcours : ${parcoursLabel(lead.kind)}`,
    `Prénom : ${lead.prenom}`,
    `Nom : ${lead.nom}`,
    `E-mail : ${lead.email}`,
  ];
  if (lead.kind === "mariage" && lead.date) lines.push(`Date du mariage : ${formatDate(lead.date)}`);
  lines.push(`Style : ${styleName(lead.style)}`);
  return lines.join("\n");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fill(html, data) {
  return html.replace(/\{\{\s*([a-z0-9_]+)\s*\}\}/g, (match, key) => {
    if (!Object.prototype.hasOwnProperty.call(data, key)) return match;
    return escapeHtml(data[key]);
  });
}

async function managerHtml(name, data) {
  let source = "";
  try {
    const stored = await useStorage("assets:emails").getItem(`${name}.html`);
    if (typeof stored === "string") source = stored;
    else if (stored instanceof Uint8Array) source = new TextDecoder().decode(stored);
  } catch {
    source = "";
  }
  try {
    if (!source.includes("<html")) {
      source = await readFile(path.join(process.cwd(), "emails/html", `${name}.html`), "utf8");
    }
    return fill(source, data);
  } catch (error) {
    console.error("mail template:", error?.code || "unavailable");
    return "";
  }
}

export async function sendFilledForm(config, lead) {
  const coordonnees = fiche(lead);
  const reponses = answerLines(lead.answers);
  const data = {
    prenom: lead.prenom,
    nom: lead.nom,
    email: lead.email,
    parcours: parcoursLabel(lead.kind),
    style: styleName(lead.style),
    coordonnees,
    reponses,
  };
  const text = ["Formulaire rempli", "", coordonnees, "", "Réponses", reponses].join("\n");
  const html = await managerHtml("manager-formulaire", data);
  return sendMail(config, {
    to: config.mailTo,
    replyTo: lead.email,
    subject: "Formulaire rempli",
    text,
    html,
  });
}

function demandeSubject(lead) {
  return lead.kind === "mariage"
    ? "Demande de contacts pour mariage"
    : "Demande de contacts pour bijoux personnalisé";
}

export async function sendContactRequest(config, lead) {
  const subject = demandeSubject(lead);
  const coordonnees = fiche(lead);
  const reponses = answerLines(lead.answers);
  const clientText = [
    `Bonjour ${lead.prenom},`,
    "",
    "Votre demande est bien arrivée. Anaïs la lira et vous répondra pour imaginer le bijou.",
    "",
    `Style : ${styleName(lead.style)}`,
  ].join("\n");
  const managerText = [subject, "", `${lead.prenom} ${lead.nom} souhaite en parler avec vous.`, "", coordonnees, "", "Réponses", reponses].join("\n");
  const html = await managerHtml("manager-demande", {
    sujet: subject,
    prenom: lead.prenom,
    nom: lead.nom,
    email: lead.email,
    parcours: parcoursLabel(lead.kind),
    coordonnees,
    reponses,
  });
  const clientOk = await sendMail(config, {
    to: lead.email,
    subject,
    text: clientText,
  });
  const managerOk = await sendMail(config, {
    to: config.mailTo,
    replyTo: lead.email,
    subject,
    text: managerText,
    html,
  });
  return clientOk && managerOk;
}
