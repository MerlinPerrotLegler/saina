import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-08",
  devtools: { enabled: false },
  css: ["~/assets/css/tokens.scss", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
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
