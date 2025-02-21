import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title:
    "Rusher – Full Stack Developer & Software Engineer | Next.js, Node.js & Automation",
  description:
    "Full Stack Developer specializing in Next.js, Node.js, and software automation. Creator of high-performance web apps, e-commerce solutions, and custom bots. Explore my projects and let's build something great!",
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* ICONS */}

        <meta name="apple-mobile-web-app-title" content="Rusher" />

        {/* OG TAGS */}

        <meta property="og:url" content="https://www.rusher.net.ar" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rusher – Full Stack Developer & Software Engineer | Next.js, Node.js & Automation"
        />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in Next.js, Node.js, and software automation. Creator of high-performance web apps, e-commerce solutions, and custom bots. Explore my projects and let's build something great!"
        />
        <meta
          property="og:image"
          content={`https://www.rusher.net.ar/images/og.webp`}
        />
        <meta
          property="og:site_name"
          content="Rusher – Full Stack Developer & Software Engineer | Next.js, Node.js & Automation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rusher.net.ar" />
        <meta property="twitter:url" content="https://www.rusher.net.ar" />
        <meta
          name="twitter:title"
          content="Rusher – Full Stack Developer & Software Engineer | Next.js, Node.js & Automation"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer specializing in Next.js, Node.js, and software automation. Creator of high-performance web apps, e-commerce solutions, and custom bots. Explore my projects and let's build something great!"
        />
        <meta
          name="twitter:image"
          content={`https://www.rusher.net.ar/images/og.webp`}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
