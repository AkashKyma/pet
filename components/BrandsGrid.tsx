import { featuredBrands } from "@/data/siteData";
import { SectionHeading } from "@/components/SectionHeading";

export function BrandsGrid() {
  return (
    <section className="content-section">
      <SectionHeading
        kicker="Trusted partners"
        title="Featured pet brands"
        description="A curated mix of premium makers known for comfort, clean ingredients, and dependable quality."
      />

      <div className="brand-grid">
        {featuredBrands.map((brand) => (
          <article key={brand.name} className="brand-card" data-reveal>
            <div className="brand-card__mark" aria-hidden="true">
              {brand.monogram}
            </div>
            <span className="tag">{brand.specialty}</span>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}