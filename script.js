/* ============================================================
   SK Studio — vanilla JS, no dependencies
   EDIT PROJECT CONTENT HERE ↓ (this is the only data you touch)
   ============================================================ */

const PROJECTS = [
  {
    title: 'Mixed-Use Urban Complex',
    date: 'August 2026',
    type: 'Exterior Design',
    role: 'Independent Project',
    location: 'Isfahan, Iran',
    software: '',                       // add when known
    desc: [
      `The project is conceived as a contemporary urban complex where architectural
       identity, functionality, and environmental performance come together in a unified
       composition. A layered façade of vertical fins defines the building's character,
       filtering daylight while creating depth, rhythm, and a distinctive presence within
       its context. In contrast, transparent ground-level frontages establish a strong
       visual connection with the public realm, bringing openness and activity to the
       street edge.`,
      `The design balances solid and transparent volumes to create a dynamic architectural
       experience from both the city and the interior spaces. Generous glazing, landscaped
       terraces, and carefully framed views enhance natural light and visual connectivity,
       while the darker secondary volumes provide a refined counterpoint to the lighter
       façade system. The result is a sophisticated and highly recognizable development
       designed to offer both a strong commercial presence and a comfortable, contemporary
       environment for its users.`
    ],
    images: [
      {src:'images/p1-01.jpg', alt:'Street elevation at dusk, warm interiors lit behind the fin façade'},
      {src:'images/p1-02.jpg', alt:'Daytime street view showing the complex in its urban context'},
      {src:'images/p1-03.jpg', alt:'Garden side, landscaped terraces above the glazed ground floor'}
    ]
  },
  {
    title: 'Contemporary Kitchen Interior',
    type: 'Interior Design',
    role: 'Design, Modeling, Visualization',
    desc: [
      `This kitchen interior was designed as a warm and refined contemporary space,
       where functionality is balanced with a strong sense of character and
       craftsmanship. I combined soft ivory shaker-style cabinetry with rich natural
       wood countertops and accents to create a welcoming contrast, while the
       herringbone backsplash introduces subtle texture and rhythm to the composition.`,
      `One of the main focal points is the arched display niche with its timber backdrop
       and integrated warm lighting, adding depth and giving the kitchen a more
       distinctive architectural identity. The central island acts as both a practical
       workspace and an inviting social element, helping the space feel open and
       connected. Through carefully considered proportions, layered lighting, material
       harmony, and detailed cabinetry, I aimed to create a kitchen that feels elegant,
       timeless, and comfortable.`
    ],
    images: [
      {src:'images/p2-01.jpg', alt:'Kitchen in daylight, walnut island and bar stools'},
      {src:'images/p2-02.jpg', alt:'The same kitchen at dusk, warm niche lighting against a blue window'},
      {src:'images/p2-03.jpg', alt:'Cabinet run with timber hood and herringbone backsplash'},
      {src:'images/p2-04.jpg', alt:'Arched glazed pantry beside the timber-lined display niche'}
    ]
  },
  {
    title: 'Living & Dining Study',
    type: 'Interior Design · Visualization',
    role: 'Self-Initiated — Design, Modeling, Visualization',
    desc: [
      `This self-initiated conceptual project was created as an independent design and
       visualization study, giving me the freedom to explore my own ideas while
       demonstrating my skills in interior composition, material selection, lighting, and
       architectural storytelling. I envisioned a warm contemporary living and dining
       space shaped by natural light, earthy materials, and a strong connection between
       the interior and its surroundings.`,
      `Large floor-to-ceiling glazing, a linear skylight, and carefully positioned
       openings bring daylight deep into the space, creating expressive shadows across the
       herringbone timber flooring throughout the day. A restrained palette of warm wood,
       soft neutral fabrics, textured plaster, exposed concrete, and dark metal framing
       creates a calm yet sophisticated atmosphere, while timber slats, greenery, and
       subtle decorative elements add depth and character.`,
      `Through this project, I focused not only on designing an attractive interior, but
       also on creating convincing spatial relationships, realistic material behavior,
       balanced compositions, and an atmosphere that feels naturally lived in. As an
       aspiring architectural visualizer, this project represents my passion for
       transforming an original idea into a complete visual experience and showcasing the
       level of detail, mood, and realism I aim to bring to every project.`
    ],
    images: [
      {src:'images/p3-01.jpg', alt:'Living room from behind the sofa, glazing opening to the landscape'},
      {src:'images/p3-02.jpg', alt:'Open-plan perspective with low sun raking across the herringbone floor'},
      {src:'images/p3-03.jpg', alt:'Dining table beneath the pendant, concrete courtyard wall beyond the glazing'}
    ]
  },
  {
    title: 'Kitchen Material Study',
    type: 'Interior Design · Material Study',
    role: 'Layout, Material Direction, Visualization',
    desc: [
      `I started this kitchen design by developing the layout, proportions, and functional
       organization of the space. From the same base concept, I explored different material
       and color directions, which led to two alternatives: one with a darker, more
       dramatic contemporary character, and another with a lighter, warmer, and more
       minimal atmosphere.`,
      `Both options keep the same design logic while showing how different finishes,
       lighting, and contrast can completely change the final experience of the space.`
    ],
    images: [
      {src:'images/p4-01.jpg', alt:'Darker option — graphite cabinetry, stone backsplash, warm-lit timber niches'},
      {src:'images/p4-02.jpg', alt:'Lighter option — white cabinetry with timber trim and the same niche wall'}
    ]
  },
];

