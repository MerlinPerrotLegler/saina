import assert from "node:assert/strict";
import { dateError, emailError } from "../shared/utils/fields.js";
import { quizDestination, scoreQuiz, stylesFor } from "../shared/utils/quiz.js";

const paths = {
  A: ["Or jaune", "Brillante / clinquante", "Feu", "Forme libre", "Ornemental", "Pour les célébrations", "Joie", "Amitié", "Rouge"],
  B: ["Or gris", "Mate", "Air", "Ovale", "Minimaliste", "Tous les jours", "Calme", "Passage de vie", "Blanc"],
  C: ["Or rose", "Lumineuse", "Eau", "Ronde", "Symbolique", "Comme une œuvre", "Passion", "Amour", "Bleu"],
  D: ["Platine", "Brute", "Terre", "Carrée", "Architectural", "Comme un talisman", "Liberté", "Force personnelle", "Vert"],
  E: ["Or jaune", "Mate", "Feu", "Ovale", "Ornemental", "Tous les jours", "Passion", "Amour", "Vert"],
};

assert.deepEqual(stylesFor(paths.A), Array(9).fill("chaleureux"));
assert.equal(scoreQuiz(stylesFor(paths.A)), "chaleureux");
assert.equal(scoreQuiz(stylesFor(paths.B)), "elegant");
assert.equal(scoreQuiz(stylesFor(paths.C)), "sensible");
assert.equal(scoreQuiz(stylesFor(paths.D)), "instinctif");
assert.equal(scoreQuiz(stylesFor(paths.E)), "elegant");

const changed = paths.B.slice();
changed[0] = "Or jaune";
assert.deepEqual(stylesFor(changed).filter((style) => style === "chaleureux"), ["chaleureux"]);
assert.equal(scoreQuiz(stylesFor(changed)), "elegant");

assert.equal(emailError(""), "Indiquez votre adresse e-mail.");
assert.equal(emailError("anais@"), "Cette adresse e-mail n'est pas valide.");
assert.equal(emailError("ana@siana.fr"), "");
assert.equal(dateError(""), "Indiquez la date du mariage ou de l'événement.");
assert.equal(dateError("2026-02-31"), "Cette date n'est pas valide.");
assert.equal(dateError("2026-06-12"), "");

assert.equal(quizDestination("/quiz/resultat/chaleureux", {
  labels: Array(9).fill(null),
  submitted: false,
  formOk: false,
}), "/quiz");

assert.equal(quizDestination("/quiz/question/5", {
  labels: ["Or jaune", null, null, null, null, null, null, null, null],
  submitted: false,
  formOk: false,
}), "/quiz/question/2");

assert.equal(quizDestination("/quiz/coordonnees", {
  labels: paths.A,
  submitted: false,
  formOk: false,
}), "");

assert.equal(quizDestination("/quiz/resultat/chaleureux", {
  labels: paths.B,
  submitted: true,
  formOk: true,
}), "/quiz/resultat/elegant");

assert.equal(quizDestination("/quiz/nulle-part", {
  labels: paths.A,
  submitted: true,
  formOk: true,
}), "/quiz");

console.log("quiz score ok");
