# Login + Sign-up — design

**Date:** 2026-05-15
**Status:** Approved, ready to implement
**Scope:** Landing repo (`vediry/PufferStudy`) + App repo (`p7kbk748qb-debug/pufferstudy`, to be migrated to vediry).

## Goal

Replace the current "marketing site with waitlist" with a "real product entry point." Visitors land on the intro, click **Get started** or **Sign in**, and after auth land in the existing app dashboard. Their subjects, uploads, and cheat sheets are tied to a real account.

## User flow

```
1. Visitor opens pufferstudy-landing.vercel.app
2. Reads the intro (Hero, How It Works, Privacy, Pricing, FAQ)
3. Clicks "Get started — free"  →  /sign-up
   OR clicks "Sign in"           →  /sign-in
4. After auth, redirects to pufferstudy.vercel.app/  (the app dashboard)
5. Creates a subject, pastes their own Gemini API key once in /settings,
   uploads photos / files, generates cheat sheet.
```

## Architecture

Two separate codebases / Vercel projects, sharing one Clerk auth instance:

```
Landing  (vediry/PufferStudy → pufferstudy-landing.vercel.app)
   - Marketing pages (unchanged)
   - /sign-in  /sign-up routes (Clerk components)
   - Nav: "Sign in" + "Get started"
   - Hero CTA: "Get started — free" (replaces waitlist)

App  (vediry/pufferstudy-app → pufferstudy.vercel.app, after rehost)
   - Clerk middleware: signed-out → bounce to landing /sign-in
   - Existing dashboard, subjects, upload, cheatsheet, settings (unchanged)
```

Both projects install the **Clerk Vercel Marketplace** integration linked to the same Clerk instance, so sessions work across both `*.vercel.app` subdomains under the user's Vercel team.

## Auth provider: Clerk

Reasons:
- Native Vercel Marketplace integration — one-click install, auto-provisions `CLERK_*` env vars on each project.
- Built-in `<SignIn />` / `<SignUp />` components ship with the **"Don't have an account? Sign up"** / **"Already have an account? Sign in"** link at the bottom — exact UX the user described, no custom code.
- Email/password + Google OAuth out of the box.
- Free tier covers up to 10,000 monthly active users.
- Components can be themed via `appearance` prop to match the Formal design system (square corners, Public Sans, our color tokens).

## API key strategy

**Users bring their own Gemini API key.** No change from current app implementation. The `/api/generate` route already accepts `body.apiKey` from the browser per request. Settings page already has the API-key input field.

Rationale: zero cost to the operator, ships fastest, current code requires no changes.

## Landing changes

**Files to create:**
- `app/sign-in/[[...rest]]/page.tsx` — renders Clerk's `<SignIn />` with our theme
- `app/sign-up/[[...rest]]/page.tsx` — renders Clerk's `<SignUp />` with our theme
- `app/sso-callback/page.tsx` — Clerk OAuth callback handler
- `middleware.ts` — runs `clerkMiddleware()` so Clerk's auth helpers work

**Files to edit:**
- `app/layout.tsx` — wrap `<ThemeProvider>` children with `<ClerkProvider>`
- `components/sections/nav.tsx` — add "Sign in" link (top-right) + "Get started" button. If signed in, show "Open app →" instead.
- `components/sections/hero.tsx` — replace `<WaitlistForm />` block with `<GetStartedCTA />` (a styled button group: primary "Get started — free" → `/sign-up`, secondary "Sign in" → `/sign-in`).
- `package.json` — add `@clerk/nextjs` dependency

**Files to delete (no longer used):**
- `components/waitlist-form.tsx`
- `app/api/waitlist/route.ts`

(The `pufferstudy-waitlist` Vercel Blob store is kept for now — contains any existing signup emails. Can be deleted later from the Vercel dashboard.)

**Clerk theming:**

```tsx
appearance={{
  variables: {
    colorPrimary: "var(--primary)",
    colorBackground: "var(--surface)",
    colorText: "var(--ink)",
    colorTextSecondary: "var(--ink-muted)",
    colorInputBackground: "var(--surface-2)",
    colorInputText: "var(--ink)",
    borderRadius: "0",
    fontFamily: "var(--font-public-sans)",
  },
  elements: {
    card: "shadow-card border border-default rounded-none",
    formButtonPrimary: "rounded-none",
    formFieldInput: "rounded-none",
  },
}}
```

