import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Doomsday Combat Fitness | Elite MMA, Muay Thai & BJJ Training",
  description:
    "Doomsday Combat Fitness is your home for MMA, Muay Thai, Brazilian Jiu-Jitsu, boxing & kickboxing coaching — elite instructors, every skill level, one relentless team. Claim your free class today.",
  keywords: [
    "MMA gym",
    "Muay Thai classes",
    "Brazilian Jiu-Jitsu",
    "boxing gym",
    "kickboxing fitness",
    "combat sports training",
    "Doomsday Combat Fitness",
  ],
  openGraph: {
    title: "Doomsday Combat Fitness | Elite MMA, Muay Thai & BJJ Training",
    description:
      "Elite MMA, Muay Thai, BJJ, boxing & kickboxing coaching for every skill level. Claim your free class today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-mist text-ink antialiased selection:bg-primary selection:text-white">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
