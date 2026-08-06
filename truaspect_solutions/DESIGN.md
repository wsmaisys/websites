---
name: Industrial Intelligence
colors:
  surface: '#0e131f'
  surface-dim: '#0e131f'
  surface-bright: '#343946'
  surface-container-lowest: '#080e1a'
  surface-container-low: '#161c28'
  surface-container: '#1a202c'
  surface-container-high: '#242a36'
  surface-container-highest: '#2f3542'
  on-surface: '#dde2f3'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#dde2f3'
  inverse-on-surface: '#2b303d'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#c7c8ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#a7a9ff'
  on-tertiary-container: '#2b29bb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0e131f'
  on-background: '#dde2f3'
  surface-variant: '#2f3542'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  metric-xl:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered for a "Smart Utility" environment, blending high-stakes industrial data with a premium, executive-deck aesthetic. The brand personality is authoritative, precise, and forward-leaning, aimed at users who manage complex systems and high-value assets. 

The visual style is **Corporate Modern with a Tech-Forward edge**, utilizing deep tonal layering and high-contrast accents. It avoids the playfulness of consumer apps in favor of a sleek, "Mission Control" interface that feels both powerful and refined. The emotional response should be one of total situational awareness and elite-level control.

## Colors
The palette is rooted in a deep **Midnight Navy (#030712)**, providing a high-contrast canvas that allows data to radiate. 

- **Primary Accent (Burned Copper/Gold):** Reserved for peak performance metrics, high-priority CTAs, and "premium" states. It signals value and urgency.
- **Secondary Accent (Teal Mint):** Dedicated to system health, positive growth, and "Go" states. It provides a cooling balance to the warmth of the copper.
- **Neutral Hierarchy:** Pure White is used for primary headers to ensure maximum legibility, while muted greys handle secondary metadata to prevent visual fatigue.

## Typography
This design system utilizes **Sora** as its primary typeface to convey a geometric, modern, and high-tech feel. Its wide stance and unique ink traps provide excellent legibility on dark backgrounds.

For technical data, system paths, and small metadata, **JetBrains Mono** is introduced to provide a "coded" industrial aesthetic. Headlines should utilize tighter letter-spacing to feel more "locked-in" and authoritative. Metrics and large numbers should always be rendered in Sora with Bold weights to emphasize data precision.

## Layout & Spacing
The layout follows a **structured 12-column fluid grid** for desktop, collapsing to 4 columns for mobile. 

The spacing rhythm is strictly based on a **4px baseline grid**. Large margins (40px+) are used between major sections to mimic the "whitespace" of a premium executive presentation deck. Data density should be balanced: high density within components (like tables or charts) but low density in the global layout to allow for "breathing room" and focus.

## Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional drop shadows. Surfaces are stacked using color luminosity:
- **Level 0 (Canvas):** Midnight Navy (#030712).
- **Level 1 (Cards/Panels):** A slightly lighter navy (#111827).
- **Level 2 (Overlays/Modals):** (#1F2937).

Borders are used sparingly but effectively: a **1px subtle stroke** (#374151) is applied to all cards to define boundaries without adding visual bulk. When an element is focused, a low-glow "ambient" shadow using the primary accent color (#F59E0B at 10% opacity) may be applied to suggest an active electronic state.

## Shapes
The shape language is **Soft (0.25rem)**. This "near-sharp" aesthetic maintains the industrial, architectural feel of the system while providing just enough refinement to feel modern and high-end. 

- **Standard Buttons/Inputs:** 4px (0.25rem) radius.
- **Large Container/Cards:** 8px (0.5rem) radius.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from structural UI elements.

## Components
- **Buttons:** Primary CTAs use a solid Burned Copper background with Black text for maximum impact. Secondary buttons use a ghost style with a 1px teal stroke.
- **Metric Cards:** Should feature a large Sora Bold value, a JetBrains Mono label in all-caps, and a small sparkline or trend indicator in Teal Mint.
- **Data Tables:** Use subtle horizontal dividers only. Header rows should be in all-caps JetBrains Mono at a reduced opacity (60%).
- **Input Fields:** Darker than the card background with a focus state that activates a 1px Burned Copper border.
- **System Health Indicators:** Small, pulsating circular dots in Teal Mint to show "Live" connectivity or system status.
- **Gauges & Progress:** Use thin, high-precision strokes rather than thick bars to maintain the technical aesthetic.