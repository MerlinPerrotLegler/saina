const SOFT_ERRORS = new Set([
  "missing-input-secret",
  "invalid-input-secret",
  "internal-error",
  "bad-request",
]);

async function siteverify(token, secret, ip) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) return { success: false, "error-codes": ["internal-error"] };
  return response.json();
}

/**
 * verified : jeton accepté.
 * disabled : pas de clé, compte inutilisable, ou panne Cloudflare — ne pas bloquer.
 * missing : jeton absent alors que le captcha est actif.
 * rejected : jeton refusé.
 */
export async function checkTurnstile({ token, secret, ip }) {
  if (!secret) return "disabled";
  if (!token) return "missing";
  try {
    const result = await siteverify(token, secret, ip);
    if (result.success) return "verified";
    const codes = Array.isArray(result["error-codes"]) ? result["error-codes"] : [];
    if (codes.some((code) => SOFT_ERRORS.has(code))) return "disabled";
    return "rejected";
  } catch {
    return "disabled";
  }
}
