# MCU Timeline Website — Design Spec
**Date:** 2026-05-15
**Status:** Approved

---

## Overview

A fully responsive static website for the Marvel Cinematic Universe movies timeline. Runs by opening `index.html` directly — no build step, no server, no dependencies beyond Google Fonts and a royalty-free audio CDN. The aesthetic is a Stark Industries holographic dashboard: dark mode, neon glows, glassmorphism, cinematic transitions.

---

## Decisions Log

| Question | Decision |
|---|---|
| Poster images | Real IMDB CDN URLs (`m.media-amazon.com`) + styled CSS fallback |
| JARVIS assistant | Decorative Iron Man HUD UI only — no interaction |
| Default view mode | Release Order |
| Movie coverage | All phases 1–5 + Phase 6 announced titles as "Coming Soon" |
| Infinity Stones nav | Primary functional filter — each stone filters stone-associated movies |
| Soundtrack | Ambient audio toggle FAB (royalty-free loop) |

---

## Architecture

### Approach
Single-file JS data + vanilla DOM (Approach A). No framework, no build tool, no `fetch()`. Open `index.html` and it works.

### File Structure
```
MarvelMovies/
├── index.html       # Structural shell only — no inline styles or logic
├── style.css        # All visuals, keyframes, variables, responsive layout
├── script.js        # Movie data array + all interactivity
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-05-15-mcu-timeline-design.md
```

### `index.html` responsibilities
- Semantic HTML shell
- Links to `style.css` and `script.js`
- Static markup for: loading screen, hero, JARVIS HUD strip, controls bar, Infinity Stones nav, timeline container, modal overlay, audio FAB, particle canvas

### `style.css` responsibilities
- CSS custom properties (color tokens, glow radii, font stacks) at top
- Component styles organized by section
- All `@keyframes` animations
- Media queries at bottom (desktop horizontal → mobile vertical timeline)

### `script.js` responsibilities
Three clearly-commented sections:
1. `// DATA` — movies array
2. `// STATE` — current filter/view state object
3. `// UI` — all DOM functions (render, filter, modal, search, particles, audio)

---

## Data Model

```js
{
  id: "iron-man",
  title: "Iron Man",
  year: 2008,
  phase: 1,
  chronologicalOrder: 6,       // in-universe timeline position
  releaseOrder: 1,
  poster: "https://m.media-amazon.com/images/...",
  posterFallback: "#c0392b",   // phase-tinted CSS color if image fails to load
  imdb: 7.9,
  description: "Billionaire Tony Stark builds a powered armor suit...",
  heroes: ["Iron Man", "Pepper Potts"],
  infinityStone: null,         // null | "mind" | "space" | "reality" | "power" | "time" | "soul"
  comingSoon: false,
  trailerUrl: null,            // YouTube video ID (optional)
  duration: "2h 6m",
  director: "Jon Favreau",
  watchOrderNote: null         // contextual note shown in chronological mode
}
```

**Coverage:** All MCU theatrical releases from Iron Man (2008) through Thunderbolts* (2025) + announced Phase 6 titles (Fantastic Four, Avengers: Doomsday, Avengers: Secret Wars, etc.) as `comingSoon: true`.

**`infinityStone` tagging:** Movies featuring or strongly associated with a stone are tagged. `null` = hidden when a stone filter is active.

**`comingSoon: true` rendering:** Blurred poster, `filter: blur(4px) grayscale(0.8)`, red "CLASSIFIED" stamp overlay, no IMDB rating.

---

## Page Sections & Layout

### 1. Loading Screen
- Full-viewport overlay
- Arc reactor pulse animation from center
- Typewriter text: "INITIALIZING STARK NETWORK..."
- Fades out after ~2.5s

### 2. Hero Section
- Full-height cinematic banner
- Canvas particle field (stars + energy orbs) behind content
- Title: "MARVEL CINEMATIC UNIVERSE" — red-gold gradient, text glow
- Subtitle: "TIMELINE CLASSIFIED // PHASES I–VI"
- Pulsing scroll-down chevron

### 3. JARVIS HUD Strip (sticky)
- Fixed below hero, stays sticky on scroll
- Iron Man HUD aesthetic: scanning sweep line, hex grid texture, arc reactor icon
- Cyan/green readout text: `MOVIES LOADED: 67 // PHASE: ALL // FILTER: NONE`
- Updates dynamically as filters change
- Pure decoration — no click targets

