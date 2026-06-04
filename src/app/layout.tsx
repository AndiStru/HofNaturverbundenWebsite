import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hof Naturverbunden",
  description:
    "Therapie- und Begegnungshof im Sauerland. Schafwanderungen, Woll- und Filzkurse, tiergestützte Intervention und achtsame Auszeiten mit Walliser Schwarznasen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-earth-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
