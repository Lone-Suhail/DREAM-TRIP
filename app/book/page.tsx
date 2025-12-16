'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, User, Phone, Users, CheckCircle, ArrowRight, IndianRupee } from 'lucide-react';

// Wrapper component to handle Search Params safely
function BookingForm() {
  const searchParams = useSearchParams();
  
  // --- FIX 1: MOBILE DATE BLOCKER (INDIA TIME) -- -
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    // --- FIX 2: CATCH DATE FROM PREVIOUS PAGE ---
    date: searchParams.get('date') || '', 
    guests: searchParams.get('travelers') || '',
    packageName: searchParams.get('package') || '', 
    budget: searchParams.get('budget') || '', 
    message: searchParams.get('message') || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDATION
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in Name, Phone, and Travel Date.");
      return;
    }

    // WHATSAPP MESSAGE GENERATION
    const phoneNumber = "919149726260"; // YOUR NUMBER
    
    // Clean up the message format
    const text = `*New Booking Request* 🏔️%0A%0A` +
      `📦 *Package:* ${formData.packageName || "Not Specified"}%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📅 *Date:* ${formData.date}%0A` +
      `👥 *Guests:* ${formData.guests}%0A` +
      `💰 *Budget:* ${formData.budget ? '₹' + formData.budget : 'Not Specified'}%0A` +
      `📝 *Note:* ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
             <User size={16} className="text-[#D97706]" /> Full Name
          </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
            required 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
             <Phone size={16} className="text-[#D97706]" /> Phone Number
          </label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9906123456"
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
             <Calendar size={16} className="text-[#D97706]" /> Travel Date
          </label>
          <input 
            type="date" 
            name="date" 
            min={minDate} // <--- BLOCKS PAST DATES CORRECTLY
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
             <Users size={16} className="text-[#D97706]" /> Number of Guests
          </label>
          <input 
            type="number" 
            name="guests" 
            value={formData.guests}
            onChange={handleChange}
            placeholder="e.g. 2"
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
          />
        </div>
      </div>

      {/* MANUAL BUDGET INPUT */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
           <IndianRupee size={16} className="text-[#D97706]" /> Your Budget (Total)
        </label>
        <input 
          type="text" 
          name="budget" 
          value={formData.budget}
          onChange={handleChange}
          placeholder="Enter amount (e.g. 25000)"
          className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests / Notes</label>
        <textarea 
          name="message" 
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E3A8A]"
          placeholder="Any dietary needs, hotel preferences, etc."
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
      >
        Confirm Booking Request <ArrowRight size={20} />
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">
        *No payment required now. We will confirm availability via WhatsApp.
      </p>
    </form>
  );
}

// MAIN PAGE COMPONENT
export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Reservation</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Book Your Trip</h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Fill in the details below to start your reservation. Our team will contact you within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: The Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
             <Suspense fallback={<div>Loading form...</div>}>
                <BookingForm />
             </Suspense>
          </div>

          {/* Right Side: Trust Badges */}
          <div className="space-y-6">
             <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-serif">Why Book With Us?</h3>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                      <CheckCircle className="shrink-0 text-[#D97706]" />
                      <span className="text-blue-100 text-sm">No Hidden Charges. What you see is what you pay.</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle className="shrink-0 text-[#D97706]" />
                      <span className="text-blue-100 text-sm">24/7 On-Ground Support in Srinagar.</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <CheckCircle className="shrink-0 text-[#D97706]" />
                      <span className="text-blue-100 text-sm">Rated 4.9/5 by 500+ Happy Travelers.</span>
                   </li>
                </ul>
             </div>

             <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-2">Need Help?</p>
                <p className="text-2xl font-bold text-[#1E3A8A] mb-4">+91 9149726260</p>
                <p className="text-xs text-gray-400">Available on Call & WhatsApp</p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}