# Hassan Anjum — Portfolio

A personal developer portfolio built with Next.js and Tailwind CSS: dark
navy theme, pink/magenta accent, sidebar navigation, hero intro, filterable
project grid, and a contact form.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What to edit

Almost everything lives in one place: **`src/data/portfolio.js`**. Update
your name, tagline, email, GitHub/LinkedIn URLs, experience, and project
list there — the components read from it automatically.

Things marked `TODO` in that file still need your input:
- `profile.github` / `profile.linkedin` — currently empty
- `experience[].period` — dates for each role
- `achievements` — currently a placeholder, add your real ones
- `profile.resumeUrl` — drop a PDF at `public/resume.pdf` (or update the path)
- `profile.heroImage` — drop your hero image at `public/hero-portrait.png`
  (the hero currently shows a placeholder box with instructions)

## Wiring up the contact form

`src/pages/api/contact.js` currently just logs submissions to the server
console so the form works end-to-end locally. To actually receive emails,
connect it to a service like Resend, SendGrid, or Nodemailer + an app
password, and set any required keys in `.env.local`.

## Structure

```
src/
  components/   UI pieces (Hero, Sidebar, Projects, Contact, etc.)
  data/         portfolio.js — all your content lives here
  pages/        routes (index.js is the homepage)
  styles/       globals.css
public/         static assets (resume, hero image, favicon)
```
