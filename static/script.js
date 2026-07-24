const demoParticipants = [
  {
    id: 'participant-1',
    name: 'Jhonatan Méndez Céspedes',
    cargo: 'Líder de calidad',
    photo: 'assets/team/07-jhonatan-mendez.jpg',
    totalPoints: 920,
    monthlyPoints: 248,
    badges: ['Calidad', 'Liderazgo'],
  },
  {
    id: 'participant-2',
    name: 'Liliana Pantoja',
    cargo: 'Gerente Gobierno de Datos',
    photo: 'assets/team/11-liliana-pantoja.jpg',
    totalPoints: 860,
    monthlyPoints: 210,
    badges: ['Gobierno de Datos', 'Visión estratégica'],
  },
  {
    id: 'participant-3',
    name: 'Julián Duarte Sánchez',
    cargo: 'Arquitecto de Datos',
    photo: 'assets/team/09-julian-duarte.png',
    totalPoints: 780,
    monthlyPoints: 196,
    badges: ['Arquitectura', 'Innovación'],
  },
  {
    id: 'participant-4',
    name: 'Laura Andrea Quinchia Espinosa',
    cargo: 'Product Owner',
    photo: 'assets/team/08-laura-quinchia.png',
    totalPoints: 705,
    monthlyPoints: 180,
    badges: ['Producto', 'Priorización'],
  },
  {
    id: 'participant-5',
    name: 'José Joaquín Cacao Chub',
    cargo: 'Ingeniero de Datos',
    photo: 'assets/team/10-jose-cacao.jpg',
    totalPoints: 640,
    monthlyPoints: 172,
    badges: ['Ingeniería', 'Automatización'],
  },
  {
    id: 'participant-6',
    name: 'Maria Camila Vélez Gómez',
    cargo: 'Experto gestión del cambio',
    photo: 'assets/team/01-maria-camila-velez.jpg',
    totalPoints: 520,
    monthlyPoints: 132,
    badges: ['Gestión del cambio', 'Comunicación'],
  },
  {
    id: 'participant-7',
    name: 'Fabio Andres Triana Rodriguez',
    cargo: 'Experto en analítica de datos',
    photo: 'assets/team/02-fabio-triana.jpg',
    totalPoints: 480,
    monthlyPoints: 120,
    badges: ['Analítica', 'Insight'],
  },
  {
    id: 'participant-8',
    name: 'Juan David Manosalva Duarte',
    cargo: 'Experto en analítica de datos',
    photo: 'assets/team/04-juan-david-manosalva.png',
    totalPoints: 455,
    monthlyPoints: 102,
    badges: ['Analítica', 'Precisión'],
  },
  {
    id: 'participant-9',
    name: 'Gladis Cecilia Martínez Tobón',
    cargo: 'Líder de procesos',
    photo: 'assets/team/03-gladis-martinez.png',
    totalPoints: 410,
    monthlyPoints: 88,
    badges: ['Procesos', 'Consistencia'],
  },
  {
    id: 'participant-10',
    name: 'Sara Yulitza Torres Díaz',
    cargo: 'Documentador',
    photo: 'assets/team/06-sara-torres.png',
    totalPoints: 330,
    monthlyPoints: 68,
    badges: ['Documentación', 'Detalle'],
  },
  {
    id: 'participant-11',
    name: 'Jesus Santiago Ardila Orozco',
    cargo: 'Documentador',
    photo: 'assets/team/05-jesus-santiago-ardila.png',
    totalPoints: 270,
    monthlyPoints: 58,
    badges: ['Documentación', 'Apoyo'],
  },
];

const pointReasons = [
  'Cumplimiento de objetivos',
  'Trabajo en equipo',
  'Innovación',
  'Liderazgo',
  'Apoyo a compañeros',
  'Excelente desempeño',
  'Participación',
  'Resolución de problemas',
  'Reconocimiento especial',
  'Corrección administrativa',
  'Otro',
];

const dataCoinFeatures = [
  {
    title: 'Visibiliza el impacto',
    label: 'Reconocimiento',
    description: 'Cada acción recibe puntos, cada logro es reconocido públicamente para fomentar compromiso.',
    icon: 'star',
    accent: 'teal',
  },
  {
    title: 'Hazlo tangible',
    label: 'Motivación',
    description: 'Los datos se convierten en recompensas digitales que incentivan la participación constante.',
    icon: 'zap',
    accent: 'purple',
  },
  {
    title: 'Alinea al equipo',
    label: 'Alineación',
    description: 'DataCoins ayuda a enfocar los esfuerzos en lo que más aporta a resultados concretos.',
    icon: 'target',
    accent: 'teal',
  },
];

