# PAP-461 — Architect Plan

## Role
Architect only. Planning artifact for Grunt and Pedant.

## Repository / Stack Findings
- Repository is currently scaffold-only.
- Present files: `README.md`, `docs/.gitkeep`, `memory-bank/.gitkeep`, `.paperclip/AGENTS.md`
- No `package.json`, no app source tree, no frontend framework detected.
- Because the task is a single responsive marketing/blog page UI and there is no existing stack to extend, the fastest and lowest-risk implementation path is a lightweight static frontend:
  - `index.html`
  - `styles.css`
  - optional `main.js` only if needed for tiny interactions
- No backend/API work is required for this ticket.

## Implementation Strategy
Build a single responsive blog landing page for **CozyPaws** using semantic HTML and modern CSS.

### Why this approach
- Minimal repo means no framework constraints.
- Static HTML/CSS is sufficient for a polished desktop-first UI.
- Lowest setup overhead for Grunt.
- Easy for Pedant to verify visually and responsively.

## Planned Deliverables
1. **Single page UI** in `index.html`
2. **Shared design system / layout styles** in `styles.css`
3. **Local placeholder pet imagery** via royalty-free remote image URLs or CSS decorative shapes
4. **Non-functional UI controls** for search/newsletter/cart/profile icons unless product requirements later demand behavior

## Page Architecture

### 1) Top Contact Strip
Content:
- `nixtio.com`
- `hello@nixtio.com`
- `+48577612187`

Layout:
- Full-width slim bar
- Mint-tinted background or white-on-forest contrast strip
- Horizontal alignment with subtle separators/icons

### 2) Main Header / Navbar
Left:
- CozyPaws wordmark + paw icon

Center:
- Nav links: Home / Shop / Delivery and Payment / Brands / Blog

Right:
- Search icon
- Wishlist icon
- Cart icon
- User profile icon

Behavior:
- Desktop-first horizontal nav
- Tablet/mobile collapse into wrapped rows or compact menu button if Grunt prefers
- Blog nav item visually active

### 3) Blog Hero Section
Primary content:
- H1: **Tips, Stories & Advice for Pet Lovers**
- Supporting copy from ticket
- Orange CTA: **Read Latest Articles**

Secondary visuals:
- Layered pet image composition
  - golden retriever as primary visual
  - cat secondary visual
  - optional puppy/small dog accent
- Floating badge/card:
  - `Featured Article` or `New This Week`

Layout:
- Two-column desktop hero
- Text left, image composition right
- White featured card over mint background
- Soft blob/background shapes to preserve premium ecommerce feel

### 4) Featured Posts Section
Section title: **Featured Posts**

Structure:
- 3 equal-width cards in one desktop row
- Each card contains:
  - pet image
  - category pill
  - title
  - excerpt
  - author
  - date
  - read more button

Suggested seed content:
1. **10 Essential Tips for Keeping Your Dog Healthy**
2. **How to Create the Perfect Cozy Space for Your Cat**
3. **Best Toys to Keep Your Pets Happy and Active**

### 5) Categories Section
Structure:
- Rounded icon cards or pill-style buttons
- 6 items:
  - Dog Care
  - Cat Care
  - Pet Nutrition
  - Training Tips
  - Product Reviews
  - Pet Stories

Visual treatment:
- White pills/cards
- Small line icons or emoji/inline SVG illustrations
- Hover lift or color accent on interaction

### 6) Latest Articles Section
Structure:
- Larger grid below categories
- Recommended desktop layout:
  - 2-column main article grid if sidebar exists
  - 3-column grid if sidebar omitted
- Each article card includes:
  - thumbnail
  - title
  - short description
  - category
  - publication date
  - Read More button

Recommendation:
- Include 6 article cards for visual density

### 7) Sidebar (recommended)
Add right sidebar on desktop to increase blog realism.

Sidebar modules:
- Search box
- Recent posts list
- Popular categories list
- Newsletter subscribe mini-card
- Small promotional product/ad card

Responsive behavior:
- Sidebar stacks below main content on tablet/mobile

