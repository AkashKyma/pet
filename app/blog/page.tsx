import { BlogContent } from "@/components/BlogContent";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageHero } from "@/components/PageHero";

export default function BlogPage() {
  return (
    <div className="site-shell site-shell--spaced">
      <PageHero
        eyebrow="CozyPaws blog"
        title="Fresh pet stories, premium buying guides, and gentle home routines"
        description="The blog page combines a clear hero, featured posts, latest articles, and a newsletter area so every navigation click lands somewhere useful."
        primaryLabel="Explore shop"
        primaryHref="/shop"
        secondaryLabel="Delivery info"
        secondaryHref="/delivery-payment"
        cardTitle="Built for readable browsing with smooth motion and stable layout blocks."
        cardText="Featured stories and latest articles now live on a dedicated route, keeping the top menu intuitive and error-free."
        statLabel="Updated weekly"
        statValue="Stories, how-tos, product spotlights, and care tips"
      />

      <BlogContent />
      <NewsletterSection />
    </div>
  );
}