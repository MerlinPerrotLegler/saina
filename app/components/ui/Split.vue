<script setup>
defineProps({
  image: { type: String, required: true },
  imageLabel: { type: String, required: true },
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, required: true },
  cta: { type: Object, required: true },
});
</script>

<template>
  <section class="c-split">
    <div
      class="c-split-media"
      role="img"
      :aria-label="imageLabel"
      :style="{ '--c-split-image': `url('${image}')` }"
    />
    <div class="c-split-copy">
      <p class="c-kicker">{{ kicker }}</p>
      <h2 class="c-title">{{ title }}</h2>
      <p class="c-lead">{{ lead }}</p>
      <UiBtn :label="cta.label" :href="cta.href" :variant="cta.variant || 'primary'" />
    </div>
  </section>
</template>
