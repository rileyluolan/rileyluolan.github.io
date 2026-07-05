# Riley Luo — Digital Garden

A quiet personal homepage and public notebook for spatial AI, embodied intelligence, multimodal systems, research engineering, and learning in public. Built with Astro, TypeScript, Markdown/MDX, and Content Collections.

## Local development

Requires Node.js 22 or newer (Node 22 is used in CI) and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:4321`.

Run a production build and preview it locally:

```bash
npm run build
npm run preview
```

`npm run build` includes `astro check`, so type and content-schema errors fail the build.

## Deploy to GitHub Pages

1. Create a public repository named exactly `rileyluolan.github.io` under the `rileyluolan` account.
2. Push this project to its `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. The workflow at `.github/workflows/deploy.yml` builds and deploys every push to `main`.
6. After the first successful workflow, visit `https://rileyluolan.github.io/`.

The site URL is already configured in `astro.config.mjs`. Because this is the account-level repository, no `base` path is needed.

## Add a Note

1. Copy `templates/note-template.md` into `src/content/notes/` and give it a URL-friendly filename.
2. Fill in the frontmatter. Valid categories are `Research Notes`, `Paper Reading`, `Engineering Logs`, `Career & Learning`, and `Personal Systems`; valid statuses are `note`, `working`, and `selected`.
3. Write the body in Markdown or rename the file to `.mdx` when components are needed.
4. Run `npm run dev` and preview the page.
5. Set `draft: false` when it is ready, then commit and push. GitHub Actions deploys it automatically.

Set `featured: true` (and optionally `featuredOrder`) to show a note on the homepage. Draft notes are excluded from routes, lists, search, RSS, and production output.

## Add a Project

Copy `templates/project-template.md` into `src/content/projects/`, complete its frontmatter and body, and change `draft` to `false` when ready. The schema in `src/content/config.ts` already supports summaries, status, dates, links, cover images, highlights, and lessons learned. The public Projects page intentionally remains an empty state until real project entries are ready to be presented.

## Edit personal content

- Homepage introduction: `src/pages/index.astro`
- Now content and update label: `src/content/pages/now.md`
- About page and email placeholder: `src/pages/about.astro`
- Navigation links: `src/components/Header.astro`
- Site title, description, GitHub URL: `src/config/site.ts`
- Colors, typography, and global spacing: `src/styles/global.css`

## Content and publishing notes

- Markdown and MDX are supported.
- Math uses KaTeX syntax; fenced `mermaid` blocks render diagrams.
- Heading anchors and an automatic table of contents are generated for article sections.
- Code blocks receive a client-side copy button.
- The RSS feed is `/rss.xml`; the sitemap is generated during build.
- There is no database, CMS, analytics, tracking, login, or comment system.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Check and create the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
