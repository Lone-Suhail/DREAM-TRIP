import React from 'react';
import Link from 'next/link';
import { Star, Clock, CheckCircle, ArrowRight } from 'lucide-react';

// FIX: Added 'days' here
export interface Package {
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

export default function PackageCard({ data }: { data: Package }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Days Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1E3A8A] shadow-md uppercase tracking-wide flex items-center gap-1">
            <Clock size={12} className="text-[#D97706]" /> {data.days}
        </div>

        {/* Tag Badge */}
        {data.tag && (
          <div className="absolute top-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
            {data.tag}
          </div>
        )}

        <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">
              <Star size={14} fill="currentColor" /> 
              <span className="font-bold">{data.rating}</span>
              <span className="text-gray-200 text-xs">({data.reviews} reviews)</span>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 leading-tight group-hover:text-[#D97706] transition-colors">
          {data.title}
        </h3>
        
        <div className="space-y-2 mb-6 flex-grow">
            {data.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={14} className="text-green-500 shrink-0" /> {feat}
              </div>
            ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
            <div>
              <p className="text-xs text-gray-400 uppercase">Starting From</p>
              <p className="text-xl font-bold text-[#1E3A8A]">{data.price}</p>
            </div>
            <Link href={`/book?package=${data.id}`}>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D97706] hover:text-white transition-all">
                  <ArrowRight size={18} />
              </button>
            </Link>
        </div>
      </div>

    </div>
  );
}