/* @ds-bundle: {"format":3,"namespace":"DesignSystem_3691ef","components":[{"name":"BookingBar","sourcePath":"components/booking/BookingBar.jsx"},{"name":"Perk","sourcePath":"components/cards/Perk.jsx"},{"name":"Review","sourcePath":"components/cards/Review.jsx"},{"name":"RoomCard","sourcePath":"components/cards/RoomCard.jsx"},{"name":"Amenity","sourcePath":"components/core/Amenity.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/booking/BookingBar.jsx":"d4c56995fa3a","components/cards/Perk.jsx":"0fb8556ac5f8","components/cards/Review.jsx":"c0ad1e3dec18","components/cards/RoomCard.jsx":"515bbb4ead49","components/core/Amenity.jsx":"f4fed57fc43b","components/core/Button.jsx":"1c42dda77ff5","components/core/Eyebrow.jsx":"50a7c66fdb1e","components/core/Tag.jsx":"29adc04481ee","ui_kits/website/Chrome.jsx":"d3f7c32186ac","ui_kits/website/Home.jsx":"730a38d67a4a","ui_kits/website/Rooms.jsx":"b61deaf02b79"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_3691ef = window.DesignSystem_3691ef || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/booking/BookingBar.jsx
try { (() => {
/**
 * Accessible booking bar — check-in / check-out dates + guests + CTA.
 * Solid Coconut Husk surface so it reads over the hero photo. Real HTML
 * controls — never inside a canvas. Wire `onSubmit` to your booking engine.
 */
