'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Users, Star, Car, Check, Info, ArrowRight, AlertCircle, MapPin, HelpCircle } from 'lucide-react';

export default function PlanMyTrip() {
  // --- STATE ---
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(6);
  const [hotelCategory, setHotelCategory] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'tempo'>('sedan');
  const [pickupLocation, setPickupLocation] = useState<'srinagar_air' | 'srinagar_rail' | 'jammu_rail'>('srinagar_air');
  
  // Range State
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [minPerPerson, setMinPerPerson] = useState(0);
  const [maxPerPerson, setMaxPerPerson] = useState(0);

  // --- PRICING ENGINE (HIDDEN) ---
  useEffect(() => {
    
    // 1. HOTEL COST
    const numberOfRooms = Math.ceil(travelers / 2);
    const nights = days - 1;

    const hotelRates = {
      standard: 2000, 
      deluxe: 4500,   
      luxury: 12000   
    };

    const baseHotelCost = numberOfRooms * hotelRates[hotelCategory] * nights;

    // 2. TRANSPORT COST
    const transportRates = {
      sedan: 3500,
      suv: 5000, 
      tempo: 8000
    };

    let vehiclesNeeded = 1;
    if (vehicleType === 'sedan' && travelers > 4) vehiclesNeeded = Math.ceil(travelers / 4);
    if (vehicleType === 'suv' && travelers > 7) vehiclesNeeded = Math.ceil(travelers / 7);
    if (vehicleType === 'tempo' && travelers > 14) vehiclesNeeded = Math.ceil(travelers / 14);

    const baseTransportCost = (transportRates[vehicleType] * vehiclesNeeded) * days;

    // 3. PICKUP SURCHARGE
    let pickupSurcharge = 0;
    if (pickupLocation === 'jammu_rail') {
      pickupSurcharge = 8000 * vehiclesNeeded; 
    }

    // 4. SERVICE FEES
    const baseBuffer = 1200 * travelers; 

    // CALCULATE BASE TOTAL
    const calculatedTotal = baseHotelCost + baseTransportCost + pickupSurcharge + baseBuffer;
    
    // --- CREATE THE "SAFE RANGE" ---
    // Min price = Calculated Price
    // Max price = Calculated Price + 20% (For Season/Availability Buffer)
    const minTotal = Math.round(calculatedTotal);
    const maxTotal = Math.round(calculatedTotal * 1.20); // 20% Buffer

    setMinCost(minTotal);
    setMaxCost(maxTotal);

    setMinPerPerson(Math.round(minTotal / travelers));
    setMaxPerPerson(Math.round(maxTotal / travelers));

  }, [travelers, days, hotelCategory, vehicleType, pickupLocation]);

  const formatPrice = (price: number) => {
    // Format to "25k" style to look cleaner, or standard currency
    if (price > 1000) {
      return '₹' + (price / 1000).toFixed(1) + 'k';
    }
    return '₹' + price;
  };

  const formatFullPrice = (price: number) => {
     return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Custom Trip Builder</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Build Your Own Package</h1>
          <p className="text-gray-500 mt-2">Customize your trip and get an estimated budget range instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* --- LEFT COLUMN: CONFIGURATOR --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. TRAVELERS & DURATION */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <Users size={20} className="text-[#D97706]" /> Who is traveling?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Travelers Slider */}
                <div>
                  <label className="flex justify-between font-bold text-gray-700 mb-4">
                    <span>Travelers</span>
                    <span className="text-[#D97706] text-xl">{travelers} Pax</span>
                  </label>
                  <input 
                    type="range" min="2" max="20" step="1" 
                    value={travelers} 
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>2 (Couple)</span>
                    <span>20 (Group)</span>
                  </div>
                </div>

                {/* Days Slider */}
                <div>
                  <label className="flex justify-between font-bold text-gray-700 mb-4">
                    <span>Duration</span>
                    <span className="text-[#D97706] text-xl">{days} Days / {days - 1} Nights</span>
                  </label>
                  <input 
                    type="range" min="3" max="15" step="1" 
                    value={days} 
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>3 Days</span>
                    <span>15 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PICKUP LOCATION */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-[#D97706]" /> Pickup Point
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setPickupLocation('srinagar_air')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${pickupLocation === 'srinagar_air' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {pickupLocation === 'srinagar_air' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] text-sm">Srinagar Airport</div>
                </div>
                <div 
                  onClick={() => setPickupLocation('srinagar_rail')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${pickupLocation === 'srinagar_rail' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {pickupLocation === 'srinagar_rail' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] text-sm">Srinagar Railway</div>
                </div>
                <div 
                  onClick={() => setPickupLocation('jammu_rail')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${pickupLocation === 'jammu_rail' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {pickupLocation === 'jammu_rail' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] text-sm">Jammu Railway</div>
                  <div className="text-[10px] text-gray-500 mt-1">Extra Charges Apply</div>
                </div>
              </div>
            </div>

            {/* 3. HOTEL CATEGORY */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <Star size={20} className="text-[#D97706]" /> Choose Hotel Category
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setHotelCategory('standard')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${hotelCategory === 'standard' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {hotelCategory === 'standard' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">Standard</div>
                  <div className="text-xs text-gray-500 mb-3">Comfortable & clean 3-star.</div>
                </div>
                <div 
                  onClick={() => setHotelCategory('deluxe')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${hotelCategory === 'deluxe' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {hotelCategory === 'deluxe' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">Deluxe (4 Star)</div>
                  <div className="text-xs text-gray-500 mb-3">Premium rooms & views.</div>
                </div>
                <div 
                  onClick={() => setHotelCategory('luxury')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${hotelCategory === 'luxury' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {hotelCategory === 'luxury' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">Luxury (5 Star)</div>
                  <div className="text-xs text-gray-500 mb-3">Top-tier properties.</div>
                </div>
              </div>
            </div>

            {/* 4. VEHICLE TYPE */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <Car size={20} className="text-[#D97706]" /> Choose Transport
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setVehicleType('sedan')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${vehicleType === 'sedan' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {vehicleType === 'sedan' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">Sedan</div>
                  <div className="text-xs text-gray-500">Etios/Dzire (Max 4)</div>
                </div>
                <div 
                  onClick={() => setVehicleType('suv')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${vehicleType === 'suv' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {vehicleType === 'suv' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">SUV (Innova)</div>
                  <div className="text-xs text-gray-500">Max 6-7 Pax</div>
                </div>
                <div 
                  onClick={() => setVehicleType('tempo')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 transition-all relative ${vehicleType === 'tempo' ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  {vehicleType === 'tempo' && <div className="absolute top-2 right-2 text-[#D97706]"><Check size={18} /></div>}
                  <div className="font-bold text-[#1E3A8A] mb-1">Tempo Traveller</div>
                  <div className="text-xs text-gray-500">Max 12-16 Pax</div>
                </div>
              </div>
              
               {/* WARNING LOGIC */}
               {((vehicleType === 'sedan' && travelers > 4) || (vehicleType === 'suv' && travelers > 7)) && (
                <div className="mt-4 p-4 bg-orange-50 text-[#D97706] text-sm rounded-xl flex items-center gap-3 border border-orange-100">
                  <AlertCircle size={20} /> 
                  <span>
                    For {travelers} people, we will use 
                    <strong> {Math.ceil(travelers / (vehicleType === 'sedan' ? 4 : 7))} {vehicleType === 'sedan' ? 'Sedans' : 'SUVs'}</strong>.
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* --- RIGHT COLUMN: STICKY PRICE CARD (SAFE RANGE) --- */}
          <div className="lg:col-span-1">
            <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 shadow-xl sticky top-28">
              <h3 className="text-2xl font-serif font-bold mb-6">Trip Estimate</h3>
              
              <div className="space-y-4 mb-8 text-blue-100 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Travelers</span>
                  <span className="font-bold text-white">{travelers} People</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Pickup</span>
                  <span className="font-bold text-white uppercase">{pickupLocation.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Transport</span>
                  <span className="font-bold text-white capitalize">{vehicleType}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/10">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase tracking-wider text-blue-300">Estimated Range</span>
                    <div className="group relative">
                        <HelpCircle size={14} className="text-blue-300 cursor-help" />
                        <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-black text-xs text-white rounded shadow-lg">
                            Prices vary based on season (April-June is peak) and specific hotel availability.
                        </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">
                    {formatFullPrice(minCost)} - {formatFullPrice(maxCost)}
                  </span>
                </div>
                
                <div className="h-px bg-white/20 my-2"></div>
                
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-wider text-[#D97706] font-bold">Per Person</span>
                  <span className="text-2xl font-bold text-[#D97706]">
                     {formatPrice(minPerPerson)} - {formatPrice(maxPerPerson)}
                  </span>
                </div>
              </div>

              <div className="bg-blue-900/50 p-3 rounded-lg flex gap-2 items-start mb-6 border border-blue-400/30">
                <Info size={16} className="text-blue-200 shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-100 leading-relaxed">
                   <strong>Subject to availability.</strong> This is an approximate budget range. Final quote will be shared after checking hotel dates.
                </p>
              </div>

              <Link href={`/book?travelers=${travelers}&budget=${hotelCategory}&message=Plan: ${days} days, ${hotelCategory} hotel, Pickup: ${pickupLocation}, Vehicle: ${vehicleType}. Budget Range Seen: ${formatFullPrice(minCost)}-${formatFullPrice(maxCost)}`}>
                <button className="w-full bg-[#D97706] hover:bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  Check Exact Price <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}