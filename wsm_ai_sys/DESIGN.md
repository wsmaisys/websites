# WSM AI SYS — Portfolio Site Design Document

## 1. Brief

**Subject:** Freelance AI/tech studio (trading name: WSM AI SYS), run by a solo operator based in Dehradun, India.

**Audience:** Small business owners in and around Dehradun — non-technical, likely first-time buyers of "AI" services, easily put off by jargon or an overly corporate feel.

**Page's single job:** Convert cold visitors (from ads/referrals) into contact-form leads by making five distinct services feel simple, trustworthy, and easy to enquire about — while still looking futuristic and credible enough to justify premium AI pricing.

**Tension to resolve:** "Futuristic and impressive" vs. "not overwhelming for non-technical customers." Resolved by putting all visual boldness into one contained signature element (motion/3D) and keeping copy, layout, and structure plain and calm everywhere else.

---

## 2. Design Tokens

### Color

| Token | Hex | Use |
|---|---|---|
| `--bg-void` | `#0A0E1A` | Page background — near-black space navy |
| `--bg-panel` | `#12172C` | Card/panel background |
| `--bg-panel-hi` | `#171D38` | Panel gradient highlight |
| `--accent-indigo` | `#6C5CE7` | Primary brand accent, AI/tech association |
| `--accent-cyan` | `#3FE0D0` | Secondary accent — "signal/status" color (eyebrows, glowing eyes, core light) |
| `--accent-amber` | `#FFB86B` | Warm human accent — reserved for CTAs and the bot's antenna light, to counterbalance the cold tech palette with approachability |
| `--text-primary` | `#F2F4FA` | Body/heading text |
| `--text-muted` | `#8D93AC` | Secondary text |
| `--border-glass` | `rgba(255,255,255,0.08)` | Card borders |

**Rationale:** Deliberately avoided the generic AI-site defaults (cream + terracotta, or near-black + single acid accent). Instead: dark navy base with a **two-accent system** (cool indigo/cyan for "AI," warm amber for "human/action") so the CTA and the bot's expressive details always read as *warm* against a *cool* backdrop — reinforcing "smart technology, made simple by a real person."

### Type

| Role | Typeface | Notes |
|---|---|---|
| Display (headings) | **Space Grotesk** | Geometric, techy but still highly legible — avoids the more decorative/serif AI-site cliché |
| Body | **Inter** | Maximum readability for a non-technical audience |
| Labels/eyebrows/tags | **JetBrains Mono** | Used sparingly (small caps labels only) for a "system status" feel without making body copy feel technical |

### Layout

Simple, linear, single-column-per-section flow (Hero → Services → Why Us → About → Work → Contact → Footer). No asymmetric/experimental grid — intentional, since the audience should never have to "figure out" how to read the page. Services and Work use plain card grids (3-up desktop, 1-up mobile).

---

## 3. Signature Element

**A floating AI bot**, modeled from primitive geometry in Three.js, living in the hero:
- Glowing cyan eyes + pulsing amber antenna light (color system made literal)
- Gentle idle animation only: bobbing, slight side-to-side rotation, subtle arm sway, soft mouse-follow tilt
- No legs — reads as a small hovering assistant, not a humanoid robot, which keeps it friendly rather than uncanny

This is the one deliberate risk/spend of boldness on the page. Everything else — cards, type, copy — stays quiet and disciplined around it.

## 4. Ambient Background

A second, separate Three.js scene renders a **sparse particle network** (nodes + faint connecting lines) fixed behind the *entire* page, not just the hero:
- Very low opacity (~0.4 for points, ~0.07 for lines) so it never competes with text
- Geometry is generated once at load (not recalculated per frame) to keep it lightweight
- Slow, near-imperceptible rotation + a small parallax response to cursor position
- Content cards keep solid/near-solid panel backgrounds so readability never depends on contrast against the moving background

Both animated scenes respect `prefers-reduced-motion`.

---

## 5. Copy Principles

- No technical vocabulary in customer-facing copy (e.g. "chatbots that answer customer questions instantly," not "LLM-powered conversational agents")
- Every service description answers "what does this do for my business" in one sentence
- A sixth, deliberately un-numbered card — *"Not Sure What You Need?"* — lowers the barrier for visitors who don't yet know how to classify their own problem
- Active voice throughout; CTA button labels state the exact action ("Get a Free Consultation," "Send Message")

---

## 6. Accessibility & Performance Floor

- Responsive down to mobile (grid collapses to 1–2 columns; nav collapses at 860px)
- Visible focus states inherited from default form/link styling; no focus outlines suppressed
- `prefers-reduced-motion` disables all idle animation in both Three.js scenes
- Background network geometry computed once; no per-frame recalculation
- Solid panel backgrounds on all text-bearing cards regardless of background motion

---

## 7. What Was Deliberately Left Out

- No numbered process steps (01/02/03) anywhere the content isn't a real sequence — the "Why Us" section uses numbering only because it's genuinely a scannable list, not to imitate a template
- No stock-photo hero imagery — replaced with the custom bot to keep the brand distinct
- No dense technical case-study writeups — portfolio cards are intentionally light until real project content/screenshots are ready to swap in