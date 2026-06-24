import { popularCategories, recentPosts } from "@/data/blogData";

export function Sidebar() {
  return (
    <aside className="sidebar-stack">
      <section className="sidebar-card">
        <h3>Search the blog</h3>
        <form className="search-form">
          <input type="search" placeholder="Search articles, guides, tips..." aria-label="Search articles" />
          <button type="submit" className="primary-button primary-button--compact">
            Search
          </button>
        </form>
      </section>

      <section className="sidebar-card">
        <h3>Recent Posts</h3>
        <ul className="sidebar-list">
          {recentPosts.map((post) => (
            <li key={post.title}>
              <a href="#latest-articles">{post.title}</a>
              <span>{post.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sidebar-card">
        <h3>Popular Categories</h3>
        <div className="sidebar-tags">
          {popularCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <section className="sidebar-card sidebar-card--accent">
        <h3>Weekly Tail-Wagging Notes</h3>
        <p>Subscribe for product launches, seasonal care guides, and feel-good stories from the CozyPaws journal.</p>
        <form className="newsletter-mini">
          <input type="email" placeholder="Your email address" aria-label="Email address" />
          <button type="submit" className="primary-button primary-button--compact">
            Join Now
          </button>
        </form>
      </section>

      <section className="promo-card">
        <span className="tag tag--solid">CozyPaws Pick</span>
        <h3>CloudSoft Pet Bed</h3>
        <p>Ultra-soft support, washable cover, and a soothing design pets instantly claim as their favorite spot.</p>
        <a href="#" className="text-button">
          Shop the favorite
        </a>
      </section>
    </aside>
  );
}
