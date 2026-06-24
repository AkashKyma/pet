import { featuredPosts, latestArticles } from "@/data/siteData";
import { SectionHeading } from "@/components/SectionHeading";

export function BlogContent() {
  return (
    <section className="content-section stack-xl">
      <SectionHeading
        kicker="The CozyPaws journal"
        title="Featured posts and latest articles"
        description="Fresh stories, product guides, and practical ideas for pet families who like a polished, cozy home."
      />

      <div className="blog-grid blog-grid--featured">
        {featuredPosts.map((post) => (
          <article key={post.title} className="blog-card" data-reveal>
            <div className="image-panel image-panel--mint" aria-hidden="true">
              <span>📰</span>
            </div>
            <div className="blog-card__content">
              <div className="blog-card__meta">
                <span className="tag">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="content-section">
        <SectionHeading
          kicker="Just published"
          title="Latest articles"
          description="Quick reads that help customers care better, shop smarter, and build calmer routines."
        />
        <div className="blog-grid blog-grid--latest">
          {latestArticles.map((post) => (
            <article key={post.title} className="article-card" data-reveal>
              <div className="article-card__content">
                <div className="blog-card__meta">
                  <span className="tag">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}