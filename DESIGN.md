# DESIGN.md — Neuromind Solutions Design System (Vintage 90s Hardware Terminal)

## 1. Aesthetic Direction & Brand Essence
* **Concept**: **Vintage 90s Hardware Terminal & Industrial Shop Craft**
* **Inspiration**: Tactile retro electronics, classic computer chassis (Beige `#f7f4ed`), deep terminal casing green (`#0f382c`), warm amber CRT indicators (`#d97706`), mechanical push-button interfaces, and physical shop invoice stamps.
* **Core Difference**: Eliminates generic dark gradients and cartoon yellow neo-brutalism in favor of an authentic, tactile physical hardware feel that resonates deeply with real-world shop owners, wholesalers, and businesses.

---

## 2. Color Palette & Design Tokens

```css
:root {
  /* Canvas & Chassis Paper */
  --bg-canvas: #f6f3eb;         /* Vintage Beige Chassis Paper */
  --bg-paper: #ece7da;          /* Tactile Cardboard Surface */
  --bg-card: #ffffff;           /* Crisp Paper Cards */
  --bg-dark: #0f382c;           /* Deep Forest Terminal Green */
  
  /* Ink & Text */
  --ink: #18231c;               /* Deep Dark Forest Charcoal Ink */
  --ink-muted: #4a5d52;         /* Muted Hardware Gray-Green */
  --ink-faint: #7d9085;         /* Subtle Technical Notes */
  --cream-text: #f6f3eb;        /* Light Text on Dark Surfaces */

  /* Retro Accents */
  --amber: #d97706;             /* Amber CRT Indicator */
  --amber-light: #fef3c7;       /* Amber Highlight Background */
  --forest-green: #0f382c;      /* Primary Hardware Green */
  --forest-light: #d1fae5;      /* Mint Green Badge Surface */
  --terracotta: #c2410c;        /* Retro Hardware Stamp / CTA */
  --led-green: #10b981;         /* Terminal Active LED */

  /* Tactile Borders & Hard Drop Shadows */
  --border-thick: 2.5px solid var(--ink);
  --border-thin: 1.5px solid var(--ink);
  --border-dashed: 2px dashed var(--ink);
  --shadow-sm: 3px 3px 0px var(--ink);
  --shadow-md: 5px 5px 0px var(--ink);
  --shadow-lg: 8px 8px 0px var(--ink);
  --shadow-amber: 4px 4px 0px var(--amber);
  --shadow-forest: 4px 4px 0px var(--forest-green);

  /* Geometry & Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 9999px;
}
```

---

## 3. Component Craft & Micro-Interactions
* **Stamps & Seals**: Circular vintage shop stamps with rotating technical coordinates and dashed border badges.
* **Tactile Buttons**: Hard solid offset drop-shadows with mechanical depression on `:active` (`translate(2px, 2px)`).
* **Live Terminal**: Styled like a classic 90s hardware POS terminal with monospace data grids and authentic thermal receipts.
* **Cards**: Heavy 2.5px ink outlines with crisp offset shadows, avoiding blurry glows or AI slop gradients.
