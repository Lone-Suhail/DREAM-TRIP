'use client';

import React, { useState } from 'react';
import { Car, MapPin, Phone, CheckCircle, Shield, User, ArrowRight } from 'lucide-react';

export default function TaxiPage() {
  const [selectedCar, setSelectedCar] = useState('sedan');

  const fleet = [
    {
      id: 'sedan',
      name: 'Swift Dzire / Etios',
      type: 'Sedan',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop', // Generic Sedan
      price: '₹2,500',
      desc: 'Perfect for couples or small families (max 3 pax). Comfortable and budget-friendly.',
      features: ['AC', 'Music System', 'Trunk Space (2 bags)', 'Phone Charger']
    },
    {
      id: 'innova',
      name: 'Toyota Innova Crysta',
      type: 'Prime SUV',
      image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80',
      price: '₹3,500',
      desc: 'The king of Kashmir roads. Unmatched comfort, power, and safety for families (max 6 pax).',
      features: ['Captain Seats', 'Dual AC', 'Large Trunk', 'Reclining Seats']
    },
    {
      id: 'tempo',
      name: 'Tempo Traveller',
      type: 'Group Van',
      image: 'https://www.forceu.in/images/traveller-mono-bus/force-traveller-mono-bus-side-view.jpg',
      price: '₹5,500',
      desc: 'Ideal for large groups. High roof, spacious aisle, and panoramic windows.',
      features: ['12 to 17 Seater', 'Pushback Seats', 'Separate Luggage Carrier', 'Mic System']
    }
  ];

  return (
    // FIX 1: Removed 'pt-28'. Added 'bg-white' to ensure no gaps.
    <main className="min-h-screen bg-white font-sans">
      
      {/* --- HERO HEADER (Fixed to touch top) --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
           <img 
             src="/sonamarg.jpg" // Using one of your existing images
             alt="Kashmir Roads" 
             className="w-full h-full object-cover"
           />
           {/* Dark Overlay so text is visible */}
           <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
             Premium Taxi Services
           </h1>
           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
             Clean cars. Polite drivers. Fixed rates. Travel across Kashmir with safety and comfort.
           </p>
        </div>
      </section>

      {/* --- FLEET SECTION --- */}
      <section className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="text-center mb-10">
            <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm">Our Fleet</span>
            <h2 className="text-3xl font-serif font-bold text-[#1E3A8A] mt-2">Choose Your Ride</h2>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {fleet.map((car) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                  selectedCar === car.id 
                    ? 'bg-[#1E3A8A] text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Car size={18} /> {car.type}
              </button>
            ))}
          </div>

          {/* CAR CARD DISPLAY */}
          {fleet.map((car) => car.id === selectedCar && (
            <div key={car.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
               
               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-[#1E3A8A] font-bold">
                     Starting @ {car.price} / day
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-[#1E3A8A]">{car.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{car.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {car.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                           <CheckCircle size={18} className="text-[#D97706]" /> {feat}
                        </div>
                     ))}
                  </div>

                  <div className="pt-4 flex gap-4">
                     <a 
                       href={`https://wa.me/919999999999?text=I want to book ${car.name}`}
                       target="_blank"
                       className="flex-1 bg-[#D97706] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                     >
                       Book via WhatsApp <ArrowRight size={20} />
                     </a>
                  </div>
               </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="bg-gray-50 py-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#1E3A8A] mx-auto mb-4">
                     <Shield size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Safe & Secure</h3>
                  <p className="text-gray-500">Verified drivers with strict background checks and clean records.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#D97706] mx-auto mb-4">
                     <User size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Local Experts</h3>
                  <p className="text-gray-500">Our drivers act as guides, showing you hidden gems along the way.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                     <Phone size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">24/7 Support</h3>
                  <p className="text-gray-500">Stuck somewhere? Our support team is just one call away.</p>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}