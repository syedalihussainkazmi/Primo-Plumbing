import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Primo Plumbing & Drain | Spokane's Premium Plumbing Experts",
  description:
    "Family-owned, licensed & insured plumbing in Spokane, WA for over 30 years. Drain cleaning, water heaters, repiping & 24/7 emergency service — upfront pricing, guaranteed work.",
  keywords: [
    "Spokane plumber",
    "drain cleaning Spokane",
    "water heater repair Spokane",
    "emergency plumber Spokane WA",
    "Primo Plumbing and Drain",
  ],
  openGraph: {
    title: "Primo Plumbing & Drain | Spokane's Premium Plumbing Experts",
    description:
      "Family-owned, licensed & insured plumbing in Spokane, WA for over 30 years. Upfront pricing, guaranteed work, 24/7 emergency response.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-mist text-ink antialiased selection:bg-primary selection:text-white">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
