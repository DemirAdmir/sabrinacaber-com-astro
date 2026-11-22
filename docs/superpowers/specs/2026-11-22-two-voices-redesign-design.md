# Two Voices — sabrinacaber.com redesign

Date: 2026-11-22
Status: draft, awaiting approval

## Intent

Full visual redesign of Sabrina Caber's one-page portfolio (certified FR/EN
translator, content writer, copywriter, court interpreter). The site should feel
modern and slick, and should **sell a human language expert**. The core idea:
the site itself performs translation. Text moves between French, English and
Bosnian, so a visitor understands what she does before reading a sentence.

## Goals

- A distinctive, memorable first screen built around one signature moment: the
  hero phrase morphing letter by letter between languages.
- Editorial calm everywhere else: paper, ink, large serif, generous space.
- Everything true. No invented proof (testimonials, metrics, clients).
- A contact form that actually delivers messages.
- EN, FR and BHS pages keep working from the existing `translations.ts`.
- Fast: far less JavaScript than today.

## Non-goals

- No new pages, blog, CMS or booking system. Same one-page structure.
- No copywriting overhaul beyond the sections that change (hero line, How I
  work, small FR/EN title pairs). Existing service/experience copy stays.

## Anti-goals (would be a failure even if it works)

- Looking like an AI product (no neon gradients, glowing orbs, chat UI, "AI-powered" tropes).
- Fake social proof of any kind.
- Motion that makes text hard to read or blocks content for reduced-motion users.
- Generic template look (equal card grids, bento tiles).

## Constraints

- Astro 4, static output, hosted on Netlify (`netlify.toml`).
- **anime.js is the animation library** (user requirement). Version 3.2.x as installed.
- Three languages, routes `/`, `/fr/`, `/bhs/`, all rendered from the same components.
- Zero emoji anywhere (project rule). Icons are inline lucide SVG.
- WCAG 2.2 AA in light and dark; all interactive states; no overflow at 280/320/414px.
- Real assets available: `public/sabrina.png` (portrait), `favicon.svg`.

## Approaches considered

1. **Rebuild sections in place (chosen).** Keep Astro, routes, `translations.ts`
   and the section list; rewrite each component's markup and styles from scratch
   on a new token layer. Keeps working i18n and routing, allows a full layout change.
2. Fresh Astro project. Throws away working i18n/routing for no benefit.
3. Restyle existing CSS only. Insufficient: layouts (services, work, hero) change, not just colors.

Visual direction: user chose **"Two Voices"** (bilingual concept) over Editorial
journal and Soft bento; implementation borrows the editorial layout language.

## Starting point

Build from the **committed** code on `main` (HEAD `928d43e`), not the stash.
The stash is not used.

## Dependency changes

- Add: `animejs@3.2.x` (not in committed `package.json`; it was only in the stash).
- Keep: `astro`.
- Remove: `gsap`, `three`, `@types/three` (and any 3D avatar / GSAP code). Delete `public/avatar.glb` (1.2 MB) once nothing references it.
- Fonts via Google Fonts: a display serif (**Fraunces**, with optical sizing and
  italic) + a text sans (**Inter**). Builder's call to swap for an equivalent if
  contrast/rendering demands it.

## Visual system

One token layer in `src/styles/tokens.css` (CSS custom properties), imported once
in `Layout.astro`. Components reference semantic tokens only; no raw hex/px/ms in
components.

- **Light (default):** warm paper background, ink-blue text, one accent:
  vermilion "editor's red pen", used sparingly (key word in hero, links on hover,
  primary button, numbers).
- **Dark (via `prefers-color-scheme`):** deep ink background, paper text, the
  accent lightened to keep contrast. No manual toggle (builder may add one later; not required).
- Type: display serif at least 2.5x body size; body 17-18px, 65ch measure.
- Space: 4px rhythm; wide margins; thin hairline rules separate sections.
- Shape: mostly square edges, hairline borders; one small radius for buttons/inputs.
- Recurring motif: paired language labels, e.g. `FR` / `EN` in small caps beside
  section titles, and a thin vertical "split" rule in the hero.

## Page structure

```
NAV      SABRINA CABER        About  Services  Process  Experience  Contact   EN FR BHS  [Start a project]
HERO     Certified translator FR <-> EN
         << Les mots sont mon metier. >>   <morphs into>   Words are my craft.     | portrait |
         subtitle (existing copy)          [Start a project]  See services
ABOUT    two-column: portrait/facts left, body + skills right; confidentiality note set apart
         Facts replace the unverified stats (15+ clients / 20+ projects / 3+ years are removed):
         "Since 2015" (first role in timeline), "3 languages" (FR, EN, BHS),
         "Certified court interpreter", "MA French Language & Literature".
         Only the year counts up; the rest are text.
SERVICES numbered index list (01-05): large title row, description + tags expand on hover/focus
PROCESS  "How I work" - 4 steps in a horizontal line (vertical on mobile)
WORK     timeline: year | title + org | description; experience vs education labelled in text
CONTACT  large headline, email/phone/languages/availability, LinkedIn, Calendly link, form
FOOTER   name, tagline, links, language switch, copyright
```

### Hero (signature moment)

