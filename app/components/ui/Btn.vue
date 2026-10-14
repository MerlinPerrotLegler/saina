<script setup>
defineProps({
  label: { type: String, required: true },
  href: { type: String, default: "" },
  type: { type: String, default: "button" },
  variant: { type: String, default: "primary" },
});
</script>

<template>
  <NuxtLink v-if="href" :to="href" :class="['c-btn', `c-btn-${variant}`]">
    {{ label }}
  </NuxtLink>
  <button v-else :type="type" :class="['c-btn', `c-btn-${variant}`]">
    {{ label }}
  </button>
</template>
