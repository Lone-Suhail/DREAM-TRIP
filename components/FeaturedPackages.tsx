import React from 'react';
import { Star, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { packages } from '../data/packages';

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold tracking-wider uppercase text-sm">Curated For You</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Signature Experiences</h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1E3A8A] shadow-md uppercase tracking-wide">
                  {pkg.days}
                </div>
                {pkg.tag && (
                  <div className="absolute top-4 left-4 bg-[#D97706] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    {pkg.tag}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                
                {/* Location & Rating */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                    <MapPin size={16} className="text-[#D97706]" />
                    {pkg.location}
                  </div>
                  
                  {/* UPDATED: Rating + Reviews */}
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">{pkg.rating}</span>
                    <span className="text-xs text-gray-500 font-medium">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-serif text-[#1E3A8A] mb-4 group-hover:text-[#D97706] transition-colors">
                  {pkg.title}
                </h3>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[#1E3A8A]/60" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action Button */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    {/* CHANGED: Text Color to Blue */}
                    <p className="text-xs text-[#1E3A8A] font-bold uppercase mb-1">Starting From</p>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#D97706]">₹</span>
                      <span className="text-2xl font-black text-[#D97706] tracking-tight">{pkg.price}</span>
                      <span className="text-xs text-gray-400 font-medium">/ person</span>
                    </div>
                  </div>

                  <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white p-3 rounded-full transition-colors shadow-lg group-hover:scale-110 duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;