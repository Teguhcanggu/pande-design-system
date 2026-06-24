import React from 'react';

/**
 * Amenity row — a glyph followed by a bold label and a quiet sub-line.
 * Sits on the elevated (Coconut Husk) band in a 4-up grid.
 */
export function Amenity({ icon, label, note, style = {} }) {
  return (
    <div
      className="pande-amenity"
      style={{
        display: 'flex',
        gap: '.9rem',
        alignItems: 'flex-start',
        padding: '1.1rem 1.2rem',
        background: 'rgba(255,255,255,.4)',
        border: '1px solid var(--line-soft)',
        borderRadius: 'var(--r-md)',
        ...style,
      }}
    >
      <span className="ic" aria-hidden="true" style={{ fontSize: '1.35rem', lineHeight: 1 }}>{icon}</span>
      <div>
        <b style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.96rem', display: 'block', color: 'var(--earth)' }}>{label}</b>
        {note && <small style={{ color: 'var(--earth-soft)', fontSize: '.8rem' }}>{note}</small>}
      </div>
    </div>
  );
}
