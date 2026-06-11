# Group 13 — GitHub Repository Management Guide

**Prepared By:** Member 1 — Team Lead & GitHub Repo Manager  
**Date:** June 2026  
**Repository:** Group 13 Static Website

---

## 1. Repository Overview

Member 1 is responsible for the GitHub repository from creation to final submission. This includes:
- Creating and configuring the repo
- Inviting team members as collaborators
- Managing branches and merges
- Resolving conflicts
- Ensuring the final codebase is clean and submission-ready

---

## 2. Repository Setup Steps

### 2.1 Creating the Repository
1. Go to [github.com](https://github.com) and log in
2. Click **New repository** (top right `+` → New repository)
3. Fill in the details:
   - **Repository name:** `group13-website` (or agreed name)
   - **Description:** `Group 13 Static Website — University Assignment`
   - **Visibility:** Public *(so lecturer can view)*
   - **Initialize with:** ✅ Add a README file
4. Click **Create repository**

### 2.2 Inviting Team Members as Collaborators
1. Go to the repo → **Settings** → **Collaborators**
2. Click **Add people**
3. Search by GitHub username and invite each member:
   - Member 2 — Frontend Designer
   - Member 3 — JS Developer & Architect
   - Member 4 — Content Writer
   - Member 5 — QA & Reviewer
4. Each member must **accept the invitation** from their email or GitHub notifications

---

## 3. Branching Strategy

To allow independent pushes without conflicts, the team follows this branch workflow:

```
main                    ← Protected branch — final, reviewed code only
│
├── member1/setup       ← Member 1: index.html, README.md, repo setup
├── member2/styles      ← Member 2: style.css, design contributions
├── member3/js-arch     ← Member 3: script.js, architecture docs
├── member4/content     ← Member 4: about.html, contact.html, content guide
└── member5/qa          ← Member 5: QA report and review docs
```

### Branch Rules (set by Member 1 in Settings → Branches)
- `main` branch requires **pull request review** before merging *(optional for student projects)*
- Each member pushes to their own branch, then creates a **Pull Request** to `main`

---

## 4. How Each Member Pushes Their Code

### Step 1 — Clone the repo (first time only)
```bash
git clone https://github.com/[username]/group13-website.git
cd group13-website
```

### Step 2 — Create your personal branch
```bash
git checkout -b member2/styles
```

### Step 3 — Add your files
```bash
git add style.css contributions/member2-frontend-designer/
```

### Step 4 — Commit with a clear message
```bash
git commit -m "Add: Member 2 CSS stylesheet and design system docs"
```

### Step 5 — Push to GitHub
```bash
git push origin member2/styles
```

### Step 6 — Create a Pull Request
- Go to the GitHub repo in browser
- Click **Compare & pull request**
- Write a brief description of what you added
- Assign **Member 1** as the reviewer
- Click **Create pull request**

---

## 5. Member 1's Own Push

Member 1 pushes directly to `main` (or their own branch) with:

```bash
git add index.html README.md contributions/member1-github-manager/
git commit -m "Add: Member 1 home page, README, and GitHub management docs"
git push origin main
```

---

## 6. Merging All Contributions (Final Step)

Once all members have created their Pull Requests:

1. Member 1 reviews each PR
2. Resolves any merge conflicts (usually none since members touch different files)
3. Merges each PR into `main` one by one
4. Final repo on `main` branch contains all contributions

```
Final main branch structure:
group13-website/
├── index.html               ← Member 1
├── about.html               ← Member 4
├── contact.html             ← Member 4
├── style.css                ← Member 2
├── script.js                ← Member 3
├── README.md                ← Member 1
├── images/
│   └── image.jpg
└── contributions/
    ├── member1-github-manager/
    ├── member2-frontend-designer/
    ├── member3-js-developer/
    ├── member4-content-writer/
    └── member5-qa-reviewer/
```

---

## 7. Commit Message Convention

Use this format for all commits so the history is clean and readable:

| Prefix | Use For |
|--------|---------|
| `Add:` | New files being added |
| `Update:` | Changing existing content |
| `Fix:` | Correcting a bug or broken link |
| `Docs:` | Documentation only changes |

**Examples:**
```
Add: Member 3 script.js and JS documentation
Update: Member 2 style.css responsive breakpoints
Docs: Member 5 QA test report final version
Fix: Broken nav link on contact.html
```

---

## 8. Repository Links Checklist

- [ ] Repo created and set to **Public**
- [ ] All 5 members added as **Collaborators**
- [ ] Each member has **cloned** the repo
- [ ] Each member has **pushed** their files
- [ ] All PRs **reviewed and merged** by Member 1
- [ ] Final `main` branch contains all files
- [ ] Submission URL shared with lecturer

---

*GitHub management guide prepared by Member 1 — Team Lead & GitHub Repo Manager, Group 13.*
