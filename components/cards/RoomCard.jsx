import React from 'react';

/**
 * Bento room card — full-bleed photo, gradient scrim, title + blurb +
 * "Check availability →" link, optional corner tag. Hover lifts the image.
 * Use `span` to size it inside the rooms grid: 'wide' | 'tall' | 'std'.
 */
export function RoomCard({ image, alt, name, blurb, href = '#', tag, span = 'std', style = {} }) {
  const spanStyle = {
    std:  { gridColumn: 'span 2', minHeight: 280 },
    tall: { gridColumn: 'span 2', minHeight: 420 },
    wide: { gridColumn: 'span 4', minHeight: 420 },
  }[span];

  return (
    <article
      className="pande-room"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--r-lg)',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        boxShadow: 'var(--shadow)',
        ...spanStyle,
        ...style,
      }}
    >
      {tag && (
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem', zIndex: 1,
          background: 'rgba(243,235,221,.92)', color: 'var(--earth)',
          fontFamily: 'var(--font-body)', fontSize: '.64rem', fontWeight: 600,
          letterSpacing: '.12em', textTransform: 'uppercase',
          padding: '.35rem .7rem', borderRadius: 'var(--r-pill)',
        }}>{tag}</span>
      )}
      <img
        src={image}
        alt={alt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
      />
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'linear-gradient(180deg, rgba(28,21,16,0) 28%, rgba(28,21,16,.82) 100%)',
      }} />
      <div style={{ padding: '1.4rem 1.5rem', width: '100%' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 600, color: '#fff', margin: 0 }}>{name}</h3>
        {blurb && <p style={{ fontFamily: 'var(--font-body)', fontSize: '.86rem', color: '#eaddcb', fontWeight: 300, margin: '.25rem 0 .8rem' }}>{blurb}</p>}
        <a href={href} style={{
          fontFamily: 'var(--font-body)', fontSize: '.74rem', fontWeight: 600,
          letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff',
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          borderBottom: '1.5px solid var(--coral)', paddingBottom: 3,
        }}>Check availability <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
