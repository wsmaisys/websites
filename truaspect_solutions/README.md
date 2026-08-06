# Truaspect Solutions

This project is a Vite-based landing page for Truaspect Solutions. It uses Tailwind CSS and Three.js for the animated visuals.

## 1. Prerequisites

Make sure you have the following installed:

- Node.js 18+ and npm
- Git

## 2. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

## 3. Run locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:3000
```

## 4. Build for production

Create a production build:

```bash
npm run build
```

The generated files will be placed in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## 5. Deploy to GitHub Pages

### Option A: Deploy with GitHub Actions (recommended)

1. Push this project to a GitHub repository.
2. In the repository, go to Settings > Pages.
3. Under Build and deployment, choose GitHub Actions.
4. Create a workflow file at:

```text
.github/workflows/deploy.yml
```

Add this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit and push the workflow file.
6. Wait for the GitHub Action to finish.
7. Open your GitHub Pages URL, which for this project will be:

```text
https://wsmaisys.github.io/websites/truaspect_solutions
```

### Important note for GitHub Pages project sites

Because this site is published under the `/websites/truaspect_solutions` path, update the Vite base path in `vite.config.js` to:

```js
export default defineConfig({
  base: "/websites/truaspect_solutions/",
});
```

## 6. Troubleshooting

- If the site loads with broken asset paths, check the `base` value in `vite.config.js`.
- If the deployment fails, review the GitHub Actions log for build errors.
- If you see a blank page, confirm that the build output is being published from the `dist` folder.
