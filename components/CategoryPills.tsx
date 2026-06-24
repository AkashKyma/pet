import { categories } from "@/data/blogData";

export function CategoryPills() {
  return (
    <section className="content-section categories-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Browse Topics</span>
          <h2>Popular Categories</h2>
        </div>
        <p>Explore playful guides, product picks, and pet-parent stories organized around what matters most.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.label} className="category-card">
            <span className="category-card__icon" aria-hidden="true">
              {category.icon}
            </span>
            <h3>{category.label}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
