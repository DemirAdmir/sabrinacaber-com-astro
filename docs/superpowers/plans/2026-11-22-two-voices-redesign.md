# Two Voices Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild sabrinacaber.com as the "Two Voices" editorial site: paper/ink palette, a hero that morphs between FR/EN/BHS with anime.js, a How I work section, verified facts only, and a contact form that really sends.

**Architecture:** Same Astro one-pager, same routes (`/`, `/fr/`, `/bhs/`) and `translations.ts`. One token stylesheet imported in `Layout.astro`; every component rewritten on top of it. Pure logic (morph frames, form validation) lives in small plain-JS modules tested with `node --test`; page-level behaviour is tested against the built HTML in `dist/`.

**Tech Stack:** Astro 4, anime.js 3.2.x, Netlify Forms, Node 20 `node:test`, Google Fonts (Fraunces, Inter).

**Spec:** `docs/superpowers/specs/2026-11-22-two-voices-redesign-design.md`

## Global Constraints

- Start from committed `main` (`928d43e`); the git stash is not used.
- Dependencies: add `animejs@^3.2.2`; remove `gsap`, `three`, `@types/three`. No other runtime deps.
- Zero emoji or pictographs in UI, copy, code or commits. Icons are inline lucide SVG with `currentColor`. Allowed Unicode: arrows (`↔`, `→`), accented letters, `«»`, em dash.
- Components use semantic CSS variables from `src/styles/tokens.css` only: no raw hex, px font sizes or ms durations in components.
- WCAG 2.2 AA in light and dark; focus ring at least 3:1; targets at least 24x24.
- No horizontal overflow at 280 / 320 / 414 px.
- `prefers-reduced-motion: reduce` → no morph, no scramble, no transforms; all content present.
- Without JS all content is visible (reveal classes are added by JS).
- No invented proof: no testimonials, no client/project counts.
- One H1 per page (hero); section headings are H2.
- Netlify Forms: form name `contact`, honeypot `bot-field`, hidden `lang`.

## Review Focus

1. **Hero phrase lengths differ per language** → no layout shift while morphing; the box reserves the longest phrase. Pinned by Task 4 `reserves the longest phrase` test and the Task 10 render check.
2. **Reduced-motion or no-JS visitors** → every section fully visible, hero shows page-language phrase. Pinned by Task 9 `no-js content visible` test + `verify_reduced_motion.mjs` in Task 10.
3. **Form submit fails (network or non-2xx)** → a real error message with the email fallback, button re-enabled, never a fake success. Pinned by Task 8 `submitContact rejects on non-2xx` test.
4. **Long words in FR/BHS at 280px** (e.g. "Prevođenje", "Kreatorica sadržaja", email address) → no overflow. Pinned by Task 10 `verify_responsive.mjs --scale=1.25`.
5. **Language switch from a deep anchor** (`/fr/#contact`) → lands on the other language's page top with correct `lang`/`hreflang` and `aria-current`. Pinned by Task 3 `language switch` test.

---

## File Structure

```
src/styles/tokens.css        NEW  palette (light + dark), type, space, motion tokens
src/styles/global.css        REWRITE reset, base type, .container, .btn, .sr-only, focus, reveal hooks
src/layouts/Layout.astro     REWRITE head, fonts, skip link, Nav, footer
src/components/Nav.astro     REWRITE
src/components/Hero.astro    REWRITE
src/components/SectionTitle.astro NEW  H2 + aria-hidden second-language line
src/components/About.astro   REWRITE
src/components/Services.astro REWRITE
src/components/Process.astro NEW  (replaces Testimonials)
src/components/Work.astro    REWRITE
src/components/Contact.astro REWRITE
src/components/Testimonials.astro DELETE
src/scripts/morph.js         NEW  pure: morph frame generation
src/scripts/contact-form.js  NEW  pure: validate + submit
src/scripts/motion.js        NEW  anime.js wiring: hero cycle, reveals, title scramble
src/i18n/translations.ts     MODIFY keys listed in Task 2
src/pages/index.astro, fr/index.astro, bhs/index.astro  REWRITE thin
tests/unit/*.test.mjs        NEW  node:test for pure modules
tests/site/*.test.mjs        NEW  node:test against dist/*.html
public/avatar.glb            DELETE
```

