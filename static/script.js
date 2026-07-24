const demoParticipants = [
  {
    id: 'participant-1',
    name: 'Jhonatan Méndez Céspedes',
    cargo: 'Líder de calidad',
    photo: 'assets/team/07-jhonatan-mendez.jpg',
    totalPoints: 920,
    badges: ['Calidad', 'Liderazgo'],
  },
  {
    id: 'participant-2',
    name: 'Liliana Pantoja',
    cargo: 'Gerente Gobierno de Datos',
    photo: 'assets/team/11-liliana-pantoja.jpg',
    totalPoints: 860,
    badges: ['Gobierno de Datos', 'Visión estratégica'],
  },
  {
    id: 'participant-3',
    name: 'Julián Duarte Sánchez',
    cargo: 'Arquitecto de Datos',
    photo: 'assets/team/09-julian-duarte.png',
    totalPoints: 780,
    badges: ['Arquitectura', 'Innovación'],
  },
  {
    id: 'participant-4',
    name: 'Laura Andrea Quinchia Espinosa',
    cargo: 'Product Owner',
    photo: 'assets/team/08-laura-quinchia.png',
    totalPoints: 705,
    badges: ['Producto', 'Priorización'],
  },
  {
    id: 'participant-5',
    name: 'José Joaquín Cacao Chub',
    cargo: 'Ingeniero de Datos',
    photo: 'assets/team/10-jose-cacao.jpg',
    totalPoints: 640,
    badges: ['Ingeniería', 'Automatización'],
  },
  {
    id: 'participant-6',
    name: 'Maria Camila Vélez Gómez',
    cargo: 'Experto gestión del cambio',
    photo: 'assets/team/01-maria-camila-velez.jpg',
    totalPoints: 520,
    badges: ['Gestión del cambio', 'Comunicación'],
  },
  {
    id: 'participant-7',
    name: 'Fabio Andres Triana Rodriguez',
    cargo: 'Experto en analítica de datos',
    photo: 'assets/team/02-fabio-triana.jpg',
    totalPoints: 480,
    badges: ['Analítica', 'Insight'],
  },
  {
    id: 'participant-8',
    name: 'Juan David Manosalva Duarte',
    cargo: 'Experto en analítica de datos',
    photo: 'assets/team/04-juan-david-manosalva.png',
    totalPoints: 455,
    badges: ['Analítica', 'Precisión'],
  },
  {
    id: 'participant-9',
    name: 'Gladis Cecilia Martínez Tobón',
    cargo: 'Líder de procesos',
    photo: 'assets/team/03-gladis-martinez.png',
    totalPoints: 470,
    badges: ['Procesos', 'Consistencia'],
  },
  {
    id: 'participant-10',
    name: 'Sara Yulitza Torres Díaz',
    cargo: 'Documentador',
    photo: 'assets/team/06-sara-torres.png',
    totalPoints: 330,
    badges: ['Documentación', 'Detalle'],
  },
  {
    id: 'participant-11',
    name: 'Jesus Santiago Ardila Orozco',
    cargo: 'Documentador',
    photo: 'assets/team/05-jesus-santiago-ardila.png',
    totalPoints: 270,
    badges: ['Documentación', 'Apoyo'],
  },
];

