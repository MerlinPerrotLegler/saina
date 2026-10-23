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
      href: "https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Italianno&family=Montez&display=swap",
    },
  ],
});
</script>

<template>
  <header class="c-portfolio-intro">
    <div class="c-container">
    <p class="c-kicker">Portfolio</p>
    <h1 class="c-title">Des pièces, des mots</h1>
    <p class="c-lead">
      Les créations racontées par Anaïs, et les retours de Lucie et d’Eva.
    </p>
    </div>
  </header>

  <template v-for="(piece, index) in pieces" :key="piece.id">
  <p v-if="index > 0" class="c-piece-rule" aria-hidden="true">
    <BrandSvg :name="separators[index % separators.length]" />
  </p>
  <article
    :id="piece.id"
    class="c-piece"
  >
    <div class="c-container c-piece-layout">
    <div class="c-piece-side">
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
      <blockquote v-if="piece.review" class="c-letter" :class="`c-letter-${piece.review.hand}`">
        <p class="c-letter-kicker">Sïana</p>
        <p v-for="(paragraph, paragraphIndex) in piece.review.paragraphs" :key="paragraphIndex">
          {{ paragraph }}
        </p>
        <footer v-if="piece.review.author">— {{ piece.review.author }}</footer>
      </blockquote>
    </div>
    <div class="c-piece-copy">
      <p class="c-kicker">{{ piece.kicker }}</p>
      <h2 class="c-title">{{ piece.title }}</h2>
      <p v-for="(paragraph, paragraphIndex) in piece.paragraphs" :key="paragraphIndex">
        {{ paragraph }}
      </p>
    </div>
    </div>
  </article>
  </template>
</template>

<style lang="scss">
.c-portfolio-intro {
  padding: 3.4rem 0 2.8rem;
  background: #fff;
  border-bottom: 1px solid color-mix(in srgb, var(--color-pourpre) 12%, transparent);

  .c-kicker {
    color: var(--color-terracotta);
  }

  .c-title {
    max-width: 16ch;
    margin: 0 0 1.1rem;
    font-size: clamp(2.7rem, 6vw, 4.6rem);
    line-height: 0.95;
  }

  .c-lead {
    max-width: 28rem;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.45;
  }
}

.c-piece-rule {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.2rem 0;
  color: var(--color-terracotta);

  .c-mark {
    width: 1.8rem;
    height: 1.8rem;
  }
}

.c-letter-italianno p:not(.c-letter-kicker),
.c-letter-italianno footer {
  font-family: Italianno, cursive;
  font-size: 2.35rem;
  font-weight: 400;
  line-height: 1.15;
}

.c-letter-montez p:not(.c-letter-kicker),
.c-letter-montez footer {
  font-family: Montez, cursive;
  font-size: 1.85rem;
  font-weight: 400;
  line-height: 1.35;
}

.c-letter-corinthia p:not(.c-letter-kicker),
.c-letter-corinthia footer {
  font-family: Corinthia, cursive;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 1.05;
}
</style>
