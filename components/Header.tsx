"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/siteData";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-shell">
      <div className="contact-strip">
        <div className="contact-strip__inner">
          <span>Free tracked shipping over $60</span>
          <a href="mailto:hello@cozypaws.com">hello@cozypaws.com</a>
          <a href="tel:+18005557297">+1 (800) 555-7297</a>
        </div>
      </div>

      <div className="site-shell">
        <div className="main-header">
          <Link href="/" className="brand-mark" aria-label="CozyPaws home">
            <span className="brand-mark__paw">🐾</span>
            <div>
              <p className="brand-mark__name">CozyPaws</p>
              <p className="brand-mark__tag">Premium pet essentials</p>
            </div>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>

          <nav
            id="primary-navigation"
            className={`main-nav ${isOpen ? "main-nav--open" : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`main-nav__link ${isActive ? "main-nav__link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions" aria-label="Quick actions">
            <Link href="/shop" className="primary-button primary-button--compact">
              Shop treats
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}