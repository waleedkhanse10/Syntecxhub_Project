const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Priority: saved localStorage choice -> system preference -> light.
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// aria-pressed = true means "dark mode is on".
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
}

applyTheme(getInitialTheme());

// Enter and Space fire "click" natively on a focused <button>.
toggle.addEventListener("click", toggleTheme);
