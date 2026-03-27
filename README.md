# sasilva1998.github.io

React landing page template for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Edit your content

Most of the content lives in `src/data/siteData.js`.

- Change your name, intro, latest project, papers, and passions there.
- Replace `public/profile-placeholder.svg` with your own image when ready.
- If you use a different filename for your image, update the `profileImage` path in `src/data/siteData.js`.

## Build and deploy

```bash
npm run build
```

The repo includes a GitHub Actions workflow that builds the site with Vite and deploys it to GitHub Pages when you push to `main`.

In the repository Pages settings, set the source to `GitHub Actions`.

## Files

- `src/App.jsx`: React layout and sections
- `src/styles.css`: visual design and responsive layout
- `src/data/siteData.js`: placeholder content to customize later
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow
