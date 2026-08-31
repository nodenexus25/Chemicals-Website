# Corporate Showcase — Website Template

A production-grade **React 18 + Vite 5 + Tailwind CSS 3.4** multi-page website template. Data-driven architecture, cinematic Framer Motion animations, capsule-style glass navbar, reusable design-system components, and full SEO / OG support out of the box.

Built for cooperatives, manufacturing groups, B2B companies, consumer brands, and any business that needs:
- Hero landing page with stat counters
- About / Our Story with leadership profiles and a timeline
- Product / services catalog with spec cards
- Programs / initiatives listing with filters
- Flagship brand / specialty page
- Sustainability / impact page
- Dual-audience contact form

---

## 1. Tech Stack

| Layer | Library / Tool | Purpose |
|-------|---------------|---------|
| **Build** | Vite 5 | Ultra-fast HMR dev server + production bundling |
| **Framework** | React 18 | Component-driven UI architecture |
| **Routing** | React Router v6 | Client-side multi-page navigation |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS with custom theme tokens |
| **Animations** | Framer Motion 11 | Page transitions, scroll reveals, micro-interactions, spring-based nav pill |
| **Icons** | Lucide React | Consistent, tree-shakeable icon set (2000+ icons) |
| **SEO** | React Helmet Async | Per-page `<title>`, meta, OG, Twitter Card, canonical URL |
| **Forms** | React Hook Form | Typed, performant form handling + validation |

---

## 2. Project Directory Structure

```
{your-project}/
├── index.html                    # Vite HTML entry (update <title>, lang, favicon here)
├── package.json                  # Dependencies + scripts (dev / build / preview)
├── vite.config.js                # Vite dev server (port 5173, auto-open)
├── tailwind.config.js            # Custom theme: colors, fonts, keyframes, animations
├── postcss.config.js             # Tailwind + Autoprefixer pipeline
├── public/                       # Static assets served at root
│   ├── logo.png                  # Shared brand logo (navbar + footer)
│   ├── leader-1.avif             # Leadership / team photos
│   ├── leader-2.png              # …
│   └── favicon.svg               # Site favicon
└── src/
    ├── main.jsx                  # React root + HelmetProvider + BrowserRouter
    ├── App.jsx                   # Route map, Navbar/Footer shell, PageWrapper transitions
    ├── index.css                 # Tailwind base/components/utilities + global styles + custom scrollbar
    │
    ├── components/               # Reusable, presentation-only UI blocks
    │   ├── Navbar.jsx            # Floating capsule navbar (backdrop-blur 14px, spring active-pill)
    │   ├── Footer.jsx            # 5-column footer with brand, link groups, ecosystem diagram, legal
    │   ├── PageHeader.jsx        # Reusable inner-page hero banner — 3 tone variants
    │   ├── SEO.jsx               # Per-page meta / OG / Twitter / canonical helper
    │   ├── AnimatedCounter.jsx   # Scroll-triggered (once) number counter
    │   ├── ProductCard.jsx       # Generic product / service / offering spec card
    │   ├── InitiativeCard.jsx    # Program / offering / initiative tile with category
    │   ├── FlowDiagram.jsx       # N-step circular / linear value-chain visualization
    │   ├── DualContactForm.jsx   # Two-tab inquiry form (Audience A + Audience B)
    │   └── Timeline.jsx          # Horizontal legacy / milestone timeline
    │
    ├── data/                     # ✅ ALL copy/content lives here — edit data, not components
    │   ├── siteData.js           # Global: stats[], hero copy, ecosystem flow, contact info
    │   ├── products.js           # Offerings: coreProduct + productCatalog[]
    │   ├── team.js               # About: foundingStory + leadership[] bios
    │   ├── timeline.js           # Milestones: timeline[] of {year, label, description, icon}
    │   └── programs.js           # Programs/Services: initiatives[] + derived dropdown options
    │
    └── pages/                    # One route = one file; data + presentational assembly live here
        ├── Home.jsx              # Landing: hero → stats → offerings → leadership → CTA
        ├── About.jsx             # Our Story → Founder → Team → Timeline
        ├── Programs.jsx          # Services/Initiatives: grid + inquiry form
        ├── Products.jsx          # Core product deep-spec + catalog cards
        ├── Brand.jsx             # Flagship / specialty brand detail page
        ├── Impact.jsx            # Sustainability / Impact / ESG page with flow diagram
        ├── Contact.jsx           # Location + map embed + dual inquiry form
        └── NotFound.jsx          # 404 fallback with CTA back to Home
```

