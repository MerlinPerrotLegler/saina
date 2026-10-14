<script setup>
defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: false },
  error: { type: String, default: "" },
  multiline: { type: Boolean, default: false },
  showLabel: { type: Boolean, default: false },
  autocomplete: { type: String, default: "" },
});

const value = defineModel({ type: String, default: "" });
</script>

<template>
  <div class="c-field-wrap">
    <label v-if="showLabel" class="c-field-label" :for="name">{{ label }}</label>
    <textarea
      v-if="multiline"
      :id="name"
      v-model="value"
      class="c-field c-field-area"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete || undefined"
      :aria-label="showLabel ? undefined : label"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? `${name}-error` : undefined"
      rows="6"
    />
    <input
      v-else
      :id="name"
      v-model="value"
      class="c-field"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete || undefined"
      :aria-label="showLabel ? undefined : label"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? `${name}-error` : undefined"
    >
    <p v-if="error" :id="`${name}-error`" class="c-field-error" role="alert">{{ error }}</p>
  </div>
</template>
