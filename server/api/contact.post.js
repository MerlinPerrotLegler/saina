import { cleanLine, isEmail } from "#shared/utils/fields";
import { appendLead } from "../utils/leads.js";
import { checkTurnstile } from "../utils/turnstile.js";

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
  if (cleanLine(body?.societe, 80)) return { ok: true };

  const prenom = cleanLine(body?.prenom, 80);
  const nom = cleanLine(body?.nom, 80);
  const email = cleanLine(body?.email, 200);
  const message = String(body?.message ?? "").trim().slice(0, 5000);
  const errors = {};
  if (!prenom) errors.prenom = "Indiquez votre prénom.";
  if (!nom) errors.nom = "Indiquez votre nom.";
  if (!isEmail(email)) errors.email = "Indiquez une adresse e-mail valide.";
  if (message.length < 2) errors.message = "Écrivez votre message.";
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 400, statusMessage: "Message incomplet.", data: { errors } });
  }

  const config = useRuntimeConfig();
  const captcha = await checkTurnstile({
    token: cleanLine(body?.token, 2048),
    secret: config.public.turnstileSiteKey ? config.turnstileSecretKey : "",
    ip,
  });
  if (captcha === "missing" && !body?.captchaUnavailable) {
    throw createError({ statusCode: 400, statusMessage: "Confirmez la vérification avant d’envoyer." });
  }
  if (captcha === "rejected") {
    throw createError({ statusCode: 400, statusMessage: "La vérification a été refusée. Réessayez." });
  }

  await appendLead("contact-messages.jsonl", {
    at: new Date().toISOString(),
    prenom,
    nom,
    email,
    message,
    captcha: captcha === "missing" ? "skipped" : captcha,
  });
  return { ok: true };
});
