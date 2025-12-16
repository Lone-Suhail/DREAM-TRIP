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
        <a 
          href="https://wa.me/919999999999?text=Hi%20Dream%20Trip,%20I%20am%20interested%20in%20a%20Kashmir%20tour." 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={32} fill="white" className="text-green-500" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>

      </body>
    </html>
  );
}