# Spec: 40% Site Text Reduction (Sanjivani Chemical Division)

## Problem

The current React site ships verbose body copy across every page — product descriptions run ~100 words each, About page paragraphs are ~60-70 words each, Impact pillars list 4 bullet points each with full sentences, Brand page repeats the ESJ value proposition across 3 paragraphs that essentially say the same thing, data files have redundant stats descriptions, and initiatives/programs descriptions are wordy. This creates heavy, scrolly pages that don't match the user's UX philosophy ("high-density, zero-navigation workflows. Prefers short, scannable copy").

## Users & Goals

- **End user (B2B buyer / procurement / investor):** Fast scan of key facts without reading walls of text.
- **User (site owner — "reduce the textual data from sit by 40%...make everything perfect"):** Wants overall word count of the site's marketing copy reduced by approximately 40%, while keeping the site functionally, visually, and factually "perfect" — meaning no information loss on facts, no UI breakage, no drift in tone or brand positioning.

## Non-Goals

- Do NOT change any factual numerical data (stats, years, specs, purity %, temperatures, densities, capacities, certifications, GSTIN / PAN / IE codes, address lines, phone numbers, emails, logistics distances, plant names, product names, leadership names, values arrays, industry arrays, packaging arrays, specification keys+values).
- Do NOT change colors, tailwind tokens, font families, layout / spacing, section order, animations, routes, component structure, data shape, SEO meta keywords, OG image URLs, image URLs, logo references, or navigation links.
- Do NOT delete entries from arrays (keep 5 products, 6 stats, 4 mission pillars, 4 sustainability pillars, 7 timeline items, 6 achievements, 12 initiatives, 8 certifications, 4 keyHighlights per plant, etc).
- Do NOT rewrite slogans, taglines, or the Hinglish / "design hotel" brand voice (all-caps UI labels stay, eyebrow+display+lead hero cadence stays).

## Functional Requirements

FR1. Reduce aggregate marketing body-copy word count across the project by **35-45%** (target 40%), measured on trimmed prose only (excluding pure data tables, JSX attribute names, import statements, and numerical spec values).
FR2. Every factual claim present in the before copy that is NOT pure filler/hedging words must still be inferable from the after copy (or explicitly present). Specifically preserve:
  - Every named certification standard (ISO 9001:2015, ISO 14001:2015, ISO 50001, BIS, REACH, cGMP, NABL, DSIR)
  - Every named process innovation (ESJ direct, bypass sugar crystallization, 15% recovery gain)
  - Every plant name + its established year + its keyHighlights entries
  - Every timeline year + label + the core event in its description
  - Every product's industries array entries and packaging array entries and specification key/value pairs
  - All contact detail fields (address lines, logistics 4 distances, commercial 4 IDs)
  - All scope 1/2 targets (42% by 2030, net-zero 2038, Panchamrit alignment), EBP program, MSEDCL grid export, 12 MW, 25K T CO2, 50K farmers, 200+ clients, 8+ exports
FR3. Every `<p>`, every pillar `desc` / `bio` / `subtitle` / `description` (data objects + inline page literals), every initiative `description`, every product `description`, every plant `description`, every timeline `description`, every achievement `description`, every Impact/Sustainability pillar `points[]` bullet, every stat `description` — each re-written to be tighter, punchier, scannable, with hedging / filler clauses removed.
FR4. Headline strings (h1/h2/h3 titles, eyebrow labels, banner chip copy) should be trimmed only when gratuitously long; prefer keeping their original semantic intent and all-caps UI labels.
FR5. PageHeader subtitle props across the site — reduce each to one crisp, information-dense sentence.

## Non-Functional Requirements

