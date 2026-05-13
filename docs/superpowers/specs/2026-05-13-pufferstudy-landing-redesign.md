# PufferStudy Landing — Formal Redesign

**Date:** 2026-05-13
**Scope:** In-place redesign of `pufferstudy-landing` (the marketing site at https://pufferstudy-landing.vercel.app). No new sections, no new dependencies, no API changes.
**Replaces:** Notebook visual direction shipped in commit `bfeda36` (v1.0).
**Rationale:** User asked for a more formal visual language — Public Sans, square corners, cream-white light surfaces, VisionOS-style spatial dark mode. Brand color and section structure unchanged.

---

## 1. Decisions locked

| Topic | Decision |
|---|---|
| Type family | Public Sans (single family, no mono pair) |
| Corner radius | `0` everywhere (`--radius-*` all `0px`) |
| Light bg | `#FBF7EE` cream (unchanged) |
| Light surface | `#FFFFFF` flat panels, 1px hairline borders, no shadows |
| Dark bg | `#0A0A0F` cool near-black (VisionOS-style spatial) |
| Dark surface | `rgba(255,255,255,0.04)` with `backdrop-blur(16px)`, hairline `rgba(255,255,255,0.08)` borders, inner glow |
| Accent / brand | `#FF7849` puffer orange (unchanged) |
| Sections | All 8 kept (Nav, Hero, How It Works, Privacy, Pricing, FAQ, CTA, Footer) |
| Tone | Formal, declarative, no exclamation marks, measured second person |
| Dependencies | None added |
| Files | ~12 edited, 0 created |

---

## 2. Design tokens (`app/globals.css`)

### Light mode

```
--bg:                  #FBF7EE   /* cream */
--surface:             #FFFFFF
--surface-2:           #FAFAF7
--border:              #E5E5EA   /* hairline */
--border-strong:       #D4D4D8
--ink:                 #0F0F11
--ink-muted:           #5C5C66
--ink-faint:           #9494A0
--primary:             #FF7849
--primary-hover:       #FF9466
--primary-active:      #E85A2A
--primary-foreground:  #FFFFFF
--ring:                rgba(255,120,73,0.40)
--shadow-sm:           none
--shadow:              none
--shadow-lg:           none
```

### Dark mode (VisionOS spatial)

```
--bg:                  #0A0A0F
--surface:             rgba(255,255,255,0.04)
--surface-2:           rgba(255,255,255,0.06)
--border:              rgba(255,255,255,0.08)
--border-strong:       rgba(255,255,255,0.14)
--ink:                 #F5F5F7
--ink-muted:           #A1A1AA
--ink-faint:           #6E6E76
--primary:             #FF7849
--primary-hover:       #FF9466
--primary-active:      #E85A2A
--primary-foreground:  #0A0A0F
--ring:                rgba(255,120,73,0.50)
--shadow-sm:           inset 0 0 0 1px rgba(255,255,255,0.04)
--shadow:              inset 0 0 0 1px rgba(255,255,255,0.06)
--shadow-lg:           inset 0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.50)
```

### Geometry

```
--radius-sm:  0
--radius:     0
--radius-lg:  0
--radius-xl:  0
```

### Type

- `--font-sans: var(--font-public-sans), ui-sans-serif, system-ui, sans-serif;`
- Mono var removed (no second family).
- Drop OpenType `font-feature-settings: "ss01", "cv11"` from `html, body`.

### Body background treatment

- `body.landing` light: subtle radial vignette `rgba(255,120,73,0.04)` at top-right fading to transparent. No paper grain.
- `body.landing` dark: subtle radial center-fade `rgba(255,120,73,0.04)` to transparent at ~60% radius. Gives the void some depth.

### New utilities

```
.glass-surface     { background-color: var(--surface); backdrop-filter: blur(16px); }
.hairline          { border: 1px solid var(--border); }
.hairline-t        { border-top: 1px solid var(--border); }
.hairline-b        { border-bottom: 1px solid var(--border); }
.hairline-strong   { border: 1px solid var(--border-strong); }
.section-label     { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint); font-weight: 500; }
.tabular           { font-variant-numeric: tabular-nums; }
```

`bg-surface` keeps working as before — backdrop-blur is applied via `.glass-surface` or directly on Panel elements.

---

## 3. `app/layout.tsx` changes

- Replace `Spline_Sans, Spline_Sans_Mono` imports with `Public_Sans` from `next/font/google`.
- Weights: `['300','400','500','600','700']`.
- Variable: `--font-public-sans`.
- Drop the mono variable entirely.
- `<html className={publicSans.variable}>` (single variable).
- Update `viewport.themeColor` dark from `#1A1814` → `#0A0A0F`.
- Keep all metadata copy as-is (it's already neutral). May refine for formal tone in a later pass.

---

## 4. Component vocabulary

### `components/ui/button.tsx`

Variants:
- `primary`: `bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]`. No border.
- `secondary`: `bg-transparent text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]`.
- `ghost`: `bg-transparent text-[var(--ink)] hover:bg-[var(--surface-2)]`. No border.
- `outline-primary`: `bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)]/8`.

Sizes:
- `sm`: `h-9 px-3 text-sm`
- `md`: `h-11 px-5 text-sm`
- `lg`: `h-13 px-7 text-base`

All variants: `rounded-none`, `font-medium`, `transition-colors`, focus = `outline-2 outline-offset-2 outline-[var(--primary)]`.

### `components/ui/input.tsx`

- `bg-[var(--surface)] border border-[var(--border)] rounded-none h-11 px-3 text-sm`
- Focus: `border-[var(--border-strong)] outline-none`
- Dark mode: inner glow comes from the shadow var in surface.
- Placeholder: `text-[var(--ink-faint)]`.

### `components/theme-toggle.tsx`

- Re-skin as `ghost` button (`h-11 w-11 rounded-none`).
- Same Lucide `Sun` / `Moon` icons, stroke `1.75`.

### `components/puffer-logo.tsx`

- Reduce SVG stroke width if it currently leans cartoony (target ~1.5).
- Otherwise keep the mark.

### Panel pattern (no Card component)

```tsx
<div className="bg-surface hairline p-8 backdrop-blur-xl">
  ...
</div>
```

The `bg-surface` var resolves to `#FFFFFF` (light) or `rgba(255,255,255,0.04)` (dark) — the backdrop-blur takes effect only when surface is translucent (i.e., dark), so the same component works in both modes.

---

## 5. Section-by-section

### `nav.tsx`

- `position: sticky; top: 0; z-index: 40;`
- `bg-[var(--bg)]/85 backdrop-blur-xl hairline-b` (hairline bottom only).
- Container `max-w-6xl mx-auto px-6 h-16 flex items-center justify-between`.
- Left: small puffer logo + wordmark `PufferStudy` (Public Sans 600, 15px, tracking-tight).
- Right (desktop): `How it works · Pricing · FAQ` text links (ink-muted, hover ink) + `Open app ↗` ghost button (only renders if `NEXT_PUBLIC_APP_URL` is set) + theme toggle.
- Right (mobile): hamburger → bottom-anchored menu using `details/summary` or a small useState toggle, with the same items stacked + theme toggle.

### `hero.tsx`

- `py-32 md:py-40` section padding.
- Container `max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_1fr] gap-16 items-center`.
- Left column:
  - Eyebrow: `<p className="section-label">v1.0 · MAY 2026</p>`
  - H1: `font-semibold tracking-tight text-5xl md:text-6xl leading-[1.05]` — copy: `Turn your notes into a printable cheat sheet.`
  - Lede: `text-lg text-ink-muted mt-6 max-w-md` — copy: `Capture homework, notes, and packets. PufferStudy organizes the material into a single-page cheat sheet — without storing your data on any server.`
  - Waitlist form below (existing `<WaitlistForm />`).
  - Beneath form: `<p className="text-xs text-ink-faint">No account required. Email used only to notify you when the next release ships.</p>`
- Right column: framed mock. Implement as a fixed-aspect `<div className="hairline aspect-[3/4] bg-surface p-6 flex flex-col gap-3">` containing simulated cheat-sheet lines (small hairline divider rows + faux text bars). No real screenshot needed for v1; the structural mock is more formal anyway. Below: `<p className="section-label mt-4 text-center">FIG. 01 — GENERATED CHEAT SHEET</p>`

### `how-it-works.tsx`

- `py-32`. Container `max-w-6xl mx-auto px-6`.
- Header block: `section-label "PROCESS"`, h2 `text-4xl font-semibold tracking-tight max-w-2xl` — copy: `Three steps from photo to cheat sheet.`
- Grid: `grid md:grid-cols-3 gap-px bg-[var(--border)] hairline mt-16` (the `gap-px` trick creates hairline dividers between panels).
- Each panel: `bg-surface p-10`
  - Numeral: `<span className="block tabular text-6xl font-light text-ink-faint mb-8">01</span>` (Public Sans 300, tabular nums utility from globals.css)
  - Title: `text-xl font-semibold mb-3`
  - Description: `text-sm text-ink-muted leading-relaxed`

Steps:
1. **Capture material.** Take photos of homework, class notes, and review packets. Upload directly from your phone or computer.
2. **Organize by subject.** Group images under a subject and add the test date. PufferStudy keeps everything ordered by relevance and recency.
3. **Generate a cheat sheet.** Produce a printable one-page summary using your own Gemini API key. No data leaves your browser until you choose to print.

### `privacy.tsx`

- `py-32`. Container `max-w-6xl mx-auto px-6`.
- `grid md:grid-cols-2 gap-16`.
- Left: `section-label "DATA HANDLING"`, h2 `text-4xl font-semibold tracking-tight max-w-md` — copy: `Your study material stays on your device.`
- Right: body paragraph + hairline-bullet list.
  - Paragraph (text-ink-muted): `PufferStudy operates entirely in your browser. Photos are stored locally in IndexedDB. Subject metadata lives in localStorage. We do not transmit your study material to any server we control.`
  - List of 4 guarantees, each row: hairline divider top, 16px tall checkmark glyph (lucide `Check`), bold label, ink-muted description.
    - `Local storage` — Images and notes stay in your browser.
    - `Bring-your-own AI key` — Cheat sheet generation uses your Gemini API key.
    - `No tracking` — No analytics, no third-party scripts.
    - `Open source` — Source code is public on GitHub.

### `pricing.tsx`

- `py-32`. Container `max-w-2xl mx-auto px-6 text-center`.
- `section-label "PRICING"`, h2 `text-4xl font-semibold tracking-tight` — copy: `One plan. No tiers.`
- Panel `mt-12 hairline bg-surface p-12 backdrop-blur-xl`.
  - Eyebrow: `section-label "OPEN BETA"`.
  - Price: `text-6xl font-semibold mt-4` — `Free`.
  - Sub: `text-ink-muted text-sm mt-2` — `Available at no cost during the open beta period.`
  - Hairline divider `mt-8 mb-8`.
  - Feature list, 5 items, hairline rows: unlimited subjects · unlimited images · printable cheat sheets · works offline after first load · bring your own Gemini key.
  - Primary CTA: `Open the app ↗` (full width, size `lg`).

### `faq.tsx`

- `py-32`. Container `max-w-3xl mx-auto px-6`.
- `section-label "QUESTIONS"`, h2 `text-4xl font-semibold tracking-tight`.
- Implement accordion with native `<details>`/`<summary>` for accessibility and zero JS:
  - `<details className="hairline-b py-6 group">`
  - `<summary className="flex items-center justify-between cursor-pointer list-none"><span className="text-base font-medium">Question?</span><Plus className="group-open:hidden" /><Minus className="hidden group-open:block" /></summary>`
  - Body: `<div className="text-ink-muted text-sm mt-4 pl-4 border-l border-[var(--border)] leading-relaxed">Answer.</div>` — vertical hairline on open ✓
- 6 questions:
  1. What does PufferStudy do? — `It turns photos of your study material into a single printable cheat sheet ahead of a test.`
  2. Where is my data stored? — `Locally in your browser (IndexedDB + localStorage). Clearing browser data will erase your subjects.`
  3. Do I need an account? — `No. You only provide a Gemini API key, which is stored in your browser.`
  4. How much does it cost? — `Free during the open beta. We pass any API usage costs to your own Gemini account.`
  5. What's the difference between this landing page and the app? — `This page is for information. The app at pufferstudy.vercel.app is where you upload material and generate sheets.`
  6. Who built this? — `Founded by Xempted. Source code is public on GitHub.`

### `cta.tsx`

- `py-32`. Container `max-w-2xl mx-auto px-6 text-center`.
- Hairline divider at top: `<div className="hairline-t pt-32">`
- H2 `text-4xl font-semibold tracking-tight` — copy: `Ready when your next test is.`
- Sub: `text-ink-muted mt-4` — copy: `Join the waitlist for release announcements and early access to new features.`
- Waitlist form `mt-10`.

### `footer.tsx`

- `hairline-t py-16`. Container `max-w-6xl mx-auto px-6`.
- `grid md:grid-cols-3 gap-12`.
- Column 1: PufferStudy wordmark + small puffer logo. Tagline below: `Study aid that turns your notes into cheat sheets.` Then social/source link `View source ↗`.
- Column 2 (link columns x2 nested): Product (Open app · Roadmap · Changelog) and Info (Privacy · FAQ · Contact).
- Column 3 (right-aligned on desktop): `Founded by Xempted` + `v1.0 · Released May 7, 2026` + `© 2026 PufferStudy` — each on its own line, `text-xs text-ink-faint`.

---

## 6. Accessibility

- All buttons keep 2px focus outline at 2px offset in `var(--primary)`.
- Color contrast: ink `#0F0F11` on `#FFFFFF` = 19.7:1 (AAA). Ink-muted `#5C5C66` on `#FFFFFF` = 6.4:1 (AAA body). Dark ink `#F5F5F7` on `#0A0A0F` = 18:1. Orange `#FF7849` on white = 3.0:1 — meets AA Large but use only on bg ≥ 18px / on contained primary buttons where the foreground is white (10:1).
- Native `<details>`/`<summary>` for FAQ — keyboard accessible by default.
- `prefers-reduced-motion` block in `globals.css` preserved.

---

## 7. Out of scope

- API changes (`/api/waitlist` untouched).
- New dependencies (no new packages).
- New sections.
- Light-mode glassmorphism (decided against — solid white wins for formality).
- Mono pairing (dropped — no code on the landing).
- Real product screenshots (using structural mock for hero v1; can swap in real screenshot post-launch).
- The PufferStudy app at `pufferstudy.vercel.app` — separate project, separate redesign cycle.

---

## 8. Verification

Before push:
1. `npm run typecheck` — zero errors.
2. `npm run build` — production build succeeds.
3. `npm run dev` and visually walk through `/` in both light and dark, mobile and desktop viewports.

After push:
1. Wait ~1 min for Vercel auto-deploy.
2. Confirm `https://pufferstudy-landing.vercel.app` shows the new design.
3. Submit a test email through the waitlist form to confirm API still works.

---

## 9. Memory updates after ship

Update `pufferstudy-design-decisions.md`:
- Replace Spline Sans entry with Public Sans.
- Replace radius (12/16) entries with `0` (square).
- Replace dark-mode `#1A1814` warm with `#0A0A0F` VisionOS spatial.
- Replace "Notebook" direction name with "Formal" (or similar).
- Keep brand orange, founder credit, release date, hosting topology.

Update `pufferstudy-resume.md`:
- Note that landing was redesigned 2026-05-13.
- Note any Vercel account migration outcome (separate work, blocked on user OAuth).
