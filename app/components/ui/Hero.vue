<script setup>
const props = defineProps({
  image: { type: String, default: "" },
  imageDesktop: { type: String, default: "" },
  imageMobile: { type: String, default: "" },
  bgImage: { type: String, default: "" },
  bgColor: { type: String, default: "" },
  imageLabel: { type: String, default: "" },
  imagePosition: { type: String, default: "center" },
  imageWhole: { type: Boolean, default: false },
  fill: { type: String, default: "" },
  kicker: { type: String, required: true },
  title: { type: Array, required: true },
  lead: { type: String, required: true },
  cta: { type: Object, required: true },
});

const photoSrc = computed(() => props.imageDesktop || props.image);

const heroStyle = computed(() => {
  const style = {};
  if (props.imageWhole && props.fill) style["--c-hero-fill"] = props.fill;
  if (props.bgColor) style["--c-hero-bg"] = props.bgColor;
  return Object.keys(style).length ? style : undefined;
});

const photoStyle = computed(() => (
  props.imageWhole ? undefined : { objectPosition: props.imagePosition }
));

onMounted(() => {
  if (!props.bgImage || document.getElementById("c-hero-wall-style")) return;
  const style = document.createElement("style");
  style.id = "c-hero-wall-style";
  style.textContent = [
    '.c-hero-wall img { filter: url("#c-hero-wall-x"); }',
    "@media (max-width: 860px) {",
    '.c-hero-wall img { filter: url("#c-hero-wall-y"); }',
    "}",
  ].join("\n");
  document.head.appendChild(style);
});
</script>

<template>
  <section class="c-hero" :class="{ 'c-hero-whole': imageWhole }" :style="heroStyle">
    <div v-if="bgImage" class="c-hero-wall" aria-hidden="true">
      <svg class="c-hero-wall-filter" width="0" height="0">
        <filter id="c-hero-wall-x" color-interpolation-filters="sRGB" x="0" y="-5%" width="100%" height="110%">
          <feGaussianBlur stdDeviation="0 8" />
        </filter>
        <filter id="c-hero-wall-y" color-interpolation-filters="sRGB" x="-5%" y="0" width="110%" height="100%">
          <feGaussianBlur stdDeviation="8 0" />
        </filter>
      </svg>
      <picture>
        <source v-if="imageMobile" media="(max-width: 860px)" :srcset="imageMobile">
        <img :src="bgImage" alt="">
      </picture>
    </div>
    <picture class="c-hero-photo">
      <source
        v-if="imageMobile"
        media="(max-width: 860px)"
        :srcset="imageMobile"
      >
      <img
        :src="photoSrc"
        :alt="imageLabel"
        :style="photoStyle"
        width="1066"
        height="1600"
        decoding="async"
      >
    </picture>
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