function BookingBar({
  onSubmit,
  defaultGuests = '2 adults',
  style = {}
}) {
  const field = {
    display: 'flex',
    flexDirection: 'column',
    gap: '.35rem'
  };
  const label = {
    fontFamily: 'var(--font-body)',
    fontSize: '.64rem',
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: 'var(--sienna)'
  };
  const control = {
    font: 'inherit',
    fontFamily: 'var(--font-body)',
    fontSize: '.95rem',
    color: 'var(--earth)',
    background: '#fff',
    border: '1px solid var(--line)',
    borderRadius: 'var(--r-sm)',
    padding: '.7rem .8rem',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "pande-bookbar",
    "aria-label": "Check availability and book",
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    },
    style: {
      background: 'var(--chalk-deep)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow)',
      borderRadius: 'var(--r-xl)',
      padding: '1.1rem 1.2rem',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.1fr 1fr auto',
      gap: '1rem',
      alignItems: 'end',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "pb-ci",
    style: label
  }, "Check-in"), /*#__PURE__*/React.createElement("input", {
    id: "pb-ci",
    name: "checkin",
    type: "date",
    style: control
  })), /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "pb-co",
    style: label
  }, "Check-out"), /*#__PURE__*/React.createElement("input", {
    id: "pb-co",
    name: "checkout",
    type: "date",
    style: control
  })), /*#__PURE__*/React.createElement("div", {
    style: field
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "pb-g",
    style: label
  }, "Guests"), /*#__PURE__*/React.createElement("select", {
    id: "pb-g",
    name: "guests",
    defaultValue: defaultGuests,
    style: control
  }, /*#__PURE__*/React.createElement("option", null, "1 adult"), /*#__PURE__*/React.createElement("option", null, "2 adults"), /*#__PURE__*/React.createElement("option", null, "2 adults \xB7 1 child"), /*#__PURE__*/React.createElement("option", null, "3 adults"), /*#__PURE__*/React.createElement("option", null, "4 adults"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "pande-btn pande-btn--coral",
    style: {
      width: '100%',
      justifyContent: 'center',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.55rem',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '.84rem',
      letterSpacing: 'var(--ls-btn)',
      textTransform: 'uppercase',
      padding: '1rem 1.6rem',
      borderRadius: 'var(--r-pill)',
      border: '1.5px solid transparent',
      background: 'var(--coral)',
      color: '#fff',
      boxShadow: 'var(--shadow-coral)',
      cursor: 'pointer'
    }
  }, "Check availability")));
}
Object.assign(__ds_scope, { BookingBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/booking/BookingBar.jsx", error: String((e && e.message) || e) }); }

// components/cards/Perk.jsx
try { (() => {
/**
 * Perk tile for the dark "Book direct" band — coral glyph, white title,
 * muted body. Outlined translucent card on earth.
 */
function Perk({
  icon,
  title,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pande-perk",
    style: {
      border: '1px solid var(--line-on-dark)',
      borderRadius: 'var(--r-md)',
      padding: '1.3rem',
      background: 'rgba(243,235,221,.03)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      color: 'var(--coral)',
      fontSize: '1.3rem'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: '1.3rem',
      margin: '.6rem 0 .3rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.84rem',
      color: 'var(--chalk-deep)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Perk });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Perk.jsx", error: String((e && e.message) || e) }); }

// components/cards/Review.jsx
try { (() => {
/**
 * Guest review card — coral stars, an italic serif quote, and a muted cite.
 * White card on the elevated band.
 */
function Review({
  quote,
  author,
  rating = 5,
  style = {}
}) {
  const stars = '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);
  return /*#__PURE__*/React.createElement("figure", {
    className: "pande-review",
    style: {
      background: '#fff',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--r-lg)',
      padding: '1.6rem 1.5rem',
      boxShadow: 'var(--shadow-sm)',
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      color: 'var(--coral)',
      letterSpacing: '.1em',
      fontSize: '.9rem'
    }
  }, stars), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.2rem',
      lineHeight: 1.4,
      color: 'var(--earth)',
      margin: '.7rem 0 1.1rem'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'normal',
      fontSize: '.8rem',
      letterSpacing: '.06em',
      color: 'var(--earth-soft)',
      textTransform: 'uppercase'
    }
  }, author));
}
Object.assign(__ds_scope, { Review });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Review.jsx", error: String((e && e.message) || e) }); }

// components/cards/RoomCard.jsx
try { (() => {
/**
 * Bento room card — full-bleed photo, gradient scrim, title + blurb +
 * "Check availability →" link, optional corner tag. Hover lifts the image.
 * Use `span` to size it inside the rooms grid: 'wide' | 'tall' | 'std'.
 */
function RoomCard({
  image,
  alt,
  name,
  blurb,
  href = '#',
  tag,
  span = 'std',
  style = {}
}) {
  const spanStyle = {
    std: {
      gridColumn: 'span 2',
      minHeight: 280
    },
    tall: {
      gridColumn: 'span 2',
      minHeight: 420
    },
    wide: {
      gridColumn: 'span 4',
      minHeight: 420
    }
  }[span];
  return /*#__PURE__*/React.createElement("article", {
    className: "pande-room",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      color: '#fff',
      display: 'flex',
      alignItems: 'flex-end',
      boxShadow: 'var(--shadow)',
      ...spanStyle,
      ...style
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 1,
      background: 'rgba(243,235,221,.92)',
      color: 'var(--earth)',
      fontFamily: 'var(--font-body)',
      fontSize: '.64rem',
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '.35rem .7rem',
      borderRadius: 'var(--r-pill)'
    }
  }, tag), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -2
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'linear-gradient(180deg, rgba(28,21,16,0) 28%, rgba(28,21,16,.82) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.4rem 1.5rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.7rem',
      fontWeight: 600,
      color: '#fff',
      margin: 0
    }
  }, name), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.86rem',
      color: '#eaddcb',
      fontWeight: 300,
      margin: '.25rem 0 .8rem'
    }
  }, blurb), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.74rem',
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.5rem',
      borderBottom: '1.5px solid var(--coral)',
      paddingBottom: 3
    }
  }, "Check availability ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { RoomCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/RoomCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Amenity.jsx
try { (() => {
/**
 * Amenity row — a glyph followed by a bold label and a quiet sub-line.
 * Sits on the elevated (Coconut Husk) band in a 4-up grid.
 */
function Amenity({
  icon,
  label,
  note,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pande-amenity",
    style: {
      display: 'flex',
      gap: '.9rem',
      alignItems: 'flex-start',
      padding: '1.1rem 1.2rem',
      background: 'rgba(255,255,255,.4)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--r-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic",
    "aria-hidden": "true",
    style: {
      fontSize: '1.35rem',
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '.96rem',
      display: 'block',
      color: 'var(--earth)'
    }
  }, label), note && /*#__PURE__*/React.createElement("small", {
    style: {
      color: 'var(--earth-soft)',
      fontSize: '.8rem'
    }
  }, note)));
}
Object.assign(__ds_scope, { Amenity });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Amenity.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pande pill button. Coral = primary CTA, ghost = secondary outline.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
function Button({
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
    textDecoration: 'none'
  };
  const variants = {
    coral: {
      background: 'var(--coral)',
      color: '#fff',
      boxShadow: 'var(--shadow-coral)'
    },
    ghost: {
      background: 'transparent',
      borderColor: onDark ? 'var(--chalk)' : 'var(--earth)',
      color: onDark ? 'var(--chalk)' : 'var(--earth)'
    }
  };
  const cls = `pande-btn pande-btn--${variant}${onDark ? ' is-on-dark' : ''}`;
  const props = {
    className: cls,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    ...rest
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/**
 * Uppercase tracked eyebrow label with a coral tick. Sits above section
 * headings. Often numbered (e.g. "02 — Stay").
 */
function Eyebrow({
  children,
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "pande-eyebrow",
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 1.5,
      background: 'var(--coral)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Small outlined pill for amenity keywords / filters. White fill, hairline
 * border, muted text. Use in wrap-flow rows.
 */
function Tag({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "pande-tag",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.78rem',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-pill)',
      padding: '.4rem .9rem',
      background: '#fff',
      color: 'var(--earth-soft)',
      display: 'inline-block',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button
} = window.DesignSystem_3691ef;
function TopStrip({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "topstrip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: e => e.preventDefault(),
    href: "#"
  }, "Jl. Pantai Batu Bolong No.1, Canggu \xB7 Bali"), /*#__PURE__*/React.createElement("div", {
    className: "langs",
    role: "group",
    "aria-label": "Language"
  }, ['EN', 'ID', '中文'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    "aria-current": lang === l,
    onClick: () => setLang(l)
  }, l)))));
}
function Header({
  page,
  go,
  lang,
  setLang
}) {
  const nav = [['rooms', 'Rooms'], ['experience', 'Experience'], ['story', 'Our story'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopStrip, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("header", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    href: "#",
    "aria-label": "Pande Homestay, home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/pande-mark.svg",
    alt: "Pande Homestay logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "Pande"), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Homestay \xB7 Canggu"))), /*#__PURE__*/React.createElement("nav", {
    className: "main",
    "aria-label": "Primary"
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    "aria-current": page === id ? 'page' : undefined,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    href: "#"
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    onClick: () => go('book')
  }, "Book direct")))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mark"
  }, "Pande Homestay"), /*#__PURE__*/React.createElement("p", null, "A warm local base near Batu Bolong Beach, Canggu \u2014 you're not just a guest, you're part of the family.")), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("h4", null, "Explore"), /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      go('rooms');
    },
    href: "#"
  }, "Rooms & rates"), /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      go('experience');
    },
    href: "#"
  }, "Experience Canggu"), /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      go('story');
    },
    href: "#"
  }, "Our story"), /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      go('contact');
    },
    href: "#"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("h4", null, "Visit"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Jl. Pantai Batu Bolong No.1,", /*#__PURE__*/React.createElement("br", null), "Canggu, Badung, Bali 80361"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Check-in 14:00 \xB7 Check-out 12:00")), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("h4", null, "Reach us"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+6282146181867"
  }, "+62 821 4618 1867"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "WhatsApp \xB7 08.00\u201320.00"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@pandehomestaycanggu.com"
  }, "info@pandehomestaycanggu.com"))), /*#__PURE__*/React.createElement("div", {
    className: "foot__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Pande Homestay \xB7 Canggu, Bali"), /*#__PURE__*/React.createElement("span", {
    className: "proto-flag"
  }, "Placeholder photos & rates \u2014 flag before launch"))));
}
function WhatsApp() {
  return /*#__PURE__*/React.createElement("a", {
    className: "wa",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Chat with Pande Homestay on WhatsApp"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4.1-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5.7 9.8 10.3 5.3 16 5.3s10.3 4.5 10.3 10.2S21.7 25.7 16 25.7zm5.8-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"
  })));
}
function Grain() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "grain",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "grainN"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.9",
    numOctaves: "3",
    stitchTiles: "stitch"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    filter: "url(#grainN)"
  }));
}
Object.assign(window, {
  PandeHeader: Header,
  PandeFooter: Footer,
  PandeWhatsApp: WhatsApp,
  PandeGrain: Grain
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Tag,
  Amenity,
  RoomCard,
  Review,
  Perk,
  BookingBar
} = window.DesignSystem_3691ef;
const ROOMS = [{
  span: 'wide',
  tag: 'Signature',
  img: 'room-java-wooden-house',
  name: 'Java Wooden House',
  blurb: 'A comfy wooden house — feel the natural harmony inside.',
  alt: 'Java wooden house room with warm timber interior — Pande Homestay Canggu'
}, {
  span: 'tall',
  img: 'room-deluxe-double-balcony',
  name: 'Deluxe Double · Balcony',
  blurb: 'Upper-floor comfort with a balcony to chill.',
  alt: 'Deluxe double room with a private balcony — Pande Homestay Canggu'
}, {
  span: 'std',
  img: 'room-deluxe-double-ground',
  name: 'Deluxe Double · Ground',
  blurb: 'Ground-floor ease, steps from the garden.',
  alt: 'Deluxe double room on the ground floor — Pande Homestay Canggu'
}, {
  span: 'std',
  img: 'room-deluxe-twin-balcony',
  name: 'Deluxe Twin · Balcony',
  blurb: 'Two singles, upper floor, balcony to unwind.',
  alt: 'Deluxe twin room with two single beds and a balcony — Pande Homestay Canggu'
}, {
  span: 'std',
  img: 'room-deluxe-double-kitchen',
  name: 'Deluxe Double · Kitchen',
  blurb: 'Your own private cooking facilities.',
  alt: 'Deluxe double room with a private kitchenette — Pande Homestay Canggu'
}, {
  span: 'wide',
  tag: 'Character',
  img: 'room-classic-java',
  name: 'Classic Java Wooden House',
  blurb: 'Traditional timber craft, natural harmony inside.',
  alt: 'Classic Java wooden house with traditional timber craft — Pande Homestay Canggu'
}];
const AMENITIES = [['❄️', 'Air conditioning', 'Cool, quiet rooms'], ['📶', 'Fast Wi-Fi', 'Work or stream easily'], ['🍳', 'Shared kitchen', 'Cook & meet travelers'], ['🛵', 'Bike & scooter', 'Daily rental on site'], ['🧺', 'Daily housekeeping', 'Fresh every day'], ['🌿', 'Garden views', 'Private terraces'], ['🚿', 'Hot water', 'Ensuite bathrooms'], ['🧘', 'Yoga & massage', 'On request']];
const EXPLORE = [['🏄', 'Surf', 'Batu Bolong & Echo Beach breaks — beginner-friendly mornings, golden-hour sessions.'], ['☕', 'Cafés', "Canggu's specialty-coffee and brunch scene, a short scooter ride away."], ['🧘', 'Yoga & calm', 'Optional yoga and massage to ease into island time.'], ['🌅', 'Sunsets', 'Beach-bar sunsets and night markets — the best of the neighborhood.']];
const IMG = n => `../../assets/img/${n}.webp`;
function Marquee() {
  const items = ['Shared kitchen', 'Minutes to the surf', 'Garden quiet', 'Warm Balinese welcome', 'Scooter & airport help', 'Fast Wi-Fi'];
  const run = items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, t, "\xA0"));
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee__track"
  }, run, run));
}
function Home({
  go
}) {
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scene = document.getElementById('heroScene');
    const inner = document.getElementById('heroInner');
    const layers = scene ? [...scene.querySelectorAll('[data-depth]')] : [];
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = e => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      layers.forEach(el => {
        const d = parseFloat(el.dataset.depth);
        el.style.transform = `translate3d(${(-cx * d * 60).toFixed(2)}px, ${(-cy * d * 40).toFixed(2)}px, 0)`;
      });
      if (inner) inner.style.transform = `translate3d(${(cx * 14).toFixed(2)}px, ${(cy * 10).toFixed(2)}px, 0) rotateX(${(-cy * 2).toFixed(2)}deg) rotateY(${(cx * 2.4).toFixed(2)}deg)`;
      if (scene) scene.style.transform = `rotateX(${(cy * 2.4).toFixed(2)}deg) rotateY(${(-cx * 3).toFixed(2)}deg)`;
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const hero = document.getElementById('heroSection');
    hero && hero.addEventListener('pointermove', onMove);
    hero && hero.addEventListener('pointerleave', onLeave);

    // scroll depth on the photo
    const bg = scene && scene.querySelector('.hero__bg');
    const onScroll = () => {
      const y = window.scrollY;
      if (bg && y < window.innerHeight) bg.style.setProperty('--sy', `${(y * 0.18).toFixed(1)}px`);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });

    // 3D tilt on room cards
    const cards = [...document.querySelectorAll('.rooms .pande-room')];
    const tiltHandlers = cards.map(card => {
      const move = e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateY(${((px - 0.5) * 9).toFixed(2)}deg) rotateX(${((0.5 - py) * 9).toFixed(2)}deg) translateZ(6px)`;
        card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        card.style.setProperty('--glare', '0.22');
      };
      const leave = () => {
        card.style.transform = '';
        card.style.setProperty('--glare', '0');
      };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      return {
        card,
        move,
        leave
      };
    });
    return () => {
      hero && hero.removeEventListener('pointermove', onMove);
      hero && hero.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      tiltHandlers.forEach(({
        card,
        move,
        leave
      }) => {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', leave);
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--3d",
    id: "heroSection",
    "aria-label": "Welcome to Pande Homestay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__scene",
    id: "heroScene"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg",
    "data-depth": "0.5"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('hero-courtyard'),
    alt: "",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__veil"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__sun",
    "data-depth": "1.1",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "hero__frond hero__frond--l",
    "data-depth": "2.4",
    viewBox: "0 0 220 150",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 150 C 60 96, 150 44, 218 6 C 168 60, 96 104, 36 150 Z M14 142 C 70 100, 150 56, 208 18",
    fill: "#1c1510",
    stroke: "#1c1510",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "hero__frond hero__frond--r",
    "data-depth": "1.8",
    viewBox: "0 0 220 150",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M212 150 C 160 96, 70 44, 2 6 C 52 60, 124 104, 184 150 Z",
    fill: "#1c1510"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__veil hero__veil--front"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__inner",
    id: "heroInner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "01 \u2014 Arrive \xB7 Batu Bolong Beach")), /*#__PURE__*/React.createElement("h1", null, "Slow down.", /*#__PURE__*/React.createElement("br", null), "You're ", /*#__PURE__*/React.createElement("em", null, "part of the family.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "A 13-room homestay tucked just minutes from Batu Bolong Beach \u2014 comfort, a shared kitchen, and real Balinese warmth, with the surf at your doorstep."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    onClick: () => go('book')
  }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onDark: true
  }, "Message us")), /*#__PURE__*/React.createElement(BookingBar, {
    onSubmit: () => go('book')
  }))), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "stay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "02 \u2014 Stay"), /*#__PURE__*/React.createElement("h2", null, "Rooms that feel like home"), /*#__PURE__*/React.createElement("p", null, "Seven room styles \u2014 from cozy doubles to our character Java wooden houses \u2014 each with AC, fast Wi-Fi, and that easy Canggu calm.")), /*#__PURE__*/React.createElement("div", {
    className: "rooms"
  }, ROOMS.map(r => /*#__PURE__*/React.createElement(RoomCard, {
    key: r.name,
    span: r.span,
    tag: r.tag,
    image: IMG(r.img),
    alt: r.alt,
    name: r.name,
    blurb: r.blurb,
    href: "#"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('rooms')
  }, "See all rooms & rates \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "block amenities"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Everyday comfort"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2-sm)'
    }
  }, "Everything you need to settle in")), /*#__PURE__*/React.createElement("div", {
    className: "amenities__grid"
  }, AMENITIES.map(([ic, l, n]) => /*#__PURE__*/React.createElement(Amenity, {
    key: l,
    icon: ic,
    label: l,
    note: n
  }))), /*#__PURE__*/React.createElement("div", {
    className: "amen-list"
  }, ['Balcony', 'Mini-fridge', 'Tea & coffee kit', 'Kettle', 'Wardrobe', 'Non-smoking rooms', 'Airport help', 'Local guide tips'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c
  }, c))))), /*#__PURE__*/React.createElement("section", {
    className: "block belong",
    id: "belong"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap belong__grid"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "belong__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('room-java-wooden-house'),
    alt: "The garden courtyard and wooden house at Pande Homestay, Canggu"
  }), /*#__PURE__*/React.createElement("figcaption", null, "The garden courtyard")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "03 \u2014 Belong"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2-sm)',
      marginTop: '.8rem'
    }
  }, "More a home than a hotel"), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "Step into our tropical oasis, where each room is thoughtfully designed with private terraces, air conditioning, and serene garden views. Wake up to birdsong, sip your morning coffee in the sunshine, and feel right at home. Our shared kitchen is a cozy, social space where stories are swapped over sizzling pans and local flavors."), /*#__PURE__*/React.createElement("blockquote", {
    className: "pull"
  }, "\"You're not just a guest \u2014 you're part of the family.\""), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "8.5"), /*#__PURE__*/React.createElement("small", null, "Booking.com \xB7 134 reviews")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "13"), /*#__PURE__*/React.createElement("small", null, "Cozy rooms & wooden houses")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "3"), /*#__PURE__*/React.createElement("small", null, "Languages \xB7 EN \xB7 ID \xB7 \u4E2D\u6587")))))), /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A look around"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2-sm)'
    }
  }, "Moments at Pande")), /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, /*#__PURE__*/React.createElement("a", {
    className: "tall",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('gallery-1'),
    alt: "Pande Homestay \u2014 property detail, Canggu",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('gallery-2'),
    alt: "Pande Homestay \u2014 interior detail, Canggu",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('gallery-3'),
    alt: "Pande Homestay \u2014 room detail, Canggu",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    className: "tall",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('hero-2'),
    alt: "Pande Homestay \u2014 garden, Canggu",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('gallery-4'),
    alt: "Pande Homestay \u2014 communal area, Canggu",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG('hero-3'),
    alt: "Pande Homestay \u2014 ambience, Canggu",
    loading: "lazy"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "block amenities"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Loved by guests"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2-sm)'
    }
  }, "Why travelers come back")), /*#__PURE__*/React.createElement("div", {
    className: "reviews__grid"
  }, /*#__PURE__*/React.createElement(Review, {
    rating: 5,
    author: "\u2014 Guest review, illustrative",
    quote: "Felt like staying with friends \u2014 the shared kitchen made the whole trip social and easy."
  }), /*#__PURE__*/React.createElement(Review, {
    rating: 5,
    author: "\u2014 Guest review, illustrative",
    quote: "Minutes from Batu Bolong. We rolled out of bed and straight onto the waves."
  }), /*#__PURE__*/React.createElement(Review, {
    rating: 4,
    author: "\u2014 Guest review, illustrative",
    quote: "Warm hosts who sorted our scooter and airport pickup without any fuss."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.4rem',
      fontSize: '.78rem',
      color: 'var(--earth-soft)'
    }
  }, "Quotes are illustrative placeholders \u2014 production pulls verified, dated reviews from Booking.com / Google."))), /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "explore"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "04 \u2014 Explore"), /*#__PURE__*/React.createElement("h2", null, "Step outside into Canggu"), /*#__PURE__*/React.createElement("p", null, "We're right on Jl. Pantai Batu Bolong \u2014 surf breaks, specialty caf\xE9s, warungs, yoga, and sunset spots within easy reach.")), /*#__PURE__*/React.createElement("div", {
    className: "explore__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xcards"
  }, EXPLORE.map(([ic, h, p]) => /*#__PURE__*/React.createElement("div", {
    className: "xcard",
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, ic), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "map"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Map showing Pande Homestay location on Jl. Pantai Batu Bolong, Canggu",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    src: "https://maps.google.com/maps?q=-8.644302,115.141625&z=15&output=embed"
  })), /*#__PURE__*/React.createElement("a", {
    className: "map__link",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Open our location in Google Maps \u2192"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('experience')
  }, "Explore the neighborhood \u2192")))), /*#__PURE__*/React.createElement(BookSection, null));
}
const RATE = 350000; // placeholder nightly floor (IDR)
const OTA_MARKUP = 1.15; // ~15% commission baked into OTA price
const fmtIDR = n => 'IDR ' + new Intl.NumberFormat('id-ID').format(n);
function BookSection() {
  const [nights, setNights] = React.useState(3);
  const direct = RATE * nights;
  const ota = Math.round(direct * OTA_MARKUP);
  const saved = ota - direct;
  const clamp = n => Math.max(1, Math.min(14, n));
  const stepBtn = {
    width: 38,
    height: 38,
    borderRadius: '50%',
    cursor: 'pointer',
    border: '1px solid var(--line-on-dark)',
    background: 'rgba(243,235,221,.05)',
    color: 'var(--chalk)',
    fontFamily: 'var(--font-body)',
    fontSize: '1.3rem',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background .2s, border-color .2s'
  };
  const total = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1,
    display: 'block',
    marginTop: '.2rem'
  };
  const totalNote = {
    fontFamily: 'var(--font-body)',
    fontSize: '.74rem',
    color: 'var(--chalk-deep)',
    textTransform: 'none',
    letterSpacing: 0
  };
  const totalWrap = {
    marginTop: '1.2rem',
    paddingTop: '1.1rem',
    borderTop: '1px solid var(--line-on-dark)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "block book",
    id: "book"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "05 \u2014 Book"), /*#__PURE__*/React.createElement("h2", null, "Book direct & save"), /*#__PURE__*/React.createElement("p", null, "Reserve straight with us \u2014 the best available rate, no middle-man, and a local host on WhatsApp from arrival to checkout.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      flexWrap: 'wrap',
      margin: '2.4rem 0 1.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.66rem',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: '#ffc7ad'
    }
  }, "See your savings for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.9rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fewer nights",
    style: stepBtn,
    onClick: () => setNights(n => clamp(n - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.7rem',
      fontWeight: 600,
      color: '#fff',
      minWidth: '4.5ch',
      textAlign: 'center'
    }
  }, nights, " ", nights === 1 ? 'night' : 'nights'), /*#__PURE__*/React.createElement("button", {
    "aria-label": "More nights",
    style: stepBtn,
    onClick: () => setNights(n => clamp(n + 1))
  }, "+")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.82rem',
      color: 'var(--brick)'
    }
  }, "at a placeholder ", fmtIDR(RATE), " / night*")), /*#__PURE__*/React.createElement("div", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compare__col compare--direct"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff'
    }
  }, "Direct with Pande"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Best available rate"), /*#__PURE__*/React.createElement("li", null, "No booking fees"), /*#__PURE__*/React.createElement("li", null, "Local host on WhatsApp"), /*#__PURE__*/React.createElement("li", null, "Flexible, friendly changes"), /*#__PURE__*/React.createElement("li", null, "Little extras when we can")), /*#__PURE__*/React.createElement("div", {
    style: totalWrap
  }, /*#__PURE__*/React.createElement("span", {
    style: totalNote
  }, nights, "-night total"), /*#__PURE__*/React.createElement("b", {
    style: {
      ...total,
      color: '#fff'
    }
  }, fmtIDR(direct)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...totalNote,
      color: 'var(--coral)',
      fontWeight: 600,
      display: 'inline-block',
      marginTop: '.5rem'
    }
  }, "You save ", fmtIDR(saved), " vs an OTA"))), /*#__PURE__*/React.createElement("div", {
    className: "compare__col compare--ota"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--chalk-deep)'
    }
  }, "Via an OTA"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Commission baked into price"), /*#__PURE__*/React.createElement("li", null, "Generic support line"), /*#__PURE__*/React.createElement("li", null, "Brand lost at checkout"), /*#__PURE__*/React.createElement("li", null, "Stricter, colder policies")), /*#__PURE__*/React.createElement("div", {
    style: totalWrap
  }, /*#__PURE__*/React.createElement("span", {
    style: totalNote
  }, nights, "-night total"), /*#__PURE__*/React.createElement("b", {
    style: {
      ...total,
      color: 'var(--chalk-deep)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--brick)'
    }
  }, fmtIDR(ota)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...totalNote,
      display: 'inline-block',
      marginTop: '.5rem'
    }
  }, "+ ~15% commission you don't see")))), /*#__PURE__*/React.createElement("div", {
    className: "perks"
  }, /*#__PURE__*/React.createElement(Perk, {
    icon: "\u25CE",
    title: "Best price, direct"
  }, "Our lowest available rate, straight from us."), /*#__PURE__*/React.createElement(Perk, {
    icon: "\u2736",
    title: "No booking fees"
  }, "The total you see is the total you pay."), /*#__PURE__*/React.createElement(Perk, {
    icon: "\u2706",
    title: "Local host on WhatsApp"
  }, "Real people, real replies \u2014 before & during."), /*#__PURE__*/React.createElement(Perk, {
    icon: "\u21BA",
    title: "Flexible & friendly"
  }, "Just let us know if your plans change.")), /*#__PURE__*/React.createElement("div", {
    className: "book__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "book__price"
  }, /*#__PURE__*/React.createElement("small", null, "From"), /*#__PURE__*/React.createElement("b", null, "IDR 350K", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1rem',
      fontWeight: 400
    }
  }, " / night")), /*#__PURE__*/React.createElement("div", {
    className: "book__note"
  }, "* Placeholder rate & photos. Live rates load from the booking engine.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '.8rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral"
  }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onDark: true
  }, "WhatsApp us")))));
}
Object.assign(window, {
  PandeHome: Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Rooms.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Tag
} = window.DesignSystem_3691ef;
const IMGR = n => `../../assets/img/${n}.webp`;
const ROOM_DETAIL = [{
  img: 'room-java-wooden-house',
  name: 'Java Wooden House',
  desc: 'A comfy wooden house — feel the natural harmony inside. Warm timber, soft light, and the garden a step away.',
  feats: ['Double bed', 'AC', 'Fast Wi-Fi', 'Garden view'],
  tag: 'Signature',
  alt: 'Java wooden house room with warm timber interior — Pande Homestay Canggu'
}, {
  img: 'room-deluxe-double-balcony',
  name: 'Deluxe Double · Balcony',
  desc: 'Upper-floor comfort with a private balcony to chill — morning coffee, evening breeze.',
  feats: ['Double bed', 'Upper floor', 'Private balcony', 'AC'],
  alt: 'Deluxe double room with a private balcony — Pande Homestay Canggu'
}, {
  img: 'room-deluxe-double-ground',
  name: 'Deluxe Double · Ground Floor',
  desc: 'Ground-floor ease, steps from the garden. Easy in, easy out, no stairs.',
  feats: ['Double bed', 'Ground floor', 'AC', 'Ensuite'],
  alt: 'Deluxe double room on the ground floor — Pande Homestay Canggu'
}, {
  img: 'room-deluxe-twin-balcony',
  name: 'Deluxe Twin · Balcony',
  desc: 'Two singles on the upper floor with a balcony to unwind — made for friends travelling together.',
  feats: ['Two singles', 'Upper floor', 'Private balcony', 'AC'],
  alt: 'Deluxe twin room with two single beds and a balcony — Pande Homestay Canggu'
}, {
  img: 'room-deluxe-double-kitchen',
  name: 'Deluxe Double · Kitchen',
  desc: 'Room with your own private cooking facilities — settle in for a longer stay.',
  feats: ['Double bed', 'Private kitchen', 'AC', 'Fast Wi-Fi'],
  tag: 'Long stay',
  alt: 'Deluxe double room with a private kitchenette — Pande Homestay Canggu'
}, {
  img: 'room-standard-double',
  name: 'Standard Double',
  desc: 'A simple, cozy double on the first floor — the easy-going essentials done well.',
  feats: ['Double bed', 'First floor', 'AC', 'Ensuite'],
  alt: 'Standard double room — Pande Homestay Canggu'
}, {
  img: 'room-classic-java',
  name: 'Classic Java Wooden House',
  desc: 'Traditional timber craft and natural harmony inside — our most characterful room.',
  feats: ['Double bed', 'Heritage timber', 'AC', 'Garden view'],
  tag: 'Character',
  alt: 'Classic Java wooden house with traditional timber craft — Pande Homestay Canggu'
}];
function RoomsScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero__bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMGR('room-deluxe-double-ground'),
    alt: "",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "Rooms")), /*#__PURE__*/React.createElement("h1", null, "Seven ways to stay"), /*#__PURE__*/React.createElement("p", null, "From cozy doubles to our character Java wooden houses \u2014 each with AC, fast Wi-Fi, and that easy Canggu calm. All-in prices shown in IDR at booking."))), /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, ROOM_DETAIL.map(r => /*#__PURE__*/React.createElement("div", {
    className: "roomrow",
    key: r.name
  }, /*#__PURE__*/React.createElement("figure", {
    className: "roomrow__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMGR(r.img),
    alt: r.alt
  })), /*#__PURE__*/React.createElement("div", null, r.tag && /*#__PURE__*/React.createElement(Eyebrow, null, r.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: r.tag ? '.6rem' : 0
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, r.feats.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f
  }, f))), /*#__PURE__*/React.createElement("p", null, r.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.4rem',
      display: 'flex',
      gap: '.8rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    onClick: () => go('book')
  }, "Check availability"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '.82rem',
      color: 'var(--earth-soft)'
    }
  }, "From ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--earth)'
    }
  }, "IDR 350K"), " / night*"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '2rem',
      fontSize: '.78rem',
      color: 'var(--earth-soft)'
    }
  }, "* Placeholder rate \u2014 live rates and availability load from the booking engine. Photos are temporary placeholders."))));
}
Object.assign(window, {
  PandeRooms: RoomsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Rooms.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BookingBar = __ds_scope.BookingBar;

__ds_ns.Perk = __ds_scope.Perk;

__ds_ns.Review = __ds_scope.Review;

__ds_ns.RoomCard = __ds_scope.RoomCard;

__ds_ns.Amenity = __ds_scope.Amenity;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

})();
