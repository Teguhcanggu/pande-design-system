# Pande Homestay — Design System

> **Pande Living Courtyard** — the brand & UI system for the rebuilt website of Pande Homestay, a 13-room boutique homestay on Jl. Pantai Batu Bolong, Canggu, Bali. Warm, editorial, **direct-booking-first** (0% OTA). This system productionizes the look of the reference prototype — it refines and reuses, it does not reinvent.

Use it to build the production site, marketing pages, and any branded artifact for Pande Homestay.

---

## Sources (store for reference — reader may not have access)

- **Reference prototype repo:** https://github.com/Teguhcanggu/pande-homestay-prototype
- **Live prototype:** https://teguhcanggu.github.io/pande-homestay-prototype/
- Brand, copy, room data, design & tech specs all live in that repo's `docs/`. Explore it to build higher-fidelity designs. Verified facts (address, phone, room count, check-in/out) come from `docs/content.md`; placeholders are flagged throughout.

Everything in this design system was lifted from the prototype's `assets/css/site.css`, page HTML, and `docs/` — exact hex values, type stack, spacing, and component structure.

---

## The brand in one breath

A warm local base near Batu Bolong — **you're part of the family, not just a guest.** Grounded, unpretentious, quietly design-aware. The signature is an atmospheric courtyard hero over fast, accessible HTML, on the "Old Wood & Brick" palette with one coral accent.

---

## Content fundamentals — how Pande writes

**Voice:** a host welcoming a friend. Warm, specific, sensory, short, active sentences. Concrete over adjectives.

- **Person:** "you" (the guest) and "we / our" (the host). Inclusive and direct — *"We're right on Jl. Pantai Batu Bolong"*, *"you're not just a guest — you're part of the family."*
- **Casing:** Sentence case for headlines and body. UPPERCASE only for tracked micro-type (eyebrows, field labels, nav, buttons). Headlines are serif and lowercase-feeling even when capitalized: *"Rooms that feel like home"*, *"Step outside into Canggu"*.
- **Sensory specifics:** *"wake up to birdsong, sip your morning coffee in the sunshine"*, *"stories swapped over sizzling pans and local flavors."* Name real places (Batu Bolong, Echo Beach, Canggu).
- **Numbered narrative:** the homepage runs *01 — Arrive · 02 — Stay · 03 — Belong · 04 — Explore · 05 — Book.* Eyebrows carry these.
- **Emoji:** used sparingly as small amenity / explore glyphs (❄️ 🍳 🛵 🏄 ☕ 🌅). Never in headlines or body copy. Perks use geometric unicode glyphs (◎ ✶ ✆ ↺).
- **Honesty over hype.** No fake urgency, no invented numbers. Placeholder rates and illustrative reviews are explicitly flagged ("Placeholder rate & photos", "Guest review, illustrative"). Show the all-in price upfront, state the currency (IDR).
- **Avoid:** "luxury", "world-class", "nestled", exclamation spam, generic Bali-template clichés.

**Examples**
- Hero: *"Slow down. You're part of the family."*
- Sub: *"A 13-room homestay tucked just minutes from Batu Bolong Beach — comfort, a shared kitchen, and real Balinese warmth."*
- Pull-quote: *"You're not just a guest — you're part of the family."*
- Book: *"Book direct & save"* — *"the total you see is the total you pay."*

---

## Visual foundations

**Palette — "Old Wood & Brick"** (`tokens/colors.css`)
- Base **Warm Chalk `#F3EBDD`** · elevated **Coconut Husk `#EAD9C0`** · text **Wet Earth Brown `#2E2117`** (+ muted `#5A4A3A`).
- **Accent Sunset Coral `#F2704E`** (`#D8542F` on hover) — the signature. **Coral rule:** CTAs, links, eyebrows, small rules, stars only. Never coral body text; never coral as a large background field. Headings stay deep earth so coral reads as a signature.
- Support: Aged Brick `#C98A6A`, Burnt Sienna `#9E4A2C` (eyebrow text), Banana Frond `#4F6346`. Footer **Night Earth `#1C1510`**.
- Imagery is the color: warm, filmic, dusk-toned real photography. The palette is drawn *from* the photos.

**Type** (`tokens/typography.css`)
- **Display — Cormorant Garamond**, weight 500 (+ italic for emphasis). Oversized serif headlines, fluid `clamp()` up to 8rem, line-height 1.04, tracking −0.01em. Italic + coral for the emphasized phrase in a headline.
- **Body / UI — Work Sans**, 300–600. All booking UI, labels, prices, body. Lead copy is often 300 weight. One display + one body family only. `font-display: swap` to protect CLS.
- Eyebrows/labels: Work Sans 600, uppercase, wide tracking (`.18`–`.32em`), with a 26px coral tick.

**Spacing, radius, shadow** (`tokens/spacing.css`)
- Layout maxes at 1240px; `.wrap` = `min(1240px, 92vw)`. Sections breathe: `clamp(4.5rem, 9vw, 8.5rem)` vertical.
- Radii: 10 inputs · 14 small cards · 16 cards/rooms · 18 panels/forms · pill (999) buttons & chips. Generously rounded but never bubbly.
- Shadows are soft, warm-brown, far-thrown (`0 18px 50px -22px rgba(46,33,23,.55)`). Coral CTAs carry a coral glow. No hard or neutral-gray shadows.

