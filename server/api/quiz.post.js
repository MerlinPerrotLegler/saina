import { cleanLine, isEmail, isValidDate } from "#shared/utils/fields";
import { STYLE_IDS, scoreQuiz } from "#shared/utils/quiz";
import { appendLead } from "../utils/leads.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (cleanLine(body?.societe, 80)) return { ok: true, style: "" };

  const prenom = cleanLine(body?.prenom, 80);
  const nom = cleanLine(body?.nom, 80);
  const email = cleanLine(body?.email, 200);
  const date = cleanLine(body?.date, 10);
  const answers = Array.isArray(body?.answers) ? body.answers.slice(0, 9) : [];
  const errors = {};
  if (!prenom) errors.prenom = "Indiquez votre prénom.";
  if (!nom) errors.nom = "Indiquez votre nom.";
  if (!isEmail(email)) errors.email = "Indiquez une adresse e-mail valide.";
  if (!isValidDate(date)) errors.date = "Indiquez une date valide.";
  if (answers.length !== 9 || answers.some((answer) => !STYLE_IDS.includes(answer))) {
    errors.answers = "Le questionnaire est incomplet.";
  }
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 400, statusMessage: "Formulaire incomplet.", data: { errors } });
  }

  const style = scoreQuiz(answers);
  await appendLead("quiz-leads.jsonl", {
    at: new Date().toISOString(),
    prenom,
    nom,
    email,
    date,
    style,
    answers,
  });
  return { ok: true, style };
});
