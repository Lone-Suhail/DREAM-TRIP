import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
// 1. Import the new button
import ScrollToTop from "@/components/ScrollToTop";
import { GoogleAnalytics } from '@next/third-parties/google';

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamtrip.co.in'),
  title: {
    default: "Dream Trip Kashmir | Best Travel Agency in Srinagar",
    template: "%s | Dream Trip Kashmir"
  },
  description: "Plan your perfect Kashmir holiday with Dream Trip. We offer luxury tour packages, budget stays, houseboat bookings, and reliable taxi services.",
  keywords: ["Kashmir tour packages", "Srinagar taxi service", "Gulmarg hotels", "Kashmir tourism", "Dal Lake houseboat"],
  authors: [{ name: "Dream Trip Kashmir" }],
  openGraph: {
    title: "Dream Trip Kashmir | Best Travel Agency in Srinagar",
    description: "Book affordable Kashmir tour packages and taxi services. Local experts, 24/7 support.",
    url: 'https://dreamtrip.co.in',
    siteName: 'Dream Trip Kashmir',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating Widgets */}
        <WhatsAppWidget />
        <ScrollToTop /> {/* <--- Added Here */}
      </body>
      
      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-96C9WBNPG3" /> 
      
    </html>
  );
}