"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function AboutSection() {
  const { lang } = usePortfolio();

  return (
    <section className="screen about" id="about" data-section="02">
      <div className="section-label reveal">
        <span className="num">02</span>
        <span className="line" />
        <span>{lang === "en" ? "About" : "Sobre mí"}</span>
      </div>

      <div className="about-grid">
        <div className="about-heading reveal">
          <span>{lang === "en" ? "Building" : "Construyendo"}</span>
          <br />
          <span className="accent">{lang === "en" ? "solutions" : "soluciones"}</span>
          <br />
          <span>{lang === "en" ? "since 15." : "desde los 15."}</span>
        </div>

        <div className="about-body reveal reveal-delay-1">
          {lang === "en" ? (
            <>
              <p>
                I&apos;m Rusher, a software developer from Argentina. I started coding at 15
                and never stopped — turning ideas into{" "}
                <span className="highlight">apps, webs, automations and digital products</span>{" "}
                that actually work and generate value for clients.
              </p>
              <p>
                20+ live projects built across different industries. Every solution is
                designed to help businesses{" "}
                <span className="highlight">make money, scale and grow</span> — through
                optimized development, SEO, automation, and smart digital strategy.
              </p>
              <p>
                In March 2025 I co-founded{" "}
                <span className="highlight">Audens Solutions</span>, a web development
                agency where I serve as Head of Development.
              </p>
            </>
          ) : (
            <>
              <p>
                Soy Rusher, desarrollador de software de Argentina. Empecé a programar a
                los 15 y nunca paré — convirtiendo ideas en{" "}
                <span className="highlight">apps, webs, automatizaciones y productos digitales</span>{" "}
                que realmente funcionan y generan valor para los clientes.
              </p>
              <p>
                20+ proyectos en producción en distintas industrias. Cada solución está
                diseñada para ayudar a los negocios a{" "}
                <span className="highlight">generar dinero, escalar y crecer</span> — mediante
                desarrollo optimizado, SEO, automatización y estrategia digital inteligente.
              </p>
              <p>
                En marzo de 2025 cofundé{" "}
                <span className="highlight">Audens Solutions</span>, una agencia de
                desarrollo web donde me desempeño como Head of Development.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="about-stats">
        <div className="stat reveal">
          <div className="num">
            15<span className="small">YO</span>
          </div>
          <div className="label">
            {lang === "en" ? "Started coding" : "Empecé a programar"}
          </div>
        </div>
        <div className="stat reveal reveal-delay-1">
          <div className="num">
            20<span className="small">+</span>
          </div>
          <div className="label">
            {lang === "en" ? "Live projects" : "Proyectos en producción"}
          </div>
        </div>
        <div className="stat reveal reveal-delay-2">
          <div className="num">
            01<span className="small">CO</span>
          </div>
          <div className="label">
            {lang === "en" ? "Co-founded agency" : "Agencia cofundada"}
          </div>
        </div>
      </div>
    </section>
  );
}
