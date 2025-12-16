'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Star, Car, CheckCircle, ArrowRight, Hotel, ShieldCheck } from 'lucide-react';

export default function BookLocationPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
      <LocationBookingForm />
    </Suspense>
  );
}

function LocationBookingForm() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location') || 'srinagar';
  const locationName = locationParam.charAt(0).toUpperCase() + locationParam.slice(1);

  // --- STATE ---
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  // --- FIX: MOBILE DATE BLOCKER (Local Time) ---
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);
  }, []);
  // ---------------------------------------------

  // Hotel Categories
  const categories = [
    { 
      id: 'standard', 
      name: "Standard (3 Star)", 
      desc: "Clean, comfortable rooms with basic amenities.", 
      price: "₹2,500 - ₹3,500" 
    },
    { 
      id: 'deluxe', 
      name: "Deluxe (4 Star)", 
      desc: "Premium rooms with better views, heating, and breakfast.", 
      price: "₹4,500 - ₹6,500" 
    },
    { 
      id: 'luxury', 
      name: "Luxury (5 Star)", 
      desc: "Top-tier properties with luxury amenities and best views.", 
      price: "₹10,000+" 
    }
  ];

  // --- SUBMIT TO WHATSAPP ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !selectedCar || !formData.name) {
      alert("Please select a Category, a Car, and enter your details.");
      return;
    }

    const categoryName = categories.find(c => c.id === selectedCategory)?.name;
    
    const message = `*🏔️ New Location Booking Request*
---------------------------
*📍 Destination:* ${locationName}
---------------------------
*🏨 Hotel Category:* ${categoryName}
*🚖 Car:* ${selectedCar}
---------------------------
*👤 Name:* ${formData.name}
*📞 Phone:* ${formData.phone}
*📅 Date:* ${formData.date}
---------------------------
Please suggest best hotels in this category.`;

    const phoneNumber = "919149726260"; // REPLACE WITH YOUR NUMBER
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Customize Your Stay</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">
            Plan your trip to <span className="capitalize text-[#D97706]">{locationName}</span>
          </h1>
          <p className="text-gray-500 mt-2">Choose your comfort level, and we will arrange the best hotel for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT COLUMN: SELECTIONS --- */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* STEP 1: CHOOSE HOTEL CATEGORY */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Select Hotel Category
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                  <div 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cursor-pointer border-2 rounded-2xl p-6 transition-all relative ${selectedCategory === cat.id ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-200'}`}
                  >
                    {selectedCategory === cat.id && <div className="absolute top-4 right-4 text-[#D97706]"><CheckCircle size={20} /></div>}
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#1E3A8A] mb-4">
                      <Hotel size={24} />
                    </div>
                    <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{cat.name}</h3>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{cat.desc}</p>
                    <p className="text-xs font-bold text-[#D97706]">Est. {cat.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* STEP 2: CHOOSE TAXI */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Choose Transport
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Sedan', 'Innova (SUV)', 'Tempo Traveller'].map((car) => (
                   <div 
                     key={car}
                     onClick={() => setSelectedCar(car)}
                     className={`cursor-pointer border-2 rounded-2xl p-4 text-center transition-all ${selectedCar === car ? 'border-[#D97706] bg-orange-50' : 'border-gray-100 hover:border-gray-300'}`}
                   >
                      <Car className={`mx-auto mb-2 ${selectedCar === car ? 'text-[#D97706]' : 'text-gray-400'}`} />
                      <p className="font-bold text-[#1E3A8A]">{car}</p>
                   </div>
                ))}
              </div>
            </section>

             {/* STEP 3: DETAILS */}
             <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#D97706]" placeholder="Your Name" />
                 </div>
                 <div>
                    <label className="text-sm font-bold text-gray-700 block mb-2">Phone</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#D97706]" placeholder="+91..." />
                 </div>
                 <div className="md:col-span-2">
                    <label className="text-sm font-bold text-gray-700 block mb-2">Travel Date</label>
                    <input 
                        type="date" 
                        required 
                        min={minDate} // <--- MOBILE FIX HERE
                        value={formData.date} 
                        onChange={(e) => setFormData({...formData, date: e.target.value})} 
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#D97706]" 
                    />
                 </div>
              </div>
            </section>

          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="lg:col-span-1">
             <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-xl sticky top-28">
                <h3 className="text-xl font-serif font-bold mb-6 border-b border-blue-400/30 pb-4">Trip Request</h3>
                
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Destination</span>
                      <span className="font-bold capitalize">{locationName}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Hotel Category</span>
                      <span className="font-bold text-right truncate w-32">
                        {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Not Selected'}
                      </span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Transport</span>
                      <span className="font-bold capitalize">{selectedCar || 'Not Selected'}</span>
                   </div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl mb-6 flex gap-3">
                   <ShieldCheck className="text-[#D97706] shrink-0" size={20} />
                   <p className="text-xs text-blue-100 leading-relaxed">
                      We will select the best rated hotel in this category and confirm the details with you via WhatsApp.
                   </p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D97706] hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Request <ArrowRight size={20} />
                </button>
             </div>
          </div>

        </form>
      </div>
    </main>
  );
}