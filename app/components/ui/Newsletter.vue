<script setup>
defineProps({
  title: { type: String, required: true },
  lead: { type: String, required: true },
  submitLabel: { type: String, default: "S’inscrire" },
});

const email = ref("");
const closed = ref(false);

function onSubmit() {
  closed.value = true;
}
</script>

<template>
  <section class="c-newsletter">
    <h2 class="c-title">{{ title }}</h2>
    <p class="c-lead">{{ lead }}</p>
    <form v-if="!closed" class="c-newsletter-form" @submit.prevent="onSubmit">
      <UiField
        v-model="email"
        name="courriel"
        type="email"
        label="Adresse e-mail"
        placeholder="Votre adresse e-mail"
        required
      />
      <UiBtn :label="submitLabel" type="submit" variant="inverse" />
    </form>
    <p v-else class="c-lead">L’inscription n’est pas encore ouverte.</p>
  </section>
</template>
