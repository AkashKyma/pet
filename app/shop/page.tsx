import { NewsletterSection } from "@/components/NewsletterSection";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";

export default function ShopPage() {
  return (
    <div className="site-shell site-shell--spaced">
      <PageHero
        eyebrow="CozyPaws shop"
        title="Shop elevated essentials for happy, well-loved pets"
        description="Browse premium beds, feeding tools, walking gear, grooming favorites, and everyday extras selected for comfort and quality."
        primaryLabel="Explore products"
        primaryHref="/shop"
        secondaryLabel="Delivery details"
        secondaryHref="/delivery-payment"
        cardTitle="Thoughtful categories make product discovery feel easy, even on smaller screens."
        cardText="Customers can scan featured collections, compare categories, and move quickly from browsing to buying."
        statLabel="In this collection"
        statValue="Beds, toys, feeding, grooming, travel, and walking gear"
      />

      <ProductGrid
        title="Shop by category"
        description="A clean product grid with quick category filters keeps discovery simple and visually consistent."
        showFilters
      />

      <NewsletterSection />
    </div>
  );
}