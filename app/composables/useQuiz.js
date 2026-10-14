import { isEmail, isValidDate } from "#shared/utils/fields";
import { questions, scoreQuiz, stones, STYLE_IDS, trackQuiz } from "#shared/utils/quiz";

const STORAGE_KEY = "siana-quiz-v1";

export function useQuiz() {
  const route = useRoute();
  const router = useRouter();
  const answers = ref(Array(9).fill(null));
  const labels = ref(Array(9).fill(null));
  const form = reactive({ prenom: "", nom: "", email: "", date: "" });
  const societe = ref("");
  const fieldErrors = reactive({ prenom: "", nom: "", email: "", date: "" });
  const choiceError = ref("");
  const saveError = ref(false);
  const submitted = ref(false);
  const delivered = ref(false);
  const pending = ref(false);
  const ready = ref(false);
  const formStarted = ref(false);
  const seen = new Set();

  const etape = computed(() => {
    const value = route.query.etape;
    const raw = Array.isArray(value) ? value[0] : value;
    return raw || "intro";
  });
  const questionIndex = computed(() => Number(etape.value) - 1);
  const styleId = computed(() => scoreQuiz(answers.value));

  function once(name, detail = {}) {
    const key = `${name}:${JSON.stringify(detail)}`;
    if (seen.has(key)) return;
    seen.add(key);
    trackQuiz(name, detail);
  }

  function persist() {
    if (!import.meta.client || !ready.value) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      answers: answers.value,
      labels: labels.value,
      form: {
        prenom: form.prenom,
        nom: form.nom,
        email: form.email,
        date: form.date,
      },
      submitted: submitted.value,
      delivered: delivered.value,
    }));
  }

  function restore() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (Array.isArray(data.answers) && data.answers.length === 9) {
        answers.value = data.answers.map((item) => (STYLE_IDS.includes(item) ? item : null));
      }
      if (Array.isArray(data.labels) && data.labels.length === 9) {
        labels.value = data.labels.map((item) => (typeof item === "string" ? item : null));
      }
      if (data.form && typeof data.form === "object") {
        form.prenom = String(data.form.prenom || "").slice(0, 80);
        form.nom = String(data.form.nom || "").slice(0, 80);
        form.email = String(data.form.email || "").slice(0, 200);
        form.date = String(data.form.date || "").slice(0, 10);
      }
      submitted.value = Boolean(data.submitted);
      delivered.value = Boolean(data.delivered);
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function formValid() {
    return form.prenom.trim()
      && form.nom.trim()
      && isEmail(form.email)
      && isValidDate(form.date);
  }

  function firstMissing() {
    return answers.value.findIndex((answer) => !answer);
  }

  function ensureStep() {
    const step = etape.value;
    const known = step === "intro" || step === "coordonnees" || step === "resultat" || /^[1-9]$/.test(step);
    if (!known) {
      router.replace({ path: "/sur-mesure" });
      return;
    }
    const missing = firstMissing();
    if ((step === "coordonnees" || step === "resultat") && missing !== -1) {
      router.replace({ query: { etape: String(missing + 1) } });
      return;
    }
    if (step === "resultat" && (!submitted.value || !formValid())) {
      submitted.value = false;
      router.replace({ query: { etape: "coordonnees" } });
    }
  }

  function noteStep(step) {
    if (step === "intro") once("affichage");
    else if (/^[1-9]$/.test(step)) {
      once("demarrage");
      once("progression", { question: Number(step) });
      if (step === "9") once("question-pierre");
    } else if (step === "coordonnees") once("formulaire");
    else if (step === "resultat") once("resultat", { style: styleId.value });
  }

  function focusStep() {
    const target = document.getElementById("quiz-question") || document.getElementById("quiz-title");
    target?.focus();
  }

  function setAnswer(index, style, label) {
    const nextAnswers = answers.value.slice();
    const nextLabels = labels.value.slice();
    nextAnswers[index] = style;
    nextLabels[index] = label;
    answers.value = nextAnswers;
    labels.value = nextLabels;
    choiceError.value = "";
    trackQuiz("reponse", { question: index + 1, style });
  }

  function continueQuestion() {
    const index = questionIndex.value;
    if (!answers.value[index]) {
      choiceError.value = "Choisissez une réponse pour continuer.";
      return;
    }
    const next = index === 8 ? "coordonnees" : String(index + 2);
    router.push({ query: { etape: next } });
  }

  function markFormStarted() {
    if (formStarted.value) return;
    formStarted.value = true;
    trackQuiz("formulaire-commence");
  }

  function validateForm() {
    fieldErrors.prenom = form.prenom.trim() ? "" : "Indiquez votre prénom.";
    fieldErrors.nom = form.nom.trim() ? "" : "Indiquez votre nom.";
    fieldErrors.email = isEmail(form.email) ? "" : "Indiquez une adresse e-mail valide.";
    fieldErrors.date = isValidDate(form.date) ? "" : "Indiquez une date valide.";
    return !fieldErrors.prenom && !fieldErrors.nom && !fieldErrors.email && !fieldErrors.date;
  }

  async function deliver() {
    saveError.value = false;
    try {
      await $fetch("/api/quiz", {
        method: "POST",
        body: {
          prenom: form.prenom.trim(),
          nom: form.nom.trim(),
          email: form.email.trim(),
          date: form.date,
          answers: answers.value,
          societe: societe.value,
        },
      });
      delivered.value = true;
    } catch {
      saveError.value = true;
    }
  }

  async function submitForm() {
    if (pending.value) return;
    if (!validateForm()) return;
    if (submitted.value && delivered.value) {
      await router.push({ query: { etape: "resultat" } });
      return;
    }
    pending.value = true;
    try {
      submitted.value = true;
      once("formulaire-valide");
      await deliver();
      await router.push({ query: { etape: "resultat" } });
    } finally {
      pending.value = false;
    }
  }

  async function retryDelivery() {
    if (pending.value || delivered.value) return;
    pending.value = true;
    try {
      await deliver();
    } finally {
      pending.value = false;
    }
  }

  function previousHref() {
    const step = etape.value;
    if (step === "1") return "/sur-mesure";
    if (step === "coordonnees") return "/sur-mesure?etape=9";
    if (/^[2-9]$/.test(step)) return `/sur-mesure?etape=${Number(step) - 1}`;
    return "/sur-mesure";
  }

  function goBack() {
    router.push(previousHref());
  }

  onMounted(() => {
    restore();
    if (submitted.value && !formValid()) submitted.value = false;
    ready.value = true;
    ensureStep();
    noteStep(etape.value);
  });

  watch([answers, labels, submitted, delivered], persist);
  watch(() => [form.prenom, form.nom, form.email, form.date], persist);

  watch(etape, async (step, previous) => {
    if (!ready.value || step === previous) return;
    choiceError.value = "";
    ensureStep();
    noteStep(step);
    await nextTick();
    focusStep();
  });

  const options = computed(() => {
    if (etape.value === "9") return stones;
    if (/^[1-8]$/.test(etape.value)) return questions[questionIndex.value].options;
    return [];
  });

  const prompt = computed(() => {
    if (etape.value === "9") return "Si tu étais une pierre, quelle serait ta couleur ?";
    if (/^[1-8]$/.test(etape.value)) return questions[questionIndex.value].prompt;
    return "";
  });

  return {
    answers,
    labels,
    form,
    societe,
    fieldErrors,
    choiceError,
    saveError,
    submitted,
    delivered,
    pending,
    ready,
    etape,
    questionIndex,
    styleId,
    options,
    prompt,
    setAnswer,
    continueQuestion,
    markFormStarted,
    submitForm,
    retryDelivery,
    previousHref,
    goBack,
  };
}
