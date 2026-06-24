import React from 'react';

/**
 * Accessible booking bar — check-in / check-out dates + guests + CTA.
 * Solid Coconut Husk surface so it reads over the hero photo. Real HTML
 * controls — never inside a canvas. Wire `onSubmit` to your booking engine.
 */
export function BookingBar({ onSubmit, defaultGuests = '2 adults', style = {} }) {
  const field = { display: 'flex', flexDirection: 'column', gap: '.35rem' };
  const label = {
    fontFamily: 'var(--font-body)', fontSize: '.64rem', letterSpacing: '.18em',
    textTransform: 'uppercase', fontWeight: 600, color: 'var(--sienna)',
  };
  const control = {
    font: 'inherit', fontFamily: 'var(--font-body)', fontSize: '.95rem', color: 'var(--earth)',
    background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-sm)',
    padding: '.7rem .8rem', width: '100%',
  };

  return (
    <form
      className="pande-bookbar"
      aria-label="Check availability and book"
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(e); }}
      style={{
        background: 'var(--chalk-deep)',
        border: '1px solid var(--line)',
        boxShadow: 'var(--shadow)',
        borderRadius: 'var(--r-xl)',
        padding: '1.1rem 1.2rem',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.1fr 1fr auto',
        gap: '1rem',
        alignItems: 'end',
        ...style,
      }}
    >
      <div style={field}>
        <label htmlFor="pb-ci" style={label}>Check-in</label>
        <input id="pb-ci" name="checkin" type="date" style={control} />
      </div>
      <div style={field}>
        <label htmlFor="pb-co" style={label}>Check-out</label>
        <input id="pb-co" name="checkout" type="date" style={control} />
      </div>
      <div style={field}>
        <label htmlFor="pb-g" style={label}>Guests</label>
        <select id="pb-g" name="guests" defaultValue={defaultGuests} style={control}>
          <option>1 adult</option>
          <option>2 adults</option>
          <option>2 adults · 1 child</option>
          <option>3 adults</option>
          <option>4 adults</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <button type="submit" className="pande-btn pande-btn--coral" style={{
          width: '100%', justifyContent: 'center',
          display: 'inline-flex', alignItems: 'center', gap: '.55rem',
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.84rem',
          letterSpacing: 'var(--ls-btn)', textTransform: 'uppercase',
          padding: '1rem 1.6rem', borderRadius: 'var(--r-pill)', border: '1.5px solid transparent',
          background: 'var(--coral)', color: '#fff', boxShadow: 'var(--shadow-coral)', cursor: 'pointer',
        }}>Check availability</button>
      </div>
    </form>
  );
}
