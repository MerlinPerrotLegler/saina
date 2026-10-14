export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export function emailError(value) {
  const text = String(value ?? "").trim();
  if (!text) return "Indiquez votre adresse e-mail.";
  if (!isEmail(text)) return "Cette adresse e-mail n'est pas valide.";
  return "";
}

export function dateError(value) {
  const text = String(value ?? "").trim();
  if (!text) return "Indiquez la date du mariage ou de l'événement.";
  if (!isValidDate(text)) return "Cette date n'est pas valide.";
  return "";
}

export function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
}

export function cleanLine(value, max) {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}
