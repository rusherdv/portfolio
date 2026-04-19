"use client";

import { usePortfolio } from "@/context/PortfolioContext";

const links = [
  { href: "#about", en: "About", es: "Sobre mí" },
  { href: "#work", en: "Work", es: "Trabajo" },
  { href: "#contact", en: "Contact", es: "Contacto" },
];

export default function Nav() {
  const { lang, toggleLang, mobileMenuOpen, setMobileMenuOpen } = usePortfolio();

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <nav className="top">
        <a href="#hero" className="logomark" data-hover="">
          <span className="mark">R</span>
          <span>Rusher</span>
          <span className="muted muted-txt">
            — {lang === "en" ? "Portfolio / '26" : "Portfolio / '26"}
          </span>
        </a>

        <div className="nav-pill">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-hover="">
              {lang === "en" ? l.en : l.es}
            </a>
          ))}
          <span className="divider" />
          <button className="lang-toggle" onClick={toggleLang} data-hover="">
            <span className="on">{lang === "en" ? "EN" : "ES"}</span>
            {" / "}
            <span>{lang === "en" ? "ES" : "EN"}</span>
          </button>
        </div>

        <a href="#contact" className="nav-cta" data-hover="">
          <span className="pulse-dot" />
          <span className="label-long">{lang === "en" ? "Hire me" : "Contratar"}</span>
          <span className="label-short" aria-hidden="true" style={{ display: "none" }}>
            →
          </span>
        </a>

        <button
          className="nav-mobile-btn"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`} id="mobileMenu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {lang === "en" ? l.en : l.es}
          </a>
        ))}
        <button
          className="lang-btn"
          onClick={() => {
            toggleLang();
            closeMenu();
          }}
        >
          {lang === "en" ? "Switch to Español →" : "Cambiar a English →"}
        </button>
      </div>
    </>
  );
}
