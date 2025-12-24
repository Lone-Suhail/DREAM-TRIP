'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Users, Star, Car, Check, Info, ArrowRight, MapPin, Sparkles, Heart, Mountain, Snowflake, Palmtree, RefreshCw, CheckCircle } from 'lucide-react';
import { useSeason } from '@/data/SeasonContext';
import { seasonConfig } from '@/data/seasons';

// --- CONFIGURATION ---
const VIBES = [
  { id: 'honeymoon', label: 'Romantic / Honeymoon', icon: <Heart className="w-6 h-6" />, desc: 'Candlelight dinners & Flower decor' },
  { id: 'family', label: 'Family Vacation', icon: <Palmtree className="w-6 h-6" />, desc: 'Comfortable pace & Safe hotels' },
  { id: 'adventure', label: 'Adventure / Trekking', icon: <Mountain className="w-6 h-6" />, desc: 'Offbeat paths & Camping' },
  { id: 'winter', label: 'Snow & Skiing', icon: <Snowflake className="w-6 h-6" />, desc: 'Gulmarg slopes & Snow chains' },
];

export default function SmartBuilder() {
  const { season } = useSeason();
  const seasonData = seasonConfig[season] || seasonConfig['summer'];
  const multiplier = seasonData.priceMultiplier;

  // --- STEPS STATE ---
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // --- INPUTS ---
  const [vibe, setVibe] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(6);
  const [startDate, setStartDate] = useState('');
  const [budgetLevel, setBudgetLevel] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');

  // --- OUTPUTS ---
  const [quote, setQuote] = useState({ min: 0, max: 0, perPerson: 0 });
  const [vehicle, setVehicle] = useState('Sedan');
  const [suggestedRoute, setSuggestedRoute] = useState('');

  // --- DATE MINIMUM ---
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const dt = new Date();
    setMinDate(dt.toISOString().split('T')[0]);
  }, []);

  // --- INTELLIGENT LOGIC ENGINE ---
  const generateProposal = () => {
    setLoading(true);

    // Simulate "Thinking"
    setTimeout(() => {
      // 1. SMART VEHICLE SELECTION
      let selectedVehicle = 'Sedan';
      let vehicleCost = 3000;
      let vehiclesNeeded = 1;

      if (travelers <= 3) {
        selectedVehicle = 'Sedan (Etios/Dzire)';
        vehicleCost = 3000;
      } else if (travelers <= 6) {
        selectedVehicle = 'Innova SUV';
        vehicleCost = 5000;
      } else if (travelers <= 12) {
        selectedVehicle = 'Tempo Traveller';
        vehicleCost = 8000;
      } else {
        selectedVehicle = '2x Tempo Travellers';
        vehicleCost = 16000;
      }
      setVehicle(selectedVehicle);

      // 2. SMART HOTEL RATES (Based on Budget Level)
      const hotelRates = {
        standard: { min: 2500, max: 3500 },
        deluxe: { min: 5000, max: 7000 },
        luxury: { min: 12000, max: 25000 }
      };

      // *AI ADJUSTMENT*: If Honeymoon, force at least Deluxe pricing logic implicitly
      let activeBudget = budgetLevel;
      if (vibe === 'honeymoon' && budgetLevel === 'standard') {
         // We don't change the UI, but we price slightly higher for "Honeymoon Inclusions" (Cake, Decor)
         // or we could auto-upgrade. Let's strictly respect user choice but add a 'Romantic Addon' cost.
      }

      const rooms = Math.ceil(travelers / 2);
      const nights = Math.max(1, days - 1);

      // 3. GENERATE ITINERARY ROUTE
      let route = "Srinagar Local";
      if (days >= 4) route += " ➝ Gulmarg";
      if (days >= 5) route += " ➝ Pahalgam";
      if (days >= 7 && vibe === 'adventure') route += " ➝ Sonamarg ➝ Doodhpathri";
      else if (days >= 7) route += " ➝ Sonamarg";
      
      setSuggestedRoute(route);

      // 4. CALCULATE TOTAL (With Season Multiplier)
      const baseTransport = vehicleCost * days;
      const baseHotelMin = hotelRates[activeBudget].min * rooms * nights;
      const baseHotelMax = hotelRates[activeBudget].max * rooms * nights;

      // Apply Season Multiplier
      const totalMin = Math.round((baseTransport + baseHotelMin) * multiplier);
      const totalMax = Math.round((baseTransport + baseHotelMax) * multiplier);

      setQuote({
        min: totalMin,
        max: totalMax,
        perPerson: Math.round(totalMin / travelers)
      });

      setLoading(false);
      setStep(3);
    }, 2000);
  };

  // --- RENDER HELPERS ---
  const formatPrice = (p: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1E3A8A] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
             <Sparkles size={14} /> AI Trip Builder
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1E3A8A]">
            {step === 3 ? "Your Dream Blueprint" : "Build Your Kashmir Trip"}
          </h1>
          <p className="text-gray-500 mt-2">
            {step === 1 ? "Start by choosing your travel style." : step === 2 ? "Tell us a bit more about the group." : "Here is what we recommend based on your inputs."}
          </p>
        </div>

        {/* --- STEP 1: VIBE SELECTION --- */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
             {VIBES.map((v) => (
               <button 
                 key={v.id}
                 onClick={() => { setVibe(v.id); setStep(2); }}
                 className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#D97706] hover:shadow-xl transition-all group text-left relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-[#D97706] scale-150">
                    {v.icon}
                 </div>
                 <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-orange-50 text-[#D97706] rounded-full group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                       {v.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{v.label}</h3>
                 </div>
                 <p className="text-sm text-gray-500 pl-[4.5rem]">{v.desc}</p>
               </button>
             ))}
          </div>
        )}

        {/* --- STEP 2: DETAILS --- */}
        {step === 2 && !loading && (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-in">
             <button onClick={() => setStep(1)} className="text-sm text-gray-400 mb-6 hover:text-[#1E3A8A]">← Back to Vibes</button>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Travelers */}
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Travelers</label>
                   <div className="flex items-center gap-4">
                      <input 
                        type="range" min="2" max="20" 
                        value={travelers} onChange={(e) => setTravelers(parseInt(e.target.value))}
                        className="w-full accent-[#D97706]"
                      />
                      <span className="font-bold text-[#1E3A8A] text-xl min-w-[3ch]">{travelers}</span>
                   </div>
                </div>
                {/* Duration */}
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Duration (Days)</label>
                   <div className="flex items-center gap-4">
                      <input 
                        type="range" min="3" max="14" 
                        value={days} onChange={(e) => setDays(parseInt(e.target.value))}
                        className="w-full accent-[#D97706]"
                      />
                      <span className="font-bold text-[#1E3A8A] text-xl min-w-[3ch]">{days}</span>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Date */}
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Start Date</label>
                   <input 
                     type="date" min={minDate} value={startDate} onChange={(e) => setStartDate(e.target.value)}
                     className="w-full p-3 border rounded-xl font-bold text-gray-700 focus:border-[#D97706] outline-none"
                   />
                </div>
                {/* Budget */}
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Hotel Preference</label>
                   <div className="flex bg-gray-100 p-1 rounded-xl">
                      {['standard', 'deluxe', 'luxury'].map((cat) => (
                         <button
                           key={cat}
                           onClick={() => setBudgetLevel(cat as any)}
                           className={`flex-1 py-2 text-sm font-bold rounded-lg capitalize transition-all ${budgetLevel === cat ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}
                         >
                           {cat}
                         </button>
                      ))}
                   </div>
                </div>
             </div>

             <button 
               onClick={generateProposal}
               disabled={!startDate}
               className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2
               ${startDate ? 'bg-[#1E3A8A] hover:bg-[#D97706]' : 'bg-gray-300 cursor-not-allowed'}`}
             >
                {startDate ? 'Generate My Plan' : 'Select a Date to Continue'} <ArrowRight size={20} />
             </button>
          </div>
        )}

        {/* --- LOADING STATE --- */}
        {loading && (
           <div className="text-center py-20 animate-pulse">
              <RefreshCw className="animate-spin text-[#D97706] mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">Building your {vibe} Trip...</h3>
              <p className="text-gray-500">Checking {season} rates for {travelers} people...</p>
           </div>
        )}

        {/* --- STEP 3: THE PROPOSAL --- */}
        {step === 3 && (
           <div className="animate-scale-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 
                 {/* Left: The Itinerary Card */}
                 <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-[#1E3A8A] p-6 text-white flex justify-between items-center">
                       <div>
                          <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Recommended For You</p>
                          <h2 className="text-2xl font-serif font-bold">The {vibe === 'honeymoon' ? 'Romantic' : vibe === 'adventure' ? 'Explorer' : 'Classic'} Kashmir Route</h2>
                       </div>
                       <div className="text-right">
                          <p className="text-3xl font-bold">{days} Days</p>
                          <p className="text-blue-200 text-sm">{season} Season</p>
                       </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                       {/* Smart Route Display */}
                       <div>
                          <h4 className="font-bold text-gray-500 text-sm uppercase mb-3 flex items-center gap-2">
                             <MapPin size={16} /> Suggested Route
                          </h4>
                          <div className="flex flex-wrap gap-2">
                             {suggestedRoute.split('➝').map((stop, i) => (
                                <span key={i} className="bg-blue-50 text-[#1E3A8A] px-3 py-1 rounded-lg font-bold text-sm flex items-center">
                                   {stop.trim()} {i < suggestedRoute.split('➝').length - 1 && <ArrowRight size={14} className="ml-2 text-gray-400" />}
                                </span>
                             ))}
                          </div>
                       </div>

                       {/* Smart Vehicle Logic */}
                       <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                          <div className="p-2 bg-white rounded-full text-[#D97706] shadow-sm"><Car size={20} /></div>
                          <div>
                             <h4 className="font-bold text-[#1E3A8A]">Transport Selected: {vehicle}</h4>
                             <p className="text-sm text-gray-600">
                                Based on your group size of {travelers}, we selected {vehicle} for maximum comfort on mountain roads.
                             </p>
                          </div>
                       </div>

                       {/* Inclusions based on Vibe */}
                       <div>
                          <h4 className="font-bold text-gray-500 text-sm uppercase mb-3">AI Selected Inclusions</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> Breakfast & Dinner</div>
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> Tolls, Parking & Driver Allowances</div>
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> 1 Hour Shikara Ride</div>
                             {vibe === 'honeymoon' && <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-[#D97706]" /> Honeymoon Cake & Decor</div>}
                             {vibe === 'adventure' && <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-[#D97706]" /> Day Trek Guide at Pahalgam</div>}
                             {vibe === 'winter' && <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-[#D97706]" /> Snow Chains for Vehicle</div>}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: The Quote Card */}
                 <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#D97706] sticky top-28">
                       <p className="text-gray-500 font-bold text-sm uppercase mb-1">Estimated Trip Cost</p>
                       <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">{formatPrice(quote.min)} - {formatPrice(quote.max)}</h3>
                       <p className="text-sm text-green-600 font-bold bg-green-50 inline-block px-2 py-1 rounded-md mb-6">
                          ~ {formatPrice(quote.perPerson)} per person
                       </p>

                       <div className="space-y-3 mb-8">
                          <Link 
                            href={`/book?package=Custom ${vibe} Trip&price=${quote.min}&date=${startDate}&pax=${travelers}`}
                            className="block w-full"
                          >
                             <button className="w-full py-4 bg-[#1E3A8A] text-white font-bold rounded-xl hover:bg-blue-900 shadow-lg transition-all flex items-center justify-center gap-2">
                                Book This Trip <ArrowRight size={20} />
                             </button>
                          </Link>
                          
                          <button 
                            onClick={() => setStep(1)}
                            className="w-full py-3 text-gray-500 font-bold hover:bg-gray-50 rounded-xl transition-all"
                          >
                             Start Over
                          </button>
                       </div>

                       <div className="text-[10px] text-gray-400 text-center leading-relaxed">
                          *Final price may vary slightly based on exact hotel availability at the time of booking.
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        )}

      </div>
    </main>
  );
}