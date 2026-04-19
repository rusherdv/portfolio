"use client";

import { useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

function ProjectVisual({
  variant,
  children,
}: {
  variant: "cobrando" | "vbucks" | "robux";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  }

  function onMouseLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      className={`project-visual ${variant} reveal reveal-delay-1`}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-hover=""
    >
      {children}
    </div>
  );
}

export default function ProjectsSection() {
  const { lang } = usePortfolio();

  return (
    <>
      {/* PROJECTS INTRO */}
      <section className="screen projects-intro" id="work" data-section="03">
        <div className="section-label reveal">
          <span className="num">03</span>
          <span className="line" />
          <span>{lang === "en" ? "Selected work" : "Trabajo seleccionado"}</span>
        </div>
        <h2 className="projects-intro-heading reveal">
          <span>SHIPPED</span>
          <br />
          <span className="stroke">&amp;</span> <span className="accent">LIVE</span>
        </h2>
        <div className="projects-intro-sub reveal reveal-delay-1">
          {lang === "en"
            ? "20+ PROJECTS / FULL-STACK / GENERATING RESULTS"
            : "20+ PROYECTOS / FULL-STACK / GENERANDO RESULTADOS"}
        </div>
      </section>

      {/* PROJECT 01: COBRANDO APP */}
      <section className="screen project-section" id="p1" data-section="04">
        <div className="project-ed">
          <div className="project-ed-header reveal">
            <span className="accent">PROJECT /</span> 01 — 03
            <span className="project-ed-cat">
              {lang === "en" ? "ONLINE POS / PAYMENTS / 2025" : "POS ONLINE / PAGOS / 2025"}
            </span>
          </div>
          <h3 className="project-name reveal">
            Cobrando<span className="accent"> App</span>
          </h3>
          <div className="project-ed-body">
            <div className="project-ed-info reveal reveal-delay-1">
              <p className="project-desc">
                {lang === "en"
                  ? "Online point-of-sale system for businesses of all sizes. Handles real-time payments via MercadoPago and ARCA, with a full product and sales management dashboard."
                  : "Sistema de punto de venta online para negocios de todo tipo. Gestiona pagos en tiempo real vía MercadoPago y ARCA, con dashboard completo de productos y ventas."}
              </p>
              <div className="project-tags">
                {["NEXT.JS", "POSTGRES", "ARCA", "MERCADOPAGO"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a className="project-link" href="https://cobrando.app" target="_blank" rel="noopener noreferrer" data-hover="">
                <span>{lang === "en" ? "Visit cobrando.app" : "Ver cobrando.app"}</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="project-ed-img reveal reveal-delay-2">
              <img src="/images/cobrando.app.png" alt="Cobrando App" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02: VBUCKS */}
      <section className="screen project-section" id="p2" data-section="05">
        <div className="project-ed">
          <div className="project-ed-header reveal">
            <span className="accent">PROJECT /</span> 02 — 03
            <span className="project-ed-cat">
              {lang === "en" ? "WEB APP / AUTOMATION" : "WEB APP / AUTOMATIZACIÓN"}
            </span>
          </div>
          <h3 className="project-name reveal">
            VBucks<span className="accent">AR</span>
          </h3>
          <div className="project-ed-body">
            <div className="project-ed-info reveal reveal-delay-1">
              <p className="project-desc">
                {lang === "en"
                  ? "Fully automated V-Bucks gifting platform. Customers pay via Stripe and the system handles Epic Games gift delivery end-to-end — no human intervention needed."
                  : "Plataforma de envío de V-Bucks completamente automatizada. El cliente paga con Stripe y el sistema gestiona el regalo en Epic Games de punta a punta — sin intervención humana."}
              </p>
              <div className="project-tags">
                {["NEXT.JS", "EPIC GAMES", "STRIPE", "FULL AUTO"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a className="project-link" href="https://vbs.ar" target="_blank" rel="noopener noreferrer" data-hover="">
                <span>{lang === "en" ? "Visit vbs.ar" : "Ver vbs.ar"}</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="project-ed-img reveal reveal-delay-2">
              <img src="/images/vbs.ar.png" alt="VBucksAR" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 03: ROBUX */}
      <section className="screen project-section" id="p3" data-section="06">
        <div className="project-ed">
          <div className="project-ed-header reveal">
            <span className="accent">PROJECT /</span> 03 — 03
            <span className="project-ed-cat">
              {lang === "en" ? "E-COMMERCE / AUTOMATION" : "E-COMMERCE / AUTOMATIZACIÓN"}
            </span>
          </div>
          <h3 className="project-name reveal">
            Robux<span className="accent">AR</span>
          </h3>
          <div className="project-ed-body">
            <div className="project-ed-info reveal reveal-delay-1">
              <p className="project-desc">
                {lang === "en"
                  ? "End-to-end automated Robux sales platform integrated with RbxCrate. From checkout to wallet delivery — fully automated, zero manual steps."
                  : "Plataforma de venta de Robux automatizada de punta a punta integrada con RbxCrate. Del checkout a la billetera — totalmente automatizado, cero pasos manuales."}
              </p>
              <div className="project-tags">
                {["NEXT.JS", "RBXCRATE", "WEBHOOKS", "FULL AUTO"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a className="project-link" href="https://robux.ar" target="_blank" rel="noopener noreferrer" data-hover="">
                <span>{lang === "en" ? "Visit robux.ar" : "Ver robux.ar"}</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="project-ed-img reveal reveal-delay-2">
              <img src="/images/robux.ar.png" alt="RobuxAR" />
            </div>
          </div>
        </div>
      </section>

      {/* MORE PROJECTS CTA */}
      <section className="screen projects-more" data-section="07">
        <div className="projects-more-inner reveal">
          <div className="projects-more-eyebrow">
            {lang === "en" ? (
              <><span className="accent">20+</span> projects shipped</>
            ) : (
              <><span className="accent">20+</span> proyectos en producción</>
            )}
          </div>
          <div className="projects-more-heading">
            {lang === "en" ? (
              <>Want to see <span className="accent">more?</span></>
            ) : (
              <>¿Querés ver <span className="accent">más?</span></>
            )}
          </div>
          <p className="projects-more-sub">
            {lang === "en"
              ? "Apps, webs, automations and digital solutions across 20+ live projects. Let's talk about your idea."
              : "Apps, webs, automatizaciones y soluciones digitales en más de 20 proyectos activos. Hablemos de tu idea."}
          </p>
          <a
            className="projects-more-btn"
            href="mailto:development093@gmail.com"
            data-hover=""
          >
            <span>{lang === "en" ? "Let's talk" : "Hablemos"}</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
