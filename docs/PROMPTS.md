# Prompt log: Airbnb listing clone (Playpower Labs take-home)

**How this was built:** with Claude across two sessions (two accounts), keeping the same rules in `CLAUDE.md`, `AGENTS.md` and `.claude/agents/` so each session started from the same context.
**About this log:** it lists the prompts that drove the build, in order. Prompts are lightly edited for spelling and clarity (meaning unchanged); one-line follow-ups and housekeeping messages are left out. Screenshots and files I attached are shown in [brackets]. The second session's prompt is included word for word.

---

## Session 1: understanding the task, photos, first build

**1. Task and stack**
[Screenshot of the three-views table and the pasted brief]
This is the project we have to complete: a clone of an Airbnb listing page. I checked the live link and most of the buttons are dummy buttons. There's very little backend, so what tech stack can we use? We have to make an exact clone, so check the live link in the content I gave you, and then we can start.
> Result: Next.js 14 + TypeScript + Tailwind, no backend, local data.

**2. Reference and first target**
[PDF of reference screenshots, the list of 50 amenities in order with their icons, and notes on the Reserve, Save and Share toasts and tab links]
This PDF shows what the reference looks like. When you click "Show all photos" on the first page, a new page opens with all the photos grouped by room (Bedroom 1, Bedroom 2 and so on). We'll build that first and finish the rest after. Let's start, and ask me if you have any questions. Every other button, including date selection and "show more" on reviews, is a dummy.
> Result: Photo Tour planned first; toast and dummy-button behaviour noted.

**3. Getting the photos**
[Zip of screenshots] Is a zip enough, or do I have to upload each image separately? There are 43 images, and clicking one opens it like in the image I gave.

**4. Asset rules**
I have the exact Airbnb page on GitHub. Can I take assets from there, or is that against the rules?
> Result: images only, never code. All code is written from screenshots.

**5. Matching photos to rooms**
[Zip of the 43 images] Can you look at these and work out which room each image belongs to?
> Result: each photo matched to its room by comparing it with my Photo Tour screenshots.

**6. Go-ahead**
[Three screenshots of Exterior, Pool and Additional photos] Check these and tell me if you see any issue before generating. Then go ahead and generate it.
> Result: first working Photo Tour and Lightbox (`?modal=PHOTO_TOUR_SCROLLABLE&modalItem=…`).

**7. Build the rest of the page**
The font is Figtree, not Airbnb Cereal. I want it exactly like the reference, not even slightly different. I also haven't built the site header, tabs, details, amenities modal, calendar, reviews, map or host sections yet. Let's build those. Is there any issue?
> Result: found that my screenshots were at 125% zoom, so every measurement was converted to CSS pixels. Header, sticky tabs, details, amenities modal and booking card built.

**8. Exact font stack**
[Computed styles copied from DevTools] Use this to match the font, and build the remaining sections. Ask me if you need anything.
> Result: exact font stack applied; calendar, reviews, map and host sections built.

**9. Detail fixes after side-by-side comparison**
[Reference and our screenshots, logo]
1. Logo attached.
2. "Terms apply" is a dummy button in the original. In ours it jumps to the top of the page, so it isn't really a dummy.
3. The logo and some images I sent are low resolution; make sure everything renders sharp.
4. Description: in the original the last visible line fades out above "Show more" (see screenshot) instead of ending with an ellipsis.
5. The font still doesn't quite match.
6. Guest favourite box: the design around it is different, and "One of the most loved homes on Airbnb, according to guests" is a different colour from the original.
7. Reviews rating row: the Cleanliness icon is different, and the placement of the icons across the row differs.
8. Review topic chips (Cleanliness, Hospitality, …): the shape of the boxes is different.
9. Location: the circle sizes, the house marker and its placement are different.
10. We missed one part of the page (see screenshots).
11. Photo Tour, Exterior: the original has only 3 images and ours shows 6, with duplicates. Please check.
After these we'll continue with finer changes. I'll look up the photo numbers you asked for. Ask me if you need anything else.
> Result: non-navigating buttons, fading description, chip shape, rating row, map, and the missing "Things to know" and "More stays nearby" sections.

---

## Session 2: second account (full prompt, word for word)

