const quickLinks = ["Home", "Shop", "Blog", "Brands"];
const supportLinks = ["Delivery & Payment", "Returns", "FAQ", "Contact"];
const socialLinks = ["Instagram", "Pinterest", "TikTok"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <div className="brand-mark brand-mark--footer">
          <span className="brand-mark__paw">🐾</span>
          <div>
            <p className="brand-mark__name">CozyPaws</p>
            <p className="brand-mark__tag">Modern pet stories & care tips</p>
          </div>
        </div>
        <p>
          A premium pet blog packed with practical advice, playful inspiration, and trusted picks for cozy homes.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <ul>
          {quickLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Support</h3>
        <ul>
          {supportLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Follow Along</h3>
        <ul>
          {socialLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <p className="site-footer__copyright">© 2026 CozyPaws. All rights reserved.</p>
    </footer>
  );
}
