The signature direct-booking widget — check-in, check-out, guests, and a coral "Check availability" CTA. Solid Coconut Husk surface so it stays legible over the hero photo.

```jsx
<BookingBar onSubmit={(e) => openBookingEngine(e)} defaultGuests="2 adults" />
```

Always real, keyboard-operable HTML controls — never place booking inside the 3D/canvas hero. Collapses to two columns then one on small screens. In production, submit hands off to Beds24 (own controls + titled iframe).
