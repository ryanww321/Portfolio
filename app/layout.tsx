import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Ryan Whitcomb",
  },
  description: siteConfig.description,
  keywords: [
    "Ryan Whitcomb",
    "Salesforce consultant",
    "Omnistudio consultant",
    "Omnistudio solution architect",
    "Salesforce Experience Cloud",
    "Omniscripts",
    "Agentforce",
    "solutions engineer",
    "Next.js",
    "AI-assisted workflows",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1020" },
  ],
};

const systemThemeScript = `
(() => {
  document.documentElement.classList.add("js");
  try {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", query.matches);
      document.documentElement.style.colorScheme = query.matches ? "dark" : "light";
    };

    applyTheme();
    query.addEventListener("change", applyTheme);
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bodyFont.variable} ${displayFont.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <Script id="system-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: systemThemeScript }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-foreground"
        >
          Skip to content
        </a>
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
