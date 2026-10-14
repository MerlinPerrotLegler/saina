import { dateError, emailError, isValidDate } from "#shared/utils/fields";
import {
  questions,
  quizDestination,
  scoreQuiz,
  stepFromPath,
  stones,
  stylesFor,
  trackQuiz,
} from "#shared/utils/quiz";

const STORAGE_KEY = "siana-quiz-v2";

export function useQuiz() {
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig();
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

  const etape = computed(() => stepFromPath(route.path));
  const questionIndex = computed(() => (/^[1-9]$/.test(etape.value) ? Number(etape.value) - 1 : -1));
  const styles = computed(() => stylesFor(labels.value));
  const styleId = computed(() => (styles.value.every(Boolean) ? scoreQuiz(styles.value) : ""));
  const appointmentUrl = computed(() => String(config.public.appointmentUrl || ""));

  function formOk() {
    return Boolean(form.prenom.trim() && form.nom.trim() && !emailError(form.email) && isValidDate(form.date));
  }

  function persist() {
    if (!import.meta.client || !ready.value) return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
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
      if (Array.isArray(data.labels)) {
        const known = new Set(
          [...questions.flatMap((question) => question.options), ...stones].map((option) => option.label),
        );
        labels.value = Array.from({ length: 9 }, (_, index) => {
          const label = data.labels[index];
          return typeof label === "string" && known.has(label) ? label : null;
        });
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

  async function ensureStep() {
    const target = quizDestination(route.path, {
      labels: labels.value,
      submitted: submitted.value,
      formOk: formOk(),
    });
    if (!target || target === route.path) return;
    await router.replace(target);
  }

  function noteStep(step) {
    if (step === "intro") trackQuiz("quiz_view");
    else if (/^[1-9]$/.test(step)) trackQuiz("quiz_progress", { question: Number(step) });
    else if (step === "coordonnees") trackQuiz("quiz_form_view");
    else if (step === "resultat" && styleId.value) trackQuiz("quiz_result", { style: styleId.value });
  }

  function focusStep() {
    const target = choiceError.value
      ? document.getElementById("quiz-choice-error")
      : document.getElementById("quiz-title");
    target?.focus();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    target?.scrollIntoView({ block: "start", behavior: motion });
  }

  function setAnswer(index, label) {
    const next = labels.value.slice();
    next[index] = label;
    labels.value = next;
    choiceError.value = "";
  }

  function startQuiz() {
    trackQuiz("quiz_start");
    router.push("/quiz/question/1");
  }

  async function continueQuestion() {
    const index = questionIndex.value;
    if (!labels.value[index]) {
      choiceError.value = "Choisissez une réponse pour continuer.";
      await nextTick();
      document.getElementById("quiz-choice-error")?.focus();
      return;
    }
    trackQuiz("quiz_answer", {
      question: index + 1,
      choice: labels.value[index],
      style: styles.value[index],
    });
    const next = index === 8 ? "/quiz/coordonnees" : `/quiz/question/${index + 2}`;
    await router.push(next);
  }

  function markFormStarted() {
    if (formStarted.value) return;
    formStarted.value = true;
    trackQuiz("quiz_form_start");
  }

  function validateForm() {
    fieldErrors.prenom = form.prenom.trim() ? "" : "Indiquez votre prénom.";
    fieldErrors.nom = form.nom.trim() ? "" : "Indiquez votre nom.";
    fieldErrors.email = emailError(form.email);
    fieldErrors.date = dateError(form.date);
    return !fieldErrors.prenom && !fieldErrors.nom && !fieldErrors.email && !fieldErrors.date;
  }

  async function deliver() {
    saveError.value = false;
    try {
      const response = await $fetch("/api/quiz", {
        method: "POST",
        body: {
          prenom: form.prenom.trim(),
          nom: form.nom.trim(),
          email: form.email.trim(),
          date: form.date,
          answers: labels.value,
          societe: societe.value,
        },
      });
      if (response?.style && response.style !== styleId.value) {
        saveError.value = true;
        return;
      }
      delivered.value = true;
    } catch {
      saveError.value = true;
    }
  }

  async function submitForm() {
    if (pending.value) return;
    if (!validateForm()) return;
    if (styles.value.some((style) => !style)) return;
    if (submitted.value && delivered.value) {
      await router.replace(`/quiz/resultat/${styleId.value}`);
      return;
    }
    pending.value = true;
    try {
      submitted.value = true;
      trackQuiz("quiz_form_submit", { style: styleId.value });
      await deliver();
      await router.replace(`/quiz/resultat/${styleId.value}`);
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

  function goBack() {
    const step = etape.value;
    if (step === "1") router.push("/quiz");
    else if (step === "coordonnees") router.push("/quiz/question/9");
    else if (/^[2-9]$/.test(step)) router.push(`/quiz/question/${Number(step) - 1}`);
  }

  function trackAppointment() {
    trackQuiz("quiz_cta_appointment", { style: styleId.value });
  }

  onMounted(async () => {
    restore();
    if (submitted.value && !formOk()) submitted.value = false;
    await ensureStep();
    ready.value = true;
    noteStep(etape.value);
    await nextTick();
    focusStep();
  });

  watch([labels, submitted, delivered], persist);
  watch(() => [form.prenom, form.nom, form.email, form.date], persist);

  watch(etape, async (step, previous) => {
    if (!ready.value || step === previous) return;
    choiceError.value = "";
    await ensureStep();
    noteStep(etape.value);
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
    labels,
    form,
    societe,
    fieldErrors,
    choiceError,
    saveError,
    submitted,
    pending,
    ready,
    etape,
    questionIndex,
    styleId,
    appointmentUrl,
    options,
    prompt,
    setAnswer,
    startQuiz,
    continueQuestion,
    markFormStarted,
    submitForm,
    retryDelivery,
    goBack,
    trackAppointment,
  };
}
