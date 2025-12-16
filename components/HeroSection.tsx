"use client";

import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Users } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop", // Shikara
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop", // Snow
  "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop"  // Valley
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      
      {/* 1. Background Image Slider */}
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img}
            alt={`Kashmir Destination ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay: Increased to 30% black so White text pops on Snow */}
          <div className="absolute inset-0 bg-black/30" /> 
        </div>
      ))}

      {/* 2. Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-12">
        
        <span className="font-serif italic text-white text-2xl md:text-3xl mb-4 font-bold tracking-wide animate-fade-in-up drop-shadow-md">
          Experience Kashmir Like Never Before
        </span>
        
        <h1 className="font-serif text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
          DREAM <span className="text-[#D97706]">TRIP</span>
        </h1>
        
        {/* Glass Box with Dark Text for description */}
        <div className="max-w-2xl bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg mb-10">
            <p className="text-white text-lg md:text-xl font-bold leading-relaxed drop-shadow-md">
            "Kashmir isn't just a destination; it's an emotion. Where snow-kissed peaks whisper ancient tales."
            </p>
        </div>

        {/* 3. Search Widget */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border-t-4 border-[#D97706] flex flex-col md:flex-row gap-4">
          
          <div className="flex-1 relative group">
            <MapPin className="absolute left-3 top-3 text-[#1E3A8A]" size={20} />
            <select className="w-full pl-10 p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#1E3A8A] outline-none text-gray-700 font-medium cursor-pointer">
              <option>Select Destination</option>
              <option>Srinagar & Dal Lake</option>
              <option>Gulmarg (Skiing)</option>
              <option>Pahalgam (Valley)</option>
            </select>
          </div>

          <div className="flex-1 relative">
            <Calendar className="absolute left-3 top-3 text-[#1E3A8A]" size={20} />
            <input 
              type="date" 
              className="w-full pl-10 p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#1E3A8A] outline-none text-gray-700 font-medium cursor-pointer" 
            />
          </div>

          <div className="flex-1 relative">
            <Users className="absolute left-3 top-3 text-[#1E3A8A]" size={20} />
            <select className="w-full pl-10 p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-[#1E3A8A] outline-none text-gray-700 font-medium cursor-pointer">
              <option>2 Travelers</option>
              <option>4 Travelers</option>
              <option>Family (4+)</option>
            </select>
          </div>

          <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 active:scale-95">
            <Search size={20} /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;