`package.json` scripts: `"test:unit": "node --test tests/unit/"`, `"test:site": "astro build && node --test tests/site/"`, `"test": "npm run test:unit && npm run test:site"`.

Site tests read `dist/index.html`, `dist/fr/index.html`, `dist/bhs/index.html` as strings via a helper `tests/site/_load.mjs` exporting `load(lang: 'en'|'fr'|'bhs'): string`.

---

### Task 1: Foundation (deps, tokens, global CSS, Layout)

**Files:**
- Modify: `package.json`
- Create: `src/styles/tokens.css`, `tests/site/_load.mjs`, `tests/site/foundation.test.mjs`
- Rewrite: `src/styles/global.css`, `src/layouts/Layout.astro`

**Interfaces:**
- Produces CSS variables (light in `:root`, dark under `@media (prefers-color-scheme: dark)`):
  `--color-paper`, `--color-paper-2`, `--color-ink`, `--color-ink-muted`, `--color-rule`, `--color-accent`, `--color-accent-ink` (text on accent fill), `--color-focus`;
  `--font-display` (Fraunces), `--font-body` (Inter); `--text-sm|base|lg|xl|2xl|3xl|display` (display >= 2.5x base, use `clamp`);
  `--space-1..--space-24` on a 4px base; `--radius-sm`; `--dur-fast` 200ms, `--dur-base` 400ms, `--dur-slow` 700ms, `--ease-out`.
- Produces classes: `.container`, `.btn`, `.btn--primary` (accent fill), `.btn--ghost` (ink outline), `.sr-only`, `.skip-link`, `[data-reveal]` (hidden only when `html.js` is set and not reduced motion).
- Layout sets `<html class="no-js">`; an inline head script swaps it to `js`.

- [ ] **Step 1:** `npm rm gsap three @types/three && npm i animejs@^3.2.2`; add the three test scripts to `package.json`.
- [ ] **Step 2: Write failing site test** `tests/site/foundation.test.mjs`:
  - for each lang: html has `<a class="skip-link" href="#main"`, `<main id="main"`, exactly one `<h1`, `<html lang="` matching lang (`bhs` page uses `lang="bs"`), Google Fonts link contains `Fraunces` and `Inter`.
  - built JS/HTML in `dist/` contains no `gsap`, `three`, `lenis`, `cursor: none`.
  - no character in the HTML matches `/\p{Extended_Pictographic}/u`.
- [ ] **Step 3:** Run `npm run test:site` → FAIL (no skip link, fonts differ).
- [ ] **Step 4:** Write `tokens.css`, rewrite `global.css`, rewrite `Layout.astro` (keep existing meta/hreflang; drop the emoji `flag` field; footer uses `t.footer`). Temporarily keep current section components rendering so the build passes; strip GSAP/Three imports from pages and components (delete the GSAP `<script>` in `src/pages/*.astro`, remove 3D code from `Hero.astro`).
- [ ] **Step 5:** `npm run test:site` → PASS.
- [ ] **Step 6:** Commit `feat: two-voices foundation tokens and layout`.

### Task 2: Translations reshape

**Files:** Modify `src/i18n/translations.ts`, `src/components/Hero.astro`, `src/components/About.astro` (minimal wiring only); Create `tests/site/content.test.mjs`.

**Interfaces — produces, for each of `en`, `fr`, `bhs`:**
- `nav.process: string`, `nav.cta` = "Start a project" (translated)
- `hero.eyebrow: string` ("Sabrina Caber — Certified translator FR ↔ EN")
- `hero.phrases: { en: string; fr: string; bhs: string }` = `"Words are my craft."`, `"Les mots sont mon métier."`, `"Riječi su moj zanat."` (identical in all three langs)
- `hero.cta1` = "Start a project", `hero.cta2` = "See services"
- `about.facts: { value: string; label: string }[]` exactly 4: Since 2015 / 3 languages / Certified court interpreter / MA French Language & Literature. Remove `about.stats`.
- `<section>.titleAlt: string` for about, services, process, work, contact (the second-language line, e.g. EN page shows FR, FR page shows EN, BHS page shows FR).
- `process: { tag, title, titleAlt, steps: { title: string; body: string }[4], note }` with steps Brief / Translate & write / Review / Deliver (spec wording).
- `contact.form.errors: { name, email, message, network }` (network includes the email address as fallback); `contact.form.sending`; `successMsg` without check glyph.
- Remove the `testimonials` key if present.