**Backgrounds & texture**
- Full-bleed real photos for heroes and room cards, with a layered scrim (radial warm highlight + vertical earth gradient) so white text holds AA contrast.
- A fixed **film-grain** SVG overlay at ~5% opacity, `mix-blend-mode: multiply`, sits above everything (pointer-events off). On-brand, subtle.
- A dark earth marquee strip (italic serif, coral ✦ separators) breaks sections. The Book band is dark earth with a coral radial glow.
- No glassmorphism, neon, gradients-as-decoration, or futuristic blobs.

**Motion** (restrained, always with a reduced-motion fallback)
- Easing `cubic-bezier(.22,.61,.36,1)`. Durations: ~100ms feedback · 200–300ms transitions · 400ms ceiling.
- Scroll-reveal = opacity + translateY (IntersectionObserver). Hero = gentle parallax → static poster when reduced. Room-card hover lifts/zooms the photo. Link underline grows from a coral `scaleX`. Buttons lift on hover (`translateY(-2px)`) and **press to `scale(.98)`**.
- Hover states: coral deepens (`#D8542F`); ghost buttons fill with earth; cards lift and brighten to white. Everything honors `prefers-reduced-motion`.

**Borders, cards, surfaces**
- Hairlines are warm and faint: `rgba(46,33,23,.08–.12)` on light, `rgba(243,235,221,.15)` on dark.
- Cards: white or Coconut Husk fill, 16px radius, soft shadow, hairline border. Room cards are photo-first with a bottom scrim. Perks (dark band) are translucent chalk fills with light borders.
- Transparency/blur only where earned: the sticky header is `blur(12px)` over translucent chalk; photo scrims protect text. Booking surfaces stay solid (never translucent-over-photo) for contrast.

---

## Iconography

Pande does **not** ship an icon font or SVG icon set. Its iconography is deliberately light:
- **Emoji** as small, friendly glyphs for amenities and the "Explore" cards (❄️ 📶 🍳 🛵 🧺 🌿 🚿 🧘 · 🏄 ☕ 🌅). Keep these — don't substitute a heavy stroke-icon library; it would fight the warm, handmade tone.
- **Geometric / unicode glyphs** for booking perks and accents: ◎ ✶ ✆ ↺, the coral ✦ marquee separator, ★ review stars, → CTA arrows, + FAQ toggles.
- The **logo** (`assets/img/logo.webp`) is the only real brand mark: a coral surfboard + "PANDE HOMESTAY" wordmark with a coral "n" accent and coral dot.
- The **WhatsApp** glyph is the one inline brand SVG (in `ui_kits/website/Chrome.jsx`), on its native green float.

If a future surface genuinely needs line icons, pick a warm, rounded, light-stroke set (e.g. Lucide at ~1.5px) and flag the addition — it is a deviation from the current system.

---

## What's in here (index)

```
styles.css                 Entry point — @import manifest only. Consumers link this.
tokens/
  fonts.css                Google Fonts @import (Cormorant Garamond + Work Sans)
  colors.css               "Old Wood & Brick" palette + semantic aliases
  typography.css           Families, weights, fluid scale, tracking
  spacing.css              Layout, spacing, radius, shadow, motion
  base.css                 Element resets, grain, eyebrow, .btn, section-head
guidelines/                12 foundation specimen cards (Colors · Type · Spacing · Brand)
components/
  core/                    Button · Eyebrow · Tag · Amenity
  booking/                 BookingBar
  cards/                   RoomCard · Review · Perk
ui_kits/website/           Interactive site recreation — Home + Rooms screens
assets/img/                Property photos, room photos, logo (PLACEHOLDERS — see below)
SKILL.md                   Agent Skill manifest for download / Claude Code
```

**Components** (`window.DesignSystem_3691ef.*`): `Button`, `Eyebrow`, `Tag`, `Amenity`, `BookingBar`, `RoomCard`, `Review`, `Perk`. Each has a `.d.ts` props contract and a `.prompt.md` usage note.

**UI kit:** `ui_kits/website/index.html` — a clickable Home ⇄ Rooms recreation composing the primitives (sticky header, courtyard hero + booking bar, bento rooms, amenities, belong, gallery, reviews, explore + map, book band, footer, WhatsApp float).

---

## ⚠️ Placeholders — read before reuse

- **Photos are temporary placeholders** (reuse rights unconfirmed) — replace with licensed/new photography before launch.
- **Rates, ratings, distances are placeholders / illustrative.** The "IDR 350K / night" floor is **unconfirmed**. Wire live data and never publish unverified numbers.
- **Fonts** load from Google Fonts via `@import` in `tokens/fonts.css` (no local binaries shipped). Self-host the `.woff2` files before launch if you need them offline; replace the `@import` with `@font-face`.

---

## Verified facts (safe to use)

Pande Homestay · Jl. Pantai Batu Bolong No.1, Canggu, Kuta Utara, Badung, Bali 80361 · +62 821 4618 1867 (08.00–20.00 WITA) · info@pandehomestaycanggu.com · 13 rooms / 7 styles · check-in 14:00 / check-out 12:00 · geo −8.644302, 115.141625 · Booking.com 8.5 / 134 (display only, from a dated source).
