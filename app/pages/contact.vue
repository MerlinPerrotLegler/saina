<script setup>
import { styleLabels } from "#shared/utils/quiz";

useHead({
  title: "Contact — Sïana Joaillerie",
  meta: [
    {
      name: "description",
      content: "Écrire à Anaïs pour un bijou sur mesure : une idée, quelques images, un souvenir, ou simplement une envie.",
    },
  ],
});

const route = useRoute();
const config = useRuntimeConfig();
const siteKey = computed(() => config.public.turnstileSiteKey || "");

const form = reactive({
  prenom: "",
  nom: "",
  email: "",
  message: "",
  societe: "",
});
const errors = reactive({ prenom: "", nom: "", email: "", message: "" });
const formError = ref("");
const pending = ref(false);
const sent = ref(false);
const token = ref("");
const widgetFailed = ref(false);
let widgetId = "";

const style = computed(() => {
  const value = route.query.style;
  const raw = Array.isArray(value) ? value[0] : value;
  return styleLabels[raw] ? raw : "";
});

watch(style, (value) => {
  if (!value || form.message) return;
  form.message = `Mon style de bijou est ${styleLabels[value]}. J’aimerais en parler avec vous.`;
}, { immediate: true });

const captchaOn = computed(() => Boolean(siteKey.value) && !widgetFailed.value);

function renderWidget() {
  const turnstile = window.turnstile;
  const node = document.getElementById("turnstile");
  if (!turnstile || !node || widgetId) return;
  widgetId = turnstile.render(node, {
    sitekey: siteKey.value,
    language: "fr",
    theme: "light",
    callback: (value) => {
      token.value = value;
    },
    "expired-callback": () => {
      token.value = "";
    },
    "error-callback": () => {
      widgetFailed.value = true;
      token.value = "";
    },
  });
}

function loadTurnstile() {
  if (!siteKey.value) return;
  if (window.turnstile) {
    renderWidget();
    return;
  }
  const existing = document.querySelector("script[data-turnstile]");
  if (existing) {
    existing.addEventListener("load", renderWidget, { once: true });
    existing.addEventListener("error", () => {
      widgetFailed.value = true;
    }, { once: true });
    return;
  }
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.dataset.turnstile = "1";
  script.addEventListener("load", renderWidget, { once: true });
  script.addEventListener("error", () => {
    widgetFailed.value = true;
  }, { once: true });
  document.head.appendChild(script);
}

onMounted(() => {
  nextTick(loadTurnstile);
});

onBeforeUnmount(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
});

function applyErrors(next) {
  errors.prenom = next?.prenom || "";
  errors.nom = next?.nom || "";
  errors.email = next?.email || "";
  errors.message = next?.message || "";
}

async function onSubmit() {
  if (pending.value) return;
  formError.value = "";
  applyErrors({});
  if (captchaOn.value && !token.value) {
    formError.value = "Confirmez la vérification avant d’envoyer.";
    return;
  }
  pending.value = true;
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        prenom: form.prenom,
        nom: form.nom,
        email: form.email,
        message: form.message,
        societe: form.societe,
        token: token.value,
        captchaUnavailable: widgetFailed.value,
      },
    });
    sent.value = true;
    useNuxtApp().$track?.("contact_submit");
  } catch (error) {
    const payload = error?.data || {};
    const fieldErrors = payload.data?.errors || payload.errors;
    if (fieldErrors) applyErrors(fieldErrors);
    else formError.value = payload.statusMessage || error?.statusMessage || "L’envoi n’a pas abouti. Réessayez.";
    if (widgetId && window.turnstile) {
      token.value = "";
      window.turnstile.reset(widgetId);
    }
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <div class="c-sheet">
    <div class="c-contact">
    <div class="c-sheet-narrow">
      <header class="c-sheet-intro">
        <p class="c-kicker">Contact</p>
        <h1 class="c-title">Écrire à Anaïs</h1>
        <p class="c-lead">
          Une idée très précise, quelques images, un souvenir, une envie… ou simplement l’intuition de vouloir un bijou différent.
        </p>
      </header>

      <p v-if="sent" class="c-lead" role="status">Votre message est bien arrivé. Anaïs vous répondra.</p>

      <form v-else class="c-form" novalidate @submit.prevent="onSubmit">
        <UiField
          v-model="form.prenom"
          name="contact-prenom"
          label="Prénom"
          autocomplete="given-name"
          show-label
          required
          :error="errors.prenom"
        />
        <UiField
          v-model="form.nom"
          name="contact-nom"
          label="Nom"
          autocomplete="family-name"
          show-label
          required
          :error="errors.nom"
        />
        <UiField
          v-model="form.email"
          name="contact-email"
          type="email"
          label="Adresse e-mail"
          autocomplete="email"
          show-label
          required
          :error="errors.email"
        />
        <UiField
          v-model="form.message"
          name="contact-message"
          label="Message"
          multiline
          show-label
          required
          :error="errors.message"
        />
        <p v-if="widgetFailed" class="c-fine">
          La vérification Cloudflare est indisponible. Vous pouvez tout de même envoyer votre message.
        </p>
        <div v-else-if="siteKey" id="turnstile" class="c-turnstile" />
        <div class="c-hp" hidden>
          <label>
            Société
            <input v-model="form.societe" name="societe" tabindex="-1" autocomplete="off">
          </label>
        </div>
        <p class="c-fine">
          Votre message est lu par Anaïs pour vous répondre. L’adresse n’est pas utilisée pour une infolettre.
        </p>
        <p v-if="formError" class="c-field-error" role="alert">{{ formError }}</p>
        <UiBtn :label="pending ? 'Envoi…' : 'Envoyer'" type="submit" :disabled="pending" />
      </form>
    </div>
    <figure class="c-contact-photo">
      <img
        src="/brand/photo-anais-full.jpeg"
        alt="Anaïs assise, fondatrice de Sïana"
        width="1200"
        height="1600"
      >
    </figure>
    </div>
  </div>
</template>
