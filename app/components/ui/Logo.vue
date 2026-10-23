<script setup>
defineProps({
  lines: {
    type: Array,
    default: () => ["Sïa", "Na"],
  },
  href: {
    type: String,
    default: "/",
  },
  mark: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink v-if="mark" class="c-brand c-brand-mark" :to="href" aria-label="Sïana">
    <BrandSvg name="icone-logo" />
  </NuxtLink>
  <NuxtLink v-else class="c-brand" :to="href">
    <template v-for="(line, index) in lines" :key="line">
      <br v-if="index">{{ line }}
    </template>
  </NuxtLink>
</template>
