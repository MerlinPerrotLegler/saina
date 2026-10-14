import assert from "node:assert/strict";
import { scoreQuiz } from "../shared/utils/quiz.js";

const chaleureux = Array(9).fill("chaleureux");
const elegant = Array(9).fill("elegant");
const sensible = Array(9).fill("sensible");
const instinctif = Array(9).fill("instinctif");

assert.equal(scoreQuiz(chaleureux), "chaleureux");
assert.equal(scoreQuiz(elegant), "elegant");
assert.equal(scoreQuiz(sensible), "sensible");
assert.equal(scoreQuiz(instinctif), "instinctif");

const tieReadFromQuestion8 = [
  "chaleureux", "chaleureux", "chaleureux", "chaleureux",
  "elegant", "elegant", "elegant", "elegant",
  "sensible",
];
assert.equal(scoreQuiz(tieReadFromQuestion8), "elegant");

const tieOtherWay = [
  "elegant", "elegant", "elegant", "elegant",
  "chaleureux", "chaleureux", "chaleureux", "chaleureux",
  "sensible",
];
assert.equal(scoreQuiz(tieOtherWay), "chaleureux");

const changed = [...tieReadFromQuestion8];
changed[7] = "chaleureux";
assert.equal(scoreQuiz(changed), "chaleureux");

const question9BreaksByPoint = [
  "chaleureux", "chaleureux", "chaleureux",
  "elegant", "elegant", "elegant",
  "sensible", "instinctif",
  "chaleureux",
];
assert.equal(scoreQuiz(question9BreaksByPoint), "chaleureux");

console.log("quiz score ok");
