# Group 13 — JavaScript Documentation

**Prepared By:** Member 3 — JavaScript Developer  
**File:** `script.js`  
**Date:** June 2026

---

## 1. Overview

The `script.js` file is a single shared JavaScript module loaded on all three HTML pages via a `<script>` tag at the bottom of each page's `<body>`. It provides two main features:

1. **Mobile Navigation Drawer Toggle** — open/close the full-screen nav menu on small screens
2. **Contact Form Handler** — intercept submission, show a success banner, and reset the form

The file is structured so that all code waits for the DOM to be ready before executing, and defensive checks (`if` statements) ensure that code only runs when the required HTML elements are present on the current page.

---

## 2. Code Structure

```
script.js
│
└── DOMContentLoaded event listener
    │
    ├── Feature 1: Mobile Nav Drawer Toggle
    │   ├── Select #menuToggle and #navMenu
    │   ├── If both exist:
    │   │   ├── menuToggle.click  → toggle 'active' class on navMenu
    │   │   │                       change icon: ☰ ↔ ✖
    │   │   └── document.click   → close nav if click is outside menu/toggle
    │
    └── Feature 2: Contact Form Handler
        ├── Select #contactForm and #formSuccessAlert
        └── If contactForm exists:
            └── contactForm.submit → preventDefault()
                                     → read name, email, message values
                                     → console.log for debug
                                     → show #formSuccessAlert
                                     → scrollIntoView (smooth)
                                     → reset form
                                     → auto-hide alert after 6 seconds
```

---

## 3. Feature 1 — Mobile Navigation Toggle

### 3.1 Purpose
On screens wider than 768px, the navigation links are always visible in the header. On mobile devices, the nav links are hidden and a hamburger button (`☰`) is shown instead. Clicking the button slides in a full-screen nav drawer.

### 3.2 HTML Elements Used

| Element ID | Tag | Purpose |
|-----------|-----|---------|
| `#menuToggle` | `<button>` | Hamburger / close button |
| `#navMenu` | `<ul>` | The navigation list |

### 3.3 How It Works

**Step 1 — Toggle on button click:**
```javascript
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Update icon based on state
  if (navMenu.classList.contains('active')) {
    menuToggle.innerHTML = '&#10006;'; // ✖ Close icon
  } else {
    menuToggle.innerHTML = '&#9776;'; // ☰ Hamburger icon
  }
});
```
- The CSS class `.active` on `#navMenu` triggers `left: 0` (slides in from off-screen `left: -100%`)
- The icon changes to `✖` when open so users know they can close it

**Step 2 — Close on outside click:**
```javascript
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.innerHTML = '&#9776;';
  }
});
```
- Listens to every click on the `document`
- Uses `.contains()` to check if the click was inside the menu or on the toggle button
- If neither — and the menu is open — it closes automatically

### 3.4 Event Flow Diagram

```
User taps [☰]
     │
     ▼
menuToggle 'click' event fires
     │
     ▼
navMenu.classList.toggle('active')
     │
     ├─ [was closed] → class added → CSS: left: 0 (drawer slides in) → icon: ✖
     └─ [was open]  → class removed → CSS: left: -100% (drawer slides out) → icon: ☰

User taps anywhere else on screen
     │
     ▼
document 'click' event fires
     │
     ▼
Check: is click inside #navMenu? No
Check: is click on #menuToggle? No
Check: is navMenu.active? Yes
     │
     ▼
Remove 'active' → drawer closes
```

---

## 4. Feature 2 — Contact Form Handler

### 4.1 Purpose
The contact form on `contact.html` does not send data to a server (there is no backend). Instead, JavaScript intercepts the form submission, prevents the default browser behavior (which would reload the page), reads the input values for demonstration, and shows a custom success message.

### 4.2 HTML Elements Used

| Element ID | Tag | Purpose |
|-----------|-----|---------|
| `#contactForm` | `<form>` | The contact form element |
| `#userName` | `<input type="text">` | User's full name |
| `#userEmail` | `<input type="email">` | User's email address |
| `#userMessage` | `<textarea>` | User's message |
| `#formSuccessAlert` | `<div>` | Success banner (hidden by default via CSS) |

### 4.3 How It Works

```javascript
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload

  // Read input values
  const name    = document.getElementById('userName').value.trim();
  const email   = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('userMessage').value.trim();

  // Log for console demonstration
  console.log('--- Form Submission ---');
  console.log('Sender Name:', name);
  console.log('Sender Email:', email);
  console.log('Message:', message);

  // Show the success alert
  successAlert.style.display = 'block';
  successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Reset all form inputs
  contactForm.reset();

  // Auto-hide alert after 6 seconds
  setTimeout(() => {
    successAlert.style.display = 'none';
  }, 6000);
});
```

### 4.4 Event Flow Diagram

```
User fills form fields
     │
     ▼
User clicks [Send Message]
     │
     ▼
'submit' event fires on #contactForm
     │
     ▼
event.preventDefault()    ← stops page reload
     │
     ▼
Read: name, email, message from input values
     │
     ▼
console.log() all values  ← for demo/grading in DevTools
     │
     ▼
successAlert.style.display = 'block'  ← banner appears
successAlert.scrollIntoView()          ← page scrolls to banner
contactForm.reset()                    ← fields cleared
     │
     ▼
setTimeout 6000ms
     │
     ▼
successAlert.style.display = 'none'   ← banner auto-hides
```

---

## 5. Why `DOMContentLoaded`?

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // All code goes here
});
```

The script tag is placed at the **bottom of `<body>`** in all HTML files, which means the DOM is already parsed when the script runs. However, wrapping everything in `DOMContentLoaded` is an additional safety measure — it guarantees the HTML elements exist before we try to `getElementById()` them, preventing `null` reference errors.

---

## 6. Why Defensive `if` Checks?

```javascript
if (menuToggle && navMenu) { /* nav code */ }
if (contactForm) { /* form code */ }
```

The same `script.js` is loaded on **all three pages**. Not every page has a contact form — `index.html` and `about.html` don't. Without the `if (contactForm)` check, calling `.addEventListener` on `null` would throw a JavaScript error. The `if` check makes the script **safely reusable** on all pages.

---

*Documentation prepared by Member 3 — JavaScript Developer, Group 13.*
