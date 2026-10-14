<script setup>
defineProps({
  image: { type: String, required: true },
  kicker: { type: String, required: true },
  title: { type: Array, required: true },
  lead: { type: String, required: true },
  cta: { type: Object, required: true },
});
</script>

<template>
  <section class="c-hero" :style="{ '--c-hero-image': `url('${image}')` }">
    <div class="c-hero-copy">
      <UiLogo />
      <p class="c-kicker">{{ kicker }}</p>
      <h1 class="c-hero-title">
        <template v-for="(line, index) in title" :key="line">
          <br v-if="index">{{ line }}
        </template>
      </h1>
      <p class="c-lead">{{ lead }}</p>
      <UiBtn :label="cta.label" :href="cta.href" variant="soft" />
    </div>
  </section>
</template>
