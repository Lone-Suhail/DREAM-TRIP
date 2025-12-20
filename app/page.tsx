"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Coffee, Snowflake, Ship, ChevronDown, Wand2, Quote, ShieldCheck, Clock, Heart } from 'lucide-react';
import { packages } from '../data/packages';
import SeasonalHero from '@/components/SeasonalHero';
import { seasonConfig, getSeasonByMonth } from '@/data/seasons'; // <--- ADD THIS

// --- TESTIMONIALS DATA ---
const reviews = [
  { name: "Rahul & Simran", from: "Mumbai", rating: 5, text: "We were worried about safety, but Dream Trip made us feel like family. The houseboat stay in Dal Lake was magical.", date: "Nov 2025" },
  { name: "Amit Verma", from: "Delhi", rating: 5, text: "The driver (Sameer Bhai) was a gem. He took us to a hidden spot in Pahalgam that wasn't on the map. Top-notch service.", date: "Oct 2025" },
  { name: "Sarah Jenkins", from: "UK", rating: 5, text: "As a solo female traveler, I was hesitant. But the team ensured I was safe 24/7. Verified drivers and daily check-ins.", date: "Dec 2025" },
  { name: "The Mehta Family", from: "Gujarat", rating: 4, text: "Hotels in Gulmarg were heated perfectly (very important for my parents). The food was good, mostly vegetarian as requested.", date: "Jan 2025" },
  { name: "Arjun & Friends", from: "Bangalore", rating: 5, text: "Skiing in Gulmarg was the highlight! The team arranged the instructor and equipment for us in advance.", date: "Jan 2025" },
  { name: "Priya Das", from: "Kolkata", rating: 5, text: "I wanted a relaxed trip. Doodhpathri was the best suggestion they gave. So peaceful compared to Sonamarg.", date: "Sep 2025" },
  { name: "Col. R.K. Singh", from: "Pune", rating: 5, text: "Very professional. No hidden costs. The Innova Crysta was brand new. Will definitely book again.", date: "Aug 2025" },
  { name: "David & Emily", from: "Australia", rating: 5, text: "We have traveled to Switzerland, but Kashmir has a unique charm. The Autumn colors were unreal.", date: "Oct 2025" }
];

// --- DUPLICATE REVIEWS FOR INFINITE SCROLL ILLUSION ---
const allReviews = [...reviews, ...reviews];

