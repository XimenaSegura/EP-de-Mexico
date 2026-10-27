# iNBest Design System

Brand, foundations, and UI kit for **iNBest** — a forward deployed AI, cloud, and security partner. This system is reverse-engineered from the production "V2" brand on the iNBest marketing site, so anything you build here matches what ships at www.inbest.cloud.

> **Tagline:** Forward deployed engineers for AI, cloud, and security.

---

## Company / product context

iNBest is a multicloud MSP and IT consultancy founded in **2009**, headquartered in **Mexico City**, with offices in Guadalajara, Monterrey, Querétaro, CDMX, and Shenandoah, TX (USA). It serves Mexico and LATAM enterprises with **16+ years in the field, 3,000+ clients, and 130+ certified professionals**.

The positioning is **"forward deployed engineering"**: engineers and architects embed *inside* a client's operating workflow to design, build, deploy, and run production systems — moving clients from demos and disconnected tools to measurable operating outcomes. The site reads like a field-ops console, not a typical agency site.

**What they offer**
- **Services** (capabilities, not the lead story): Forward Deployed AI, Cloud, Security, FinOps; plus DevOps, Software Factory, Managed Services, Collaboration (M365 / Google Workspace), ERP (SAP Business One), Cybersecurity, AWS Incident Response.
- **Products**: **GuidancePlex** (their proprietary consulting/diagnostic process — the anchor product), **Obok** (multicloud cost/posture/security intelligence), **AI Hackers** (autonomous security testing).
- **Platforms**: AWS (Advanced Tier / MSP), Microsoft Azure (Solutions Partner), Google Cloud (Premier Partner), Microsoft 365, SAP Business One, Datacenter, Claude by Anthropic.
- **Industries**: retail, manufacturing, financial services, automotive, healthcare, education, government, NGO, HR/staffing, logistics.

The site is **bilingual (EN / ES)**, English-default, and Mexico-focused.

### Surfaces / products represented here
There is one primary public surface — the **marketing website** — recreated as a UI kit in `ui_kits/website/`. (The company operates many client apps and internal tools, but only the public site brand was provided as input.)

---

## Sources

These are the inputs this system was built from. You may not have access; they are recorded so you can dig deeper if you do.

