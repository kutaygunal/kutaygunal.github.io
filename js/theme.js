/* ============================================================
   Theme toggle — light / dark with localStorage persistence.
   Dark is this design's primary mode (the instrument panel reads
   as dark hardware), so it's the default until the visitor picks
   light explicitly — OS preference doesn't override that.
   ============================================================ */

(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;

  // Resolve the effective theme: saved choice, else dark by default.
  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function currentTheme() {
    const saved = getSaved();
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  }

  function apply(theme) {
    // Always set an explicit data-theme so an explicit choice wins over
    // the OS prefers-color-scheme media query (which only applies when
    // no data-theme is present).
    root.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  }

  function updateButton(theme) {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const dark = theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    const icon = btn.querySelector(".icon");
    if (icon) icon.textContent = dark ? "☀" : "☾";
  }

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* storage unavailable — still switch for this session */
    }
    apply(next);
    updateButton(next);
  }

  // Apply the theme immediately (before first paint, avoids flash).
  apply(currentTheme());

  // The button lives in <body>, which isn't parsed yet when this script
  // runs in <head>. Attach the click listener once the DOM is ready.
  function init() {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
    updateButton(currentTheme());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