```text
# Prompt: bring the clone in line with the reference (use with the two PDFs attached)

You are editing an existing Next.js 14 + Tailwind clone of one Airbnb listing (Romantic Jacuzzi 1BHK, Candolim).
Attached: `play_power_take_Home.pdf` (listing page + overlays, reference) and `Untitled_document.pdf` (Photo Tour, reference).
Read `CLAUDE.md` first and obey it: write code from the screenshots, never copy the reference's HTML/CSS/JS/SVG markup, make small targeted edits, keep colours in `tailwind.config.ts`, keep every overlay accessible.
Desktop only. Do not run a rewrite; change only what is listed. After each group, list what you changed and anything you could not match.

## 0. Fonts and measuring
- Body is `font-family: "Airbnb Cereal VF", Circular, -apple-system, ...`, 14px / line-height 1.43, colour rgb(34,34,34). The `@font-face` for it is already in `app/globals.css`; the file `public/fonts/AirbnbCereal-VF.woff2` must be supplied by the owner. Do not invent a substitute file.
- Weight rule: with a fallback font, `font-semibold` renders far heavier than the reference. Use `font-medium` for link-like text (Show more, Learn more, Show original, Clear dates, How reviews work). Keep `font-semibold` for section headings only. Terms apply stays bold.

## 1. Amenity icons (largest visible gap)
All amenity icons in the page preview and in the "Show all amenities" modal are currently lucide placeholders. Redraw each as an original inline SVG in `components/AmenityIcon.tsx` (24x24 viewBox, 1.5px stroke, round caps/joins, `currentColor`, thin line style like the reference). One icon per unique name; names that share an icon in the reference share it here:
- Kitchen = Cooking basics (whisk and spoon, upright pair)
- Fridge = Freezer (tall rounded rectangle, a short line near the top, small handle tick)
- Microwave (rounded box with a smaller inner rectangle and dot), Cooker (square with four burner circles), Toaster (rounded slot box), Blender (jug with flared top and base), Kettle (kettle with handle and diagonal slash), Coffee (machine with cup), Wine glasses (single wine glass), Crockery and cutlery (fork next to a plate arc)
- Hairdryer, Cleaning products (bucket/bottle with a small box), Shampoo (pump bottle), Hot water (tub with steam strokes and an arrow), Shower gel (bottle with two droplets)
- Washing machine (square with circle and diagonal), Hangers, Bed linen (folded sheet), Room-darkening blinds (screen with pull cord), Iron (iron with steam dots), Clothes storage (wardrobe with two doors), Cot (crib with vertical bars)
- TV (monitor with stand), Air conditioning (snowflake), Ceiling fan (four-blade fan)
- Exterior security cameras on property (camera with cable), Carbon monoxide alarm and Smoke alarm (square / circle with a diagonal "off" slash; render the row struck through and grey)
- Wifi, Dedicated workspace (desk with lamp), Private entrance and Self check-in (door with a small knob dot)
- Patio or balcony (potted plant / parasol), Outdoor dining area (table with umbrella), Free parking on premises (front view of a car), Pool (water waves with ladder), Hot tub (tub with steam), Gym (dumbbell), Pets allowed (paw), Cleaning available during stay (spray bottle), Long-term stays allowed (calendar with folded corner)
- The three highlight rows (Outdoor entertainment, Designed for staying cool, Self check-in) use the same set: outdoor dining icon, fan icon, door icon.

## 2. Amenities modal
Order and grouping already match: Bathroom, Bedroom and laundry, Entertainment, Family, Heating and cooling, Home safety, Internet and office, Kitchen and dining, Location features, Outdoor, Parking and facilities, Services. Check the modal against the reference for:
- white rounded-xl dialog about 570px wide centred over a dimmed page, close X at top-left, "What this place offers" title, inside scrolling with a visible thin scrollbar;
- group headings about 18px medium; each row = icon + label + 1px bottom divider (#ebebeb), rows about 66px tall at reference zoom;
- struck-through rows (Carbon monoxide alarm, Smoke alarm) are grey with a line-through;
- focus moves into the dialog on open, is trapped, Esc and the X close it, and focus returns to "Show all 50 amenities".

## 3. Listing page
- Tabs bar: Amenities scrolls so the "What this place offers" heading sits just under the bar; Reviews scrolls to the big 4.95 block (the last line of "Report this listing" is still visible above it); Location scrolls to "Where you'll be". The active tab gets the 2px underline. Tune `scroll-mt-*` on the three sections to land exactly as in the screenshots.
- Share: clicking shows the dark toast "Share options" bottom-centre; the button keeps a light-grey rounded background while focused/pressed.
- Save: toggles a filled red heart + "Saved" (grey rounded background) with toast "Saved to wishlist"; clicking again returns to the outline heart + "Save" with toast "Removed from wishlist".
- Reserve (both the tabs bar and the card): toast "You won't be charged yet". Toast = #222 background, white 14px medium text, rounded-lg, centred near the bottom, fades in/out.
- Every other control is a dummy and must not navigate or change the URL: Terms apply, Claim, Report this listing, Show original, date cells, Clear dates, keyboard icon, month arrows, guests field, Show more (reviews, neighbourhood), Show all 19 reviews, Learn more, host Message host, map controls, review-topic chips, More stays cards. Use `<button type="button">` or `preventDefault()`, never `href="#"` that scrolls.
- Description: collapsed text shows four lines with the fourth faded out (no ellipsis) and "Show more >"; expanded text ends with "Show less >".

## 4. Reviews
- "Show more" appears only on long reviews: Aheesh and Vedant. Amit, Samiksha, Vaibhav S and Mohd never have it. Rule used: text length >= 200 characters (`components/ReviewText.tsx`). Text is clamped at four lines; Vedant ends with an ellipsis.
- Chips row scrolls horizontally (no visible scrollbar): Comfort 6, Accuracy 5, Hot tub 5, Condition 4, Hospitality 8, Cleanliness 4, Amenities 2, Decor 2, Indoor spaces 2, Location 2. Chips are rounded rectangles (about 16px radius), not full pills.
- Category columns: icon sits directly under the score. Icons for Accuracy (circle with check) and Location (folded map) still need hand-drawn SVGs like the other four in `CategoryIcon.tsx`.

## 5. Map
- Water left of a diagonal, light-green land, ~90px faint grid, two soft green circles (about 100px at 30%/40% and 132px at 70%/59%), a 56px dark circle marker with a white outline house (door + base line), 40px circular search button top-left, 40px zoom buttons top-right. Compare size and position of circles and marker against the PDF page that shows the map twice.

## 6. Host section
- Card: round photo with a small red check badge, "Mirashya Homes" (large), "Host"; right side stats 1,463 Reviews, 4.68★ Rating, 2 Years hosting separated by dividers.
- Below: bulb icon "Born in the 80s", graduation-cap icon "Where I went to school: NICMAR GOA".
- Co-hosts in a 3-column grid, order: Sharath, Aman Dev Pahwa, Maria Karen Priyanka / Simran, Pallavi, Sanyukta / Shruti (pink "S"), Amisha (blue "A"). Simran, Pallavi and Sanyukta currently have no photos: placeholders until the owner supplies them.
- Then Host details (Response rate: 100%, Responds within an hour), grey "Message host" button, shield note.

## 7. Photo Tour (second PDF)
- Header row: back chevron left, "Photo tour" centred, share and heart icons right (both dummy).
- Thumbnail strip: nine room thumbnails with labels that wrap onto a second row (Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos); clicking one scrolls to that room.
- Each room: two columns. Left: room title (about 22px medium) and the amenity list in grey; the left column is `position: sticky` and the next room's title pushes the previous one out. Right: photos, first one large, then pairs, as in the PDF.
- Subtitles: Living room 1 "Sofa · Air conditioning · Ceiling fan · TV"; Living room 2 "Ceiling fan · Hot tub"; Full kitchen and Bedroom per the PDF (Bedroom includes "Cleaning products"); Full bathroom "Hairdryer · Hot water · Shampoo · Shower gel"; Gym "Air conditioning · Gym · Exercise equipment · Ceiling fan"; Pool "Pool"; Exterior and Additional photos have none.
- Layout per room: Living room 1 = 1 large + pair; Living room 2 = large, pair, large, pair, large; Full kitchen = one pair; Bedroom = large + pair; Full bathroom = one large; Gym = large + pair + pair; Exterior = large, pair, large, pair (the reference itself shows one building photo twice, so keep exterior-04 and exterior-05); Pool = large + pair; Additional photos = large, pair, large, pair, large, pair, large.
- Lightbox opens from any photo (keyboard left/right, Esc); measure it from the reference when screenshots are available.

## Output
For every change give: file, what changed, and the reference page you matched. Flag any value you had to guess.
```

