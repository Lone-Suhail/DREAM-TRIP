"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Search, Calendar, Users, ShieldCheck, Heart, Sparkles, ChevronRight } from 'lucide-react';
import SeasonalHero from '@/components/SeasonalHero';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';

// --- DATA FOR NEW SECTIONS ---
const destinations = [
  { id: 'srinagar', name: 'Srinagar', tag: 'The Venice of the East', image: '/srinagar.jpg', desc: 'Dal Lake houseboats, Mughal Gardens, and heritage walks.' },
  { id: 'gulmarg', name: 'Gulmarg', tag: 'Meadow of Flowers', image: '/gulmarg.jpg', desc: 'World’s highest gondola, skiing slopes, and luxury resorts.' },
  { id: 'pahalgam', name: 'Pahalgam', tag: 'Valley of Shepherds', image: '/pahalgam.jpg', desc: 'Betaab Valley, Aru Valley, and river rafting adventures.' },
];

const categories = [
  { icon: "🏔️", title: "Adventure", desc: "Trekking & Skiing" },
  { icon: "🍯", title: "Honeymoon", desc: "Romantic Escapes" },
  { icon: "🕌", title: "Heritage", desc: "Culture & History" },
  { icon: "🧘", title: "Wellness", desc: "Yoga & Peace" },
];

