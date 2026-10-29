# Theme Toggle

A simple Dark/Light mode toggle built with vanilla HTML, CSS, and JavaScript — no frameworks or external libraries.

## Features

- Custom pill-shaped switch with a sliding knob and animated sun/moon icons (inline SVG)
- Keyboard accessible: real `<button>` with `aria-label` and `aria-pressed`, plus a visible focus ring
- All colors defined as CSS variables in `:root` (light) and `[data-theme="dark"]` (dark)
- Choice saved in `localStorage` under the key `"theme"`
- Falls back to the system preference (`prefers-color-scheme`) when nothing is saved
- Smooth 0.3s transitions on background, text, and border colors
- No flash of wrong theme: `style.css` follows the system preference until a theme is applied
- Responsive layout

## Files

| File | Purpose |
|-----------|-------------------------------------------|
| `index.html` | Page structure with navbar, heading, paragraph, and card |
| `style.css` | Theme variables, pill switch styling, transitions |
| `script.js` | Applies, toggles, and persists the chosen theme |

## How It Works

1. On load, `script.js` picks the theme in this order:
   - Value saved in `localStorage` (`"theme"`)
   - System preference (`prefers-color-scheme: dark`)
   - Light, as the default
2. The chosen theme is set as `data-theme` on the `<html>` element.
3. All colors resolve from CSS variables, so a single attribute change re-themes the page with a smooth transition.
4. Clicking the toggle (or pressing Enter/Space on the focused button) flips the theme and saves it.

## Getting Started

Just open `index.html` in a browser — no build step or server needed.

## Developer
**Waleed Khan**
