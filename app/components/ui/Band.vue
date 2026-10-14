<script setup>
const props = defineProps({
  items: { type: Array, required: true },
  label: { type: String, default: "Bandeau" },
});

function iconOf(index) {
  return props.items[index]?.icon ?? "";
}

function textOf(index) {
  const value = props.items[index]?.label ?? "";
  return Array.isArray(value) ? value.join("\n") : String(value);
}
</script>

<template>
  <section class="c-band" :aria-label="label">
    <UiBandIcon
      :icon1="iconOf(0)"
      :text1="textOf(0)"
      :icon2="iconOf(1)"
      :text2="textOf(1)"
      :icon3="iconOf(2)"
      :text3="textOf(2)"
      :icon4="iconOf(3)"
      :text4="textOf(3)"
    />
  </section>
</template>
