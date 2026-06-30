// Data-driven template system: a handful of layout engines combined with a
// palette set produces the full gallery. Each entry is just configuration,
// rendered by <ResumeDocument />.

export const LAYOUTS = {
  SIDEBAR_LEFT: "sidebar-left",
  SIDEBAR_RIGHT: "sidebar-right",
  HEADER_BAND: "header-band",
  SINGLE: "single",
};

// from/to drive the colored panel gradient. accent is used on light areas,
// accentDark on dark areas (sidebars/bands).
export const PALETTES = {
  ember: { label: "Ember", from: "#ea580c", to: "#9a3412", accent: "#ea580c", accentDark: "#fdba74" },
  graphite: { label: "Graphite", from: "#334155", to: "#0f172a", accent: "#334155", accentDark: "#94a3b8" },
  forest: { label: "Forest", from: "#059669", to: "#064e3b", accent: "#047857", accentDark: "#6ee7b7" },
  indigo: { label: "Indigo", from: "#4f46e5", to: "#312e81", accent: "#4f46e5", accentDark: "#a5b4fc" },
  rose: { label: "Rose", from: "#e11d48", to: "#881337", accent: "#e11d48", accentDark: "#fda4af" },
  teal: { label: "Teal", from: "#0d9488", to: "#134e4a", accent: "#0d9488", accentDark: "#5eead4" },
  burgundy: { label: "Burgundy", from: "#9f1239", to: "#4c0519", accent: "#9f1239", accentDark: "#fb7185" },
  navy: { label: "Navy", from: "#1d4ed8", to: "#1e3a8a", accent: "#1d4ed8", accentDark: "#93c5fd" },
  plum: { label: "Plum", from: "#7c3aed", to: "#4c1d95", accent: "#7c3aed", accentDark: "#c4b5fd" },
  charcoal: { label: "Charcoal", from: "#292524", to: "#0c0a09", accent: "#292524", accentDark: "#d6d3d1" },
};

const { SIDEBAR_LEFT, SIDEBAR_RIGHT, HEADER_BAND, SINGLE } = LAYOUTS;

export const TEMPLATES = [
  { id: "ember-classic", name: "Ember Classic", layout: SIDEBAR_LEFT, palette: "ember" },
  { id: "ember-banner", name: "Ember Banner", layout: HEADER_BAND, palette: "ember" },
  { id: "graphite-pro", name: "Graphite Pro", layout: SIDEBAR_RIGHT, palette: "graphite" },
  { id: "graphite-clean", name: "Graphite Clean", layout: SINGLE, palette: "graphite" },
  { id: "forest-classic", name: "Forest Classic", layout: SIDEBAR_LEFT, palette: "forest" },
  { id: "forest-banner", name: "Forest Banner", layout: HEADER_BAND, palette: "forest" },
  { id: "indigo-pro", name: "Indigo Pro", layout: SIDEBAR_RIGHT, palette: "indigo" },
  { id: "indigo-clean", name: "Indigo Clean", layout: SINGLE, palette: "indigo" },
  { id: "rose-classic", name: "Rose Classic", layout: SIDEBAR_LEFT, palette: "rose" },
  { id: "rose-banner", name: "Rose Banner", layout: HEADER_BAND, palette: "rose" },
  { id: "teal-pro", name: "Teal Pro", layout: SIDEBAR_RIGHT, palette: "teal" },
  { id: "teal-clean", name: "Teal Clean", layout: SINGLE, palette: "teal" },
  { id: "burgundy-classic", name: "Burgundy Classic", layout: SIDEBAR_LEFT, palette: "burgundy" },
  { id: "navy-banner", name: "Navy Banner", layout: HEADER_BAND, palette: "navy" },
  { id: "navy-pro", name: "Navy Pro", layout: SIDEBAR_RIGHT, palette: "navy" },
  { id: "plum-clean", name: "Plum Clean", layout: SINGLE, palette: "plum" },
  { id: "amber-classic", name: "Amber Classic", layout: SIDEBAR_LEFT, palette: "ember" },
  { id: "charcoal-banner", name: "Charcoal Banner", layout: HEADER_BAND, palette: "charcoal" },
  { id: "charcoal-clean", name: "Charcoal Clean", layout: SINGLE, palette: "charcoal" },
  { id: "plum-classic", name: "Plum Classic", layout: SIDEBAR_LEFT, palette: "plum" },
];

export const DEFAULT_TEMPLATE_ID = TEMPLATES[0].id;

export const getTemplate = (id) =>
  TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];

export const layoutLabel = (layout) =>
  ({
    [SIDEBAR_LEFT]: "Sidebar",
    [SIDEBAR_RIGHT]: "Sidebar",
    [HEADER_BAND]: "Banner",
    [SINGLE]: "Single column",
  }[layout] || "");
