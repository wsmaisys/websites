# Prime Enterprises — SEO / GEO / AEO Audit & Roadmap

Scope note up front: what I could implement directly in your existing
`index.html` this round vs. what genuinely requires new pages, real
business data (hours, reviews), or a build pipeline is separated below.
I pulled real data from primenterprises.org, your Google Maps listing,
and your IndiaMART catalogue rather than inventing placeholders — a
few gaps are flagged explicitly instead of being guessed at.

---

## 1. What was implemented in `index.html` this round

- **Metadata**: added `author`, `geo.region`/`geo.position`/`ICBM`,
  `og:image` + dimensions, `twitter:title`/`description`/`image`,
  `hreflang`, tightened `robots` to `index, follow, max-image-preview:large`,
  rewrote `meta keywords` around your real target phrases (solar company
  in Satara, rooftop solar Satara, commercial/industrial solar
  Maharashtra, solar EPC contractor Satara, etc.) instead of the generic
  list that was there.
- **Structured data**: replaced the single `LocalBusiness` block with a
  linked `@graph` — `HomeAndConstructionBusiness`/`ProfessionalService`,
  `WebSite`, `WebPage`, `BreadcrumbList` — using your **verified**
  address, phone, email, founding year (2016), founder (Sachin S
  Mhaskar, from your IndiaMART fact sheet), accurate GPS coordinates
  pulled from your Google Maps place link (`17.6788888, 74.0152607` —
  note this differs from the old embed iframe on your live contact
  page, which points to `73.93, 17.68`, roughly 8 km off; worth fixing
  on the live site), and `sameAs` links to your IndiaMART profile and
  Maps listing. Added an `Offer`/`Service` list matching your actual
  8 core services.
- **FAQ schema**: expanded from 5 to 10 Q&As, matched to visible
  on-page content (required for FAQ rich results — Google now largely
  restricts FAQ snippets to well-established, health/gov sites, but the
  markup still directly feeds AI Overviews, ChatGPT, Perplexity, and
  Copilot, which is the primary value now).
- **Semantic HTML / a11y**: wrapped page content in `<main>`, added a
  skip-to-content link, gave the mobile menu a working open/close
  script with `aria-expanded`, turned the dead address link in the
  footer into a real `<address>` linking to Google Maps, added
  `loading="lazy"`/`decoding="async"` to the two About-section images
  (project images already had this), added visible focus outlines.
- **Files added**: `robots.txt` (explicitly allows GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc. — this is what actually controls
  whether AI answer engines are permitted to crawl and cite you),
  `sitemap.xml`, `site.webmanifest`.

**Deliberately not added**: `AggregateRating`/`Review` schema. You
don't yet have a review count/star average I could verify from a
public source — Google explicitly penalizes self-published review
schema that can't be verified, and fabricating a number here would be
the single most likely thing to get structured data suppressed
site-wide. Pull this from your Google Business Profile once you can
access its real rating via the API or dashboard, and I can wire it in
in one edit.