/* ---------- nav: stick + mobile menu ---------- */
const nav = document.getElementById('nav');
const links = document.querySelector('.nav__links');
const toggle = document.getElementById('navToggle');

addEventListener('scroll', () => nav.classList.toggle('is-stuck', scrollY > 40), {passive:true});

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('is-open');
  toggle.classList.remove('is-open');
}));

/* ---------- scroll reveal: vertical wipe ----------
   Position-based rather than IntersectionObserver: when the page is embedded
   in an iframe that the host sizes to full document height and scrolls from
   outside, the observer never sees an intersection change and nothing would
   ever reveal. Measuring rectangles works in every context. */
let pending = [...document.querySelectorAll('.reveal')];

function revealAll() {
  pending.forEach(el => el.classList.add('is-in'));
  pending = [];
}

function sweep() {
  const h = window.innerHeight || document.documentElement.clientHeight;

  // If the document can't scroll, nothing below the fold will ever scroll into
  // view — which is the case when an embed sizes its frame to the full content
  // height. Show everything now rather than wait for a scroll that never comes.
  if (document.documentElement.scrollHeight <= h + 40) return revealAll();

  for (let i = pending.length - 1; i >= 0; i--) {
    const r = pending[i].getBoundingClientRect();
    if (r.top < h * 0.92 && r.bottom > 0) {
      pending[i].classList.add('is-in');
      pending.splice(i, 1);
    }
  }
}

// Called directly, not via requestAnimationFrame: rAF is throttled to zero in
// background tabs and unpainted iframes, which would leave images hidden. The
// sweep is a handful of rect reads, cheap enough to run on the event itself.
function queueSweep() { sweep(); }

sweep();                                          // whatever is on screen at rest
// capture:true — scroll events don't bubble, but they do reach window during
// the capture phase, so this catches a scrolling container too.
addEventListener('scroll', queueSweep, {passive: true, capture: true});
addEventListener('resize', queueSweep);
addEventListener('load', sweep);                  // images can shift layout
setTimeout(sweep, 300);

// Failsafe: if nothing has revealed at all, the mechanism is broken in this
// environment — show everything rather than leave a blank portfolio.
setTimeout(() => {
  if (!document.querySelector('.reveal.is-in')) revealAll();
}, 1800);

