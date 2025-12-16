'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Car, MapPin, Calendar, Clock, Phone, User, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function BookTaxiPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
      <TaxiBookingForm />
    </Suspense>
  );
}

function TaxiBookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // --- 1. STATE MANAGEMENT ---
  const initialVehicle = searchParams.get('vehicle') || 'sedan';
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [tripType, setTripType] = useState('tour'); // 'tour' or 'transfer'

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

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    startDate: '',
    durationOrTime: '',
    pickupLocation: '',
    dropLocation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 2. SUBMIT LOGIC (WHATSAPP) ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate simple fields
    if(!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number.");
      setIsSubmitting(false);
      return;
    }

    // Show Success Modal first
    setShowSuccess(true);

    // Delay redirect slightly so they see the modal
    setTimeout(() => {
      // Construct the WhatsApp Message
      const message = `*🚖 New Taxi Booking Request*
---------------------------
*Vehicle:* ${vehicle.toUpperCase()}
*Type:* ${tripType === 'tour' ? 'Full Trip' : 'Airport Transfer'}
---------------------------
*👤 Name:* ${formData.name}
*📞 Phone:* ${formData.phone}
*📅 Date:* ${formData.startDate}
*⏳ ${tripType === 'tour' ? 'Duration' : 'Time'}:* ${formData.durationOrTime}
*📍 Pickup:* ${formData.pickupLocation}
${tripType === 'transfer' ? `*📍 Drop:* ${formData.dropLocation}` : ''}
---------------------------
Please confirm availability and price.`;

      // Open WhatsApp
      const phoneNumber = "919149726260"; // <--- REPLACE WITH YOUR NUMBER
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(url, '_blank');
      setIsSubmitting(false);
      setShowSuccess(false); // Close modal after redirect
    }, 2000); // 2 second delay
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans relative">
      
      {/* --- SUCCESS MODAL --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm text-center shadow-2xl animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Request Received!</h3>
            <p className="text-gray-500 text-sm mb-6">We are redirecting you to WhatsApp to finalize your booking with our manager.</p>
            <div className="flex items-center justify-center gap-2 text-[#D97706] font-bold">
              <Loader2 size={20} className="animate-spin" /> Redirecting...
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* HEADER */}
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 text-[#1E3A8A]">
              <Car size={24} />
           </div>
           <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A]">Secure Your Ride</h1>
           <p className="text-gray-500 mt-2">Reserve your {vehicle === 'tempo' ? 'Tempo Traveller' : vehicle === 'suv' ? 'Innova' : 'Sedan'} now. No advance payment required.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT: BOOKING FORM --- */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
             <div className="bg-gray-50 border-b border-gray-100 p-6 flex gap-4 overflow-x-auto">
                <button 
                  onClick={() => setTripType('tour')}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold whitespace-nowrap transition-all ${tripType === 'tour' ? 'bg-[#1E3A8A] text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                >
                  Full Trip (Multi-Day)
                </button>
                <button 
                  onClick={() => setTripType('transfer')}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold whitespace-nowrap transition-all ${tripType === 'transfer' ? 'bg-[#1E3A8A] text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                >
                  Airport Transfer Only
                </button>
             </div>

             <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Vehicle Selection */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Vehicle Type</label>
                    <div className="grid grid-cols-3 gap-3">
                        <label className={`border rounded-xl p-3 cursor-pointer text-center hover:border-[#D97706] transition-all ${vehicle === 'sedan' ? 'border-[#D97706] bg-orange-50' : 'border-gray-200'}`}>
                          <input type="radio" name="vehicle" value="sedan" checked={vehicle === 'sedan'} onChange={() => setVehicle('sedan')} className="hidden" />
                          <span className="block font-bold text-[#1E3A8A] text-sm">Sedan</span>
                          <span className="text-[10px] text-gray-400">4 Pax</span>
                        </label>
                        <label className={`border rounded-xl p-3 cursor-pointer text-center hover:border-[#D97706] transition-all ${vehicle === 'suv' ? 'border-[#D97706] bg-orange-50' : 'border-gray-200'}`}>
                          <input type="radio" name="vehicle" value="suv" checked={vehicle === 'suv'} onChange={() => setVehicle('suv')} className="hidden" />
                          <span className="block font-bold text-[#1E3A8A] text-sm">Innova (SUV)</span>
                          <span className="text-[10px] text-gray-400">6-7 Pax</span>
                        </label>
                        <label className={`border rounded-xl p-3 cursor-pointer text-center hover:border-[#D97706] transition-all ${vehicle === 'tempo' ? 'border-[#D97706] bg-orange-50' : 'border-gray-200'}`}>
                          <input type="radio" name="vehicle" value="tempo" checked={vehicle === 'tempo'} onChange={() => setVehicle('tempo')} className="hidden" />
                          <span className="block font-bold text-[#1E3A8A] text-sm">Tempo</span>
                          <span className="text-[10px] text-gray-400">12+ Pax</span>
                        </label>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute top-3.5 left-4 text-gray-400" size={18} />
                        <input 
                          type="text" name="name" required
                          value={formData.name} onChange={handleChange}
                          placeholder="Your Name" 
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute top-3.5 left-4 text-gray-400" size={18} />
                        <input 
                          type="tel" name="phone" required
                          value={formData.phone} onChange={handleChange}
                          placeholder="+91 99999 99999" 
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
                      <div className="relative">
                          <Calendar className="absolute top-3.5 left-4 text-gray-400" size={18} />
                          <input 
                            type="date" 
                            name="startDate"
                            min={minDate} // <--- FIXED HERE
                            required
                            value={formData.startDate} onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                          />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {tripType === 'tour' ? 'Duration (Days)' : 'Pickup Time'}
                      </label>
                      <div className="relative">
                          <Clock className="absolute top-3.5 left-4 text-gray-400" size={18} />
                          {tripType === 'tour' ? (
                            <select 
                              name="durationOrTime"
                              value={formData.durationOrTime} onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none appearance-none"
                            >
                              <option value="">Select Days</option>
                              <option value="3 Days">3 Days</option>
                              <option value="4 Days">4 Days</option>
                              <option value="5 Days">5 Days</option>
                              <option value="6 Days">6 Days</option>
                              <option value="7+ Days">7+ Days</option>
                            </select>
                          ) : (
                            <input 
                              type="time" name="durationOrTime"
                              value={formData.durationOrTime} onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                            />
                          )}
                      </div>
                    </div>
                  </div>

                  {/* Locations */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute top-3.5 left-4 text-gray-400" size={18} />
                      <input 
                        type="text" name="pickupLocation" required
                        value={formData.pickupLocation} onChange={handleChange}
                        placeholder="e.g., Srinagar Airport or Hotel Radisson" 
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                      />
                    </div>
                  </div>
                  
                  {tripType === 'transfer' && (
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Drop Location</label>
                        <div className="relative">
                          <MapPin className="absolute top-3.5 left-4 text-gray-400" size={18} />
                          <input 
                            type="text" name="dropLocation"
                            value={formData.dropLocation} onChange={handleChange}
                            placeholder="e.g., Dal Lake Houseboat" 
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none" 
                          />
                        </div>
                      </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#D97706] hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking Request'} <ArrowRight size={20} />
                  </button>

                </form>
             </div>
          </div>

          {/* --- RIGHT: SUMMARY CARD --- */}
          <div className="lg:col-span-1">
             <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-xl sticky top-28">
                <h3 className="text-xl font-serif font-bold mb-6 border-b border-blue-400/30 pb-4">Booking Summary</h3>
                
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Vehicle</span>
                      <span className="font-bold capitalize">{vehicle === 'suv' ? 'Innova Crysta' : vehicle === 'tempo' ? 'Tempo Traveller' : 'Premium Sedan'}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Service Type</span>
                      <span className="font-bold capitalize">{tripType === 'tour' ? 'Multi-Day Tour' : 'Pickup/Drop'}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-sm">Fuel & Driver</span>
                      <span className="font-bold text-green-400 flex items-center gap-1"><CheckCircle size={14}/> Included</span>
                   </div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl mb-6">
                   <p className="text-sm font-light text-blue-100 italic">
                     "You are making a great choice. The {vehicle} is our most comfortable option for Kashmir roads."
                   </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-blue-200">
                   <CheckCircle size={16} className="text-[#D97706] shrink-0" />
                   Pay only after arrival
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-200 mt-2">
                   <CheckCircle size={16} className="text-[#D97706] shrink-0" />
                   Free cancellation anytime
                </div>

             </div>
          </div>

        </div>
      </div>
    </main>
  );
}