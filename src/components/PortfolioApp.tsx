"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import ScrollEffects from "@/components/ScrollEffects";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TweaksPanel from "@/components/TweaksPanel";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import type { Lang } from "@/lib/lang";

function PortfolioInner() {
  const { heroVariant, accentMode } = usePortfolio();
  const [tweaksVisible, setTweaksVisible] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "t" || e.key === "T") {
        setTweaksVisible((v) => !v);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div data-hero={heroVariant} data-accent={accentMode}>
      <div className="grain" />
      <Cursor />
      <ScrollEffects />
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <TweaksPanel visible={tweaksVisible} />
    </div>
  );
}

export default function PortfolioApp({ initialLang }: { initialLang: Lang }) {
  return (
    <PortfolioProvider initialLang={initialLang}>
      <PortfolioInner />
    </PortfolioProvider>
  );
}
