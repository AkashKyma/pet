# Changelog

## [PAP-462] - 2026-06-24

### Added

- Working multi-page CozyPaws navigation for Home, Shop, Delivery and Payment, Brands, and Blog
- Dedicated App Router pages for `/`, `/shop`, `/delivery-payment`, `/brands`, and `/blog`
- New shared content sections for products, brands, delivery information, and routed blog content
- GSAP-powered page reveal transitions to keep route changes feeling smooth
- Route-aware active navigation highlighting and responsive mobile menu behavior

### Changed

- Reworked the previous single landing-page experience into a consistent multi-page site structure
- Moved blog-oriented content into a dedicated `/blog` route
- Updated header and footer navigation away from placeholder links to real routes
- Standardized shared CozyPaws layout styling across all menu pages

### Fixed

- Broken navbar behavior where menu links did not open the correct pages
- Missing page coverage for Shop, Delivery and Payment, Brands, and Blog
- Inconsistent navigation flow that prevented users from understanding their current page

### Documentation

- Refreshed `README.md` with PAP-462 feature overview, install steps, run commands, and release summary
- Added `docs/IMPLEMENTATION_NOTES.md` for deployment and automated PR handoff

## [PAP-461] - 2026-06-24

### Added

- Modern **CozyPaws** pet blog page UI with premium ecommerce-inspired styling
- Top contact strip with website, email, and phone details
- Main header with brand logo, navigation links, and utility icons
- Hero section with editorial headline, supporting copy, featured badge treatment, pet imagery composition, and primary CTA
- Featured Posts section with three editorial cards
- Category discovery section for dog care, cat care, nutrition, training, reviews, and stories
- Latest Articles listing grid for broader content browsing
- Sidebar support areas for search, recent posts, categories, newsletter, and promotional content
- Newsletter signup section and branded footer
- Responsive presentation aligned to the requested CozyPaws visual language

### Documentation

- Expanded `README.md` with feature overview, setup, run instructions, and review guidance
- Added `docs/IMPLEMENTATION_NOTES.md` for deployment and PR handoff context