---

## 3. Design System (Tailwind Theme Tokens)

Defined in [tailwind.config.js](file:///a:/Agriculture/tailwind.config.js). Swap HEX values to rebrand the entire site — every component uses these tokens, so no component-level color hardcodes.

### 3.1 Color Palette (Example — Override Freely)

| Token | Suggested Role | Default HEX |
|-------|---------------|-------------|
| `primary` | Brand anchor — CTAs, active nav, hero overlays | `#2E7D32` |
| `primary-light` | Hover states, soft accents | `#4CAF50` |
| `primary-dark` | Deep brand, hero scrim, emphasis text | `#1B5E20` |
| `accent` | Eyebrow labels, awards, highlights, 2nd CTA | `#C68E17` |
| `accent-light` / `accent-dark` | Gradient stops for accent | `#DAA520` / `#A67B0F` |
| `warm` | Secondary brand, by-category cards | `#6B4226` |
| `warm-light` / `warm-dark` | Gradient stops for warm | `#8B5A2B` / `#4E2F18` |
| `neutral-light` | Page background, light surface | `#FBF9F4` |
| `neutral-cream` | Secondary surface, cards, sections | `#F5F0E6` |
| `neutral-dark` | Body text, footer background | `#1A1A1A` |
| `neutral-mid` | Muted labels, secondary text | `#6B6B6B` |

> **Rename the tokens if you want.** Just grep-and-replace the token names across `tailwind.config.js` + `index.css` + components — they are the single source of truth.

### 3.2 Typography

| Family | Tailwind Key | Role |
|--------|-------------|------|
| `Inter` (fallback system-ui) | `font-sans` | Body copy, nav, UI labels, buttons |
| `Playfair Display` (fallback Georgia) | `font-display` | Page headings, hero lines, section titles |

Global: `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility`.

### 3.3 Custom Animations & Keyframes

| Tailwind Class / Component | Behavior |
|------|---------|
| `animate-fade-in-up` | 600ms ease-out — opacity 0→1 + translate Y 20px→0 |
| `animate-float` | 6s infinite ease-in-out — ±10px vertical bob |
| `PageWrapper` (Framer Motion) | 450ms cubic-bezier `[0.22,1,0.36,1]` — opacity + Y on mount/unmount (used for every route change) |
| Navbar `layoutId="navpill"` | Spring animation (stiffness 380, damping 32) — shared-element pill slides between active links |

### 3.4 Radius & Depth Convention

Consistency matters — keep these unless you want a different visual direction:
- **Container navbar**: `rounded-2xl` (md: `rounded-3xl`) + `backdrop-blur-xl` 14px / saturate(1.4)
- **Cards / tile images**: `rounded-2xl` (~22px curve)
- **Buttons / nav pills**: `rounded-full`
- **Shadows on scroll**: `shadow-[0_8px_32px_rgba(26,26,26,0.08)]`
- **Content max-width**: `max-w-7xl` centered with `px-4 sm:px-6 lg:px-8`

---

## 4. Routing Map (Pages ↔ URLs)

Defined in [App.jsx](file:///a:/Agriculture/src/App.jsx#L46-L111). Every route is wrapped in `<PageWrapper>` and mounted inside `<AnimatePresence mode="wait">` so route-to-route transitions feel smooth. A `<ScrollToTop>` helper fires `window.scrollTo(0,0)` on every pathname change.

| URL | Page File | Purpose |
|-----|-----------|---------|
| `/` | [Home.jsx](file:///a:/Agriculture/src/pages/Home.jsx) | Hero, key stats, offering preview, team spotlights, CTA |
| `/about` | [About.jsx](file:///a:/Agriculture/src/pages/About.jsx) | Origin story, founder profile, team bios, legacy timeline |
| `/programs` | [Programs.jsx](file:///a:/Agriculture/src/pages/Programs.jsx) | Services / initiatives grid (filterable by category) + inquiry form |
| `/products` | [Products.jsx](file:///a:/Agriculture/src/pages/Products.jsx) | Core product deep-spec + cards for catalog / by-products |
| `/brand` | [Brand.jsx](file:///a:/Agriculture/src/pages/Brand.jsx) | Flagship / specialty brand story page |
| `/impact` | [Impact.jsx](file:///a:/Agriculture/src/pages/Impact.jsx) | Sustainability / ESG / impact pillars + value-flow diagram |
| `/contact` | [Contact.jsx](file:///a:/Agriculture/src/pages/Contact.jsx) | HQ address, map embed, dual-tab inquiry form |
| `*` | [NotFound.jsx](file:///a:/Agriculture/src/pages/NotFound.jsx) | 404 with branded CTA back to Home |

To **rename URLs**, edit the `<Route path="...">` in App.jsx and the `navLinks` in Navbar.jsx.

---

## 5. Data Layer — Content Files

The UI is **100% data-driven**. Every line of copy, every product spec, every team bio lives as typed arrays / objects in `src/data/*.js` — components only map over them. Rule: **change content = edit a data file, never a component.**

### 5.1 `siteData.js` — Global Content

```js
export const stats = [          // Rendered by AnimatedCounter on Home / About
  { id, value, suffix, prefix, label, description }
];

export const ecosystemFlow = {  // Rendered by Footer + Impact page
  title, description,
  flow: [ { step, label, icon, detail } ],
  ctaLabel, ctaLink
};

export const contactInfo = {    // Rendered by Contact + Footer
  headquarters: { name, address, phone[], email[], workingHours },
  secondaryOffice: { name, phone[], email[], officer },
  mapEmbed: "https://www.google.com/maps/embed?pb=!..."
};
```

### 5.2 `products.js` — Offerings Catalog

```js
export const coreProduct = {
  name, variants[], description,
  specs: { /* arbitrary key:value spec table */ },
  industries[], icon
};

export const productCatalog = [  // Rendered as ProductCard grid
  { name, use, description, icon, industries[], specs: { /* … */ } }
];
```

### 5.3 `team.js` — About Page

```js
export const leadership = [     // Rendered as profile cards
  { name, role, bio, photo, values[] }
];

export const foundingStory = {  // Rendered as the story section
  title, subtitle, paragraphs[],
  founder: { name, epithet, photo }
};
```

### 5.4 `timeline.js` — Milestones

```js
export const timeline = [       // Rendered by Timeline component
  { year, label, description, icon }
];
```

### 5.5 `programs.js` — Services / Initiatives

```js
export const initiatives = [    // Rendered as InitiativeCard grid
  { id, icon, title, description, category }
];

export const initiativeOptions = initiatives.map(i => ({
  value: i.id, label: i.title   // Dropdown options for contact form
}));
```

> **Tip:** Categorize `category` fields (e.g., "Technology", "Advisory", "Finance") so the Programs grid can later be wrapped in a client-side filter UI — the data model already supports it.

---

## 6. Components Reference

Every component is **presentational-only**. It does not own copy — it receives data as props or imports from `data/`.

### 6.1 Navbar
File: [Navbar.jsx](file:///a:/Agriculture/src/components/Navbar.jsx)
- Floating capsule pattern — `fixed top-0 inset-x-0 z-50` with a centered `max-w-7xl` inner container
- **Two visual states driven by `scrollY > 20px`**:
  - Top: larger padding, semi-transparent, no shadow
  - Scrolled: tighter padding, higher opacity, soft elevation shadow
- **Active link**: Framer `layoutId="navpill"` spring animation slides a pill background between nav items
- **Mobile**: Animated accordion (height + opacity) — auto-closes when route changes
- **Nav links**: Edit the `navLinks` array at the top of the file to add / reorder items

### 6.2 Footer
File: [Footer.jsx](file:///a:/Agriculture/src/components/Footer.jsx)
- Layout: `lg:grid-cols-5` (brand column + 3 link groups + spacer / diagram)
- `footerLinks` array at top of file defines the 3 link columns (heading + links[])
- Mid-band: Ecosystem flow diagram rendered from `siteData.ecosystemFlow.flow[]`
- Socials row: 4 icon buttons (Instagram / Facebook / LinkedIn / YouTube placeholders)
- Legal row: Copyright + Privacy / Terms / Sitemap

### 6.3 PageHeader
File: [PageHeader.jsx](file:///a:/Agriculture/src/components/PageHeader.jsx)

Reusable inner-page hero. Import it on every page except Home (which has a custom hero).

| Prop | Type | Purpose |
|------|------|---------|
| `eyebrow` | string | All-caps eyebrow label, rendered next to accent divider |
| `title` | ReactNode | H1 heading, `font-display` |
| `lead` | string | 1–2 line paragraph below heading |
| `breadcrumb` | `{to, label}` | "← Back to Home" style link above eyebrow |
| `backgroundImage` | URL | Optional hero image |
| `heightClass` | string | Default `min-h-[58vh] md:min-h-[64vh]` |
| `tone` | `"primary"` \| `"accent"` \| `"neutral"` | Pick gradient scrim + `mix-blend-multiply` |

### 6.4 SEO
File: [SEO.jsx](file:///a:/Agriculture/src/components/SEO.jsx)

Mount once per page. Defaults apply if you omit props.

| Prop | Behavior |
|------|----------|
| `title` | Becomes `${title} \| Your Brand Name` — set default brand suffix inside SEO.jsx |
| `description` | `<meta name="description">` + OG + Twitter |
| `keywords` | Appended to the default keywords string |
| `image` | OG image + Twitter summary_large_image |
| `path` | Builds canonical URL (prefix with your domain inside SEO.jsx) |

### 6.5 Other Components

| Component | File | Pattern |
|-----------|------|---------|
| `AnimatedCounter` | [AnimatedCounter.jsx](file:///a:/Agriculture/src/components/AnimatedCounter.jsx) | Intersection-Observer (once) number counter. Props: `value`, `suffix`, `prefix`, `duration` |
| `ProductCard` | [ByProductCard.jsx](file:///a:/Agriculture/src/components/ByProductCard.jsx) | Offering tile with icon, name, use-case, industry chips, spec table |
| `InitiativeCard` | [InitiativeCard.jsx](file:///a:/Agriculture/src/components/InitiativeCard.jsx) | Program tile — category chip, icon, title, description |
| `FlowDiagram` | [CircularEconomyDiagram.jsx](file:///a:/Agriculture/src/components/CircularEconomyDiagram.jsx) | N-step connected node visualization — accepts any length `flow[]` |
| `DualContactForm` | [DualContactForm.jsx](file:///a:/Agriculture/src/components/DualContactForm.jsx) | Tab-switcher form with two audiences (e.g. Client / Partner or Farmer / Business) — React Hook Form validation |
| `Timeline` | [Timeline.jsx](file:///a:/Agriculture/src/components/Timeline.jsx) | Horizontal milestone strip with icons, sticky year labels |

---

## 7. Image Asset Convention

Three image sources are supported by the template. Use whichever fits your deployment.

- **Static / brand assets** → Put them in `public/`, reference as `/filename.ext`. Good for logos, team photos, PDFs.
- **Dynamic / editorial imagery** (heroes, section art) → Use any CDN or generate via your preferred service. Pattern:
  ```
  https://your-image-cdn.com/...?prompt={urlEncoded}&size={landscape_16_9|square_hd|portrait_4_3}
  ```
- **Fallbacks**: Navbar logo has an inline SVG fallback that auto-renders if the PNG load fails.

---

## 8. Scripts

Defined in [package.json](file:///a:/Agriculture/package.json#L6-L10).

```bash
# Install dependencies (run once)
npm install

# Start dev server (http://localhost:5173 — auto-opens in browser)
npm run dev

# Production build → outputs to ./dist/
npm run build

# Preview the production build locally (after `npm run build`)
npm run preview
```

---

## 9. Architecture & Patterns

### Core Patterns to Preserve
1. **Data-owned copy**: Pages / components import from `data/`. Components never hardcode marketing copy.
2. **`<PageWrapper>` + AnimatePresence**: Prevents flash between routes; 450ms fade/slide transition.
3. **Smooth scroll + scroll reset**: `html { scroll-behavior: smooth }` + instant scroll-to-top on every navigation.
4. **Selection style**: Uses brand tokens (`::selection { bg-primary/25 text-primary-dark }`).
5. **Custom branded scrollbar**: 10px wide, primary-color thumb, neutral-light track.
6. **Mobile-first shell**: All content is `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` — consistent gutters.
7. **Breakpoint discipline**: `sm` 640, `md` 768, `lg` 1024. Nested responsive classes follow that order.

---

## 10. Customizing the Template

### 10.1 Quick Rebrand
1. Swap assets in `/public/` (logo, team photos, favicon)
2. Replace color HEX values in [tailwind.config.js](file:///a:/Agriculture/tailwind.config.js#L9-L23) — that's 95% of the visual identity
3. Replace content in `data/siteData.js` → `stats`, `ecosystemFlow`, `contactInfo`
4. Set brand suffix + canonical domain in [SEO.jsx](file:///a:/Agriculture/src/components/SEO.jsx) `defaults`
5. Update `navLinks` in [Navbar.jsx](file:///a:/Agriculture/src/components/Navbar.jsx#L6-L14) and `footerLinks` in [Footer.jsx](file:///a:/Agriculture/src/components/Footer.jsx#L21-L50)

### 10.2 Adding a New Page
1. Create `src/pages/[NewPage].jsx`
   ```jsx
   import SEO from "../components/SEO";
   import PageHeader from "../components/PageHeader";

   export default function NewPage() {
     return (
       <>
         <SEO title="Page Title" description="..." path="/new-url" />
         <PageHeader eyebrow="Section" title="Page Title" lead="Lead in..." />
         {/* rest of sections */}
       </>
     );
   }
   ```
2. If content-heavy, create `src/data/newPageData.js` and import it
3. Add a `<Route path="/new-url" element={<PageWrapper><NewPage /></PageWrapper>} />` in [App.jsx](file:///a:/Agriculture/src/App.jsx#L46-L111)
4. Add to `navLinks` in Navbar.jsx (if top-level)
5. Add to `footerLinks` in Footer.jsx (if applicable)

### 10.3 Content Edit Cheat Sheet
Always edit the data file first — component layer is presentation-only.

| To change… | Edit |
|-----------|------|
| Stats numbers / labels | `data/siteData.js` → `stats` |
| Product specs / catalog | `data/products.js` |
| Leadership bios / origin story | `data/team.js` |
| Milestone timeline items | `data/timeline.js` |
| Programs / initiatives list | `data/programs.js` |
| Phone, address, HQ info | `data/siteData.js` → `contactInfo` |
| Footer link groups | `components/Footer.jsx` → `footerLinks` |
| Default SEO meta / brand suffix | `components/SEO.jsx` → `defaults` |
| Nav links / order | `components/Navbar.jsx` → `navLinks` |
| Color palette | `tailwind.config.js` → `theme.extend.colors` |
| Typography (font families) | `tailwind.config.js` → `theme.extend.fontFamily` + Google Fonts link in `index.html` |

---

## 11. Content Voice & Copy Patterns (Recommended)

These are conventions used in the template — keep or discard depending on brand personality:

- **UI labels**: ALL-CAPS with `tracking-[0.18em–0.22em]` (eyebrows, nav, footer headings)
- **Headline register**: Clean, design-hotel short. `font-display`, tight tracking (`tracking-tight`)
- **Body copy**: Warm, specific, benefit-first. 1.6–1.7× leading.
- **Hero structure**: Pill badge → eyebrow → 2–3 line display heading → lead paragraph → primary + secondary CTAs
- **Taglines**: If multilingual / regional brand, consider romanized local-language taglines for hero moments.
- **Tagline repetition**: Repeat a single brand tagline / slogan 3–5 times across Home / About / Footer to build identity.

---

## 12. Entry Points Chain

```
index.html (#root div, <head> — update lang, og image, fonts link here)
  ↓
main.jsx
  → <React.StrictMode>
    → <HelmetProvider>          (per-page SEO by React Helmet Async)
      → <BrowserRouter>         (React Router client-side routing)
        → App.jsx
          → <ScrollToTop />     (fires on every pathname change)
          → Navbar
          → <main>
              <AnimatePresence mode="wait">
                <Routes key={location.pathname}>
                  …each <Route> wraps page in <PageWrapper> motion.div
                </Routes>
              </AnimatePresence>
            </main>
          → Footer
```
