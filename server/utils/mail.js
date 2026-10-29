import { existsSync, readFileSync } from "node:fs";
import { join, sep } from "node:path";
import nodemailer from "nodemailer";

const deadHosts = new Set(["smtp.hstgr.io", "smtp.hstgr.com"]);

function first(...values) {
  for (const value of values) {
    if (value === undefined || value === null) continue;
    const text = String(value).trim();
    if (text) return text;
  }
  return "";
}

function smtpHostFor(host, user) {
  if (!deadHosts.has(host)) return host;
  return String(user).toLowerCase().endsWith("@gmail.com") ? "smtp.gmail.com" : "smtp.hostinger.com";
}

export function applyEnvText(env, text) {
  for (const line of String(text).split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!env[key]) env[key] = value;
  }
}

export function loadProjectEnv(env = process.env) {
  const files = [join(process.cwd(), ".env")];
  const cwd = process.cwd();
  if (cwd.endsWith(`${sep}.output${sep}server`) || cwd.endsWith("/.output/server")) {
    files.push(join(cwd, "..", "..", ".env"));
  }
  for (const file of files) {
    if (!existsSync(file)) continue;
    applyEnvText(env, readFileSync(file, "utf8"));
  }
}

export function resolveMailConfig(config = {}, env = process.env) {
  const smtpUser = first(env.NUXT_SMTP_USER, env.SMTP_USER, config.smtpUser);
  const smtpHost = smtpHostFor(first(env.NUXT_SMTP_HOST, env.SMTP_HOST, config.smtpHost), smtpUser);
  return {
    mailTo: first(env.NUXT_MAIL_TO, env.MAIL_TO, config.mailTo),
    mailFrom: first(env.NUXT_MAIL_FROM, env.MAIL_FROM, config.mailFrom),
    smtpHost,
    smtpPort: Number(first(env.NUXT_SMTP_PORT, env.SMTP_PORT, config.smtpPort)) || 587,
    smtpUser,
    smtpPassword: first(env.NUXT_SMTP_PASSWORD, env.SMTP_PASSWORD, config.smtpPassword),
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function transport(config) {
  const resolved = resolveMailConfig(config);
  if (!resolved.smtpHost || !resolved.mailTo || !resolved.mailFrom) return null;
  const port = resolved.smtpPort;
  return nodemailer.createTransport({
    host: resolved.smtpHost,
    port,
    secure: port === 465,
    auth: resolved.smtpUser
      ? { user: resolved.smtpUser, pass: resolved.smtpPassword || "" }
      : undefined,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

export function mailConfigured(config) {
  return Boolean(transport(config));
}

export async function sendMail(config, { to, subject, text, html, replyTo }) {
  loadProjectEnv();
  const resolved = resolveMailConfig(config);
  const tx = transport(config);
  if (!tx) {
    console.error("mail: config incomplète", {
      host: Boolean(resolved.smtpHost),
      to: Boolean(resolved.mailTo),
      from: Boolean(resolved.mailFrom),
    });
    return false;
  }
  const fallback = text
    .split("\n")
    .map((line) => (line ? `<p style="margin:0 0 12px;font-family:Georgia,serif;color:#3e1f24;line-height:1.5">${escapeHtml(line)}</p>` : "<br>"))
    .join("");
  await tx.sendMail({
    from: resolved.mailFrom,
    to,
    replyTo: replyTo || undefined,
    subject,
    text,
    html: html || `<div style="background:#f5e0cb;padding:28px"><div style="max-width:560px;margin:0 auto;background:#fff;padding:28px">${fallback}</div></div>`,
  });
  return true;
}