**Also flagged, not fixed automatically** (I don't want to guess): your
homepage footer and About text disagree on founding year in two places
on the *live* site (2010 vs. 2016) — the new file consistently uses
2016 per your About page and IndiaMART listing. Confirm which is
correct and I'll make sure it's consistent everywhere, including in
structured data.

---

## 2. Site architecture — why one page caps how far this can go

The current site is a strong single-page design, but a single URL can
only meaningfully target a handful of keyword clusters. Google (and
AI answer engines) reward topical depth — a page that's *only* about
commercial solar EPC will out-rank a paragraph on a homepage that
mentions it once. Recommended structure:

| URL | Primary target |
|---|---|
| `/` | Brand + "solar company Satara" |
| `/rooftop-solar` | Residential rooftop solar Satara/Maharashtra |
| `/commercial-solar` | Commercial solar Maharashtra |
| `/industrial-solar` | Industrial solar EPC Maharashtra |
| `/solar-epc` | Solar EPC contractor Satara |
| `/solar-water-pumps` | Solar water pump supplier (strong IndiaMART demand) |
| `/solar-water-heaters` | Solar water heater Satara |
| `/solar-street-lights` | Solar street/home lighting, high-mast — your best-selling IndiaMART category |
| `/solar-amc` | Annual maintenance contracts |
| `/about` | Trust signals, certifications, team |
| `/projects` | Portfolio, case studies |
| `/blog/` | Content hub (see §5) |
| `/contact` | Map, form, hours |

Each page needs: unique title/meta, its own `Service`/`Product` schema,
3–5 page-specific FAQs, and 2–3 internal links to sibling pages. This
is a genuine build project (rough estimate: 1–2 days per page for a
developer working from your existing design system) — I'd suggest
tackling `/solar-street-lights` and `/solar-water-pumps` first since
your IndiaMART catalogue shows those are your highest-volume, most
price-competitive categories.

---

## 3. Full FAQ bank (30+, AEO/GEO-ready)

Ten are already live in your FAQ schema and on-page accordion. The
remaining 20+ below are ready to paste in — each is phrased as a
direct answer so it can be lifted verbatim into an AI Overview or
chatbot response.

1. What government subsidies are available for solar in Maharashtra? — *Answer depends on current MNRE/MSEDCL subsidy rates, which change yearly; don't publish a number without checking the current PM Surya Ghar scheme rate first, or you'll publish stale/wrong figures.*
2. Which solar panel brand is best for homes in Satara?
3. Do I need approval from MSEDCL before installing rooftop solar?
4. What is net metering and how does it work in Maharashtra?
5. How much roof space is needed for a 3kW solar system?
6. Can I install solar on a tin/asbestos roof?
7. What warranty do Prime Enterprises solar installations carry?
8. How is a solar water pump sized for irrigation?
9. What's the difference between a solar street light and a solar LED light without battery?
10. How much does a solar-powered water heater save monthly vs. electric?
11. Do solar panels work on cloudy or rainy days?
12. What financing or EMI options are available for solar installation?
13. How is battery storage capacity chosen for a hybrid system?
14. What's included in an Annual Maintenance Contract (AMC)?
15. How do I clean solar panels safely?
16. What happens to excess solar power I don't use?
17. Is a subsidy available for solar water pumps for farmers?
18. How long does a site survey take before I get a quote?
19. What certifications does Prime Enterprises hold? *(ISO 9001:2015 — confirmed)*
20. Do you offer solar solutions for shops and small commercial spaces?
21. What's the typical ROI period for a commercial solar installation?
22. Can solar street lights run all night without grid power?
23. What maintenance does a solar water heater need?
24. Do you provide AMC contracts for systems not originally installed by you?
25. What areas of Maharashtra do you currently serve?
26. How do I get a free site visit scheduled?
27. What's the installed capacity range you handle (residential to industrial)?
28. Are solar systems safe during monsoon/lightning?
29. What's the cost difference between polycrystalline and mono PERC panels?
30. How does Prime Enterprises handle repairs after installation?

Implement each as visible on-page content (not schema-only) — AI
answer engines and Google both need to see the answer in rendered
text, not just in JSON-LD.

---

## 4. Core Web Vitals — prioritized action list

The design already avoids the worst offenders (no render-blocking
image carousels, system fonts fallback). Remaining items, ranked by
impact:

1. **LCP**: your LCP element is the hero `<h1>`, not an image — good.
   Preload the two Google Fonts weights actually used above the fold
   (`Space Grotesk 700`, `Inter 400`) with `<link rel="preload"
   as="font" crossorigin>` instead of relying on the stylesheet fetch
   chain.
2. **INP**: the mouse-parallax on `#pLogoBig` runs a `requestAnimationFrame`
   loop with per-frame DOM style writes — cheap individually, but on
   low-end Android this can compete with input handling. Consider
   pausing the RAF loop when the hero is scrolled out of view
   (`IntersectionObserver`, same pattern you already use for `.reveal`).
3. **CLS**: none of the current layout should shift (fixed hero height,
   flex-centered logo) — verify with a real Lighthouse run after
   deploying the responsive fix from earlier in this conversation.
4. Convert `first.png`, `second.png`, `project1–8.png` to **WebP/AVIF**
   with `<picture>` fallback — likely the single biggest byte-weight
   win available, since these look like large uncompressed PNGs.
5. Minify the inline `<style>`/`<script>` blocks for production (they're
   currently unminified inline, which is fine for LCP since there's no
   extra request, but adds parse weight — low priority).
6. Self-host or `font-display: swap` (check current Google Fonts link
   already includes `&display=swap` — confirmed, good).

---

## 5. Blog content strategy (50+ topics)

Organize under `/blog/` in four clusters so internal linking stays
tight. Publish 2–3/month starting with high-intent, low-competition
local terms.

**Buying & cost guides**
1. Residential Solar Buying Guide for Satara Homeowners
2. How Much Does Rooftop Solar Cost in Maharashtra? (2026 breakdown)
3. Solar ROI Calculator: How Fast Does Solar Pay for Itself?
4. On-Grid vs Off-Grid vs Hybrid: Which Solar System Should You Choose?
5. How to Read Your Electricity Bill Before Going Solar
6. Solar Financing and EMI Options Explained
7. Solar Subsidy Schemes in Maharashtra: What's Currently Available
8. Choosing Between Polycrystalline and Mono PERC Panels
9. What Size Solar System Do You Actually Need?
10. Solar for Rental Properties: What's Possible?

**How-it-works / technical**
11. How Net Metering Works in Maharashtra
12. What Happens to Solar Power You Don't Use?
13. How Solar Inverters Convert DC to AC (Explained Simply)
14. Battery Storage 101 for Hybrid Solar Systems
15. How Solar Water Pumps Work for Irrigation
16. Solar Street Lights: Components and How They Stay Lit All Night
17. Understanding Solar Panel Degradation and Warranties
18. Why Panel Angle and Orientation Matter in Maharashtra's Climate
19. What Is a Solar EPC Contractor and Why It Matters
20. Solar Panel Cleaning: DIY vs Professional Maintenance

**Local / regional**
21. Best Rooftop Orientations for Solar in Satara District
22. Solar Adoption Trends Across Maharashtra
23. Case Study: Rooftop Solar Installation in Phaltan
24. Case Study: Solar Irrigation Pump for a Sholapur Farm
25. Solar for Satara's Commercial Shops and Small Businesses
26. How MSEDCL Approval Works for Rooftop Solar
27. Solar Incentives for Farmers in Maharashtra
28. Comparing Solar Adoption: Satara vs Pune vs Kolhapur
29. Why Maharashtra's Sunlight Hours Favor Solar ROI
30. Local Success Stories: Prime Enterprises Installations Across Satara

**Maintenance, safety & lifecycle**
31. Solar Maintenance Checklist for Homeowners
32. What's Covered in an Annual Maintenance Contract (AMC)?
33. Are Solar Panels Safe During Monsoon and Lightning?
34. How Long Do Solar Panels Really Last?
35. Common Solar Inverter Problems and Fixes
36. When to Replace vs Repair a Solar Water Heater
37. How to Spot a Failing Solar Battery Early
38. Post-Installation Support: What to Expect from Prime Enterprises
39. Solar Panel Recycling and End-of-Life Disposal
40. Insurance Considerations for Rooftop Solar Systems

**Comparison / decision content**
41. Solar Water Heater vs Electric Geyser: Cost Comparison
42. Solar Street Lights vs Grid-Connected LED: Cost Over 5 Years
43. Off-Grid vs Hybrid for Farms Without Grid Access
44. Choosing a Solar Installer: Questions to Ask Before You Sign
45. Solar Panel Brands Compared: What Prime Enterprises Recommends
46. Residential vs Commercial Solar: Key Differences
47. Is Solar Worth It for a Small Shop or Kirana Store?
48. Lithium-Ion vs Lead-Acid Batteries for Solar Storage
49. DIY Solar Kits vs Professional Installation: Real Cost Comparison
50. Government vs Private Solar Subsidy: What Qualifies

**Industry/company**
51. ISO 9001:2015 Certification: What It Means for Our Customers
52. Behind the Scenes: How a Prime Enterprises Site Survey Works
53. Meet the Team: Prime Enterprises' Installation Process

Each post: 800–1,500 words, one H1, definition-first opening paragraph
(good for AI Overviews), a comparison table or numbered list where
relevant, FAQ block at the end, 2–3 internal links to service pages.

---

## 6. Trust signals still to build (not fabricated here)

- **Real testimonials**: the three on your homepage are unattributed
  beyond a first name — if genuine, add last name/photo/date for
  credibility; if illustrative placeholders, replace with real
  customer quotes before publishing, since Google's guidelines
  specifically flag unverifiable review-like content.
- **Project portfolio**: your `/projects` grid uses generic filenames
  (`project1.png`…) with generic alt text — captioning each with
  location + system size ("5kW rooftop install, Phaltan") turns this
  into genuine long-tail SEO surface area instead of decorative images.
- **AggregateRating schema**: wire in once you have a verifiable
  source (Google Business Profile rating via API, or a review platform
  widget) — see §1.
- **Certifications/brand logos**: if you're an authorized dealer for
  specific panel/inverter brands, a logo strip is a fast trust win and
  gives you brand-name long-tail queries ("Prime Enterprises Waaree
  dealer Satara" etc.) if applicable.

---

## 7. Before / after — honest estimate, not a guarantee

These are directional estimates based on the specific changes made,
not a score I can measure without running Lighthouse/PageSpeed
Insights against your actual deployed domain (I'd need you to share
that, or I can run it once this is live).

| Area | Before | After (est.) | Why |
|---|---|---|---|
| Structured data completeness | Basic LocalBusiness + 5 FAQs | Org+LocalBusiness+WebSite+Breadcrumb graph + 10 FAQs, service offers | More entity signals for Google & LLMs to parse |
| Metadata completeness | Missing OG image, Twitter tags, geo tags | Complete | Better social previews, local relevance signals |
| Accessibility (manual review) | No skip link, non-functional mobile menu, one generic `aria-label="menu"` | Skip link, working ARIA-driven menu, focus states | Real WCAG improvement, not just a Lighthouse number |
| AI crawler access | Not explicitly addressed | robots.txt explicitly allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended | Directly affects whether AI answer engines can cite you |
| Core Web Vitals | Unmeasured | Unchanged by this pass except lazy-loading two images — the real win (image compression, font preload) still needs implementing | Flagged in §4, not yet done |

I'd rather tell you plainly that I can't responsibly hand you a "72 →
94" Lighthouse number without running the tool against your real,
deployed site — happy to do that as soon as you point me at the live
URL after deployment, and I'll give you real before/after numbers.

---

## 8. Suggested next steps, in order

1. Deploy this updated `index.html` + `robots.txt` + `sitemap.xml` +
   `site.webmanifest` to production.
2. Fix the Google Maps coordinate mismatch on the live contact page
   (currently points ~8km off from your actual Google Business listing).
3. Confirm founding year (2010 vs 2016) so it's consistent everywhere.
4. Get your Google Business Profile rating/review count so
   `AggregateRating` schema can be added truthfully.
5. Run Lighthouse + PageSpeed Insights + Google's Rich Results Test
   against the live URL — I can do this for you once it's deployed.
6. Prioritize `/solar-street-lights` and `/solar-water-pumps` as the
   first two dedicated landing pages (your IndiaMART data shows these
   are your deepest product catalogue).
7. Start the blog with 3–4 posts from the "Local" and "Cost guide"
   clusters — these tend to rank fastest for a young domain.
