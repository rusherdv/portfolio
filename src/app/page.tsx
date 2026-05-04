import { headers } from "next/headers";
import PortfolioApp from "@/components/PortfolioApp";
import { detectPreferredLang } from "@/lib/lang";

export default async function Home() {
  const requestHeaders = await headers();
  const initialLang = detectPreferredLang(requestHeaders.get("accept-language"));

  return <PortfolioApp initialLang={initialLang} />;
}
