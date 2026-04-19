"use client";

import { useState, useEffect } from "react";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import ScrollEffects from "@/components/ScrollEffects";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TweaksPanel from "@/components/TweaksPanel";

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

export default function Home() {
  return (
    <PortfolioProvider>
      <PortfolioInner />
    </PortfolioProvider>
  );
}