NFR1. `npm run build` MUST exit 0 with no new import errors.
NFR2. `GetDiagnostics` on the project MUST return an empty array (no type/lint issues).
NFR3. Data files (`products.js`, `plants.js`, `achievements.js`, `timeline.js`, `siteData.js`, `team.js`, `programs.js`) MUST keep their exported keys, array lengths, and object key names 100% identical to before the trim (so all consuming pages/components don't break).
NFR4. Zero visual drift — no class names removed, no sections deleted, no component props dropped.
NFR5. Copy tone after trim matches the existing "design hotel + warm cooperative-industrial" voice. Short, specific sentences, no adjectives that don't carry information. Avoid vague words like "state-of-the-art", "renowned", "widely favored", etc. when a concrete alternative exists.

## Constraints, Dependencies, Assumptions

- Constraint: User previously said "do not data n media, do not change color or brand guidelines or any information" — today's new instruction ("reduce the textual data from sit by 40%...make everything perfect") overrides that for prose word COUNT, but NOT for factual data values. Media, images, colors, brands untouched.
- Dependency: Existing site has 11 page files, 7 data files, 3 home sub-components (`LeadershipQuote`, `HeroSection`, `SustainabilityCallout`) — all in scope for literal trimming.
- Assumption: "40%" is a target band (35-45%). Slight deviations allowed per section as long as the aggregate lands in band; don't force trim on already-short chip labels just to hit the number.
- Assumption: Bullet points (`points[]` arrays, `keyHighlights[]` arrays) count as prose. Each bullet should become 5-10 words shorter. Keep 4 bullets per pillar; don't reduce array length.

## Open Questions

None — user intent stated directly in the single request; proceed with 35-45% band and zero factual/data drift per constraints above.

## Acceptance Criteria

### Rule ACs

- **R1:** `npm run build` exits 0; no console errors.
- **R2:** `GetDiagnostics` returns [] (zero lints / type issues).
- **R3:** Every array in data files has the SAME length before vs after (products.length === 5, plants.length unchanged, achievements.length === 6, timeline.length === 7, stats.length === 6, pillars in team.js === 4, sustainabilityPillars.count === 4, initiatives.count === 12, certifications.count === 8, categories count === 5, missionPillars === 4, keyHighlights per plant === 4).
- **R4:** Every data object has the SAME key names before vs after (product still has `slug, name, tagline, description, industries, image, specifications, packaging`; plant still has `slug, name, established, capacity, description, image, gallery, keyHighlights, certifications`; timeline still has `year, label, description, icon`; etc).
- **R5:** Every numerical / factual value listed in FR2 is preserved verbatim in the files (spot-check 10 values across files).
- **R6:** No CSS class name was deleted from any JSX that affects rendering (pure text-content edits only).

### Rubric ACs

- **RU1 (Aggregate word-count reduction):** Scale 0-5. Target band 35-45%.
  - 0: <15% reduction (hardly any edits), or >60% (info lost)
  - 1: 15-25%
  - 2: 25-34%
  - 3: 35-45% ← PASS THRESHOLD (≥3)
  - 4: 38-42% (almost exactly 40)
  - 5: Measured 39-41% across all edited files combined.
  - Evidence source: `node` word-count script run before/after on the relevant string fields.

- **RU2 (Factual completeness — no semantic loss):** Scale 0-5.
  - 0: ≥3 concrete facts missing / mis-stated after trim
  - 1: 2 facts missing
  - 2: 1 minor fact lost (re-inferable from elsewhere in site)
  - 3: Zero facts lost; ≥1 hedging clause removed that wasn't carrying info
  - 4: Zero facts lost; every trimmed sentence carries the same core claim as the original + removed filler words
  - 5: Every trim is provably a strict subset semantically (no added claims, no dropped claims).
  - PASS THRESHOLD ≥3.
  - Evidence source: Side-by-side per-file review of original vs trimmed strings.

- **RU3 (Scan quality / density-after-trim):** Scale 0-3.
  - 0: Copy still reads fluffy; still has "renowned", "state-of-the-art", etc.
  - 1: Some fluff removed but inconsistent density across sections
  - 2: Consistent tight copy; no filler words; sentences are short and specific
  - 3: "Short, scannable copy" UX philosophy visibly met; every paragraph is 1-2 sentences, no paragraph > 3 lines on desktop.
  - PASS THRESHOLD ≥2.
