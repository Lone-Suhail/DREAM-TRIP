import React from 'react';
import { packages } from '@/data/packages';
import { notFound } from 'next/navigation';
import { MapPin, CheckCircle, Calendar, ArrowLeft, XCircle, Info, ShieldAlert, Tag } from 'lucide-react';
import Link from 'next/link';
import DynamicPricing from '@/components/DynamicPricing'; 

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

export default async function PackageDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id.toString() === id);

  if (!pkg) return notFound();

  // ✅ FIX: No more .replace() or complex parsing.
  // We just treat it as a number directly.
  const basePrice = Number(pkg.price);
  
  // Handle originalPrice safely (if it's missing, just add 30% to base price)
  const originalPrice = pkg.originalPrice 
    ? Number(pkg.originalPrice) 
    : Math.round(basePrice * 1.3);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Hero Image Header */}
      <div className="relative h-[50vh] w-full bg-slate-900">
        <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <Link href="/packages" className="inline-flex items-center gap-2 text-white/80 hover:text-[#D97706] mb-4 transition-colors">
                <ArrowLeft size={20} /> Back to Packages
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-[#D97706] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">{pkg.duration}</span>
                {pkg.tag && (
                    <span className="bg-red-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1 animate-pulse">
                        <Tag size={12} /> {pkg.tag}
                    </span>
                )}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">{pkg.title}</h1>
            <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                <MapPin size={18} className="text-[#D97706]"/> {pkg.location}
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* --- LEFT COLUMN (DETAILS) --- */}
            <div className="lg:w-2/3 space-y-8">
                
                {/* Overview */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
                        <Info className="text-[#D97706]" /> Package Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {pkg.overview}
                    </p>
                </div>

                {/* Itinerary */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                        <Calendar className="text-[#D97706]" /> Day Wise Itinerary
                    </h2>
                    <div className="space-y-0 border-l-2 border-dashed border-gray-200 ml-3 pl-8 relative">
                        {pkg.itinerary?.map((day, idx) => (
                            <div key={idx} className="relative pb-8 last:pb-0">
                                <div className="absolute -left-[43px] top-1 w-8 h-8 bg-[#1E3A8A] text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                                    D{day.day}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{day.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{day.activity}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                            <CheckCircle size={20} /> Inclusions
                        </h3>
                        <ul className="space-y-3">
                            {pkg.inclusions?.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                            <XCircle size={20} /> Exclusions
                        </h3>
                        <ul className="space-y-3">
                            {pkg.exclusions?.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Policies */}
                {pkg.policies && (
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                            <ShieldAlert className="text-[#D97706]" /> Terms & Policies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {pkg.policies.map((policy, idx) => (
                                <div key={idx} className="bg-gray-50 p-5 rounded-xl">
                                    <h4 className="font-bold text-gray-800 mb-3">{policy.title}</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {policy.rules.map((rule, rIdx) => (
                                            <li key={rIdx} className="text-xs text-gray-600 leading-relaxed">{rule}</li>
                                        ))}
                                    </ul>
                                </div>
                             ))}
                        </div>
                    </div>
                )}
            </div>

            {/* --- RIGHT COLUMN (SMART PRICING COMPONENT) --- */}
            <div className="lg:w-1/3">
               <DynamicPricing 
                  basePrice={basePrice}
                  originalPrice={originalPrice}
                  pkgTitle={pkg.title}
                  rating={pkg.rating}
                  reviews={pkg.reviews}
                  duration={pkg.duration}
                  location={pkg.location}
                  minPax={pkg.minPax}
               />
            </div>

        </div>
      </div>
    </main>
  );
}