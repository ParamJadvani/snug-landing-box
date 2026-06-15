## Phase 0 — Repo Audit (what I actually see)

**Stack confirmed:** React 19 + Vite 8, MUI v6 (`@mui/material` 9.x), Emotion, framer-motion 12, react-router-dom 7. No TypeScript, no Tailwind, no Shadcn — clean. Entry chain: `main.jsx` → `App.jsx` → `components/Router.jsx` → lazy `pages/Home.jsx` at `/`.

**About the "blank preview":** I do not have a remote-pull tool — Lovable's sandbox already mirrors your GitHub push, and I can read all your real files (Home.jsx, Navbar, Banner, Vision_Section, GridCard, SliderCard, DroneBanner, Footer, etc.). The blank screen you saw came from an earlier edit that swapped in an empty `<main>` placeholder. The fix is to restore Home as the `/` route (it already is in `Router.jsx`) and rebuild its contents per the brief. No "cache refresh" tool call is needed — once we save new code, Vite HMR re-renders.

**Component tree found:**
```
App
└─ Router (react-router)
   ├─ "/"        → pages/Home.jsx
   ├─ "/aboutus" → pages/AboutUS.jsx
   ├─ "/services"→ pages/Services.jsx
   ├─ "/contact" → pages/ContactUS.jsx
   ├─ "/training"→ pages/Training.jsx
   └─ "/blog"    → pages/Blog.jsx

Shared components:
  Navbar, Banner, Banner_2, DroneBanner, Vision_Section,
  ContactUsInput, Footer/{Footer, AttachImageFooter, Section, SocialIcons},
  Card/GridCard/{GridCard, ResponsiveCard}, Card/SliderCard/{SliderCard, TestimonialCard},
  BlogSections/{BlogBanner, BlogBanner_2, BlogGrid},
  ContactUSMap/{ContactUSMap, ContactForm, GoogleMap}
```

## Phase 1 — Asset Inventory & Placement Map

Every file under `src/assets/` will be placed. Nothing left unused.

**Logos / vectors**
- `LOGO.png` → Navbar brand + Footer brand
- `Vector.png`, `Vector2.png` → Vision_Section backgrounds (existing usage kept)
- `Screenshot 2024-12-07 184837.png`, `…184909.png` → "Engineering Telemetry" preview frames inside Specs section
- `HOME.jpg`, `HOME (1).png` → parallax backdrop behind Hero + section divider backdrop

