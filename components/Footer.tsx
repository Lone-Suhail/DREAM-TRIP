import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaMapPin, 
  FaPhone, 
  FaEnvelope, // Changed from FaMail (which doesn't exist)
  FaGlobe 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Dream Trip</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Your trusted partner for exploring the paradise of Kashmir. We craft unforgettable journeys with a touch of local hospitality.
            </p>
            <div className="flex gap-4">
              {/* Instagram Link */}
              <a href="https://instagram.com/dream.trip44" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-colors">
                <FaInstagram size={20} />
              </a>
              {/* Facebook Link */}
              <a href="https://www.facebook.com/profile.php?id=61551418647075" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-colors">
                <FaFacebookF size={20} />
              </a>
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/919149726260" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D97706]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/packages" className="hover:text-white hover:translate-x-1 transition-all inline-block">Tour Packages</Link></li>
              <li><Link href="/destinations" className="hover:text-white hover:translate-x-1 transition-all inline-block">Destinations</Link></li>
              <li><Link href="/plan" className="hover:text-white hover:translate-x-1 transition-all inline-block">Plan My Trip</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D97706]">Support</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all inline-block">Terms & Conditions</Link></li>
              <li><Link href="/booking-policy" className="hover:text-white transition-colors">Booking Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D97706]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <FaMapPin size={20} className="shrink-0 text-[#D97706]" />
                <span>Main Road Beehama, Ganderbal, J&K - 191201</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone size={20} className="shrink-0 text-[#D97706]" />
                <span>+91 9149726260</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope size={20} className="shrink-0 text-[#D97706]" />
                <span>info@dreamtrip.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Dream Trip Kashmir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;