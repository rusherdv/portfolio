"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";
type HeroVariant = "default" | "stroke" | "marquee";
type AccentMode = "block" | "underline" | "outline";

interface PortfolioContextValue {
  lang: Lang;
  toggleLang: () => void;
  heroVariant: HeroVariant;
  setHeroVariant: (v: HeroVariant) => void;
  accentMode: AccentMode;
  setAccentMode: (v: AccentMode) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("default");
  const [accentMode, setAccentMode] = useState<AccentMode>("block");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleLang() {
    setLang((l) => (l === "en" ? "es" : "en"));
  }

  return (
    <PortfolioContext.Provider
      value={{
        lang,
        toggleLang,
        heroVariant,
        setHeroVariant,
        accentMode,
        setAccentMode,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}
