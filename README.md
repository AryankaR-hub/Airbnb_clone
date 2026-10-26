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

## Placeholders to replace
- Logo (text), amenity and review-category icons (lucide), 3 co-host avatars (initials)
- Photo count is 40, the reference shows 43

## Notes
- Font stack is copied from the reference's computed styles (Airbnb Cereal VF first). Drop the font file in `public/fonts/` and add an @font-face if it needs to be bundled.
- `public/images/photos/unplaced-*.jpeg` are photos not yet placed in the tour.
