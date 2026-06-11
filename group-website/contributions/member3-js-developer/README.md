# Member 3 – JS Developer & Architect

**Role:** JS Developer & Architect  
**Responsibility:** Designed the complete system architecture for the Group 13 website, defined the software hierarchy, and authored all JavaScript interactions including the mobile navigation drawer and contact form handler.

## Files in This Folder

| File | Description |
|------|-------------|
| `SYSTEM_ARCHITECTURE.md` | Full system architecture — software hierarchy, file structure, component diagrams, tech stack decisions |
| `JS_DOCUMENTATION.md` | Detailed documentation of every JavaScript function, event handler, and design decision |
| `script.js` | The JavaScript file authored by Member 3 |

## Contribution Summary

### As Architect:
- Designed the full `group-website/` project directory structure
- Defined the multi-page architecture: `index.html`, `about.html`, `contact.html`
- Established the single shared `style.css` and `script.js` pattern to avoid code duplication
- Documented the software system hierarchy, component relationships, and responsive strategy
- Verified cross-page navigation links and overall system integrity

### As JS Developer:
- Implemented the mobile hamburger nav toggle (open/close drawer)
- Implemented outside-click detection to auto-close the nav on mobile
- Wrote the contact form submit handler with `event.preventDefault()`
- Connected form inputs to a success alert banner (auto-hides after 6 seconds)
- Included `console.log` debug output for grading/demonstration
- Structured all code inside `DOMContentLoaded` to prevent race conditions
- Used defensive `if` checks so the script runs safely on all pages
