<script setup>
const year = new Date().getFullYear();

defineProps({
  blurb: {
    type: String,
    default: "Des bijoux porteurs de sens, inspirés par la nature, les pierres et les histoires qui nous relient.",
  },
  columns: {
    type: Array,
    default: () => [
      {
        title: "Liens rapides",
        links: [
          { label: "Histoire", href: "/#histoire" },
          { label: "L’univers", href: "/#univers" },
          { label: "Pierres", href: "/#bijoux" },
          { label: "Boutique", href: "/#boutiques" },
          { label: "À propos", href: "/a-propos" },
        ],
      },
      {
        title: "Informations",
        links: [
          { label: "FAQ", href: "/#faq" },
          { label: "Livraison", href: "/#livraison" },
          { label: "Retours", href: "/#retours" },
          { label: "Conditions générales", href: "/#conditions" },
          { label: "Mentions légales", href: "/#mentions" },
          { label: "Politique de confidentialité", href: "/#confidentialite" },
        ],
      },
    ],
  },
  contact: {
    type: Array,
    default: () => [
      { label: "anaisgrazzini@gmail.com", href: "mailto:anaisgrazzini@gmail.com" },
      { label: "+33 06 29 67 93 67", href: "tel:+33629679367" },
    ],
  },
});

function external(href) {
  return href.startsWith("mailto:") || href.startsWith("tel:");
}
</script>

<template>
  <footer id="contact" class="c-footer">
    <div class="c-footer-grid">
      <div>
        <UiLogo />
        <p class="c-lead">{{ blurb }}</p>
      </div>
      <div v-for="column in columns" :key="column.title">
        <p class="c-footer-title">{{ column.title }}</p>
        <template v-for="link in column.links" :key="link.href">
          <a v-if="external(link.href)" class="c-footer-link" :href="link.href">{{ link.label }}</a>
          <NuxtLink v-else class="c-footer-link" :to="link.href">{{ link.label }}</NuxtLink>
        </template>
      </div>
      <div>
        <p class="c-footer-title">Contact</p>
        <a
          v-for="link in contact"
          :key="link.href"
          class="c-footer-link"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
    <p class="c-footer-legal">
      <span>© {{ year }} Sïana — Tous droits réservés</span>
    </p>
  </footer>
</template>
