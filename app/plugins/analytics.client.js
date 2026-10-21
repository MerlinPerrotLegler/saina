const ATTR_KEY = "siana_attr";
const CONVERSION_ROOTS = ["/quiz", "/mariage", "/contact", "/rendez-vous"];

function cleanPath(path) {
  if (!path) return "/";
  const bare = path.split("?")[0].split("#")[0] || "/";
  return bare.length > 1 && bare.endsWith("/") ? bare.slice(0, -1) : bare;
}

function isConversionPath(path) {
  return CONVERSION_ROOTS.some((root) => path === root || path.startsWith(`${root}/`));
}

function readAttr() {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeAttr(next) {
  try {
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(next));
  } catch {
    /* ignore quota / private mode */
  }
}

function attribution() {
  const attr = readAttr();
  return {
    landing_path: attr.landing_path || "",
    content_path: attr.content_path || "",
    previous_path: attr.previous_path || "",
    after_quiz: Boolean(attr.after_quiz),
  };
}

function send(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, { ...attribution(), ...params });
}

function noteRoute(path) {
  const attr = readAttr();
  const previous = attr.current_path || "";
  if (!attr.landing_path) attr.landing_path = path;
  if (!isConversionPath(path)) attr.content_path = path;
  attr.previous_path = previous && previous !== path ? previous : attr.previous_path || "";
  attr.current_path = path;
  writeAttr(attr);
}

function markAfterQuiz() {
  const attr = readAttr();
  attr.after_quiz = true;
  writeAttr(attr);
}

function ctaTarget(href) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return "";
    const path = cleanPath(url.pathname);
    if (path === "/quiz" || path.startsWith("/quiz/")) return "/quiz";
    if (path === "/mariage" || path.startsWith("/mariage/")) return "/mariage";
    if (path === "/contact" || path.startsWith("/contact/")) return "/contact";
    if (path === "/rendez-vous" || path.startsWith("/rendez-vous/")) return "/rendez-vous";
    return "";
  } catch {
    return "";
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  let scrollPath = "";
  let scrollDone = false;

  function onScroll() {
    if (scrollDone) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    if (window.scrollY / max < 0.9) return;
    scrollDone = true;
    send("scroll_depth", { page_path: scrollPath, percent: 90 });
  }

  function resetScroll(path) {
    scrollPath = path;
    scrollDone = false;
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function track(name, params = {}) {
    if (name === "quiz_start") markAfterQuiz();
    send(name, params);
  }

  function onQuiz(event) {
    const { name, ...detail } = event.detail || {};
    if (!name) return;
    track(name, detail);
  }

  function onClick(event) {
    const link = event.target?.closest?.("a[href]");
    if (!link) return;
    const target = ctaTarget(link.getAttribute("href") || "");
    if (!target) return;
    send("cta_click", {
      page_path: cleanPath(window.location.pathname),
      cta_target: target,
    });
  }

  const router = useRouter();
  router.afterEach((to) => {
    const path = cleanPath(to.path);
    noteRoute(path);
    send("page_view", { page_path: path, page_title: document.title });
    resetScroll(path);
  });

  window.addEventListener("siana-quiz", onQuiz);
  document.addEventListener("click", onClick, true);

  nuxtApp.provide("track", track);

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener("siana-quiz", onQuiz);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
    });
  }
});
