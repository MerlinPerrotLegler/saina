<script setup>
import { isCurrentPath, mainNav } from "~/utils/nav";

const year = new Date().getFullYear();
const route = useRoute();

defineProps({
  blurb: {
    type: String,
    default: "Des bijoux imaginés pour raconter ce qui vous rend unique.",
  },
  columns: {
    type: Array,
    default: () => [
      {
        title: "Navigation",
        links: [...mainNav, { label: "Mariage", href: "/mariage" }],
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

function current(href) {
  return isCurrentPath(route.path, href);
}
</script>

<template>
  <footer class="c-footer">
    <div class="c-footer-grid">
      <div>
        <UiLogo />
        <p class="c-lead">{{ blurb }}</p>
      </div>
      <div v-for="column in columns" :key="column.title">
        <p class="c-footer-title">{{ column.title }}</p>
        <template v-for="link in column.links" :key="link.href">
          <a v-if="external(link.href)" class="c-footer-link" :href="link.href">{{ link.label }}</a>
          <NuxtLink
            v-else
            class="c-footer-link"
            :to="link.href"
            :aria-current="current(link.href) ? 'page' : undefined"
          >
            {{ link.label }}
          </NuxtLink>
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
