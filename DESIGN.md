# DESIGN.md — Neuromind Solutions Design System

## 1. Brand Identity & Aesthetic Positioning
* **Brand Essence**: High-performance, reliable enterprise and retail technology partner for growing businesses.
* **Aesthetic Direction**: **Deep Tech Neo-Glass** (Linear / Vercel meets modern B2B SaaS).
* **Core Difference from Competitor**: Replaces warm yellow cartoon-style neo-brutalism with a sleek, high-trust, futuristic enterprise dark/light tech aesthetic with subtle neon glow borders, dark obsidian backgrounds (`#0a0e17`), electric indigo/cyan accents, and glassmorphic cards.

---

## 2. Color Palette & Tokens

```css
:root {
  /* Backgrounds */
  --bg-primary: #090d16;        /* Deep Obsidian Navy */
  --bg-secondary: #111827;      /* Dark Slate Card Background */
  --bg-tertiary: #1e293b;       /* Elevated Surface */
  --bg-glass: rgba(17, 24, 39, 0.75);
  
  /* Text & Foreground */
  --text-primary: #f8fafc;      /* Pure Crisp White */
  --text-secondary: #94a3b8;    /* Muted Slate Gray */
  --text-muted: #64748b;        /* Subtle Footnotes */

  /* Accents & Brand Lighting */
  --accent-cyan: #06b6d4;       /* Neon Cyan (Live status, tech highlights) */
  --accent-indigo: #6366f1;     /* Primary Brand Indigo */
  --accent-purple: #a855f7;     /* Secondary Gradient */
  --accent-emerald: #10b981;    /* Success / Positive metrics */
  --accent-amber: #f59e0b;      /* Warning / Special badges */

  /* Borders & Glows */
  --border-subtle: 1px solid rgba(255, 255, 255, 0.08);
  --border-accent: 1px solid rgba(6, 182, 212, 0.35);
  --border-active: 1px solid rgba(99, 102, 241, 0.5);
  --glow-cyan: 0 0 25px rgba(6, 182, 212, 0.25);
  --glow-indigo: 0 0 30px rgba(99, 102, 241, 0.3);
}
```

---

## 3. Typography
* **Display & Headings**: `Plus Jakarta Sans` (Weight: 800, 900) with subtle gradient text clipping.
* **Body & UI**: `Plus Jakarta Sans` (Weight: 400, 500, 600) for readable, crisp paragraphs.
* **Code & Data Badges**: `JetBrains Mono` (Weight: 600, 700) for terminal screens, stats, and badges.

---

## 4. UI Components & Layout Guidelines
* **Navigation**: Glassmorphic floating top navbar with backdrop-filter blur and neon brand logo.
* **Hero Section**: Dual-color headline with animated glowing mesh background, tech pill badges, and sleek gradient CTAs.
* **Service Cards**: Dark glass cards with top-accent lighting, rounded geometry (`border-radius: 18px`), and interactive hover lifting.
* **POS Live Terminal**: Dark developer/operator console with glowing status indicators, real-time calculations, and authentic printable receipts.
* **Work Showcase**: Clean product UI mockups with dark borders and glowing category pills.
* **Process & Proof**: Horizontal timeline with connected gradient lines and authentic client testimonials.
