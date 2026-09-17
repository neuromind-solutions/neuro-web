# Neuromind Solutions — Component Extraction & Reproduction Package

> **Generated for AI Agent Code Generation & Reproduction**  
> Contains complete instructions, design systems, HTML, CSS, JavaScript, and prompt templates to build an exact 1:1 replica of the **Navbar**, **Services Section (with 3 interactive detail pop-ups)**, and **Footer**.

---

## Table of Contents
1. [Master Prompt for Target AI Agent](#1-master-prompt-for-target-ai-agent)
2. [Design System & Aesthetic Guidelines](#2-design-system--aesthetic-guidelines)
3. [Complete Single-File Standalone HTML Demo](#3-complete-single-file-standalone-html-demo)
4. [Modular Codebase](#4-modular-codebase)
   - [4.1 Semantic HTML Structure](#41-semantic-html-structure)
   - [4.2 Production CSS Stylesheet](#42-production-css-stylesheet)
   - [4.3 Interactive JavaScript Logic](#43-interactive-javascript-logic)
5. [Quality Assurance & Verification Rubric](#5-quality-assurance--verification-rubric)

---

## 1. Master Prompt for Target AI Agent

*Copy and paste the prompt below directly into Claude, ChatGPT, Cursor, Copilot, or any other coding assistant to recreate these sections:*

```text
You are an expert Senior Frontend Engineer and UI/UX Designer.
Your task is to build an exact, pixel-perfect replica of three key components from Neuromind Solutions' website:

1. THE TOP FLOATING PILL NAVBAR:
   - Centered floating pill with frosted glass blur (backdrop-filter: blur(16px)) and subtle border.
   - Brand logo with slowly rotating amber asterisk SVG and Cabinet Grotesk / bold sans typography.
   - Desktop navigation links with micro-caret indicators (Services, Capabilities, Work, Pricing, Reviews, Process).
   - Direct support region pill ("🌐 IN ▾").
   - Tactile primary CTA pill button ("Start a Project ›") with hover translation and glow.
   - Top scroll progress bar pinned to the screen top that scales from 0% to 100% as the page scrolls.
   - Responsive mobile hamburger button and slide-down drawer menu.
   - Dynamic scroll listener adding '.is-scrolled' after 24px of scroll with increased opacity and deeper elevation.

2. CORE SERVICES SECTION ("WHAT WE BUILD"):
   - Section header with monospace amber badge ("FULL-CYCLE SOFTWARE STUDIO") and bold display headline.
   - 3-column responsive grid featuring tactile service cards:
     * Card 01: "CUSTOM SOFTWARE & ERPs" — Amber highlight theme, CRT terminal vintage SVG badge.
     * Card 02: "MOBILE APPS & WEB PLATFORMS" — Tactile paper cardboard theme, smartphone vintage SVG badge.
     * Card 03: "AI & WHATSAPP AUTOMATION" — Deep forest emerald terminal theme, retro robot bot SVG badge.
   - Each card features tactile 2.5px solid dark ink borders, 5px hard drop-shadows, monospace category pill, and an interactive "TAP TO EXPLORE →" button that lifts on card hover.

3. INTERACTIVE SERVICE DETAIL MODALS (POP-UPS):
   - Clicking ANY service card or its "TAP TO EXPLORE" button (or pressing Enter/Space) opens its dedicated full-detail slide-up modal overlay:
     * Modal 01 (Yellow/Amber theme): AgriBill, PharmaTrack, TextileFlow project entries.
     * Modal 02 (Paper theme): AgroCommerce, BizPortal, ServiceHub project entries.
     * Modal 03 (Dark Emerald theme): OrderBot, LedgerNudge, LeadFlow project entries.
   - Accessible keyboard traps: Escape closes active modal; auto-focuses close button upon opening; lock background scroll (`overflow: hidden`).
   - Clicking the backdrop scrim or "✕" button closes the modal.
   - WCAG AA high-contrast compliance for Modal 03 (cream text #f0ece0 on deep emerald #1c3a2e with glowing amber headings).

4. WARM RETRO HARDWARE STUDIO FOOTER:
   - Hardware top gradient stripe (forest green to amber to terracotta).
   - 4-column responsive grid:
     * Col 1: Engineering brand, tagline, live LED system status pill ("SYSTEM ONLINE • PUNE, MH"), and a custom pixel-perfect SVG vector Indian Flag badge.
     * Col 2: Direct contact cards for WhatsApp (+91 96891 59776), Email (neuromind311@gmail.com), and Instagram (@neuromindsolutions.in) with tactile hover lift.
     * Col 3: Solutions links with custom vintage lineal SVG icons.
     * Col 4: Site navigation links with custom vintage lineal SVG icons.
   - Bottom copyright bar with tactile hardware badges ("⚡ BUILT WITH SPEED & RIGOR", "🌾 AGRIBILL V1.0 OFFLINE READY", "MADE IN INDIA").

Strict Constraints:
- Use semantic HTML5, pure Vanilla CSS, and clean Vanilla JavaScript with ZERO external framework dependencies.
- Load Google Fonts 'Plus Jakarta Sans' and 'JetBrains Mono', plus 'Cabinet Grotesk'.
- Match all color tokens, borders, hard drop-shadows, and micro-animations exactly as provided in the specification.
```

---

## 2. Design System & Aesthetic Guidelines

### Typography
- **Headings & Display**: `'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif` (weight: 800/900, tracking: -0.03em)
- **Body & Controls**: `'Plus Jakarta Sans', sans-serif` (weight: 500/600/700)
- **Code, Numbers & Badges**: `'JetBrains Mono', monospace` (weight: 700/800, uppercase, tracking: 0.08em - 0.12em)

### Color Palette (CSS Variables)
```css
:root {
  /* Canvas & Paper Surfaces */
  --bg-canvas: #f6f3eb;         /* Vintage Beige Chassis Paper */
  --bg-paper: #ede8dc;          /* Tactile Cardboard Surface */
  --bg-card: #ffffff;           /* Crisp Paper Card Background */
  --bg-dark: #0f382c;           /* Deep Forest Terminal Green */

  /* Inks */
  --ink: #18231c;               /* Deep Dark Forest Charcoal Ink */
  --ink-muted: #4a5d52;         /* Muted Hardware Gray-Green */
  --ink-faint: #7d9085;         /* Subtle Technical Notes */
  --cream-text: #f6f3eb;        /* Light Text on Dark Surfaces */

  /* Retro Hardware Accents */
  --amber: #d97706;             /* Amber CRT Indicator */
  --amber-light: #fef3c7;       /* Amber Highlight Surface */
  --amber-dark: #b45309;        /* Deep Amber */
  --forest-green: #0f382c;      /* Primary Hardware Green */
  --forest-light: #d1fae5;      /* Mint Green Badge Surface */
  --terracotta: #c2410c;        /* Retro Hardware Stamp / Accent Orange */
  --led-green: #10b981;         /* Terminal Active LED */

  /* Tactile Borders & Hard Drop Shadows */
  --border-thick: 2.5px solid var(--ink);
  --border-thin: 1.5px solid var(--ink);
  --border-dashed: 2px dashed var(--ink);
  --shadow-sm: 3px 3px 0px var(--ink);
  --shadow-md: 5px 5px 0px var(--ink);
  --shadow-lg: 8px 8px 0px var(--ink);

  /* Geometry */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 9999px;
}
```

---

## 3. Complete Single-File Standalone HTML Demo

*Save this code as `standalone-components.html` and double click to run directly in any browser:*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Neuromind Solutions — Extracted Sections</title>

  <!-- Typography: Plus Jakarta Sans, JetBrains Mono & Cabinet Grotesk -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://api.fontshare.com">
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&display=swap">

  <style>
    :root {
      --bg-canvas: #f6f3eb;
      --bg-paper: #ede8dc;
      --bg-card: #ffffff;
      --bg-dark: #0f382c;
      --ink: #18231c;
      --ink-muted: #4a5d52;
      --ink-faint: #7d9085;
      --cream-text: #f6f3eb;
      --amber: #d97706;
      --amber-light: #fef3c7;
      --amber-dark: #b45309;
      --forest-green: #0f382c;
      --forest-light: #d1fae5;
      --terracotta: #c2410c;
      --led-green: #10b981;
      --border-thick: 2.5px solid var(--ink);
      --border-thin: 1.5px solid var(--ink);
      --border-dashed: 2px dashed var(--ink);
      --shadow-sm: 3px 3px 0px var(--ink);
      --shadow-md: 5px 5px 0px var(--ink);
      --shadow-lg: 8px 8px 0px var(--ink);
      --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-display: 'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 18px;
      --radius-pill: 9999px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body {
      font-family: var(--font-main);
      background-color: var(--bg-canvas);
      color: var(--ink);
      line-height: 1.5;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Subtle dot grid */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image: radial-gradient(rgba(24, 35, 28, 0.08) 1.5px, transparent 1.5px);
      background-size: 24px 24px;
      z-index: -1;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    h1, h2, h3, h4 {
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--ink);
    }
    a { text-decoration: none; color: inherit; }

    /* Tactile Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-family: var(--font-main);
      font-weight: 800;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 0.75rem 1.6rem;
      min-height: 44px;
      border-radius: var(--radius-pill);
      border: var(--border-thick);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
      transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.15s ease;
      user-select: none;
    }
    .btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-md); }
    .btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0px var(--ink); }
    .btn-primary { background-color: var(--forest-green); color: var(--cream-text); }
    .btn-primary:hover { background-color: #0a261e; }
    .btn-yellow { background-color: var(--amber); color: var(--ink); box-shadow: var(--shadow-sm); }
    .btn-yellow:hover { background-color: #b45309; color: #fff; }

    /* ================= NAVBAR ================= */
    .navbar-wrapper {
      position: fixed;
      top: 16px;
      left: 0;
      width: 100%;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      padding: 0 16px;
    }
    .navbar-pill {
      pointer-events: auto;
      width: 100%;
      max-width: 1120px;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(24, 35, 28, 0.08);
      border-radius: 9999px;
      box-shadow: 0 4px 20px -2px rgba(24, 35, 28, 0.06), 0 2px 6px -1px rgba(24, 35, 28, 0.04);
      padding: 8px 10px 8px 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: box-shadow 0.25s ease, background-color 0.25s ease;
    }
    .navbar-wrapper.is-scrolled .navbar-pill {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 10px 30px -4px rgba(24, 35, 28, 0.1), 0 4px 10px -2px rgba(24, 35, 28, 0.06);
    }
    .brand-logo { display: flex; align-items: center; gap: 9px; cursor: pointer; }
    .brand-asterisk {
      color: #e86322;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fp-spin-slow 36s linear infinite;
    }
    @keyframes fp-spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .brand-text {
      font-family: var(--font-display);
      font-size: 1.22rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color: #18231c;
    }
    .nav-links { display: flex; align-items: center; gap: 24px; }
    .nav-item {
      font-size: 14px;
      font-weight: 500;
      color: #2b3630;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 2px;
      transition: color 0.18s ease;
    }
    .nav-caret { font-size: 9px; color: #8c9790; transition: transform 0.2s, color 0.2s; }
    .nav-item:hover { color: #e86322; }
    .nav-item:hover .nav-caret { color: #e86322; transform: translateY(1px); }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .nav-lang-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 7px 12px;
      border-radius: 9999px;
      border: 1px solid rgba(24, 35, 28, 0.12);
      background: rgba(255, 255, 255, 0.6);
      font-size: 12px;
      font-weight: 600;
      color: #3b4640;
      cursor: pointer;
    }
    .nav-lang-pill:hover { background: #fff; border-color: rgba(24, 35, 28, 0.25); }
    .nav-cta-fp {
      background: #e86322;
      color: #ffffff;
      border: none;
      border-radius: 9999px;
      padding: 9px 20px 9px 22px;
      font-family: var(--font-main);
      font-size: 14px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(232, 99, 34, 0.3);
      transition: background-color 0.2s, transform 0.15s, box-shadow 0.2s;
    }
    .nav-cta-fp:hover {
      background: #c2410c;
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(232, 99, 34, 0.38);
    }
    .nav-cta-arrow { font-size: 18px; font-weight: 700; transition: transform 0.2s; }
    .nav-cta-fp:hover .nav-cta-arrow { transform: translateX(2px); }

    .scroll-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: linear-gradient(90deg, #e86322, #d97706);
      transform-origin: 0 50%;
      transform: scaleX(0);
      z-index: 1001;
    }

    .mobile-menu-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 6px;
      flex-direction: column;
      gap: 4px;
    }
    .mobile-menu-toggle span {
      display: block;
      width: 20px;
      height: 2px;
      background: #18231c;
      border-radius: 2px;
    }
    .mobile-nav-drawer {
      display: none;
      pointer-events: auto;
      width: 100%;
      max-width: 1120px;
      margin-top: 8px;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(24, 35, 28, 0.08);
      border-radius: 20px;
      box-shadow: 0 14px 35px rgba(24, 35, 28, 0.12);
      padding: 16px 20px;
      flex-direction: column;
      gap: 8px;
    }
    .mobile-nav-drawer.is-open { display: flex; }
    .mobile-nav-link {
      font-size: 15px;
      font-weight: 600;
      color: #18231c;
      padding: 8px 4px;
      border-bottom: 1px solid rgba(24, 35, 28, 0.05);
    }
    .mobile-nav-link:hover { color: #e86322; }

    @media (max-width: 860px) {
      .nav-links, .nav-lang-pill { display: none; }
      .mobile-menu-toggle { display: flex; }
      .navbar-wrapper { top: 10px; padding: 0 10px; }
      .navbar-pill { padding: 6px 8px 6px 16px; }
      .nav-cta-fp { padding: 8px 16px; font-size: 13px; }
    }

    /* ================= SERVICES ================= */
    .section { padding: 5.5rem 0; }
    @media (max-width: 768px) { .section { padding: 3.5rem 0; } }
    .section-tag {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--amber);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 5vw, 3.2rem);
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 2.2rem;
      letter-spacing: -0.04em;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    .service-card {
      border: var(--border-thick);
      border-radius: var(--radius-lg);
      padding: 2.2rem 1.8rem;
      box-shadow: var(--shadow-md);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--bg-card);
      position: relative;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
    }
    .service-card:hover { transform: translateY(-6px); box-shadow: 8px 8px 0px var(--ink); }
    .card-yellow { background-color: var(--amber-light); }
    .card-paper { background-color: var(--bg-paper); }
    .card-dark { background-color: var(--forest-green); color: var(--cream-text); }
    .card-dark h3 { color: var(--cream-text); }
    .service-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
    .service-num { font-family: var(--font-mono); font-size: 2.4rem; font-weight: 900; color: var(--amber); line-height: 1; }
    .service-vintage-badge {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-sm);
      border: 2px solid var(--ink);
      display: grid;
      place-items: center;
      box-shadow: 2.5px 2.5px 0px var(--ink);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
      flex-shrink: 0;
    }
    .card-yellow .service-vintage-badge { background-color: #fff; color: var(--amber-dark); }
    .card-paper .service-vintage-badge { background-color: #fff; color: #0284c7; }
    .card-dark .service-vintage-badge {
      background-color: rgba(246, 243, 235, 0.12);
      border-color: rgba(246, 243, 235, 0.4);
      color: #34d399;
      box-shadow: 2.5px 2.5px 0px #000;
    }
    .service-card:hover .service-vintage-badge { transform: translateY(-3px) rotate(3deg); box-shadow: 4px 4px 0px var(--ink); }
    .service-vintage-badge svg { width: 24px; height: 24px; display: block; }
    .service-name { font-size: 1.35rem; font-weight: 900; margin: 1rem 0 0.5rem 0; letter-spacing: -0.02em; }
    .service-desc { font-size: 0.95rem; font-weight: 500; opacity: 0.88; margin-bottom: 1.5rem; line-height: 1.5; }
    .service-footer { margin-top: auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
    .service-pill {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.35rem 0.8rem;
      border-radius: var(--radius-pill);
      background-color: rgba(24, 35, 28, 0.08);
      border: 1px solid rgba(24, 35, 28, 0.2);
    }
    .card-dark .service-pill {
      background-color: rgba(246, 243, 235, 0.1);
      border-color: rgba(246, 243, 235, 0.25);
      color: var(--amber);
    }
    .service-tap-btn {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: var(--ink);
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-pill);
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .card-dark .service-tap-btn {
      color: rgba(246, 243, 235, 0.9);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
    }
    .service-card:hover .service-tap-btn {
      background: var(--amber);
      color: var(--ink);
      border-color: var(--ink);
      box-shadow: 2px 2px 0 var(--ink);
      transform: translateY(-2px);
    }

    /* ================= DETAIL MODALS ================= */
    .svc-modal-overlay {
      position: fixed;
      inset: 0;
      z-index: 9000;
      background: rgba(10, 10, 8, 0.72);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    .svc-modal-overlay.is-open { opacity: 1; visibility: visible; }
    .svc-modal {
      position: relative;
      width: 100%;
      max-width: 640px;
      max-height: 88vh;
      overflow-y: auto;
      border: var(--border-thick);
      border-radius: var(--radius-lg);
      padding: 2rem 2rem 1.5rem;
      box-shadow: 8px 8px 0 var(--ink);
      transform: translateY(32px) scale(0.97);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
      opacity: 0;
      scrollbar-width: thin;
      scrollbar-color: var(--ink) transparent;
    }
    .svc-modal-overlay.is-open .svc-modal { transform: translateY(0) scale(1); opacity: 1; }
    .svc-modal[data-theme="yellow"] { background-color: var(--amber-light, #fffbeb); }
    .svc-modal[data-theme="paper"] { background-color: var(--bg-paper, #f6f3eb); }
    .svc-modal[data-theme="dark"] {
      background-color: var(--forest-green, #1c3a2e);
      color: var(--cream-text, #f6f3eb);
      border-color: rgba(246, 243, 235, 0.25);
      box-shadow: 8px 8px 0 rgba(0,0,0,0.5);
    }
    .svc-modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 32px;
      height: 32px;
      border: var(--border-thin);
      border-radius: var(--radius-sm);
      background: transparent;
      color: inherit;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 0 currentColor;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .svc-modal-close:hover { transform: translateY(-2px); box-shadow: 3px 3px 0 currentColor; }
    [data-theme="dark"] .svc-modal-close {
      border-color: rgba(246, 243, 235, 0.35);
      box-shadow: 2px 2px 0 rgba(246,243,235,0.3);
    }
    .svc-modal-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem; }
    .svc-modal-num { font-family: var(--font-mono); font-size: 2.2rem; font-weight: 900; color: var(--amber); line-height: 1; }
    .svc-modal-domain-badge {
      width: 42px;
      height: 42px;
      border: var(--border-thick);
      border-radius: var(--radius-sm);
      display: grid;
      place-items: center;
      color: var(--amber);
      box-shadow: 2px 2px 0 var(--ink);
      flex-shrink: 0;
    }
    [data-theme="dark"] .svc-modal-domain-badge {
      background-color: rgba(246,243,235,0.08);
      border-color: rgba(246,243,235,0.3);
      box-shadow: 2px 2px 0 rgba(0,0,0,0.4);
    }
    .svc-modal-domain-badge svg { width: 22px; height: 22px; }
    .svc-modal-title { font-size: clamp(1.4rem, 3vw, 1.8rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 0.55rem; }
    .svc-modal-desc { font-size: 0.92rem; line-height: 1.6; color: var(--ink-muted); }
    [data-theme="dark"] .svc-modal-desc { color: rgba(240, 236, 224, 0.82); }
    .svc-modal-divider { border: none; border-top: 1.5px dashed var(--ink); margin: 1.4rem 0 1rem; opacity: 0.25; }
    [data-theme="dark"] .svc-modal-divider { border-color: rgba(246, 243, 235, 0.3); }
    .svc-modal-section-label {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--amber);
      text-transform: uppercase;
      margin-bottom: 0.85rem;
    }
    .svc-modal-projects { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.4rem; }
    .svc-project-card {
      display: flex;
      align-items: flex-start;
      gap: 0.9rem;
      padding: 0.85rem 1rem;
      border: 1.5px solid var(--ink);
      border-radius: var(--radius-sm);
      background: rgba(255,255,255,0.45);
      box-shadow: 2px 2px 0 var(--ink);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .svc-project-card:hover { transform: translateX(3px); box-shadow: 4px 4px 0 var(--ink); }
    [data-theme="dark"] .svc-project-card {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(246, 243, 235, 0.18);
      box-shadow: 2px 2px 0 rgba(0,0,0,0.35);
    }
    .svc-project-icon {
      width: 36px;
      height: 36px;
      min-width: 36px;
      background: var(--bg-paper, #f6f3eb);
      border: 1.5px solid var(--ink);
      border-radius: 6px;
      display: grid;
      place-items: center;
      color: var(--forest-green);
      box-shadow: 1.5px 1.5px 0 var(--ink);
      flex-shrink: 0;
    }
    [data-theme="dark"] .svc-project-icon {
      background: rgba(229, 148, 0, 0.15);
      border-color: rgba(229, 148, 0, 0.4);
      color: var(--amber);
      box-shadow: 1.5px 1.5px 0 rgba(0,0,0,0.3);
    }
    .svc-project-icon svg { width: 18px; height: 18px; }
    .svc-project-info { flex: 1; min-width: 0; }
    .svc-project-info h4 { font-size: 0.88rem; font-weight: 800; margin-bottom: 0.3rem; }
    [data-theme="dark"] .svc-project-info h4 { color: #f0ece0; }
    .svc-project-info p { font-size: 0.8rem; line-height: 1.55; color: var(--ink-muted); margin-bottom: 0.5rem; }
    [data-theme="dark"] .svc-project-info p { color: rgba(240, 236, 224, 0.75); }
    .svc-project-tag {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      padding: 0.15rem 0.5rem;
      border: 1px solid var(--ink);
      border-radius: 3px;
      background: var(--amber);
      color: var(--ink);
      display: inline-block;
    }
    [data-theme="dark"] .svc-modal-title { color: var(--amber); }
    .svc-modal-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      padding-top: 1rem;
      border-top: 1px solid rgba(0,0,0,0.1);
    }
    [data-theme="dark"] .svc-modal-footer { border-top-color: rgba(246,243,235,0.15); }
    .svc-modal-pill {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      padding: 0.3rem 0.8rem;
      border: 1.5px solid var(--ink);
      border-radius: var(--radius-pill);
      background: var(--bg-paper);
      box-shadow: 2px 2px 0 var(--ink);
    }
    [data-theme="dark"] .svc-modal-pill {
      background: rgba(255,255,255,0.1);
      border-color: rgba(246,243,235,0.35);
      color: var(--cream-text);
      box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
    }
    .svc-cta-btn { font-size: 0.78rem !important; padding: 0.55rem 1.2rem !important; }

    @media (max-width: 640px) {
      .svc-modal { padding: 1.5rem 1.2rem 1.2rem; max-height: 92vh; }
      .svc-modal-footer { flex-direction: column; align-items: flex-start; }
      .svc-cta-btn { width: 100%; justify-content: center; }
      .svc-project-card { flex-direction: column; gap: 0.6rem; }
    }

    /* ================= FOOTER ================= */
    .footer {
      background-color: var(--bg-paper, #faf6ee);
      color: var(--ink, #18231c);
      border-top: 3px solid var(--ink);
      position: relative;
      box-shadow: 0 -4px 0 rgba(24, 35, 28, 0.05);
    }
    .footer-top-stripe {
      height: 5px;
      width: 100%;
      background: linear-gradient(90deg, var(--forest-green, #0f382c) 0%, var(--amber, #d97706) 50%, var(--terracotta, #e11d48) 100%);
      border-bottom: 2px solid var(--ink);
    }
    .footer-container {
      display: grid;
      grid-template-columns: 1.4fr 1.3fr 1fr 1fr;
      gap: 2.5rem;
      padding: 3.5rem 1.5rem 2.5rem 1.5rem;
      border-bottom: 2px solid rgba(24, 35, 28, 0.15);
    }
    .footer-col-brand .brand-logo { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.85rem; }
    .footer-col-brand .brand-icon {
      width: 34px;
      height: 34px;
      background-color: var(--amber);
      color: var(--ink);
      border: 2px solid var(--ink);
      border-radius: var(--radius-sm);
      display: grid;
      place-items: center;
      box-shadow: 2px 2px 0 var(--ink);
      flex-shrink: 0;
    }
    .footer-col-brand .brand-icon svg { width: 20px; height: 20px; display: block; }
    .footer-col-brand .brand-text {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--ink);
      letter-spacing: 0.04em;
    }
    .footer-tagline { color: var(--ink-muted); font-size: 0.88rem; line-height: 1.5; margin-bottom: 1.2rem; }
    .footer-status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 4px 10px;
      background-color: #e6f4ea;
      border: 1.5px solid var(--ink);
      border-radius: var(--radius-sm);
      font-family: var(--font-mono);
      font-size: 0.68rem;
      font-weight: 800;
      color: #047857;
      box-shadow: 2px 2px 0 var(--ink);
    }
    .status-led-online {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--led-green);
      box-shadow: 0 0 6px var(--led-green);
      display: inline-block;
    }
    .footer-heading {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--terracotta);
      letter-spacing: 0.08em;
      margin-bottom: 1.1rem;
      text-transform: uppercase;
    }
    .footer-contact-list { display: flex; flex-direction: column; gap: 0.65rem; }
    .footer-contact-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.6rem 0.85rem;
      background-color: #fff;
      border: 1.5px solid var(--ink);
      border-radius: var(--radius-sm);
      color: var(--ink);
      box-shadow: 2px 2px 0 var(--ink);
      transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .footer-contact-card:hover {
      transform: translateY(-2px) translateX(2px);
      box-shadow: 3px 3px 0 var(--ink);
      background-color: #fefce8;
    }
    .contact-icon-bubble {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: grid;
      place-items: center;
      border: 1.5px solid var(--ink);
      flex-shrink: 0;
    }
    .contact-icon-bubble.whatsapp-bubble { background-color: #25d366; color: #fff; }
    .contact-icon-bubble.email-bubble { background-color: #0f382c; color: #fff; }
    .contact-icon-bubble.insta-bubble {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
      color: #fff;
    }
    .contact-icon-bubble .icon-svg { width: 16px; height: 16px; }
    .contact-details { display: flex; flex-direction: column; min-width: 0; }
    .contact-type { font-family: var(--font-mono); font-size: 0.64rem; color: var(--ink-muted); letter-spacing: 0.05em; }
    .contact-val { font-size: 0.82rem; font-weight: 800; color: var(--ink); font-family: var(--font-mono); }
    .footer-nav-list { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; }
    .footer-nav-list li a {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--ink-muted);
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }
    .footer-nav-list li a .vintage-svg-icon {
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #0f382c;
      flex-shrink: 0;
      transition: transform 0.18s, color 0.18s;
    }
    .footer-nav-list li a .vintage-svg-icon svg { width: 15px; height: 15px; display: block; }
    .footer-nav-list li a:hover { color: var(--ink); font-weight: 800; transform: translateX(4px); }
    .footer-nav-list li a:hover .vintage-svg-icon { color: var(--amber); transform: scale(1.2); }

    /* Vector Flag */
    .flag-india-vector { display: inline-flex; align-items: center; justify-content: center; margin-left: 6px; }
    .flag-india-vector .svg-flag { border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); border: 1px solid rgba(24,35,28,0.35); }

    /* Footer Bottom */
    .footer-bottom { padding: 1.25rem 0; background-color: #ece3d2; border-top: 1.5px solid rgba(24, 35, 28, 0.15); }
    .footer-bottom-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--ink-muted);
    }
    .footer-badges-strip { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
    .footer-hw-badge {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 800;
      background-color: #fff;
      padding: 2px 7px;
      border-radius: 3px;
      border: 1px solid var(--ink);
      color: var(--ink);
      box-shadow: 1.5px 1.5px 0 var(--ink);
    }

    @media (max-width: 1024px) { .footer-container { grid-template-columns: 1fr 1fr; gap: 2rem; } }
    @media (max-width: 640px) {
      .footer-container { grid-template-columns: 1fr; gap: 2rem; }
      .footer-bottom-container { flex-direction: column; gap: 0.8rem; text-align: center; }
    }
  </style>
</head>
<body>

  <!-- ================= 1. FLOATING PILL NAVBAR ================= -->
  <header class="navbar-wrapper">
    <div class="navbar-pill">
      <a href="#" class="brand-logo">
        <span class="brand-asterisk">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2a1 1 0 0 1 1 1v6.2l4.38-4.38a1 1 0 1 1 1.42 1.42L14.4 10.6H21a1 1 0 1 1 0 2h-6.6l4.4 4.38a1 1 0 1 1-1.42 1.42L13 14.02V21a1 1 0 1 1-2 0v-6.98l-4.38 4.4a1 1 0 1 1-1.42-1.42L9.6 12.6H3a1 1 0 1 1 0-2h6.6L5.2 6.22a1 1 0 1 1 1.42-1.42L11 9.2V3a1 1 0 0 1 1-1z"/>
          </svg>
        </span>
        <span class="brand-text">Neuromind</span>
      </a>

      <nav class="nav-links">
        <a href="#services" class="nav-item">Services <span class="nav-caret">▾</span></a>
        <a href="#capabilities" class="nav-item">Capabilities <span class="nav-caret">▾</span></a>
        <a href="#work" class="nav-item">Work</a>
        <a href="#pricing" class="nav-item">Pricing <span class="nav-caret">▾</span></a>
        <a href="#reviews" class="nav-item">Reviews</a>
        <a href="#process" class="nav-item">Process</a>
      </nav>

      <div class="nav-actions">
        <div class="nav-lang-pill" title="India Region / Direct Support">
          <span class="nav-globe">🌐</span>
          <span>IN</span>
          <span class="nav-caret">▾</span>
        </div>
        <button class="nav-cta-fp" id="openQuoteModalBtn">
          <span>Start a Project</span>
          <span class="nav-cta-arrow">&rsaquo;</span>
        </button>
        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle Navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobileNavDrawer">
      <a href="#services" class="mobile-nav-link">Services</a>
      <a href="#capabilities" class="mobile-nav-link">Capabilities</a>
      <a href="#work" class="mobile-nav-link">Work</a>
      <a href="#pricing" class="mobile-nav-link">Pricing</a>
      <a href="#reviews" class="mobile-nav-link">Reviews</a>
      <a href="#process" class="mobile-nav-link">Process</a>
      <button class="btn btn-primary" id="mobileStartProjectBtn" style="width:100%; margin-top:8px; border-radius:9999px;">
        Start a Project &rarr;
      </button>
    </div>

    <!-- Scroll Progress Indicator Bar -->
    <div class="scroll-progress-bar" id="scrollProgressBar"></div>
  </header>

  <main style="padding-top: 100px;">
    <!-- ================= 2. CORE SERVICES SECTION ================= -->
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-header">
          <p class="section-tag">FULL-CYCLE SOFTWARE STUDIO</p>
          <h2 class="section-title">WHAT WE BUILD</h2>
        </div>

        <div class="services-grid">
          <!-- Service 01: Custom Software & ERPs -->
          <div class="service-card card-yellow" data-service="erp" role="button" tabindex="0" aria-label="Learn more about Custom Software & ERPs">
            <div class="service-card-header">
              <div class="service-num">01</div>
              <div class="service-vintage-badge" title="Vintage CRT Terminal & ERP Core">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="13" rx="2"></rect>
                  <line x1="6" y1="7" x2="6.01" y2="7" stroke-width="3"></line>
                  <line x1="9" y1="7" x2="14" y2="7"></line>
                  <line x1="6" y1="11" x2="12" y2="11"></line>
                  <path d="M8 20h8"></path>
                  <path d="M12 16v4"></path>
                </svg>
              </div>
            </div>
            <h3 class="service-name">CUSTOM SOFTWARE &amp; ERPS</h3>
            <p class="service-desc">Tailored offline &amp; cloud systems engineered for complex, industry-specific workflows — from agriculture to pharmaceuticals.</p>
            <div class="service-footer">
              <span class="service-pill">FOR OFFLINE DESKTOP &amp; CLOUD</span>
              <span class="service-tap-btn">TAP TO EXPLORE &rarr;</span>
            </div>
          </div>

          <!-- Service 02: Mobile Apps & Web Platforms -->
          <div class="service-card card-paper" data-service="mobile" role="button" tabindex="0" aria-label="Learn more about Mobile Apps & Web Platforms">
            <div class="service-card-header">
              <div class="service-num">02</div>
              <div class="service-vintage-badge" title="Vintage Cellular & Web Platform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="3"></rect>
                  <line x1="9" y1="5" x2="15" y2="5"></line>
                  <rect x="8" y="8" width="8" height="7" rx="1"></rect>
                  <circle cx="12" cy="18.5" r="1" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
            <h3 class="service-name">MOBILE APPS &amp; WEB PLATFORMS</h3>
            <p class="service-desc">High-performance native and cross-platform apps for iOS, Android, and modern web browsers — from e-commerce to SaaS portals.</p>
            <div class="service-footer">
              <span class="service-pill">FOR PHONES, TABLETS &amp; BROWSERS</span>
              <span class="service-tap-btn">TAP TO EXPLORE &rarr;</span>
            </div>
          </div>

          <!-- Service 03: AI & WhatsApp Automation -->
          <div class="service-card card-dark" data-service="ai" role="button" tabindex="0" aria-label="Learn more about AI & WhatsApp Automation">
            <div class="service-card-header">
              <div class="service-num">03</div>
              <div class="service-vintage-badge" title="Vintage Robot & Automation Bot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="8" width="16" height="13" rx="2"></rect>
                  <circle cx="9" cy="13" r="1.5" fill="currentColor"></circle>
                  <circle cx="15" cy="13" r="1.5" fill="currentColor"></circle>
                  <line x1="9" y1="17" x2="15" y2="17"></line>
                  <line x1="12" y1="2" x2="12" y2="8"></line>
                  <circle cx="12" cy="2" r="1" fill="currentColor"></circle>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                </svg>
              </div>
            </div>
            <h3 class="service-name">AI &amp; WHATSAPP AUTOMATION</h3>
            <p class="service-desc">Put your repetitive business operations on autopilot with intelligent bots and custom API hooks — orders, reminders &amp; leads handled 24/7.</p>
            <div class="service-footer">
              <span class="service-pill">FOR 24/7 HANDS-FREE OPS</span>
              <span class="service-tap-btn">TAP TO EXPLORE &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 3. SERVICE DETAIL MODALS ================= -->

    <!-- Modal 01: Custom Software & ERPs -->
    <div class="svc-modal-overlay" id="svcModal-erp" role="dialog" aria-modal="true" aria-labelledby="svcModal-erp-title">
      <div class="svc-modal" data-theme="yellow">
        <button class="svc-modal-close" aria-label="Close modal">&#x2715;</button>
        <div class="svc-modal-header">
          <div class="svc-modal-num">01</div>
          <div class="svc-modal-domain-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"></rect><line x1="6" y1="7" x2="6.01" y2="7" stroke-width="3"></line><line x1="9" y1="7" x2="14" y2="7"></line><line x1="6" y1="11" x2="12" y2="11"></line><path d="M8 20h8"></path><path d="M12 16v4"></path></svg>
          </div>
        </div>
        <h2 class="svc-modal-title" id="svcModal-erp-title">CUSTOM SOFTWARE &amp; ERPs</h2>
        <p class="svc-modal-desc">Tailored offline &amp; cloud systems engineered for complex, industry-specific workflows — built entirely in-house, zero subscription lock-in.</p>
        <div class="svc-modal-divider"></div>
        <p class="svc-modal-section-label">PROJECTS BUILT IN THIS DOMAIN</p>
        <div class="svc-modal-projects">
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>AgriBill — Agriculture &amp; Chemical Dealer Suite</h4>
              <p>Complete offline ERP for pesticide &amp; fertilizer dealers. Batch tracking, GST billing, party ledger &amp; seasonal credit management.</p>
              <span class="svc-project-tag">AGRICULTURE</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>PharmaTrack — Pharmacy &amp; Batch Management</h4>
              <p>Expiry-date forecasting, schedule H drug compliance, wholesale distributor ledger &amp; multi-counter POS integration.</p>
              <span class="svc-project-tag">HEALTHCARE</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>TextileFlow — Loom &amp; Yarn Inventory ERP</h4>
              <p>Raw material to finished fabric tracker with warp/weft waste calculation, weaver pay ledger &amp; GST invoice generation.</p>
              <span class="svc-project-tag">MANUFACTURING</span>
            </div>
          </div>
        </div>
        <div class="svc-modal-footer">
          <span class="svc-modal-pill">FOR OFFLINE DESKTOP &amp; CLOUD</span>
          <button class="btn btn-primary svc-cta-btn" id="svcErpCta">START A PROJECT &rarr;</button>
        </div>
      </div>
    </div>

    <!-- Modal 02: Mobile Apps & Web Platforms -->
    <div class="svc-modal-overlay" id="svcModal-mobile" role="dialog" aria-modal="true" aria-labelledby="svcModal-mobile-title">
      <div class="svc-modal" data-theme="paper">
        <button class="svc-modal-close" aria-label="Close modal">&#x2715;</button>
        <div class="svc-modal-header">
          <div class="svc-modal-num">02</div>
          <div class="svc-modal-domain-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"></rect><line x1="9" y1="5" x2="15" y2="5"></line><rect x="8" y="8" width="8" height="7" rx="1"></rect><circle cx="12" cy="18.5" r="1" fill="currentColor"></circle></svg>
          </div>
        </div>
        <h2 class="svc-modal-title" id="svcModal-mobile-title">MOBILE APPS &amp; WEB PLATFORMS</h2>
        <p class="svc-modal-desc">High-performance native and cross-platform apps for iOS, Android, and modern browsers — designed for extreme real-world reliability.</p>
        <div class="svc-modal-divider"></div>
        <p class="svc-modal-section-label">PROJECTS BUILT IN THIS DOMAIN</p>
        <div class="svc-modal-projects">
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>AgroCommerce — Farmer-to-Dealer Ordering App</h4>
              <p>Flutter cross-platform app with offline catalog caching, vernacular UI (Marathi/Hindi), and razorpay integration.</p>
              <span class="svc-project-tag">E-COMMERCE</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>BizPortal — Multi-Tenant Client Dashboard</h4>
              <p>Next.js web portal with role-based access, real-time sales reporting, PDF statement exports, and webhook notifications.</p>
              <span class="svc-project-tag">SAAS / WEB</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>ServiceHub — Field Technician Dispatch App</h4>
              <p>Native Android app for field service engineers: GPS job tracking, signature capture, parts consumption log &amp; invoice print.</p>
              <span class="svc-project-tag">FIELD SERVICE</span>
            </div>
          </div>
        </div>
        <div class="svc-modal-footer">
          <span class="svc-modal-pill">FOR PHONES, TABLETS &amp; BROWSERS</span>
          <button class="btn btn-primary svc-cta-btn" id="svcMobileCta">START A PROJECT &rarr;</button>
        </div>
      </div>
    </div>

    <!-- Modal 03: AI & WhatsApp Automation -->
    <div class="svc-modal-overlay" id="svcModal-ai" role="dialog" aria-modal="true" aria-labelledby="svcModal-ai-title">
      <div class="svc-modal" data-theme="dark">
        <button class="svc-modal-close" aria-label="Close modal">&#x2715;</button>
        <div class="svc-modal-header">
          <div class="svc-modal-num">03</div>
          <div class="svc-modal-domain-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="13" rx="2"></rect><circle cx="9" cy="13" r="1.5" fill="currentColor"></circle><circle cx="15" cy="13" r="1.5" fill="currentColor"></circle><line x1="9" y1="17" x2="15" y2="17"></line><line x1="12" y1="2" x2="12" y2="8"></line><circle cx="12" cy="2" r="1" fill="currentColor"></circle><line x1="1" y1="14" x2="4" y2="14"></line><line x1="20" y1="14" x2="23" y2="14"></line></svg>
          </div>
        </div>
        <h2 class="svc-modal-title" id="svcModal-ai-title">AI &amp; WHATSAPP AUTOMATION</h2>
        <p class="svc-modal-desc">Put your repetitive business operations on autopilot with intelligent bots and custom API hooks — orders, reminders &amp; leads handled 24/7.</p>
        <div class="svc-modal-divider"></div>
        <p class="svc-modal-section-label">PROJECTS BUILT IN THIS DOMAIN</p>
        <div class="svc-modal-projects">
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>OrderBot — WhatsApp Conversational Ordering</h4>
              <p>Meta Cloud API bot that takes orders over WhatsApp, checks inventory in real time, generates a PDF bill &amp; confirms via payment link.</p>
              <span class="svc-project-tag">WHATSAPP / API</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>LedgerNudge — Automated Payment Reminders</h4>
              <p>Scheduled WhatsApp dispatch engine: sends friendly payment reminders with live balance, bank details &amp; UPI QR code directly to clients.</p>
              <span class="svc-project-tag">FINTECH / OPS</span>
            </div>
          </div>
          <div class="svc-project-card">
            <div class="svc-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="svc-project-info">
              <h4>LeadFlow — WhatsApp Lead Capture to CRM</h4>
              <p>Captures enquiries from WhatsApp, website &amp; forms, qualifies them via AI chatbot &amp; pushes into CRM pipeline automatically.</p>
              <span class="svc-project-tag">CRM / AI</span>
            </div>
          </div>
        </div>
        <div class="svc-modal-footer">
          <span class="svc-modal-pill">FOR 24/7 HANDS-FREE OPS</span>
          <button class="btn btn-yellow svc-cta-btn" id="svcAiCta">START A PROJECT &rarr;</button>
        </div>
      </div>
    </div>
  </main>

  <!-- ================= 4. WARM RETRO HARDWARE FOOTER ================= -->
  <footer class="footer">
    <div class="footer-top-stripe"></div>
    <div class="container footer-container">
      <!-- Col 1: Brand & Engineering Identity -->
      <div class="footer-col-brand">
        <div class="brand-logo">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="brand-text">NEUROMIND SOLUTIONS</span>
        </div>
        <p class="footer-tagline">
          Custom software engineering, high-speed offline ERPs, and native mobile applications built by engineers with speed &amp; rigor.
        </p>
        <div class="footer-status-pill">
          <span class="status-led-online"></span>
          <span>SYSTEM ONLINE • PUNE, MH</span>
          <span class="flag-india-vector" title="India">
            <svg viewBox="0 0 24 16" width="18" height="12" class="svg-flag" aria-hidden="true">
              <rect width="24" height="16" rx="2" fill="#ffffff"/>
              <path d="M0 0h24v5.33H0z" fill="#FF9933"/>
              <path d="M0 10.67h24V16H0z" fill="#138808"/>
              <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" stroke-width="0.7"/>
              <circle cx="12" cy="8" r="0.6" fill="#000080"/>
            </svg>
          </span>
        </div>
      </div>

      <!-- Col 2: Direct Contact Channels -->
      <div class="footer-col-channels">
        <h4 class="footer-heading">DIRECT INQUIRIES &amp; ORDERS</h4>
        <div class="footer-contact-list">
          <a href="https://wa.me/919689159776?text=Hi%20Neuromind%20Solutions" target="_blank" rel="noopener noreferrer" class="footer-contact-card" title="WhatsApp">
            <div class="contact-icon-bubble whatsapp-bubble">
              <svg viewBox="0 0 24 24" class="icon-svg" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.11 1.04-1.53 1.1-.4.07-.9.1-1.48-.09-.35-.11-.8-.26-1.5-.56-2.97-1.29-4.89-4.3-5.04-4.5-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.47c.27-.3.59-.38.79-.38.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.02.9 2.17.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.39-.46.53-.15.14-.31.3-.13.6.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.13.65-.08.18-.2.77-.9 1-1.2.2-.3.39-.25.65-.15.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.12 1.22z"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-type">DIRECT CALL &amp; WHATSAPP</span>
              <strong class="contact-val">+91 96891 59776</strong>
            </div>
          </a>

          <a href="mailto:neuromind311@gmail.com" class="footer-contact-card" title="Email">
            <div class="contact-icon-bubble email-bubble">
              <svg viewBox="0 0 24 24" class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-type">COMPANY EMAIL</span>
              <strong class="contact-val">neuromind311@gmail.com</strong>
            </div>
          </a>

          <a href="https://www.instagram.com/neuromindsolutions.in" target="_blank" rel="noopener noreferrer" class="footer-contact-card" title="Instagram">
            <div class="contact-icon-bubble insta-bubble">
              <svg viewBox="0 0 24 24" class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-type">INSTAGRAM</span>
              <strong class="contact-val">@neuromindsolutions.in</strong>
            </div>
          </a>
        </div>
      </div>

      <!-- Col 3: Solutions -->
      <div class="footer-col-nav">
        <h4 class="footer-heading">SOLUTIONS</h4>
        <ul class="footer-nav-list">
          <li>
            <a href="#work">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </span>
              <span>Custom ERPs &amp; AgriBill</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"></rect><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"></line></svg>
              </span>
              <span>Mobile Applications</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </span>
              <span>Web Platforms &amp; Portals</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="14" rx="2"></rect><circle cx="9" cy="12" r="1.5" fill="currentColor"></circle><circle cx="15" cy="12" r="1.5" fill="currentColor"></circle><line x1="9" y1="16" x2="15" y2="16"></line><line x1="12" y1="2" x2="12" y2="6"></line></svg>
              </span>
              <span>WhatsApp Automation</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Col 4: Quick Navigation -->
      <div class="footer-col-nav">
        <h4 class="footer-heading">NAVIGATION</h4>
        <ul class="footer-nav-list">
          <li>
            <a href="#work">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </span>
              <span>Our Work</span>
            </a>
          </li>
          <li>
            <a href="#reviews">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </span>
              <span>Client Reviews</span>
            </a>
          </li>
          <li>
            <a href="#process">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </span>
              <span>3-Step Process</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span class="vintage-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
              </span>
              <span>Start a Project</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Copyright & Hardware Badges -->
    <div class="footer-bottom">
      <div class="container footer-bottom-container">
        <p>© 2026 Neuromind Solutions. All rights reserved.</p>
        <div class="footer-badges-strip">
          <span class="footer-hw-badge">⚡ BUILT WITH SPEED &amp; RIGOR</span>
          <span class="footer-hw-badge">🌾 AGRIBILL V1.0 OFFLINE READY</span>
          <span class="footer-hw-badge">
            MADE IN INDIA
            <span class="flag-india-vector" title="India">
              <svg viewBox="0 0 24 16" width="18" height="12" class="svg-flag" aria-hidden="true">
                <rect width="24" height="16" rx="2" fill="#ffffff"/>
                <path d="M0 0h24v5.33H0z" fill="#FF9933"/>
                <path d="M0 10.67h24V16H0z" fill="#138808"/>
                <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" stroke-width="0.7"/>
                <circle cx="12" cy="8" r="0.6" fill="#000080"/>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </footer>

  <!-- ================= JAVASCRIPT ================= -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Scroll Progress Bar
      const scrollProgressBar = document.getElementById('scrollProgressBar');
      const updateScrollProgress = () => {
        if (!scrollProgressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight <= 0) return;
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        scrollProgressBar.style.transform = `scaleX(${progress})`;
      };
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      updateScrollProgress();

      // 2. Navbar Scroll State & Mobile Drawer
      const navbarWrapper = document.querySelector('.navbar-wrapper');
      if (navbarWrapper) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 24) {
            navbarWrapper.classList.add('is-scrolled');
          } else {
            navbarWrapper.classList.remove('is-scrolled');
          }
        }, { passive: true });
      }

      const mobileToggle = document.getElementById('mobileMenuToggle');
      const mobileDrawer = document.getElementById('mobileNavDrawer');
      if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => mobileDrawer.classList.toggle('is-open'));
        mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', () => mobileDrawer.classList.remove('is-open'));
        });
      }

      // 3. Service Modals Map
      const svcModalMap = {
        erp:    document.getElementById('svcModal-erp'),
        mobile: document.getElementById('svcModal-mobile'),
        ai:     document.getElementById('svcModal-ai'),
      };

      function openSvcModal(key) {
        const overlay = svcModalMap[key];
        if (!overlay) return;
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        const closeBtn = overlay.querySelector('.svc-modal-close');
        if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
      }

      function closeSvcModal(overlay) {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }

      // Wire Service Cards click & keyboard (Enter/Space)
      document.querySelectorAll('.service-card[data-service]').forEach(card => {
        const key = card.dataset.service;
        card.addEventListener('click', () => openSvcModal(key));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSvcModal(key);
          }
        });
      });

      // Wire close buttons & backdrop click
      Object.values(svcModalMap).forEach(overlay => {
        if (!overlay) return;
        const closeBtn = overlay.querySelector('.svc-modal-close');
        if (closeBtn) closeBtn.addEventListener('click', () => closeSvcModal(overlay));
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) closeSvcModal(overlay);
        });
      });

      // Escape key handler
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          Object.values(svcModalMap).forEach(overlay => {
            if (overlay && overlay.classList.contains('is-open')) closeSvcModal(overlay);
          });
        }
      });

      // CTAs
      ['svcErpCta', 'svcMobileCta', 'svcAiCta', 'openQuoteModalBtn', 'mobileStartProjectBtn'].forEach(id => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('click', () => {
          Object.values(svcModalMap).forEach(o => o && o.classList.remove('is-open'));
          document.body.style.overflow = '';
          const footer = document.querySelector('.footer');
          if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        });
      });
    });
  </script>
