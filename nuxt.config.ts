import { join } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { dereferencePublicSymlinks } from "./scripts/dereference-public.mjs";

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
    mailTo: process.env.MAIL_TO || "",
    mailFrom: process.env.MAIL_FROM || "",
    smtpHost: process.env.SMTP_HOST || "",
    smtpPort: Number(process.env.SMTP_PORT || 587),
    smtpUser: process.env.SMTP_USER || "",
    smtpPassword: process.env.SMTP_PASSWORD || "",
    public: {
      siteUrl: (process.env.NUXT_PUBLIC_SITE_URL || "https://siana-joaillerie.fr").replace(/\/$/, ""),
      turnstileSiteKey: turnstileSiteKey && turnstileSecretKey ? turnstileSiteKey : "",
      appointmentUrl:
        process.env.NUXT_PUBLIC_APPOINTMENT_URL || "https://siana-joaillerie.systeme.io/calendrier",
    },
  },
  hooks: {
    async "nitro:build:public-assets"(nitro) {
      await dereferencePublicSymlinks(join(nitro.options.rootDir, "public"), nitro.options.output.publicDir);
    },
    "pages:extend"(pages) {
      const quiz = pages.find((page) => page.path === "/quiz");
      if (!quiz?.file) return;
      const bases = ["/quiz", "/mariage"];
      for (const base of bases) {
        if (base === "/mariage") pages.push({ name: "mariage", path: "/mariage", file: quiz.file });
        pages.push(
          { name: `${base.slice(1)}-question`, path: `${base}/question/:n`, file: quiz.file },
          { name: `${base.slice(1)}-coordonnees`, path: `${base}/coordonnees`, file: quiz.file },
          { name: `${base.slice(1)}-resultat`, path: `${base}/resultat/:style`, file: quiz.file },
        );
      }
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/a-propos": { redirect: { to: "/", statusCode: 301 } },
    "/sur-mesure": { redirect: { to: "/quiz", statusCode: 301 } },
    // Nuxt 4.6.2 folds a trailing slash into the rule key, so "/styleguide/"
    // would also match "/styleguide" and redirect the page onto itself.
    "/styleguide/index.html": { redirect: { to: "/styleguide", statusCode: 302 } },
  },
  nitro: {
    serverAssets: [
      { baseName: "emails", dir: "./emails/html" },
    ],
    prerender: {
      crawlLinks: true,
      routes: ["/styleguide", "/app/assets/css/components.css"],
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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-1E205YDTHS",
          async: true,
        },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1E205YDTHS',{send_page_view:false});`,
        },
      ],
    },
  },
});
