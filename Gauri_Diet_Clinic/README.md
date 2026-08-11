# Rebuilding dist/styles.css

This folder contains the reconstructed Tailwind setup used to generate
`dist/styles.css` for the Gauri's Diet Clinic site.

## Why this exists
The project's original build tooling (package.json / npm scripts) wasn't
available — only the already-compiled `dist/styles.css`. That compiled file
was generated from an older version of `index.html`, so newer classes added
during edits (custom hex colors, opacity variants, etc.) were silently
missing from the stylesheet. This config was reverse-engineered from the old
compiled CSS's custom theme values (colors, font sizes, spacing tokens) so
the pipeline could be rebuilt properly and kept in sync going forward.

## How to rebuild
1. Install Tailwind (same major version used here: 3.4.19):
   npm install -D tailwindcss@3.4.19

2. Place `tailwind.config.js` and `input.css` in your project root, and make
   sure `tailwind.config.js`'s `content` array points at your actual
   `index.html` path.

3. Run:
   npx tailwindcss -i ./input.css -o ./dist/styles.css --minify

Re-run step 3 any time you add new utility classes (including arbitrary
value classes like `bg-[#123456]`) to index.html — otherwise, like before,
they won't appear in the compiled CSS.

## Notes on the reconstructed theme
Custom colors, font sizes, and spacing tokens (primary, alabaster, obsidian,
on-surface-variant, slate-subtle, headline-md/lg, body-md/lg, label-sm,
margin-mobile/desktop, gutter, section-gap, container-max) were extracted
from the values baked into the old compiled CSS. If the original design
system had additional tokens not currently used anywhere in index.html,
they won't appear here since Tailwind only compiles what's referenced in
the scanned content — that's expected and not a problem.