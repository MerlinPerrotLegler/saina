import tailwindcss from "@tailwindcss/vite";

const turnstileSiteKey = process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const turnstileSecretKey = process.env.NUXT_TURNSTILE_SECRET_KEY || "";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-08",
  devtools: { enabled: false },
  css: ["~/assets/css/tokens.scss", "~/assets/css/main.css"],
  runtimeConfig: {
    turnstileSecretKey,
    mysqlHost: process.env.MYSQL_HOST || "",
    mysqlPort: Number(process.env.MYSQL_PORT || 3306),
    mysqlUser: process.env.MYSQL_USER || "",
    mysqlPassword: process.env.MYSQL_PASSWORD || "",
    mysqlDatabase: process.env.MYSQL_DATABASE || "",
    public: {
      turnstileSiteKey: turnstileSiteKey && turnstileSecretKey ? turnstileSiteKey : "",
      appointmentUrl: process.env.NUXT_PUBLIC_APPOINTMENT_URL || "",
    },
  },
  hooks: {
    "pages:extend"(pages) {
      const quiz = pages.find((page) => page.path === "/quiz");
      if (!quiz?.file) return;
      pages.push(
        { name: "quiz-question", path: "/quiz/question/:n", file: quiz.file },
        { name: "quiz-coordonnees", path: "/quiz/coordonnees", file: quiz.file },
        { name: "quiz-resultat", path: "/quiz/resultat/:style", file: quiz.file },
      );
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/a-propos": { redirect: { to: "/", statusCode: 301 } },
    "/sur-mesure": { redirect: { to: "/quiz", statusCode: 301 } },
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
