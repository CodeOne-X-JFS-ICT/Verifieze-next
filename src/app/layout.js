import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Background Check Services Sri Lanka | KYC | ISO 27001 | VERIFIEZE",
  description: "VERIFIEZE offers fast, accurate, and compliant background verification solutions in Sri Lanka.",
  applicationName: "VERIFIEZE",
  openGraph: {
    siteName: "VERIFIEZE",
  },
  keywords: [
    "background check Sri Lanka",
    "employee verification Sri Lanka",
    "KYC verification Sri Lanka",
    "BGV Sri Lanka",
    "BGC Sri Lanka",
    "ISO certified background check",
    "pre employment screening Sri Lanka"
  ],
};

import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  // JSON-LD structured data to explicitly tell Google the Site Name
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VERIFIEZE",
    "url": "https://verifieze.com/"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          src="https://wayorock.com/tracking/track.js"
          data-site="ak_e4145033e02fc89aa0e49ce6cd81fe23"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
