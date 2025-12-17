"use client";

import React, { useState } from 'react';
import { Filter, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { packages } from '@/data/packages'; 
import PackageCard from '@/components/PackageCard'; // Uses the code above

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

  const filteredPackages = activeFilter === 0 
    ? packages 
    : packages.filter(pkg => pkg.nights === activeFilter);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mb-4">
          Choose Your Perfect Journey
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From quick weekend escapes to week-long immersions, we have crafted the perfect itinerary for every traveler.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mx-auto max-w-4xl text-left shadow-sm rounded-r-lg">
          <p className="text-orange-700 text-sm">
            <strong>Note:</strong> Prices indicated are "Starting From" rates and may vary based on 
            season (Peak/Off-Peak), hotel category, and availability. 
            Please contact us via WhatsApp for the exact current quotation.
          </p>
        </div>
      </div>

      {/* Trip Planner Banner */}
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

      {/* Filters */}
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

      {/* Grid using Component */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
             <PackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
      </div>
    </main>
  );
}