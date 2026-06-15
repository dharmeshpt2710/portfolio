# Portfolio Website Build Guide

A phase-by-phase specification for building a personal portfolio website in React.
This document is written to be handed to Claude Code as a working spec. Each phase
has a goal, concrete tasks, and acceptance criteria. Build one phase at a time and
verify before moving on.

---

## Project Overview

**Owner:** Dharmesh Patel
**Goal:** A clean, professional, single-page portfolio website that repositions a
QA-to-developer candidate as a Full Stack Developer, deployed live and linkable from
a resume and LinkedIn profile.

**Tech stack**
- React (JavaScript, not TypeScript, to keep the first build simple)
- Vite as the build tool and dev server
- Plain CSS with CSS variables for theming (no UI framework, to keep it lightweight and to demonstrate real CSS skill)
- Git and GitHub for version control
- GitHub Pages for free hosting

**Why this stack:** React is the most in-demand frontend framework in the target
market. Building the portfolio in React makes the site itself a demonstration of the
skill being sold. The owner's existing strength is Angular, so this is also a
deliberate learning project, which is a genuine and positive interview talking point.

**Author note for content generation:** Do not use em dashes anywhere in site copy.
Use commas, periods, or parentheses instead. Keep the tone warm, direct, and human,
not marketing-speak or obviously AI-generated.

---

## Candidate Profile (source of truth for all site content)

Use these facts to write accurate copy. Do not invent achievements beyond this.

**Headline:** Full Stack Developer and QA Automation Engineer, 4+ years experience.

**Location:** Anand, Gujarat, India. Open to hybrid, remote, or on-site.

**Current status:** Actively seeking full-time roles. Returned to India in 2026 after
a Canadian Post-Graduate Work Permit expired.

**Core experience**
- Close to 3 years at Innosoft Canada (Kitchener, Ontario) as QA Developer I on a large enterprise ERP product called Fusion (a .NET Web Forms application).
- Built and maintained a Playwright automation suite in TypeScript using the Page Object Model, including an AI-assisted test generation pipeline.
- Led a Selenium to Playwright migration.
- Performance testing with k6, accessibility testing to WCAG standards with NVDA, API testing with Postman and Swagger.
- Root cause analysis through IIS logs and server configuration.
- Mentored a junior colleague across a timezone gap. Documented knowledge in Guru cards.

**Earlier development experience**
- Concept Learning: Angular migration work using NGRX for state management.
- InheritChain: freelance full stack developer on the MEAN stack (MongoDB, Express, Angular, Node.js).

**Education:** Post-Graduate diploma, Conestoga College, Canada.

**Technical skills**
- Frontend: React (learning, this project), Angular, TypeScript, JavaScript, HTML, CSS, NGRX
- Backend: Node.js, Express, MongoDB
- QA and Automation: Playwright, Selenium, k6, Postman, Swagger, WCAG accessibility
- Tools and platforms: Git, GitHub, Azure DevOps, Jira, CI/CD pipelines, SQL Server
- AI-assisted development: GitHub Copilot, MCP servers for test generation

**Contact and links** (fill in actual values during build)
- Email: [to be provided]
- GitHub: <https://github.com/dharmeshpt2710>
- LinkedIn: [URL to be provided]
- Resume: [link or PDF to be added to the site]

---

## Design System

A dark theme, modern and understated. Define these as CSS variables in `:root` and
use them everywhere rather than hardcoding values.

**Color palette**
- Background: `#0f1419` (near-black, slightly blue)
- Surface or card: `#1a1f27`
- Border or divider: `#2a2f38`
- Primary text: `#ffffff`
- Body text: `#b0b8c0`
- Muted text: `#7a828c`
- Accent gradient start: `#4fc3f7` (light blue)
- Accent gradient end: `#15808c` (teal)
- Accent solid: `#15808c`

**Typography**
- Use a clean system font stack or a Google Font such as Inter.
- Headings bold and clearly larger than body. Body line-height around 1.7 for readability.

**Layout**
- Content constrained to a max width of about 800 to 960px, centered with auto margins.
- Generous vertical padding between sections (around 60 to 80px).
- Mobile-first and fully responsive. Must look correct on a phone.

**Tone of the visual design:** professional and calm. Avoid clutter, heavy animation,
or anything that distracts from the content. One subtle gradient accent on the name
or headings is enough personality.

---

## Phase 0: Environment (COMPLETE)

Already done. Listed here for completeness.
- Node.js and npm installed and verified.
- Git installed and verified.
- VS Code installed.
- GitHub account exists.
- On Windows, PowerShell script execution policy resolved (or using Command Prompt).

---