export default function Home() {
  const featuredPackages = packages.slice(0, 3);
  
  // --- ADD THIS LOGIC ---
  const [multiplier, setMultiplier] = useState(1); // Default is 1 (Standard price)

  useEffect(() => {
    const currentSeason = getSeasonByMonth();
    setMultiplier(seasonConfig[currentSeason].priceMultiplier);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#D97706] selection:text-white">

     {/* --- 1. SEASONAL HERO SECTION (NEW) --- */}
      {/* We replaced the old code with this single line below 👇 */}
      <SeasonalHero />

      {/* --- 2. THE EXPERIENCE BENTO GRID --- */}
      <section className="py-24 bg-gray-50 relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-4">Not Just a Trip, An Experience</h2>
            <p className="text-gray-500 text-lg">Curated moments that stay with you forever.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/srinagar.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white"><Ship size={24} /></div>
                <h3 className="text-3xl font-bold text-white mb-2">Heritage Houseboats</h3>
                <p className="text-gray-200">Wake up to the sound of ripples on Dal Lake in 100-year-old floating palaces.</p>
              </div>
            </div>
            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer bg-[#1E3A8A]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="p-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                 <Coffee size={48} className="text-[#D97706] mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2">Authentic Wazwan</h3>
                 <p className="text-blue-200 text-sm">Taste the royal 36-course meal of Kashmir.</p>
              </div>
            </div>
            <div className="md:col-span-1 relative group rounded-3xl overflow-hidden cursor-pointer">
               <img src="/gulmarg.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors p-6 flex flex-col justify-end">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2"><Snowflake size={18}/> Winter Magic</h3>
               </div>
            </div>
            <div className="md:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
              <img src="/pahalgam.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Untamed Valleys</h3>
                  <p className="text-gray-200 max-w-xs">Trek through the untouched pine forests of Pahalgam and Sonamarg.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE US SECTION (NEW!) --- */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">The Dream Trip Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Why Choose Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">100% Safe & Verified</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">We verify every hotel, driver, and houseboat personally. Your safety is our #1 priority.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-all duration-300">
                <Heart size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">No Hidden Costs</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">The price we quote is the price you pay. No surprise taxes, no driver tips demanded.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">24/7 Local Support</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">We live here. If you need anything at 2 AM, our local team is just one call away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRENDING PACKAGES --- */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <div>
                <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Exclusive Deals</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Curated for You</h2>
             </div>
             <Link href="/packages">
                <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-all font-bold cursor-pointer">
                    View All Offers <ArrowRight size={18} />
                </button>
             </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="h-72 overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1E3A8A] z-10 flex items-center gap-1"><Star size={12} className="fill-[#D97706] text-[#D97706]" /> {pkg.rating}</div>
                    {pkg.tag && (<div className="absolute bottom-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-lg text-xs font-bold z-10">{pkg.tag}</div>)}
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-[#1E3A8A] group-hover:text-[#D97706] transition-colors line-clamp-1">{pkg.title}</h3>
                        <span className="bg-blue-50 text-[#1E3A8A] text-xs font-bold px-2 py-1 rounded">{pkg.duration}</span>
                    </div>
                    <div className="flex items-end gap-3 mb-6">
                        <div><p className="text-xs text-gray-400 line-through">₹ {pkg.originalPrice}</p><p className="text-2xl font-bold text-[#1E3A8A]">₹ {pkg.price}</p></div>
                        <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full mb-1">50% SAVINGS</span>
                    </div>
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                         <div className="flex items-center gap-2 text-sm text-gray-500"><MapPin size={16} /> {pkg.location.split(',')[0]}</div>
                         <Link href={`/packages/${pkg.id}`}>
                            <button className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center group-hover:bg-[#D97706] transition-colors cursor-pointer"><ArrowRight size={18} /></button>
                         </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
              <Link href="/packages"><button className="px-6 py-3 rounded-full bg-[#1E3A8A] text-white font-bold w-full cursor-pointer">View All Packages</button></Link>
          </div>
        </div>
      </section>

      {/* --- 5. STATS STRIP --- */}
      <section className="py-20 bg-[#1E3A8A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D97706] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                <div className="space-y-2"><p className="text-5xl font-bold font-serif">5k+</p><p className="text-blue-200 text-sm tracking-widest uppercase">Happy Travelers</p></div>
                <div className="space-y-2"><p className="text-5xl font-bold font-serif">24/7</p><p className="text-blue-200 text-sm tracking-widest uppercase">On-Trip Support</p></div>
                <div className="space-y-2"><p className="text-5xl font-bold font-serif">100%</p><p className="text-blue-200 text-sm tracking-widest uppercase">Customizable</p></div>
                <div className="space-y-2"><p className="text-5xl font-bold font-serif">4.9</p><p className="text-blue-200 text-sm tracking-widest uppercase">Google Rating</p></div>
            </div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS MARQUEE --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
            <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Guest Reviews</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Stories from Paradise</h2>
            <p className="text-gray-500 mt-4">Don't just take our word for it. Hear from our happy travelers.</p>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full relative">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="animate-marquee flex gap-8 py-4">
                {allReviews.map((review, idx) => (
                    <div 
                        key={idx} 
                        className="w-[400px] flex-shrink-0 bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col select-none"
                    >
                        <div className="flex items-center gap-1 mb-6 text-[#D97706]">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={16} fill="#D97706" />
                            ))}
                        </div>
                        <div className="relative mb-6">
                            <Quote size={40} className="absolute -top-2 -left-2 text-gray-200 fill-gray-200" />
                            <p className="text-gray-600 leading-relaxed relative z-10 italic">"{review.text}"</p>
                        </div>
                        <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm">
                                {review.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1E3A8A] text-sm">{review.name}</h4>
                                <p className="text-xs text-gray-400">{review.from} • {review.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12 text-center relative z-20">
            <a href="https://www.google.com/search?q=dream+trip+kashmir+reviews" target="_blank" className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:text-[#D97706] transition-colors cursor-pointer">
                See more reviews on Google <ArrowRight size={16} />
            </a>
        </div>
      </section>

      {/* --- 7. CTA SECTION --- */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
          <img src="/sonamarg.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">Your Dream Trip Awaits</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">Stop dreaming and start packing. Our local experts are ready to craft the perfect itinerary for you.</p>
              <Link href="/book?title=Plan My Dream Trip">
                <button className="px-12 py-5 bg-white text-gray-900 hover:bg-[#D97706] hover:text-white font-bold rounded-full transition-all text-xl shadow-2xl cursor-pointer">Get a Free Quote Now</button>
              </Link>
          </div>
      </section>

    </main>
  );
}