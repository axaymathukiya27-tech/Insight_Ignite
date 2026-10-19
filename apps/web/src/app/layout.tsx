import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Insight Ignite — Dr. Nivedita Ganguli | Conscious Parenting Platform",
  description:
    "Official online education platform for Dr. Nivedita Ganguli. Explore 'The 6 Powers of Conscious Parenting' masterclass, cultivating presence, emotional attunement, compassionate boundaries, and calm co-regulation.",
  keywords: [
    "Conscious Parenting",
    "Dr. Nivedita Ganguli",
    "Insight Ignite",
    "Co-Regulation",
    "Parent Child Attunement",
    "Parenting Courses",
  ],
  authors: [{ name: "Dr. Nivedita Ganguli" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#2D241E] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
