# Design review — Pande Homestay Design System

Audited against the **`design-taste-frontend`** rubric (high-agency / anti-slop frontend rules:
bias correction, AI-tells, performance guardrails, mandatory interaction states).

**Overall: 8.5 / 10.** One of the more skill-aligned systems in the wild — disciplined palette,
asymmetric layout, honest content. The fixes below close the small technical gaps the rubric flags.

---

## Where it already excels (left untouched)

| Rubric rule | Verdict |
|---|---|
| THE LILA BAN (no AI-purple / neon) | Pass — warm earth palette, zero purple/blue-AI |
| No pure black | Pass — Night Earth `#1C1510` |
| Max 1 accent | Pass — "coral rule" enforced in tokens, readme, and a dedicated guideline card |
| Anti-center bias | Pass — left-aligned hero, bento rooms, asymmetric "belong", zig-zag room rows |
| Tinted shadows (not neutral grey) | Pass — all shadows warm-brown |
| Serif for editorial | Pass — Cormorant Garamond is correct here (rubric only bans serif on dashboards) |
| Honesty / no filler words | Exceeds — bans "luxury/nestled/seamless", flags every placeholder rate & review |
| No Unsplash hotlinks | Pass — ships local `.webp` |
| Reduced-motion + effect cleanup | Exceeds — `prefers-reduced-motion` honored, thorough `useEffect` teardown |
| Accessibility | Exceeds rubric — skip link, `aria-*`, `:focus-visible`, alt text, lazy loading |

## Deliberate divergences (kept on purpose — documented, not bugs)

- **Emoji glyphs** for amenities/explore. The rubric `CRITICAL`-bans emoji; this system uses them as a
  conscious, documented brand choice ("warm, handmade tone"). Kept. To go 100% rubric-strict later,
  swap for a warm light-stroke icon set (Lucide ~1.5px) — the readme already notes this path.
- **No Tailwind / no icon library.** Token-CSS architecture is a legitimate alternative for a DS
  distribution; the rubric's Tailwind default only applies "unless a different stack is specified."

---

## Fixes applied in this change

| # | Rubric rule | File(s) | What changed |
|---|---|---|---|
| 1 | Viewport stability — use `dvh`, never `vh`, for full-height heroes (iOS Safari jump) | `ui_kits/website/site.css` | `.hero` `min-height:86vh` → `86vh` + `86dvh` progressive fallback |
| 2 | Never `window.addEventListener('scroll')` | `ui_kits/website/Home.jsx` | Hero photo parallax now runs on a `requestAnimationFrame` loop gated by an `IntersectionObserver` (only ticks while the hero is on screen); cleanup disconnects the observer and cancels the frame |
| 3 | No generic 3-equal-column card row | `ui_kits/website/site.css`, `Home.jsx` | Reviews are now an asymmetric grid — one featured tall card + two stacked — collapsing to one column on mobile |
| 4 | No outer/neon glow — prefer subtle tinted shadow | `tokens/spacing.css` | `--shadow-coral` softened `rgba(…,.8)` → `rgba(…,.5)` with a tighter, deeper offset |
| 5 | Mandatory interaction states (loading / error) + form patterns (error below input) | `components/booking/BookingBar.jsx` (+ `.prompt.md`) | `required` dates with `min` clamps, inline `role="alert"` validation (check-out > check-in), and a disabled "Checking…" submitting state while `onSubmit` resolves |

### Not changed on purpose

- **Hero display size** (`--fs-hero` up to `8rem`). The rubric discourages "oversized H1s", but the giant
  editorial serif headline is this brand's signature and is defensible for hospitality/editorial. Left as-is.
- **Body font Work Sans.** Not on the rubric's preferred list (Geist/Satoshi/Outfit) but not banned, and
  it reads as intentional. Left as-is.

---

## ⚠️ Follow-up needed: regenerate the bundle

`_ds_bundle.js` is a **generated artifact** (carries `sourceHashes`) and was **not** hand-edited.
Fix #5 lives in the canonical component source (`components/booking/BookingBar.jsx`), so it benefits
production consumers immediately, but the interactive UI-kit demo (`ui_kits/website/index.html`) renders
`BookingBar` from the bundle and will only show the new states **after the bundle is regenerated** by the
design-system export tool. Fixes #1–#4 take effect in the live demo right away (they live in CSS / `Home.jsx`,
which the demo loads directly).
