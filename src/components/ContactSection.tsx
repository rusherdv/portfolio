"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function ContactSection() {
  const { lang } = usePortfolio();

  return (
    <>
      <section className="screen contact" id="contact" data-section="08">
        <div className="section-label reveal">
          <span className="num">04</span>
          <span className="line" />
          <span>{lang === "en" ? "Contact" : "Contacto"}</span>
        </div>

        <h2 className="contact-heading reveal">
          <span>{lang === "en" ? "Let's" : "Hagamos"}</span>{" "}
          <span className="stroke">{lang === "en" ? "build" : "algo"}</span>
          <br />
          <span>{lang === "en" ? "something" : "genial"}</span>{" "}
          <span className="accent">→</span>
        </h2>

        <div className="contact-grid">
          <div className="reveal reveal-delay-1">
            <a
              className="contact-email"
              href="mailto:development093@gmail.com"
              data-hover=""
            >
              development093@gmail.com
            </a>
            <div className="reply-note">
              {lang === "en"
                ? "Usually reply in under 24 hours."
                : "Suelo responder en menos de 24 horas."}
            </div>
          </div>

          <div className="contact-side reveal reveal-delay-2">
            <div>
              <div className="label">{lang === "en" ? "Agency" : "Agencia"}</div>
              <a
                className="value"
                href="https://audens.ar"
                target="_blank"
                rel="noopener noreferrer"
                data-hover=""
              >
                audens.ar ↗
              </a>
            </div>
            <div>
              <div className="label">{lang === "en" ? "Location" : "Ubicación"}</div>
              <div className="value">Buenos Aires, AR</div>
            </div>
            <div>
              <div className="label">{lang === "en" ? "Timezone" : "Zona horaria"}</div>
              <div className="value">GMT-3 / UTC</div>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>{lang === "en" ? "AVAILABLE FOR FREELANCE" : "DISPONIBLE PARA FREELANCE"}</span>
            <span className="dot">●</span>
            <span>{lang === "en" ? "OPEN TO COLLAB" : "ABIERTO A COLAB"}</span>
            <span className="dot">●</span>
            <span>{lang === "en" ? "WEB / BACKEND / AUTOMATION" : "WEB / BACKEND / AUTOMATIZACIÓN"}</span>
            <span className="dot">●</span>
            <span>{lang === "en" ? "AVAILABLE FOR FREELANCE" : "DISPONIBLE PARA FREELANCE"}</span>
            <span className="dot">●</span>
            <span>{lang === "en" ? "OPEN TO COLLAB" : "ABIERTO A COLAB"}</span>
            <span className="dot">●</span>
            <span>{lang === "en" ? "WEB / BACKEND / AUTOMATION" : "WEB / BACKEND / AUTOMATIZACIÓN"}</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      <footer>
        <div>
          © 2026 <span className="accent">RUSHER</span> — ALL RIGHTS RESERVED
        </div>
        <div>{lang === "en" ? "BUILT IN ARGENTINA" : "HECHO EN ARGENTINA"}</div>
      </footer>
    </>
  );
}
