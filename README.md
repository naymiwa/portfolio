# Nayla Aqila Argia, Portfolio

A fast, minimalist portfolio website built with **Astro + Tailwind CSS**. All content
lives in simple, editable files, so you can update it anytime without touching the design.

Palette: `#396CDA` (blue) · `#D9554A` (coral) · `#F1CC87` (sand) · `#FFFFFF` (white).

---

## 🚀 Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:4321
npm run build    # build the production site into /dist
npm run preview  # preview the production build
```

Requires Node 18.20+, 20.3+, or 22+.

---

## ✏️ How to update your content

You almost never need to edit the layout. Just change these files:

### 1. Your basic info, bio, skills, socials
Edit **`src/data/site.ts`**, your name, role, tagline, quote, about text, quick facts,
stats, skills, social links, contact email, and the CV/PDF path.

### 2. Add / edit a project
Create a new file in **`src/content/projects/`**, e.g. `my-project.md`:

```md
---
title: 'My New Project'
description: 'One-line summary shown on the card.'
category: 'Web'          # Web | UI/UX | Hardware | Creative
date: '2025'             # used for ordering
order: 120               # higher = shown first
featured: true           # featured projects float to the top
cover: '/images/projects/my-project.jpg'   # optional, omit for a nice gradient
tags: ['HTML', 'CSS']
demoUrl: 'https://...'   # optional
repoUrl: 'https://...'   # optional
---

Longer description in Markdown here.
```

The card appears automatically, no layout changes needed. If a `cover` image is
missing, a clean gradient placeholder is shown instead.

### 3. Experience, Education, Community, Testimonials
Same idea, add a Markdown file in the matching folder:

| Section        | Folder                          |
| -------------- | ------------------------------- |
| Experience     | `src/content/experience/`       |
| Education       | `src/content/education/`         |
| Community/Events | `src/content/community/`       |
| Testimonials   | `src/content/testimonials/`     |

The **Testimonials** section hides itself automatically if there are no files.
Each file's front-matter fields are validated by `src/content/config.ts`.

### 4. Photos
- Put images in **`public/images/`**.
- **Portrait:** `public/images/portrait.jpg` (set in `site.ts`).
- **Gallery:** add files to `public/images/gallery/` and list them in
  **`src/data/gallery.ts`**. A tile whose image is missing simply hides itself.
- **Project covers:** `public/images/projects/…` referenced from each project file.
- **CV/PDF:** `public/Portfolio-Nayla-Aqila-Argia.pdf` (the “Download CV” button).

---

## 🌐 Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Netlify auto-detects the settings from `netlify.toml`
   (build: `npm run build`, publish: `dist`).
4. Deploy. Every `git push` redeploys automatically.

**Contact form:** it uses **Netlify Forms** (the `data-netlify` attribute), which works
automatically once deployed, submissions show up in your Netlify dashboard under **Forms**.
No backend needed.

Update the `site:` URL in `astro.config.mjs` to your final domain for correct SEO/canonical tags.

### Optional: no-code editing (Decap CMS)
If you'd later prefer editing content from a browser dashboard instead of files, you can
add [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) on top of the existing
`src/content/*` folders. Ask and it can be wired up.

---

## 🎨 Customize the design

- **Colors / fonts:** `tailwind.config.mjs` (`brand`, `coral`, `sand` scales + font families).
- **Global styles, custom cursor, animations:** `src/styles/global.css`.
- **Interactions (cursor, reveal, filters, lightbox, magnetic buttons):** the `<script>`
  in `src/layouts/BaseLayout.astro`. All motion respects `prefers-reduced-motion` and the
  custom cursor is disabled on touch devices.

## 📁 Structure

```
src/
├─ data/site.ts          # main editable content (bio, skills, socials…)
├─ data/gallery.ts       # gallery photo list
├─ content/              # projects / experience / education / community / testimonials
│  └─ config.ts          # content schemas
├─ components/           # Nav, Hero, About, Skills, Experience, Projects, …
├─ layouts/BaseLayout.astro
└─ pages/index.astro     # assembles the page
public/                  # images, favicon, CV PDF
```
