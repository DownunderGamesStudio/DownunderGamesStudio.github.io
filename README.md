# Downunder Games — website

A small, static website for **Downunder Games** (indie studio, Australia).
No build step, no framework — just open a file and edit the text.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `pirate-haven.html` | Pirate Haven game page |
| `about.html` | About / studio page |
| `404.html` | Custom 404 page (used by GitHub Pages) |
| `css/style.css` | All styling. Colors, spacing and fonts are variables at the top. |
| `js/main.js` | Mobile menu toggle + footer year. Nothing else. |
| `favicon.svg` | Site icon (anchor mark) |

## Common changes

- **Text / links / email** — edit the `.html` file directly. Every page has
  `<!-- ===== ... ===== -->` comments marking its sections. The contact
  email (`hello@downundergames.com`) is a placeholder — replace it everywhere
  (search for it).
- **Colors** — the `:root { ... }` block at the top of `css/style.css`.
  Change `--bg`, `--accent`, etc. once and the whole site follows.
- **Game artwork** — each page has an inline SVG placeholder inside a
  `.game-art` div, with a comment telling you how to swap in a real image
  (`img/pirate-haven.jpg`).
- **Add a new game** — copy `pirate-haven.html`, rename it (e.g.
  `new-game.html`), edit the content, then add a link in the nav on every
  page (the nav block is identical on each page) and a card on the home page.
- **Add a page** — same idea: copy any page, rename it, add it to the nav.

## Links used in the site

- Steam store: `https://store.steampowered.com/app/2535910/Pirate_Haven/`
- Steam community hub: `https://steamcommunity.com/app/2535910`

## Publishing

See `GUIDE.md` for the full step-by-step on publishing this site for free
with GitHub Pages.
