function PetBubble({ emoji, label, className }: { emoji: string; label: string; className: string }) {
  return (
    <div className={`pet-bubble ${className}`} aria-label={label} role="img">
      <span>{emoji}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="eyebrow">Featured Article</span>
        <h1>Tips, Stories &amp; Advice for Pet Lovers</h1>
        <p>
          Explore expert pet care tips, training guides, product reviews, and heartwarming stories for your furry friends.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#latest-articles">
            Read Latest Articles
          </a>
          <div className="hero-badge">
            <span>New This Week</span>
            <strong>6 fresh stories for cozy pet homes</strong>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual__backdrop" />
        <PetBubble emoji="🐶" label="Happy golden retriever" className="pet-bubble--dog" />
        <PetBubble emoji="🐱" label="Playful cat" className="pet-bubble--cat" />
        <PetBubble emoji="🐕" label="Small friendly puppy" className="pet-bubble--puppy" />
        <div className="hero-highlight-card">
          <span className="hero-highlight-card__label">Editor&apos;s Pick</span>
          <h2>Ways to make every walk, nap, and meal feel a little more joyful.</h2>
          <p>Trusted reads for modern pet parents who want warmth, quality, and practical advice.</p>
        </div>
      </div>
    </section>
  );
}
