import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export const templates = {
  contact: {
    subject: "Votre message est bien arrivé",
    fields: ["prenom", "message"],
  },
  quiz: {
    subject: "Votre style de bijou",
    fields: ["prenom", "style_titre", "style_texte", "date", "contact_url"],
  },
  newsletter: {
    subject: "Bienvenue dans l’univers Sïana",
    fields: ["quiz_url", "desinscription_url"],
  },
};

export async function renderEmail(name, data = {}) {
  const template = templates[name];
  if (!template) throw new Error(`Courriel inconnu : ${name}`);
  const file = path.join(root, "html", `${name}.html`);
  const html = await readFile(file, "utf8");
  return {
    subject: template.subject,
    html: html.replace(/\{\{\s*([a-z0-9_]+)\s*\}\}/g, (match, key) => {
      if (!Object.prototype.hasOwnProperty.call(data, key)) return match;
      return escapeHtml(String(data[key] ?? ""));
    }),
  };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