// Iconos en línea (SVG) usados en lugar de emojis para un acabado más pulido.
const ICONS = {
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 16.9 6.8 19.3l1-5.9-4.3-4.2 5.9-.8L12 3z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-7 4-13 14-15 0 10-6 14-14 15z"/><path d="M5 21c2-4 5-7 9-9"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c3 1.5 5 5 5 9 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-7.5 5-9z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 16l-3 3M15 16l3 3"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 5H4a3 3 0 0 0 3 4M16 5h4a3 3 0 0 1-3 4"/><path d="M12 12v3"/><path d="M9 20h6"/><path d="M10 17h4l.5 3h-5l.5-3z"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16l-1.5-9-4 3.5L12 6l-2.5 6.5-4-3.5L4 18z"/><path d="M6 20h12"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V4"/><path d="M6 4h11l-2.5 3.5L17 11H6"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 5.9L19 9.5l-5.4 1.6L12 17l-1.6-5.9L5 9.5l5.4-1.6L12 2z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
};

function mountIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.dataset.icon;
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

// Sistema de niveles: cada participante sube de categoría según sus Data Coins totales.
const tiers = [
  { id: 'explorador', name: 'Explorador', min: 0, iconKey: 'compass', color: '#8b8fa3', gradient: 'linear-gradient(135deg, #9aa0ac, #6a6f7d)' },
  { id: 'principiante', name: 'Principiante', min: 120, iconKey: 'leaf', color: '#12d498', gradient: 'linear-gradient(135deg, #12d498, #0ea672)' },
  { id: 'intermedio', name: 'Intermedio', min: 250, iconKey: 'zap', color: '#1bb0ce', gradient: 'linear-gradient(135deg, #1bb0ce, #157e93)' },
  { id: 'avanzado', name: 'Avanzado', min: 400, iconKey: 'rocket', color: '#6c4bd1', gradient: 'linear-gradient(135deg, #6c4bd1, #53258d)' },
  { id: 'maestro', name: 'Maestro', min: 600, iconKey: 'trophy', color: '#53258d', gradient: 'linear-gradient(135deg, #53258d, #1c0244)' },
  { id: 'legendario', name: 'Legendario', min: 850, iconKey: 'crown', color: '#f2b705', gradient: 'linear-gradient(135deg, #f2b705, #a9791d 60%, #1c0244)' },
];

const defaultAvatar = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80';

const STORAGE_KEYS = {
  participants: 'gba-static-participants-v2',
  user: 'gba-static-user',
};

let isAdmin = false;
let currentFilter = 'all';
let currentSort = 'points';
let searchTerm = '';

const participantGrid = document.getElementById('participantsGrid');
const podiumGrid = document.getElementById('podiumGrid');
const tiersGrid = document.getElementById('tiersGrid');
const filterChips = document.getElementById('filterChips');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const viewPodiumButton = document.getElementById('viewPodium');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');
const modeBadge = document.getElementById('modeBadge');

const awardPointsButton = document.getElementById('awardPointsButton');
const pointsModal = document.getElementById('pointsModal');
const closePointsModal = document.getElementById('closePointsModal');
const pointsForm = document.getElementById('pointsForm');
const pointsParticipantSelect = document.getElementById('pointsParticipant');
const pointsReasonSelect = document.getElementById('pointsReason');
const pointsAmountInput = document.getElementById('pointsAmount');

function getStorage(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getParticipants() {
  return getStorage(STORAGE_KEYS.participants, demoParticipants);
}

function setParticipants(participants) {
  saveStorage(STORAGE_KEYS.participants, participants);
}

function getCurrentUser() {
  return getStorage(STORAGE_KEYS.user, null);
}

function saveCurrentUser(user) {
  saveStorage(STORAGE_KEYS.user, user);
}

function showToast(message) {
  if (!notification) return;
  notification.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(() => notification.classList.add('hidden'), 2800);
}

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value;
  return div.innerHTML;
}

