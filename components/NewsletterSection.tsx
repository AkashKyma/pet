export function NewsletterSection() {
  return (
    <section className="newsletter-banner">
      <div>
        <span className="section-kicker">Stay in the loop</span>
        <h2>Get Pet Care Tips Delivered Weekly</h2>
        <p>
          Join the CozyPaws list for expert guidance, product spotlights, and heartwarming pet stories tailored for caring homes.
        </p>
      </div>

      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email address" aria-label="Email address" />
        <button type="submit" className="primary-button">
          Subscribe
        </button>
      </form>
    </section>
  );
}
