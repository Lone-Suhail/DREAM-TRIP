"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2 mb-4">
          We'd Love to Hear From You
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Whether you have a question about a package, need a custom itinerary, or just want to say hello, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            
            {/* Contact Cards */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Talk to an Expert</h3>
                <p className="text-gray-600 mb-4">Available 24/7 for urgent queries.</p>
                <a href="tel:+919999999999" className="text-[#D97706] font-bold text-lg hover:underline">+91 99999 XXXXX</a>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#D97706] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">For detailed itineraries and quotes.</p>
                <a href="mailto:info@dreamtrip.com" className="text-[#D97706] font-bold text-lg hover:underline">bookings@dreamtrip.com</a>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Visit Our Office</h3>
                <p className="text-gray-600 mb-4">Boulevard Road, Dal Lake</p>
                <span className="text-[#D97706] font-bold text-lg">Srinagar, Kashmir</span>
            </div>
        </div>

        {/* --- FAQ SECTION (CRITICAL FOR KASHMIR TOURISM) --- */}
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A8A] mb-8 text-center flex items-center justify-center gap-3">
                <HelpCircle className="text-[#D97706]" /> Common Traveler Questions
            </h2>

            <div className="space-y-4">
                {[
                    { q: "Is Kashmir safe for tourists?", a: "Absolutely. Kashmir is one of the safest destinations for tourists. Thousands of travelers visit every month without any issues. Locals are known for their hospitality." },
                    { q: "Do prepaid SIM cards work in Kashmir?", a: "No. Only Postpaid connections (Jio, Airtel, BSNL) work in J&K. We recommend carrying a postpaid SIM or using hotel Wi-Fi." },
                    { q: "What clothes should I pack?", a: "In summer (Apr-Sep), light woolens are enough. For winter (Nov-Mar) or visiting Gulmarg/Sonamarg, heavy jackets, gloves, and snow boots are a must." },
                    { q: "How do I book a trip?", a: "You can book directly through our 'Packages' page, use the 'Plan My Trip' tool, or simply call/WhatsApp us for a custom plan." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-[#1E3A8A] mb-2 flex justify-between items-center">
                            {item.q}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </main>
  );
}