<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <section class="c-values" aria-label="Repères">
    <article v-for="item in items" :key="item.icon" class="c-value">
      <BrandSvg :name="item.icon" />
      <p class="c-label">
        <template v-for="(line, index) in item.label" :key="line">
          <br v-if="index">{{ line }}
        </template>
      </p>
    </article>
  </section>
</template>
