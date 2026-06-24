import Link from "next/link";
import { navItems } from "@/data/siteData";

const supportLinks = [
  { label: "Delivery and Payment", href: "/delivery-payment" },
  { label: "Brands", href: "/brands" },
  { label: "Blog", href: "/blog" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <div className="brand-mark brand-mark--footer">
          <span className="brand-mark__paw">🐾</span>
          <div>
            <p className="brand-mark__name">CozyPaws</p>
            <p className="brand-mark__tag">Clean, cozy pet ecommerce</p>
          </div>
        </div>
        <p>
          CozyPaws brings together premium pet care, playful design, and dependable delivery for modern pet homes.
        </p>
      </div>

      <div>
        <h3>Browse</h3>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Support</h3>
        <ul>
          {supportLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Newsletter</h3>
        <p>Weekly pet care ideas, shopping picks, and new drops from the CozyPaws journal.</p>
        <div className="footer-pill">Fresh every Thursday</div>
      </div>

      <p className="site-footer__copyright">© 2026 CozyPaws. All rights reserved.</p>
    </footer>
  );
}