<script setup>
useHead({
  title: "Rendez-vous confirmé — Sïana Joaillerie",
  meta: [
    {
      name: "description",
      content: "Votre rendez-vous avec Anaïs est bien enregistré. Un e-mail de confirmation vous a été envoyé.",
    },
    { name: "robots", content: "noindex" },
  ],
});

const { $track } = useNuxtApp();

onMounted(() => {
  $track?.("appointment_booked");
});
</script>

<template>
  <div class="c-sheet">
    <div class="c-container c-container-prose">
    <div class="c-sheet-narrow">
      <header class="c-sheet-intro">
        <p class="c-kicker">Rendez-vous</p>
        <h1 class="c-title">C’est noté</h1>
        <p class="c-lead" role="status">
          Votre rendez-vous est confirmé. Un e-mail avec le lien de visioconférence vous a été envoyé. À bientôt.
        </p>
      </header>
      <UiBtn label="Retour à l’accueil" href="/" />
    </div>
    </div>
  </div>
</template>
