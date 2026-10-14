<script setup>
/** @spec [[fsd-quiz-style]] */
const route = useRoute();
const mariage = computed(() => route.path === "/mariage" || route.path.startsWith("/mariage/"));
const noindex = computed(() => /\/resultat\//.test(route.path));

useHead(() => ({
  title: mariage.value
    ? "Quel style de bijou pour votre mariage ? — Sïana"
    : "Quel style de bijou vous ressemble ? — Sïana",
  meta: [
    {
      name: "description",
      content: mariage.value
        ? "Quelques questions pour reconnaître le style de bijou de votre mariage, puis en parler avec Anaïs."
        : "Quelques questions pour découvrir l'univers joaillier qui vous correspond le mieux.",
    },
    ...(noindex.value ? [{ name: "robots", content: "noindex" }] : []),
  ],
}));
</script>

<template>
  <QuizFlow />
</template>
