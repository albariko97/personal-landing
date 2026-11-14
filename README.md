# Álvaro Yepes Bonilla — Personal Landing & Portfolio

> Minimalist technical editorial portfolio built with **Astro**, strict **TypeScript**, **Tailwind CSS**, and **Astro Content Collections**. Designed with a dark mode aesthetic inspired by Linear and Raycast, zero client-side animation runtime bloat, and configured for static deployment to GitHub Pages.

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Astro 5](https://astro.build/) (Pure static output, zero hydration overhead)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with a custom Dark Mode Zinc-950 editorial palette and Electric Blue accent (`#3B82F6`)
- **Type Safety:** TypeScript in strict mode + Zod validation on Content Collections
- **Typography:** Inter (headings & editorial body) and JetBrains Mono (technical metadata, pills & status badges)
- **Deployment:** GitHub Actions deploying to GitHub Pages (`actions/deploy-pages@v4` + `withastro/action@v3`)

---

## 🚀 Local Development

```bash
# 1. Clone repository
git clone https://github.com/albariko97/personal-landing.git
cd personal-landing

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Type check with Astro
npm run check

# 5. Build production static bundle
npm run build

# 6. Preview production build locally
npm run preview
```

---

## ✍️ Content Authoring Guide

All project items and tracks are driven by type-checked Markdown collections in `src/content/`:

### 1. Adding an AI Project (`src/content/ai/*.md`)
Create a new `.md` file inside `src/content/ai/`:

```markdown
---
title: "Project Name"
description: "High-level summary of architecture, LLM pipelines, or ML model."
date: "YYYY-MM-DD"
tags: ["Python", "PyTorch", "MCP"]
status: "Production" # 'Production' | 'Research' | 'Prototype'
repoUrl: "https://github.com/alvaroyepes97/..." # optional
demoUrl: "https://..." # optional
featured: true # boolean
---

Detailed technical writeup and notes here...
```

### 2. Adding a Developer Tool (`src/content/tools/*.md`)
Create a new `.md` file inside `src/content/tools/`:

```markdown
---
title: "Tool Name"
description: "CLI or DevOps automation description."
date: "YYYY-MM-DD"
category: "CLI" # 'CLI' | 'Web App' | 'DevOps' | 'Open Source'
tags: ["TypeScript", "Terraform", "Azure"]
repoUrl: "https://github.com/alvaroyepes97/..." # optional
liveUrl: "https://..." # optional
featured: true
---

Tool capabilities and command documentation...
```

### 3. Adding a Music Track / Demo (`src/content/music/*.md`)
Create a new `.md` file inside `src/content/music/`:

```markdown
---
title: "Track Title"
subtitle: "Genre / Style"
releaseDate: "YYYY-MM-DD"
role: "Composition, Recording & Mix"
description: "Notes on recording chain, guitar tracking, and mix bus processing."
links:
  spotify: "https://open.spotify.com/..." # optional
  soundcloud: "https://soundcloud.com/..." # optional
  youtube: "https://youtube.com/..." # optional
  appleMusic: "https://music.apple.com/..." # optional
featured: true
---

Studio notes and session details...
```

---

## ⚙️ Configuration & Personalization

All personal bio details, contact links, email, and navigation anchors are centralized in a single file:

```
src/config/site.ts
```

Edit this file to update:
- Headline & Subheadline
- Biography paragraphs & Fast Facts
- Email address & social links (GitHub, LinkedIn, Spotify, SoundCloud, YouTube)
- Bento grid pillar skills

---

## 🌐 GitHub Pages Setup

1. Push your changes to the `main` branch.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select:
   ```
   GitHub Actions
   ```
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger on every push to `main` and deploy to:
   ```
   https://albariko97.github.io/personal-landing/
   ```

---

## 🔁 Custom Domain Migration (`alvaroyepesbonilla.com`)

When ready to switch to your custom apex domain:

1. In `astro.config.mjs`, update `site` and `base`:
   ```javascript
   export default defineConfig({
     site: 'https://alvaroyepesbonilla.com',
     base: '/', // Changed from '/personal-landing'
     output: 'static',
     // ...
   });
   ```
2. Create a file named `public/CNAME` containing only your domain:
   ```
   alvaroyepesbonilla.com
   ```
3. In your DNS provider (e.g. Cloudflare, Namecheap, Route 53), configure:
   - Apex `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record for `www` pointing to `albariko97.github.io`.
4. Commit and push to `main`.
