"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSticky = scrolled || !isHome;

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
            Dream Trip
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className={`hidden md:flex items-center gap-8 ${isSticky ? 'text-gray-700' : 'text-white/90'}`}>
          <Link href="/" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">Home</Link>
          <Link href="/about" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">About</Link>
          <Link href="/packages" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">Packages</Link>
          <Link href="/destinations" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">Destinations</Link>
          <Link href="/taxi" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">Taxi Services</Link>
          <Link href="/contact" className="hover:text-[#D97706] transition-colors font-medium cursor-pointer">Contact</Link>
          
          {/* FIX: Applied styles directly to Link, removed <button> tag */}
          <Link 
            href="/plan" 
            className="bg-[#D97706] text-white px-5 py-2 rounded-full font-bold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg text-sm cursor-pointer"
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
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden flex flex-col items-center gap-6 py-10 animate-fade-in-up border-t border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">About</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">Packages</Link>
          <Link href="/destinations" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">Destinations</Link>
          <Link href="/taxi" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">Taxi Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-[#D97706] cursor-pointer">Contact</Link>
          
          {/* FIX: Mobile Button Link */}
          <Link href="/plan" onClick={() => setIsOpen(false)} className="w-auto">
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