### 8) Newsletter Section
Content:
- Heading: **Get Pet Care Tips Delivered Weekly**
- Short supporting copy
- Email input
- Orange subscribe button

Visual treatment:
- Prominent white or forest-green container with rounded corners
- Decorative paw/leaf/pet motifs
- Wider CTA emphasis than sidebar variant

### 9) Footer
Include:
- CozyPaws logo
- Quick links
- Customer support links
- Social icons
- Copyright

Recommended structure:
- 4-column desktop footer
- Simplified stacked footer on mobile

## Design System

### Color Palette
Use CSS custom properties for consistency:
- `--bg-mint`: soft mint green page background
- `--green-900`: deep forest green for headings
- `--green-700`: supporting nav/text accents
- `--surface`: white cards and inputs
- `--accent-orange`: bright orange CTAs/highlights
- `--accent-orange-dark`: hover state
- `--text-muted`: softer secondary paragraph copy
- `--border-soft`: low-contrast border/shadow edge

### Typography
- Modern sans-serif stack
- Strong, bold headings
- Slightly softer body copy
- Clear hierarchy:
  - Large hero H1
  - Section H2
  - Card H3/H4

### UI Language
- Rounded corners throughout
- Soft shadows
- Spacious padding/gaps
- Premium ecommerce rhythm with layered cards and subtle overlap
- Friendly illustration accents without clutter

## Components Grunt Should Build
1. `contact-strip`
2. `site-header`
3. `hero-section`
4. `featured-badge-card`
5. `featured-post-card`
6. `category-pill-card`
7. `article-card`
8. `blog-sidebar`
9. `newsletter-banner`
10. `site-footer`

If Grunt uses plain HTML/CSS, these can still be implemented as clearly separated semantic sections/classes rather than framework components.

## Content/Data Plan
Use local static data objects/arrays embedded in markup or `main.js` if Grunt wants templated rendering.

Data groups:
- nav links
- hero badge metadata
- featured posts (3)
- category list (6)
- latest articles (6)
- recent posts sidebar list
- popular categories sidebar list
- promo product copy

## Assets / Icons
Recommended low-risk options:
- Use inline SVG paw/logo/iconography for brand consistency
- Use `lucide`-style SVG paths only if Grunt wants handcrafted inline icons
- Use remote placeholder pet photos from stable public sources if allowed, otherwise use gradient/image placeholders

Preferred image usage:
- consistent aspect ratios
- object-fit cover
- rounded image containers

## Responsive Plan
Desktop-first, then adapt down:
- **>= 1200px**: full hero split, 3-card featured row, content + sidebar
- **768–1199px**: reduce gaps, featured cards may wrap to 2+1, sidebar stacks under article grid
- **< 768px**: single-column flow, compact header, cards full-width, footer stacked

Key responsive safeguards:
- Avoid overly wide hero text line lengths
- Keep CTA visible above fold
- Preserve image composition without overflow clipping
- Maintain button/input tap size on mobile

## APIs / Interactivity
- No backend APIs required.
- Newsletter form can be presentational only unless Grunt wants a stub `preventDefault` handler.
- Search/sidebar interactions can be non-functional UI.
- Buttons/links can use `#` placeholders in this ticket unless a real route structure is introduced.

## File Plan for Grunt
Recommended files to create:
- `index.html`
- `styles.css`
- optional `main.js`
- optional `assets/` directory only if local images/icons are introduced

## Acceptance Criteria for Pedant
- Page visually matches premium pet ecommerce/blog tone
- Required sections exist in correct order
- Palette uses mint / forest green / white / orange consistently
- Desktop layout looks polished and balanced
- Responsive layout works on tablet and mobile widths
- Cards, buttons, pills, and newsletter areas have rounded corners and soft shadows
- No console errors if optional JS is used

## Handoff Notes
- There is no existing homepage implementation in repo to mirror directly, so Grunt should establish a coherent premium style system from the ticket itself.
- Keep implementation simple and static unless unexpected tooling appears.
- Do not add backend dependencies.

ARCHITECT_DONE: plan ready for Grunt.
