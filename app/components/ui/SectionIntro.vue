<script setup>
defineProps({
  kicker: { type: String, default: "" },
  title: { type: String, required: true },
  lead: { type: String, default: "" },
  cta: { type: Object, default: null },
});
</script>

<template>
  <div class="c-section-head">
    <p v-if="kicker" class="c-kicker">{{ kicker }}</p>
    <h2 class="c-title">{{ title }}</h2>
    <p v-if="lead" class="c-lead">{{ lead }}</p>
    <UiBtn
      v-if="cta"
      :label="cta.label"
      :href="cta.href"
      :variant="cta.variant || 'primary'"
    />
  </div>
</template>
