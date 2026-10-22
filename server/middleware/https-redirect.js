/**
 * Redirect HTTP → HTTPS when Hostinger (or any proxy) sets x-forwarded-proto.
 * Enable only after SSL is Active in hPanel (Security → SSL), via NUXT_FORCE_HTTPS=1.
 * Enabling this before the certificate exists makes the site unreachable.
 */
export default defineEventHandler((event) => {
  if (process.env.NUXT_FORCE_HTTPS !== "1") return;

  const proto = getRequestHeader(event, "x-forwarded-proto");
  if (proto !== "http") return;

  const url = getRequestURL(event);
  return sendRedirect(event, `https://${url.host}${url.pathname}${url.search}`, 301);
});
