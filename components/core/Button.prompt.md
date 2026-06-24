Pande's pill-shaped button — use coral for the single primary action on a surface, ghost for secondary actions. Renders an `<a>` when `href` is given.

```jsx
<Button variant="coral" href="#book">Check availability</Button>
<Button variant="ghost">See all rooms</Button>
<Button variant="ghost" onDark>WhatsApp us</Button>
```

Variants: `coral` (filled accent, glow shadow, lifts on hover) · `ghost` (outline, fills on hover). Set `onDark` over earth/footer surfaces so the outline reads light. Keep one coral button per view — coral is a signature, not the whole palette.
