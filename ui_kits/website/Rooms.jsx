const { Button, Eyebrow, Tag } = window.DesignSystem_3691ef;

const IMGR = (n) => `../../assets/img/${n}.webp`;

const ROOM_DETAIL = [
  { img: 'room-java-wooden-house', name: 'Java Wooden House', desc: 'A comfy wooden house — feel the natural harmony inside. Warm timber, soft light, and the garden a step away.', feats: ['Double bed', 'AC', 'Fast Wi-Fi', 'Garden view'], tag: 'Signature', alt: 'Java wooden house room with warm timber interior — Pande Homestay Canggu' },
  { img: 'room-deluxe-double-balcony', name: 'Deluxe Double · Balcony', desc: 'Upper-floor comfort with a private balcony to chill — morning coffee, evening breeze.', feats: ['Double bed', 'Upper floor', 'Private balcony', 'AC'], alt: 'Deluxe double room with a private balcony — Pande Homestay Canggu' },
  { img: 'room-deluxe-double-ground', name: 'Deluxe Double · Ground Floor', desc: 'Ground-floor ease, steps from the garden. Easy in, easy out, no stairs.', feats: ['Double bed', 'Ground floor', 'AC', 'Ensuite'], alt: 'Deluxe double room on the ground floor — Pande Homestay Canggu' },
  { img: 'room-deluxe-twin-balcony', name: 'Deluxe Twin · Balcony', desc: 'Two singles on the upper floor with a balcony to unwind — made for friends travelling together.', feats: ['Two singles', 'Upper floor', 'Private balcony', 'AC'], alt: 'Deluxe twin room with two single beds and a balcony — Pande Homestay Canggu' },
  { img: 'room-deluxe-double-kitchen', name: 'Deluxe Double · Kitchen', desc: 'Room with your own private cooking facilities — settle in for a longer stay.', feats: ['Double bed', 'Private kitchen', 'AC', 'Fast Wi-Fi'], tag: 'Long stay', alt: 'Deluxe double room with a private kitchenette — Pande Homestay Canggu' },
  { img: 'room-standard-double', name: 'Standard Double', desc: 'A simple, cozy double on the first floor — the easy-going essentials done well.', feats: ['Double bed', 'First floor', 'AC', 'Ensuite'], alt: 'Standard double room — Pande Homestay Canggu' },
  { img: 'room-classic-java', name: 'Classic Java Wooden House', desc: 'Traditional timber craft and natural harmony inside — our most characterful room.', feats: ['Double bed', 'Heritage timber', 'AC', 'Garden view'], tag: 'Character', alt: 'Classic Java wooden house with traditional timber craft — Pande Homestay Canggu' },
];

function RoomsScreen({ go }) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="page-hero__bg"><img src={IMGR('room-deluxe-double-ground')} alt="" aria-hidden="true" /></div>
        <div className="wrap">
          <div className="crumbs"><a href="#" onClick={(e) => { e.preventDefault(); go('home'); }}>Home</a><span>/</span><span>Rooms</span></div>
          <h1>Seven ways to stay</h1>
          <p>From cozy doubles to our character Java wooden houses — each with AC, fast Wi-Fi, and that easy Canggu calm. All-in prices shown in IDR at booking.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          {ROOM_DETAIL.map((r) => (
            <div className="roomrow" key={r.name}>
              <figure className="roomrow__img"><img src={IMGR(r.img)} alt={r.alt} /></figure>
              <div>
                {r.tag && <Eyebrow>{r.tag}</Eyebrow>}
                <h3 style={{ marginTop: r.tag ? '.6rem' : 0 }}>{r.name}</h3>
                <div className="feat">{r.feats.map((f) => <Tag key={f}>{f}</Tag>)}</div>
                <p>{r.desc}</p>
                <p style={{ marginTop: '1.4rem', display: 'flex', gap: '.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant="coral" onClick={() => go('book')}>Check availability</Button>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '.82rem', color: 'var(--earth-soft)' }}>From <b style={{ color: 'var(--earth)' }}>IDR 350K</b> / night*</span>
                </p>
              </div>
            </div>
          ))}
          <p style={{ marginTop: '2rem', fontSize: '.78rem', color: 'var(--earth-soft)' }}>* Placeholder rate — live rates and availability load from the booking engine. Photos are temporary placeholders.</p>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { PandeRooms: RoomsScreen });
