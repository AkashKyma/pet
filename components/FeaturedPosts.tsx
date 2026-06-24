import { featuredPosts } from "@/data/blogData";

export function FeaturedPosts() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Handpicked Reads</span>
          <h2>Featured Posts</h2>
        </div>
        <p>Fresh ideas and thoughtful stories curated to help pet parents build healthy, happy routines.</p>
      </div>

      <div className="featured-grid">
        {featuredPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <div className={`image-panel image-panel--${post.accent}`} aria-label={post.imageLabel} role="img">
              <span>🐾</span>
            </div>
            <div className="blog-card__content">
              <span className="tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-card__meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a href="#latest-articles" className="text-button">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
