"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Logic: Navbar is "Sticky" (White background) if we scroll OR if we are NOT on the home page
  const isHome = pathname === "/";
  const isSticky = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Taxi Rental', href: '/taxi' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }, // <--- Added Contact here
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#D97706] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            D
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isSticky ? 'text-[#1E3A8A]' : 'text-white'}`}>
            Dream<span className="text-[#D97706]">Trip</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`font-medium transition-colors cursor-pointer relative text-sm lg:text-base ${
                // LOGIC: Active page = ORANGE. Otherwise Blue (sticky) or White (transparent).
                pathname === link.href 
                  ? 'text-[#D97706] font-bold' 
                  : isSticky 
                    ? 'text-gray-700 hover:text-[#D97706]' 
                    : 'text-white/90 hover:text-[#D97706]'
              }`}
            >
              {link.name}
              {/* Little Orange Dot under active link */}
              {pathname === link.href && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D97706] rounded-full"></span>
              )}
            </Link>
          ))}

          {/* Call Button */}
          <a href="tel:+919999999999" className={`hidden lg:flex items-center gap-2 font-bold px-4 py-2 rounded-full transition-all text-sm border ${
             isSticky 
              ? 'border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-[#1E3A8A]'
          }`}>
             <Phone size={16} />
             <span>+91 99066 12345</span>
          </a>

          {/* Plan Trip Button */}
          <Link 
            href="/plan" 
            className="bg-[#D97706] text-white px-5 py-2 rounded-full font-bold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg text-sm cursor-pointer whitespace-nowrap"
          >
            Plan My Trip
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-[#D97706] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={isSticky ? 'text-[#1E3A8A]' : 'text-white'} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col items-center gap-6 py-10 animate-fade-in-up border-t border-gray-100 h-screen overflow-y-auto pb-32">
          {navLinks.map((link) => (
             <Link 
               key={link.name}
               href={link.href} 
               onClick={() => setIsOpen(false)} 
               className={`text-xl font-medium cursor-pointer ${
                 pathname === link.href ? 'text-[#D97706] font-bold' : 'text-gray-800 hover:text-[#D97706]'
               }`}
             >
               {link.name}
             </Link>
          ))}
          
          <Link href="/plan" onClick={() => setIsOpen(false)} className="w-auto mt-4">
            <div className="bg-[#D97706] text-white px-8 py-3 rounded-full font-bold shadow-lg cursor-pointer text-center">
              Plan My Trip
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;