// Historial de puntos por mes: cada mes arranca en cero, el podio se calcula a partir de estos registros.
const demoHistory = [
  // Julio 2026
  { id: 'seed-2026-07-1', participantId: 'participant-1', participantName: 'Jhonatan Méndez Céspedes', reason: 'Cierre de mes', amount: 248, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-2', participantId: 'participant-2', participantName: 'Liliana Pantoja', reason: 'Cierre de mes', amount: 210, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-3', participantId: 'participant-3', participantName: 'Julián Duarte Sánchez', reason: 'Cierre de mes', amount: 196, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-4', participantId: 'participant-4', participantName: 'Laura Andrea Quinchia Espinosa', reason: 'Cierre de mes', amount: 180, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-5', participantId: 'participant-5', participantName: 'José Joaquín Cacao Chub', reason: 'Cierre de mes', amount: 172, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-6', participantId: 'participant-6', participantName: 'Maria Camila Vélez Gómez', reason: 'Cierre de mes', amount: 132, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-7', participantId: 'participant-7', participantName: 'Fabio Andres Triana Rodriguez', reason: 'Cierre de mes', amount: 120, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-8', participantId: 'participant-8', participantName: 'Juan David Manosalva Duarte', reason: 'Cierre de mes', amount: 102, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-9', participantId: 'participant-9', participantName: 'Gladis Cecilia Martínez Tobón', reason: 'Cierre de mes', amount: 88, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-10', participantId: 'participant-10', participantName: 'Sara Yulitza Torres Díaz', reason: 'Cierre de mes', amount: 68, date: '2026-07-02T13:00:00.000Z' },
  { id: 'seed-2026-07-11', participantId: 'participant-11', participantName: 'Jesus Santiago Ardila Orozco', reason: 'Cierre de mes', amount: 58, date: '2026-07-02T13:00:00.000Z' },

  // Junio 2026 (otro mes, otros protagonistas)
  { id: 'seed-2026-06-1', participantId: 'participant-9', participantName: 'Gladis Cecilia Martínez Tobón', reason: 'Cierre de mes', amount: 230, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-2', participantId: 'participant-5', participantName: 'José Joaquín Cacao Chub', reason: 'Cierre de mes', amount: 205, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-3', participantId: 'participant-1', participantName: 'Jhonatan Méndez Céspedes', reason: 'Cierre de mes', amount: 190, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-4', participantId: 'participant-7', participantName: 'Fabio Andres Triana Rodriguez', reason: 'Cierre de mes', amount: 150, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-5', participantId: 'participant-3', participantName: 'Julián Duarte Sánchez', reason: 'Cierre de mes', amount: 140, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-6', participantId: 'participant-2', participantName: 'Liliana Pantoja', reason: 'Cierre de mes', amount: 120, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-7', participantId: 'participant-10', participantName: 'Sara Yulitza Torres Díaz', reason: 'Cierre de mes', amount: 95, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-8', participantId: 'participant-4', participantName: 'Laura Andrea Quinchia Espinosa', reason: 'Cierre de mes', amount: 80, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-9', participantId: 'participant-6', participantName: 'Maria Camila Vélez Gómez', reason: 'Cierre de mes', amount: 60, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-10', participantId: 'participant-8', participantName: 'Juan David Manosalva Duarte', reason: 'Cierre de mes', amount: 40, date: '2026-06-15T13:00:00.000Z' },
  { id: 'seed-2026-06-11', participantId: 'participant-11', participantName: 'Jesus Santiago Ardila Orozco', reason: 'Cierre de mes', amount: 20, date: '2026-06-15T13:00:00.000Z' },

  // Mayo 2026 (un mes distinto, con otra ganadora)
  { id: 'seed-2026-05-1', participantId: 'participant-2', participantName: 'Liliana Pantoja', reason: 'Cierre de mes', amount: 175, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-2', participantId: 'participant-8', participantName: 'Juan David Manosalva Duarte', reason: 'Cierre de mes', amount: 160, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-3', participantId: 'participant-4', participantName: 'Laura Andrea Quinchia Espinosa', reason: 'Cierre de mes', amount: 150, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-4', participantId: 'participant-9', participantName: 'Gladis Cecilia Martínez Tobón', reason: 'Cierre de mes', amount: 130, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-5', participantId: 'participant-1', participantName: 'Jhonatan Méndez Céspedes', reason: 'Cierre de mes', amount: 110, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-6', participantId: 'participant-11', participantName: 'Jesus Santiago Ardila Orozco', reason: 'Cierre de mes', amount: 100, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-7', participantId: 'participant-6', participantName: 'Maria Camila Vélez Gómez', reason: 'Cierre de mes', amount: 90, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-8', participantId: 'participant-3', participantName: 'Julián Duarte Sánchez', reason: 'Cierre de mes', amount: 75, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-9', participantId: 'participant-5', participantName: 'José Joaquín Cacao Chub', reason: 'Cierre de mes', amount: 60, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-10', participantId: 'participant-7', participantName: 'Fabio Andres Triana Rodriguez', reason: 'Cierre de mes', amount: 45, date: '2026-05-10T13:00:00.000Z' },
  { id: 'seed-2026-05-11', participantId: 'participant-10', participantName: 'Sara Yulitza Torres Díaz', reason: 'Cierre de mes', amount: 30, date: '2026-05-10T13:00:00.000Z' },
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
    title: 'Todos ven lo que aportas',
    label: 'Reconocimiento',
    description: 'Sin peros ni "ya lo vi por ahí": cada acción queda registrada y visible para todo el equipo.',
    icon: 'star',
    accent: 'teal',
  },
  {
    title: 'Se puede contar (literal)',
    label: 'Motivación',
    description: 'Lo que antes era un "buen trabajo" de pasillo, ahora suma monedas que puedes ver crecer.',
    icon: 'zap',
    accent: 'purple',
  },
  {
    title: 'Menos ruido, más foco',
    label: 'Alineación',
    description: 'El podio y los niveles empujan al equipo hacia lo que de verdad mueve al Gobierno de Datos.',
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
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><path d="M12 8v8M9.3 10h5.4"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  legendGlyph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-6 9-7 14 2-1.4 4.5-2 7-2s5 .6 7 2c-1-5-4-10-7-14z"/><path d="M5 17c2-1.4 4.5-2 7-2s5 .6 7 2"/><circle cx="12" cy="4.2" r="1" fill="currentColor" stroke="none"/></svg>',
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
  history: 'gba-static-history-v1',
};

let isAdmin = false;
let currentFilter = 'all';
let currentSort = 'points';
let searchTerm = '';
let editingHistoryId = null;
let selectedMonth = null;

const publicView = document.getElementById('publicView');
const adminView = document.getElementById('adminView');

const participantGrid = document.getElementById('participantsGrid');
const podiumGrid = document.getElementById('podiumGrid');
const tiersGrid = document.getElementById('tiersGrid');
const filterChips = document.getElementById('filterChips');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const monthSelect = document.getElementById('monthSelect');

const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const viewPodiumButton = document.getElementById('viewPodium');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');
const modeBadge = document.getElementById('modeBadge');

const adminAwardButton = document.getElementById('adminAwardButton');
const logoutButton = document.getElementById('logoutButton');
const historyTableBody = document.getElementById('historyTableBody');
const historyEmptyState = document.getElementById('historyEmptyState');
const historyCountBadge = document.getElementById('historyCountBadge');

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

function clearCurrentUser() {
  localStorage.removeItem(STORAGE_KEYS.user);
}

function getHistory() {
  return getStorage(STORAGE_KEYS.history, []);
}

function setHistory(history) {
  saveStorage(STORAGE_KEYS.history, history);
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

function formatDateTime(iso) {
  const date = new Date(iso);
  const datePart = date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  const timePart = date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
  return `${datePart}, ${timePart}`;
}

// --- Puntos por mes: cada mes empieza en cero, el podio se calcula desde el historial ---
function getMonthKey(iso) {
  const date = new Date(iso);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getCurrentMonthKey() {
  return getMonthKey(new Date().toISOString());
}

function formatMonthLabel(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  const date = new Date(year, month - 1, 1);
  const label = date.toLocaleDateString('es-CO', { month: 'long', year: 'numeric' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function getAvailableMonths() {
  const months = new Set(getHistory().map((entry) => getMonthKey(entry.date)));
  months.add(getCurrentMonthKey());
  return Array.from(months).sort().reverse();
}

function getMonthlyPointsMap(monthKey) {
  const map = {};
  getHistory().forEach((entry) => {
    if (getMonthKey(entry.date) === monthKey) {
      map[entry.participantId] = (map[entry.participantId] || 0) + entry.amount;
    }
  });
  return map;
}

function getMonthlyPoints(participantId, monthKey) {
  return getMonthlyPointsMap(monthKey)[participantId] || 0;
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
        <article class="tier-card" style="--tier-gradient:${tier.gradient}; --tier-color:${tier.color}">
          <span class="tier-level">${index + 1}/${tiers.length}</span>
          <span class="tier-icon">${ICONS[tier.iconKey]}</span>
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

function applyFiltersAndSort(participants, monthKey) {
  let result = participants.slice();
  const monthMap = getMonthlyPointsMap(monthKey);

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
    result.sort((a, b) => (monthMap[b.id] || 0) - (monthMap[a.id] || 0));
  } else if (currentSort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'cargo') {
    result.sort((a, b) => a.cargo.localeCompare(b.cargo));
  }

  return result;
}

function renderParticipants(participants, monthKey) {
  if (!participantGrid) return;
  const filtered = applyFiltersAndSort(participants, monthKey);
  const monthMap = getMonthlyPointsMap(monthKey);
  const monthLabel = formatMonthLabel(monthKey);
  participantGrid.innerHTML = '';

  if (emptyState) {
    emptyState.classList.toggle('hidden', filtered.length > 0);
  }

  filtered.forEach((participant) => {
    const card = document.createElement('article');
    card.className = 'participant-card';

    const photo = participant.photo || defaultAvatar;
    const monthPoints = monthMap[participant.id] || 0;
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
        <div class="points"><span class="points-value" data-count-to="${monthPoints}">0</span> <span class="points-suffix">en ${monthLabel}</span></div>
        <p class="small-text lifetime-total">${participant.totalPoints} Data Coins acumulados en total</p>
        ${tierBadgeHTML(getTier(participant.totalPoints).tier)}
        ${tierProgressHTML(participant.totalPoints)}
        <div class="badges-row">${badges}</div>
      </div>
    `;

    participantGrid.appendChild(card);
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

function renderPodium(participants, monthKey) {
  if (!podiumGrid) return;
  podiumGrid.innerHTML = '';
  const monthMap = getMonthlyPointsMap(monthKey);
  const sorted = participants
    .map((p) => ({ ...p, monthPoints: monthMap[p.id] || 0 }))
    .sort((a, b) => b.monthPoints - a.monthPoints);
  const podium = sorted.slice(0, 3);
  const hasPoints = podium.some((p) => p.monthPoints > 0);

  if (!hasPoints) {
    podiumGrid.innerHTML = '<p class="podium-empty">Este mes apenas comienza. ¡Sé el primero en ganar Data Coins!</p>';
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
      <p class="podium-points"><span class="points-value" data-count-to="${participant.monthPoints}">0</span> pts</p>
      <div class="podium-step step-${placeNumber}">${placeNumber}</div>
    `;
    podiumGrid.appendChild(place);
  });

  animateCardEntrance(podiumGrid.querySelectorAll('.podium-place'), { y: 40, scale: 0.85 });
  animateCounters(podiumGrid.querySelectorAll('.points-value'));
}

function renderMonthOptions() {
  if (!monthSelect) return;
  const months = getAvailableMonths();
  if (!selectedMonth || !months.includes(selectedMonth)) {
    selectedMonth = months[0];
  }
  monthSelect.innerHTML = months
    .map((monthKey) => `<option value="${monthKey}" ${monthKey === selectedMonth ? 'selected' : ''}>${formatMonthLabel(monthKey)}</option>`)
    .join('');
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
    '.legend-card',
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
  renderMonthOptions();
  const participants = getParticipants();
  renderParticipants(participants, selectedMonth);
  renderPodium(participants, selectedMonth);
}

function applyAuthView() {
  if (publicView) publicView.classList.toggle('hidden', isAdmin);
  if (adminView) adminView.classList.toggle('hidden', !isAdmin);
}

function initializeAuth() {
  const currentUser = getCurrentUser();
  isAdmin = Boolean(currentUser && currentUser.username === 'admin');
  applyAuthView();
}

function enterAdminMode() {
  saveCurrentUser({ username: 'admin', role: 'admin' });
  isAdmin = true;
  applyAuthView();
  renderHistoryTable();
  showToast('Administradora conectada.');
}

function exitAdminMode() {
  clearCurrentUser();
  isAdmin = false;
  editingHistoryId = null;
  applyAuthView();
  refreshUI();
  showToast('Sesión cerrada.');
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

function renderHistoryTable() {
  if (!historyTableBody) return;
  const history = getHistory().slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  if (historyCountBadge) {
    historyCountBadge.textContent = `${history.length} registro${history.length === 1 ? '' : 's'}`;
  }

  if (historyEmptyState) {
    historyEmptyState.classList.toggle('hidden', history.length > 0);
  }

  historyTableBody.innerHTML = history
    .map((entry) => {
      const isEditing = entry.id === editingHistoryId;
      const pointsCell = isEditing
        ? `<input type="number" class="history-edit-input" id="historyEditInput" value="${entry.amount}" min="1" max="500" />`
        : `<span class="history-points">+${entry.amount}</span>`;
      const actionsCell = isEditing
        ? `
          <button type="button" class="icon-btn" data-save="${entry.id}" title="Guardar">${ICONS.check}</button>
          <button type="button" class="icon-btn" data-cancel="${entry.id}" title="Cancelar">${ICONS.x}</button>
        `
        : `
          <button type="button" class="icon-btn" data-edit="${entry.id}" title="Editar puntos">${ICONS.pencil}</button>
          <button type="button" class="icon-btn icon-btn-danger" data-delete="${entry.id}" title="Eliminar aporte">${ICONS.trash}</button>
        `;

      return `
        <tr data-row="${entry.id}">
          <td>${formatDateTime(entry.date)}</td>
          <td>${escapeHtml(entry.participantName)}</td>
          <td>${escapeHtml(entry.reason)}</td>
          <td>${pointsCell}</td>
          <td class="history-actions">${actionsCell}</td>
        </tr>
      `;
    })
    .join('');

  historyTableBody.querySelectorAll('[data-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      editingHistoryId = btn.dataset.edit;
      renderHistoryTable();
      const input = document.getElementById('historyEditInput');
      if (input) input.focus();
    });
  });

  historyTableBody.querySelectorAll('[data-cancel]').forEach((btn) => {
    btn.addEventListener('click', () => {
      editingHistoryId = null;
      renderHistoryTable();
    });
  });

  historyTableBody.querySelectorAll('[data-save]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.save;
      const input = document.getElementById('historyEditInput');
      const newAmount = Number(input?.value) || 0;
      if (newAmount <= 0) {
        showToast('Ingresa una cantidad de puntos válida.');
        return;
      }
      saveHistoryEdit(id, newAmount);
    });
  });

  historyTableBody.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteHistoryEntry(btn.dataset.delete);
    });
  });
}

