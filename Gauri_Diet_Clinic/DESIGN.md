---
name: Elite Wellness Narrative
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45474b'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5d5e63'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c20'
  on-primary-container: '#828389'
  inverse-primary: '#c6c6cc'
  secondary: '#7f5614'
  on-secondary: '#ffffff'
  secondary-container: '#ffc87c'
  on-secondary-container: '#79520f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#211a16'
  on-tertiary-container: '#8d827b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#ffddb3'
  secondary-fixed-dim: '#f3bd72'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#eee0d8'
  tertiary-fixed-dim: '#d1c4bc'
  on-tertiary-fixed: '#211a16'
  on-tertiary-fixed-variant: '#4e453f'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  obsidian: '#0B0D11'
  prestige-gold: '#BA8A44'
  alabaster: '#FFFFFF'
  slate-subtle: '#E5E7EB'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for **Gauri’s Diet Clinic**, positioning it as a premier destination for high-end wellness and clinical precision. The brand personality is **Elite, Methodical, and Sophisticated**, catering to high-net-worth individuals who value science-backed results wrapped in a luxury experience.

The visual direction follows **Modern Minimalism with a Corporate-Sleek edge**. It prioritizes extreme clarity, generous "breathing room" (whitespace), and a high-contrast palette. By blending the rigor of a corporate consulting firm with the serenity of a luxury spa, the UI evokes an immediate sense of professional authority and personal exclusivity.

## Colors