Forest mode falls through automatically via CSS variables — no separate theming needed.

## App changes

**Files to create:**
- `middleware.ts` — `clerkMiddleware()` with all routes protected except `/api/generate` callbacks if any are public (none currently)

**Files to edit:**
- `app/layout.tsx` — wrap with `<ClerkProvider>`
- `package.json` — add `@clerk/nextjs`

**Files NOT changed:**
- Everything in `app/subjects/*`, `app/settings/page.tsx`, `app/api/generate/route.ts`, `lib/store`, `lib/utils` — all stay the same.
- IndexedDB + localStorage data continues to be browser-scoped, naturally isolated per device/user.

**Note on data isolation:** for v1, each user's data is still browser-local (no server-side user-scoped storage yet). Two users on the same browser would see the same subjects unless they sign out. This is a known limitation, acceptable for now, can be addressed in a later "cloud sync" phase.

## Sequencing (one session)

1. **Resume paused app migration** (~15 min):
   - User creates empty `vediry/pufferstudy-app` public repo on github.com
   - Swap local git remote, push, link new Vercel project, deploy, reclaim `pufferstudy.vercel.app` alias, disable SSO protection
   - See `pufferstudy-resume` memory note for the full 9-step plan
2. **Install Clerk via Vercel Marketplace** (~10 min, user-driven):
   - User goes to https://vercel.com/marketplace/clerk while signed into their Vercel account
   - Install on `pufferstudy-landing` project — auto-creates Clerk app + env vars
   - Install on `pufferstudy` (app) project — link to **same** Clerk app
3. **Wire Clerk into landing codebase** (~10 min): add provider, middleware, sign-in / sign-up routes, themed appearance, update Nav.
4. **Replace Hero waitlist with Get Started CTA** (~5 min)
5. **Wire Clerk into app codebase** (~5 min): provider + protected middleware
6. **Configure post-sign-in redirect** (~5 min): in Clerk dashboard, set `signInUrl` / `signUpUrl` / `afterSignInUrl` / `afterSignUpUrl` so users land at `pufferstudy.vercel.app/` after auth
7. **Test end-to-end** (~10 min): incognito → landing → Get Started → create account → land in app → create subject → sign out → sign back in → subject persists per browser

## Verification

- Sign up a brand new email in incognito → ends up on app dashboard
- Sign out → click Sign in → enter same credentials → back to app dashboard
- Try to visit `pufferstudy.vercel.app/` without being signed in → bounces to landing's `/sign-in`
- Visit landing's `/sign-in` while already signed in → redirects to app (no double-auth loop)
- Theme toggle still works on every page including `/sign-in` and `/sign-up` (Clerk components inherit our CSS variables)
- Forest mode renders the auth forms in evergreen + moss-green primary
- Mobile: sign-in/sign-up forms fit well on a 375px viewport

## Out of scope

- **Cloud sync of subjects** — subjects remain in browser IndexedDB. A future "cloud sync" phase would move them to a Postgres DB scoped by Clerk user ID. Not now.
- **Email verification / password reset flows** — these come for free from Clerk; no custom work needed.
- **Custom domain** — `pufferstudy.com` or similar is a future task.
- **Server-provided AI API key** (option B from the brainstorm) — explicitly rejected for now; users bring their own.

## Handoff points (user must do, can't be CLI'd)

- Create empty GitHub repo `vediry/pufferstudy-app` on github.com (web UI, while signed in as vediry)
- Click through Clerk install on Vercel Marketplace (browser, ~3 clicks per project)
- Sign in to Clerk dashboard once to verify the app exists and grab the publishable + secret keys (Vercel Marketplace handles env var provisioning, but user may want to verify)

## Risks

- **Clerk env var propagation:** Marketplace installs sometimes take 1-2 minutes for env vars to appear in the Vercel project. If first deploy after install fails, redeploy.
- **Cross-subdomain sessions:** both URLs are `*.vercel.app` so Clerk's default cookie domain handling works. If we later move to custom domains (e.g. `pufferstudy.com` for landing and `app.pufferstudy.com` for app), Clerk's `cookies.domain` will need explicit configuration. Not relevant for v1.
- **App rehost can fail mid-flow:** GitHub Credential Manager popup is the usual sticking point. Plan is identical to the landing migration that worked. If the popup is dismissed by accident, user re-runs `git push` and re-authenticates.
