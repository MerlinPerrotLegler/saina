/** @spec [[fsd-quiz-style]] */

export const STYLE_IDS = ["chaleureux", "elegant", "sensible", "instinctif"];

export const questions = [
  {
    prompt: "Quelle couleur de métal vous attire naturellement ?",
    options: [
      { label: "Or jaune", style: "chaleureux" },
      { label: "Or gris", style: "elegant" },
      { label: "Or rose", style: "sensible" },
      { label: "Platine", style: "instinctif" },
    ],
  },
  {
    prompt: "Quelle finition vous attire le plus ?",
    options: [
      { label: "Brillante / clinquante", style: "chaleureux" },
      { label: "Mate", style: "elegant" },
      { label: "Lumineuse", style: "sensible" },
      { label: "Brute", style: "instinctif" },
    ],
  },
  {
    prompt: "Quelle énergie vous attire spontanément ?",
    options: [
      { label: "Feu", style: "chaleureux" },
      { label: "Air", style: "elegant" },
      { label: "Eau", style: "sensible" },
      { label: "Terre", style: "instinctif" },
    ],
  },
  {
    prompt: "Quelle forme vous attire le plus ?",
    options: [
      { label: "Forme libre", style: "chaleureux" },
      { label: "Ovale", style: "elegant" },
      { label: "Ronde", style: "sensible" },
      { label: "Carrée", style: "instinctif" },
    ],
  },
  {
    prompt: "Quel univers esthétique vous correspond le plus ?",
    options: [
      { label: "Ornemental", style: "chaleureux" },
      { label: "Minimaliste", style: "elegant" },
      { label: "Symbolique", style: "sensible" },
      { label: "Architectural", style: "instinctif" },
    ],
  },
  {
    prompt: "Comment aimez-vous porter un bijou ?",
    options: [
      { label: "Pour les célébrations", style: "chaleureux" },
      { label: "Tous les jours", style: "elegant" },
      { label: "Comme une œuvre", style: "sensible" },
      { label: "Comme un talisman", style: "instinctif" },
    ],
  },
  {
    prompt: "Quelle émotion souhaitez-vous transmettre à travers un bijou ?",
    options: [
      { label: "Joie", style: "chaleureux" },
      { label: "Calme", style: "elegant" },
      { label: "Passion", style: "sensible" },
      { label: "Liberté", style: "instinctif" },
    ],
  },
  {
    prompt: "Quelle symbolique vous parle le plus ?",
    options: [
      { label: "Amitié", style: "chaleureux" },
      { label: "Passage de vie", style: "elegant" },
      { label: "Amour", style: "sensible" },
      { label: "Force personnelle", style: "instinctif" },
    ],
  },
];

export const stonePrompt = "Si tu étais une pierre, quelle serait ta couleur ?";

export const stones = [
  { label: "Blanc", note: "Pureté, simplicité, clarté", style: "elegant", swatch: "#f3efe6" },
  { label: "Bleu", note: "Sagesse, intelligence, loyauté", style: "sensible", swatch: "#3d5a80" },
  { label: "Vert", note: "Équilibre, renouveau, altruisme", style: "instinctif", swatch: "#3f6b4a" },
  { label: "Rose", note: "Romance, tendresse, espièglerie", style: "sensible", swatch: "#e7b7c8" },
  { label: "Rouge", note: "Amour, instinct, envie", style: "chaleureux", swatch: "#8e2f2f" },
  { label: "Violet", note: "Mystère, spiritualité, intuition", style: "sensible", swatch: "#6b4c7a" },
  { label: "Jaune", note: "Joie, sociabilité, spontanéité", style: "chaleureux", swatch: "#e3c15a" },
  { label: "Orange", note: "Vitalité, créativité, originalité", style: "chaleureux", swatch: "#d9783a" },
  { label: "Marron", note: "Tradition, savoir-faire, fiabilité", style: "instinctif", swatch: "#6b4a32" },
  { label: "Gris", note: "Conformité, autorité, professionnalisme", style: "elegant", swatch: "#8d8a86" },
  { label: "Noir", note: "Élégance, raffinement, puissance", style: "elegant", swatch: "#1c1c1c" },
];

export const results = {
  chaleureux: {
    title: "Ton style est chaleureux.",
    text: "Tu es une personne solaire, expressive et chaleureuse. Les matières lumineuses comme l’or poli accompagnent ta joie de vivre. Tu es sensible aux bijoux qui célèbrent les moments forts.",
  },
  elegant: {
    title: "Ton style est élégant.",
    text: "Tu es une personne élégante, discrète et profondément sensible. Tu aimes les bijoux fins, portés au quotidien avec simplicité, dont la modernité révèle une présence affirmée.",
  },
  sensible: {
    title: "Ton style est sensible.",
    text: "Tu es une personne douce, sensible et rêveuse. Tu aimes les courbes fluides et délicates ; les créations porteuses de sens, qui expriment ta créativité et ton univers intérieur.",
  },
  instinctif: {
    title: "Ton style est instinctif.",
    text: "Tu es une personne instinctive, affirmée et authentique. Tu aimes les matières brutes, les textures marquées et les lignes structurées, porteuses d’ancrage et d’une élégance intemporelle.",
  },
};

export const styleLabels = {
  chaleureux: "chaleureux",
  elegant: "élégant",
  sensible: "sensible",
  instinctif: "instinctif",
};

/**
 * Score le plus haut, puis départage de la question 8 vers la question 1.
 * Les points de la question 9 sont déjà dans les compteurs.
 */
export function scoreQuiz(answers) {
  const counts = Object.fromEntries(STYLE_IDS.map((id) => [id, 0]));
  for (const answer of answers) {
    if (counts[answer] != null) counts[answer] += 1;
  }
  const max = Math.max(...STYLE_IDS.map((id) => counts[id]));
  const tied = STYLE_IDS.filter((id) => counts[id] === max);
  if (tied.length === 1) return tied[0];
  const lastScored = Math.min(answers.length, 9) - 2;
  for (let index = lastScored; index >= 0; index -= 1) {
    if (tied.includes(answers[index])) return answers[index];
  }
  return tied[0];
}

export function trackQuiz(name, detail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("siana-quiz", { detail: { name, ...detail } }));
}
