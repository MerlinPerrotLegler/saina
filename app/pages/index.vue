<script setup>
/** @spec [[composents]] */
const photo = "/brand/photo-anais.jpeg";

useHead({
  title: "Sïana — Bijoux & talismans",
  meta: [
    {
      name: "description",
      content:
        "Des bijoux porteurs de sens, inspirés par la nature, les pierres précieuses et les histoires qui vous relient.",
    },
  ],
});

const values = [
  { icon: "icone-points", label: ["Pierres", "naturelles"] },
  { icon: "icone-soleil", label: ["Créations", "artisanales"] },
  { icon: "icone-lune", label: ["Bijoux", "porteurs de sens"] },
  { icon: "icone-coeur", label: ["Inspirés", "par la nature"] },
];

const cards = [
  { id: "colliers", image: photo, position: "20% center", title: "Colliers", href: "/#colliers", label: "Explorer" },
  { id: "boucles", image: photo, position: "55% center", title: "Boucles d’oreilles", href: "/#boucles", label: "Explorer" },
  { id: "bracelets", image: photo, position: "80% center", title: "Bracelets", href: "/#bracelets", label: "Explorer" },
];

const steps = [
  { icon: "icone-soleil", label: ["Sélection", "de pierres de qualité"] },
  { icon: "icone-lune", label: ["Fabrication", "artisanale"] },
  { icon: "icone-coeur", label: ["Créations uniques", "ou petites séries"] },
  { icon: "icone-points", label: ["Conseils", "personnalisés"] },
];

const quotes = [
  {
    text: "Un bijou magnifique, encore plus beau en vrai. On sent l’amour et la passion derrière chaque création.",
    author: "Claire",
    rating: 5,
  },
  {
    text: "Une pièce unique et pleine de sens, qui m’accompagne tous les jours. Merci pour ton écoute et ta douceur.",
    author: "Marine",
    rating: 5,
  },
  {
    text: "Des bijoux d’une grande qualité, avec des pierres superbes. Je recommande les yeux fermés.",
    author: "Élodie",
    rating: 5,
  },
];
</script>

<template>
  <UiHero
    id="univers"
    :image="photo"
    kicker="Bijoux & talismans"
    :title="['Transmission', 'Héritage', 'Joaillerie &', 'Pierres précieuses']"
    lead="Des bijoux porteurs de sens, inspirés par la nature, les pierres précieuses et les histoires qui vous relient."
    :cta="{ label: 'Découvrir l’univers', href: '/#bijoux' }"
  />

  <UiBand class="bg-creme text-terracotta" label="Repères" :items="values" />

  <section id="bijoux" class="c-section">
    <UiSectionIntro
      kicker="Collections"
      title="Des bijoux qui racontent une histoire"
      lead="Chaque création est pensée comme un talisman, alliant beauté, symbolique et éclat des pierres. Des pièces uniques ou, en petites séries, pour vous accompagner au quotidien."
      :cta="{ label: 'Découvrir les collections', href: '/#bijoux', variant: 'primary' }"
    />
    <UiCards id="boutiques" :items="cards" />
  </section>

  <UiSplit
    id="histoire"
    :image="photo"
    image-label="Anaïs à l’établi"
    kicker="À propos"
    title="Une démarche sensible et authentique"
    lead="Sïana, c’est l’alliance de ma passion pour les pierres et de mon savoir de créatrice. Chaque bijou suit sa voie, inspirée par la nature et les cycles de la vie, je conçois des bijoux qui vous accompagnent dans vos chemins personnels."
    :cta="{ label: 'En savoir plus', href: '/a-propos', variant: 'primary' }"
  />

  <UiBand id="sur-mesure" class="bg-terracotta text-creme" label="Façon" :items="steps" />

  <section class="c-section">
    <UiSectionIntro
      kicker="Témoignages"
      title="Vos mots, ma plus belle récompense"
    />
  </section>
  <UiQuotes :items="quotes" />

  <UiNewsletter
    title="Rejoignez l’univers Sïana"
    lead="Recevez les nouveautés, les coulisses de l’atelier et des inspirations autour des pierres et des cycles de la nature."
  />
</template>

<style lang="scss">
/* L’accueil est assemblé avec les classes c-*. */
</style>
