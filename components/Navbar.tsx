'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <--- Import this
import { Menu, X, Phone, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // <--- Get current page

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'Taxi Rental', href: '/taxi' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-[#D97706] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl group-hover:rotate-12 transition-transform">
             D
           </div>
           <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
             Dream<span className="text-[#D97706]">Trip</span>
           </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold tracking-wide transition-colors relative group ${
                // LOGIC: If current page matches link, make it ORANGE.
                pathname === link.href 
                  ? 'text-[#D97706]' 
                  : scrolled ? 'text-gray-700 hover:text-[#D97706]' : 'text-white hover:text-[#D97706]'
              }`}
            >
              {link.name}
              {/* Active Dot */}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D97706] rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <div className="hidden md:flex items-center gap-4">
           <a href="tel:+919999999999" className={`flex items-center gap-2 font-bold px-5 py-2.5 rounded-full transition-all ${scrolled ? 'bg-[#1E3A8A] text-white' : 'bg-white text-[#1E3A8A]'}`}>
              <Phone size={18} />
              <span>+91 99066 12345</span>
           </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#D97706]">
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${pathname === link.href ? 'text-[#D97706]' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}