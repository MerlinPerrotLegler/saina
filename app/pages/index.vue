<script setup>
/** @spec [[fsd-a-propos]] */
import { pieces } from "~/data/portfolio";

const photo = "/brand/photo-anais-full.jpeg";

useHead({
  title: "Sïana — Joaillerie de transmission",
  meta: [
    {
      name: "description",
      content: "Des bijoux imaginés par Anaïs pour raconter ce qui vous rend unique. Écoute, dessin 3D, pièces pensées pour être portées.",
    },
  ],
});

const reassures = [
  { icon: "icone-coeur", label: ["Écoute", "du projet"] },
  { icon: "icone-soleil", label: ["Dessin 3D", "avant fabrication"] },
  { icon: "icone-lune", label: ["Un bijou", "qui a un sens"] },
  { icon: "icone-points", label: ["Fait pour", "être porté"] },
];

const cards = pieces.map((piece) => ({
  id: piece.id,
    image: piece.image,
    position: piece.position,
    title: piece.title,
  href: `/portfolio#${piece.id}`,
  label: "Lire",
}));
</script>

<template>
  <UiHero
    id="histoire"
    :image="photo"
    image-label="Portrait d’Anaïs, assise, fondatrice de Sïana"
    image-whole
    fill="var(--color-pourpre)"
    kicker="Joaillerie de transmission"
    :title="['Je suis Anaïs,', 'fondatrice de', 'Sïana Joaillerie']"
    lead="Des bijoux imaginés pour raconter ce qui vous rend unique."
    :cta="{ label: 'Imaginer un bijou', href: '/quiz' }"
  />

  <UiBand class="bg-creme text-terracotta" label="Réassurance" :items="reassures" />

  <article id="recit" class="c-about">
    <div class="c-about__text">
      <section>
        <h2><span class="c-about-mark" aria-hidden="true"><BrandSvg name="icone-soleil" /></span>Des bijoux imaginés</h2>
        <p>Derrière Sïana Joaillerie, il y a moi, Anaïs.</p>
        <p>
          Dessiner, imaginer, jouer avec les matières, les couleurs et la lumière… C’est ma façon de créer des bijoux qui ne sont pas simplement beaux, mais qui <strong>résonnent avec la personne qui les porte</strong>.
        </p>
        <p>
          J’ai toujours aimé donner vie aux idées. Aujourd’hui, je mets cette passion au service de la joaillerie pour imaginer des pièces singulières, pensées comme de véritables petits morceaux de vous.
        </p>
      </section>

      <p class="c-about-ornament" aria-hidden="true" />
      <section>
        <h2><span class="c-about-mark" aria-hidden="true"><BrandSvg name="icone-points" /></span>Créer autrement</h2>
        <p>Je crois que la joaillerie peut être précieuse sans être figée dans les codes traditionnels.</p>
        <p>
          Grâce à mon expertise de dessin 3D, je peux aller chercher des formes parfois difficiles à imaginer autrement et vous permettre de <strong>voir votre bijou prendre vie avant même sa fabrication</strong>.
        </p>
      </section>

      <p class="c-about-ornament" aria-hidden="true" />
      <section>
        <h2><span class="c-about-mark" aria-hidden="true"><BrandSvg name="icone-lune" /></span>Des bijoux qui ont une histoire</h2>
        <p>Une alliance peut représenter deux personnalités qui se complètent.</p>
        <p>
          Un bijou peut marquer une étape, célébrer une personne, transmettre un souvenir ou simplement vous rappeler qui vous êtes.
        </p>
        <p>
          Un bijou peut être un témoin qui nous remémore au quotidien une naissance, un baptême, un anniversaire, un amour, une célébration...
        </p>
        <p>C’est cette dimension personnelle qui me touche particulièrement dans mon métier.</p>
        <p>
          J’aime créer des bijoux qui ont <strong>un sens pour vous</strong>, plutôt que des pièces simplement destinées à suivre une tendance.
        </p>
      </section>

      <p class="c-about-ornament" aria-hidden="true" />
      <section>
        <h2><span class="c-about-mark" aria-hidden="true"><BrandSvg name="icone-coeur" /></span>Derrière chaque création, il y a une rencontre</h2>
        <p>Chez Sïana Joaillerie, je souhaite vous faire entrer dans le processus de création.</p>
        <p>
          Vous pouvez arriver avec une idée très précise, quelques images, un souvenir, une envie… ou simplement avec l’intuition de vouloir un bijou différent.
        </p>
        <p>
          Mon rôle est de vous écouter, de comprendre ce que vous souhaitez exprimer et de transformer tout cela en une création qui vous ressemble.
        </p>
        <p>Parce qu'un bijou que l'on porte longtemps est, à mes yeux, un bijou dans lequel on se reconnaît.</p>
      </section>
    </div>
  </article>

  <UiSplit
    id="invitation"
    image="/portfolio/demi-soleil.jpeg"
    image-label="Main portant la bague demi-soleil, diamants navette en or jaune"
    kicker="Sur-mesure"
    title="Et si votre prochain bijou commençait par une idée ?"
    lead="Quelques questions pour reconnaître un style de bijou, puis une rencontre avec Anaïs."
    :cta="{ label: 'Commencer le quiz', href: '/quiz', variant: 'primary' }"
  />

  <article class="c-about">
    <div class="c-about__text">
      <section>
        <h2><span class="c-about-mark" aria-hidden="true"><BrandSvg name="icone-s" /></span>Moi, Anaïs</h2>
        <p>Je suis à la fois la créatrice, la dessinatrice et la conceptrice 3D derrière Sïana Joaillerie.</p>
        <p>
          J’aime autant la précision technique que la recherche créative, mais ce qui me passionne vraiment, c’est <strong>le moment où une idée devient une forme, puis une pièce que vous pourrez réellement porter</strong>.
        </p>
        <p>
          Chaque création est pour moi une petite aventure : imaginer, dessiner, chercher, ajuster… jusqu'à ce que tout trouve sa place.
        </p>
        <p><strong>Et si votre prochain bijou commençait par une idée ?</strong></p>
        <p>Bienvenue dans mon univers.</p>
        <p><strong>Bienvenue chez Sïana Joaillerie.</strong></p>
      </section>
    </div>
  </article>

  <section class="c-section">
    <UiSectionIntro
      kicker="Portfolio"
      title="Des créations qui ont une histoire"
      lead="Alliances, bijou de famille, prototype : chaque pièce commence par une rencontre."
      :cta="{ label: 'Voir le portfolio', href: '/portfolio', variant: 'primary' }"
    />
    <UiCards :items="cards" />
  </section>

</template>

<style lang="scss">
.c-about {
  padding: 1.5rem 6vw 3rem;

  &__text {
    max-width: 40rem;

    h2 {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      margin: 2rem 0 0.7rem;
      font-family: var(--font-serif);
      font-size: 1.6rem;
      font-weight: 500;
    }

    .c-about-mark {
      display: block;
      flex: none;
      width: 1.7rem;
      height: 1.7rem;
      color: var(--color-terracotta);
    }

    .c-about-ornament {
      position: relative;
      width: 5.5rem;
      height: 0.7rem;
      margin: 2rem 0 0;
      color: var(--color-terracotta);
      background: linear-gradient(currentColor, currentColor) right center / 3.6rem 1px no-repeat;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.38rem;
        height: 0.38rem;
        border: 1px solid currentColor;
        transform: translateY(-50%) rotate(45deg);
      }
    }

    p {
      margin: 0 0 0.85rem;
      font-size: 1.05rem;
      line-height: 1.6;
    }
  }
}
</style>
