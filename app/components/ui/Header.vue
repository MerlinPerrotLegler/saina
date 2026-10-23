<script setup>
import { isCurrentPath, mainNav } from "~/utils/nav";

defineProps({
  items: {
    type: Array,
    default: () => mainNav,
  },
  tools: {
    type: Array,
    default: () => [],
  },
});

const route = useRoute();

function current(href) {
  return isCurrentPath(route.path, href);
}
</script>

<template>
  <header class="c-header">
    <div class="c-container c-header-inner">
    <UiLogo mark />
    <nav class="c-nav" aria-label="Principal">
      <NuxtLink
        v-for="item in items"
        :key="item.href"
        class="c-nav-link"
        :to="item.href"
        :aria-current="current(item.href) ? 'page' : undefined"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <div v-if="tools.length" class="c-tools">
      <UiIconBtn
        v-for="tool in tools"
        :key="tool.icon"
        :label="tool.label"
        :href="tool.href"
        :icon="tool.icon"
      />
    </div>
    </div>
  </header>
</template>
