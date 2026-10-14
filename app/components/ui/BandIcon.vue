<script setup>
const props = defineProps({
  icon1: { type: String, required: true },
  text1: { type: String, required: true },
  icon2: { type: String, required: true },
  text2: { type: String, required: true },
  icon3: { type: String, required: true },
  text3: { type: String, required: true },
  icon4: { type: String, required: true },
  text4: { type: String, required: true },
});

const files = import.meta.glob("../../../assets/brand/icones/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const slots = computed(() => [
  { icon: props.icon1, text: props.text1 },
  { icon: props.icon2, text: props.text2 },
  { icon: props.icon3, text: props.text3 },
  { icon: props.icon4, text: props.text4 },
]);

function svg(name) {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`/${name}.svg`));
  if (!entry) return "";
  return String(entry[1])
    .replace(/\sstyle="[^"]*"/, "")
    .replace(/\sxmlns:xlink="[^"]*"/, "");
}

function linesOf(value) {
  return String(value).split("\n");
}
</script>

<template>
  <p v-for="(slot, index) in slots" :key="index" class="c-band-item">
    <span class="c-band-icon" v-html="svg(slot.icon)" />
    <span>
      <template v-for="(line, lineIndex) in linesOf(slot.text)" :key="lineIndex">
        <br v-if="lineIndex">{{ line }}
      </template>
    </span>
  </p>
</template>