- [ ] **Step 1: Write failing site test** `tests/site/content.test.mjs`: each page contains its `hero.phrases[lang]` inside the `<h1>`; none contains `15+`, `20+`, `3+`, `Happy Clients`, `testimonial`; each contains "2015".
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Edit translations; wire `hero.phrases[lang]` into the existing H1 and `about.facts` into About so the build passes.
- [ ] **Step 4:** Run → PASS. `npx astro check` has no type errors in `translations.ts`.
- [ ] **Step 5:** Commit `feat: i18n keys for two-voices, facts replace stats`.

### Task 3: Nav

**Files:** Rewrite `src/components/Nav.astro`; Create `tests/site/nav.test.mjs`

**Interfaces:** Consumes `nav.*`. Links: `#about`, `#services`, `#process`, `#work`, `#contact`.

- [ ] **Step 1: Failing test** `language switch`: on each page the current language is a `<span aria-current="true">`, other languages are `<a>` with `href` `/`, `/fr/`, `/bhs/`, `hreflang` and `lang`; menu button has `aria-expanded="false"` and `aria-controls="mobile-menu"`; nav contains `href="#process"`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement. Sticky header with `--color-paper` backdrop; wordmark in `--font-display`; mobile menu below 900px: button toggles `aria-expanded`, Escape closes and returns focus to the button, link click closes. Add `scroll-padding-top` in global CSS equal to header height (WCAG 2.4.11).
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit `feat: nav with language switch and accessible mobile menu`.

### Task 4: Hero + morph engine

**Files:** Create `src/scripts/morph.js`, `tests/unit/morph.test.mjs`; Rewrite `src/components/Hero.astro`

**Interfaces — `src/scripts/morph.js` (ESM, JSDoc-typed):**
- `morphFrame(from: string, to: string, progress: number, rand: () => number): string` — at `progress` 0 returns `from`, at 1 returns `to`. Output length is `Math.round(from.length + (to.length - from.length) * progress)`; character `i` settles to `to[i]` once `progress >= 0.85 * (i + 1) / to.length + 0.15 * rand()` (so every character is settled at 1); unsettled non-space characters are a glyph from `GLYPHS`; spaces in `to` stay spaces.
- `GLYPHS: string` = lowercase Latin plus `éèàçčćšžđ`.
- `cycleOrder(page: 'en'|'fr'|'bhs'): Array<'en'|'fr'|'bhs'>` → en: `['fr','en','bhs','en']`, fr: `['en','fr','bhs','fr']`, bhs: `['fr','bhs','en','bhs']`.

Hero markup: eyebrow `<p>`; `<h1 class="hero__title"><span class="hero__phrase">{phrases[lang]}</span><span class="hero__morph" aria-hidden="true"></span></h1>`. The H1 is a single-cell CSS grid; it also contains each phrase as an invisible `aria-hidden` sizer so the cell is as large as the longest phrase. JS sets `hero__phrase` visually hidden only while the morph layer is active. Subtitle, two CTAs (`.btn--primary` → `#contact`, `.btn--ghost` → `#services`), portrait `sabrina.png` with `alt` "Sabrina Caber", explicit `width`/`height`, `fetchpriority="high"`. Thin vertical rule between text and portrait.

- [ ] **Step 1: Failing unit tests:** `morphFrame('abc','xyz',0)==='abc'`; `morphFrame('abc','xyz',1)==='xyz'`; `morphFrame('Les mots','Words are',1,Math.random)==='Words are'`; spaces of target preserved at progress 0.5 with `rand=()=>0`; output length at 0.5 is between both lengths; `cycleOrder('bhs')` equals the array above.
- [ ] **Step 2:** `npm run test:unit` → FAIL.
- [ ] **Step 3:** Implement `morph.js`.
- [ ] **Step 4:** `npm run test:unit` → PASS.
- [ ] **Step 5: Failing site test** `reserves the longest phrase`: hero contains all three phrases (one visible in `.hero__phrase`, others in `aria-hidden` sizers) and `<img` with `width=` and `height=`.
- [ ] **Step 6:** Implement `Hero.astro`; Run `npm test` → PASS.
- [ ] **Step 7:** Commit `feat: hero with language morph engine`.

