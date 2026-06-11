# Group 13 — System Architecture Document

**Course:** Introduction to Cloud Computing CSBC 252  
**Project:** Simple Static Website  
**Prepared By:** Member 3 — JS Developer & Architect  
**Date:** June 2026

---

## 1. Project Overview

Group 13's website is a **multi-page static web application** built entirely with standard browser technologies — no server, no framework, no build tool required. The project goal is to demonstrate a well-organized frontend architecture using HTML5, CSS3, and vanilla JavaScript.

The site consists of three publicly accessible pages:

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Landing page — hero section, project overview cards |
| About | `about.html` | Team member profiles, project purpose |
| Contact | `contact.html` | Contact form with live JS validation feedback |

---

## 2. Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Structure | HTML5 | Semantic, accessible markup |
| Presentation | CSS3 | Custom properties, Flexbox, Grid, responsive design |
| Behavior | Vanilla JavaScript (ES6+) | No dependencies, beginner-friendly |
| Fonts | Google Fonts (Plus Jakarta Sans) | Modern, clean typography via CDN |
| Hosting Target | GitHub Pages / Static Host | Free, no backend required |

**No frameworks (React, Vue, Angular) or CSS libraries (Bootstrap, Tailwind) are used.** This is intentional — it demonstrates foundational understanding of the web platform.

---

## 3. Software System Hierarchy

The following diagram shows the full system hierarchy from the top level down to individual components:

```
GROUP 13 WEBSITE
│
├── PRESENTATION LAYER (HTML Pages)
│   ├── index.html          ← Home page
│   ├── about.html          ← About / Team page
│   └── contact.html        ← Contact form page
│
├── STYLING LAYER (CSS)
│   └── style.css           ← Single shared stylesheet (all pages)
│       ├── :root variables  ── Color tokens, spacing, font
│       ├── Reset & Base     ── Normalize browser defaults
│       ├── Header/Nav       ── Sticky header, nav links
│       ├── Hero Section     ── Grid layout, gradient background
│       ├── Buttons          ── Primary / Secondary variants
│       ├── Cards            ── Feature cards, member cards
│       ├── Contact Form     ── Input fields, labels, alert banner
│       ├── Footer           ── Dark background footer
│       └── Media Queries    ── Responsive breakpoints (992px, 768px)
│
├── BEHAVIOR LAYER (JavaScript)
│   └── script.js           ← Single shared JS file (all pages)
│       ├── Mobile Nav Toggle    ── Hamburger open/close drawer
│       ├── Outside-Click Close  ── Auto-close nav on outside click
│       └── Contact Form Handler ── Validate, show alert, reset form
│
└── ASSETS
    └── images/
        └── image.jpg       ← Hero section image (home page only)
```

---

## 4. File & Folder Structure

```
group-website/               ← Project root
│
├── index.html               ← Home page
├── about.html               ← About/Team page
├── contact.html             ← Contact form page
│
├── style.css                ← Global CSS stylesheet
├── script.js                ← Global JavaScript logic
│
├── images/
│   └── image.jpg            ← Hero banner image
│
└── contributions/           ← Team member role folders (for GitHub)
    ├── member1-architect/   ← System architecture (this folder)
    ├── member2-frontend-designer/
    ├── member3-js-developer/
    ├── member4-content-writer/
    └── member5-qa-reviewer/
```

---

## 5. Component Relationship Diagram

```
┌─────────────────────────────────────────────────┐
│                   Browser (Client)               │
└────────────────────┬────────────────────────────┘
                     │ requests
          ┌──────────▼──────────┐
          │   HTML Page (any)   │  ← Entry point
          │  index / about /    │
          │  contact .html      │
          └───┬──────────┬──────┘
              │ links    │ links
     ┌────────▼──┐  ┌────▼──────┐
     │ style.css │  │ script.js │
     │           │  │           │
     │ Provides: │  │ Provides: │
     │ - Layout  │  │ - Nav     │
     │ - Colors  │  │   toggle  │
     │ - Fonts   │  │ - Form    │
     │ - Anim.   │  │   handler │
     └───────────┘  └───────────┘
              │
     ┌────────▼──────────┐
     │  images/image.jpg │  ← Used only on index.html
     └───────────────────┘
```

---

## 6. Page-Level Architecture

### 6.1 index.html — Home Page

```
<body>
 ├── <header>           Navigation bar (logo + links)
 ├── <section.hero>     Hero grid (text left, image right)
 ├── <main.section>     Features grid (3 cards: HTML, CSS, JS)
 └── <footer>           Footer with logo, links, copyright
```

### 6.2 about.html — About Page

```
<body>
 ├── <header>           Navigation bar (same across all pages)
 ├── <section.hero>     Page heading + project purpose paragraph
 ├── <main.section>     Members grid (5 member cards)
 └── <footer>           Footer (same across all pages)
```

### 6.3 contact.html — Contact Page

```
<body>
 ├── <header>           Navigation bar (same across all pages)
 ├── <section.hero>     Page heading + brief description
 ├── <main.section>     Contact container:
 │                        ├── Left: contact-info panel (address, email)
 │                        └── Right: contact-form (name, email, message)
 └── <footer>           Footer (same across all pages)
```

---

## 7. Responsive Design Strategy

The website supports three device breakpoints:

| Breakpoint | Target | Key Changes |
|-----------|--------|-------------|
| `> 992px` | Desktop | 2-column hero grid, side-by-side contact layout |
| `≤ 992px` | Tablet | Hero stacks to 1 column, contact stacks to 1 column |
| `≤ 768px` | Mobile | Hamburger menu activated, full-screen nav drawer |

---

## 8. Navigation Flow

```
index.html  ────►  about.html  ────►  contact.html
    ▲                  │                    │
    └──────────────────┴────────────────────┘
              (all nav links are relative paths)
```

All navigation uses **relative file paths** (`href="about.html"`), making the site portable and deployable from any directory without a server.

---

## 9. Design Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| Single shared `style.css` | Avoids duplicated styles; consistent design across all pages |
| Single shared `script.js` | Functions check for element existence; safe to load on every page |
| CSS Custom Properties (`--var`) | Easy theming and maintenance; beginner-readable |
| No `<iframe>` or external embeds | Keeps the site self-contained and offline-capable |
| Sticky header with `backdrop-filter` | Modern glassmorphism effect; improves navigation UX on scroll |
| `margin-top: auto` on footer | CSS Flexbox trick to push footer to page bottom on short pages |

---

*Document prepared by Member 3 — JS Developer & Architect, Group 13.*
