const { Button, Eyebrow, Tag, Amenity, RoomCard, Review, Perk, BookingBar } = window.DesignSystem_3691ef;

const ROOMS = [
  { span: 'wide', tag: 'Signature', img: 'room-java-wooden-house', name: 'Java Wooden House', blurb: 'A comfy wooden house — feel the natural harmony inside.', alt: 'Java wooden house room with warm timber interior — Pande Homestay Canggu' },
  { span: 'tall', img: 'room-deluxe-double-balcony', name: 'Deluxe Double · Balcony', blurb: 'Upper-floor comfort with a balcony to chill.', alt: 'Deluxe double room with a private balcony — Pande Homestay Canggu' },
  { span: 'std', img: 'room-deluxe-double-ground', name: 'Deluxe Double · Ground', blurb: 'Ground-floor ease, steps from the garden.', alt: 'Deluxe double room on the ground floor — Pande Homestay Canggu' },
  { span: 'std', img: 'room-deluxe-twin-balcony', name: 'Deluxe Twin · Balcony', blurb: 'Two singles, upper floor, balcony to unwind.', alt: 'Deluxe twin room with two single beds and a balcony — Pande Homestay Canggu' },
  { span: 'std', img: 'room-deluxe-double-kitchen', name: 'Deluxe Double · Kitchen', blurb: 'Your own private cooking facilities.', alt: 'Deluxe double room with a private kitchenette — Pande Homestay Canggu' },
  { span: 'wide', tag: 'Character', img: 'room-classic-java', name: 'Classic Java Wooden House', blurb: 'Traditional timber craft, natural harmony inside.', alt: 'Classic Java wooden house with traditional timber craft — Pande Homestay Canggu' },
];

const AMENITIES = [
  ['❄️', 'Air conditioning', 'Cool, quiet rooms'],
  ['📶', 'Fast Wi-Fi', 'Work or stream easily'],
  ['🍳', 'Shared kitchen', 'Cook & meet travelers'],
  ['🛵', 'Bike & scooter', 'Daily rental on site'],
  ['🧺', 'Daily housekeeping', 'Fresh every day'],
  ['🌿', 'Garden views', 'Private terraces'],
  ['🚿', 'Hot water', 'Ensuite bathrooms'],
  ['🧘', 'Yoga & massage', 'On request'],
];

const EXPLORE = [
  ['🏄', 'Surf', 'Batu Bolong & Echo Beach breaks — beginner-friendly mornings, golden-hour sessions.'],
  ['☕', 'Cafés', "Canggu's specialty-coffee and brunch scene, a short scooter ride away."],
  ['🧘', 'Yoga & calm', 'Optional yoga and massage to ease into island time.'],
  ['🌅', 'Sunsets', 'Beach-bar sunsets and night markets — the best of the neighborhood.'],
];

const IMG = (n) => `../../assets/img/${n}.webp`;

function Marquee() {
  const items = ['Shared kitchen', 'Minutes to the surf', 'Garden quiet', 'Warm Balinese welcome', 'Scooter & airport help', 'Fast Wi-Fi'];
  const run = items.map((t, i) => <span key={i}>{t}&nbsp;</span>);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">{run}{run}</div>
    </div>
  );
}

