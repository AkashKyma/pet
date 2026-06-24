import { latestArticles } from "@/data/blogData";

export function LatestArticles() {
  return (
    <section className="content-section" id="latest-articles">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Fresh From CozyPaws</span>
          <h2>Latest Articles</h2>
        </div>
        <p>Discover new ideas each week, from training breakthroughs to product reviews and everyday wellness tips.</p>
      </div>

      <div className="articles-grid">
        {latestArticles.map((article) => (
          <article key={article.title} className="article-card">
            <div className={`image-panel image-panel--${article.accent}`} aria-label={article.imageLabel} role="img">
              <span>🐕‍🦺</span>
            </div>
            <div className="article-card__content">
              <div className="article-card__meta">
                <span className="tag">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href="#" className="text-button">
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
