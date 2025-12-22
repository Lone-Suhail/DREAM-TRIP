'use client';

import React from 'react';
import Link from 'next/link';
import { packages } from '@/data/packages';
import PackageCard from './PackageCard'; // <--- IMPORT YOUR SMART COMPONENT
import { useSeason } from '@/data/SeasonContext';

export default function FeaturedPackages() {
  // Take the first 4 packages
  const featured = packages.slice(0, 4);
  const { season } = useSeason();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">
            Current Season: {season}
          </span>
          <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Popular Packages</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Handpicked itineraries that our customers love. Fully customizable to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((pkg) => (
            // ✅ THE MAGIC: We use the component that already has the math!
            // We pass the "pkg" data, and the card handles the pricing itself.
            <div key={pkg.id} className="h-full">
               <PackageCard data={pkg} />
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