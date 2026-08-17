export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const BASE = "https://rusherdv.vercel.app";

export const paths: Record<Locale, string> = {
  en: "/",
  es: "/es/",
};

interface LocaleContent {
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  keywords: string;
  available: string;
  metaRole: string;
  metaExp: string;
  metaStudy: string;
  role: string;
  exp: string;
  study: string;
  taglinePre: string;
  companyName: string;
  taglinePost: string;
  ctaText: string;
  discordLabel: string;
  emailLabel: string;
  githubLabel: string;
  switchLabel: string;
  switchHref: string;
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Rusher — Software Developer",
    description:
      "Software developer from Argentina. Co-founder & sole developer at Audens Solutions.",
    keywords:
      "software developer, web development, Astro, Argentina, full-stack, automation, Audens Solutions, freelance developer",
    available: "available for work",
    metaRole: "role",
    metaExp: "exp",
    metaStudy: "study",
    role: "Full-stack developer",
    exp: "3+ years",
    study: "Computer Science",
    taglinePre: "Co-founder & sole developer at ",
    companyName: "Audens Solutions",
    taglinePost: " — where all the work lives.",
    ctaText: "See Audens Solutions",
    discordLabel: "rusherdv_",
    emailLabel: "Email",
    githubLabel: "GitHub",
    switchLabel: "ES",
    switchHref: "/es/",
  },
  es: {
    htmlLang: "es",
    ogLocale: "es_AR",
    title: "Rusher — Desarrollador de Software",
    description:
      "Desarrollador de software de Argentina. Co-fundador y único desarrollador en Audens Solutions.",
    keywords:
      "desarrollador de software, desarrollo web, Astro, Argentina, full-stack, automatización, Audens Solutions, desarrollador freelance",
    available: "disponible para trabajar",
    metaRole: "rol",
    metaExp: "exp",
    metaStudy: "estudios",
    role: "Desarrollador Full-stack",
    exp: "3+ años",
    study: "Ciencias de la Computación",
    taglinePre: "Co-fundador y único desarrollador en ",
    companyName: "Audens Solutions",
    taglinePost: " — ahí vive todo el trabajo.",
    ctaText: "Ver Audens Solutions",
    discordLabel: "rusherdv_",
    emailLabel: "Email",
    githubLabel: "GitHub",
    switchLabel: "EN",
    switchHref: "/?lang=en",
  },
};
