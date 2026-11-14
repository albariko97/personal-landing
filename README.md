# Álvaro Yepes Bonilla — Personal Landing & Portfolio

> Minimalist technical editorial portfolio built with **Astro 5**, strict **TypeScript**, **Tailwind CSS**, and **Astro Content Collections**. Featuring native **English & Spanish internationalization (i18n)**, a comfortable **Midnight Slate night-reading palette**, and dedicated showcases for **Full Stack/Platform Engineering**, **AI Systems**, **Music Recording**, and **PADI Open Water Scuba Diving**.

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Astro 5](https://astro.build/) (Static output, zero hydration overhead, native i18n)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with a gentle Midnight Slate palette (`#0B0F17`) and Electric Blue (`#3B82F6`) / Oceanic Cyan (`#0EA5E9`) accents
- **Internationalization (i18n):**
  - English: `https://albariko97.github.io/personal-landing/`
  - Spanish: `https://albariko97.github.io/personal-landing/es/`
  - Navbar language toggle (`[ EN | ES ]`) preserving anchors
- **Content Collections:** Type-checked Markdown schemas with Zod for `ai`, `tools`, `music`, and `diving`
- **Deployment:** Automated GitHub Actions deploying to GitHub Pages

---

## 🖼️ Personal Assets Guide (Drop-in Ready)

You can personalize the site by placing your photos in the following designated folders:

| Asset | Target Path | Recommended Spec | Behavior |
| :--- | :--- | :--- | :--- |
| **Profile Portrait** | `public/images/profile.jpg` | 1:1 or 3:4 portrait, min. 800x800px | Renders in the Hero section. Includes an automatic SVG technical avatar fallback if empty. |
| **Scuba Expeditions** | `public/images/diving/` | 16:9 or 4:3 underwater photos | Highlight marine biodiversity and coral reef diving in the Diving section. |
| **Music / Studio** | `public/images/music/` | Studio desk, guitar, or audio interface shots | Visual companion to original tracks. |
| **Project Previews** | `public/images/projects/` | Screenshots, terminal outputs, or diagrams | Previews for AI tools and CLI utilities. |

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Type check with Astro
npm run check

# 4. Build production static bundle
npm run build

# 5. Preview production build locally
npm run preview
```

---

## ✍️ Content Authoring Guide

All entries live inside `src/content/` with `lang: 'en' | 'es'`:

### 1. AI Projects (`src/content/ai/*.en.md` / `*.es.md`)
```markdown
---
title: "Project Name"
description: "High-level summary of architecture, LLM pipelines, or ML model."
date: "YYYY-MM-DD"
tags: ["Python", "TensorFlow", "MCP"]
status: "Production" # 'Production' | 'Research' | 'Prototype'
repoUrl: "https://github.com/alvaroyepes97/..."
demoUrl: "https://..."
featured: true
lang: "en" # 'en' | 'es'
---
```

### 2. Developer Tools (`src/content/tools/*.en.md` / `*.es.md`)
```markdown
---
title: "Tool Name"
description: "CLI or DevOps automation description."
date: "YYYY-MM-DD"
category: "CLI" # 'CLI' | 'Web App' | 'DevOps' | 'Open Source'
tags: ["TypeScript", "Terraform", "Azure"]
repoUrl: "https://github.com/alvaroyepes97/..."
liveUrl: "https://..."
featured: true
lang: "en"
---
```

### 3. Music Tracks (`src/content/music/*.en.md` / `*.es.md`)
```markdown
---
title: "Track Title"
subtitle: "Genre / Style"
releaseDate: "YYYY-MM-DD"
role: "Composition, Recording & Mix"
description: "Notes on recording chain, guitar tracking, and mixdown."
links:
  spotify: "https://open.spotify.com/..."
  soundcloud: "https://soundcloud.com/..."
  youtube: "https://youtube.com/..."
featured: true
lang: "en"
---
```

### 4. Scuba Diving Log (`src/content/diving/*.en.md` / `*.es.md`)
```markdown
---
title: "Expedition Title"
location: "Location, Country"
certification: "PADI Open Water Diver"
date: "YYYY-MM-DD"
maxDepth: "18m / 60ft"
visibility: "25m+ (Crystal Clear)"
waterTemp: "28°C / 82°F"
highlights: ["Coral Wall", "Eagle Rays", "Buoyancy Control"]
description: "Dive notes, conditions, and marine observations."
featured: true
lang: "en"
---
```

---

## ⚙️ Configuration & Translations

- **Global site links & metadata:** `src/config/site.ts`
- **Bilingual dictionaries (English & Spanish UI strings):** `src/i18n/ui.ts`

---

## 🌐 GitHub Pages Deployment

1. Ensure GitHub Pages **Source** is set to **GitHub Actions** in **Settings** > **Pages**.
2. Push changes to `main`.
3. The site deploys automatically to:
   - English: `https://albariko97.github.io/personal-landing/`
   - Spanish: `https://albariko97.github.io/personal-landing/es/`