### Task 5: SectionTitle, About, Services

**Files:** Create `src/components/SectionTitle.astro`; Rewrite `About.astro`, `Services.astro`; Create `tests/site/sections.test.mjs`

**Interfaces:** `SectionTitle` props `{ id: string; eyebrow: string; title: string; alt: string }` → renders `<p class="section-eyebrow">`, `<h2 id={id}-title>`, `<span class="section-alt" aria-hidden="true" data-scramble>{alt}</span>`. Sections use `aria-labelledby={id}-title`.

- [ ] **Step 1: Failing test:** About contains 4 `.fact` items with the four fact values, the confidentiality note, the skills list; Services is an `<ol>` with 5 `<li>`, each with number, `<h3>` title, description and tags present in the DOM; Services ends with an `<a href="#contact"`; every `<section>` has `aria-labelledby`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement. About: two columns (portrait + facts | body, skills, note in a ruled aside); single column under 900px. Services: index rows, number in accent, title in display serif; description/tags collapse visually on `(hover: hover)` and expand on row `:hover`/`:focus-within`; always expanded on touch. Rows are not links.
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit `feat: about facts and services index`.

### Task 6: Process (replaces Testimonials)

**Files:** Create `src/components/Process.astro`; Delete `src/components/Testimonials.astro`; extend `tests/site/sections.test.mjs`

- [ ] **Step 1: Failing test:** each page has `<section id="process"` with an `<ol>` of 4 steps whose titles match `process.steps`, plus `process.note`; no file under `src/components` named `Testimonials`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement: horizontal 4-column line with a connecting hairline and step numbers above 900px, vertical list below. Delete Testimonials and remove it from pages.
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit `feat: how I work section replaces testimonials`.

### Task 7: Experience timeline

**Files:** Rewrite `src/components/Work.astro`; extend `sections.test.mjs`

- [ ] **Step 1: Failing test:** `#work` has 6 entries; each shows year, title, category and a text label "Experience"/"Education" (translated from `work.badgeExp`/`badgeEdu`); no inline `style=` with item colors.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement: three-column rows (year | title + org | description) above 900px, stacked below; hairline between rows; the `color` field is ignored.
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit `feat: experience timeline`.

### Task 8: Contact with working Netlify form

**Files:** Create `src/scripts/contact-form.js`, `tests/unit/contact-form.test.mjs`; Rewrite `src/components/Contact.astro`; extend `sections.test.mjs`

**Interfaces — `src/scripts/contact-form.js`:**
- `validate(fields: {name: string; email: string; message: string}): { name?: 'name'; email?: 'email'; message?: 'message' }` — returns keys of failing fields (empty object when valid). Name and message must be non-blank after trim; email must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
- `encode(data: Record<string,string>): string` — `application/x-www-form-urlencoded`.
- `submitContact(data: Record<string,string>, fetchImpl = fetch): Promise<void>` — `POST /` with header `Content-Type: application/x-www-form-urlencoded`; resolves on `res.ok`, otherwise throws `Error('http ' + res.status)`; network errors propagate.

- [ ] **Step 1: Failing unit tests:** `validate({name:' ',email:'a@b',message:''})` deep-equals `{name:'name',email:'email',message:'message'}`; valid input → `{}`; `encode({'form-name':'contact',a:'x y'})==='form-name=contact&a=x%20y'`; `submitContact rejects on non-2xx` with a fake fetch returning `{ok:false,status:500}`; resolves with `{ok:true}` and called with method `POST`.
- [ ] **Step 2:** `npm run test:unit` → FAIL. **Step 3:** Implement. **Step 4:** → PASS.
- [ ] **Step 5: Failing site test:** each page has `<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"`, hidden `form-name` = `contact`, hidden `lang` = page lang, labelled inputs (`<label for=`), each input has `aria-describedby` to an error element, and a `role="status"` live region.
- [ ] **Step 6:** Implement `Contact.astro`: details list (email, phone with `overflow-wrap:anywhere`, languages, availability as text), LinkedIn and Calendly links, form. On submit: validate → show per-field errors (`aria-invalid`, focus first invalid) → button `aria-busy="true"` with `form.sending` label and spinner → `submitContact` → success message in live region and reset, or `errors.network` and button restored.
- [ ] **Step 7:** `npm test` → PASS.
- [ ] **Step 8:** Commit `feat: contact form delivers via Netlify Forms`.

