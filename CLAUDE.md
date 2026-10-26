# Airbnb listing clone (Playpower Labs take-home)

Pixel-perfect, desktop-only clone of one Airbnb listing: Listing page, Photo Tour, Lightbox.
The reference site is the single source of truth. Match it visually, in motion, and in keyboard/a11y behaviour.

## Stack
Next.js 14 (App Router) + TypeScript + Tailwind 3. No backend; data lives in `lib/`. Deploy target: Vercel.

## Rules
- Write all code from measurements and screenshots of the reference. Never copy its HTML, CSS, JS or data files.
- Image assets in `public/images` are the only thing reused as-is.
- Prefer small, targeted edits. Do not rewrite or remove working code unless asked.
- Tokens live in `tailwind.config.ts` (colours, font, keyframes). Do not hard-code new colours in components.
- Every overlay: `role="dialog"`, `aria-modal`, focus moves in on open, trapped while open, restored on close, Esc closes.
- Respect `prefers-reduced-motion` (handled globally in `app/globals.css`).
- Dummy buttons stay dummy; only wire behaviour the reference actually has (Save, Share toast, Reserve toast, tab scroll, amenities modal, Photo Tour, Lightbox).

## Layout map
- `lib/photos.ts` – rooms, row layout (1 photo = large, 2 = pair), photo order, URL constants.
- `components/PhotoTour.tsx` – URL-driven tour + lightbox host (`?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000+n`).
- `components/Lightbox.tsx` – single-photo viewer, ←/→/Esc.
- `components/Toast.tsx`, `Wishlist.tsx` – shared toast and saved state.

## Sub-agents
See `.claude/agents/`: `pixel-reviewer`, `a11y-reviewer`, `code-quality`. Run them before every commit/zip.
