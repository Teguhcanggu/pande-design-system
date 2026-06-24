import React from 'react';

/**
 * Uppercase tracked eyebrow label with a coral tick. Sits above section
 * headings. Often numbered (e.g. "02 — Stay").
 */
export function Eyebrow({ children, onDark = false, style = {} }) {
  return (
    <p
      className="pande-eyebrow"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-eyebrow)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: onDark ? '#ffc7ad' : 'var(--eyebrow)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.7rem',
        margin: 0,
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{ width: 26, height: 1.5, background: 'var(--coral)', display: 'inline-block' }}
      />
      {children}
    </p>
  );
}
