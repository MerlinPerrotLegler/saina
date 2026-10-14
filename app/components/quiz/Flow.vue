<script setup>
/** @spec [[fsd-quiz-style]] */
import { results } from "#shared/utils/quiz";

const {
  labels,
  form,
  societe,
  fieldErrors,
  choiceError,
  saveError,
  contactError,
  contacted,
  pending,
  ready,
  etape,
  questionIndex,
  styleId,
  kind,
  asksDate,
  options,
  prompt,
  setAnswer,
  startQuiz,
  continueQuestion,
  markFormStarted,
  submitForm,
  retryDelivery,
  goBack,
  requestContact,
} = useQuiz();

const reassures = [
  { icon: "icone-coeur", label: ["Écoute", "du projet"] },
  { icon: "icone-soleil", label: ["Dessin 3D", "avant fabrication"] },
  { icon: "icone-lune", label: ["Un bijou", "qui a un sens"] },
  { icon: "icone-points", label: ["Fait pour", "être porté"] },
];

const pageTitle = computed(() => {
  if (etape.value === "resultat" && ready.value && styleId.value) return results[styleId.value].title;
  if (etape.value === "coordonnees") return "Votre style est presque révélé…";
  if (/^[1-9]$/.test(etape.value)) return prompt.value;
  return "Quel style de bijou vous ressemble ?";
});

function chosen(option) {
  return labels.value[questionIndex.value] === option.label;
}

function optionName(option) {
  return option.note ? `${option.label}, ${option.note}` : option.label;
}
</script>

<template>
  <div class="c-quiz-page">
    <UiBand
      v-if="etape === 'intro'"
      class="bg-creme text-terracotta"
      label="Réassurance"
      :items="reassures"
    />
    <div class="c-quiz-band">
    <div class="c-quiz">
      <header class="c-sheet-intro">
        <p class="c-kicker">{{ kind === 'mariage' ? 'Mariage' : 'Sur-mesure' }}</p>
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
        <template v-if="etape === 'intro'">
          <p class="c-lead">Quelques questions pour découvrir l’univers joaillier qui vous correspond le mieux.</p>
          <p class="c-lead">Répondez spontanément. Il n’y a pas de bonne ou de mauvaise réponse.</p>
        </template>
        <p v-else-if="etape === 'coordonnees'" class="c-lead">
          Pour découvrir votre résultat et recevoir une expérience personnalisée autour de votre style joaillier, renseignez vos coordonnées.
        </p>
      </header>

      <div v-if="etape === 'intro'">
        <UiBtn label="Commencer le quiz" type="button" @click="startQuiz" />
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
                :aria-label="optionName(option)"
                @change="setAnswer(questionIndex, option.label)"
              >
              <img
                v-if="option.image"
                class="c-token"
                :src="option.image"
                alt=""
                width="120"
                height="120"
              >
              <span class="c-choice-copy">
                <span class="c-choice-name">{{ option.label }}</span>
                <span v-if="option.note" class="c-choice-note">{{ option.note }}</span>
              </span>
              <span v-if="chosen(option)" class="c-choice-state">Sélectionné</span>
            </label>
          </div>
        </fieldset>
        <p v-if="choiceError" id="quiz-choice-error" class="c-field-error" role="alert" tabindex="-1">{{ choiceError }}</p>
        <div class="c-quiz-actions">
          <UiBtn label="Continuer" type="submit" />
          <button type="button" class="c-quiz-back" @click="goBack">Retour</button>
        </div>
      </form>

      <form
        v-else-if="ready && etape === 'coordonnees'"
        class="c-form c-quiz-step"
        novalidate
        :aria-busy="pending ? 'true' : undefined"
        @submit.prevent="submitForm"
        @input="markFormStarted"
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
          v-if="asksDate"
          v-model="form.date"
          name="date"
          type="date"
          label="Date du mariage"
          show-label
          required
          :error="fieldErrors.date"
        />
        <div class="c-hp" hidden>
          <label>
            Société
            <input v-model="societe" name="societe" tabindex="-1" autocomplete="off">
          </label>
        </div>
        <div class="c-quiz-actions">
          <UiBtn
            :label="pending ? 'Découverte en cours…' : 'Découvrir mon style'"
            type="submit"
            :disabled="pending"
          />
          <button type="button" class="c-quiz-back" @click="goBack">Retour</button>
        </div>
      </form>

      <article v-else-if="ready && etape === 'resultat' && styleId" :class="['c-result', 'c-quiz-step', `c-result-${styleId}`]">
        <p class="c-lead">{{ results[styleId].text }}</p>
        <p class="c-lead">Votre style vous ressemble. Et si nous imaginions maintenant le bijou qui vous ressemble vraiment ?</p>
        <p v-if="contacted" class="c-lead" role="status">Anaïs a bien reçu votre demande.</p>
        <p v-if="contactError" class="c-field-error" role="alert">
          L’envoi de la demande n’a pas abouti. Vous pouvez réessayer.
        </p>
        <p v-if="saveError" class="c-field-error" role="alert">
          Le résultat est affiché. L’envoi des coordonnées n’a pas abouti : vous pouvez réessayer.
        </p>
        <div class="c-quiz-actions">
          <button
            class="c-btn c-btn-inverse"
            type="button"
            :disabled="pending || contacted || saveError"
            @click="requestContact"
          >
            {{ contacted ? "Demande envoyée" : (pending ? "Envoi…" : "Parlons de votre projet") }}
          </button>
          <button
            v-if="saveError"
            class="c-quiz-back"
            type="button"
            :disabled="pending"
            @click="retryDelivery"
          >
            {{ pending ? "Découverte en cours…" : "Renvoyer mes coordonnées" }}
          </button>
        </div>
      </article>

      <p v-else-if="etape !== 'intro'" class="c-lead">Reprise du questionnaire.</p>
    </div>
    </div>
  </div>
</template>
