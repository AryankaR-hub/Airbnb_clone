# Airbnb listing clone

Desktop-only clone of the Romantic Jacuzzi 1BHK Candolim listing.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Done
- Header, sticky tabs bar, hero grid, details, where you'll sleep, amenities preview and 50-item modal
- Booking card (sticky), static calendar, reviews, map, neighbourhood, host
- Photo Tour (`/?modal=PHOTO_TOUR_SCROLLABLE`) and Lightbox (`&modalItem=1000+n`)
- Save / Share / Reserve toasts

## Known gaps
- The Airbnb Cereal font is proprietary and not bundled. Text uses Figtree as a stand-in until `public/fonts/AirbnbCereal-VF.woff2` is added (the `@font-face` is already set up).
- Co-host avatars for Simran, Pallavi and Sanyukta reuse other avatar images as stand-ins (no photos were supplied).
- Amenity icons not traced from the reference are hand-drawn SVGs in `components/AmenityIcon.tsx`.

## Architecture
High-level production design for a vacation-rental marketplace (front end, backend, storage, search, deployment): `docs/architecture-diagram.png` (also as PDF).

## AI workflow
- Project rules: `CLAUDE.md` and `AGENTS.md`.
- Review sub-agents: `.claude/agents/` (pixel-reviewer, a11y-reviewer, code-quality).
- Prompt history: `docs/PROMPTS.md` (the second session's prompt is also in `docs/CHANGE_PROMPT.md`).
