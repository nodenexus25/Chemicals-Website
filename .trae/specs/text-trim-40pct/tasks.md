# Tasks: 40% Site Text Reduction

Derived from `spec.md` — every AC maps into one or more tasks. Status per task is one of: `pending | in_progress | completed | blocked | cancelled`.

## Coverage ← AC

| Task(s) | Covers |
|---|---|
| T1, T2 | RU1 (band 35-45%), RU2 (facts preserved), RU3 (density), R5, R6 |
| T3 | R3, R4 (data shapes), RU1 |
| T4 | R1 (build), R2 (diagnostics) |

---

## Task 1: Trim Page Files Copy (About, Brand, Impact, Programs, Sustainability, Products, Contact, Home + home sub-components)

**Scope files:**
  - [src/pages/About.jsx](file:///A:/Chemical/src/pages/About.jsx) — pillars[].desc, 3 overview paragraphs, PageHeader subtitle, milestones subtitle, parentGroup description
  - [src/pages/Brand.jsx](file:///A:/Chemical/src/pages/Brand.jsx) — PageHeader subtitle, 3 middle prose paragraphs, promiseRows[].v, h2 span, supplyChain[].detail (keep all 4 items)
  - [src/pages/Impact.jsx](file:///A:/Chemical/src/pages/Impact.jsx) — PageHeader subtitle, pillar intro paragraph, pillars[].points[] (4 bullets each, keep all 4 but trim each 5-10 words), 4-point section intro, net-zero commitment paragraph, ESG progress bar labels
  - [src/pages/Sustainability.jsx](file:///A:/Chemical/src/pages/Sustainability.jsx) — same content as Impact (mirror edits; separate file so needs own pass)
  - [src/pages/Products.jsx](file:///A:/Chemical/src/pages/Products.jsx) — PageHeader subtitle
  - [src/pages/Programs.jsx](file:///A:/Chemical/src/pages/Programs.jsx) — PageHeader subtitle
  - [src/pages/Contact.jsx](file:///A:/Chemical/src/pages/Contact.jsx) — PageHeader subtitle
  - [src/pages/Home.jsx](file:///A:/Chemical/src/pages/Home.jsx) — enquiry intro paragraph, Helmet description (trim Helmet description to ~25 words)
  - [src/components/home/LeadershipQuote.jsx](file:///A:/Chemical/src/components/home/LeadershipQuote.jsx) — leadership bio body quote paragraphs, caption
  - [src/components/home/HeroSection.jsx](file:///A:/Chemical/src/components/home/HeroSection.jsx) — hero lead paragraph, any sub-caption
  - [src/components/home/SustainabilityCallout.jsx](file:///A:/Chemical/src/components/home/SustainabilityCallout.jsx) — intro body copy, per-step detail

**Priority:** high (largest word count, biggest impact on RU1 / RU3)

**Rules (Test Requirements):**
  - **TR-R1:** No new imports, no deleted sections. Every JSX classname preserved.
  - **TR-R2:** All numerical / named facts (42% by 2030, net-zero 2038, ESJ bypass crystallization, +15% recovery, 15% higher recovery, 12 MW, 25K T CO₂, 50K farmers, 200+ clients, 8+ exports, 38+ yrs, 7 plants, 1985-2024 timeline years) present verbatim.
  - **TR-R3:** No array-length changes. `pillars.length === 4` in About, Impact, Sustainability. `promiseRows.length === 4` in Brand. `supplyChain.length === 4`.

**Rubrics (Test Requirements):**
  - **TR-RU1 (word count):** Within these files, target 40% reduction aggregate on trimmed prose-only fields. Scale 0-5, pass ≥3.
  - **TR-RU2 (factual completeness):** Spot check 15 facts across these files — zero dropped. Scale 0-5, pass ≥3.
  - **TR-RU3 (scan density):** No paragraph > 3 desktop lines. No hedging adjectives ("renowned", "state-of-the-art", "indispensable", "vital"). Scale 0-3, pass ≥2.

**Status:** pending

---

## Task 2: Trim PageHeader `subtitle` Props Across All Pages + Helmet Meta Descriptions

**Scope files:**
  - All page files (same list as T1 + any other page that uses PageHeader or Helmet description/og:description meta)
  - Targets: every `subtitle="..."` prop value on `<PageHeader>`, and every `<meta name="description" content="...">` / SEO `description="..."` prop.

**Priority:** medium (lower word volume than T1, but contributes cleanly to RU3 density)

**Rules:**
  - **TR-R1:** Every PageHeader subtitle becomes ONE information-dense sentence, ≤28 words. Original multi-clause flowery copy → tight value sentence.
  - **TR-R2:** SEO meta descriptions ≤ 155 chars (Google best-practice). Keep all keywords: ethanol, ESJ, Maharashtra, Sanjivani, chemical, cooperative.

**Rubrics:**
  - **TR-RU1 (reduction):** Every subtitle trimmed ≥ 30% from its current word count. Pass ≥2/3 per-rubric scale.

**Status:** pending

---

## Task 3: Trim Data Layer Copy (products, plants, achievements, timeline, siteData stats descriptions, team bios+pillars, programs initiatives)

**Scope files:**
  - [src/data/products.js](file:///A:/Chemical/src/data/products.js) — 5 products: each `.description` (currently ~80 words) → ~45-50 words. `.tagline` (4-7 words currently — keep; if any tagline is verbose, tighten but keep ≤ 8 words). All `.industries[]`, `.specifications{}` entries, `.packaging[]` arrays untouched verbatim (value keys, NOT copy).
  - [src/data/plants.js](file:///A:/Chemical/src/data/plants.js) — each plant `.description` (~110 words each) → ~60-65 words. `.keyHighlights[]` bullets: each from 11-15 words → 7-10 words, keep length 4. `.certifications[]` per plant untouched. `.established`, `.capacity` values untouched.
  - [src/data/achievements.js](file:///A:/Chemical/src/data/achievements.js) — 6 entries: `.description` trim each from ~45 words → ~25-28 words. `.stats[].label/value` untouched.
  - [src/data/timeline.js](file:///A:/Chemical/src/data/timeline.js) — 7 entries: `.description` trim each from ~35-45 words → ~18-22 words. `.year/.label/.icon` untouched.
  - [src/data/siteData.js](file:///A:/Chemical/src/data/siteData.js) — 6 `stats[].description`: each ~8 words → ~4-6 words. `ecosystemFlow.description` trim ~10 words. `contactInfo` ALL fields (names/addresses/phone/email/hours/logistics/commercial + map URLs) untouched verbatim (these are factual, not copy). `certifications[]` untouched.
  - [src/data/team.js](file:///A:/Chemical/src/data/team.js) — `leadership[0].bio` ~55 words → ~30-32 words, values[4] untouched, years untouched. `foundingStory.subtitle` one dense sentence. `foundingStory.paragraphs[0..2]` (3 paragraphs ~70 words each → ~40-42 words each). `foundingStory.parentGroup.description` trim. `missionPillars[0..3].desc` each ~40 words → ~22-25 words.
  - [src/data/programs.js](file:///A:/Chemical/src/data/programs.js) — 6 `programInitiatives` each `.description` ~35 words → ~18-20 words. Initiatives built by mapping achievements + plants inherit their trimmed copy from T3 edits of those files (no double-trim needed on mapped items).

**Priority:** high (data-owns-copy architecture; ~40% of all site prose lives in these files per spec)

**Rules:**
  - **TR-R1 (R3 from spec):** All array lengths identical to baseline (5 products, achievements=6, plants= as many as original, timeline=7, stats=6, certifications=8, initiatives=12, missionPillars=4).
  - **TR-R2 (R4 from spec):** Object key names untouched across every file (products still have slug/name/tagline/description/industries/image/specifications/packaging; timeline still year/label/description/icon).
  - **TR-R3 (R5 from spec):** 10 random fact spot-check values are preserved verbatim: 1985 founding, 12 MW co-gen, 99.9% Anhydrous purity, 77.1°C Ethyl Acetate boiling point, ISO 9001:2015, IP/BP/USP/EP quality std, 2019 ESJ year, +15% recovery, 5M+ sanitizer units, 25,000+ T CO₂, 50,000+ farmers, GSTIN 27AAACS1234F1Z5 (check 10/12 pass).

**Rubrics:**
  - **TR-RU1 (reduction 35-45%):** Aggregate word-count reduction on .description / .bio / .subtitle / .desc / .paragraphs / .points fields only. Scale 0-5, pass ≥3.
  - **TR-RU2 (factual completeness):** No certification name dropped, no process step claim dropped (ESJ bypass step, bio-gas fuels acetic anhydride, sulphur prevents corrosion — all present). Scale 0-5, pass ≥3.

**Status:** pending

---

## Task 4: Build + Diagnostics Verification

**Scope:** Run `npm run build` and `GetDiagnostics`. Then run a word-count node script on the edited string fields to produce aggregate before/after numbers for RU1 evidence.

**Priority:** high (hard gates for spec completion)

**Rules:**
  - **TR-R1 (R1 from spec):** `npm run build` exit code === 0.
  - **TR-R2 (R2 from spec):** `GetDiagnostics` returns empty array.
  - **TR-R3 (R6 from spec):** No CSS class-name removals or additions detected in any text-content-only diff (spot-check via `git diff` style comparison — or eyeball diff of classnames preserved vs before edit).

**Rubrics:** None. Pure rule gates.

**Status:** pending

---

## Completion Evidence

Per completed task, attach under each task heading:
  - `Completion Evidence: Build log paste (T4) | Before/after word counts for prose fields (T1,T2,T3) | Spot-check 10 facts list with before/after present confirmations.`
