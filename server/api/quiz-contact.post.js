import { findQuizLead, markContactRequested } from "../utils/quiz-db.js";
import { sendContactRequest } from "../utils/quiz-mail.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = String(body?.id || "").slice(0, 80);
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Demande introuvable." });
  }
  const config = useRuntimeConfig();
  const lead = await findQuizLead(config, id);
  if (!lead) {
    throw createError({ statusCode: 404, statusMessage: "Demande introuvable." });
  }
  if (lead.contactRequested) return { ok: true, already: true };
  let mailed = false;
  try {
    mailed = await sendContactRequest(config, lead);
  } catch (error) {
    console.error("quiz mail:", error?.code || "unavailable");
  }
  if (!mailed) {
    throw createError({ statusCode: 502, statusMessage: "L’envoi du message n’a pas abouti." });
  }
  await markContactRequested(config, id);
  return { ok: true };
});
