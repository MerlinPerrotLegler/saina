<script setup>
defineProps({
  label: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>

<template>
  <NuxtLink class="c-icon-btn" :to="href" :aria-label="label">
    <svg v-if="icon === 'search'" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M16 16l5 5" fill="none" stroke="currentColor" stroke-width="1.6" />
    </svg>
    <svg v-else-if="icon === 'account'" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M5 19c1.4-3 3.8-4.2 7-4.2S17.6 16 19 19" fill="none" stroke="currentColor" stroke-width="1.6" />
    </svg>
    <svg v-else viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12l-1 11H7L6 8z" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" stroke-width="1.6" />
    </svg>
  </NuxtLink>
</template>
