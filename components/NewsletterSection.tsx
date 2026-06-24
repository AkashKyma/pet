export function NewsletterSection() {
  return (
    <section className="newsletter-banner" data-reveal>
      <div>
        <span className="section-kicker">Stay in the loop</span>
        <h2>Get weekly pet care notes and premium product drops</h2>
        <p>
          Join the CozyPaws list for trusted advice, new arrivals, and cozy pet-home inspiration delivered weekly.
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