function saveHistoryEdit(id, newAmount) {
  const history = getHistory();
  const entry = history.find((h) => h.id === id);
  if (!entry) return;

  const diff = newAmount - entry.amount;
  const participants = getParticipants();
  const participant = participants.find((p) => p.id === entry.participantId);
  if (participant) {
    participant.totalPoints = Math.max(0, participant.totalPoints + diff);
    setParticipants(participants);
  }

  entry.amount = newAmount;
  setHistory(history);
  editingHistoryId = null;
  renderHistoryTable();
  refreshUI();
  showToast('Puntos actualizados.');
}

function deleteHistoryEntry(id) {
  const history = getHistory();
  const entry = history.find((h) => h.id === id);
  if (!entry) return;

  const confirmed = window.confirm(`¿Eliminar el aporte de ${entry.amount} puntos a ${entry.participantName}?`);
  if (!confirmed) return;

  const participants = getParticipants();
  const participant = participants.find((p) => p.id === entry.participantId);
  if (participant) {
    participant.totalPoints = Math.max(0, participant.totalPoints - entry.amount);
    setParticipants(participants);
  }

  setHistory(history.filter((h) => h.id !== id));
  renderHistoryTable();
  refreshUI();
  showToast('Aporte eliminado.');
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
        enterAdminMode();
        if (loginModal) loginModal.classList.add('hidden');
        loginForm.reset();
        return;
      }

      showToast('Usuario o contraseña incorrectos.');
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      exitAdminMode();
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
      renderParticipants(getParticipants(), selectedMonth);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (event) => {
      currentSort = event.target.value;
      renderParticipants(getParticipants(), selectedMonth);
    });
  }

  if (monthSelect) {
    monthSelect.addEventListener('change', (event) => {
      selectedMonth = event.target.value;
      const participants = getParticipants();
      renderParticipants(participants, selectedMonth);
      renderPodium(participants, selectedMonth);
    });
  }

  if (adminAwardButton) {
    adminAwardButton.addEventListener('click', () => openPointsModal());
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
      setParticipants(participants);

      const history = getHistory();
      history.push({
        id: `hist-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        participantId: participant.id,
        participantName: participant.name,
        reason,
        amount,
        date: new Date().toISOString(),
      });
      setHistory(history);
      renderHistoryTable();

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

  if (!localStorage.getItem(STORAGE_KEYS.history)) {
    saveStorage(STORAGE_KEYS.history, demoHistory);
  }

  selectedMonth = getCurrentMonthKey();

  initializeAuth();
  mountIcons();
  renderDataCoinFeatures();
  renderTiersLegend();
  refreshUI();
  renderHistoryTable();
  mountEvents();
  initScrollReveal();
}

initialize();