function Home({ go }) {
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scene = document.getElementById('heroScene');
    const inner = document.getElementById('heroInner');
    const layers = scene ? [...scene.querySelectorAll('[data-depth]')] : [];
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;

    const onMove = (e) => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick); };
    const tick = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.depth);
        el.style.transform = `translate3d(${(-cx * d * 60).toFixed(2)}px, ${(-cy * d * 40).toFixed(2)}px, 0)`;
      });
      if (inner) inner.style.transform = `translate3d(${(cx * 14).toFixed(2)}px, ${(cy * 10).toFixed(2)}px, 0) rotateX(${(-cy * 2).toFixed(2)}deg) rotateY(${(cx * 2.4).toFixed(2)}deg)`;
      if (scene) scene.style.transform = `rotateX(${(cy * 2.4).toFixed(2)}deg) rotateY(${(-cx * 3).toFixed(2)}deg)`;
      raf = (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) ? requestAnimationFrame(tick) : 0;
    };
    const hero = document.getElementById('heroSection');
    hero && hero.addEventListener('pointermove', onMove);
    hero && hero.addEventListener('pointerleave', onLeave);

    // scroll depth on the photo — driven by a rAF loop that only runs while the
    // hero is on screen (IntersectionObserver), never a window 'scroll' listener.
    const bg = scene && scene.querySelector('.hero__bg');
    let scrollRaf = 0, lastY = -1;
    const scrollTick = () => {
      const y = window.scrollY;
      if (bg && y !== lastY && y < window.innerHeight) {
        bg.style.setProperty('--sy', `${(y * 0.18).toFixed(1)}px`);
        lastY = y;
      }
      scrollRaf = requestAnimationFrame(scrollTick);
    };
    const heroIO = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { if (!scrollRaf) scrollRaf = requestAnimationFrame(scrollTick); }
      else if (scrollRaf) { cancelAnimationFrame(scrollRaf); scrollRaf = 0; }
    }, { threshold: 0 });
    hero && heroIO.observe(hero);

    // 3D tilt on room cards
    const cards = [...document.querySelectorAll('.rooms .pande-room')];
    const tiltHandlers = cards.map((card) => {
      const move = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateY(${((px - 0.5) * 9).toFixed(2)}deg) rotateX(${((0.5 - py) * 9).toFixed(2)}deg) translateZ(6px)`;
        card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        card.style.setProperty('--glare', '0.22');
      };
      const leave = () => { card.style.transform = ''; card.style.setProperty('--glare', '0'); };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      return { card, move, leave };
    });

    return () => {
      hero && hero.removeEventListener('pointermove', onMove);
      hero && hero.removeEventListener('pointerleave', onLeave);
      heroIO.disconnect();
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      tiltHandlers.forEach(({ card, move, leave }) => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); });
    };
  }, []);

  return (
    <main id="main">
      {/* ARRIVE — layered 3D courtyard diorama */}
      <section className="hero hero--3d" id="heroSection" aria-label="Welcome to Pande Homestay">
        <div className="hero__scene" id="heroScene">
          <div className="hero__bg" data-depth="0.5"><img src={IMG('hero-courtyard')} alt="" aria-hidden="true" /></div>
          <div className="hero__veil"></div>
          <div className="hero__sun" data-depth="1.1" aria-hidden="true"></div>
          <svg className="hero__frond hero__frond--l" data-depth="2.4" viewBox="0 0 220 150" aria-hidden="true"><path d="M8 150 C 60 96, 150 44, 218 6 C 168 60, 96 104, 36 150 Z M14 142 C 70 100, 150 56, 208 18" fill="#1c1510" stroke="#1c1510" strokeWidth="1"/></svg>
          <svg className="hero__frond hero__frond--r" data-depth="1.8" viewBox="0 0 220 150" aria-hidden="true"><path d="M212 150 C 160 96, 70 44, 2 6 C 52 60, 124 104, 184 150 Z" fill="#1c1510"/></svg>
        </div>
        <div className="hero__veil hero__veil--front"></div>
        <div className="wrap hero__inner" id="heroInner">
          <div className="hero__eyebrow"><Eyebrow>01 — Arrive · Batu Bolong Beach</Eyebrow></div>
          <h1>Slow down.<br />You're <em>part of the family.</em></h1>
          <p className="hero__sub">A 13-room homestay tucked just minutes from Batu Bolong Beach — comfort, a shared kitchen, and real Balinese warmth, with the surf at your doorstep.</p>
          <div className="hero__cta">
            <Button variant="coral" onClick={() => go('book')}>Check availability</Button>
            <Button variant="ghost" onDark>Message us</Button>
          </div>
          <BookingBar onSubmit={() => go('book')} />
        </div>
      </section>

      <Marquee />

      {/* STAY */}
      <section className="block" id="stay">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow>02 — Stay</Eyebrow>
            <h2>Rooms that feel like home</h2>
            <p>Seven room styles — from cozy doubles to our character Java wooden houses — each with AC, fast Wi-Fi, and that easy Canggu calm.</p>
          </div>
          <div className="rooms">
            {ROOMS.map((r) => (
              <RoomCard key={r.name} span={r.span} tag={r.tag} image={IMG(r.img)} alt={r.alt} name={r.name} blurb={r.blurb} href="#" />
            ))}
          </div>
          <p style={{ marginTop: '1.6rem' }}><Button variant="ghost" onClick={() => go('rooms')}>See all rooms &amp; rates →</Button></p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="block amenities">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow>Everyday comfort</Eyebrow>
            <h2 style={{ fontSize: 'var(--fs-h2-sm)' }}>Everything you need to settle in</h2>
          </div>
          <div className="amenities__grid">
            {AMENITIES.map(([ic, l, n]) => <Amenity key={l} icon={ic} label={l} note={n} />)}
          </div>
          <div className="amen-list">
            {['Balcony', 'Mini-fridge', 'Tea & coffee kit', 'Kettle', 'Wardrobe', 'Non-smoking rooms', 'Airport help', 'Local guide tips'].map((c) => <Tag key={c}>{c}</Tag>)}
          </div>
        </div>
      </section>

      {/* BELONG */}
      <section className="block belong" id="belong">
        <div className="wrap belong__grid">
          <figure className="belong__img">
            <img src={IMG('room-java-wooden-house')} alt="The garden courtyard and wooden house at Pande Homestay, Canggu" />
            <figcaption>The garden courtyard</figcaption>
          </figure>
          <div>
            <Eyebrow>03 — Belong</Eyebrow>
            <h2 style={{ fontSize: 'var(--fs-h2-sm)', marginTop: '.8rem' }}>More a home than a hotel</h2>
            <p className="body">Step into our tropical oasis, where each room is thoughtfully designed with private terraces, air conditioning, and serene garden views. Wake up to birdsong, sip your morning coffee in the sunshine, and feel right at home. Our shared kitchen is a cozy, social space where stories are swapped over sizzling pans and local flavors.</p>
            <blockquote className="pull">"You're not just a guest — you're part of the family."</blockquote>
            <div className="trust">
              <div><b>8.5</b><small>Booking.com · 134 reviews</small></div>
              <div><b>13</b><small>Cozy rooms &amp; wooden houses</small></div>
              <div><b>3</b><small>Languages · EN · ID · 中文</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="block">
        <div className="wrap">
          <div className="section-head"><Eyebrow>A look around</Eyebrow><h2 style={{ fontSize: 'var(--fs-h2-sm)' }}>Moments at Pande</h2></div>
          <div className="gallery">
            <a className="tall" href="#" onClick={(e) => e.preventDefault()}><img src={IMG('gallery-1')} alt="Pande Homestay — property detail, Canggu" loading="lazy" /></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={IMG('gallery-2')} alt="Pande Homestay — interior detail, Canggu" loading="lazy" /></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={IMG('gallery-3')} alt="Pande Homestay — room detail, Canggu" loading="lazy" /></a>
            <a className="tall" href="#" onClick={(e) => e.preventDefault()}><img src={IMG('hero-2')} alt="Pande Homestay — garden, Canggu" loading="lazy" /></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={IMG('gallery-4')} alt="Pande Homestay — communal area, Canggu" loading="lazy" /></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={IMG('hero-3')} alt="Pande Homestay — ambience, Canggu" loading="lazy" /></a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="block amenities">
        <div className="wrap">
          <div className="section-head"><Eyebrow>Loved by guests</Eyebrow><h2 style={{ fontSize: 'var(--fs-h2-sm)' }}>Why travelers come back</h2></div>
          <div className="reviews__grid">
            <Review rating={5} author="— Guest review, illustrative" quote="Felt like staying with friends — the shared kitchen made the whole trip social and easy." style={{ padding: '2.4rem 2.2rem' }} />
            <Review rating={5} author="— Guest review, illustrative" quote="Minutes from Batu Bolong. We rolled out of bed and straight onto the waves." />
            <Review rating={4} author="— Guest review, illustrative" quote="Warm hosts who sorted our scooter and airport pickup without any fuss." />
          </div>
          <p style={{ marginTop: '1.4rem', fontSize: '.78rem', color: 'var(--earth-soft)' }}>Quotes are illustrative placeholders — production pulls verified, dated reviews from Booking.com / Google.</p>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="block" id="explore">
        <div className="wrap">
          <div className="section-head"><Eyebrow>04 — Explore</Eyebrow><h2>Step outside into Canggu</h2><p>We're right on Jl. Pantai Batu Bolong — surf breaks, specialty cafés, warungs, yoga, and sunset spots within easy reach.</p></div>
          <div className="explore__grid">
            <div className="xcards">
              {EXPLORE.map(([ic, h, p]) => (
                <div className="xcard" key={h}><div className="ic">{ic}</div><h3>{h}</h3><p>{p}</p></div>
              ))}
            </div>
            <div>
              <div className="map"><iframe title="Map showing Pande Homestay location on Jl. Pantai Batu Bolong, Canggu" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=-8.644302,115.141625&z=15&output=embed"></iframe></div>
              <a className="map__link" href="#" onClick={(e) => e.preventDefault()}>Open our location in Google Maps →</a>
            </div>
          </div>
          <p style={{ marginTop: '1.6rem' }}><Button variant="ghost" onClick={() => go('experience')}>Explore the neighborhood →</Button></p>
        </div>
      </section>

      {/* BOOK */}
      <BookSection />
    </main>
  );
}

const RATE = 350000; // placeholder nightly floor (IDR)
const OTA_MARKUP = 1.15; // ~15% commission baked into OTA price
const fmtIDR = (n) => 'IDR ' + new Intl.NumberFormat('id-ID').format(n);

function BookSection() {
  const [nights, setNights] = React.useState(3);
  const direct = RATE * nights;
  const ota = Math.round(direct * OTA_MARKUP);
  const saved = ota - direct;
  const clamp = (n) => Math.max(1, Math.min(14, n));

  const stepBtn = {
    width: 38, height: 38, borderRadius: '50%', cursor: 'pointer',
    border: '1px solid var(--line-on-dark)', background: 'rgba(243,235,221,.05)',
    color: 'var(--chalk)', fontFamily: 'var(--font-body)', fontSize: '1.3rem', lineHeight: 1,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background .2s, border-color .2s',
  };
  const total = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2rem', lineHeight: 1, display: 'block', marginTop: '.2rem' };
  const totalNote = { fontFamily: 'var(--font-body)', fontSize: '.74rem', color: 'var(--chalk-deep)', textTransform: 'none', letterSpacing: 0 };
  const totalWrap = { marginTop: '1.2rem', paddingTop: '1.1rem', borderTop: '1px solid var(--line-on-dark)' };

  return (
    <section className="block book" id="book">
      <div className="wrap">
        <div className="section-head"><Eyebrow onDark>05 — Book</Eyebrow><h2>Book direct &amp; save</h2><p>Reserve straight with us — the best available rate, no middle-man, and a local host on WhatsApp from arrival to checkout.</p></div>

        {/* interactive stay length → live totals */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', margin: '2.4rem 0 1.6rem' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.66rem', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, color: '#ffc7ad' }}>See your savings for</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem' }}>
            <button aria-label="Fewer nights" style={stepBtn} onClick={() => setNights((n) => clamp(n - 1))}>−</button>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 600, color: '#fff', minWidth: '4.5ch', textAlign: 'center' }}>{nights} {nights === 1 ? 'night' : 'nights'}</span>
            <button aria-label="More nights" style={stepBtn} onClick={() => setNights((n) => clamp(n + 1))}>+</button>
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.82rem', color: 'var(--brick)' }}>at a placeholder {fmtIDR(RATE)} / night*</span>
        </div>

        <div className="compare">
          <div className="compare__col compare--direct">
            <h3 style={{ color: '#fff' }}>Direct with Pande</h3>
            <ul><li>Best available rate</li><li>No booking fees</li><li>Local host on WhatsApp</li><li>Flexible, friendly changes</li><li>Little extras when we can</li></ul>
            <div style={totalWrap}>
              <span style={totalNote}>{nights}-night total</span>
              <b style={{ ...total, color: '#fff' }}>{fmtIDR(direct)}</b>
              <span style={{ ...totalNote, color: 'var(--coral)', fontWeight: 600, display: 'inline-block', marginTop: '.5rem' }}>You save {fmtIDR(saved)} vs an OTA</span>
            </div>
          </div>
          <div className="compare__col compare--ota">
            <h3 style={{ color: 'var(--chalk-deep)' }}>Via an OTA</h3>
            <ul><li>Commission baked into price</li><li>Generic support line</li><li>Brand lost at checkout</li><li>Stricter, colder policies</li></ul>
            <div style={totalWrap}>
              <span style={totalNote}>{nights}-night total</span>
              <b style={{ ...total, color: 'var(--chalk-deep)', textDecoration: 'line-through', textDecorationColor: 'var(--brick)' }}>{fmtIDR(ota)}</b>
              <span style={{ ...totalNote, display: 'inline-block', marginTop: '.5rem' }}>+ ~15% commission you don't see</span>
            </div>
          </div>
        </div>
        <div className="perks">
          <Perk icon="◎" title="Best price, direct">Our lowest available rate, straight from us.</Perk>
          <Perk icon="✶" title="No booking fees">The total you see is the total you pay.</Perk>
          <Perk icon="✆" title="Local host on WhatsApp">Real people, real replies — before &amp; during.</Perk>
          <Perk icon="↺" title="Flexible &amp; friendly">Just let us know if your plans change.</Perk>
        </div>
        <div className="book__cta">
          <div className="book__price"><small>From</small><b>IDR 350K<span style={{ fontSize: '1rem', fontWeight: 400 }}> / night</span></b><div className="book__note">* Placeholder rate &amp; photos. Live rates load from the booking engine.</div></div>
          <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
            <Button variant="coral">Check availability</Button>
            <Button variant="ghost" onDark>WhatsApp us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PandeHome: Home });
