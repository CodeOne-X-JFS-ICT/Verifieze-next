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
  title: "Background Check Services Sri Lanka | KYC | ISO 27001 | Verifieze",
  description: "Verifieze offers fast, accurate, and compliant background verification solutions in Sri Lanka.",
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
  return (
    <html lang="en">
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
