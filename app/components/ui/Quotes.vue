<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <div class="c-quotes">
    <blockquote v-for="item in items" :key="item.author" class="c-quote">
      <p class="c-quote-text">{{ item.text }}</p>
      <p class="c-stars" :aria-label="`${item.rating} sur 5`">{{ "★".repeat(item.rating) }}</p>
      <p class="c-quote-author">— {{ item.author }}</p>
    </blockquote>
  </div>
</template>