</body>
</html>
```

---

## 4. Modular Codebase

If you prefer splitting the code across standard project files, use the three files below:

### 4.1 Semantic HTML Structure (`index.html`)
See section **3** above for the complete `<body>` markup.

### 4.2 Production CSS Stylesheet (`styles.css`)
See section **3** `<style>` tag above.

### 4.3 Interactive JavaScript Logic (`app.js`)
See section **3** `<script>` tag above.

---

## 5. Quality Assurance & Verification Rubric

Before considering the task complete, verify that the replica passes all 10 checks:

| # | Feature | Expected Behavior | Status |
|---|---|---|:---:|
| 1 | **Floating Pill Navbar** | Floats centered at the top; gains deeper shadow and `.is-scrolled` class when scrolling past 24px |  |
| 2 | **Scroll Progress Bar** | Smoothly scales horizontally across top edge in proportion to document scroll |  |
| 3 | **Mobile Menu** | Hamburger toggle triggers slide-down drawer; clicking any link closes drawer |  |
| 4 | **Tactile Card Hover** | Service cards elevate by 6px with an 8px solid ink shadow; "TAP TO EXPLORE" button turns amber |  |
| 5 | **Modal 01 (Yellow)** | Displays 3 projects (AgriBill, PharmaTrack, TextileFlow) on amber-light surface |  |
| 6 | **Modal 02 (Paper)** | Displays 3 projects (AgroCommerce, BizPortal, ServiceHub) on cardboard surface |  |
| 7 | **Modal 03 (Dark)** | High contrast WCAG AA: Cream `#f0ece0` text on dark emerald `#1c3a2e`, amber accents, 3 projects (OrderBot, LedgerNudge, LeadFlow) |  |
| 8 | **Accessibility Trap** | ESC key closes modal; backdrop click closes modal; body scroll is locked while open |  |
| 9 | **Footer Contact Cards** | WhatsApp, Email, and Instagram cards exhibit 2px tactile depression and color accents |  |
| 10 | **Vector Flag Badge** | India flag rendered via inline SVG paths — renders identically on all operating systems without emoji font dependency |  |
