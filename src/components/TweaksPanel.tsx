"use client";

import { usePortfolio } from "@/context/PortfolioContext";

type HeroVariant = "default" | "stroke" | "marquee";
type AccentMode = "block" | "underline" | "outline";

export default function TweaksPanel({ visible }: { visible: boolean }) {
  const { heroVariant, setHeroVariant, accentMode, setAccentMode } = usePortfolio();

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 500,
        width: 300,
        background: "rgba(10,10,10,0.95)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
        backdropFilter: "blur(20px)",
        fontFamily: "var(--font-space-grotesk), sans-serif",
      }}
    >
      <h4
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 16,
        }}
      >
        {"// TWEAKS"}
      </h4>

      <div style={{ marginBottom: 16 }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 8,
          }}
        >
          Hero style
        </label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {(["default", "stroke", "marquee"] as HeroVariant[]).map((v) => (
            <button
              key={v}
              onClick={() => setHeroVariant(v)}
              style={{
                flex: 1,
                minWidth: 70,
                background: heroVariant === v ? "var(--accent)" : "transparent",
                border: `1px solid ${heroVariant === v ? "var(--accent)" : "var(--border)"}`,
                color: heroVariant === v ? "#000" : "var(--fg)",
                padding: "8px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                borderRadius: 6,
                cursor: "none",
                textTransform: "uppercase",
              }}
            >
              {v === "default" ? "Solid" : v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 8,
          }}
        >
          Yellow accent
        </label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {(["block", "underline", "outline"] as AccentMode[]).map((v) => (
            <button
              key={v}
              onClick={() => setAccentMode(v)}
              style={{
                flex: 1,
                minWidth: 70,
                background: accentMode === v ? "var(--accent)" : "transparent",
                border: `1px solid ${accentMode === v ? "var(--accent)" : "var(--border)"}`,
                color: accentMode === v ? "#000" : "var(--fg)",
                padding: "8px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                borderRadius: 6,
                cursor: "none",
                textTransform: "uppercase",
              }}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
