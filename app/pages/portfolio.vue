<script setup>
import { pieces } from "~/data/portfolio";

useHead({
  title: "Portfolio — Sïana Joaillerie",
  meta: [
    {
      name: "description",
      content: "Alliances de Lucie et Dylan, création unique d’Eva, prototype demi-soleil : les pièces et les mots de celles qui les portent.",
    },
  ],
});
</script>

<template>
  <div class="c-sheet">
    <header class="c-sheet-intro">
      <p class="c-kicker">Portfolio</p>
      <h1 class="c-title">Des pièces, des mots</h1>
      <p class="c-lead">
        Les créations racontées par Anaïs, et les retours de Lucie et d’Eva.
      </p>
    </header>
  </div>

  <article
    v-for="(piece, index) in pieces"
    :id="piece.id"
    :key="piece.id"
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
      <blockquote v-if="piece.review" class="c-piece-quote">
        <p v-for="(paragraph, paragraphIndex) in piece.review.paragraphs" :key="paragraphIndex">
          {{ paragraph }}
        </p>
        <footer>— {{ piece.review.author }}</footer>
      </blockquote>
    </div>
  </article>
</template>