### Task 9: Motion wiring + thin pages

**Files:** Create `src/scripts/motion.js`; Rewrite `src/pages/index.astro`, `fr/index.astro`, `bhs/index.astro`; Create `tests/site/motion.test.mjs`

**Interfaces:** Consumes `morphFrame`, `cycleOrder` (Task 4); `[data-reveal]`, `[data-scramble]` hooks (Tasks 1, 5). Exports `initMotion(): void`, called from one `<script>` in `Layout.astro`.

Behaviour: if `matchMedia('(prefers-reduced-motion: reduce)').matches`, return immediately (no classes added). Otherwise add `html.motion`, then:
- Hero: anime.js timeline over a `{p:0}` object, `duration` 1200, `easing: 'easeOutQuad'`, `update` writes `morphFrame(from,to,p)` into `.hero__morph`; hold 4000 between steps following `cycleOrder(lang)`. Pause via IntersectionObserver when the hero leaves the viewport and on `visibilitychange`.
- Reveals: IntersectionObserver (threshold 0.15) one-time; `[data-reveal]` children translate 24px → 0 and fade, stagger 80ms, duration `--dur-slow`; hairlines `[data-rule]` scale X 0 → 1; the About year counts from 2000 to 2015 once.
- `[data-scramble]`: one-time `morphFrame(randomGlyphs, text, p)` over 600ms.

- [ ] **Step 1: Failing site test** `no-js content visible`: built HTML has `class="no-js"` on `<html>`; global CSS hides `[data-reveal]` only under a selector starting with `html.motion`; pages contain no `<script` importing anything other than the Layout script (thin pages: Layout + 6 sections in order Hero, About, Services, Process, Work, Contact).
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** → PASS.
- [ ] **Step 5:** Commit `feat: anime.js motion layer with reduced-motion guard`.

### Task 10: Render verification and cleanup

**Files:** Delete `public/avatar.glb`; fix whatever the gates find.

- [ ] **Step 1:** `grep -rn "avatar.glb" src` → no matches; delete `public/avatar.glb`.
- [ ] **Step 2:** `npm test` → all pass.
- [ ] **Step 3:** `npm run build && npx astro preview` (background), then for `dist/index.html`, `dist/fr/index.html`, `dist/bhs/index.html` run from the repo root:
  - `node /Users/admirdemir/scripts/verify_responsive.mjs dist --scale=1.25` → no overflow at 280/320/414
  - `node /Users/admirdemir/scripts/verify_states.mjs <file>` and `--dark` → all pass
  - `node /Users/admirdemir/scripts/axe_audit.mjs <file>` → 0 violations
  - `node /Users/admirdemir/scripts/verify_reduced_motion.mjs <file>` → pass
  - `node /Users/admirdemir/scripts/verify_keyboard.mjs <file>` → pass
  - `node /Users/admirdemir/scripts/verify_target_size.mjs <file>` → pass
  - `python3 /Users/admirdemir/scripts/check_no_emoji.py src` → pass
  Report real outputs; fix and re-run until green.
- [ ] **Step 4:** In the browser preview at 1440 and 375, light and dark: screenshot hero mid-morph and at rest (confirm no layout shift), services hover, form error state, mobile menu open. Click the menu, a language link and the submit button with empty fields.
- [ ] **Step 5:** Commit `chore: verification fixes, remove 3D avatar`.
- [ ] **Step 6:** Report: gate outputs, screenshots, the list of new FR/BHS strings for Sabrina to review, and a reminder that the form must be tested on a Netlify deploy preview and the stash can be dropped.