---

## Session 1 (continued): icons and final details

**10. Icon pass: vector icons, not screenshots**
[Updated project zip, logo, icon crops]
This is our updated file. Please check the intensity: some elements are too black or bold, and some too light. Match the original exactly.
The logo now has a transparent background. When a viewer switches between light and dark mode it won't look odd, right?
Replace these icons exactly as in the screenshots, but as vector icons, not screenshots, because screenshots would look wrong in dark mode:
- Outdoor entertainment, Designed for staying cool, Self check-in
- Kitchen, Dedicated workspace, Pool, Pets allowed, Carbon monoxide alarm
- Wifi, Free parking on premises, Hot tub, Exterior security cameras on property, Smoke alarm
- the keyboard icon below the calendar
- Cleanliness and Check-in in the "how reviews work" row
Let's do these for now.
> Result: icons traced from my crops into inline SVGs using `currentColor`, so they stay sharp and follow the theme.

**11. Laurel, map marker and last icons**
[Icon crops]
Keep the big laurel next to "4.95 / Guest favourite / This home is a guest favourite based on ratings, reviews and reliability / How reviews work" as it was. Change only the small "Guest favourite" badge. My earlier screenshot of the small badge wasn't matched well: the inside of each leaf is hollow and the outer line is black, so I'm sending it again.
Also: replace the house icon in the map marker and align it as in the screenshot, and use the new icons for Cancellation policy, House rules, and the balloon for "Born in the 80s".
> Result: hollow small laurel, new map house marker, and the three new icons.