## Phase 1: Scaffold (COMPLETE)

Already done.
- React app scaffolded with `npm create vite@latest portfolio -- --template react`.
- Dependencies installed with `npm install`.
- Dev server runs with `npm run dev` and serves at `http://localhost:5173/`.
- Default `App.jsx` replaced with a five-section skeleton: hero, about, skills, projects, contact.
- Base CSS applied: centered max-width column, dark theme, gradient name in hero.

**Current state:** A working single-page skeleton with real hero and about content,
and placeholder "Coming soon" text in skills, projects, and contact.

---

## Phase 2: Component Structure

**Goal:** Break the single `App.jsx` into clean, separate components, the way a real
React app is organized. This makes the codebase look professional and maintainable.

**Tasks**
1. Create a `src/components/` folder.
2. Extract each section into its own component file:
   - `Hero.jsx`
   - `About.jsx`
   - `Skills.jsx`
   - `Projects.jsx`
   - `Contact.jsx`
   - `Navbar.jsx` (new, a simple top navigation)
   - `Footer.jsx` (new)
3. Each component returns its own section markup and is imported into `App.jsx`.
4. `App.jsx` becomes a clean composition: Navbar, then each section, then Footer.
5. Move section-specific CSS into either component-level CSS files or keep a single organized `App.css`. Pick one approach and stay consistent.

**Acceptance criteria**
- The site looks identical to before, but the code is split into components.
- `App.jsx` is short and readable, just imports and a list of components.
- No console errors in the browser developer tools.

---

## Phase 3: Navigation and Smooth Scroll

**Goal:** A sticky top navbar that links to each section and scrolls smoothly.

**Tasks**
1. Build `Navbar.jsx` with the owner's name or initials on the left and links on the right: About, Skills, Projects, Contact.
2. Each section in the page gets an `id` (for example `id="about"`).
3. Nav links use anchor hrefs (`#about`) so clicking scrolls to the section.
4. Add `scroll-behavior: smooth;` in CSS for smooth scrolling.
5. Make the navbar sticky at the top (`position: sticky; top: 0;`) with a subtle background so it stays readable over content.
6. Make the navbar responsive: on mobile, collapse to a simple stacked or hamburger menu.

**Acceptance criteria**
- Navbar stays visible while scrolling.
- Clicking a link smoothly scrolls to the right section.
- Navbar is usable on a narrow mobile screen.

---

## Phase 4: Skills Section

**Goal:** Replace the Skills placeholder with a real, scannable skills layout.

**Tasks**
1. Group skills into categories: Frontend, Backend, QA and Automation, Tools and Platforms.
2. Render each category with its skills as tags or pills (small rounded labels), or as a clean grid.
3. Pull the skill list from the Candidate Profile section above.
4. Style the tags using the design system colors. Accent border or subtle surface background.
5. Keep it honest: React is listed as a current and growing skill, Angular as the established strength.

**Acceptance criteria**
- Skills are grouped and easy to scan in seconds.
- Layout is responsive and wraps cleanly on mobile.
- No skill is invented beyond the profile.

---

## Phase 5: Projects Section

**Goal:** A project card layout, even if it starts with one or two entries. This is
the most important section for a portfolio, so it must look intentional.

**Tasks**
1. Build a reusable `ProjectCard` component that takes props: title, description, tech tags, GitHub link, and optional live demo link.
2. Render a responsive grid of project cards.
3. Seed it with the projects that exist or are planned (see Phase 8 for what to build):
   - This portfolio website itself (React, Vite, deployed on GitHub Pages). This is a legitimate first project.
   - Placeholder cards for upcoming projects, clearly styled, not fake. For example a "Full Stack Bug Tracker" marked as in progress.
4. Each card links to its GitHub repository and live demo where available.
5. Hover state on cards for a subtle lift or border highlight.

**Acceptance criteria**
- At least the portfolio-itself project is shown as a real, linked card.
- Cards are responsive and consistent.
- The grid does not look empty or broken with only one or two cards.

---

## Phase 6: Contact Section and Footer

**Goal:** Make it easy to reach the owner and give the page a clean close.

**Tasks**
1. Replace the Contact placeholder with real contact links: email (mailto link), GitHub, LinkedIn.
2. Use clear icons or labeled links. A simple icon row is enough, no contact form needed for v1.
3. Optionally add a "Download Resume" button linking to a PDF placed in the `public/` folder.
4. Build a simple `Footer.jsx`: copyright line with the current year and a short "Built with React" note.

**Acceptance criteria**
- Email link opens the mail client. GitHub and LinkedIn links open in a new tab.
- Resume downloads or opens if added.
- Footer shows at the bottom on all screen sizes.

