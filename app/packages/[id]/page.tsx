'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock, MapPin, CheckCircle, XCircle, ArrowLeft, ArrowRight, ShieldAlert, Star, Calendar, Info, Tag } from 'lucide-react';

// --- FULL DATABASE (ALL 6 PACKAGES) ---
const packagesDB: any = {
  // 1. HONEYMOON SPECIAL
  "honeymoon-special": {
    id: "honeymoon-special",
    title: "Magical Kashmir Honeymoon",
    price: "18,500",
    originalPrice: "24,000",
    duration: "5 Days / 4 Nights",
    location: "Srinagar, Gulmarg, Pahalgam",
    description: "Experience the romance of Kashmir with candle-lit dinners, flower-bed decoration, and private Shikara rides. Perfect for newlyweds looking for luxury and privacy.",
    image: "/gulmarg.jpg", 
    rating: 5.0,
    reviews: 124,
    minPax: 2,
    tag: "Bestseller",
    itinerary: [
      { day: 1, title: "Arrival & Romantic Shikara Ride", desc: "Pickup from Srinagar Airport. Transfer to a luxury Houseboat. Welcome drink (Kahwa). Evening 1-hour romantic Shikara ride on Dal Lake with flower decoration. Candle-light dinner." },
      { day: 2, title: "Srinagar to Gulmarg", desc: "Day trip to Gulmarg (Meadow of Flowers). Take the famous Gondola Cable Car ride (Phase 1 & 2). Enjoy snow activities together. Return to Srinagar hotel." },
      { day: 3, title: "Srinagar to Pahalgam", desc: "Drive to Pahalgam (Valley of Shepherds). Visit Saffron fields and Apple Orchards. Check-in to riverside hotel. Enjoy evening walk by Lidder river." },
      { day: 4, title: "Pahalgam Valleys", desc: "Visit Betaab Valley, Aru Valley, and Chandanwari. Optional Pony ride to Baisaran (Mini Switzerland). Return to Srinagar in the evening." },
      { day: 5, title: "Departure with Memories", desc: "Breakfast at hotel. Visit Mughal Gardens (Nishat & Shalimar) if flight time permits. Drop at Srinagar Airport." }
    ],
    inclusions: ["04 Nights Accommodation", "Daily Breakfast & Dinner", "Private Sedan Cab", "1 Hour Shikara Ride", "Honeymoon Inclusions (Cake, Flower Decoration)"],
    exclusions: ["Flight Tickets", "Lunch", "Gondola Tickets", "Garden Entry Fees", "Personal Expenses"]
  },

  // 2. FAMILY ESCAPE
  "family-escape": {
    id: "family-escape",
    title: "Kashmir Family Escape",
    price: "14,500",
    originalPrice: "18,999",
    duration: "6 Days / 5 Nights",
    location: "Pahalgam, Gulmarg",
    description: "The complete Kashmir experience for families. Covers Srinagar, Gulmarg, and Pahalgam at a relaxed pace safe for kids and elders.",
    image: "/pahalgam.jpg",
    rating: 4.8,
    reviews: 89,
    minPax: 4,
    tag: "Value Deal",
    itinerary: [
      { day: 1, title: "Welcome to Paradise", desc: "Pickup from Airport. Check-in to Houseboat. Evening Shikara ride for the whole family." },
      { day: 2, title: "Gulmarg Day Excursion", desc: "Full day in Gulmarg. Enjoy snow activities like skiing or sledging. Kids love the snow park. Return to Srinagar." },
      { day: 3, title: "Srinagar to Pahalgam", desc: "Transfer to Pahalgam via Saffron fields. Check-in at Pahalgam Hotel. Evening free for leisure." },
      { day: 4, title: "Pahalgam Sightseeing", desc: "Visit Aru Valley and Betaab Valley. Relax by the Lidder river. Return to Srinagar." },
      { day: 5, title: "Sonamarg Day Trip", desc: "Day trip to Sonamarg (Meadow of Gold). Visit Thajiwas Glacier. Return to Srinagar." },
      { day: 6, title: "Airport Drop", desc: "Morning shopping at Lal Chowk (optional). Drop at Airport." }
    ],
    inclusions: ["05 Nights Stay", "Breakfast & Dinner", "Private Innova/SUV", "All Tolls & Taxes", "Driver Allowances"],
    exclusions: ["Flights / Trains", "Lunch", "Union Cabs in Pahalgam", "Activity charges"]
  },

  // 3. ADVENTURE TREK
  "adventure-trek": {
    id: "adventure-trek",
    title: "Kashmir Adventure Trek",
    price: "12,500",
    originalPrice: "15,000",
    duration: "4 Days / 3 Nights",
    location: "Sonamarg, Srinagar",
    description: "For the thrill-seekers. Experience river rafting in Sonamarg, short treks, and camping under the stars.",
    image: "/sonamarg.jpg",
    rating: 4.9,
    reviews: 56,
    minPax: 2,
    tag: "Adventure",
    itinerary: [
      { day: 1, title: "Arrival & Sonamarg", desc: "Pickup from Airport and direct drive to Sonamarg. Check-in to Camping site. Evening Bonfire." },
      { day: 2, title: "Thajiwas Glacier Trek", desc: "Short trek to Thajiwas Glacier. Sledging on snow. Afternoon White Water Rafting in Sindh River." },
      { day: 3, title: "Sonamarg to Srinagar", desc: "Drive back to Srinagar. Check-in to Houseboat. Evening Shikara ride to floating market." },
      { day: 4, title: "Departure", desc: "Early morning Shankaracharya Temple hike (optional). Drop at Airport." }
    ],
    inclusions: ["03 Nights Stay (Camp + Hotel)", "Breakfast & Dinner", "Private Cab", "River Rafting Fees", "Guide for Trek"],
    exclusions: ["Flights", "Lunch", "Personal Trekking Gear", "Tips"]
  },

  // 4. GUREZ EXPEDITION
  "gurez-expedition": {
    id: "gurez-expedition",
    title: "Offbeat Gurez Valley",
    price: "16,000",
    originalPrice: "20,000",
    duration: "5 Days / 4 Nights",
    location: "Gurez, Razdan Pass",
    description: "Explore the untouched beauty of Gurez Valley, Razdan Pass, and the Kishanganga River. A true offbeat paradise.",
    image: "/gurez.jpg",
    rating: 5.0,
    reviews: 32,
    minPax: 2,
    tag: "Trending",
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", desc: "Pickup and transfer to Srinagar Hotel. Acclimatization and rest. Dal Lake evening walk." },
      { day: 2, title: "Srinagar to Gurez", desc: "Early morning drive to Gurez via Razdan Pass (11,672 ft). Breathtaking views. Check-in at Dawar." },
      { day: 3, title: "Exploring Gurez", desc: "Visit Habba Khatoon Peak and Spring. Walk along the Kishanganga river. Border village tour." },
      { day: 4, title: "Gurez to Srinagar", desc: "Drive back to Srinagar. Evening shopping for handicrafts. Overnight in Srinagar." },
      { day: 5, title: "Departure", desc: "Transfer to Srinagar Airport." }
    ],
    inclusions: ["04 Nights Stay", "Breakfast & Dinner", "Private SUV (Mandatory)", "Inner Line Permits", "Driver Allowances"],
    exclusions: ["Flights", "Lunch", "Extra food/drinks", "Personal expenses"]
  },

  // 5. WINTER SPECIAL
  "winter-special": {
    id: "winter-special",
    title: "Snowy Winter Wonderland",
    price: "20,000",
    originalPrice: "28,000",
    duration: "5 Days / 4 Nights",
    location: "Gulmarg Ski Resort",
    description: "Experience the magic of snow in Kashmir. Stay in heated rooms, enjoy skiing in Gulmarg, and see the frozen Dal Lake.",
    image: "/gulmarg.jpg",
    rating: 4.7,
    reviews: 45,
    minPax: 2,
    tag: "Winter Special",
    itinerary: [
      { day: 1, title: "Arrival in Snow", desc: "Pickup and transfer to centrally heated hotel in Srinagar. Warm Kahwa welcome." },
      { day: 2, title: "Gulmarg Skiing", desc: "Day trip to Gulmarg. Skiing course (basic) or Snowboarding. Gondola ride over snow-covered pine trees." },
      { day: 3, title: "Pahalgam Winter Vibe", desc: "Drive to Pahalgam. The valley looks like Narnia in winter. Visit Aru Valley (using chains if needed)." },
      { day: 4, title: "Srinagar Sightseeing", desc: "Mughal Gardens and Hazratbal Shrine. Evening Shikara ride (with heating pot/Kangri)." },
      { day: 5, title: "Departure", desc: "Drop at Airport." }
    ],
    inclusions: ["04 Nights in Heated Hotels", "Breakfast & Dinner", "SUV with Snow Chains", "Skiing Instructor (1hr)", "Electric Blanket"],
    exclusions: ["Flights", "Lunch", "Gondola Tickets", "Winter Clothing Rental"]
  },

  // 6. SHORT ESCAPE
  "short-escape": {
    id: "short-escape",
    title: "Srinagar Weekend Escape",
    price: "9,500",
    originalPrice: "12,000",
    duration: "3 Days / 2 Nights",
    location: "Srinagar City",
    description: "A quick recharge in the lap of nature. Perfect for a long weekend trip to cover the highlights of Srinagar.",
    image: "/srinagar.jpg",
    rating: 4.6,
    reviews: 210,
    minPax: 2,
    tag: "Quick Trip",
    itinerary: [
      { day: 1, title: "Arrival & Dal Lake", desc: "Pickup from Airport. Transfer to Houseboat. 1 Hour Shikara Ride. Shopping at local market." },
      { day: 2, title: "Gulmarg Day Trip", desc: "Day trip to Gulmarg and back. Gondola Ride. Return to Srinagar Hotel for night stay." },
      { day: 3, title: "Gardens & Departure", desc: "Morning visit to Nishat & Shalimar Bagh. Drop at Airport by afternoon." }
    ],
    inclusions: ["02 Nights Accommodation", "Breakfast & Dinner", "Private Sedan Cab", "Shikara Ride", "Airport Transfers"],
    exclusions: ["Flights", "Lunch", "Entry Tickets", "Garden Fees"]
  }
};