The palette is anchored by **Obsidian (#0B0D11)** to establish a foundation of power and stability, contrasted against **Alabaster white** for a clean, clinical feel. **Prestige Gold (#BA8A44)** is used sparingly as a high-impact accent to denote premium services, achievements, and call-to-action highlights.

- **Primary:** Obsidian is used for typography and structural elements to maintain a grounded, corporate aesthetic.
- **Secondary:** Prestige Gold provides warmth and a "boutique" luxury feel against the darker elements.
- **Neutral:** A range of ultra-light grays (Slate-subtle) ensures that sections are demarcated without breaking the minimalist flow.

## Typography

This design system utilizes a sophisticated typographic pairing to balance tradition and modernity. 

- **Headlines (EB Garamond):** A classical, elegant serif that communicates the "Diet Clinic" heritage and bespoke nature of the service. High-level displays use tighter tracking for a refined, editorial look.
- **Body & Labels (Inter):** A high-performance sans-serif used for clinical data, program details, and functional UI. It ensures maximum readability and a contemporary, tech-forward edge.
- **Scaling:** Headlines scale aggressively on desktop to create a sense of grandeur, while body text remains comfortably sized for long-form nutritional guides.

## Layout & Spacing

The layout philosophy is built on a **12-column Fixed Grid** with a "Generous Negative Space" mandate. 

- **Vertical Rhythm:** A large `section-gap` of 120px is used to separate major content blocks, preventing the UI from feeling cluttered or overwhelming.
- **Desktop:** Content is centered with wide margins to create a focused, premium reading experience similar to a luxury lookbook.
- **Mobile:** The grid collapses to a single column with a 20px safety margin, prioritizing verticality and ease of thumb-reach for booking appointments.

## Elevation & Depth

This system avoids heavy drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

- **Depth Strategy:** Use subtle, 1px borders in `slate-subtle` to define cards and input areas.
- **Surfaces:** To create hierarchy, use a slightly off-white background (`neutral`) for the base and pure `alabaster` for elevated cards.
- **Interactions:** Hover states on primary elements should trigger a slight shift in background tint or a very soft, diffused ambient shadow (0px 4px 20px, 5% opacity) to signify tactility without breaking the minimalist aesthetic.

## Shapes

The shape language is **Strict and Professional**. A "Soft" roundedness (4px - 8px) is applied to buttons and cards to make the brand approachable, but never "bubbly." 

- **Standard Elements:** Use a 4px radius for input fields and small buttons.
- **Featured Cards:** Use 8px to subtly distinguish them from the background grid.
- **Images:** Photography should always have sharp corners or extremely subtle 4px radii to maintain a clean, architectural feel.

## Components

- **Buttons:** Primary buttons use the `obsidian` background with `alabaster` text. The "Premium" variant uses a `prestige-gold` border and text with no fill (ghost style) until hovered.
- **Inputs:** Minimalist bottom-border-only fields or light-gray outlined boxes with `inter` labels. Focus state is a subtle color shift to `prestige-gold`.
- **Cards:** White containers with a 1px border. Avoid shadows. Use large internal padding (min 32px) to ensure content breathes.
- **Chips/Badges:** Small, all-caps labels in `label-sm` style. Use for dietary tags (e.g., "KETO", "VEGAN") with a light gold tint background.
- **Progress Bars:** For tracking weight or health goals, use a thin 4px bar with a `prestige-gold` fill against a `slate-subtle` track.
- **Service Lists:** Use elegant serif numbering (1, 2, 3) for program steps to emphasize the "methodology" of the clinic.
- **FAQ Accordion:** Native `<details>/<summary>` elements — no JS required, fully crawlable and accessible. Question uses `headline-md` styling; a `material-symbols-outlined` "add" icon rotates 45° on `[open]` to become a close (×) affordance. Divider rows use `slate-subtle` borders, matching the card border language rather than shadows.

## Heading Hierarchy

Strict, no-skip nesting is enforced site-wide: one `h1` (hero), `h2` for each major section title ("Bespoke Wellness Programs," "Your Personal Nutrition Expert, Gauri," "Select Your Trajectory," "Client Success Stories," "Frequently Asked Questions," "Understand your body metrics clearly," "Ready to begin your transformation?"), and `h3` for any sub-block within a section (program cards, goal-preview protocol titles, footer column labels). Never skip a level (e.g. `h2` straight to `h4`) — screen readers and search crawlers both rely on the outline to understand page structure.

## SEO & AEO (Answer Engine Optimization)

- **Metadata:** `<title>` and meta description should name the service + location ("Nutritionist & Dietitian in Mumbai") since local-intent search and AI answer engines both weight locality heavily. Every page needs `og:site_name`, `og:locale`, `og:url`, and explicit `og:image` width/height — partial Open Graph tags degrade how link previews render on WhatsApp, LinkedIn, and X.
- **Images:** Do not ship AI-tool preview URLs (e.g. `lh3.googleusercontent.com/aida/...`) as production `og:image`/`twitter:image`/logo sources — they are ephemeral and will 404 silently, breaking social previews and image search with no visible error. Self-host all production imagery before publishing, and always pair `<img>` with explicit `width`/`height` (real intrinsic dimensions, not display size) to prevent layout shift.
- **Structured data must match visible content.** A `FAQPage` schema is only valid — and only useful to AI answer engines — if the same questions and answers are visibly rendered on the page (see the FAQ Accordion component above). Don't ship JSON-LD for content that isn't on the page.
- **Reviews/ratings:** testimonials rendered on the page are mirrored in `MedicalBusiness` JSON-LD as `review` + `aggregateRating`, and the six program cards are mirrored as a `hasOfferCatalog` list of `Service` offers — this gives both Google rich results and LLM-based answer engines a structured, citable summary of what the clinic offers, not just prose.
- **No dead CTAs:** every button/link in a hero or nav must resolve to a real anchor or action (e.g. "Explore Programs" → `#programs`). Dead buttons hurt bounce rate, which is itself an indirect ranking signal.
- **Favicon & theme-color:** every deployed site needs a `rel="icon"` and a `theme-color` meta at minimum — their absence is a common oversight that affects bookmark/tab branding and mobile browser chrome.
- **Canonical URL:** must match the real publish domain exactly (protocol, subdomain, trailing slash) before going live — a mismatched canonical can cause search engines to index the wrong URL or none at all.