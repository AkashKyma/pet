import { BrandsGrid } from "@/components/BrandsGrid";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <div className="site-shell site-shell--spaced">
      <PageHero
        eyebrow="Welcome home"
        title="Premium pet care for cozy, design-loving homes"
        description="Shop polished essentials, thoughtful feeding picks, and everyday comforts that keep tails wagging and homes looking beautiful."
        primaryLabel="Shop now"
        primaryHref="/shop"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
        cardTitle="Smooth browsing across every menu page, from first click to checkout-ready details."
        cardText="The updated CozyPaws experience keeps navigation clear, responsive, and easy to trust on every screen size."
        statLabel="Customer favorite"
        statValue="Curated products for naps, walks, meals, and play"
      />

      <ProductGrid />
      <BrandsGrid />
      <NewsletterSection />
    </div>
  );
}