// Fallback for unknown packages
const defaultPackage = packagesDB["honeymoon-special"]; 

export default function PackageDetailsPage() {
  const params = useParams();
  
  // Get the package ID from the URL
  const slug = params.id as string;
  const pkg = packagesDB[slug] || defaultPackage;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'policies'>('itinerary');

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
                
                {/* 1. Package Overview */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
                        <Info className="text-[#D97706]" /> Package Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {pkg.description}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b border-gray-200 mb-2">
                  <button 
                    onClick={() => setActiveTab('itinerary')}
                    className={`pb-3 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'itinerary' ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    Itinerary
                  </button>
                  <button 
                    onClick={() => setActiveTab('policies')}
                    className={`pb-3 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'policies' ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    Inclusions
                  </button>
                </div>

                {/* 2. Day Wise Itinerary */}
                {activeTab === 'itinerary' && (
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                          <Calendar className="text-[#D97706]" /> Day Wise Itinerary
                      </h2>
                      <div className="space-y-0 border-l-2 border-dashed border-gray-200 ml-3 pl-8 relative">
                          {pkg.itinerary?.map((day: any, index: number) => (
                              <div key={index} className="relative pb-8 last:pb-0">
                                  {/* Timeline Dot */}
                                  <div className="absolute -left-[43px] top-1 w-8 h-8 bg-[#1E3A8A] text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                                      {day.day}
                                  </div>
                                  
                                  <h3 className="text-lg font-bold text-gray-800 mb-2">{day.title}</h3>
                                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{day.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                )}

                {/* 3. Inclusions & Exclusions */}
                {activeTab === 'policies' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Inclusions */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                          <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                              <CheckCircle size={20} /> Inclusions
                          </h3>
                          <ul className="space-y-3">
                              {pkg.inclusions?.map((item: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>

                      {/* Exclusions */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                          <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                              <XCircle size={20} /> Exclusions
                          </h3>
                          <ul className="space-y-3">
                              {pkg.exclusions?.map((item: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"></span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                )}
            </div>

            {/* --- RIGHT COLUMN (STICKY BOOKING) --- */}
            <div className="lg:w-1/3">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sticky top-28 border border-gray-100">
                    <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Starting From</p>
                            
                            {/* --- PRICE DISPLAY WITH DISCOUNT --- */}
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-gray-400 line-through text-sm">₹ {pkg.originalPrice}</span>
                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">25% OFF</span>
                            </div>
                            <h3 className="text-3xl font-bold text-[#1E3A8A]">₹ {pkg.price}</h3>
                            <p className="text-xs text-gray-400">per person (Min {pkg.minPax} Pax)</p>
                        </div>
                        <div className="text-right">
                             <div className="flex items-center gap-1 justify-end">
                                <Star size={14} className="fill-[#D97706] text-[#D97706]"/>
                                <span className="font-bold">{pkg.rating}</span>
                             </div>
                             <p className="text-xs text-gray-400">{pkg.reviews} Reviews</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration</span>
                            <span className="font-bold text-gray-800">{pkg.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Accommodation</span>
                            <span className="font-bold text-gray-800">Standard / Houseboat</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Transport</span>
                            <span className="font-bold text-gray-800">Private Cab</span>
                        </div>
                    </div>

                    {/* Book Button linking to Form */}
                    <Link href={`/book?package=${pkg.title}&budget=${pkg.price}&message=I am interested in ${pkg.title}`}>
                        <button className="w-full bg-[#D97706] hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mb-3">
                            Proceed to Book
                        </button>
                    </Link>
                    <button className="w-full border border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50 font-bold py-3 rounded-xl transition-all">
                        Download PDF
                    </button>
                    
                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <ShieldAlert size={14} /> Secure Booking & Payment
                    </div>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}