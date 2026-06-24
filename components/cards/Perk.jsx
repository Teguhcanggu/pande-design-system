import React from 'react';

/**
 * Perk tile for the dark "Book direct" band — coral glyph, white title,
 * muted body. Outlined translucent card on earth.
 */
export function Perk({ icon, title, children, style = {} }) {
  return (
    <div
      className="pande-perk"
      style={{
        border: '1px solid var(--line-on-dark)',
        borderRadius: 'var(--r-md)',
        padding: '1.3rem',
        background: 'rgba(243,235,221,.03)',
        ...style,
      }}
    >
      <div aria-hidden="true" style={{ color: 'var(--coral)', fontSize: '1.3rem' }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.3rem', margin: '.6rem 0 .3rem' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '.84rem', color: 'var(--chalk-deep)', margin: 0 }}>{children}</p>
    </div>
  );
}
