'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Car, Info, ArrowRight, MapPin, Sparkles, Heart, Mountain, Snowflake, Palmtree, RefreshCw, CheckCircle, CalendarDays, AlertTriangle, AlertCircle, Train, Plane } from 'lucide-react';

const VIBES = [
  { id: 'honeymoon', label: 'Romantic / Honeymoon', icon: <Heart className="w-6 h-6" />, desc: 'Candlelight dinners & Flower decor' },
  { id: 'family', label: 'Family Vacation', icon: <Palmtree className="w-6 h-6" />, desc: 'Comfortable pace & Safe hotels' },
  { id: 'adventure', label: 'Adventure / Trekking', icon: <Mountain className="w-6 h-6" />, desc: 'Offbeat paths & Camping' },
  { id: 'winter', label: 'Snow & Skiing', icon: <Snowflake className="w-6 h-6" />, desc: 'Gulmarg slopes & Snow chains' },
];

export default function SmartBuilder() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [vibe, setVibe] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(6);
  const [startDate, setStartDate] = useState('');
  const [budgetLevel, setBudgetLevel] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');

  // New Location State
  const [pickup, setPickup] = useState('srinagar');
  const [drop, setDrop] = useState('srinagar');

  // Outputs
  const [quote, setQuote] = useState({ min: 0, max: 0, perPerson: 0 });
  const [vehicle, setVehicle] = useState('Sedan');
  const [suggestedRoute, setSuggestedRoute] = useState<string[]>([]);
  const [detectedSeason, setDetectedSeason] = useState('');
  const [locationSurcharge, setLocationSurcharge] = useState(0); // For Jammu
  
  // Smart Warnings
  const [showUnionWarning, setShowUnionWarning] = useState(false);
  const [showChainWarning, setShowChainWarning] = useState(false);

  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const dt = new Date();
    setMinDate(dt.toISOString().split('T')[0]);
  }, []);

  const generateProposal = () => {
    if (!startDate) return;
    setLoading(true);

    setTimeout(() => {
      // 1. REALISTIC SEASON LOGIC
      const dateObj = new Date(startDate);
      const month = dateObj.getMonth(); 
      
      let hotelMultiplier = 1.0;
      let transportMultiplier = 1.0;
      let seasonName = 'Standard Season';

      // PEAK SUMMER
      if (month >= 3 && month <= 5) { 
         hotelMultiplier = 1.8; 
         transportMultiplier = 1.3;
         seasonName = 'Peak Summer (High Demand)';
      } 
      // PEAK WINTER
      else if (month === 11 || month === 0) { 
         hotelMultiplier = 1.5; 
         transportMultiplier = 1.3;
         seasonName = 'Peak Winter (New Year)';
      }
      // SHOULDER
      else if (month === 8 || month === 9 || month === 1 || month === 2) {
         hotelMultiplier = 1.2;
         transportMultiplier = 1.1;
         seasonName = 'Shoulder Season';
      }
      // OFF PEAK
      else {
         hotelMultiplier = 0.9;
         transportMultiplier = 1.0;
         seasonName = 'Off-Peak Season';
      }
      setDetectedSeason(seasonName);

      // 2. VEHICLE SELECTION & JAMMU SURCHARGE
      let selectedVehicle = 'Sedan';
      let dailyTransportRate = 3000;
      let jammuOneWayRate = 4000; // Base rate for sedan
      
      if (travelers <= 3) {
        selectedVehicle = 'Sedan (Etios/Dzire)';
        dailyTransportRate = 3200;
        jammuOneWayRate = 4000;
      } else if (travelers <= 6) {
        selectedVehicle = 'Innova Crysta';
        dailyTransportRate = 6000;
        jammuOneWayRate = 6000;
      } else if (travelers <= 12) {
        selectedVehicle = 'Tempo Traveller (12S)';
        dailyTransportRate = 9000;
        jammuOneWayRate = 9000;
      } else {
        selectedVehicle = 'Tempo Traveller (17S)';
        dailyTransportRate = 12000;
        jammuOneWayRate = 12000;
      }
      setVehicle(selectedVehicle);

      // CALCULATE PICKUP/DROP EXTRA COST
      let extraTransportCost = 0;
      if (pickup === 'jammu') extraTransportCost += jammuOneWayRate;
      if (drop === 'jammu') extraTransportCost += jammuOneWayRate;
      setLocationSurcharge(extraTransportCost);

      // 3. ROUTE GENERATOR
      let route = [];
      
      // If Jammu Pickup, Start there
      if (pickup === 'jammu') route.push("Jammu", "Patnitop");
      
      route.push("Srinagar"); // Hub

      let needsUnion = false;
      let needsChains = false;

      if (days >= 4) {
         route.push("Gulmarg");
         if (seasonName.includes('Winter') || seasonName.includes('Snow')) needsChains = true;
      }
      if (days >= 5) {
         route.push("Pahalgam");
         needsUnion = true;
      }
      if (days >= 6 || (days >= 5 && vibe === 'adventure')) {
         route.push("Sonamarg");
         needsUnion = true;
      }

      // If Jammu Drop, end there
      if (drop === 'jammu') route.push("Jammu Drop");

      setSuggestedRoute(route);
      setShowUnionWarning(needsUnion);
      setShowChainWarning(needsChains);

      // 4. BASE RATES & MATH
      const hotelRates = {
        standard: { min: 3000, max: 4000 },
        deluxe: { min: 5500, max: 7500 },
        luxury: { min: 15000, max: 25000 }
      };

      const rooms = Math.ceil(travelers / 2);
      const nights = Math.max(1, days - 1);

      // Transport Logic: (Daily Rate * Days * SeasonMultiplier) + (Jammu Surcharges)
      const totalTransport = (dailyTransportRate * days * transportMultiplier) + extraTransportCost;
      
      const totalHotelMin = hotelRates[budgetLevel].min * rooms * nights * hotelMultiplier;
      const totalHotelMax = hotelRates[budgetLevel].max * rooms * nights * hotelMultiplier;

      const totalMin = Math.round(totalTransport + totalHotelMin);
      const totalMax = Math.round(totalTransport + totalHotelMax);

      setQuote({
        min: totalMin,
        max: totalMax,
        perPerson: Math.round(totalMin / travelers)
      });

      setLoading(false);
      setStep(3);
    }, 2000);
  };

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
            {step === 3 ? "Your Custom Itinerary" : "Build Your Kashmir Trip"}
          </h1>
          <p className="text-gray-500 mt-2">
            {step === 1 ? "Start by choosing your travel style." : step === 2 ? "Tell us a bit more about the group." : "Real-time quote based on your dates."}
          </p>
        </div>

        {/* --- STEP 1: VIBE --- */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
             {VIBES.map((v) => (
               <button 
                 key={v.id}
                 onClick={() => { setVibe(v.id); setStep(2); }}
                 className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#D97706] hover:shadow-xl transition-all group text-left relative overflow-hidden"
               >
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
             
             {/* ROW 1: People & Days */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Travelers</label>
                   <div className="flex items-center gap-4">
                      <input type="range" min="2" max="20" value={travelers} onChange={(e) => setTravelers(parseInt(e.target.value))} className="w-full accent-[#D97706]" />
                      <span className="font-bold text-[#1E3A8A] text-xl min-w-[3ch]">{travelers}</span>
                   </div>
                </div>
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Duration (Days)</label>
                   <div className="flex items-center gap-4">
                      <input type="range" min="3" max="14" value={days} onChange={(e) => setDays(parseInt(e.target.value))} className="w-full accent-[#D97706]" />
                      <span className="font-bold text-[#1E3A8A] text-xl min-w-[3ch]">{days}</span>
                   </div>
                </div>
             </div>

             {/* ROW 2: Locations (NEW) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Pickup Location</label>
                   <div className="flex bg-gray-100 p-1 rounded-xl">
                      <button onClick={() => setPickup('srinagar')} className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${pickup === 'srinagar' ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}>
                         <Plane size={14} /> Srinagar
                      </button>
                      <button onClick={() => setPickup('jammu')} className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${pickup === 'jammu' ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}>
                         <Train size={14} /> Jammu (+Cost)
                      </button>
                   </div>
                </div>
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Drop Location</label>
                   <div className="flex bg-gray-100 p-1 rounded-xl">
                      <button onClick={() => setDrop('srinagar')} className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${drop === 'srinagar' ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}>
                         <Plane size={14} /> Srinagar
                      </button>
                      <button onClick={() => setDrop('jammu')} className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${drop === 'jammu' ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}>
                         <Train size={14} /> Jammu (+Cost)
                      </button>
                   </div>
                </div>
             </div>

             {/* ROW 3: Date & Budget */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Start Date</label>
                   <input type="date" min={minDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-3 border rounded-xl font-bold text-gray-700 focus:border-[#D97706] outline-none" />
                </div>
                <div>
                   <label className="block font-bold text-gray-700 mb-2">Hotel Preference</label>
                   <div className="flex bg-gray-100 p-1 rounded-xl">
                      {['standard', 'deluxe', 'luxury'].map((cat) => (
                         <button key={cat} onClick={() => setBudgetLevel(cat as any)} className={`flex-1 py-2 text-sm font-bold rounded-lg capitalize transition-all ${budgetLevel === cat ? 'bg-white text-[#D97706] shadow-sm' : 'text-gray-400'}`}>{cat}</button>
                      ))}
                   </div>
                </div>
             </div>

             <button onClick={generateProposal} disabled={!startDate} className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2 ${startDate ? 'bg-[#1E3A8A] hover:bg-[#D97706]' : 'bg-gray-300 cursor-not-allowed'}`}>
                {startDate ? 'Generate My Plan' : 'Select a Date to Continue'} <ArrowRight size={20} />
             </button>
          </div>
        )}

        {loading && (
           <div className="text-center py-20 animate-pulse">
              <RefreshCw className="animate-spin text-[#D97706] mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">Calculating Route...</h3>
              <p className="text-gray-500">Checking Jammu highway status and vehicle rates...</p>
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
                          <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Proposal For {travelers} Guests</p>
                          <h2 className="text-2xl font-serif font-bold">The {vibe === 'honeymoon' ? 'Romantic' : 'Classic'} Kashmir Route</h2>
                       </div>
                       <div className="text-right">
                          <p className="text-3xl font-bold">{days} Days</p>
                          <p className="text-blue-200 text-xs font-bold uppercase tracking-wide">{detectedSeason}</p>
                       </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                       
                       {/* IMPORTANT ALERTS */}
                       {(showUnionWarning || showChainWarning) && (
                          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                             <h4 className="text-orange-800 font-bold flex items-center gap-2 mb-2 text-sm">
                                <AlertTriangle size={16} /> Important Exclusions
                             </h4>
                             <ul className="text-xs text-orange-700 space-y-1 list-disc list-inside">
                                {showUnionWarning && (
                                   <li><strong>Union Cabs:</strong> For Pahalgam (Aru/Betaab) & Sonamarg (Thajiwas), you must hire local Union cabs directly at the stand.</li>
                                )}
                                {showChainWarning && (
                                   <li><strong>Snow Chains:</strong> If it snows in Gulmarg, only chained jeeps are allowed. You must hire these locally.</li>
                                )}
                             </ul>
                          </div>
                       )}

                       {/* Route */}
                       <div>
                          <h4 className="font-bold text-gray-500 text-sm uppercase mb-3 flex items-center gap-2">
                             <MapPin size={16} /> Optimized Route
                          </h4>
                          <div className="flex flex-wrap gap-2">
                             {suggestedRoute.map((stop, i) => (
                                <span key={i} className="bg-blue-50 text-[#1E3A8A] px-3 py-1 rounded-lg font-bold text-sm flex items-center">
                                   {stop} {i < suggestedRoute.length - 1 && <ArrowRight size={14} className="ml-2 text-gray-400" />}
                                </span>
                             ))}
                          </div>
                       </div>

                       {/* Vehicle */}
                       <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="p-2 bg-white rounded-full text-[#1E3A8A] shadow-sm"><Car size={20} /></div>
                          <div>
                             <h4 className="font-bold text-[#1E3A8A]">Transport: {vehicle}</h4>
                             <p className="text-sm text-gray-600 mb-1">
                                Includes fuel, driver, toll, and parking.
                             </p>
                             {locationSurcharge > 0 && (
                                <p className="text-xs text-[#D97706] font-bold mt-1">
                                   * Includes Jammu Pickup/Drop Surcharges
                                </p>
                             )}
                          </div>
                       </div>

                       {/* Inclusions */}
                       <div>
                          <h4 className="font-bold text-gray-500 text-sm uppercase mb-3">Included in Package</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> Accommodation ({budgetLevel})</div>
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> Breakfast & Dinner</div>
                             <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-green-500" /> 1 Hour Shikara Ride</div>
                             {vibe === 'honeymoon' && <div className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={16} className="text-[#D97706]" /> Candlelight Dinner</div>}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: The Quote Card */}
                 <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#D97706] sticky top-28">
                       <div className="flex items-center gap-2 mb-2">
                          <CalendarDays size={16} className="text-[#D97706]" />
                          <p className="text-xs font-bold text-gray-500 uppercase">{new Date(startDate).toDateString()}</p>
                       </div>
                       
                       <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Estimated Cost</p>
                       <h3 className="text-3xl font-bold text-[#1E3A8A] mb-2">{formatPrice(quote.min)} - {formatPrice(quote.max)}</h3>
                       <p className="text-sm text-green-600 font-bold bg-green-50 inline-block px-2 py-1 rounded-md mb-6">
                          ~ {formatPrice(quote.perPerson)} per person
                       </p>

                       <div className="space-y-3 mb-8">
                          <Link 
                            href={`/book?package=Custom ${vibe} Trip&price=${quote.min}&date=${startDate}&pax=${travelers}&pickup=${pickup}&drop=${drop}`}
                            className="block w-full"
                          >
                             <button className="w-full py-4 bg-[#1E3A8A] text-white font-bold rounded-xl hover:bg-blue-900 shadow-lg transition-all flex items-center justify-center gap-2">
                                Book This Trip <ArrowRight size={20} />
                             </button>
                          </Link>
                          
                          <button onClick={() => setStep(1)} className="w-full py-3 text-gray-500 font-bold hover:bg-gray-50 rounded-xl transition-all">Start Over</button>
                       </div>

                       <div className="text-[10px] text-gray-400 text-center leading-relaxed">
                          <AlertCircle size={12} className="inline mr-1" />
                          Rate applied for <strong>{detectedSeason}</strong>.<br/>
                          Includes Jammu surcharges (if selected). Excludes Union Cabs.
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