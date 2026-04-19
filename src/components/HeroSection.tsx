"use client";

import { usePortfolio } from "@/context/PortfolioContext";

const letters = ["R", "U", "S", "H", "E", "R"];

export default function HeroSection() {
  const { lang } = usePortfolio();

  return (
    <section className="screen hero" id="hero" data-section="01">
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-top hero-reveal">
          <div className="hero-kicker">
            <span className="line" />
            <span className="blink">●</span>
            <span>
              {lang === "en"
                ? "SOLUTIONS DEVELOPER / EST. 2019"
                : "DESARROLLADOR DE SOLUCIONES / DESDE 2019"}
            </span>
          </div>
          <div className="hero-tag">
            {lang === "en" ? (
              <>
                Building apps, webs &amp; automations that{" "}
                <span className="accent">generate real results</span> — 20+
                live projects from Argentina.
              </>
            ) : (
              <>
                Apps, webs y automatizaciones que{" "}
                <span className="accent">generan resultados reales</span> — 20+
                proyectos en producción desde Argentina.
              </>
            )}
          </div>
        </div>

        {/* Static / stroke name — hidden via CSS [data-hero="marquee"] .hero-name-static { display: none } */}
        <h1 className="hero-name hero-name-static" id="heroName">
          {letters.map((l, i) => (
            <span key={i} className="letter">
              {l}
            </span>
          ))}
          <span className="dot-cursor" />
        </h1>

        {/* Marquee name */}
        <div className="hero-marquee">
          <div className="track">
            <span>RUSHER</span>
            <span className="accent">•</span>
            <span className="stroke">RUSHER</span>
            <span className="accent">•</span>
            <span>RUSHER</span>
            <span className="accent">•</span>
            <span className="stroke">RUSHER</span>
            <span className="accent">•</span>
            <span>RUSHER</span>
            <span className="accent">•</span>
            <span className="stroke">RUSHER</span>
            <span className="accent">•</span>
          </div>
        </div>

        <div className="hero-bottom hero-reveal hero-reveal-late">
          <div className="role-big">
            <span>{lang === "en" ? "Software" : "Desarrollo"}</span>
            <br />
            <span className="accent">
              {lang === "en" ? "Development." : "de Software."}
            </span>
          </div>
          <div className="item">
            <div className="label">{lang === "en" ? "Based in" : "Ubicación"}</div>
            <div className="value">Buenos Aires, AR</div>
          </div>
          <div className="item">
            <div className="label">{lang === "en" ? "Focus" : "Enfoque"}</div>
            <div className="value">
              {lang === "en" ? "Web & Automation" : "Web y Automatización"}
            </div>
          </div>
          <div className="item">
            <div className="label">{lang === "en" ? "Status" : "Estado"}</div>
            <div className="value">
              <span className="live-dot" />
              <span>{lang === "en" ? "Available" : "Disponible"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