**BannerImage/** (page heroes — kept on their respective pages)
- `Home.png` → Hero backdrop on `/`
- `Aboutus.png`, `Service.png`, `Training.png`, `Contactus.png` → respective page banners (unchanged)

**Image PNG/** — drone art used across the new Home
- `freepik--drone-1--inject-1.png`, `…-1-1`, `…-1-3`, `…-1-4`, `…-1-5`, `…-1-6` → Hero floating drone + Spec card thumbnails (one per stat: flight time, speed, range, payload, ceiling, comms)
- `freepik--drone-2--inject-1.png`, `…copy.png` → Aerodynamic Feature Breakdown alternating split sections
- `freepik--drone-3--inject-1.png`, `…copy`, `…-1-1`, `…-1-1 copy` → Mission Applications grid (4 hero cards)
- `freepik--Cloud--inject-73.png` → parallax cloud layers behind Hero + between sections (floating)
- `Drone race-pana 1.png`, `Drone surveillance-bro.png`, `Drone surveillance-cuate 1.png`, `drone-amico.png`, `drone-bro.png` → Use-Cases / Mission cards (defense, mapping, racing, surveillance, logistics)
- `Group.png`, `Group 55.png`, `Frame 187.png`, `Frame 188 copy.png` → decorative section dividers + Footer attach image

**CardImage/** — icon-style PNGs for Specs and Capabilities chips
- `drone.png`, `drone (1).png`, `drone-delivery.png` → Spec grid icons
- `electric-factory.png`, `renewable-energy.png`, `solar-energy.png` → "Powertrain & Energy" capability strip
- `smart-farm.png`, `mapping.png` → Mission Applications (Agriculture, Mapping)
- `pilot.png`, `support.png`, `winner.png`, `racing-game.png` → "Pilot Experience" credentials row

**SectionImage/** — illustrative supports
- `Business Plan-bro.png`, `Vision statement-rafiki.png` → kept in Mission/Vision blocks
- `Certification-bro.png`, `Online Review-rafiki.png`, `Progress overview-bro.png`, `Stamp collecting-bro.png`, `drone-cuate.png` → distributed into "Engineering Process", "Certifications", "Telemetry", "Trust" mini-sections

**ContactUSMap/** (already-imported drones) — kept where used.

## Phase 2 — New Home Structure (file-by-file)

All new code is `.jsx` only, MUI `sx`/`styled`, framer-motion for entry animation, organic radii (`24–40px`) + inline SVG wavy dividers.

**New files**
1. `src/components/motion/Reveal.jsx` — small wrapper: `motion.div` with `whileInView` (y:35→0, opacity:0→1), staggered via index prop. Default for text/cards.
2. `src/components/motion/FloatIn.jsx` — spring scale 0.93→1, opacity 0→1, for drone imagery (floating feel).
3. `src/components/dividers/WaveDivider.jsx` — inline SVG wavy path, accepts `from`/`to` colors + flip prop.
4. `src/components/showcase/HeroShowcase.jsx` — cinematic hero (Home.png backdrop + cloud parallax + floating drone-1 + dynamic typography + 2 CTAs "Explore Fleet" / "Request Demo").
5. `src/components/showcase/SpecsGrid.jsx` — 6 elegant glassy cards (flight time, top speed, range, payload, service ceiling, datalink) with CardImage icons + telemetry numerals.
6. `src/components/showcase/FeatureBreakdown.jsx` — alternating left/right split rows for aerodynamic frame, flight controller, vision system, swarm software. Uses `freepik--drone-2/3` art.
7. `src/components/showcase/MissionApplications.jsx` — 4-up rounded card grid: Defense, Mapping & Survey, Logistics & Delivery, Agriculture. Uses surveillance/race/delivery/mapping art.
8. `src/components/showcase/EngineeringTelemetry.jsx` — uses the two Screenshot PNGs as device frames + animated counters.
9. `src/components/showcase/PilotCredentials.jsx` — chip strip with pilot/support/winner/racing icons.
10. `src/theme/ThemeProvider.jsx` — extend existing theme with `shape.borderRadius: 24`, custom `palette.brand` tokens (`deep #0A1828`, `azure #0047AE`, `glow #5C76DD`, `mist #D4E8FF`), typography scale (Inter/Space Grotesk via existing Emotion `<style>` import in `index.css`). No breaking changes to existing pages.

**Edited files**
- `src/pages/Home.jsx` — rewritten to compose: `<Navbar />` → `<HeroShowcase />` → `<WaveDivider />` → `<SpecsGrid />` → existing `<Vision_Section x2 />` (kept, wrapped in `<Reveal>`) → `<FeatureBreakdown />` → existing `<GridCard servicesData />` (kept) → `<EngineeringTelemetry />` → `<MissionApplications />` → existing `<SliderCard />` (kept) → `<PilotCredentials />` → existing `<GridCard trainingData />` (kept) → `<DroneBanner />` → `<ContactUsInput />` → `<AttachImageFooter />` → `<Footer />`. Nothing existing is deleted — your current sections all survive, wrapped with reveal animations and woven between the new premium modules.
- `src/index.css` — add Google font import (Space Grotesk + Inter), smooth scroll, html overflow-x:hidden for guaranteed no horizontal scroll.

**Untouched**
- Router, other pages (AboutUS/Services/Training/Blog/ContactUS), Navbar, Footer, existing cards. UI-only change scoped to Home.

## Phase 3 — Visual Language

- Background layers: deep navy `#0A1828` → azure gradient sections separated by wavy SVG dividers (airflow feel).
- Cards: `borderRadius: { xs: 24, md: 32 }`, subtle `backdrop-filter: blur(14px)`, 1px `rgba(255,255,255,0.08)` border, soft glow shadow `0 30px 80px -40px rgba(92,118,221,.55)`.
- Typography: Space Grotesk 600/700 for headings (tight letter-spacing), Inter 400/500 body. Fluid sizing via `clamp()` inside `sx`.
- Buttons: pill `borderRadius: 999`, gradient `linear-gradient(135deg,#0047AE,#5C76DD)` with hover glow.
- Responsiveness: every `sx` uses MUI breakpoint objects `{ xs, sm, md, lg, xl }`; `Container maxWidth="xl"`; images `width: '100%'`, `height: 'auto'`.

## Phase 4 — Animation Rules

- Text/blocks: `<Reveal>` → `initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.25}} transition={{duration:0.7,delay:i*0.08,ease:[0.22,1,0.36,1]}}`.
- Drones/images: `<FloatIn>` → `initial={{opacity:0,scale:0.93}} whileInView={{opacity:1,scale:1}} transition={{type:'spring',stiffness:90,damping:18}}` + idle `animate y:[0,-8,0]` 4s loop.
- Section containers: `staggerChildren: 0.08`.

## Phase 5 — Verification

After build I'll run `bun run build` (auto) and `view_preview` at desktop + mobile widths to confirm no horizontal scroll and all assets render.

---

Approve and I'll execute exactly this in Phase 2.