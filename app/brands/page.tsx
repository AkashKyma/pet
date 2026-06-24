import { BrandsGrid } from "@/components/BrandsGrid";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageHero } from "@/components/PageHero";

export default function BrandsPage() {
  return (
    <div className="site-shell site-shell--spaced">
      <PageHero
        eyebrow="Featured brands"
        title="Meet the premium brands behind CozyPaws favorites"
        description="From calming sleep essentials to natural treats and travel-ready gear, these brand partners help define the CozyPaws standard."
        primaryLabel="Shop the collection"
        primaryHref="/shop"
        secondaryLabel="Read our blog"
        secondaryHref="/blog"
        cardTitle="Each brand card highlights a specialty so customers can browse with more confidence."
        cardText="Logo-style monograms, rounded cards, and soft shadows keep the brand page aligned with the rest of the experience."
        statLabel="Partner mix"
        statValue="Nutrition, comfort, grooming, travel, and play"
      />

      <BrandsGrid />
      <NewsletterSection />
    </div>
  );
}