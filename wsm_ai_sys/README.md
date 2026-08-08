# WSM AI SYS

Single-page site and demo for WSM AI SYS — web development and practical AI solutions for small businesses.

What’s here

- `index.html` — Main site (hero, services, recent work, contact). Uses Three.js for background visuals.
- `DESIGN.md` — Notes and design decisions.
- `sitemap.xml`, `robots.txt` — SEO helpers.

Live demo: https://wsmaisys.github.io/

Local preview

Serve this folder to enable all features (Three.js, AJAX, and relative asset loading):

```bash
cd wsm_ai_sys
python -m http.server 8000
# open http://localhost:8000
```

Notes

- For quick edits, opening `index.html` directly in the browser works for static markup, but serving is recommended.
- Contact: wsmaisys@gmail.com