function getTier(points) {
  let current = tiers[0];
  for (const tier of tiers) {
    if (points >= tier.min) current = tier;
  }
  const idx = tiers.indexOf(current);
  const next = tiers[idx + 1] || null;
  let progress = 100;
  if (next) {
    progress = Math.max(0, Math.min(100, ((points - current.min) / (next.min - current.min)) * 100));
  }
  return { tier: current, next, progress };
}

function tierBadgeHTML(tier) {
  return `<span class="tier-chip" style="--tier-gradient:${tier.gradient}"><span class="tier-chip-icon">${ICONS[tier.iconKey]}</span>${tier.name}</span>`;
}

function tierProgressHTML(points) {
  const { tier, next, progress } = getTier(points);
  const label = next
    ? `${next.min - points} pts para ${next.name}`
    : 'Nivel máximo alcanzado';
  return `
    <div class="tier-progress-wrap">
      <div class="tier-progress"><div class="tier-progress-fill" data-target-width="${progress}" style="width:0%; background:${tier.gradient}"></div></div>
      <span class="tier-progress-label">${label}</span>
    </div>
  `;
}

function renderTiersLegend() {
  if (!tiersGrid) return;
  tiersGrid.innerHTML = tiers
    .map((tier, index) => {
      const next = tiers[index + 1];
      const range = next ? `${tier.min} – ${next.min - 1} pts` : `${tier.min}+ pts`;
      const dots = tiers
        .map((t, i) => `<span class="tier-dot ${i === index ? 'active' : ''}" style="${i === index ? `--dot-color:${tier.color}` : ''}"></span>`)
        .join('');
      return `
        <article class="tier-card">
          <span class="tier-icon" style="--tier-gradient:${tier.gradient}; --tier-color:${tier.color}">${ICONS[tier.iconKey]}</span>
          <h3>${tier.name}</h3>
          <p>${range}</p>
          <div class="tier-dots">${dots}</div>
        </article>
      `;
    })
    .join('');
}

function renderFilterChips() {
  if (!filterChips) return;
  const chips = [{ id: 'all', name: 'Todos', iconKey: 'sparkles' }, ...tiers];
  filterChips.innerHTML = chips
    .map(
      (chip) => `
        <button type="button" class="filter-chip ${currentFilter === chip.id ? 'active' : ''}" data-filter="${chip.id}">
          <span class="filter-chip-icon">${ICONS[chip.iconKey]}</span>${chip.name}
        </button>
      `
    )
    .join('');

  filterChips.querySelectorAll('.filter-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      refreshUI();
    });
  });
}

function applyFiltersAndSort(participants) {
  let result = participants.slice();

  if (currentFilter !== 'all') {
    result = result.filter((p) => getTier(p.totalPoints).tier.id === currentFilter);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.trim().toLowerCase();
    result = result.filter(
      (p) => p.name.toLowerCase().includes(term) || p.cargo.toLowerCase().includes(term)
    );
  }

  if (currentSort === 'points') {
    result.sort((a, b) => b.totalPoints - a.totalPoints);
  } else if (currentSort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'cargo') {
    result.sort((a, b) => a.cargo.localeCompare(b.cargo));
  }

  return result;
}

function renderParticipants(participants) {
  if (!participantGrid) return;
  const filtered = applyFiltersAndSort(participants);
  participantGrid.innerHTML = '';

  if (emptyState) {
    emptyState.classList.toggle('hidden', filtered.length > 0);
  }

  filtered.forEach((participant) => {
    const card = document.createElement('article');
    card.className = 'participant-card';

    const photo = participant.photo || defaultAvatar;
    const badges = participant.badges.length > 0 ? participant.badges.map((b) => `<span class="mini-badge">${escapeHtml(b)}</span>`).join('') : '';

    card.innerHTML = `
      <div class="participant-content">
        <div class="participant-head">
          <div class="avatar"><img src="${photo}" alt="Foto de ${escapeHtml(participant.name)}" /></div>
          <div>
            <h3>${escapeHtml(participant.name)}</h3>
            <p>${escapeHtml(participant.cargo)}</p>
          </div>
        </div>
        <div class="points"><span class="points-value" data-count-to="${participant.totalPoints}">0</span> <span class="points-suffix">Data Coins</span></div>
        ${tierBadgeHTML(getTier(participant.totalPoints).tier)}
        ${tierProgressHTML(participant.totalPoints)}
        <div class="badges-row">${badges}</div>
        ${isAdmin ? `<button type="button" class="award-btn" data-award="${participant.id}">🪙 Otorgar puntos</button>` : ''}
      </div>
    `;

    participantGrid.appendChild(card);
  });

  participantGrid.querySelectorAll('[data-award]').forEach((btn) => {
    btn.addEventListener('click', () => openPointsModal(btn.dataset.award));
  });

  animateCardEntrance(participantGrid.querySelectorAll('.participant-card'));
  animateCounters(participantGrid.querySelectorAll('.points-value'));
  animateProgressBars(participantGrid.querySelectorAll('.tier-progress-fill'));
}

