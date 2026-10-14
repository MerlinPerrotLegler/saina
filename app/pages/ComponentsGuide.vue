<script setup>
/** @spec [[composents]] */
definePageMeta({ layout: false });

const photo = "/brand/photo-anais-full.jpeg";
const email = ref("");

useHead({
  title: "ComponentsGuide — Sïana",
});

const sections = [
  ["logo", "Logo"],
  ["icon-btn", "Bouton icône"],
  ["btn", "Bouton"],
  ["field", "Champ"],
  ["header", "En-tête"],
  ["hero", "Hero"],
  ["values", "Repères"],
  ["section-intro", "Intro"],
  ["cards", "Cartes"],
  ["split", "Bloc partagé"],
  ["band", "Bandeau"],
  ["quotes", "Citations"],
  ["newsletter", "Infolettre"],
  ["footer", "Pied de page"],
];

const values = [
  { icon: "icone-soleil", label: ["Pierres", "naturelles"] },
  { icon: "icone-motif", label: ["Créations", "artisanales"] },
  { icon: "icone-coeur", label: ["Bijoux", "porteurs de sens"] },
  { icon: "icone-lune", label: ["Inspirés", "par la nature"] },
];

const cards = [
  { id: "guide-colliers", image: photo, position: "20% center", title: "Colliers", href: "#cards", label: "Explorer" },
  { id: "guide-boucles", image: photo, position: "55% center", title: "Boucles d’oreilles", href: "#cards", label: "Explorer" },
  { id: "guide-bracelets", image: photo, position: "80% center", title: "Bracelets", href: "#cards", label: "Explorer" },
];

const marks = [
  { icon: "icone-points", label: ["Pierres", "naturelles"] },
  { icon: "icone-soleil", label: ["Créations", "artisanales"] },
  { icon: "icone-lune", label: ["Bijoux", "porteurs de sens"] },
  { icon: "icone-coeur", label: ["Inspirés", "par la nature"] },
];

const steps = [
  { icon: "icone-soleil", label: ["Sélection", "de pierres de qualité"] },
  { icon: "icone-lune", label: ["Fabrication", "artisanale"] },
  { icon: "icone-coeur", label: ["Créations uniques", "ou petites séries"] },
  { icon: "icone-points", label: ["Conseils", "personnalisés"] },
];

const quotes = [
  { text: "Un bijou magnifique, encore plus beau en vrai.", author: "Claire", rating: 5 },
  { text: "Une pièce unique et pleine de sens.", author: "Marine", rating: 5 },
  { text: "Des bijoux d’une grande qualité, avec des pierres superbes.", author: "Élodie", rating: 5 },
];

const headerItems = [
  { label: "Histoire", href: "#header" },
  { label: "Sur-mesure", href: "#header" },
  { label: "Portfolio", href: "#header" },
  { label: "Contact", href: "#header" },
];
</script>

