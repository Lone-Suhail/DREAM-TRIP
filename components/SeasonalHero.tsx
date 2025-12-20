'use client';

import React from 'react';
import { seasonConfig, SeasonType } from '@/data/seasons';
import Link from 'next/link';
import { ChevronDown, Wand2, CloudSnow, Sun, CloudRain, Wind } from 'lucide-react';
import { useSeason } from '@/data/SeasonContext';

export default function SeasonalHero() {
  const { season, setSeason } = useSeason();
  const config = seasonConfig[season];

  const getIcon = (s: SeasonType) => {
    switch(s) {
      case 'winter': return <CloudSnow size={12} />;
      case 'summer': return <Sun size={12} />;
      case 'spring': return <Wind size={12} />;
      case 'autumn': return <CloudRain size={12} />;
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-20">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          key={season}
          className="w-full h-full bg-cover bg-center animate-slow-zoom transition-all duration-1000"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        />
      </div>

      {/* 2. SEASON SELECTOR (The "Gap" Filler) */}
      <div className="absolute z-30 w-full flex justify-center px-2
        /* Mobile: Fixed at top-24 (Between Header and Text) */
        top-24 
        /* Desktop: Move to Right Side */
        md:top-24 md:justify-end md:right-4 md:w-auto md:px-0"
      >
        <div className="flex flex-row gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-xl">
          {(Object.keys(seasonConfig) as SeasonType[]).map((s) => (
            <button
              key={s}
              onClick={() => setSeason(s)}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                season === s 
                  ? 'bg-white text-[#D97706] shadow-sm scale-105' 
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {/* Icon first, then Full Name */}
              {getIcon(s)} 
              <span>{s}</span> 
            </button>
          ))}
        </div>
      </div>

      {/* 3. CENTERED CONTENT */}
      {/* pt-40 ensures the text starts LOWER, leaving space for the buttons above */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-40 md:pt-32 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6 animate-fade-in-up">
          <span 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: config.accentColor }} 
          ></span>
          #1 Travel Agency in Kashmir
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl tracking-tight animate-fade-in-up delay-100">
          Heaven is closer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-yellow-200 to-[#D97706]">
            than you think.
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-100 mb-10 max-w-xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in-up delay-200">
          Forget the maps. We take you to the hidden valleys, the silent lakes, and the snow-draped peaks that only locals know.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-fade-in-up delay-300">
          <Link href="/packages">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#D97706] hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-base cursor-pointer">
              View Packages
            </button>
          </Link>
          <Link href="/plan">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E3A8A] hover:bg-gray-100 font-bold rounded-full transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-base cursor-pointer">
              <Wand2 size={18} className="text-[#D97706]" /> Build Your Own Trip
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20 hidden md:block">
        <ChevronDown size={28} className="opacity-70" />
      </div>

    </section>
  );
}