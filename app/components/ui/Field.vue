<script setup>
defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
});

const value = defineModel({ type: String, default: "" });
</script>

<template>
  <input
    :id="name"
    v-model="value"
    class="c-field"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :aria-label="label"
  >
</template>
