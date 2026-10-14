<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { label: "Histoire", href: "/#histoire" },
      { label: "Boutiques", href: "/#boutiques" },
      { label: "L’univers", href: "/#univers" },
      { label: "Bijoux", href: "/#bijoux" },
      { label: "Sur-mesure", href: "/#sur-mesure" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  tools: {
    type: Array,
    default: () => [
      { label: "Recherche", href: "/#recherche", icon: "search" },
      { label: "Compte", href: "/#compte", icon: "account" },
      { label: "Panier", href: "/#panier", icon: "bag" },
    ],
  },
});
</script>

<template>
  <header class="c-header">
    <UiLogo />
    <nav class="c-nav" aria-label="Principal">
      <NuxtLink
        v-for="item in items"
        :key="item.href"
        class="c-nav-link"
        :to="item.href"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <div class="c-tools">
      <UiIconBtn
        v-for="tool in tools"
        :key="tool.icon"
        :label="tool.label"
        :href="tool.href"
        :icon="tool.icon"
      />
    </div>
  </header>
</template>
