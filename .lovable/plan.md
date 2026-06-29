# Elkenno Life Sciences — Marketing Site Plan

A 5-page, light-themed, mobile-first marketing site styled around the uploaded logo. Built on the existing Vite + React + TypeScript + Tailwind + shadcn stack already in the project. No backend required (contact form validates client-side and stubs submission).

## Brand & Design System

Add semantic tokens to `src/styles.css` (HSL via oklch-compatible values, kept in design-system pattern — no hardcoded hex in components):

- `--primary` leaf green `#4CAF50`
- `--accent` golden yellow `#F2B705`
- `--earth` brown `#8B5A2B` (secondary text, footer)
- `--cream` `#FFF3CC` (section bands, badges)
- `--background` off-white `#FAFAF7`
- `--foreground` charcoal `#2B2B2B`

Typography via Google Fonts in `index.html`: **Poppins** (headings) + **Inter** (body), wired into Tailwind font tokens.

Reusable visual motifs:
- Small yellow eyebrow label above section headings
- Rounded-2xl cards, soft shadows
- Low-opacity SVG leaf pattern as background for cream bands
- Leaf/sprout lucide icons (`Sprout`, `Leaf`) as bullets/dividers

## Assets

Logo copied to `public/elkenno-logo.png` (used in navbar, footer, favicon via `index.html`).

Hero & section imagery: generated via the image tool (3 hero slides + about/process/contact banners + farmer testimonial avatars + gallery shots). Each saved under `src/assets/` and imported as ES6 modules.

## Routing

Update `src/routes/AppRoutes.tsx` to:
- `/` Home
- `/about` About
- `/products` Our Products
- `/media` Media
- `/contact` Contact

`MainLayout` keeps shared Navbar + Footer.

## Components (new)

- `Navbar` (rewrite) — sticky, logo left, links right, yellow "Get a Quote" CTA, mobile hamburger via shadcn Sheet
- `Footer` — logo, tagline, quick links, contact, socials, earth-brown band
- `SectionHeading` — eyebrow + title + optional subtitle
- `HeroSlider` — embla-carousel-react (already installed) with autoplay plugin, 3 slides, dark gradient overlay, dots + arrows
- `ValueProps` — 4 icon cards on cream band
- `ProductCard` — image, name, category badge, description, View Details
- `StatCounter` — animated count-up on scroll-into-view
- `TestimonialCard`
- `CTABanner` — full-width golden/cream banner
- `LeafPattern` — inline SVG background component

## Pages

**Home** — Hero slider, value props, about snapshot (2-col), featured products grid (6), stats counters, testimonials carousel, CTA banner.

**About** — Banner, full mission copy verbatim, Mission/Vision 2-col cards, 5-step horizontal process timeline, Why Organic Matters, certifications row.

**Products** — Banner, category tab filter (All / Liquid / Granular / Soil Conditioners / Crop-Specific) using shadcn Tabs, responsive product grid with the 6 suggested products, dialog modal for "View Details", bottom CTA.

**Media** — Banner, News & Press cards, Gallery grid with shadcn Dialog lightbox, embedded YouTube placeholder, Blog teaser cards.

**Contact** — Banner, 2-col: react-hook-form + zod validated form (Name/Email/Phone/Subject/Message) on the left; address/phone/email/hours + embedded Google Maps iframe (India placeholder) on the right; social icons row; collapsible "Become a Distributor" variant.

## SEO

Per-page `<SEO>` with title + description. Update `index.html` default title/description/OG to Elkenno branding. Single H1 per page, semantic landmarks, alt text on all imagery, favicon swap.

## Technical Notes

- Carousel: `embla-carousel-react` (in repo) + add `embla-carousel-autoplay`
- Scroll-reveal: lightweight IntersectionObserver hook (no new dep) — avoids AOS/Framer weight
- Counters: same observer hook + requestAnimationFrame tween
- No backend; contact form shows success toast via shadcn sonner
- All colors via semantic tokens; no `text-white`/`bg-[#...]` in components

## Out of Scope (ask before adding)

- Real email delivery for contact form (would need Lovable Cloud + edge function)
- CMS-driven media/blog content
- Multi-language support
- E-commerce / quote workflow beyond a contact form
