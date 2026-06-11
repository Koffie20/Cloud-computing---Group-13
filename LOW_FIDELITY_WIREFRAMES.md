# Group 13 — Low-Fidelity Wireframes

**Prepared By:** Member 2 — Frontend Designer  
**Date:** June 2026  
**Purpose:** These wireframes were created before writing any CSS to plan the layout of each page. Low-fidelity wireframes use placeholder boxes and text — they focus on structure, not visual polish.

---

## Page 1: index.html — Home Page

```
╔══════════════════════════════════════════════════════════════╗
║  HEADER (sticky, 100% width)                                 ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ [LOGO: Group 13]         [Home]  [About Us] [Contact]│    ║
║  └──────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════╣
║  HERO SECTION (light gradient background, 2 columns)         ║
║  ┌──────────────────────────┐  ┌───────────────────────┐     ║
║  │ [COURSE BADGE CHIP]      │  │                       │     ║
║  │                          │  │   [HERO IMAGE]        │     ║
║  │  BIG HEADLINE HERE       │  │   (rounded, shadow)   │     ║
║  │  (large gradient text)   │  │                       │     ║
║  │                          │  │                       │     ║
║  │  Short description       │  │                       │     ║
║  │  paragraph text          │  │                       │     ║
║  │                          │  └───────────────────────┘     ║
║  │  [Meet the Team] [Contact]                                ║
║  └──────────────────────────┘                                ║
╠══════════════════════════════════════════════════════════════╣
║  PROJECT OVERVIEW SECTION (white/light bg)                   ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │           Section Title (centered)                   │    ║
║  │        Subtitle / short description                  │    ║
║  └──────────────────────────────────────────────────────┘    ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        ║
║  │  [HTML icon] │  │  [CSS icon]  │  │  [JS icon]   │        ║
║  │  Card Title  │  │  Card Title  │  │  Card Title  │        ║
║  │  Short text  │  │  Short text  │  │  Short text  │        ║
║  └──────────────┘  └──────────────┘  └──────────────┘        ║
╠══════════════════════════════════════════════════════════════╣
║  FOOTER (dark background)                                    ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ [LOGO]                    [Home] [About] [Contact]   │    ║
║  │────────────────────────────────────────────────────  │    ║
║  │           © 2026 Group 13. All rights reserved.      │    ║
║  └──────────────────────────────────────────────────────┘    ║
╚══════════════════════════════════════════════════════════════╝
```

**Layout Notes:**
- Hero uses a **2-column CSS Grid** (text left 60%, image right 40%)
- On tablet/mobile: stacks to **1 column**, text centered
- Feature cards use **auto-fit CSS Grid** (min 300px per card)

---

## Page 2: about.html — About / Team Page

```
╔══════════════════════════════════════════════════════════════╗
║  HEADER (same as all pages — sticky)                         ║
╠══════════════════════════════════════════════════════════════╣
║  PAGE HERO (centered, white background, shorter)             ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │               [COURSE BADGE CHIP]                    │    ║
║  │                  About Our Project                   │    ║
║  │        (centered heading, large font)                │    ║
║  │     Short paragraph describing project purpose       │    ║
║  └──────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════╣
║  TEAM SECTION (light bg, border-top)                         ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │          Meet the Group 13 Team (centered title)     │    ║
║  │          Subtitle description                        │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                              ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────┐  ║
║  │ [Avatar] │ │ [Avatar] │ │ [Avatar] │ │ [Avatar] │ │[A] │  ║
║  │  M1  M2  │ │    M2    │ │    M3    │ │    M4    │ │ M5 │  ║
║  │ Name     │ │  Name    │ │  Name    │ │  Name    │ │Name│  ║
║  │ ROLE TAG │ │ ROLE TAG │ │ ROLE TAG │ │ ROLE TAG │ │ROLE│  ║
║  │ Bio text │ │ Bio text │ │ Bio text │ │ Bio text │ │Bio │  ║
║  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────┘  ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  FOOTER (same as all pages)                                  ║
╚══════════════════════════════════════════════════════════════╝
```

**Layout Notes:**
- Member cards use **auto-fit CSS Grid** (min 220px per card)
- Avatar is a **circular div** with initials — no real images needed
- Cards have a subtle hover: lift + stronger shadow + colored border

---

## Page 3: contact.html — Contact Page

```
╔══════════════════════════════════════════════════════════════╗
║  HEADER (same as all pages — sticky)                         ║
╠══════════════════════════════════════════════════════════════╣
║  PAGE HERO (centered, shorter)                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │               [COURSE BADGE CHIP]                    │    ║
║  │                  Contact Our Team                    │    ║
║  │        Short paragraph description                   │    ║
║  └──────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════╣
║  CONTACT SECTION (2 columns)                                 ║
║  ┌──────────────────────┐  ┌───────────────────────────┐     ║
║  │  CONTACT INFO PANEL  │  │  CONTACT FORM             │     ║
║  │  (indigo background) │  │  (white card, shadow)     │     ║
║  │                      │  │                           │     ║
║  │  Group 13            │  │  [SUCCESS ALERT BANNER]   │     ║
║  │  Description text    │  │  (hidden by default)      │     ║
║  │                      │  │                           │     ║
║  │  ✉ Email Us          │  │  Full Name:               │     ║
║  │  syndicate@uni.edu   │  │  [__________________]     │     ║
║  │                      │  │                           │     ║
║  │  📍 Location         │  │  Email Address:           │     ║
║  │  Campus, Building 4B │  │  [__________________]     │     ║
║  │                      │  │                           │     ║
║  └──────────────────────┘  │  Message:                 │     ║
║                             │  [                   ]   │     ║
║                             │  [                   ]   │     ║
║                             │  [Send Message Button]   │     ║
║                             └───────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════╣
║  FOOTER (same as all pages)                                  ║
╚══════════════════════════════════════════════════════════════╝
```

**Layout Notes:**
- Contact section uses **2-column CSS Grid** (info panel left, form right)
- On mobile/tablet: stacks to **1 column**
- Success banner is **hidden (display: none)** on page load; shown by JavaScript on form submit

---

## Mobile View (≤ 768px) — All Pages

```
╔═══════════════════════════╗
║ [LOGO]             [☰]   ║  ← Hamburger toggle button
╠═══════════════════════════╣
║ [HERO CONTENT — stacked]  ║
║   Badge                   ║
║   Heading                 ║
║   Description             ║
║   [Button] [Button]       ║
║   [IMAGE — full width]    ║
╠═══════════════════════════╣
║ [CONTENT — full width]    ║
╠═══════════════════════════╣
║ [FOOTER — stacked]        ║
║   Logo                    ║
║   Nav links (centered)    ║
║   Copyright               ║
╚═══════════════════════════╝

When hamburger [☰] is clicked:
╔═══════════════════════════╗
║ [LOGO]             [✖]   ║
╠═══════════════════════════╣
║         Home              ║  ← Full-screen
║         About Us          ║     nav drawer
║         Contact           ║     slides in
╚═══════════════════════════╝
```

---

*Wireframes prepared by Member 2 — Frontend Designer, Group 13.*
