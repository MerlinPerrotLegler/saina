<script setup>
const DEFAULT_APPOINTMENT_URL = "https://siana-joaillerie.systeme.io/calendrier";

useHead({
  title: "Rendez-vous — Sïana Joaillerie",
  meta: [
    {
      name: "description",
      content:
        "Réservez un échange en visio de 45 minutes avec Anaïs pour parler de votre projet de bijou sur mesure.",
    },
  ],
});

const config = useRuntimeConfig();
const appointmentUrl = computed(
  () => config.public.appointmentUrl || DEFAULT_APPOINTMENT_URL,
);

const { $track } = useNuxtApp();

function onMessage(event) {
  if (event.origin !== "https://siana-joaillerie.systeme.io") return;
  const raw = event.data?.event ?? event.data?.type ?? event.data?.name;
  const signal = typeof raw === "string" && raw.length <= 80 ? raw : "message";
  $track?.("appointment_signal", { signal });
}

onMounted(() => {
  $track?.("appointment_view");
  window.addEventListener("message", onMessage);
});

onBeforeUnmount(() => {
  window.removeEventListener("message", onMessage);
});
</script>

<template>
  <div class="c-sheet">
    <header class="c-sheet-intro">
      <p class="c-kicker">Rendez-vous</p>
      <h1 class="c-title">Réserver un échange avec Anaïs</h1>
      <p class="c-lead">
        Un appel en visioconférence pour parler de votre projet, de vos envies esthétiques, et voir comment Sïana peut vous accompagner.
      </p>
    </header>

    <div class="c-appointment">
      <iframe
        class="c-appointment-frame"
        :src="appointmentUrl"
        title="Calendrier de prise de rendez-vous Sïana Joaillerie"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-appointment {
  width: 100%;
  max-width: 56rem;
  margin-inline: auto;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-pourpre) 10%, transparent);
}

.c-appointment-frame {
  display: block;
  width: 100%;
  min-height: 56rem;
  height: 80vh;
  border: 0;
}
</style>