// Layout keeps moving for a short while after load as fonts and images settle;
// re-check over the first few seconds so nothing is stranded by a late shift.
let ticks = 0;
const settle = setInterval(() => {
  sweep();
  if (++ticks > 16 || !pending.length) clearInterval(settle);
}, 250);

/* ---------- category filter ---------- */
const cards = [...document.querySelectorAll('.card')];

document.getElementById('filters').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
  chip.classList.add('is-active');

  const f = chip.dataset.filter;
  cards.forEach(card => {
    const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
    card.classList.toggle('is-hidden', !show);
  });
});

/* ---------- lightbox ---------- */
const lb      = document.getElementById('lb');
const stage   = document.getElementById('lbStage');
const elIndex = document.getElementById('lbIndex');
const elTitle = document.getElementById('lbTitle');
const elSpecs = document.getElementById('lbSpecs');
const elDesc  = document.getElementById('lbDesc');
let current = 0;

function render(i) {
  const p = PROJECTS[i];
  if (!p) return;
  current = i;

  elIndex.textContent = `${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}`;
  elTitle.textContent = p.title;

  // desc may be one string or an array of paragraphs
  elDesc.innerHTML = [].concat(p.desc)
    .map(t => `<p>${t.trim().replace(/\s+/g, ' ')}</p>`).join('');

  // only render specs that actually have a value
  elSpecs.innerHTML = [
    ['Date', p.date || p.year], ['Type', p.type], ['Role', p.role],
    ['Software', p.software], ['Location', p.location]
  ].filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

  stage.innerHTML = p.images.map(img => {
    if (typeof img === 'string') {          // not shot yet — show the slot
      return `<div class="frame frame--wide">
                <div class="ph"><span class="ph__label">${img}</span></div>
              </div>`;
    }
    return `<div class="frame frame--natural">
              <img src="${img.src}" alt="${img.alt}" loading="lazy">
            </div>`;
  }).join('');
  stage.scrollTop = 0;
}

function open(i) {
  render(i);
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
}
function close() {
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
}
const step = d => render((current + d + PROJECTS.length) % PROJECTS.length);

cards.forEach(card => card.addEventListener('click', () => open(+card.dataset.project)));

/* ---------- motion: load the player only when asked ----------
   Each reel is a real link to the file, so it still works with no JS and
   nothing heavy loads until someone actually wants to watch. */
document.querySelectorAll('.reel__video').forEach(slot => {
  slot.addEventListener('click', (e) => {
    e.preventDefault();                       // keep the href as the no-JS fallback
    if (slot.classList.contains('is-playing')) return;
    const id = slot.dataset.video;
    const isYT = slot.dataset.provider === 'youtube';
    const frame = document.createElement('iframe');

    // youtube.com rather than youtube-nocookie.com: the nocookie host is
    // stricter about embeds whose parent origin it cannot verify.
    // No origin parameter: in a sandboxed frame without allow-same-origin,
    // location.origin is the string "null", and sending origin=null is itself
    // rejected by YouTube. A plain embed does not need the parameter at all.
    frame.src = isYT
      ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`
      : `https://drive.google.com/file/d/${id}/preview`;

    // matches YouTube's own embed snippet — without a referrer YouTube
    // cannot validate the embed and refuses to play
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; '
                + 'gyroscope; picture-in-picture; web-share; fullscreen';
    frame.allowFullscreen = true;
    slot.appendChild(frame);
    slot.classList.add('is-playing');

  });
});
document.getElementById('lbClose').addEventListener('click', close);
document.getElementById('lbPrev').addEventListener('click', () => step(-1));
document.getElementById('lbNext').addEventListener('click', () => step(1));

addEventListener('keydown', (e) => {
  if (!lb.classList.contains('is-open')) return;
  if (e.key === 'Escape')     close();
  if (e.key === 'ArrowLeft')  step(-1);
  if (e.key === 'ArrowRight') step(1);
});
