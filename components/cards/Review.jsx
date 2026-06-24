import React from 'react';

/**
 * Guest review card — coral stars, an italic serif quote, and a muted cite.
 * White card on the elevated band.
 */
export function Review({ quote, author, rating = 5, style = {} }) {
  const stars = '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);
  return (
    <figure
      className="pande-review"
      style={{
        background: '#fff',
        border: '1px solid var(--line-soft)',
        borderRadius: 'var(--r-lg)',
        padding: '1.6rem 1.5rem',
        boxShadow: 'var(--shadow-sm)',
        margin: 0,
        ...style,
      }}
    >
      <div aria-hidden="true" style={{ color: 'var(--coral)', letterSpacing: '.1em', fontSize: '.9rem' }}>{stars}</div>
      <p style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem',
        lineHeight: 1.4, color: 'var(--earth)', margin: '.7rem 0 1.1rem',
      }}>{quote}</p>
      <figcaption style={{
        fontFamily: 'var(--font-body)', fontStyle: 'normal', fontSize: '.8rem',
        letterSpacing: '.06em', color: 'var(--earth-soft)', textTransform: 'uppercase',
      }}>{author}</figcaption>
    </figure>
  );
}
