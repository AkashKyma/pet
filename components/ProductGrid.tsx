import { featuredProducts, shopCategories } from "@/data/siteData";
import { SectionHeading } from "@/components/SectionHeading";

type ProductGridProps = {
  title?: string;
  description?: string;
  showFilters?: boolean;
};

export function ProductGrid({
  title = "Featured pet products",
  description = "Premium picks chosen for comfort, durability, and easy everyday care.",
  showFilters = false
}: ProductGridProps) {
  return (
    <section className="content-section">
      <SectionHeading
        kicker="Shop CozyPaws"
        title={title}
        description={description}
      />

      {showFilters ? (
        <div className="filter-row" data-reveal>
          {shopCategories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${index === 0 ? "filter-chip--active" : ""}`}
              aria-pressed={index === 0}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="product-grid">
        {featuredProducts.map((product) => (
          <article key={product.name} className="product-card" data-reveal>
            <div className="product-card__visual" aria-hidden="true">
              <span>{product.emoji}</span>
            </div>
            <div className="product-card__content">
              <div className="product-card__topline">
                <span className="tag">{product.category}</span>
                <span className="product-card__badge">{product.badge}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-card__footer">
                <strong>{product.price}</strong>
                <button type="button" className="primary-button primary-button--compact">
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}