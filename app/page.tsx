"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Ship, Coffee, Snowflake, ShieldCheck, Heart } from 'lucide-react';
import SeasonalHero from '@/components/SeasonalHero';
import FeaturedPackages from '@/components/FeaturedPackages';

// --- TESTIMONIALS DATA ---
const reviews = [
  { name: "Rahul & Simran", from: "Mumbai", rating: 5, text: "We were worried about safety, but Dream Trip made us feel like family. The houseboat stay in Dal Lake was magical.", date: "Nov 2025" },
  { name: "Amit Verma", from: "Delhi", rating: 5, text: "The driver (Sameer Bhai) was a gem. He took us to a hidden spot in Pahalgam that wasn't on the map. Top-notch service.", date: "Oct 2025" },
  { name: "Sarah Jenkins", from: "UK", rating: 5, text: "As a solo female traveler, I was hesitant. But the team ensured I was safe 24/7. Verified drivers and daily check-ins.", date: "Dec 2025" },
  { name: "The Mehta Family", from: "Gujarat", rating: 4, text: "Hotels in Gulmarg were heated perfectly (very important for my parents). The food was good, mostly vegetarian as requested.", date: "Jan 2025" },
  { name: "Arjun & Friends", from: "Bangalore", rating: 5, text: "Skiing in Gulmarg was the highlight! The team arranged the instructor and equipment for us in advance.", date: "Jan 2025" },
  { name: "Priya Das", from: "Kolkata", rating: 5, text: "I wanted a relaxed trip. Doodhpathri was the best suggestion they gave. So peaceful compared to Sonamarg.", date: "Sep 2025" },
  { name: "Col. R.K. Singh", from: "Pune", rating: 5, text: "Very professional. No hidden costs. The Innova Crysta was brand new. Will definitely book again.", date: "Aug 2025" },
  { name: "David & Emily", from: "Australia", rating: 5, text: "We have traveled to Switzerland, but Kashmir has a unique charm. The Autumn colors were unreal.", date: "Oct 2025" }
];

const allReviews = [...reviews, ...reviews];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white font-sans selection:bg-[#D97706] selection:text-white relative overflow-hidden">

      {/* --- FLOATING BACKGROUND GLOW --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D97706]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl"></div>
      </div>

      {/* --- 1. SEASONAL HERO SECTION --- */}
      <SeasonalHero />

      {/* --- 2. EXPERIENCE GRID --- */}
      <section className="py-24 bg-gray-50 relative z-30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-4">
              Not Just a Trip, An Experience
            </h2>
            <p className="text-gray-500 text-lg">
              Curated moments that stay with you forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

            {/* BIG CARD */}
            <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/srinagar.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white">
                  <Ship size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Heritage Houseboats
                </h3>
                <p className="text-gray-200">
                  Wake up to the sound of ripples on Dal Lake in 100-year-old floating palaces.
                </p>
              </div>
            </div>

            {/* WAZWAN */}
            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer bg-[#1E3A8A] hover:scale-105 transition">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="p-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                <Coffee size={48} className="text-[#D97706] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Authentic Wazwan</h3>
                <p className="text-blue-200 text-sm">
                  Taste the royal 36-course meal of Kashmir.
                </p>
              </div>
            </div>

            {/* GULMARG */}
            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/gulmarg.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Snowflake size={18}/> Winter Magic
                </h3>
              </div>
            </div>

            {/* PAHALGAM */}
            <div className="md:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/pahalgam.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Untamed Valleys</h3>
                <p className="text-gray-200 max-w-xs">
                  Trek through the untouched pine forests of Pahalgam and Sonamarg.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-white border-y border-gray-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">
              The Dream Trip Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition">
                <ShieldCheck size={40}/>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                100% Safe & Verified
              </h3>
              <p className="text-gray-500 max-w-xs">
                We verify every hotel, driver, and houseboat personally.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition">
                <Heart size={40}/>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                No Hidden Costs
              </h3>
              <p className="text-gray-500 max-w-xs">
                The price we quote is the price you pay.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition">
                <ArrowRight size={40}/>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                24/7 Local Support
              </h3>
              <p className="text-gray-500 max-w-xs">
                Our local team is always available for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- PACKAGES --- */}
      <FeaturedPackages />

      {/* --- CTA --- */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">

        <img src="/sonamarg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">
            Your Dream Trip Awaits
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">
            Stop dreaming and start packing.
          </p>

          <Link href="/book?title=Plan My Dream Trip">
            <button className="px-12 py-5 bg-white text-gray-900 hover:bg-[#D97706] hover:text-white font-bold rounded-full transition-all text-xl shadow-2xl hover:scale-110 active:scale-95">
              Get a Free Quote Now
            </button>
          </Link>

        </div>

      </section>

      {/* --- WHATSAPP FLOAT BUTTON --- */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
          <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.97.52 3.84 1.52 5.48L2 22l4.7-1.58a9.85 9.85 0 0 0 5.34 1.54c5.48 0 9.94-4.46 9.94-9.94C21.98 6.46 17.52 2 12.04 2z"/>
        </svg>
      </a>

    </main>
  );
}