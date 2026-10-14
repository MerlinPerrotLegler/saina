import { answerLines, results, styleLabels } from "#shared/utils/quiz";
import { sendMail } from "./mail.js";

function styleName(style) {
  return styleLabels[style] || style;
}

export async function sendFilledForm(config, lead) {
  const dateLine = lead.kind === "mariage" && lead.date
    ? `Date du mariage : ${lead.date}`
    : "";
  const text = [
    "Formulaire rempli",
    "",
    lead.kind === "mariage" ? "Parcours : mariage" : "Parcours : bijou personnalisé",
    `Prénom : ${lead.prenom}`,
    `Nom : ${lead.nom}`,
    `E-mail : ${lead.email}`,
    dateLine,
    `Style : ${styleName(lead.style)}`,
    "",
    "Réponses",
    answerLines(lead.answers),
  ].filter((line) => line !== "").join("\n");
  return sendMail(config, {
    to: config.mailTo,
    subject: "Formulaire rempli",
    text,
  });
}

export async function sendContactRequest(config, lead) {
  const subject = lead.kind === "mariage"
    ? "Demande de contacts pour mariage"
    : "Demande de contacts pour bijoux personnalisé";
  const dateLine = lead.kind === "mariage" && lead.date
    ? `Date du mariage : ${lead.date}`
    : "";
  const opening = results[lead.style]?.title || `Ton style est ${styleName(lead.style)}.`;
  const text = [
    `Bonjour ${lead.prenom},`,
    "",
    "Votre demande est bien arrivée. Anaïs la lira et vous répondra pour imaginer le bijou.",
    "",
    opening,
    `Prénom : ${lead.prenom}`,
    `Nom : ${lead.nom}`,
    `E-mail : ${lead.email}`,
    dateLine,
    `Style : ${styleName(lead.style)}`,
  ].filter((line) => line !== "").join("\n");
  const recipients = [lead.email, config.mailTo].filter(Boolean);
  return sendMail(config, {
    to: [...new Set(recipients)],
    subject,
    text,
  });
}
