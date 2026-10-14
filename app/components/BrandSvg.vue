<script setup>
/**
 * @glossary [[siana]]
 * Un SVG de assets/brand, coloré par currentColor / --primary / --secondary.
 */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const files = import.meta.glob("../../assets/brand/**/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const html = computed(() => {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`/${props.name}.svg`));
  if (!entry) return "";
  return String(entry[1])
    .replace(/\sstyle="[^"]*"/, "")
    .replace(/\sxmlns:xlink="[^"]*"/, "");
});
</script>

<template>
  <span class="c-mark" v-html="html" />
</template>

<style lang="scss">
.c-mark {
  display: block;
  line-height: 0;
  --primary: currentColor;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
