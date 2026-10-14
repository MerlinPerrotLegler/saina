<script setup>
defineProps({
  image: { type: String, required: true },
  imageLabel: { type: String, default: "" },
  imagePosition: { type: String, default: "center" },
  kicker: { type: String, required: true },
  title: { type: Array, required: true },
  lead: { type: String, required: true },
  cta: { type: Object, required: true },
});
</script>

<template>
  <section class="c-hero">
    <img
      class="c-hero-photo"
      :src="image"
      :alt="imageLabel"
      :style="{ objectPosition: imagePosition }"
      width="1066"
      height="1600"
      decoding="async"
    >
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
