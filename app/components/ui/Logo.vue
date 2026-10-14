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
});
</script>

<template>
  <NuxtLink class="c-brand" :to="href">
    <template v-for="(line, index) in lines" :key="line">
      <br v-if="index">{{ line }}
    </template>
  </NuxtLink>
</template>
