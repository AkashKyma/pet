import { DeliveryContent } from "@/components/DeliveryContent";
import { PageHero } from "@/components/PageHero";

export default function DeliveryPaymentPage() {
  return (
    <div className="site-shell site-shell--spaced">
      <PageHero
        eyebrow="Delivery and payment"
        title="Fast shipping, clear timelines, and secure checkout"
        description="Everything on this page helps customers understand how CozyPaws ships, what payment methods are accepted, and when orders arrive."
        primaryLabel="Start shopping"
        primaryHref="/shop"
        secondaryLabel="See brands"
        secondaryHref="/brands"
        cardTitle="Clarity at checkout reduces drop-off and keeps support questions low."
        cardText="The delivery page now has dedicated content for shipping, payment methods, timelines, and FAQs."
        statLabel="Shipping promise"
        statValue="Tracked updates and secure payments on every order"
      />

      <DeliveryContent />
    </div>
  );
}