"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { type Lang } from "@/lib/lang";
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

export function PortfolioProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("default");
  const [accentMode, setAccentMode] = useState<AccentMode>("block");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
