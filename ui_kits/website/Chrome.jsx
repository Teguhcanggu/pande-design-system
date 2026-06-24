const { Button } = window.DesignSystem_3691ef;

function TopStrip({ lang, setLang }) {
  return (
    <div className="topstrip">
      <div className="wrap">
        <a onClick={(e) => e.preventDefault()} href="#">Jl. Pantai Batu Bolong No.1, Canggu · Bali</a>
        <div className="langs" role="group" aria-label="Language">
          {['EN', 'ID', '中文'].map((l) => (
            <button key={l} aria-current={lang === l} onClick={() => setLang(l)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ page, go, lang, setLang }) {
  const nav = [['rooms', 'Rooms'], ['experience', 'Experience'], ['story', 'Our story'], ['contact', 'Contact']];
  return (
    <React.Fragment>
      <TopStrip lang={lang} setLang={setLang} />
      <header className="site">
        <div className="wrap">
          <a className="brand" onClick={(e) => { e.preventDefault(); go('home'); }} href="#" aria-label="Pande Homestay, home">
            <img src="../../assets/img/pande-mark.svg" alt="Pande Homestay logo" />
            <span className="txt">
              <span className="mark">Pande</span>
              <span className="sub">Homestay · Canggu</span>
            </span>
          </a>
          <nav className="main" aria-label="Primary">
            {nav.map(([id, label]) => (
              <a key={id} aria-current={page === id ? 'page' : undefined}
                 onClick={(e) => { e.preventDefault(); go(id); }} href="#">{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <Button variant="coral" onClick={() => go('book')}>Book direct</Button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

function Footer({ go }) {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot">
            <div className="mark">Pande Homestay</div>
            <p>A warm local base near Batu Bolong Beach, Canggu — you're not just a guest, you're part of the family.</p>
          </div>
          <div className="foot">
            <h4>Explore</h4>
            <a onClick={(e) => { e.preventDefault(); go('rooms'); }} href="#">Rooms &amp; rates</a>
            <a onClick={(e) => { e.preventDefault(); go('experience'); }} href="#">Experience Canggu</a>
            <a onClick={(e) => { e.preventDefault(); go('story'); }} href="#">Our story</a>
            <a onClick={(e) => { e.preventDefault(); go('contact'); }} href="#">Contact</a>
          </div>
          <div className="foot">
            <h4>Visit</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>Jl. Pantai Batu Bolong No.1,<br />Canggu, Badung, Bali 80361</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Check-in 14:00 · Check-out 12:00</a>
          </div>
          <div className="foot">
            <h4>Reach us</h4>
            <a href="tel:+6282146181867">+62 821 4618 1867</a>
            <a href="#" onClick={(e) => e.preventDefault()}>WhatsApp · 08.00–20.00</a>
            <a href="mailto:info@pandehomestaycanggu.com">info@pandehomestaycanggu.com</a>
          </div>
        </div>
        <div className="foot__bottom">
          <span>© 2026 Pande Homestay · Canggu, Bali</span>
          <span className="proto-flag">Placeholder photos &amp; rates — flag before launch</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsApp() {
  return (
    <a className="wa" href="#" onClick={(e) => e.preventDefault()} aria-label="Chat with Pande Homestay on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4.1-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5.7 9.8 10.3 5.3 16 5.3s10.3 4.5 10.3 10.2S21.7 25.7 16 25.7zm5.8-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" /></svg>
    </a>
  );
}

function Grain() {
  return (
    <svg className="grain" xmlns="http://www.w3.org/2000/svg">
      <filter id="grainN"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter>
      <rect width="100%" height="100%" filter="url(#grainN)" />
    </svg>
  );
}

Object.assign(window, { PandeHeader: Header, PandeFooter: Footer, PandeWhatsApp: WhatsApp, PandeGrain: Grain });