function renderDataCoinFeatures() {
  const grid = document.querySelector('.data-coin-grid');
  if (!grid) return;
  grid.innerHTML = '';
  dataCoinFeatures.forEach((feature) => {
    const card = document.createElement('article');
    card.className = `feature-card accent-${feature.accent}`;
    card.innerHTML = `
      <span class="feature-icon">${ICONS[feature.icon]}</span>
      <span class="feature-label">${feature.label}</span>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      <span class="feature-accent"></span>
    `;
    grid.appendChild(card);
  });
}

function renderPodium(participants) {
  if (!podiumGrid) return;
  podiumGrid.innerHTML = '';
  const sorted = participants.slice().sort((a, b) => b.monthlyPoints - a.monthlyPoints);
  const podium = sorted.slice(0, 3);

  if (podium.length === 0) {
    podiumGrid.innerHTML = '<p class="podium-empty">No hay datos para este mes.</p>';
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];
  const placeOrder = [1, 0, 2];

  placeOrder.forEach((sortedIndex) => {
    const participant = podium[sortedIndex];
    if (!participant) return;
    const placeNumber = sortedIndex + 1;
    const photo = participant.photo || defaultAvatar;
    const tier = getTier(participant.totalPoints).tier;

    const place = document.createElement('div');
    place.className = `podium-place place-${placeNumber}`;
    place.innerHTML = `
      ${placeNumber === 1 ? '<span class="podium-crown">👑</span>' : ''}
      <div class="podium-avatar-wrap">
        <img src="${photo}" alt="Foto de ${escapeHtml(participant.name)}" />
        <span class="podium-medal">${medals[placeNumber - 1]}</span>
      </div>
      <p class="podium-name">${escapeHtml(participant.name)}</p>
      <p class="podium-role"><span class="podium-role-icon">${ICONS[tier.iconKey]}</span>${tier.name}</p>
      <p class="podium-points"><span class="points-value" data-count-to="${participant.monthlyPoints}">0</span> pts</p>
      <div class="podium-step step-${placeNumber}">${placeNumber}</div>
    `;
    podiumGrid.appendChild(place);
  });

  animateCardEntrance(podiumGrid.querySelectorAll('.podium-place'), { y: 40, scale: 0.85 });
  animateCounters(podiumGrid.querySelectorAll('.points-value'));
}

// --- Animaciones (GSAP) ---
function animateCardEntrance(elements, options = {}) {
  if (typeof gsap === 'undefined' || !elements || elements.length === 0) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: options.y ?? 24, scale: options.scale ?? 1 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.55,
      stagger: 0.07,
      ease: 'power3.out',
    }
  );
}

function animateCounters(elements) {
  if (!elements || elements.length === 0) return;
  elements.forEach((el) => {
    const target = Number(el.dataset.countTo) || 0;
    if (typeof gsap === 'undefined') {
      el.textContent = target;
      return;
    }
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.1,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(counter.value);
      },
    });
  });
}

function animateProgressBars(elements) {
  if (!elements || elements.length === 0) return;
  elements.forEach((el) => {
    const target = Number(el.dataset.targetWidth) || 0;
    if (typeof gsap === 'undefined') {
      el.style.width = `${target}%`;
      return;
    }
    gsap.to(el, { width: `${target}%`, duration: 1, ease: 'power2.out', delay: 0.15 });
  });
}

function initScrollReveal() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const revealGroups = [
    '.quick-actions-copy',
    '.quick-actions-buttons',
    '.what-is-data-coin .section-intro',
    '.coin-showcase',
    '.tiers-section .section-intro',
  ];

  revealGroups.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: typeof ScrollTrigger !== 'undefined' ? { trigger: el, start: 'top 85%' } : undefined,
      }
    );
  });

  const staggerGroups = ['.feature-card', '.tier-card'];
  staggerGroups.forEach((selector) => {
    const els = document.querySelectorAll(selector);
    if (els.length === 0) return;
    gsap.fromTo(
      els,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: typeof ScrollTrigger !== 'undefined' ? { trigger: els[0], start: 'top 88%' } : undefined,
      }
    );
  });
}

