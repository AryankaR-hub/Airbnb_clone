# AGENTS.md

Instructions for any AI coding agent working in this repo (Codex, Claude Code, Cursor, etc.). `CLAUDE.md` has the same rules plus the project map.

## Project
Desktop-first, pixel-accurate clone of one Airbnb listing page (Candolim, Goa): Listing page, Photo Tour, Lightbox.
The reference site is the single source of truth for look, motion and keyboard / accessibility behaviour.

## Stack and commands
- Next.js 14 (App Router), TypeScript (strict), Tailwind 3. No backend; data lives in `lib/`.
- `npm install`, `npm run dev` (http://localhost:3000), `npm run build` must pass before any hand-off.

## Rules
1. Write all code from measurements and screenshots of the reference. Never copy its HTML, CSS, JS or data files. Only image assets are reused.
2. Make small, targeted edits. Do not rewrite or delete working code unless asked.
3. Design tokens (colours, font stack, keyframes) live in `tailwind.config.ts`; do not hard-code new colours in components.
4. Screenshots were taken at 125% display zoom: physical px / 1.25 = CSS px.
5. Icons are inline SVG using `currentColor` so they follow the theme. Never embed screenshots as icons.
6. Every overlay (Photo Tour, Lightbox, amenities modal): `role="dialog"`, `aria-modal`, focus moves in, is trapped, and returns on close; Esc closes; `prefers-reduced-motion` is respected.
7. Dummy buttons in the reference stay dummy (no navigation, no `href="#"` jumps). Only wire behaviour the reference has: Save / Share / Reserve toasts, tab scrolling, amenities modal, Photo Tour, Lightbox.
8. The Airbnb Cereal font is proprietary and not committed. Drop it at `public/fonts/AirbnbCereal-VF.woff2` and `@font-face` picks it up.

## Review sub-agents
See `.claude/agents/`: `pixel-reviewer`, `a11y-reviewer`, `code-quality`. Run them before every submission.
