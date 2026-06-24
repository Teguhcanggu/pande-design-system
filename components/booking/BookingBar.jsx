import React from 'react';

/**
 * Accessible booking bar — check-in / check-out dates + guests + CTA.
 * Solid Coconut Husk surface so it reads over the hero photo. Real HTML
 * controls — never inside a canvas. Wire `onSubmit` to your booking engine.
 *
 * Ships full interaction states (per the Pande design rules):
 *   - required date fields, with `min` clamps (no past dates, check-out > check-in)
 *   - inline validation error below the fields (check-out must be after check-in)
 *   - a submitting state on the CTA while `onSubmit` resolves
 * `onSubmit` may return a promise; the button stays disabled until it settles.
 */
export function BookingBar({ onSubmit, defaultGuests = '2 adults', style = {} }) {
  const today = new Date().toISOString().slice(0, 10);
  const [checkin, setCheckin] = React.useState('');
  const [checkout, setCheckout] = React.useState('');
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const field = { display: 'flex', flexDirection: 'column', gap: '.35rem' };
  const label = {
    fontFamily: 'var(--font-body)', fontSize: '.64rem', letterSpacing: '.18em',
    textTransform: 'uppercase', fontWeight: 600, color: 'var(--sienna)',
  };
  const control = (invalid) => ({
    font: 'inherit', fontFamily: 'var(--font-body)', fontSize: '.95rem', color: 'var(--earth)',
    background: '#fff', border: `1px solid ${invalid ? 'var(--coral-deep)' : 'var(--line)'}`,
    borderRadius: 'var(--r-sm)', padding: '.7rem .8rem', width: '100%',
  });

  const validate = () => {
    if (!checkin || !checkout) return 'Please choose both dates.';
    if (checkout <= checkin) return 'Check-out must be after check-in.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validate();
    setError(msg);
    if (msg) return;
    setSubmitting(true);
    Promise.resolve(onSubmit && onSubmit(e)).finally(() => setSubmitting(false));
  };

  const datesInvalid = !!error;

  return (
    <form
      className="pande-bookbar"
      aria-label="Check availability and book"
      onSubmit={handleSubmit}
      noValidate
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
        <input
          id="pb-ci" name="checkin" type="date" required min={today}
          value={checkin}
          aria-invalid={datesInvalid}
          aria-describedby={datesInvalid ? 'pb-err' : undefined}
          onChange={(e) => { setCheckin(e.target.value); if (error) setError(''); }}
          style={control(datesInvalid)}
        />
      </div>
      <div style={field}>
        <label htmlFor="pb-co" style={label}>Check-out</label>
        <input
          id="pb-co" name="checkout" type="date" required min={checkin || today}
          value={checkout}
          aria-invalid={datesInvalid}
          aria-describedby={datesInvalid ? 'pb-err' : undefined}
          onChange={(e) => { setCheckout(e.target.value); if (error) setError(''); }}
          style={control(datesInvalid)}
        />
      </div>
      <div style={field}>
        <label htmlFor="pb-g" style={label}>Guests</label>
        <select id="pb-g" name="guests" defaultValue={defaultGuests} style={control(false)}>
          <option>1 adult</option>
          <option>2 adults</option>
          <option>2 adults · 1 child</option>
          <option>3 adults</option>
          <option>4 adults</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <button type="submit" className="pande-btn pande-btn--coral" disabled={submitting} aria-busy={submitting} style={{
          width: '100%', justifyContent: 'center',
          display: 'inline-flex', alignItems: 'center', gap: '.55rem',
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.84rem',
          letterSpacing: 'var(--ls-btn)', textTransform: 'uppercase',
          padding: '1rem 1.6rem', borderRadius: 'var(--r-pill)', border: '1.5px solid transparent',
          background: 'var(--coral)', color: '#fff', boxShadow: 'var(--shadow-coral)',
          cursor: submitting ? 'progress' : 'pointer', opacity: submitting ? 0.7 : 1,
        }}>{submitting ? 'Checking…' : 'Check availability'}</button>
      </div>
      {error && (
        <p id="pb-err" role="alert" style={{
          gridColumn: '1 / -1', margin: 0,
          fontFamily: 'var(--font-body)', fontSize: '.78rem', color: 'var(--coral-deep)',
        }}>{error}</p>
      )}
    </form>
  );
}
