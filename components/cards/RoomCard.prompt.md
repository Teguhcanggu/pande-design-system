The bento photo card for room styles on the homepage Stay grid. Photo fills the card with a bottom scrim; text and a coral-underlined CTA sit at the base.

```jsx
<div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:'1.1rem' }}>
  <RoomCard span="wide" tag="Signature" image="assets/img/room-java-wooden-house.webp"
    alt="Java wooden house with warm timber interior" name="Java Wooden House"
    blurb="A comfy wooden house — feel the natural harmony inside." href="rooms.html" />
  <RoomCard span="tall" image="assets/img/room-deluxe-double-balcony.webp"
    alt="Deluxe double with a private balcony" name="Deluxe Double · Balcony"
    blurb="Upper-floor comfort with a balcony to chill." />
</div>
```

`span`: `wide` (4 cols, 420px) · `tall` (2 cols, 420px) · `std` (2 cols, 280px). Always give a unique descriptive `alt`. On hover the photo scales up gently.
