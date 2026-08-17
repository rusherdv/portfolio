import { defineMiddleware } from "astro:middleware";

const LOCALE_COOKIE = "lang";
const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegrambot|discordbot|preview|embed|lighthouse|pagespeed|ahrefs|semrush/i;

function pickFromAcceptLanguage(header: string): "en" | "es" {
  const top = header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: qPart ? parseFloat(qPart) : 1 };
    })
    .sort((a, b) => b.q - a.q)[0]?.tag;
  return top?.startsWith("es") ? "es" : "en";
}

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname !== "/") {
    return next();
  }

  const isBot = BOT_PATTERN.test(context.request.headers.get("user-agent") ?? "");
  if (isBot) {
    return next();
  }

  const queryLang = context.url.searchParams.get("lang");
  const cookieLang = context.cookies.get(LOCALE_COOKIE)?.value;

  let decided: "en" | "es";
  if (queryLang === "en" || queryLang === "es") {
    decided = queryLang;
  } else if (cookieLang === "en" || cookieLang === "es") {
    decided = cookieLang;
  } else {
    decided = pickFromAcceptLanguage(context.request.headers.get("accept-language") ?? "");
  }

  context.cookies.set(LOCALE_COOKIE, decided, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  if (decided === "es") {
    return context.redirect("/es/", 302);
  }

  return next();
});
