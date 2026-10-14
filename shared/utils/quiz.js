/** @spec [[fsd-quiz-style]] */

export const STYLE_IDS = ["chaleureux", "elegant", "sensible", "instinctif"];

export const questions = [
  {
    prompt: "Quelle couleur de métal vous attire naturellement ?",
    options: [
      { label: "Or jaune", style: "chaleureux", image: "/media/quiz/metals/or-jaune.jpg" },
      { label: "Or gris", style: "elegant", image: "/media/quiz/metals/or-gris.jpg" },
      { label: "Or rose", style: "sensible", image: "/media/quiz/metals/or-rose.jpg" },
      { label: "Platine", style: "instinctif", image: "/media/quiz/metals/platine.jpg" },
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
  { label: "Blanc", note: "Pureté, simplicité, clarté", style: "elegant" },
  { label: "Bleu", note: "Sagesse, intelligence, loyauté", style: "sensible" },
  { label: "Vert", note: "Équilibre, renouveau, altruisme", style: "instinctif" },
  { label: "Rose", note: "Romance, tendresse, espièglerie", style: "sensible" },
  { label: "Rouge", note: "Amour, instinct, envie", style: "chaleureux" },
  { label: "Violet", note: "Mystère, spiritualité, intuition", style: "sensible" },
  { label: "Jaune", note: "Joie, sociabilité, spontanéité", style: "chaleureux" },
  { label: "Orange", note: "Vitalité, créativité, originalité", style: "chaleureux" },
  { label: "Marron", note: "Tradition, savoir-faire, fiabilité", style: "instinctif" },
  { label: "Gris", note: "Conformité, autorité, professionnalisme", style: "elegant" },
  { label: "Noir", note: "Élégance, raffinement, puissance", style: "elegant" },
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

export function stylesFor(labels) {
  const list = Array.isArray(labels) ? labels : [];
  return Array.from({ length: 9 }, (_, index) => {
    const label = list[index];
    if (typeof label !== "string" || !label) return null;
    const bank = index === 8 ? stones : questions[index].options;
    return bank.find((option) => option.label === label)?.style || null;
  });
}

export function quizBase(path) {
  const clean = String(path || "");
  if (clean === "/mariage" || clean.startsWith("/mariage/")) return "/mariage";
  return "/quiz";
}

export function quizKind(path) {
  return quizBase(path) === "/mariage" ? "mariage" : "sur-mesure";
}

export function stepFromPath(path) {
  const base = quizBase(path);
  const clean = String(path || "").replace(/\/$/, "") || "/";
  if (clean === base) return "intro";
  const question = clean.match(new RegExp(`^${base}/question/([1-9])$`));
  if (question) return question[1];
  if (clean === `${base}/coordonnees`) return "coordonnees";
  if (new RegExp(`^${base}/resultat/(chaleureux|elegant|sensible|instinctif)$`).test(clean)) return "resultat";
  return "";
}

export function answerLines(labels) {
  return (Array.isArray(labels) ? labels : []).map((label, index) => {
    const prompt = index === 8 ? stonePrompt : questions[index]?.prompt;
    return `${index + 1}. ${prompt || "Question"}\n${label || "—"}`;
  }).join("\n\n");
}

/** @returns {string} chemin de correction, ou vide si l’étape est autorisée */
export function quizDestination(path, { labels, submitted, formOk }) {
  const base = quizBase(path);
  const step = stepFromPath(path);
  if (!step) return base;
  const styles = stylesFor(labels);
  const missing = styles.findIndex((style) => !style);
  if (/^[1-9]$/.test(step)) {
    const index = Number(step) - 1;
    if (missing !== -1 && missing < index) return `${base}/question/${missing + 1}`;
    return "";
  }
  if (step === "coordonnees") {
    if (missing !== -1) return `${base}/question/${missing + 1}`;
    return "";
  }
  if (step === "resultat") {
    if (missing !== -1 || !submitted || !formOk) return base;
    const style = scoreQuiz(styles);
    if (!String(path).replace(/\/$/, "").endsWith(`/${style}`)) return `${base}/resultat/${style}`;
    return "";
  }
  return "";
}

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