export default function Home() {
  const [activeDest, setActiveDest] = useState(0);
  // Show 4 packages for the scroll section
  const featuredPackages = packages.slice(0, 4); 

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#D97706] selection:text-white">

      {/* --- 1. HERO SECTION (With Floating Search Bar) --- */}
      <div className="relative">
        <SeasonalHero />
        
        {/* Floating Glass Search Bar (Unique Touch) */}
        <div className="absolute bottom-[-40px] left-0 w-full z-40 px-4">
          <div className="container mx-auto max-w-4xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4">
             <div className="flex-1 w-full flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 px-2">
                <MapPin className="text-[#D97706]" size={20} />
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Where</span>
                   <span className="font-bold text-[#1E3A8A]">All Kashmir</span>
                </div>
             </div>
             <div className="flex-1 w-full flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 px-2">
                <Calendar className="text-[#D97706]" size={20} />
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">When</span>
                   <span className="font-bold text-[#1E3A8A]">Any Dates</span>
                </div>
             </div>
             <div className="flex-1 w-full flex items-center gap-3 pb-2 md:pb-0 px-2">
                <Users className="text-[#D97706]" size={20} />
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Guests</span>
                   <span className="font-bold text-[#1E3A8A]">2 Adults</span>
                </div>
             </div>
             <button className="w-full md:w-auto bg-[#1E3A8A] hover:bg-[#D97706] text-white p-4 rounded-xl transition-colors shadow-lg">
                <Search size={24} />
             </button>
          </div>
        </div>
      </div>

      {/* --- 2. CATEGORIES (Clean & Minimal) --- */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group text-center">
                   <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                   <h3 className="font-bold text-[#1E3A8A]">{cat.title}</h3>
                   <p className="text-xs text-gray-400">{cat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 3. DESTINATION SPOTLIGHT (Interactive Tabs) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              
              {/* Left Text */}
              <div className="md:w-1/3 space-y-8">
                 <div>
                   <span className="text-[#D97706] font-bold uppercase tracking-widest text-xs">Explore Paradise</span>
                   <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2 leading-tight">
                     Uncover the <br/> Hidden Gems
                   </h2>
                 </div>
                 
                 <div className="space-y-4">
                   {destinations.map((dest, idx) => (
                     <div 
                       key={dest.id}
                       onClick={() => setActiveDest(idx)}
                       className={`p-4 rounded-xl cursor-pointer transition-all border-l-4 ${
                         activeDest === idx 
                         ? 'bg-blue-50 border-[#1E3A8A] pl-6' 
                         : 'border-transparent hover:bg-gray-50'
                       }`}
                     >
                        <h4 className={`text-lg font-bold ${activeDest === idx ? 'text-[#1E3A8A]' : 'text-gray-400'}`}>
                          {dest.name}
                        </h4>
                        {activeDest === idx && (
                          <p className="text-sm text-gray-600 mt-1 animate-fade-in">{dest.tag}</p>
                        )}
                     </div>
                   ))}
                 </div>
                 
                 <Link href="/destinations">
                   <button className="flex items-center gap-2 text-[#D97706] font-bold hover:gap-4 transition-all mt-4">
                     View All Destinations <ArrowRight size={18} />
                   </button>
                 </Link>
              </div>

              {/* Right Image Display (Magazine Style) */}
              <div className="md:w-2/3 w-full h-[500px] relative rounded-[2rem] overflow-hidden shadow-2xl group">
                 {destinations.map((dest, idx) => (
                    <div 
                      key={dest.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${activeDest === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                       <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                       <div className="absolute bottom-8 left-8 text-white max-w-md">
                          <h3 className="text-3xl font-serif font-bold mb-2">{dest.name}</h3>
                          <p className="text-gray-200 text-lg leading-relaxed">{dest.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>

           </div>
        </div>
      </section>

      {/* --- 4. SIGNATURE PACKAGES (Horizontal Scroll) --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 flex justify-between items-end">
           <div>
             <span className="text-[#D97706] font-bold uppercase tracking-widest text-xs">Handpicked Journeys</span>
             <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Signature Packages</h2>
           </div>
           <div className="hidden md:flex gap-2">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400"><ChevronRight className="rotate-180"/></div>
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center"><ChevronRight /></div>
           </div>
        </div>
        
        {/* Horizontal Carousel Container */}
        <div className="w-full overflow-x-auto pb-12 px-4 scrollbar-hide">
           <div className="flex gap-6 w-max">
              {featuredPackages.map((pkg) => (
                 <div key={pkg.id} className="w-[300px] md:w-[350px]">
                    {/* ✅ REUSING YOUR SMART PRICING CARD */}
                    <PackageCard data={pkg} />
                 </div>
              ))}
           </div>
        </div>
        
        <div className="text-center mt-8">
           <Link href="/packages">
              <button className="px-8 py-3 bg-[#1E3A8A] text-white rounded-full font-bold hover:bg-[#D97706] transition-colors shadow-lg">
                Explore All Packages
              </button>
           </Link>
        </div>
      </section>

      {/* --- 5. THE PROMISE (Dark Premium Section) --- */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-md mb-6">
                  <Sparkles className="text-[#D97706]" size={24} />
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Dream Trip Standard</h2>
               <p className="text-gray-400 text-lg">We don't just book hotels. We craft experiences that become family heirlooms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
               <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <ShieldCheck className="text-[#D97706] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-3">Verified Partners Only</h3>
                  <p className="text-gray-400 leading-relaxed">We personally visit every hotel and houseboat. If we wouldn't stay there, we won't book it for you.</p>
               </div>
               <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <Users className="text-[#D97706] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-3">Local Experts, Not Bots</h3>
                  <p className="text-gray-400 leading-relaxed">Chat with real Kashmiris who know which cafe serves the best Kahwa and where the sunset looks best.</p>
               </div>
               <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <Heart className="text-[#D97706] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-3">No Hidden Surprises</h3>
                  <p className="text-gray-400 leading-relaxed">The price you see is the price you pay. Taxes, tolls, and driver allowances are always included.</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. MODERN CTA --- */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="bg-[#D97706] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('/srinagar.jpg')] bg-cover opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Ready for Kashmir?</h2>
                  <p className="text-white/90 text-xl mb-10">Let's build a custom itinerary that fits your dates, budget, and dreams.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/plan">
                        <button className="px-10 py-4 bg-white text-[#D97706] font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                           Start Planning Free
                        </button>
                     </Link>
                     <Link href="/contact">
                        <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[#D97706] transition-all">
                           Talk to an Expert
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}