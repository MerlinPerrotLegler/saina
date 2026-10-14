<script setup>
/** @spec [[fsd-quiz-style]] */
const route = useRoute();
const noindex = computed(() => route.path.startsWith("/quiz/resultat"));

useHead(() => ({
  title: "Quel style de bijou vous ressemble ? — Sïana",
  meta: [
    {
      name: "description",
      content: "Quelques questions pour découvrir l'univers joaillier qui vous correspond le mieux.",
    },
    ...(noindex.value ? [{ name: "robots", content: "noindex" }] : []),
  ],
}));
</script>

<template>
  <QuizFlow />
</template>
