<script setup>
import { results, trackQuiz } from "#shared/utils/quiz";

const {
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
  options,
  prompt,
  setAnswer,
  continueQuestion,
  markFormStarted,
  submitForm,
  retryDelivery,
  goBack,
} = useQuiz();

const pageTitle = computed(() => {
  if (etape.value === "resultat" && ready.value) return results[styleId.value].title;
  if (etape.value === "coordonnees") return "Votre style est presque révélé…";
  if (/^[1-9]$/.test(etape.value)) return prompt.value;
  return "Quel style de bijou vous ressemble ?";
});

const resultHref = computed(() => `/contact?style=${styleId.value}`);

function chosen(option) {
  return labels.value[questionIndex.value] === option.label;
}
</script>

<template>
  <div class="c-sheet">
    <div class="c-quiz">
      <header class="c-sheet-intro">
        <p class="c-kicker">Sur-mesure</p>
        <p v-if="/^[1-9]$/.test(etape)" id="quiz-progress" class="c-kicker">Question {{ etape }} sur 9</p>
        <div
          v-if="/^[1-9]$/.test(etape)"
          class="c-progress"
          role="progressbar"
          aria-valuemin="1"
          aria-valuemax="9"
          :aria-valuenow="Number(etape)"
          :aria-valuetext="`Question ${etape} sur 9`"
          aria-labelledby="quiz-progress"
        >
          <span :style="{ width: `${(Number(etape) / 9) * 100}%` }" />
        </div>
        <h1 id="quiz-title" tabindex="-1" class="c-title">{{ pageTitle }}</h1>
        <p v-if="etape === 'intro'" class="c-lead">
          Quelques questions pour découvrir l’univers joaillier qui vous correspond le mieux.
          Répondez spontanément. Il n’y a pas de bonne ou de mauvaise réponse.
        </p>
        <p v-else-if="etape === 'coordonnees'" class="c-lead">
          Pour découvrir votre résultat et recevoir une expérience personnalisée autour de votre style joaillier, renseignez vos coordonnées.
        </p>
      </header>

      <div v-if="etape === 'intro'">
        <UiBtn label="Commencer le quiz" href="/sur-mesure?etape=1" />
      </div>

      <form
        v-else-if="ready && /^[1-9]$/.test(etape)"
        class="c-quiz-step"
        novalidate
        @submit.prevent="continueQuestion"
      >
        <fieldset class="c-quiz-fieldset" aria-labelledby="quiz-title">
          <div :class="etape === '9' ? 'c-stones' : 'c-choices'">
            <label
              v-for="option in options"
              :key="option.label"
              class="c-choice"
              :class="{ 'is-chosen': chosen(option) }"
            >
              <input
                class="c-choice-input"
                type="radio"
                :name="`question-${etape}`"
                :value="option.label"
                :checked="chosen(option)"
                @change="setAnswer(questionIndex, option.style, option.label)"
              >
              <span
                v-if="option.swatch"
                class="c-swatch"
                aria-hidden="true"
                :style="{ background: option.swatch }"
              />
              <span class="c-choice-copy">
                <span class="c-choice-name">{{ option.label }}</span>
                <span v-if="option.note" class="c-choice-note">{{ option.note }}</span>
              </span>
              <span v-if="chosen(option)" class="c-choice-state">Sélectionné</span>
            </label>
          </div>
        </fieldset>
        <p v-if="choiceError" class="c-field-error" role="alert">{{ choiceError }}</p>
        <div class="c-quiz-actions">
          <UiBtn label="Continuer" type="submit" />
          <button type="button" class="c-quiz-back" @click="goBack">Retour</button>
        </div>
      </form>

      <form
        v-else-if="ready && etape === 'coordonnees'"
        class="c-form c-quiz-step"
        novalidate
        @submit.prevent="submitForm"
        @focusin="markFormStarted"
      >
        <UiField
          v-model="form.prenom"
          name="prenom"
          label="Prénom"
          autocomplete="given-name"
          show-label
          required
          :error="fieldErrors.prenom"
        />
        <UiField
          v-model="form.nom"
          name="nom"
          label="Nom"
          autocomplete="family-name"
          show-label
          required
          :error="fieldErrors.nom"
        />
        <UiField
          v-model="form.email"
          name="email"
          type="email"
          label="Adresse e-mail"
          autocomplete="email"
          show-label
          required
          :error="fieldErrors.email"
        />
        <UiField
          v-model="form.date"
          name="date"
          type="date"
          label="Date du mariage ou de l’événement"
          show-label
          required
          :error="fieldErrors.date"
        />
        <p class="c-fine">
          Votre prénom, votre nom, votre e-mail, la date et le style obtenu sont transmis à Anaïs pour préparer un échange. Pas d’infolettre.
        </p>
        <div class="c-hp" hidden>
          <label>
            Société
            <input v-model="societe" name="societe" tabindex="-1" autocomplete="off">
          </label>
        </div>
        <div class="c-quiz-actions">
          <UiBtn
            :label="pending ? 'Envoi…' : (submitted ? 'Voir mon résultat' : 'Découvrir mon style')"
            type="submit"
            :disabled="pending"
          />
          <button type="button" class="c-quiz-back" @click="goBack">Retour</button>
        </div>
      </form>

      <article v-else-if="ready && etape === 'resultat'" :class="['c-result', `c-result-${styleId}`]">
        <p class="c-lead">{{ results[styleId].text }}</p>
        <p class="c-lead">Votre style vous ressemble. Et si nous imaginions maintenant le bijou qui vous ressemble vraiment ?</p>
        <p v-if="saveError" class="c-field-error" role="alert">
          Le résultat est affiché. L’envoi des coordonnées n’a pas abouti : vous pouvez réessayer, ou écrire via le formulaire de contact.
        </p>
        <div class="c-quiz-actions">
          <NuxtLink class="c-btn c-btn-inverse" :to="resultHref" @click="trackQuiz('parlons')">
            Parlons de votre projet
          </NuxtLink>
          <button
            v-if="saveError"
            class="c-quiz-back"
            type="button"
            :disabled="pending"
            @click="retryDelivery"
          >
            {{ pending ? "Envoi…" : "Renvoyer mes coordonnées" }}
          </button>
        </div>
      </article>

      <p v-else-if="etape !== 'intro'" class="c-lead">Reprise du questionnaire.</p>
    </div>
  </div>
</template>
