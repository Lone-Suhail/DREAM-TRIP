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
    <main className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#D97706] selection:text-white overflow-x-hidden">

     {/* --- 1. SEASONAL HERO SECTION --- */}
      <SeasonalHero />

      {/* --- 2. THE EXPERIENCE BENTO GRID --- */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm mb-2 block">Discover Kashmir</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-4">Not Just a Trip, An Experience</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Curated moments that stay with you forever. Immerse yourself in the beauty, culture, and warmth of the valley.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[650px] max-w-7xl mx-auto">
            <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5">
              <img src="/srinagar.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Srinagar Houseboats" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end transition-opacity duration-500">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white border border-white/30 group-hover:bg-[#D97706] group-hover:border-[#D97706] transition-colors duration-500">
                  <Ship size={26} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">Heritage Houseboats</h3>
                <p className="text-gray-200 text-lg md:max-w-md leading-relaxed">Wake up to the sound of ripples on Dal Lake in 100-year-old floating palaces.</p>
              </div>
            </div>
            
            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br from-[#1E3A8A] to-[#152a66] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="p-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                 <div className="p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                   <Coffee size={40} className="text-[#D97706]" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3">Authentic Wazwan</h3>
                 <p className="text-blue-100 text-sm leading-relaxed">Taste the royal 36-course meal of Kashmir.</p>
              </div>
            </div>

            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl ring-1 ring-black/5">
               <img src="/gulmarg.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gulmarg Winter" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Snowflake size={24} className="text-blue-300"/> Winter Magic</h3>
                 </div>
               </div>
            </div>

            <div className="md:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl ring-1 ring-black/5">
              <img src="/pahalgam.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pahalgam Valleys" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-center">
                  <div className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-3">Untamed Valleys</h3>
                    <p className="text-gray-200 max-w-sm text-lg">Trek through the untouched pine forests of Pahalgam and Sonamarg.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE US SECTION --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">The Dream Trip Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(30,58,138,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center group border border-gray-50">
              <div className="w-24 h-24 bg-blue-50/80 rounded-2xl flex items-center justify-center mb-8 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">100% Safe & Verified</h3>
              <p className="text-gray-500 leading-relaxed">We verify every hotel, driver, and houseboat personally. Your safety is our #1 priority throughout your journey.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(217,119,6,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center group border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-24 h-24 bg-orange-50/80 rounded-2xl flex items-center justify-center mb-8 text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white group-hover:-rotate-6 transition-all duration-500 shadow-inner">
                <Heart size={48} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">No Hidden Costs</h3>
              <p className="text-gray-500 leading-relaxed">The price we quote is the price you pay. No surprise taxes, no driver tips demanded. Pure transparency.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(30,58,138,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center group border border-gray-50">
              <div className="w-24 h-24 bg-blue-50/80 rounded-2xl flex items-center justify-center mb-8 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                <ArrowRight size={48} className="-rotate-45" /> 
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">24/7 Local Support</h3>
              <p className="text-gray-500 leading-relaxed">We live here. If you need anything at 2 AM, our dedicated local team is just one quick call away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRENDING PACKAGES --- */}
      <FeaturedPackages />

      {/* --- 5. STATS STRIP (Enhanced with Mesh Gradient & Glassmorphism) --- */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#152a66] to-[#0f1d4a] text-white relative overflow-hidden">
        {/* Dynamic Glowing Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D97706] rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <p className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">5k+</p>
                  <p className="text-blue-200 text-sm tracking-[0.2em] uppercase font-semibold">Happy Travelers</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <p className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">24/7</p>
                  <p className="text-blue-200 text-sm tracking-[0.2em] uppercase font-semibold">On-Trip Support</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <p className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D97706]">100%</p>
                  <p className="text-blue-200 text-sm tracking-[0.2em] uppercase font-semibold">Customizable</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <p className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">4.9</p>
                  <p className="text-blue-200 text-sm tracking-[0.2em] uppercase font-semibold">Google Rating</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS MARQUEE --- */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 mb-16 text-center relative z-20">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Guest Reviews</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Stories from Paradise</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">Don't just take our word for it. Hear from our happy travelers who explored Kashmir with us.</p>
        </div>

        <div className="w-full relative">
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee flex gap-8 py-6">
                {allReviews.map((review, idx) => (
                    <div 
                        key={idx} 
                        className="w-[420px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(30,58,138,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col select-none relative group"
                    >
                        {/* Decorative Quote Mark */}
                        <div className="absolute top-6 right-8 text-8xl text-blue-50 font-serif leading-none group-hover:text-blue-100 transition-colors duration-300">"</div>
                        
                        <div className="flex items-center gap-1 mb-6 text-[#D97706] relative z-10">
                            {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D97706" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                        </div>
                        <div className="relative mb-8 flex-grow">
                            <p className="text-gray-600 leading-relaxed text-lg relative z-10 italic">"{review.text}"</p>
                        </div>
                        <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2a52be] text-white flex items-center justify-center font-bold text-lg shadow-md">
                                {review.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1E3A8A] text-base">{review.name}</h4>
                                <p className="text-sm text-gray-500 font-medium">{review.from} • <span className="text-[#D97706]">{review.date}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16 text-center relative z-20">
            <a href="https://www.google.com/search?q=dream+trip+kashmir+reviews" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold text-lg hover:text-[#D97706] transition-colors cursor-pointer group">
                See more reviews on Google 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </section>

      {/* --- 7. CTA SECTION (Enhanced with glowing button) --- */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
          <img src="/sonamarg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Sonamarg Landscape" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
              <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-4 block drop-shadow-lg">Let's Create Memories</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-xl">Your Dream Trip Awaits</h2>
              <p className="text-gray-200 max-w-2xl mx-auto text-xl mb-12 drop-shadow-md">Stop dreaming and start packing. Our local experts are ready to craft the perfect itinerary for you.</p>
              
              {/* Glowing Pulse Button Feature */}
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D97706] to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
                <Link href="/book?title=Plan My Dream Trip" className="relative">
                  <button className="px-12 py-5 bg-white text-[#1E3A8A] group-hover:bg-[#D97706] group-hover:text-white font-bold rounded-full transition-all duration-300 text-xl shadow-2xl cursor-pointer flex items-center gap-3 mx-auto">
                    Get a Free Quote Now
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
          </div>
      </section>

    </main>
  );
}