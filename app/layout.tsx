import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // <--- Import here
import { MessageCircle } from 'lucide-react';
import WhatsAppWidget from "../components/WhatsAppWidget";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif', 
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Dream Trip | Kashmir's #1 Travel Agency",
  description: "Book luxury Kashmir tour packages, hotels, and houseboats. Experience paradise with locals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        
        {/* --- BACK TO TOP BUTTON --- */}
        <ScrollToTop />

        {/* --- FLOATING WHATSAPP BUTTON --- */}
       <WhatsAppWidget />

      </body>
    </html>
  );
}