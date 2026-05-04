export type Lang = "en" | "es";

export function detectPreferredLang(
  preferredLanguages?: readonly string[] | string | null
): Lang {
  const values = Array.isArray(preferredLanguages)
    ? preferredLanguages
    : typeof preferredLanguages === "string"
      ? preferredLanguages.split(",")
      : [];

  for (const value of values) {
    const normalized = value.trim().toLowerCase();
    if (normalized.startsWith("es")) {
      return "es";
    }
  }

  return "en";
}
