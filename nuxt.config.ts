import tailwindcss from "@tailwindcss/vite";

const turnstileSiteKey = process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const turnstileSecretKey = process.env.NUXT_TURNSTILE_SECRET_KEY || "";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-08",
  devtools: { enabled: false },
  css: ["~/assets/css/tokens.scss", "~/assets/css/main.css"],
  runtimeConfig: {
    turnstileSecretKey,
    public: {
      turnstileSiteKey: turnstileSiteKey && turnstileSecretKey ? turnstileSiteKey : "",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/a-propos": { redirect: { to: "/", statusCode: 301 } },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      title: "Sïana Joaillerie",
      meta: [
        {
          name: "description",
          content:
            "Sïana, joaillerie de transmission. Des bijoux imaginés par Anaïs pour raconter ce qui vous rend unique.",
        },
      ],
    },
  },
});
