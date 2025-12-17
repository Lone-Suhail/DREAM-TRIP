"use client";

import React, { useState } from 'react';
import { Clock, MapPin, Star, CheckCircle, Users, ArrowRight, Filter, Tag, Wand2 } from 'lucide-react';
import Link from 'next/link';

<div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 mx-auto max-w-4xl">
  <p className="text-orange-700 text-sm">
    <strong>Note:</strong> Prices indicated are "Starting From" rates and may vary based on 
    season (Peak/Off-Peak), hotel category, and availability. 
    Please contact us via WhatsApp for the exact current quotation.
  </p>
</div>

// --- 1. DEFINE DATA HERE TO PREVENT ERRORS ---
const packages = [
  {
    id: "honeymoon-special",
    title: "Magical Kashmir Honeymoon",
    image: "/gulmarg.jpg",
    price: "18,500",
    originalPrice: "24,000",
    rating: 5,
    reviews: 124,
    nights: 4, // Used for filter
    duration: "5 Days / 4 Nights",
    location: "Srinagar, Gulmarg, Pahalgam",
    minPax: 2,
    tag: "Bestseller",
    highlights: ["Candlelight Dinner", "Flower Decoration", "Shikara Ride", "Private Cab"]
  },
  {
    id: "family-fun",
    title: "Family Fun in Paradise",
    image: "/pahalgam.jpg",
    price: "14,999",
    originalPrice: "18,500",
    rating: 4.8,
    reviews: 89,
    nights: 5,
    duration: "6 Days / 5 Nights",
    location: "Pahalgam, Gulmarg",
    minPax: 4,
    tag: "Value Deal",
    highlights: ["Houseboat Stay", "Mughal Gardens", "Betaab Valley", "Breakfast & Dinner"]
  },
  {
    id: "adventure-trek",
    title: "Kashmir Adventure Trek",
    image: "/sonamarg.jpg",
    price: "12,500",
    originalPrice: "15,000",
    rating: 4.9,
    reviews: 56,
    nights: 3,
    duration: "4 Days / 3 Nights",
    location: "Sonamarg, Srinagar",
    minPax: 2,
    tag: "Adventure",
    highlights: ["Thajiwas Glacier", "River Rafting", "Camping", "Bonfire Night"]
  },
  {
    id: "gurez-expedition",
    title: "Offbeat Gurez Valley",
    image: "/gurez.jpg",
    price: "16,000",
    originalPrice: "20,000",
    rating: 5.0,
    reviews: 32,
    nights: 4,
    duration: "5 Days / 4 Nights",
    location: "Gurez, Razdan Pass",
    minPax: 2,
    tag: "Trending",
    highlights: ["Habba Khatoon Peak", "Kishanganga River", "Camping", "Star Gazing"]
  },
  {
    id: "winter-special",
    title: "Snowy Winter Wonderland",
    image: "/gulmarg.jpg",
    price: "20,000",
    originalPrice: "28,000",
    rating: 4.7,
    reviews: 45,
    nights: 4,
    duration: "5 Days / 4 Nights",
    location: "Gulmarg Ski Resort",
    minPax: 2,
    tag: "Winter Special",
    highlights: ["Skiing Course", "Snow Chain Cab", "Heated Rooms", "Gondola Phase 1"]
  },
  {
    id: "short-escape",
    title: "Srinagar Weekend Escape",
    image: "/srinagar.jpg",
    price: "9,500",
    originalPrice: "12,000",
    rating: 4.6,
    reviews: 210,
    nights: 2,
    duration: "3 Days / 2 Nights",
    location: "Srinagar City",
    minPax: 2,
    tag: "Quick Trip",
    highlights: ["Dal Lake Stay", "Shikara Ride", "Mughal Gardens", "Airport Pickup"]
  }
];

// Filter Categories
const filters = [
  { label: "All Packages", value: 0 },
  { label: "3 Days", value: 2 },
  { label: "4 Days", value: 3 },
  { label: "5 Days", value: 4 },
  { label: "6 Days", value: 5 },
  { label: "7 Days", value: 6 },
];

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState(0);

  // Filter Logic
  const filteredPackages = activeFilter === 0 
    ? packages 
    : packages.filter(pkg => pkg.nights === activeFilter);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-4">
          Choose Your Perfect Journey
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From quick weekend escapes to week-long immersions, we have crafted the perfect itinerary for every traveler.
        </p>
      </div>

      {/* --- DISCLAIMER MOVED HERE (INSIDE THE FUNCTION) --- */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mx-auto max-w-4xl text-left shadow-sm rounded-r-lg">
          <p className="text-orange-700 text-sm">
            <strong>Note:</strong> Prices indicated are "Starting From" rates and may vary based on 
            season (Peak/Off-Peak), hotel category, and availability. 
            Please contact us via WhatsApp for the exact current quotation.
          </p>
        </div>
        {/* --------------------------------------------------- */}

      {/* --- BUILD YOUR TRIP BANNER --- */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-xl text-white">
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Wand2 className="text-[#D97706]" /> Can't find what you're looking for?
                </h3>
                <p className="text-blue-100">
                    Tell our AI your budget & interests, and we'll build a custom itinerary just for you.
                </p>
            </div>
            <Link href="/plan">
                <button className="px-8 py-3 bg-white text-[#1E3A8A] font-bold rounded-full hover:bg-[#D97706] hover:text-white transition-all shadow-lg flex items-center gap-2">
                    <Wand2 size={18} /> Build Your Own Trip
                </button>
            </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-sm flex items-center gap-2 ${
                activeFilter === filter.value
                  ? 'bg-[#1E3A8A] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#1E3A8A]'
              }`}
            >
              {activeFilter === filter.value && <Filter size={14} />}
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col">
              
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[#1E3A8A] shadow-lg flex items-center gap-1.5">
                  <Clock size={14} className="text-[#D97706]" />
                  {pkg.duration}
                </div>

                {pkg.tag && (
                  <div className="absolute top-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Tag size={12} /> {pkg.tag}
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex-grow flex flex-col">
                
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tour Package</span>
                        <div className="flex items-center gap-1">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
                            <span className="text-xs text-gray-400">({pkg.reviews})</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#1E3A8A] mb-1 group-hover:text-[#D97706] transition-colors">
                        {pkg.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                        <MapPin size={16} className="text-[#D97706]" />
                        {pkg.location}
                    </div>
                </div>

                <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#1E3A8A] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Action Section */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                    
                    <div className="flex items-center gap-2 mb-3 bg-blue-50 w-fit px-3 py-1 rounded-full">
                        <Users size={14} className="text-[#1E3A8A]" />
                        <span className="text-xs font-bold text-[#1E3A8A] uppercase">Min {pkg.minPax} Pax Required</span>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase mb-0.5">Starting From</p>
                            
                            {/* Original Price */}
                            <p className="text-sm text-gray-400 line-through font-medium">₹ {pkg.originalPrice}</p>
                            
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-[#D97706]">₹</span>
                                <span className="text-3xl font-black text-[#D97706] tracking-tight">{pkg.price}</span>
                                <span className="text-xs text-gray-400 font-medium">/ person</span>
                            </div>
                        </div>

                        <Link href={`/packages/${pkg.id}`}>
                            <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white p-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95">
                                <ArrowRight size={20} />
                            </button>
                        </Link>

                    </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}