import React from 'react';
import { Heart, Users, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12 font-sans">
      
      {/* Hero */}
      <section className="text-center px-4 mb-16">
         <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm">Our Story</span>
         <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1E3A8A] mt-4 mb-6">Local Heart. Global Standards.</h1>
         <p className="text-gray-500 max-w-2xl mx-auto text-lg">
           We aren't just a travel agency. We are locals who grew up running in these saffron fields and rowing on these lakes.
         </p>
      </section>

      {/* Story Grid */}
      <section className="container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
               <img src="/srinagar.jpg" className="rounded-[2rem] shadow-xl w-full" alt="Our Team" />
            </div>
            <div className="space-y-6">
               <h2 className="text-3xl font-bold text-[#1E3A8A]">Why we started Dream Trip</h2>
               <p className="text-gray-600 leading-relaxed">
                  Ten years ago, we realized that visitors to Kashmir were seeing the places, but missing the <em>feeling</em>. They were booking generic packages and missing the hidden waterfalls, the authentic Wazwan at a local's home, and the sunset spots only locals knew.
               </p>
               <p className="text-gray-600 leading-relaxed">
                  We started Dream Trip with one mission: <strong>To show you the Kashmir that we love.</strong> Safe, authentic, and unforgettable.
               </p>
               <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 font-bold text-[#1E3A8A]"><CheckCircle size={18} className="text-[#D97706]"/> Local Drivers</div>
                  <div className="flex items-center gap-2 font-bold text-[#1E3A8A]"><CheckCircle size={18} className="text-[#D97706]"/> 24/7 Support</div>
                  <div className="flex items-center gap-2 font-bold text-[#1E3A8A]"><CheckCircle size={18} className="text-[#D97706]"/> Fair Pricing</div>
                  <div className="flex items-center gap-2 font-bold text-[#1E3A8A]"><CheckCircle size={18} className="text-[#D97706]"/> Verified Hotels</div>
               </div>
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1E3A8A] py-16 text-white text-center">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
               <Heart size={40} className="mx-auto mb-4 text-[#D97706]" />
               <h3 className="text-4xl font-bold mb-1">5,000+</h3>
               <p className="text-blue-200">Happy Travelers</p>
            </div>
            <div>
               <Users size={40} className="mx-auto mb-4 text-[#D97706]" />
               <h3 className="text-4xl font-bold mb-1">50+</h3>
               <p className="text-blue-200">Local Team Members</p>
            </div>
            <div>
               <Award size={40} className="mx-auto mb-4 text-[#D97706]" />
               <h3 className="text-4xl font-bold mb-1">4.9/5</h3>
               <p className="text-blue-200">Google Rating</p>
            </div>
         </div>
      </section>

    </main>
  );
} 