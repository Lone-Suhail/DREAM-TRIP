import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { GoogleAnalytics } from '@next/third-parties/google';
import { SeasonProvider } from '@/data/SeasonContext'; // <--- NEW IMPORT

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-sans',
});

// 1. PWA Viewport Settings (Theme Color & Zoom Lock)
export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // This makes it feel like a real app (no zooming)
};

// 2. SEO & Manifest Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://dreamtrip.co.in'),
  title: {
    default: "Dream Trip Kashmir | Best Travel Agency in Srinagar",
    template: "%s | Dream Trip"
  },
  description: "Plan your perfect Kashmir holiday with Dream Trip. We offer luxury tour packages, budget stays, houseboat bookings, and reliable taxi services.",
  keywords: ["Kashmir tour packages", "Srinagar taxi service", "Gulmarg hotels", "Kashmir tourism", "Dal Lake houseboat"],
  authors: [{ name: "Dream Trip Kashmir" }],
  
  icons: {
    icon: '/icon.png', // Ensure icon.png is in your public/ folder
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // --- PWA MANIFEST LINKED HERE ---
  manifest: "/manifest.json", 
  
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
        
        {/* --- WRAP EVERYTHING INSIDE SEASON PROVIDER --- */}
        <SeasonProvider>
          <Navbar />
          {children}
          <Footer />
          
          {/* Floating Widgets */}
          <WhatsAppWidget />
          <ScrollToTop />
        </SeasonProvider>
        {/* ---------------------------------------------- */}

      </body>
      
      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-96C9WBNPG3" /> 
      
    </html>
  );
}