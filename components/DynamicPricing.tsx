'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldAlert } from 'lucide-react';
import { useSeason } from '@/data/SeasonContext';
import { seasonConfig } from '@/data/seasons';

interface Props {
  basePrice: number;
  originalPrice: number;
  pkgTitle: string;
  rating: number;
  reviews: number;
  duration: string;
  location: string;
  minPax: number;
}

export default function DynamicPricing({ basePrice, originalPrice, pkgTitle, rating, reviews, duration, location, minPax }: Props) {
  const { season } = useSeason();
  const multiplier = seasonConfig[season].priceMultiplier;

  // CALCULATE THE REAL PRICE
  const dynamicPrice = Math.round(basePrice * multiplier);
  const formattedPrice = dynamicPrice.toLocaleString('en-IN');
  const formattedOriginal = Math.round(originalPrice * multiplier).toLocaleString('en-IN');

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sticky top-28 border border-gray-100">
      
      {/* Price Header */}
      <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
        <div>
           <p className="text-xs text-[#D97706] font-bold uppercase tracking-wide mb-1">{season} Price</p>
           <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400 line-through text-sm">₹ {formattedOriginal}</span>
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">SEASON DEAL</span>
           </div>
           <h3 className="text-3xl font-bold text-[#1E3A8A]">₹ {formattedPrice}</h3>
           <p className="text-xs text-gray-400">per person (Min {minPax} Pax)</p>
        </div>
        <div className="text-right">
             <div className="flex items-center gap-1 justify-end">
                <Star size={14} className="fill-[#D97706] text-[#D97706]"/>
                <span className="font-bold">{rating}</span>
             </div>
             <p className="text-xs text-gray-400">{reviews} Reviews</p>
        </div>
      </div>

      {/* Details List */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-sm">
           <span className="text-gray-500">Duration</span>
           <span className="font-bold text-gray-800">{duration}</span>
        </div>
        <div className="flex justify-between text-sm">
           <span className="text-gray-500">Location</span>
           <span className="font-bold text-gray-800 text-right w-1/2">{location}</span>
        </div>
      </div>

      {/* Book Button - Now passes the CALCULATED Price! */}
      <Link href={`/book?package=${encodeURIComponent(pkgTitle)}&price=${dynamicPrice}&season=${season}`}>
         <button className="w-full bg-[#D97706] hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-3 flex items-center justify-center gap-2">
            Proceed to Book <ArrowRight size={20} />
         </button>
      </Link>
      
      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
         <ShieldAlert size={14} /> Secure Booking & Payment
      </div>
    </div>
  );
}