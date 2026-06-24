const navLinks = ["Home", "Shop", "Delivery and Payment", "Brands", "Blog"];
const utilityIcons = [
  { label: "Search", symbol: "⌕" },
  { label: "Wishlist", symbol: "♡" },
  { label: "Cart", symbol: "🛒" },
  { label: "Profile", symbol: "◌" }
];

export function Header() {
  return (
    <header className="site-shell">
      <div className="contact-strip">
        <div className="contact-strip__inner">
          <span>nixtio.com</span>
          <a href="mailto:hello@nixtio.com">hello@nixtio.com</a>
          <a href="tel:+48577612187">+48577612187</a>
        </div>
      </div>

      <div className="main-header">
        <div className="brand-mark" aria-label="CozyPaws logo">
          <span className="brand-mark__paw">🐾</span>
          <div>
            <p className="brand-mark__name">CozyPaws</p>
            <p className="brand-mark__tag">Premium Pet Blog</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions" aria-label="Quick actions">
          {utilityIcons.map((icon) => (
            <button key={icon.label} type="button" aria-label={icon.label}>
              <span>{icon.symbol}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
