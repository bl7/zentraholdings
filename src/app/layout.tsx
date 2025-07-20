import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zentra Software Solution | SaaS | InstaLabel | PrintBridge",
  description: "Zentra Holdings offers leading SaaS solutions including InstaLabel and PrintBridge. Automate, print, and scale your business with Zentra software.",
  keywords: [
    "zentra",
    "software",
    "saas",
    "solution",
    "instalabel",
    "printbridge",
    "automation",
    "printing",
    "business"
  ],
  openGraph: {
    title: "Zentra Software Solution | SaaS | InstaLabel | PrintBridge",
    description: "Zentra Holdings offers leading SaaS solutions including InstaLabel and PrintBridge. Automate, print, and scale your business with Zentra software.",
    url: "https://zentraholdings.com/",
    siteName: "Zentra Holdings",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Zentra Holdings Logo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentra Software Solution | SaaS | InstaLabel | PrintBridge",
    description: "Zentra Holdings offers leading SaaS solutions including InstaLabel and PrintBridge. Automate, print, and scale your business with Zentra software.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zentra Holdings Ltd.",
            "url": "https://zentraholdings.com/",
            "logo": "https://zentraholdings.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/zentraholdings/"
            ],
            "description": "Zentra Holdings offers leading SaaS solutions including InstaLabel and PrintBridge. Automate, print, and scale your business with Zentra software."
          }
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
