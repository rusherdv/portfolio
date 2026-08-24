export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const BASE = "https://rusher.cloud";

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
  telegramLabel: string;
  emailLabel: string;
  githubLabel: string;
  projectsLabel: string;
  switchLabel: string;
  switchHref: string;
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Rusher — Software Developer",
    description:
      "Software developer from Argentina, studying Computer Science. Co-founder & head of development at Audens Solutions.",
    keywords:
      "software developer, web development, Astro, Argentina, full-stack, automation, Audens Solutions, freelance developer",
    available: "available for work",
    metaRole: "role",
    metaExp: "exp",
    metaStudy: "study",
    role: "Full-stack developer",
    exp: "3+ years",
    study: "Computer Science",
    taglinePre: "Software developer from Argentina, studying Computer Science. Co-founder & head of development at ",
    companyName: "Audens Solutions",
    taglinePost: ".",
    ctaText: "See Audens Solutions",
    discordLabel: "rusherdv_",
    telegramLabel: "@rusherdv",
    emailLabel: "Email",
    githubLabel: "GitHub",
    projectsLabel: "projects",
    switchLabel: "ES",
    switchHref: "/es/",
  },
  es: {
    htmlLang: "es",
    ogLocale: "es_AR",
    title: "Rusher — Desarrollador de Software",
    description:
      "Desarrollador de software en Argentina, estudiando Ciencias de la Computación. Co-fundador y jefe de desarrollo en Audens Solutions.",
    keywords:
      "desarrollador de software, desarrollo web, Astro, Argentina, full-stack, automatización, Audens Solutions, desarrollador freelance",
    available: "disponible para trabajar",
    metaRole: "rol",
    metaExp: "exp",
    metaStudy: "estudios",
    role: "Desarrollador Full-stack",
    exp: "3+ años",
    study: "Ciencias de la Computación",
    taglinePre: "Desarrollador de software en Argentina, estudiando Ciencias de la Computación. Co-fundador y jefe de desarrollo en ",
    companyName: "Audens Solutions",
    taglinePost: ".",
    ctaText: "Ver Audens Solutions",
    discordLabel: "rusherdv_",
    telegramLabel: "@rusherdv",
    emailLabel: "Email",
    githubLabel: "GitHub",
    projectsLabel: "proyectos",
    switchLabel: "EN",
    switchHref: "/",
  },
};