- **GitHub — primary:** [`iNBest-cloud/www.inbest.cloud`](https://github.com/iNBest-cloud/www.inbest.cloud) (private). The production marketing site: React 19 + Vite + Tailwind 4 (shadcn/ui + Radix) + Express. The brand lives in the **"V2"** layer:
  - `client/src/styles/v2.css` — the entire visual system (colors, type, components, layout). **The single most important file.**
  - `client/src/components/v2/V2Shell.tsx` — nav, footer, ticker, buttons, section header, SEO shell.
  - `client/src/pages/v2/V2Home.tsx` — homepage composition.
  - `client/src/content/v2Content.ts` — all copy, EN + ES.
  - `client/index.css` + `tailwind.config.ts` — the older shadcn token layer (HSL vars).
  - `client/public/llms.txt` — plain-language company/service summary.
  - `AGENTS.md` — the brand's **writing-style rules** (see Content Fundamentals).

You can explore that repository further to build higher-fidelity iNBest designs.

---

## Content fundamentals

The voice is **plain, concrete, and operational** — it sounds like an engineer who has done the work, not a marketer. This is codified in the repo's own `AGENTS.md`.

**Rules (from the brand):**
- Simple, clear language. Short sentences. Concrete claims.
- Be specific about systems, workflows, customers, and outcomes.
- **No em dashes.** (Use periods or commas. The serif "—" in eyebrows is a literal hyphen separator, not an em dash.)
- **No AI-marketing filler.** Banned phrasing includes "unlock the power of AI," "revolutionize your business," "seamless digital transformation."

**Voice characteristics observed:**
- **Address:** second person ("your hardest operational problems", "the systems we deploy"); the company is "we". Rarely "I".
- **Casing:** Sentence case for headlines and body. Eyebrows, marks, and labels are **UPPERCASE** (set in mono). Product names keep their camel/case: `GuidancePlex`, `Obok`, `AI Hackers`, `FinOps`.
- **Numbered marks:** sections are tagged like field notes — `[ 001 ] — Definition`, `[ 002 ] — Proof`, `FD/01`, `OPS/04`, `CASE/001`. This bracketed, slashed numbering is a core verbal motif.
- **Headline pattern:** a short sans statement with **one italic-serif word** carrying the emphasis: "How we *work.*", "Deployments, not *case studies.*", "Deployment is not the *finish line.*"
- **Reframes:** the copy repeatedly reframes category clichés — "Deployments, not case studies", "Services are not the lead story", "We do not rebuild what should already be a product."
- **Emoji:** **none.** Never used. Iconography is typographic (see below).
- **Vibe:** field-ops / engineering console. Confident, terse, evidence-led. A live "ticker" of stats runs across the top like a status feed.

**Examples (verbatim):**
- Hero: "Forward deployed engineers for AI, cloud, and security."
- Definition: "iNBest is the forward deployed AI, cloud, and security partner for Mexico."
- Engage: "Every project begins with a focused diagnostic: one workflow, one owner, one deployment path, and one measurable outcome."

---

## Visual foundations

A precise, **editorial, grid-first** system. Think technical document meets field console: hairline rules, mono labels, near-square geometry, restrained color, one cyan accent.

**Color** (see `colors_and_type.css`)
- Surfaces are cool near-whites: `--bg #f3f6fa`, `--bg-2 #e7ecf3`.
- Ink is a deep navy `--ink #0a1729` — used both as **primary text** and as **dark-section background**. Secondary text `--ink-2 #1c2638`, muted `--muted #5b6576`.
- One accent, used sparingly: bright cyan `--accent #1ea7e8` (dots, pins, hover, logo mark) and deep blue `--accent-deep #075e99` (mono marks, the serif `<em>`, accent buttons). On dark, the `<em>`/marks lift to `--accent-on-dark #64c7f5`.
- (An older shadcn layer in `index.css` expresses primary as `hsl(197 94% 35%)` ≈ `#077CAB`; the V2 layer is the live brand.)

**Type**
- **Geist** (sans) — UI, headlines, body. Headlines are weight **500 (medium), never bold/heavy**, letter-spacing 0, line-height ~0.92–1.02.
- **Geist Mono** — eyebrows, the `[ … ]` marks, labels, list items, ticker, output fields. Uppercase, tracked 0.10–0.14em, 11px.
- **Instrument Serif** *italic* — emphasis only: the single highlighted word inside a headline, colored `--accent-deep`.
- All three are on Google Fonts (loaded via CDN — no local files needed, no substitutions).

**Spacing & layout**
- Container `1320px`, gutter `28px`, section rhythm `112px` vertical.
- The defining layout: a **`220px` label column + content column** split for section heads and hero meta.
- Content sits in **hairline grids** — `repeat(n, 1fr)` cells separated by 1px rules with **zero gap and no radius**. Borders, not cards-with-shadows, define structure.

**Shape**
- **Deliberately square.** Cards, grids, media, stat cells: radius `0`. Only **pills** (buttons, tags, the locale switch) and the **dark form/flight panels** (`8px`) are rounded; inputs are `4px`.

**Backgrounds / texture**
- No photographic hero on the homepage. The hero uses a generative **ASCII point-cloud canvas** over `#d9d9d6`, faded out by a radial+linear "protection" gradient veil so the headline stays legible (recreated in the kit via CSS gradients — the brand's own fallback).
- Dark sections are flat `--ink`. Case-study heroes (`.v2-aero-*`) *do* use full-bleed cover photos with a heavy navy gradient overlay + a faint engineering grid + diagonal "vector" lines.
- The footer map is a CSS-drawn grid with glowing cyan location pins — illustrative, not a real map tile.

**Borders & elevation**
- Hairlines everywhere: `--line rgba(10,23,41,.12)` default, `--line-strong rgba(10,23,41,.28)` for outer/section rules, `--line-on-dark rgba(234,241,250,.16)` on ink.
- **Shadows are almost absent** — the brand's shadow tokens are mostly `…/0.00`. The only real shadows lift the **dark form panel** and the floating "flight" card (`0 20px 50px` / `0 22px 70px`). Depth comes from lines and the dark/light contrast, not blur.
- No glass/blur except the **sticky nav**, which uses `backdrop-filter: saturate(140%) blur(12px)` over an 88%-opaque bg.

**Motion**
- Quick and linear; **no bounce**. Transitions ~160ms ease on color/background/border.
- Hover: links shift to cyan; a nav underline wipes in; buttons fill ink→cyan (and a `.btn-hover-effect` variant lifts `translateY(-1px)` with a soft cyan shadow). Press: the lift releases (`translateY(0)`).
- The ticker scrolls infinitely (64s linear); the LIVE dot pulses (1.6s). Decorative loops are confined to the ticker — content does not animate on loop.
- Card hover = a flat fill to `--bg-2`, nothing more.

**Imagery color vibe**
- Where photos appear (case studies), they are **desaturated and cool** (`saturate(0.72) contrast(1.08)`) under a navy overlay — never warm, never grainy. The palette stays blue/navy/white throughout.

---

## Iconography

iNBest's iconography is **typographic, not pictorial**. This is a deliberate, distinctive choice — do not introduce a generic icon set.

- **No icon font, no SVG icon library** ships in the brand layer. The lucide/Radix icons present elsewhere in the repo are incidental shadcn defaults, not part of the V2 brand language.
- **Marks replace icons.** Categories and steps are labeled with mono bracket/slash codes: `[ 001 ]`, `[ FD/02 ]`, `OPS/04`, `CASE/001`. The `<span class="ib-dot">` cyan dot and the `->` arrow glyph (set in Geist Mono) are the closest things to "icons."
- **Emoji:** never.
- **Unicode as glyphs:** the arrow `->` (literal hyphen-greater-than, mono), the bullet `•` in the ticker, and the bracket/slash marks. That's the entire icon vocabulary.
- **Flags:** EN/US and ES/MX flags in the locale switch are **CSS-drawn** (gradients + pseudo-elements), not image assets — see `.ib-locale__flag--us/--mx`.
- **Logos:** real partner wordmarks (AWS, Azure, Google Cloud, SAP) are used as SVGs in `assets/partners/` and inverted (`brightness(0) invert(1)`) on dark.

If a build genuinely needs pictographic icons, prefer a thin, geometric line set and flag the addition — it is an extension of the brand, not part of it.

---

## Index / manifest

**Root**
- `README.md` — this file.
- `colors_and_type.css` — color + type tokens and semantic primitives (`.t-*`). Start here.
- `brand.css` — the component layer (`.ib-*`): buttons, cards, grids, ticker, locale switch, form, proof stats. Requires `colors_and_type.css`.
- `SKILL.md` — Agent Skill manifest for use in Claude Code.

**`assets/`**
- `logo-inbest.webp` — primary logo (works on light; invert for dark).
- `favicon.png`, `og-image.png` — favicon and social card.
- `partners/` — `aws.svg`, `azure.svg`, `google-cloud.svg`, `sap.svg`.

**`preview/`** — design-system cards (registered in the Design System tab): type, colors, spacing/shape, components, brand. These are small specimens; read them for usage examples.

**`ui_kits/`**
- `website/` — interactive recreation of the marketing homepage (EN/ES). See `ui_kits/website/README.md`.

## How to use
1. Load Google Fonts (Geist, Geist Mono, Instrument Serif), then `colors_and_type.css`, then `brand.css`.
2. Wrap your markup in a `.inbest` root.
3. Compose with `.ib-*` components and the hairline `.ib-grid-*` system. Keep geometry square, color restrained, labels in mono, and put exactly one italic-serif word of emphasis per headline.
4. For full page layouts, lift `k-*` classes and structure from `ui_kits/website/`.
