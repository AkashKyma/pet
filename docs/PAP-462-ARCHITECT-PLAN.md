# PAP-462 — Architect Plan

## Ticket
Fix the CozyPaws website navigation so all menu pages work correctly.

## Role / Scope
Architect only.
- No product code changes in this phase.
- No git push / no PR.
- Planning artifact for Grunt and Pedant.

## Current Stack Findings
- Framework: **Next.js 16.2.9** with **App Router**
- Runtime: React 19 + TypeScript
- Styling: single global stylesheet in `app/globals.css`
- Current app shape:
  - `app/page.tsx` renders a **blog landing page** at `/`
  - `components/Header.tsx` contains navbar links but every link uses `href="#"`
  - `components/Footer.tsx` also contains placeholder `href="#"` links
  - Existing sections/components already match the CozyPaws visual system and can be reused
- No routing structure exists yet for:
  - `/shop`
  - `/delivery-payment`
  - `/brands`
  - `/blog`
- No GSAP dependency is currently installed.

## Root Cause
Navigation is non-functional because the primary and footer nav links are placeholders instead of real routes or anchors. The app currently behaves like a single completed page rather than a routed site.

## Recommended Architecture
Use a **multi-page App Router implementation**.

### Why multi-page over anchor-only single page
- The requirements explicitly ask for separate content for **Home, Shop, Delivery and Payment, Brands, Blog**.
- The existing codebase is already a Next.js routed app, so real routes are the lowest-risk, most maintainable fix.
- Active menu highlighting is more reliable with pathname-based route matching than anchor scrolling alone.
- The current `/` page content reads as a **Blog** page, so it should be moved or reused for `/blog`, while a real homepage is added at `/`.

## Planned Routes
Create or connect these routes:
- `/` → **Home**
- `/shop` → **Shop**
- `/delivery-payment` → **Delivery and Payment**
- `/brands` → **Brands**
- `/blog` → **Blog**

## Existing Components to Reuse
These should be preserved and reused where possible:
- `Header`
- `Footer`
- `HeroSection`
- `FeaturedPosts`
- `CategoryPills`
- `LatestArticles`
- `Sidebar`
- `NewsletterSection`
- `data/blogData.ts`

## Refactor Plan

### 1) Introduce shared site-shell composition
Create a shared top-level page wrapper so every route gets:
- same contact strip
- same navbar
- same footer
- same responsive spacing
- same CozyPaws branding

Recommended additions:
- `components/SiteChrome.tsx` or `components/PageLayout.tsx`
- optional `components/PageHero.tsx` / reusable section wrappers

### 2) Convert header navigation to route-driven config
Refactor `components/Header.tsx` to:
- use `next/link`
- drive links from a shared nav config array
- derive active state from `usePathname()`
- include a mobile menu toggle for narrow screens

Recommended nav config shape:
```ts
const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Delivery and Payment", href: "/delivery-payment" },
  { label: "Brands", href: "/brands" },
  { label: "Blog", href: "/blog" }
];
```

### 3) Update footer links to use the same route map
Footer quick links/support links should stop using `#` placeholders where real pages exist.
At minimum, these should connect correctly:
- Home → `/`
- Shop → `/shop`
- Blog → `/blog`
- Brands → `/brands`
- Delivery & Payment → `/delivery-payment`

### 4) Re-home the current page content
Current `app/page.tsx` is effectively a Blog landing page.

Recommended change:
- move current page composition into a reusable `BlogPageView` component or `app/blog/page.tsx`
- build a new homepage at `app/page.tsx`

## Planned Page Content

### `/` Home page
Purpose: premium storefront-style landing page.

Content blocks:
- hero section tailored to CozyPaws ecommerce
- featured pet products
- quick category/shop cards
- CTA into Shop and Blog
- optional trust strip / benefits row

Possible component additions:
- `components/home/HomeHero.tsx`
- `components/home/FeaturedProducts.tsx`
- `components/home/ShopCategories.tsx`
- `data/shopData.ts`

### `/shop` Shop page
Purpose: product discovery page.

Content blocks:
- page hero / intro
- category filters or chips
- product grid
- product cards with title, category, price, CTA

Possible additions:
- `components/shop/ShopHero.tsx`
- `components/shop/ProductFilters.tsx`
- `components/shop/ProductGrid.tsx`
- `components/shop/ProductCard.tsx`
- `data/shopData.ts`

Note: filters can be presentational/static unless Grunt wants simple client-side filtering.

### `/delivery-payment` Delivery and Payment page
Purpose: operational support content.

Content blocks:
- shipping methods
- payment methods
- delivery timeline
- FAQ accordion/cards

Possible additions:
- `components/support/DeliveryOverview.tsx`
- `components/support/PaymentMethods.tsx`
- `components/support/DeliveryTimeline.tsx`
- `components/support/DeliveryFaq.tsx`
- `data/deliveryData.ts`

### `/brands` Brands page
Purpose: showcase pet brands.

Content blocks:
- intro hero
- featured brand logo cards
- short brand descriptions / trust messaging
- optional “shop by brand” CTA cards

