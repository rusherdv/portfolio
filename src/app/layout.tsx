import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE = "https://rusherdv.vercel.app";
const title = "Rusher — Software Developer";
const description =
  "Software developer from Argentina. Co-founder & Head of Development at Audens Solutions. 20+ live projects across web, automation and digital solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title,
  description,
  keywords: [
    "software developer",
    "web development",
    "Next.js",
    "Argentina",
    "full-stack",
    "automation",
    "Audens Solutions",
    "freelance developer",
  ],
  authors: [{ name: "Rusher", url: BASE }],
  creator: "Rusher",
  alternates: {
    canonical: BASE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: BASE,
    siteName: "Rusher Portfolio",
    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: "Rusher — Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
