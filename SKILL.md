---
name: pande-homestay-design
description: Use this skill to generate well-branded interfaces and assets for Pande Homestay (a 13-room boutique homestay in Canggu, Bali), either for production or throwaway prototypes/mocks. Contains the "Old Wood & Brick" design guidelines, colors, type, fonts, photo assets, and the website UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — brand context, content fundamentals, visual foundations, iconography, file index. **Start here.**
- `styles.css` — the one stylesheet to link; it `@import`s all tokens + base elements.
- `tokens/` — colors ("Old Wood & Brick"), typography (Cormorant Garamond + Work Sans), spacing/radius/shadow/motion, fonts, base resets.
- `guidelines/` — foundation specimen cards (swatches, type, spacing, brand).
- `components/` — React primitives: `Button`, `Eyebrow`, `Tag`, `Amenity` (core) · `BookingBar` (booking) · `RoomCard`, `Review`, `Perk` (cards). Each has a `.prompt.md`.
- `ui_kits/website/` — interactive Home + Rooms recreation; the reference for full-page composition.
- `assets/img/` — property/room photos + logo. **All photos & rates are placeholders — flag them.**

## Non-negotiables
- **Coral (`#F2704E`) is an accent only** — CTAs, links, eyebrows, small rules, stars. Headlines stay deep earth.
- Cormorant Garamond for display, Work Sans for all UI/body. Sentence case; UPPERCASE only for tracked micro-type.
- Voice = warm host welcoming a friend. No "luxury/nestled" clichés, no fake urgency, no invented prices/ratings/distances.
- Keep booking, room names, prices, and contact as real, accessible HTML. Show all-in price (IDR) upfront.
- Subtle film grain + warm filmic photos + generous whitespace + bento grids + restrained, reduced-motion-safe animation.