function refreshUI() {
  renderFilterChips();
  const participants = getParticipants();
  renderParticipants(participants);
  renderPodium(participants);
}

function initializeAuth() {
  const currentUser = getCurrentUser();
  isAdmin = Boolean(currentUser && currentUser.username === 'admin');
  if (modeBadge) {
    modeBadge.textContent = isAdmin ? 'Modo administradora' : 'Modo visitante';
  }
  if (awardPointsButton) {
    awardPointsButton.classList.toggle('hidden', !isAdmin);
  }
}

function populatePointsForm() {
  if (!pointsParticipantSelect || !pointsReasonSelect) return;
  const participants = getParticipants();
  pointsParticipantSelect.innerHTML = participants
    .map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`)
    .join('');
  pointsReasonSelect.innerHTML = pointReasons
    .map((reason) => `<option value="${escapeHtml(reason)}">${escapeHtml(reason)}</option>`)
    .join('');
}

function openPointsModal(preselectId) {
  if (!pointsModal) return;
  populatePointsForm();
  if (preselectId && pointsParticipantSelect) {
    pointsParticipantSelect.value = preselectId;
  }
  pointsModal.classList.remove('hidden');
}

function mountEvents() {
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      if (loginModal) loginModal.classList.remove('hidden');
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (loginModal) loginModal.classList.add('hidden');
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const userInput = document.getElementById('loginUser');
      const passInput = document.getElementById('loginPass');
      const user = userInput ? userInput.value.trim() : '';
      const pass = passInput ? passInput.value.trim() : '';

      if (user === 'admin' && pass === 'GBA2026') {
        saveCurrentUser({ username: 'admin', role: 'admin' });
        isAdmin = true;
        initializeAuth();
        refreshUI();
        showToast('Administradora conectada.');
        if (loginModal) loginModal.classList.add('hidden');
        return;
      }

      showToast('Usuario o contraseña incorrectos.');
    });
  }

  if (viewPodiumButton) {
    viewPodiumButton.addEventListener('click', () => {
      const podiumSection = document.getElementById('podiumPanel');
      podiumSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchTerm = event.target.value;
      renderParticipants(getParticipants());
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (event) => {
      currentSort = event.target.value;
      renderParticipants(getParticipants());
    });
  }

  if (awardPointsButton) {
    awardPointsButton.addEventListener('click', () => openPointsModal());
  }

  if (closePointsModal) {
    closePointsModal.addEventListener('click', () => {
      if (pointsModal) pointsModal.classList.add('hidden');
    });
  }

  if (pointsForm) {
    const quickAmountButtons = pointsForm.querySelectorAll('.chip-btn');
    quickAmountButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (pointsAmountInput) pointsAmountInput.value = btn.dataset.amount;
        quickAmountButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    pointsForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!isAdmin) {
        showToast('Solo la administradora puede otorgar puntos.');
        return;
      }

      const participantId = pointsParticipantSelect.value;
      const reason = pointsReasonSelect.value;
      const amount = Number(pointsAmountInput.value) || 0;

      if (amount <= 0) {
        showToast('Ingresa una cantidad de puntos válida.');
        return;
      }

      const participants = getParticipants();
      const participant = participants.find((p) => p.id === participantId);
      if (!participant) return;

      participant.totalPoints += amount;
      participant.monthlyPoints += amount;
      setParticipants(participants);
      refreshUI();
      showToast(`+${amount} Data Coins para ${participant.name} · ${reason}`);
      if (pointsModal) pointsModal.classList.add('hidden');
      pointsForm.reset();
      quickAmountButtons.forEach((b) => b.classList.remove('active'));
    });
  }
}

function initialize() {
  if (!localStorage.getItem(STORAGE_KEYS.participants)) {
    saveStorage(STORAGE_KEYS.participants, demoParticipants);
  }

  initializeAuth();
  mountIcons();
  renderDataCoinFeatures();
  renderTiersLegend();
  refreshUI();
  mountEvents();
  initScrollReveal();
}

initialize();
