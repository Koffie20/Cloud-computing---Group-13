# Group 13 — Design System

**Prepared By:** Member 2 — Frontend Designer  
**Date:** June 2026  
**File:** `style.css`

This document describes every visual design decision made for the Group 13 website, including the color palette, typography, spacing, and component inventory.

---

## 1. Color Palette

All colors are defined as CSS Custom Properties in the `:root` block of `style.css` for easy maintenance.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `--primary-color` | `#4f46e5` | Buttons, active links, badges, accents |
| `--primary-hover` | `#4338ca` | Button hover state (darker shade) |
| `--primary-light` | `#e0e7ff` | Badge backgrounds, card border hover |
| `--secondary-color` | `#0ea5e9` | Sky blue — reserved for future accent use |
| `--bg-color` | `#f8fafc` | Main page background (light slate) |
| `--card-bg` | `#ffffff` | Card and form panel backgrounds |
| `--text-dark` | `#0f172a` | Headings, labels, strong text |
| `--text-body` | `#334155` | Body paragraphs |
| `--text-muted` | `#64748b` | Subtitles, bios, captions |
| `--border-color` | `#e2e8f0` | Card borders, dividers |
| `--footer-bg` | `#0f172a` | Dark footer background |
| `--footer-text` | `#94a3b8` | Footer body text |

**Design rationale:** Indigo (`#4f46e5`) was chosen as the primary color because it reads as professional and technical — suitable for a CS/engineering group project. The palette avoids generic "plain" red, blue, or green defaults in favor of HSL-tuned, harmonious tones.

---

## 2. Typography

| Property | Value |
|---------|-------|
| Font Family | `Plus Jakarta Sans` (Google Fonts) |
| Fallback | `sans-serif` |
| Base Font Size | Browser default (16px) |
| Base Line Height | `1.6` |
| Heading Weight | `700` (Bold) |
| Body Weight | `400` (Regular) |
| Nav / Button Weight | `500–600` (Medium/SemiBold) |

**Import:** Loaded from Google Fonts CDN at the top of `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

**Typographic scale:**

| Element | Size |
|---------|------|
| Hero `<h1>` | `2.8rem` |
| Inner page `<h1>` | `2.5rem` |
| Section `<h2>` | `2.2rem` |
| Card `<h3>` | `1.25rem` |
| Member Name `<h3>` | `1.15rem` |
| Body Text | `1rem` (base) |
| Muted / Small | `0.85–0.9rem` |

---

## 3. Spacing & Layout Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--container-width` | `1100px` | Max width of all page content |
| `--border-radius` | `12px` | Cards, modals, image containers |
| `--transition` | `all 0.3s ease` | All hover animations |
| Container padding | `0 20px` | Left/right padding inside container |
| Section padding | `70px 0` | Top/bottom padding for main sections |
| Hero padding | `80px 0` | Top/bottom for hero sections |

---

## 4. Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.1)` | Default card shadow |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)...` | Elevated cards, forms |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)...` | Hero image, member card hover |

---

## 5. Component Inventory

### 5.1 Header / Navigation Bar
- Background: `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)` — glassmorphism
- Position: `sticky`, `top: 0`, `z-index: 1000`
- Flexbox: logo left, nav right
- Active link: indigo text + `--primary-light` background pill

### 5.2 Buttons
Two variants:
- **Primary** — indigo fill, white text, lifts `-2px` on hover with indigo glow shadow
- **Secondary** — white fill, indigo border/text, indigo tint on hover

### 5.3 Feature Cards (Home page)
- White background, `1px` border
- `border-radius: 12px`, small shadow
- Hover: lifts `-5px`, shadow increases, border turns indigo-tinted

### 5.4 Member Cards (About page)
- Same base as feature cards
- Circular avatar: `80px` circle, indigo-light fill with initials
- Hover: lifts `-5px`, large shadow, indigo border

### 5.5 Contact Info Panel
- Solid indigo background (`--primary-color`)
- White text and icon chips with `rgba(255,255,255,0.15)` circular backgrounds

### 5.6 Contact Form
- White card, `1px` border, medium shadow
- Input focus: `3px` indigo ring (`box-shadow: 0 0 0 3px rgba(79,70,229,0.15)`)
- Textarea: `resize: vertical`, min-height `120px`

### 5.7 Success Alert Banner
- Hidden on page load (`display: none`)
- Shows on form submit: green background `#d1fae5`, dark green text `#065f46`
- Auto-hides after 6 seconds (JavaScript)

### 5.8 Footer
- Dark background: `--footer-bg` (`#0f172a`)
- Logo in white + indigo accent
- Footer links: slate grey → white on hover
- Copyright: small muted text, centered

---

## 6. Responsive Breakpoints

| Breakpoint | Trigger | Changes |
|-----------|---------|---------|
| Desktop | `> 992px` | Full 2-column layouts |
| Tablet | `≤ 992px` | Hero and contact sections collapse to 1 column |
| Mobile | `≤ 768px` | Hamburger menu visible; full-screen nav drawer |

---

*Design system documented by Member 2 — Frontend Designer, Group 13.*
