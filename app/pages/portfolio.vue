<script setup>
import { pieces } from "~/data/portfolio";

const separators = ["icone-soleil", "icone-lune", "icone-points"];

useHead({
  title: "Portfolio — Sïana Joaillerie",
  meta: [
    {
      name: "description",
      content: "Alliances de Lucie et Dylan, création unique d’Eva, prototype demi-soleil : les pièces et les mots de celles qui les portent.",
    },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Fleur+De+Leah&family=Montez&display=swap",
    },
  ],
});
</script>

<template>
  <header class="c-portfolio-intro">
    <p class="c-kicker">Portfolio</p>
    <h1 class="c-title">Des pièces, des mots</h1>
    <p class="c-lead">
      Les créations racontées par Anaïs, et les retours de Lucie et d’Eva.
    </p>
  </header>

  <template v-for="(piece, index) in pieces" :key="piece.id">
  <p v-if="index > 0" class="c-piece-rule" aria-hidden="true">
    <BrandSvg :name="separators[index % separators.length]" />
  </p>
  <article
    :id="piece.id"
    class="c-piece"
  >
    <figure class="c-piece-figure">
      <img
        :src="piece.image"
        :alt="piece.alt"
        :width="piece.width"
        :height="piece.height"
        :loading="index === 0 ? 'eager' : 'lazy'"
        decoding="async"
      >
    </figure>
    <div class="c-piece-copy">
      <p class="c-kicker">{{ piece.kicker }}</p>
      <h2 class="c-title">{{ piece.title }}</h2>
      <p v-for="(paragraph, paragraphIndex) in piece.paragraphs" :key="paragraphIndex">
        {{ paragraph }}
      </p>
    </div>
    <blockquote v-if="piece.review" class="c-letter">
      <p class="c-letter-kicker">Sïana</p>
      <p v-for="(paragraph, paragraphIndex) in piece.review.paragraphs" :key="paragraphIndex">
        {{ paragraph }}
      </p>
      <footer>— {{ piece.review.author }}</footer>
    </blockquote>
  </article>
</template>
