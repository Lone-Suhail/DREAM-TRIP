'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Mountain, Navigation, Camera, Compass } from 'lucide-react';
// --- 1. IMPORT DATA (Connects to your central database) ---
import { destinations } from '@/data/destinations';

export default function Destinations() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#D97706] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/srinagar.jpg" 
            alt="Kashmir Landscape" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Compass size={14} className="animate-spin-slow" /> Destination Guide
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
            Paradise on Earth
          </h1>
          <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-white/10 mx-auto max-w-2xl">
            <p className="text-lg text-white font-light drop-shadow-lg">
               Explore the valleys that poets write about and travelers dream of.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. DESTINATIONS LIST (Clean Spacing) --- */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="space-y-32">
          
          {destinations.map((place, index) => (
            <div 
              key={place.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr ${index % 2 === 0 ? 'from-blue-100 to-transparent' : 'from-orange-100 to-transparent'} opacity-50 blur-2xl -z-10 group-hover:opacity-75 transition-opacity duration-500`}></div>
                
                {/* Image Container with Fixed Height & Shadow */}
                <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white group-hover:scale-[1.02] transition-transform duration-500">
                   <img 
                     src={place.image} 
                     alt={place.name} 
                     className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                   />
                   
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                      <h3 className="text-3xl font-serif font-bold text-white mb-1">{place.name}</h3>
                      <p className="text-gray-300 text-sm uppercase tracking-widest font-medium">{place.tagline}</p>
                   </div>
                </div>

                {/* Distance Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-3">
                   <Navigation size={16} className="text-[#D97706]" />
                   <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Distance</p>
                      <p className="text-sm font-bold text-[#1E3A8A]">{place.distance}</p>
                   </div>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                   <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 ${place.color}`}>
                      Must Visit
                   </span>
                   
                   {/* This Header will now sit cleanly below/beside the image */}
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-6 leading-tight">
                     Why {place.name}?
                   </h2>
                   
                   <p className="text-gray-600 text-lg leading-relaxed">{place.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                         <Mountain size={18} className="text-blue-500" />
                         <span className="text-xs font-bold text-gray-400 uppercase">Altitude</span>
                      </div>
                      <p className="text-lg font-bold text-[#1E3A8A]">{place.elevation}</p>
                   </div>
                   
                   <div className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                         <Calendar size={18} className="text-green-500" />
                         <span className="text-xs font-bold text-gray-400 uppercase">Best Time</span>
                      </div>
                      <p className="text-lg font-bold text-[#1E3A8A]">{place.bestTime}</p>
                   </div>
                </div>

                <div>
                   <h4 className="font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                     <Camera size={16} className="text-[#D97706]" /> Experiences
                   </h4>
                   <div className="flex flex-wrap gap-3">
                      {place.activities.map((act, i) => (
                        <span key={i} className="px-5 py-2.5 bg-white border border-gray-100 shadow-sm rounded-full text-sm font-medium text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-all cursor-default">
                           {act}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="pt-4">
                   {/* --- CHANGED LINK: Points to the Details Page now --- */}
                   <Link href={`/destinations/${place.id}`}>
                     <button className="group relative px-8 py-4 bg-[#1E3A8A] text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all w-full md:w-auto">
                        <div className="absolute inset-0 w-full h-full bg-[#D97706] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative flex items-center justify-center gap-3">
                           Explore {place.name} <ArrowRight size={18} />
                        </span>
                     </button>
                   </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- 3. BOTTOM CTA --- */}
      <section className="bg-[#1E3A8A] py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D97706] rounded-full blur-3xl"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Confused where to go?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
               Don't worry. Our local experts can help you craft the perfect itinerary covering the best spots based on your season of travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/plan">
                  <button className="px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                     Build My Itinerary
                  </button>
               </Link>
               <a href="https://wa.me/919149726260" target="_blank" className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                  Chat with Expert
               </a>
            </div>
         </div>
      </section>

    </main>
  );
}