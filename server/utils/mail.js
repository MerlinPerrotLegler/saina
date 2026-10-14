import nodemailer from "nodemailer";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function transport(config) {
  if (!config.smtpHost || !config.mailTo || !config.mailFrom) return null;
  const port = Number(config.smtpPort) || 587;
  return nodemailer.createTransport({
    host: config.smtpHost,
    port,
    secure: port === 465,
    auth: config.smtpUser
      ? { user: config.smtpUser, pass: config.smtpPassword || "" }
      : undefined,
  });
}

export function mailConfigured(config) {
  return Boolean(transport(config));
}

export async function sendMail(config, { to, subject, text, html, replyTo }) {
  const tx = transport(config);
  if (!tx) {
    console.error("mail: SMTP ou MAIL_TO absent");
    return false;
  }
  const fallback = text
    .split("\n")
    .map((line) => (line ? `<p style="margin:0 0 12px;font-family:Georgia,serif;color:#3e1f24;line-height:1.5">${escapeHtml(line)}</p>` : "<br>"))
    .join("");
  await tx.sendMail({
    from: config.mailFrom,
    to,
    replyTo: replyTo || undefined,
    subject,
    text,
    html: html || `<div style="background:#f5e0cb;padding:28px"><div style="max-width:560px;margin:0 auto;background:#fff;padding:28px">${fallback}</div></div>`,
  });
  return true;
}