- Above the H1, a visible eyebrow: "Sabrina Caber - Certified translator FR <-> EN"
  (translated). Her name also stays in `<title>`, meta and nav. (Designer's call.)
- The H1 holds the **current page's language** line as real text (for SEO and
  screen readers). A decorative, `aria-hidden` layer animates the morph.
- Sequence: the phrase starts in another language and scrambles letter by
  letter into the page language, then holds. Cycle through the three languages
  with a long pause on the page language (~4 s hold, morph ~1.2 s). Pause while
  the hero is off screen or the tab is hidden.
  - EN page: FR -> EN, BHS -> EN. FR page: EN -> FR, BHS -> FR. BHS page: FR -> BHS, EN -> BHS.
  - Phrases: FR "Les mots sont mon metier." (with accents), EN "Words are my craft.",
    BHS from existing `hero` translation or "Rijeci su moj zanat." (with diacritics) - confirm wording in BHS translations.
- Implementation: anime.js drives a per-character timeline; layout must not
  shift (reserve the width of the longest phrase, or stack phrases in one grid cell).
- Reduced motion: no morph; show the page-language phrase statically with the
  other languages as small static labels.

### Section titles

Each section title gets a small secondary line in a second language (e.g.
"Services" with "Prestations" beneath in the accent at small size). On scroll
into view, the secondary line does a short, one-time scramble-in (anime.js).
Decorative line is `aria-hidden`.

### Services

Numbered index, not cards. Each row: number, title, arrow. Description and tags
reveal on hover/focus on desktop; always visible on touch/mobile. Rows are not
links (no dead targets); the section ends with a "Start a project" link to contact.

### How I work (replaces Testimonials)

Four steps, translated in all three languages (new `process` key in translations,
remove `testimonials`):

1. **Brief** - you share the text, audience and deadline; I confirm scope and quote.
2. **Translate / write** - first draft, keeping tone, terminology and intent.
3. **Review** - careful proofreading pass; your feedback is incorporated.
4. **Deliver** - final files in your format, on time, in confidence.

Followed by the confidentiality note. Copy is the builder's first draft; FR and
BHS versions must be natural, not literal.

### Experience timeline

Existing `work.items`. Drop the per-item `color` field from rendering (off-theme
colors). Experience vs Education distinguished by a text label, not color alone.

### Contact

- Netlify Forms: `<form name="contact" method="POST" data-netlify="true">` plus a
  honeypot field; hidden `form-name` input. Submit via `fetch` to `/` with
  url-encoded body; show real success only on a 2xx response, real error message
  otherwise (with the email address as fallback). Loading state on the button.
- One form name shared by all three language pages; include a hidden `lang` field.
- Validation: required name, valid email, message; inline error text per field.
- Success/error strings come from translations (remove emoji/check glyphs from them).
- Calendly and LinkedIn links kept as-is.

## Motion (anime.js)

- Single module `src/scripts/motion.ts`: IntersectionObserver-driven one-time
  reveals (lines rise from a mask, hairline rules draw in, numbers count up),
  plus the hero morph and title scrambles.
- Durations 200-700 ms for reveals, ease-out entrances; the hero morph is the
  only long piece.
- `prefers-reduced-motion: reduce`: no transforms/scrambles; content is visible
  without JS (reveal classes are added by JS, so no-JS shows everything).
- Remove custom cursor and `cursor: none`.

## Accessibility

- One H1 (hero). Section headings H2.
- Skip link; visible focus ring (accent, 3:1+) on every control.
- Language switch links carry `lang` and `hreflang`; current language marked `aria-current`.
- Mobile menu: button with `aria-expanded`, Escape closes, focus returns.
- Decorative morph/scramble layers `aria-hidden="true"`.

## Cleanup

- Remove: `Testimonials.astro` (its quotes are hardcoded placeholders),
  GSAP/Three code in pages and components,
  emoji flag strings in `Layout.astro` `langConfig` if rendered.
- `src/pages/{index,fr/index,bhs/index}.astro` become thin: Layout + sections.

## Verification

- `npm run build` passes.
- Render each language page in light and dark at 1440 / 768 / 414 / 320 / 280 px:
  no horizontal overflow, hero morph does not shift layout.
- Contrast checked on rendered pages (text and focus ring) in both themes.
- Keyboard: tab through nav, language switch, services, form; mobile menu traps/escapes correctly.
- Reduced motion: emulate and confirm all content present and static.
- Form: verified on a Netlify deploy preview (Netlify Forms only work deployed);
  locally confirm the error path shows a real message.

## Left to the builder

- Exact color values (must pass contrast in both themes).
- Exact morph algorithm (random glyph scramble vs. letter crossfade), within the
  readability and no-layout-shift constraints.
- Final wording of the 4 process steps in FR/BHS.

## New copy and translation review (designer's call)

The builder writes all new strings in EN, FR and BHS (nav "Process", CTAs,
section-title second lines, process steps, form errors, reduced-motion labels)
and lists every new key in the final report. Sabrina, as a professional
translator, reviews the FR and BHS strings before launch. Not a blocker for the build.

## Stash note

The previous uncommitted work is saved in `git stash` as
"pre-two-voices WIP (cursor, loader, testimonials i18n)". The user asked for it
discarded; drop it once the redesign lands.