<template>
  <div class="guide">
    <header class="guide-bar">
      <NuxtLink class="guide-bar__title" to="/ComponentsGuide">ComponentsGuide</NuxtLink>
      <nav class="guide-nav" aria-label="Composants">
        <a v-for="[id, label] in sections" :key="id" :href="`#${id}`">{{ label }}</a>
      </nav>
      <NuxtLink class="guide-bar__home" to="/">Accueil</NuxtLink>
    </header>

    <main class="guide-main">
      <p class="guide-lead">
        Chaque bloc est le composant réel. Les liens des spécimens restent sur cette page.
        Les classes sont celles de <code>app/assets/css/components.css</code>.
      </p>

      <section id="logo" class="guide-block">
        <h2>Logo <code>UiLogo</code></h2>
        <div class="c-page guide-stage">
          <UiLogo href="#logo" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>lines</code> — lignes du mot, défaut « Sïa », « Na »</li>
          <li><code>href</code> — cible du lien</li>
        </ul>
        <p class="guide-classes"><code>c-brand</code></p>
      </section>

      <section id="icon-btn" class="guide-block">
        <h2>Bouton icône <code>UiIconBtn</code></h2>
        <div class="c-page guide-stage guide-row">
          <UiIconBtn label="Recherche" href="#icon-btn" icon="search" />
          <UiIconBtn label="Compte" href="#icon-btn" icon="account" />
          <UiIconBtn label="Panier" href="#icon-btn" icon="bag" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>label</code> — nom accessible</li>
          <li><code>href</code> — cible</li>
          <li><code>icon</code> — <code>search</code>, <code>account</code> ou <code>bag</code></li>
        </ul>
        <p class="guide-classes"><code>c-icon-btn</code></p>
      </section>

      <section id="btn" class="guide-block">
        <h2>Bouton <code>UiBtn</code></h2>
        <div class="c-page guide-stage guide-row">
          <UiBtn label="Soft" href="#btn" variant="soft" />
          <UiBtn label="Primary" href="#btn" variant="primary" />
          <UiBtn label="Light" href="#btn" variant="light" />
          <UiBtn label="Inverse" href="#btn" variant="inverse" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>label</code> — libellé</li>
          <li><code>href</code> — si présent, le bouton est un lien</li>
          <li><code>type</code> — <code>button</code> ou <code>submit</code></li>
          <li><code>variant</code> — <code>soft</code>, <code>primary</code>, <code>light</code>, <code>inverse</code></li>
        </ul>
        <p class="guide-classes"><code>c-btn</code> <code>c-btn-soft</code> <code>c-btn-primary</code> <code>c-btn-light</code> <code>c-btn-inverse</code></p>
      </section>

      <section id="field" class="guide-block">
        <h2>Champ <code>UiField</code></h2>
        <div class="c-page guide-stage">
          <UiField
            v-model="email"
            name="guide-courriel"
            type="email"
            label="Adresse e-mail"
            placeholder="Votre adresse e-mail"
            required
          />
          <p class="guide-value">Valeur : {{ email || "—" }}</p>
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>name</code> — nom et id</li>
          <li><code>type</code> — type du champ</li>
          <li><code>label</code> — nom accessible</li>
          <li><code>placeholder</code></li>
          <li><code>required</code></li>
          <li><code>modelValue</code> — texte saisi</li>
        </ul>
        <p class="guide-classes"><code>c-field</code></p>
      </section>

      <section id="header" class="guide-block">
        <h2>En-tête <code>UiHeader</code></h2>
        <div class="c-page">
          <UiHeader :items="headerItems" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>items</code> — <code>{ label, href }[]</code></li>
          <li><code>tools</code> — <code>{ label, href, icon }[]</code></li>
        </ul>
        <p class="guide-classes"><code>c-header</code> <code>c-nav</code> <code>c-nav-link</code> <code>c-tools</code> <code>c-brand</code> <code>c-icon-btn</code></p>
      </section>

      <section id="hero" class="guide-block">
        <h2>Hero <code>UiHero</code></h2>
        <div class="c-page">
          <UiHero
            :image="photo"
            kicker="Bijoux & talismans"
            :title="['Transmission', 'Héritage', 'Joaillerie &', 'Pierres précieuses']"
            lead="Des bijoux porteurs de sens, inspirés par la nature, les pierres précieuses et les histoires qui vous relient."
            :cta="{ label: 'Découvrir l’univers', href: '#hero' }"
          />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>image</code> — photo, recadrée en plein cadre par défaut</li>
          <li><code>imageDesktop</code> <code>imageMobile</code> — photo selon la largeur, seuil 860px</li>
          <li><code>bgImage</code> — son bord gauche est étiré en fond</li>
          <li><code>bgColor</code> — couleur de repli du fond</li>
          <li><code>imageWhole</code> — affiche la photo en entier, à l’opposé du texte</li>
          <li><code>fill</code> — couleur du reste du bloc quand <code>imageWhole</code> est actif et que <code>bgColor</code> est absent. Le texte reste crème</li>
          <li><code>kicker</code> <code>title</code> <code>lead</code></li>
          <li><code>cta</code> — <code>{ label, href }</code>, variante soft</li>
        </ul>
        <p class="guide-classes"><code>c-hero</code> <code>c-hero-whole</code> <code>c-hero-wall</code> <code>c-hero-copy</code> <code>c-hero-title</code> <code>c-brand</code> <code>c-kicker</code> <code>c-lead</code> <code>c-btn</code> <code>c-btn-soft</code></p>
      </section>

      <section id="values" class="guide-block">
        <h2>Repères <code>UiValues</code></h2>
        <div class="c-page">
          <UiValues :items="values" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>items</code> — <code>{ icon, label }[]</code>, <code>label</code> est une liste de lignes</li>
        </ul>
        <p class="guide-classes"><code>c-values</code> <code>c-value</code> <code>c-label</code></p>
      </section>

      <section id="section-intro" class="guide-block">
        <h2>Intro <code>UiSectionIntro</code></h2>
        <div class="c-page guide-stage">
          <UiSectionIntro
            kicker="Collections"
            title="Des bijoux qui racontent une histoire"
            lead="Chaque création est pensée comme un talisman."
            :cta="{ label: 'Découvrir les collections', href: '#section-intro', variant: 'primary' }"
          />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>kicker</code> <code>title</code> <code>lead</code> — le chapô et le kicker sont optionnels</li>
          <li><code>cta</code> — <code>{ label, href, variant }</code>, optionnel</li>
        </ul>
        <p class="guide-classes"><code>c-section-head</code> <code>c-kicker</code> <code>c-title</code> <code>c-lead</code> <code>c-btn</code> <code>c-btn-primary</code></p>
      </section>

      <section id="cards" class="guide-block">
        <h2>Cartes <code>UiCards</code></h2>
        <div class="c-page">
          <UiCards :items="cards" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>items</code> — <code>{ id, image, position, title, href, label }[]</code></li>
        </ul>
        <p class="guide-classes"><code>c-cards</code> <code>c-card</code> <code>c-card-title</code> <code>c-btn</code> <code>c-btn-light</code></p>
      </section>

      <section id="split" class="guide-block">
        <h2>Bloc partagé <code>UiSplit</code></h2>
        <div class="c-page">
          <UiSplit
            :image="photo"
            image-label="Anaïs à l’établi"
            kicker="À propos"
            title="Une démarche sensible et authentique"
            lead="Sïana, c’est l’alliance de ma passion pour les pierres et de mon savoir de créatrice."
            :cta="{ label: 'En savoir plus', href: '#split', variant: 'primary' }"
          />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>image</code> <code>imageLabel</code></li>
          <li><code>kicker</code> <code>title</code> <code>lead</code></li>
          <li><code>cta</code> — <code>{ label, href, variant }</code></li>
        </ul>
        <p class="guide-classes"><code>c-split</code> <code>c-split-media</code> <code>c-split-copy</code> <code>c-kicker</code> <code>c-title</code> <code>c-lead</code> <code>c-btn</code> <code>c-btn-primary</code></p>
      </section>

      <section id="band" class="guide-block">
        <h2>Bandeau <code>UiBand</code></h2>
        <div class="c-page">
          <UiBand class="bg-creme text-terracotta" label="Repères" :items="marks" />
          <UiBand class="bg-terracotta text-creme" label="Façon" :items="steps" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>items</code> — <code>{ icon, label }[]</code>. <code>icon</code> est le nom d’un SVG de <code>assets/brand/icones</code> (<code>icone-soleil</code>, <code>icone-lune</code>, <code>icone-coeur</code>, <code>icone-points</code>, <code>icone-s</code>). <code>label</code> peut être une liste de lignes</li>
          <li><code>label</code> — nom accessible du bandeau</li>
          <li>classes de couleur sur la racine : <code>bg-creme</code> <code>text-terracotta</code>, ou <code>bg-terracotta</code> <code>text-creme</code></li>
        </ul>
        <p class="guide-classes"><code>c-band</code> <code>c-band-item</code> <code>c-band-icon</code> <code>bg-creme</code> <code>text-terracotta</code> <code>bg-terracotta</code> <code>text-creme</code></p>
      </section>

      <section id="quotes" class="guide-block">
        <h2>Citations <code>UiQuotes</code></h2>
        <div class="c-page">
          <UiQuotes :items="quotes" />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>items</code> — <code>{ text, author, rating }[]</code></li>
        </ul>
        <p class="guide-classes"><code>c-quotes</code> <code>c-quote</code> <code>c-quote-text</code> <code>c-stars</code> <code>c-quote-author</code></p>
      </section>

      <section id="newsletter" class="guide-block">
        <h2>Infolettre <code>UiNewsletter</code></h2>
        <div class="c-page">
          <UiNewsletter
            title="Rejoignez l’univers Sïana"
            lead="Recevez les nouveautés et les coulisses de l’atelier."
          />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>title</code> <code>lead</code></li>
          <li><code>submitLabel</code> — défaut « S’inscrire »</li>
        </ul>
        <p class="guide-classes"><code>c-newsletter</code> <code>c-newsletter-form</code> <code>c-title</code> <code>c-lead</code> <code>c-field</code> <code>c-btn</code> <code>c-btn-inverse</code></p>
      </section>

      <section id="footer" class="guide-block">
        <h2>Pied de page <code>UiFooter</code></h2>
        <div class="c-page">
          <UiFooter
            :columns="[
              {
                title: 'Liens rapides',
                links: [
                  { label: 'Histoire', href: '#footer' },
                  { label: 'À propos', href: '#footer' },
                ],
              },
              {
                title: 'Informations',
                links: [
                  { label: 'FAQ', href: '#footer' },
                  { label: 'Mentions légales', href: '#footer' },
                ],
              },
            ]"
          />
        </div>
        <h3>Inputs</h3>
        <ul>
          <li><code>blurb</code> — phrase sous la marque</li>
          <li><code>columns</code> — <code>{ title, links }[]</code></li>
          <li><code>contact</code> — courriel et téléphone</li>
        </ul>
        <p class="guide-classes"><code>c-footer</code> <code>c-footer-grid</code> <code>c-footer-title</code> <code>c-footer-link</code> <code>c-footer-legal</code> <code>c-brand</code> <code>c-lead</code></p>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.guide {
  min-height: 100dvh;
  background: var(--color-creme);
  color: var(--color-pourpre);
  font-family: var(--font-sans, Futura, "Futura PT", "Avenir Next", "Century Gothic", sans-serif);
}

.guide-bar {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.2rem;
  background: var(--color-pourpre);
  color: var(--color-creme);

  a {
    color: inherit;
    text-decoration: none;
  }
}

.guide-bar__title,
.guide-bar__home {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.guide-nav {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;
  font-size: 0.78rem;
}

.guide-main {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 4rem;
}

.guide-lead {
  max-width: 40rem;
  margin: 0 0 1.5rem;
}

.guide-block {
  scroll-margin-top: 6.5rem;
  margin: 0 0 2.4rem;

  h2 {
    margin: 0 0 0.8rem;
    font-family: var(--font-serif, Palatino, Georgia, serif);
    font-size: 1.6rem;
    font-weight: 500;
  }

  h3 {
    margin: 0.9rem 0 0.35rem;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  li {
    margin: 0.15rem 0;
  }

  code {
    font-family: "DM Mono", ui-monospace, monospace;
    font-size: 0.82em;
  }
}

.guide-stage {
  padding: 1.2rem;
}

.guide-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  align-items: center;
}

.guide-value {
  margin: 0.8rem 0 0;
}

.guide-classes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.8rem 0 0;

  code {
    padding: 0.15rem 0.4rem;
    background: var(--color-secondary);
  }
}
</style>
