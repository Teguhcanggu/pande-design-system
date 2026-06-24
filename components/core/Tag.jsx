import React from 'react';

/**
 * Small outlined pill for amenity keywords / filters. White fill, hairline
 * border, muted text. Use in wrap-flow rows.
 */
export function Tag({ children, style = {} }) {
  return (
    <span
      className="pande-tag"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '.78rem',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-pill)',
        padding: '.4rem .9rem',
        background: '#fff',
        color: 'var(--earth-soft)',
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
