import React, { Suspense } from 'react';
import { Mail, Phone, MapPin, Calendar, Users, CheckCircle } from 'lucide-react';

export default function Book() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}

function BookingForm() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Start Your Journey</span>
          <h1 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Plan Your Dream Trip</h1>
          <p className="text-gray-500 mt-2">Tell us a little about your plans, and we'll craft the perfect itinerary.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Left Side - Contact Info */}
            <div className="bg-[#1E3A8A] p-10 text-white hidden md:block">
              <h3 className="text-2xl font-serif font-bold mb-6">Why Book With Us?</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D97706] shrink-0" />
                  <span className="text-blue-100 text-sm">Local Kashmiri experts who know every hidden valley.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D97706] shrink-0" />
                  <span className="text-blue-100 text-sm">24/7 on-ground support during your entire trip.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#D97706] shrink-0" />
                  <span className="text-blue-100 text-sm">Best price guarantee for 3-star & luxury houseboats.</span>
                </li>
              </ul>
              
              <div className="mt-12 pt-12 border-t border-blue-800 space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Phone size={18} /> +91 99999 99999
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Mail size={18} /> hello@dreamtrip.com
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <MapPin size={18} /> Srinagar, Kashmir
                </div>
              </div>
            </div>

            {/* Right Side - The Form */}
            <div className="col-span-2 p-8 md:p-12">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute top-3.5 left-4 text-gray-400" size={18} />
                      <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">No. of Travelers</label>
                    <div className="relative">
                      <Users className="absolute top-3.5 left-4 text-gray-400" size={18} />
                      <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all appearance-none">
                        <option>2 People</option>
                        <option>3-4 People</option>
                        <option>5-8 People</option>
                        <option>Group (9+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* --- BUDGET SECTION (Added Here) --- */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Estimated Budget Per Person</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="border border-gray-200 rounded-xl p-3 flex items-start gap-3 cursor-pointer hover:border-[#D97706] hover:bg-orange-50 has-[:checked]:border-[#D97706] has-[:checked]:bg-orange-50 transition-all">
                      <input type="radio" name="budget" value="economy" className="accent-[#D97706] mt-1" />
                      <div>
                        <span className="block font-bold text-[#1E3A8A] text-sm">Economy</span>
                        <span className="text-xs text-gray-500">₹15k - ₹25k</span>
                      </div>
                    </label>

                    <label className="border border-gray-200 rounded-xl p-3 flex items-start gap-3 cursor-pointer hover:border-[#D97706] hover:bg-orange-50 has-[:checked]:border-[#D97706] has-[:checked]:bg-orange-50 transition-all">
                      <input type="radio" name="budget" value="premium" className="accent-[#D97706] mt-1" />
                      <div>
                        <span className="block font-bold text-[#1E3A8A] text-sm">Premium</span>
                        <span className="text-xs text-gray-500">₹25k - ₹45k</span>
                      </div>
                    </label>

                    <label className="border border-gray-200 rounded-xl p-3 flex items-start gap-3 cursor-pointer hover:border-[#D97706] hover:bg-orange-50 has-[:checked]:border-[#D97706] has-[:checked]:bg-orange-50 transition-all">
                      <input type="radio" name="budget" value="luxury" className="accent-[#D97706] mt-1" />
                      <div>
                        <span className="block font-bold text-[#1E3A8A] text-sm">Luxury</span>
                        <span className="text-xs text-gray-500">₹45k+</span>
                      </div>
                    </label>
                    
                    <label className="border border-gray-200 rounded-xl p-3 flex items-start gap-3 cursor-pointer hover:border-[#D97706] hover:bg-orange-50 has-[:checked]:border-[#D97706] has-[:checked]:bg-orange-50 transition-all">
                      <input type="radio" name="budget" value="custom" className="accent-[#D97706] mt-1" />
                      <div>
                        <span className="block font-bold text-[#1E3A8A] text-sm">Flexible</span>
                        <span className="text-xs text-gray-500">Custom</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* --- END BUDGET SECTION --- */}

                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Anything specific you want to see?</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#D97706] focus:ring-0 outline-none transition-all h-32 resize-none" placeholder="e.g. We want to stay in a houseboat for 2 nights and visit Sonamarg..."></textarea>
                </div>

                <button className="w-full bg-[#D97706] hover:bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Get My Free Quote
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}