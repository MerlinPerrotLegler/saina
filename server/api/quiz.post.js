import { cleanLine, dateError, emailError } from "#shared/utils/fields";
import { scoreQuiz, STYLE_IDS, stylesFor } from "#shared/utils/quiz";
import { saveQuizLead } from "../utils/quiz-db.js";

const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 8) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const ip = getRequestIP(event, { xForwardedFor: true }) || "local";
  if (limited(ip)) {
    throw createError({ statusCode: 429, statusMessage: "Trop d’envois. Réessayez dans quelques minutes." });
  }
  if (cleanLine(body?.societe, 80)) return { ok: true, style: "" };

  const prenom = cleanLine(body?.prenom, 80);
  const nom = cleanLine(body?.nom, 80);
  const email = cleanLine(body?.email, 200);
  const date = cleanLine(body?.date, 10);
  const rawAnswers = Array.isArray(body?.answers) ? body.answers.slice(0, 9) : [];
  const labels = Array.from({ length: 9 }, (_, index) => cleanLine(rawAnswers[index], 80));
  const styles = stylesFor(labels);
  const errors = {};
  if (!prenom) errors.prenom = "Indiquez votre prénom.";
  if (!nom) errors.nom = "Indiquez votre nom.";
  const emailMessage = emailError(email);
  if (emailMessage) errors.email = emailMessage;
  const dateMessage = dateError(date);
  if (dateMessage) errors.date = dateMessage;
  if (styles.some((style) => !STYLE_IDS.includes(style))) {
    errors.answers = "Le questionnaire est incomplet.";
  }
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 400, statusMessage: "Formulaire incomplet.", data: { errors } });
  }

  const style = scoreQuiz(styles);
  const config = useRuntimeConfig();
  await saveQuizLead(config, { prenom, nom, email, date, style, answers: labels });
  return { ok: true, style };
});
