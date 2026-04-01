import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbershop Lounge | Boston's Premier Men's Salon & Barbershop",
  description:
    "The only dual licensed Men's Salon & Barbershop on Newbury Street. Expert cuts, beard services, and premium grooming since 2008.",
  keywords: ["barbershop", "haircut", "Boston", "Newbury Street", "beard trim", "fade", "men's salon", "Back Bay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
