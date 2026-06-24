import React from 'react';

/**
 * Pande pill button. Coral = primary CTA, ghost = secondary outline.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
export function Button({
  children,
  variant = 'coral',
  href,
  type = 'button',
  disabled = false,
  onDark = false,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.55rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '.84rem',
    letterSpacing: 'var(--ls-btn)',
    textTransform: 'uppercase',
    padding: '.92rem 1.6rem',
    borderRadius: 'var(--r-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-mid) var(--ease), background var(--dur-mid), color var(--dur-mid), box-shadow var(--dur-mid)',
    textDecoration: 'none',
  };

  const variants = {
    coral: {
      background: 'var(--coral)',
      color: '#fff',
      boxShadow: 'var(--shadow-coral)',
    },
    ghost: {
      background: 'transparent',
      borderColor: onDark ? 'var(--chalk)' : 'var(--earth)',
      color: onDark ? 'var(--chalk)' : 'var(--earth)',
    },
  };

  const cls = `pande-btn pande-btn--${variant}${onDark ? ' is-on-dark' : ''}`;
  const props = { className: cls, style: { ...base, ...variants[variant], ...style }, ...rest };

  if (href && !disabled) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <button type={type} disabled={disabled} {...props}>{children}</button>;
}
