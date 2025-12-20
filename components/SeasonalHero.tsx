'use client';

import React, { useState, useEffect } from 'react';
import { seasonConfig, getSeasonByMonth, SeasonType } from '@/data/seasons';
import Link from 'next/link';
import { ChevronDown, Wand2, CloudSnow, Sun, CloudRain, Wind } from 'lucide-react';

export default function SeasonalHero() {
  const [currentSeason, setCurrentSeason] = useState<SeasonType>('winter');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSeason(getSeasonByMonth());
    setIsLoaded(true);
  }, []);

  const config = seasonConfig[currentSeason];

  // Helper for icons in the selector
  const getIcon = (season: SeasonType) => {
    switch(season) {
      case 'winter': return <CloudSnow size={14} />;
      case 'summer': return <Sun size={14} />;
      case 'spring': return <Wind size={14} />;
      case 'autumn': return <CloudRain size={14} />;
    }
  };

  if (!isLoaded) return <div className="min-h-screen bg-gray-900" />;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-20">
      
      {/* --- 1. DYNAMIC BACKGROUND IMAGE (DEBUG MODE) --- */}
<div className="absolute inset-0 z-0">
  {/* Dark Overlay (Stays on top) */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>
  
  {/* REAL IMAGE TAG (Better for debugging) */}
  <img
    key={currentSeason}
    src={config.heroImage}
    alt={`Current season is ${config.name}`}
    className="w-full h-full object-cover animate-slow-zoom transition-all duration-1000"
    onError={(e) => console.error("IMAGE FAILED TO LOAD:", config.heroImage)}
  />
</div>

      {/* --- 2. SEASON SELECTOR (Keep this so users can switch!) --- */}
      <div className="absolute top-24 right-4 z-30 flex flex-col gap-2 md:flex-row bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
        {(Object.keys(seasonConfig) as SeasonType[]).map((season) => (
          <button
            key={season}
            onClick={() => setCurrentSeason(season)}
            className={`px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              currentSeason === season 
                ? 'bg-white text-[#D97706] shadow-lg scale-105' 
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            {getIcon(season)} {season}
          </button>
        ))}
      </div>

      {/* --- 3. YOUR EXACT CONTENT DESIGN --- */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-32 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6 animate-fade-in-up">
          <span 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: config.accentColor }} // Small dynamic touch: dot color changes with season
          ></span>
          #1 Travel Agency in Kashmir
        </div>

        {/* Headline (Kept exactly as you requested) */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl tracking-tight animate-fade-in-up delay-100">
          Heaven is closer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-yellow-200 to-[#D97706]">
            than you think.
          </span>
        </h1>

        {/* Subtext */}
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20 hidden md:block">
        <ChevronDown size={28} className="opacity-70" />
      </div>

    </section>
  );
}