<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <div class="c-cards">
    <article
      v-for="item in items"
      :id="item.id"
      :key="item.title"
      class="c-card"
      :style="{
        '--c-card-image': `url('${item.image}')`,
        '--c-card-pos': item.position || 'center',
      }"
    >
      <h3 class="c-card-title">{{ item.title }}</h3>
      <UiBtn :label="item.label" :href="item.href" variant="light" />
    </article>
  </div>
</template>
