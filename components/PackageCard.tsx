'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, Star, ArrowRight, CheckCircle, Users } from 'lucide-react';

// --- DEFINING INTERFACE LOCALLY TO PREVENT ERRORS ---
export interface Package {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  days: string;       // Matches the 'days' property we fixed earlier
  location: string;
  tag?: string;
  highlights: string[];
  minPax?: number;
}

interface PackageCardProps {
  data: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ data }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* --- IMAGE SECTION --- */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
           <Clock size={14} className="text-[#D97706]" />
           <span className="text-xs font-bold text-[#1E3A8A]">{data.days}</span>
        </div>

        {/* Tag Badge */}
        {data.tag && (
          <div className="absolute top-4 left-4 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {data.tag}
          </div>
        )}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Rating & Location Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="text-sm text-gray-500 font-medium flex items-center gap-1">
            <MapPin size={16} className="text-[#D97706]" /> {data.location}
          </div>
          <div className="flex items-center text-amber-400 text-sm font-bold gap-1 bg-amber-50 px-2 py-1 rounded-md">
            <Star size={14} fill="currentColor" /> {data.rating}
            <span className="text-gray-400 font-normal">({data.reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl text-[#1E3A8A] font-bold mb-4 group-hover:text-[#D97706] transition-colors leading-tight">
          {data.title}
        </h3>

        {/* Highlights List */}
        <div className="mb-6 flex-grow space-y-2 bg-gray-50 p-4 rounded-xl">
          {data.highlights.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700 gap-2">
              <CheckCircle size={16} className="text-[#1E3A8A] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION: PRICE & BUTTON --- */}
        <div className="mt-auto pt-4 border-t border-gray-100">
           
           {/* Min Pax Info */}
           {data.minPax && (
             <div className="flex items-center gap-1 mb-2 text-xs text-gray-400 font-medium uppercase">
                <Users size={12} /> Min {data.minPax} Pax Required
             </div>
           )}

           <div className="flex items-end justify-between">
              <div>
                 <p className="text-xs text-gray-400 font-medium uppercase mb-0.5">Starting From</p>
                 {data.originalPrice && (
                    <p className="text-xs text-gray-400 line-through">₹{data.originalPrice}</p>
                 )}
                 <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-[#D97706]">₹</span>
                    <span className="text-2xl font-black text-[#D97706] tracking-tight">{data.price}</span>
                 </div>
              </div>

              <Link href={`/book?package=${data.id}`}>
                <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white p-3 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
                   <ArrowRight size={20} />
                </button>
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default PackageCard;