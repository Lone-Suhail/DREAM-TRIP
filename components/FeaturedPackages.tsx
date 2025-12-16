'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, CheckCircle, Clock } from 'lucide-react';

// --- 1. THE FIX IS HERE (Updated Interface) ---
interface Package {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  days: string;   // <--- Added this line
  tag?: string;
  features: string[];
}

const packages: Package[] = [
  {
    id: 'honeymoon-special',
    title: "Magical Kashmir Honeymoon",
    image: "/gulmarg.jpg",
    price: "₹18,500",
    rating: 5,
    reviews: 124,
    days: "5 Days / 4 Nights", // <--- Ensure data exists
    tag: "Bestseller",
    features: ["Candlelight Dinner", "Flower Decoration", "Shikara Ride", "Private Cab"]
  },
  {
    id: 'family-fun',
    title: "Family Fun in Paradise",
    image: "/pahalgam.jpg",
    price: "₹14,999",
    rating: 4.8,
    reviews: 89,
    days: "6 Days / 5 Nights",
    tag: "Value",
    features: ["Pahalgam Valley", "Houseboat Stay", "Mughal Gardens", "Breakfast & Dinner"]
  },
  {
    id: 'adventure-trek',
    title: "Kashmir Adventure Trek",
    image: "/sonamarg.jpg",
    price: "₹12,500",
    rating: 4.9,
    reviews: 56,
    days: "4 Days / 3 Nights",
    features: ["Sonamarg Glacier", "River Rafting", "Camping", "Bonfire Night"]
  },
  {
    id: 'gurez-expedition',
    title: "Offbeat Gurez Valley",
    image: "/gurez.jpg",
    price: "₹16,000",
    rating: 5.0,
    reviews: 32,
    days: "5 Days / 4 Nights",
    tag: "Trending",
    features: ["Habba Khatoon Peak", "Kishanganga River", "Camping", "Star Gazing"]
  }
];

export default function FeaturedPackages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Best Selling Tours</span>
          <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Popular Packages</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Handpicked itineraries that our customers love. Fully customizable to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Days Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1E3A8A] shadow-md uppercase tracking-wide flex items-center gap-1">
                   <Clock size={12} className="text-[#D97706]" /> {pkg.days}
                </div>

                {/* Tag Badge */}
                {pkg.tag && (
                  <div className="absolute top-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    {pkg.tag}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 text-white">
                   <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">
                      <Star size={14} fill="currentColor" /> 
                      <span className="font-bold">{pkg.rating}</span>
                      <span className="text-gray-200 text-xs">({pkg.reviews} reviews)</span>
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 leading-tight group-hover:text-[#D97706] transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="space-y-2 mb-6 flex-grow">
                   {pkg.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                         <CheckCircle size={14} className="text-green-500 shrink-0" /> {feat}
                      </div>
                   ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                   <div>
                      <p className="text-xs text-gray-400 uppercase">Starting From</p>
                      <p className="text-xl font-bold text-[#1E3A8A]">{pkg.price}</p>
                   </div>
                   <Link href={`/book?package=${pkg.id}`}>
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D97706] hover:text-white transition-all">
                         <ArrowRight size={18} />
                      </button>
                   </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
           <Link href="/packages">
             <button className="px-8 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold rounded-full hover:bg-[#1E3A8A] hover:text-white transition-all">
                View All Packages
             </button>
           </Link>
        </div>

      </div>
    </section>
  );
}