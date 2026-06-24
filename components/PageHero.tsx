import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  cardTitle: string;
  cardText: string;
  statLabel: string;
  statValue: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  cardTitle,
  cardText,
  statLabel,
  statValue
}: PageHeroProps) {
  return (
    <section className="hero-card" data-reveal>
      <div className="hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="secondary-button">
            {secondaryLabel}
          </Link>
        </div>
        <div className="hero-badge">
          <span>{statLabel}</span>
          <strong>{statValue}</strong>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual__backdrop" />
        <div className="pet-bubble pet-bubble--dog">
          <span>🐶</span>
        </div>
        <div className="pet-bubble pet-bubble--cat">
          <span>🐱</span>
        </div>
        <div className="pet-bubble pet-bubble--puppy">
          <span>🦴</span>
        </div>
        <div className="hero-highlight-card">
          <span className="hero-highlight-card__label">CozyPaws note</span>
          <h2>{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    </section>
  );
}