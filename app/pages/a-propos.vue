<script setup>
/** @spec [[fsd-a-propos]] */
useHead({
  title: "À propos — Anaïs, fondatrice de Sïana Joaillerie",
});
</script>

<template>
  <article class="c-about">
    <header class="c-about__intro">
      <img
        src="/brand/photo-anais.jpeg"
        alt="Portrait d’Anaïs, assise, fondatrice de Sïana"
        width="1200"
        height="1600"
      >
      <div>
        <p class="c-about__kicker">Sïana Joaillerie</p>
        <h1>Je suis Anaïs, fondatrice de Sïana Joaillerie</h1>
        <p class="c-about__chapo">Des bijoux imaginés pour raconter ce qui vous rend unique.</p>
      </div>
    </header>

    <div class="c-about__text">
      <section>
        <h2>Des bijoux imaginés</h2>
        <p>Derrière Sïana Joaillerie, il y a moi, Anaïs.</p>
        <p>
          Dessiner, imaginer, jouer avec les matières, les couleurs et la lumière… C’est ma façon de créer des bijoux qui ne sont pas simplement beaux, mais qui <strong>résonnent avec la personne qui les porte</strong>.
        </p>
        <p>
          J’ai toujours aimé donner vie aux idées. Aujourd’hui, je mets cette passion au service de la joaillerie pour imaginer des pièces singulières, pensées comme de véritables petits morceaux de vous.
        </p>
      </section>

      <section>
        <h2>Créer autrement</h2>
        <p>Je crois que la joaillerie peut être précieuse sans être figée dans les codes traditionnels.</p>
        <p>
          Grâce à mon expertise de dessin 3D, je peux aller chercher des formes parfois difficiles à imaginer autrement et vous permettre de <strong>voir votre bijou prendre vie avant même sa fabrication</strong>.
        </p>
      </section>

      <section>
        <h2>Des bijoux qui ont une histoire</h2>
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

      <section>
        <h2>Derrière chaque création, il y a une rencontre</h2>
        <p>Chez Sïana Joaillerie, je souhaite vous faire entrer dans le processus de création.</p>
        <p>
          Vous pouvez arriver avec une idée très précise, quelques images, un souvenir, une envie… ou simplement avec l’intuition de vouloir un bijou différent.
        </p>
        <p>
          Mon rôle est de vous écouter, de comprendre ce que vous souhaitez exprimer et de transformer tout cela en une création qui vous ressemble.
        </p>
        <p>Parce qu'un bijou que l'on porte longtemps est, à mes yeux, un bijou dans lequel on se reconnaît.</p>
      </section>

      <section>
        <h2>Moi, Anaïs</h2>
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
</template>

<style lang="scss">
.c-about {
  padding: 1.5rem 1.25rem 3rem;

  &__intro {
    display: grid;
    gap: 1.5rem;
    align-items: end;
    margin-bottom: 2.5rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__kicker {
    margin: 0 0 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-size: 0.78rem;
  }

  h1 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(2.1rem, 5vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.08;
  }

  &__chapo {
    margin: 1rem 0 0;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1.35;
    max-width: 28rem;
  }

  &__text {
    max-width: 40rem;

    h2 {
      margin: 2rem 0 0.7rem;
      font-family: var(--font-serif);
      font-size: 1.6rem;
      font-weight: 500;
    }

    p {
      margin: 0 0 0.85rem;
      font-size: 1.05rem;
      line-height: 1.6;
    }
  }
}

@media (min-width: 48rem) {
  .c-about {
    padding-inline: 2.5rem;

    &__intro {
      grid-template-columns: minmax(16rem, 22rem) minmax(0, 1fr);
      gap: 3rem;
    }
  }
}
</style>
