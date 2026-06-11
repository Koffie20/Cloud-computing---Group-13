# Group 13 — QA Test Report

**Prepared By:** Member 5 — QA & Reviewer  
**Date:** June 2026  
**Project:** Group 13 Static Website  
**Pages Tested:** `index.html`, `about.html`, `contact.html`

---

## 1. Test Summary

| Category | Total Tests | Passed | Failed | Notes |
|----------|-------------|--------|--------|-------|
| Navigation & Links | 9 | 9 | 0 | All links resolve correctly |
| Layout & Structure | 8 | 8 | 0 | Semantic HTML verified |
| Responsive Design | 6 | 6 | 0 | Desktop, tablet, mobile tested |
| JavaScript — Mobile Nav | 4 | 4 | 0 | Toggle and outside-click work |
| JavaScript — Contact Form | 5 | 5 | 0 | Validation, alert, reset work |
| Content & Copy | 5 | 5 | 0 | All placeholder notes identified |
| **TOTAL** | **37** | **37** | **0** | ✅ All tests passed |

---

## 2. Navigation & Links Tests

| # | Test Case | Expected Result | Actual Result | Status |
|---|-----------|----------------|---------------|--------|
| N1 | Click `Home` nav link from `index.html` | Stays on home page | ✅ Stays on home | PASS |
| N2 | Click `About Us` nav link from `index.html` | Navigates to `about.html` | ✅ Correct | PASS |
| N3 | Click `Contact` nav link from `index.html` | Navigates to `contact.html` | ✅ Correct | PASS |
| N4 | Click logo from `about.html` | Returns to `index.html` | ✅ Correct | PASS |
| N5 | `active` class on nav link matches current page | Current page link highlighted | ✅ Correct on all pages | PASS |
| N6 | Footer `Home` link | Goes to `index.html` | ✅ Correct | PASS |
| N7 | Footer `About Us` link | Goes to `about.html` | ✅ Correct | PASS |
| N8 | Footer `Contact` link | Goes to `contact.html` | ✅ Correct | PASS |
| N9 | Hero "Meet The Team" button | Goes to `about.html` | ✅ Correct | PASS |

---

## 3. Layout & Structure Tests

| # | Test Case | Expected Result | Actual Result | Status |
|---|-----------|----------------|---------------|--------|
| L1 | Each page has exactly one `<h1>` | One `<h1>` per page | ✅ Confirmed (1 per page) | PASS |
| L2 | Header is present on all pages | Shared header visible | ✅ Present on all 3 pages | PASS |
| L3 | Footer is present on all pages | Shared footer visible | ✅ Present on all 3 pages | PASS |
| L4 | Home: 3 feature cards render in grid | Cards visible side by side | ✅ Grid renders correctly | PASS |
| L5 | About: 5 member cards render | All 5 cards visible | ✅ All 5 render | PASS |
| L6 | Contact: 2-column layout (info + form) | Side-by-side columns | ✅ Correct layout | PASS |
| L7 | Hero image loads on home page | Image displays with rounded corners | ✅ Image loads | PASS |
| L8 | `style.css` and `script.js` linked on all pages | No style/script errors | ✅ Linked correctly on all pages | PASS |

---

## 4. Responsive Design Tests

| # | Viewport | Test Case | Expected Result | Status |
|---|---------|-----------|----------------|--------|
| R1 | Desktop (>992px) | Hero section layout | 2-column grid (text left, image right) | PASS |
| R2 | Tablet (≤992px) | Hero section layout | Single column, text centered | PASS |
| R3 | Tablet (≤992px) | Contact layout | Info panel above form | PASS |
| R4 | Mobile (≤768px) | Nav links visible | Nav links hidden, hamburger `☰` shown | PASS |
| R5 | Mobile (≤768px) | Footer layout | Logo, links, copyright stack vertically | PASS |
| R6 | Mobile (≤768px) | Feature cards | Each card full-width, stacked | PASS |

---

## 5. JavaScript — Mobile Navigation Tests

| # | Test Case | Expected Result | Actual Result | Status |
|---|-----------|----------------|---------------|--------|
| J1 | Click `☰` hamburger button | Nav drawer slides in from left | ✅ Drawer opens | PASS |
| J2 | Click `✖` button when nav is open | Nav drawer slides out | ✅ Drawer closes | PASS |
| J3 | Click outside nav while open | Nav closes automatically | ✅ Auto-closes | PASS |
| J4 | Hamburger icon changes on open/close | `☰` → `✖` → `☰` | ✅ Icon changes correctly | PASS |

---

## 6. JavaScript — Contact Form Tests

| # | Test Case | Expected Result | Actual Result | Status |
|---|-----------|----------------|---------------|--------|
| F1 | Submit with empty Name field | Browser shows required field warning | ✅ Validation triggers | PASS |
| F2 | Submit with invalid email format | Browser shows email format warning | ✅ Validation triggers | PASS |
| F3 | Submit with all fields filled | Success banner appears, form resets | ✅ Banner shows, fields cleared | PASS |
| F4 | Success banner auto-hides | Banner disappears after ~6 seconds | ✅ Hides after 6s | PASS |
| F5 | Form submission logged to console | Name, Email, Message appear in DevTools | ✅ Logs correctly | PASS |

---

## 7. Content & Copy Review

| # | Check | Finding | Status |
|---|-------|---------|--------|
| C1 | Course title placeholder present | Course title `Introduction to Cloud Computing CSBC 252` is set on all pages | ✅ Fixed |
| C2 | Member names are placeholders | Members 1–5 use `Member 1`, `Member 2`... — needs real names | ⚠️ Needs update |
| C3 | Email is placeholder | `2425402613@live.gctu.edu.gh` is now set on the contact page | ✅ Fixed |
| C4 | Location is placeholder | `University Campus, Building 4B` — needs real info | ⚠️ Needs update |
| C5 | Copyright year | `© 2026` — correct for current year | ✅ Correct |

---

## 8. Known Issues & Recommendations

| Priority | Issue | Recommendation |
|----------|-------|---------------|
| Medium | Member names/roles are placeholder | Update `about.html` with real member names and roles before submission |
| Low | Contact email is placeholder | Update `contact.html` email with real group email address | ✅ Fixed |
| Low | Course badge says "INSERT" | Replace `[INSERT YOUR COURSE TITLE HERE]` with actual course name in all 3 pages | ✅ Fixed |
| Info | Form doesn't actually send data | Form now uses `mailto:` to automatically route to all 5 team member emails. | ✅ Fixed |

---

## 9. Browser Compatibility Notes

| Browser | Version Tested | Result |
|---------|---------------|--------|
| Google Chrome | Latest | ✅ Fully functional |
| Mozilla Firefox | Latest | ✅ Fully functional |
| Microsoft Edge | Latest | ✅ Fully functional |
| Safari (macOS) | Latest | ✅ Functional (`backdrop-filter` requires `-webkit-` prefix — already applied) |

---

## 10. Final Verdict

> **✅ APPROVED FOR SUBMISSION**  
> All 37 test cases passed. The website is structurally sound, responsive, and fully functional. The only action items are replacing placeholder content (member names, course title, email) with real information before final submission.

---

*Test report prepared by Member 5 — QA & Reviewer, Group 13.*