Possible additions:
- `components/brands/BrandsHero.tsx`
- `components/brands/BrandGrid.tsx`
- `components/brands/BrandCard.tsx`
- `data/brandsData.ts`

### `/blog` Blog page
Purpose: preserve and route the existing blog experience.

Content blocks:
- reuse current hero section
- featured posts
- categories
- latest articles
- sidebar
- newsletter section

Recommended implementation:
- extract current blog composition into a reusable page view component
- keep existing `data/blogData.ts`

## Styling Plan
Keep the existing visual language intact:
- mint green background
- dark forest green text
- orange CTA buttons
- rounded cards
- soft shadows
- clean premium pet ecommerce layout
- CozyPaws branding

### CSS updates expected
Add styles for:
- active nav state
- hover/focus nav state
- mobile menu button and drawer/panel
- page-level hero variations for non-blog routes
- product/brand/support cards
- GSAP-friendly reveal classes if needed

Suggested class additions:
- `.main-nav__link`
- `.main-nav__link--active`
- `.mobile-nav-toggle`
- `.mobile-nav-panel`
- `.page-hero`
- `.product-grid`
- `.brand-grid`
- `.faq-grid`

## Responsive Navigation Plan
Required behavior:
- **Desktop:** centered horizontal nav with visible active state
- **Tablet:** compact spacing, optional wrapped actions
- **Mobile:** hamburger toggle opening vertically stacked nav links

Implementation notes:
- Header becomes a client component
- Use local state for mobile menu open/close
- Close menu on route change
- Preserve consistent header height and spacing across pages

## Active Menu Highlight Plan
Use `usePathname()` in `Header.tsx`.

Rules:
- `/` activates Home only
- `/shop` activates Shop
- `/delivery-payment` activates Delivery and Payment
- `/brands` activates Brands
- `/blog` activates Blog

Visual treatment:
- forest green text + orange underline/pill/accent background
- ensure keyboard focus styling remains visible

## GSAP / Motion Plan
Requirement asks for smooth transitions using GSAP.

### Dependency
Install:
- `gsap`

### Recommended use (keep it lightweight)
Use GSAP for polish, not heavy SPA choreography.

Targets:
1. Header/mobile nav open/close animation
2. Page hero fade/slide-in on route load
3. Card stagger reveals for grids (products, brands, posts)
4. Optional CTA hover micro-motion

Implementation approach:
- create small client-only wrapper components, e.g.:
  - `components/animations/PageReveal.tsx`
  - `components/animations/StaggerReveal.tsx`
- trigger animations in `useEffect`
- avoid animating layout-critical values that may cause jank
- respect reduced motion with `prefers-reduced-motion`

Important constraint:
- Keep animations hydration-safe and route-safe in Next App Router
- Do not block navigation while animating

## APIs / Data
No backend APIs are required.
Use static local data modules for this ticket.

Planned data files:
- `data/blogData.ts` (existing)
- `data/shopData.ts`
- `data/brandsData.ts`
- `data/deliveryData.ts`
- optional `data/navigationData.ts`

## File-Level Implementation Map for Grunt

### Existing files likely to change
- `app/page.tsx`
- `app/globals.css`
- `components/Header.tsx`
- `components/Footer.tsx`

### New route files
- `app/blog/page.tsx`
- `app/shop/page.tsx`
- `app/delivery-payment/page.tsx`
- `app/brands/page.tsx`

### New shared/view files
- `components/PageLayout.tsx` or `components/SiteChrome.tsx`
- `components/blog/BlogPageView.tsx` (or similar extracted page view)
- page-specific components for home/shop/brands/delivery as needed
- optional animation wrappers under `components/animations/`

## Implementation Order for Grunt
1. Add shared navigation config.
2. Refactor header to use `next/link`, active states, and responsive mobile nav.
3. Refactor footer links to real routes.
4. Extract current blog landing content into `/blog`.
5. Build new `/` home page.
6. Build `/shop`, `/delivery-payment`, and `/brands` using shared styling patterns.
7. Add GSAP motion wrappers for hero/cards/mobile nav.
8. Run build/test pass and fix any route/hydration issues.

## Verification Checklist for Pedant
- Every menu item navigates to the correct route with no 404s.
- No navbar or footer link still points to `#` for required pages.
- Active menu state is correct on all five routes.
- Header remains visible and visually consistent across all pages.
- Mobile navigation opens/closes correctly and remains usable.
- Blog page preserves current design quality after extraction.
- Home/Shop/Delivery and Payment/Brands/Blog all have basic required content.
- No console errors in browser.
- `npm run build` succeeds.
- GSAP enhancements do not break SSR/hydration.
- Visual system remains consistent with CozyPaws branding.

## Notes for Next Role
- Prefer multi-page routes, not anchor-only retrofitting.
- Reuse the existing blog sections heavily instead of rebuilding them.
- Keep page content static and local; no API work needed.
- If GSAP integration creates SSR friction, isolate it in tiny client components rather than making every page fully client-rendered.

ARCHITECT_DONE: plan ready for Grunt.