### 4. Controls Bar
- Search input (glowing cyan border on focus, live-filters on `input` event)
- Phase filter pills: ALL / I / II / III / IV / V / VI
- Hero dropdown (populated from unique heroes in data)
- Year range slider
- Release Order / Chronological toggle switch

### 5. Infinity Stones Nav
- 6 gem-shaped buttons in a row
- Canonical colors: Space=blue, Mind=yellow, Reality=red, Power=purple, Time=green, Soul=orange
- Active stone pulses; click filters to stone-tagged movies
- "ALL STONES" resets stone filter
- Hover shows stone name tooltip

### 6. Timeline
- **Desktop (≥1024px):** Horizontal scroll with custom styled scrollbar (power bar aesthetic)
- **Tablet (768–1023px):** 2-column grid, horizontal collapses to vertical
- **Mobile (<768px):** Single column vertical stack
- Phase headers with glowing dividers
- `IntersectionObserver` triggers entrance animations as cards scroll into view

### 7. Movie Cards
- Glassmorphism: `backdrop-filter: blur(12px)`, semi-transparent background
- Poster image with fallback color
- Title, year, phase badge, IMDB rating, hero tags
- Hover: 3D tilt (CSS `perspective + rotateX/rotateY` via JS mousemove), glow border, scale-up
- Click: opens modal

### 8. Movie Modal
- Full-screen dark overlay
- Card expands with cinematic slide-in animation
- Content: large poster, full description, director, duration, heroes list, IMDB rating ring, Stone badge
- Close: `Escape` key or overlay click
- Body scroll locked while open

### 9. Audio FAB
- Bottom-right floating button
- Arc reactor icon
- Toggles ambient cinematic audio loop
- Pulse ring animation when active
- Single `Audio` object, toggled play/pause

---

## Interactivity & State

```js
const state = {
  viewMode: "release",          // "release" | "chronological"
  activePhase: "all",           // "all" | 1 | 2 | 3 | 4 | 5 | 6
  activeStone: null,            // null | "space" | "mind" | "reality" | "power" | "time" | "soul"
  activeHero: "all",
  searchQuery: "",
  activeYear: null,
  modalOpen: null,              // movie id or null
  audioPlaying: false
}
```

- All filters are AND conditions
- `renderTimeline()` is the single render function — any state change calls it
- Search matches title, heroes, director, and description (case-insensitive)
- 3D tilt disabled on touch devices (`navigator.maxTouchPoints > 0`)
- `visibilitychange` pauses particle canvas and audio when tab is hidden

---

## Animation & Visual System

### Color Tokens
```css
--red: #e3000f;
--gold: #f0b132;
--cyan: #00d4ff;
--blue: #1a6fc4;
--purple: #7b2fff;
--dark: #080b12;
--glass: rgba(255,255,255,0.05);
```

### Typography
- `Orbitron` — headings, HUD readouts, phase labels (futuristic all-caps)
- `Rajdhani` — body text, card descriptions, filter labels
- Both from Google Fonts (single CDN request per font)

### Particle System
- Canvas behind all content
- Layer 1: 200 slow-drifting stars (1–3px, white/cyan)
- Layer 2: 8 large blurred energy orbs (sine-wave movement, MCU palette colors)
- `requestAnimationFrame` loop, throttled to 30fps
- Pauses on `visibilitychange`

### Glassmorphism Cards
- `backdrop-filter: blur(12px)`
- `background: var(--glass)`
- `border: 1px solid rgba(255,255,255,0.1)`
- Hover: border → phase neon color, `box-shadow` expands to colored glow

### JARVIS HUD Scanning Line
- `::before` pseudo-element on JARVIS strip
- Sweeps left → right on 3s loop via `transform: translateX()`

### Performance
- All animations use `transform` and `opacity` only (GPU-composited)
- `will-change: transform` on cards
- `prefers-reduced-motion` disables non-essential animations

### Responsive Breakpoints
| Breakpoint | Layout |
|---|---|
| ≥1024px | Horizontal scrolling timeline |
| 768–1023px | 2-column grid, vertical timeline |
| <768px | Single column, all scrolls vertical |

---

## Easter Eggs
- Konami code (↑↑↓↓←→←→BA) triggers a brief "AVENGERS ASSEMBLE" overlay flash
- Clicking the arc reactor in the JARVIS HUD 10 times triggers a "Jarvis is online" animation sequence
- Hovering over Thanos-associated movies (Infinity War, Endgame) makes nearby cards slowly drift apart

---

## GitHub Remote
`https://github.com/AKspace/marvelmovies.git`