---

## Phase 7: Responsive Polish and Accessibility

**Goal:** Make sure the site looks correct on every screen size and is accessible.
The owner has real WCAG accessibility experience, so this section should reflect that
standard and is itself a talking point.

**Tasks**
1. Test at mobile (around 375px), tablet (around 768px), and desktop widths. Fix any overflow, cramped spacing, or broken layout.
2. Ensure all text has sufficient color contrast against the dark background.
3. Add meaningful `alt` text to any images.
4. Use semantic HTML: proper heading order (one `h1`, then `h2` per section), `nav`, `section`, `footer` elements.
5. Make sure all interactive elements are keyboard reachable and have visible focus states.
6. Set the page title and a meta description in `index.html`.

**Acceptance criteria**
- No horizontal scrolling on mobile.
- Headings follow a logical order.
- Keyboard navigation works and focus is visible.
- Lighthouse accessibility score is strong (aim 90+).

---

## Phase 8: Showable Projects to Build (parallel track)

**Goal:** The portfolio needs real content. Since work code from Innosoft is
proprietary and cannot be shared, build small public projects that connect to the
owner's genuine experience. Build one first, add to the portfolio, then iterate.

**Recommended first project: Full Stack Bug or Test-Case Tracker**
- Why it fits: it ties directly to the QA-to-developer story, uses the owner's real stack, and is a self-contained, demonstrable app.
- Stack: React frontend, Node.js and Express backend, MongoDB or a simple database.
- Features: create, list, update, and close bug or test-case records, with status and priority fields, and basic filtering.
- Deploy the frontend and provide a live demo link.

**Recommended second project: Playwright Test Suite on a Public Demo Site**
- Why it fits: it showcases the owner's strongest skill (automation) and is publicly shareable because it tests a public demo application, not proprietary code.
- Content: a clean Page Object Model structure, a handful of meaningful end-to-end tests, and a README explaining the approach.
- This is high signal for any QA or full stack role.

**For each project**
- Create a dedicated public GitHub repository.
- Write a clear README: what it is, the stack, how to run it, and a screenshot or demo link.
- Add it as a card in the portfolio Projects section.

---

## Phase 9: Deploy to GitHub Pages

**Goal:** Take the site live at a public URL.

**Tasks**
1. Create a new public GitHub repository for the portfolio (for example `portfolio` or `username.github.io`).
2. Initialize git in the project if not already done, commit all work.
3. Push the project to the GitHub repository.
4. Install the deployment helper: `npm install gh-pages --save-dev`.
5. In `vite.config.js`, set the `base` to the repository name (for example `base: '/portfolio/'`) so asset paths resolve correctly on Pages.
6. In `package.json`, add scripts:
   - `"predeploy": "npm run build"`
   - `"deploy": "gh-pages -d dist"`
7. Run `npm run deploy`.
8. In the GitHub repository settings, under Pages, confirm the source is the `gh-pages` branch.
9. Visit the published URL (`https://username.github.io/portfolio/`) and verify everything works.

**Acceptance criteria**
- The site is reachable at a public URL.
- All sections, links, images, and styles work on the live site, not just locally.
- Re-running `npm run deploy` after changes updates the live site.

---

## Phase 10: Finishing Touches (optional)

- Custom domain: buy a domain and point it at GitHub Pages for a professional URL.
- Add the live URL to the resume, LinkedIn profile, and GitHub profile README.
- Add a GitHub profile README that links to the live portfolio.
- Light analytics if desired.
- A subtle scroll-reveal animation on sections, kept minimal.

---

## Build Order Summary

1. Phase 0 and 1: environment and scaffold (DONE)
2. Phase 2: split into components
3. Phase 3: navigation and smooth scroll
4. Phase 4: skills section
5. Phase 5: projects section
6. Phase 6: contact and footer
7. Phase 7: responsive and accessibility polish
8. Phase 9: deploy live
9. Phase 8: build showable projects (run in parallel, add as they finish)
10. Phase 10: finishing touches

Get the site live (through Phase 9) with at least the portfolio-itself project
showing, then keep adding real projects from Phase 8. A live site with one solid
project beats an unfinished perfect site that never ships.

---

## Working Notes for Claude Code

- Work one phase at a time. After each phase, run the dev server and confirm it works before continuing.
- Keep components small and readable. Prefer clarity over cleverness.
- Use the design system variables, do not hardcode colors.
- Do not use em dashes in any site copy.
- Do not invent profile facts. If something is unknown (a real GitHub link, email), leave a clearly marked placeholder and ask.
- Commit to git after each working phase with a clear message.