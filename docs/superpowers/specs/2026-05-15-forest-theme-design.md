# Forest theme — design

**Date:** 2026-05-15
**Status:** Approved, ready to implement
**Scope:** Landing page only (`pufferstudy-landing`). App is out of scope.

## Goal

Add a third theme called **Forest** alongside the existing Light and Dark themes. The toggle becomes a 3-state cycle: `Light → Dark → Forest`. System mode is removed.

## Palette

Forest is a dark theme with deep evergreen background, moss-green primary, and a cool stone-grey secondary accent (no yellows or warm ambers). All tokens mirror the structure of the existing `.dark` block so component code requires no changes.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0E1A14` | Page background — deep evergreen |
| `--surface` | `#16241C` | Cards, panels |
| `--surface-2` | `#1B2E23` | Slightly lifted surfaces |
| `--surface-3` | `#22382B` | Highest surface tier |
| `--border` | `rgba(143, 179, 155, 0.14)` | Subtle moss hairline |
| `--border-strong` | `rgba(143, 179, 155, 0.24)` | Emphasized borders |
| `--ink` | `#EDE8DA` | Primary text — soft cream |
| `--ink-muted` | `#8FB39B` | Secondary text — sage |
| `--ink-faint` | `#5F7A68` | Tertiary text — dim sage |
| `--primary` | `#6BBF8A` | Buttons, links, focus — moss green |
| `--primary-hover` | `#84CFA0` | Hover state |
| `--primary-active` | `#52A672` | Active/pressed state |
| `--primary-foreground` | `#0E1A14` | Text on primary surfaces |
| `--ring` | `rgba(107, 191, 138, 0.50)` | Focus ring |
| `--success` | `#7FD49A` | Bright moss |
| `--warning` | `#A8AFA6` | **Stone grey, not yellow** (per user direction) |
| `--danger` | `#C76B5C` | Muted rust |
| `--info` | `#8FB39B` | Sage (info notes) |
| `--shadow-sm` | `inset 0 0 0 1px rgba(143, 179, 155, 0.05)` | Soft moss outline |
| `--shadow` | `inset 0 0 0 1px rgba(143, 179, 155, 0.07)` | Card outline |
| `--shadow-lg` | `inset 0 0 0 1px rgba(143, 179, 155, 0.10), 0 24px 60px rgba(0, 0, 0, 0.55)` | Lifted panel |

Note: `--warning` is mapped to stone-grey rather than amber because the user explicitly asked for a non-yellow accent. The semantic meaning of "warning" is preserved but expressed via the grey accent so the theme stays cohesive. If a future call-to-action needs a sharper attention color, we can revisit.

## Background gradient

The landing body has a subtle radial gradient driven by `body.landing`. Light and dark variants use orange (`rgba(255, 120, 73, 0.05)`); forest gets a moss-green tint:

```css
.forest body.landing {
  background-image: radial-gradient(circle at 50% 40%, rgba(107, 191, 138, 0.05), transparent 55%);
}
```

## Toggle behavior

The existing toggle cycles `light → dark → system`. New behavior:

- Cycle order: `light → dark → forest → (back to light)`
- System mode is **removed** entirely. Default for new visitors is **Light**.
- Icons: `Sun` (light) / `Moon` (dark) / `Trees` (forest), all from `lucide-react`.
- Aria label updates to reflect the three options.

Rationale for dropping System: the user described "three modes" and adding a fourth would dilute the choice. Existing users with `theme="system"` in localStorage will fall through on next visit, get Light, and find the new cycle on the next click.

## Files to change

1. **`app/globals.css`** — add a `.forest` block in `@layer base` mirroring `.dark`, plus the `.forest body.landing` gradient rule.
2. **`components/theme-toggle.tsx`** — update `ORDER`, `ICONS`, `LABEL` to the 3-mode set; import `Trees` instead of `Monitor`.
3. **`app/layout.tsx`** — change `defaultTheme="system"` → `defaultTheme="light"`, remove `enableSystem`, pass `themes={["light", "dark", "forest"]}`.

No new dependencies.

## Out of scope

- Address-bar theme color (`viewport.themeColor`) — Next.js metadata API only exposes `prefers-color-scheme: light | dark` media queries; there is no way to tint the address bar for a custom user-selected theme. Forest users keep the dark-mode address-bar color.
- The app at `C:\Users\spexr\pufferstudy` — separate codebase, separate design system (Notebook, not Formal). Theming there is a future task.
- Persisting the theme choice across the landing and app — they're separate origins.

## Verification

- `npm run dev`, click the toggle three times, eyeball every section in each theme: Nav, Hero, How It Works, Privacy, Pricing, FAQ, CTA, Footer.
- Confirm focus ring on buttons uses the moss-green `--ring`.
- Confirm hairlines (`--border`) are visible but subtle in forest mode.
- Commit and `git push origin main` — Vercel auto-deploys to `pufferstudy-landing.vercel.app`.
- After deploy reaches `Ready`, load the live URL and verify all three themes work end-to-end.
