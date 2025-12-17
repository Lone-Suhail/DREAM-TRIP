'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, Star, CheckCircle, Users, ArrowRight, Tag } from 'lucide-react';
import { Package } from '@/data/packages'; // Import type if available

interface PackageCardProps {
  data: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden bg-slate-800">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[#1E3A8A] shadow-lg flex items-center gap-1.5">
          <Clock size={14} className="text-[#D97706]" />
          {data.duration}
        </div>

        {/* Tag Badge */}
        {data.tag && (
          <div className="absolute top-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider flex items-center gap-1">
            <Tag size={12} /> {data.tag}
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
                    <span className="text-sm font-bold text-gray-800">{data.rating}</span>
                    <span className="text-xs text-gray-400">({data.reviews})</span>
                </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1E3A8A] mb-1 group-hover:text-[#D97706] transition-colors leading-tight">
                {data.title}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                <MapPin size={16} className="text-[#D97706]" />
                {data.location}
            </div>
        </div>

        {/* Highlights Section */}
        <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl flex-grow">
          {data.highlights.slice(0, 3).map((highlight, idx) => (
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
                <span className="text-xs font-bold text-[#1E3A8A] uppercase">Min {data.minPax} Pax Required</span>
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <p className="text-xs text-gray-400 font-medium uppercase mb-0.5">Starting From</p>
                    <p className="text-sm text-gray-400 line-through font-medium">₹ {data.originalPrice}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-[#D97706]">₹</span>
                        <span className="text-3xl font-black text-[#D97706] tracking-tight">{data.price}</span>
                        <span className="text-xs text-gray-400 font-medium">/ person</span>
                    </div>
                </div>

                <Link href={`/packages/${data.id}`}>
                    <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white p-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95">
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