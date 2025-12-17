'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock, MapPin, CheckCircle, XCircle, ArrowLeft, ArrowRight, ShieldCheck, Star } from 'lucide-react';

// --- FULL DATABASE OF PACKAGES ---
const packagesDB: any = {
  // 1. HONEYMOON SPECIAL
  "honeymoon-special": {
    title: "Magical Kashmir Honeymoon",
    price: "18,500",
    originalPrice: "24,000",
    duration: "5 Days / 4 Nights",
    description: "Experience the romance of Kashmir with candle-lit dinners, flower-bed decoration, and private Shikara rides. Perfect for newlyweds looking for luxury and privacy.",
    minPax: 2,
    rating: 5.0,
    reviews: 124,
    itinerary: [
      { day: 1, title: "Arrival & Romantic Shikara Ride", desc: "Pickup from Srinagar Airport. Transfer to a luxury Houseboat. Welcome drink (Kahwa). Evening 1-hour romantic Shikara ride on Dal Lake with flower decoration. Candle-light dinner." },
      { day: 2, title: "Srinagar to Gulmarg", desc: "Day trip to Gulmarg (Meadow of Flowers). Take the famous Gondola Cable Car ride (Phase 1 & 2). Enjoy snow activities together. Return to Srinagar hotel." },
      { day: 3, title: "Srinagar to Pahalgam", desc: "Drive to Pahalgam (Valley of Shepherds). Visit Saffron fields and Apple Orchards. Check-in to riverside hotel. Enjoy evening walk by Lidder river." },
      { day: 4, title: "Pahalgam Valleys", desc: "Visit Betaab Valley, Aru Valley, and Chandanwari. Optional Pony ride to Baisaran (Mini Switzerland). Return to Srinagar in the evening." },
      { day: 5, title: "Departure with Memories", desc: "Breakfast at hotel. Visit Mughal Gardens (Nishat & Shalimar) if flight time permits. Drop at Srinagar Airport." }
    ],
    inclusions: [
      "04 Nights Accommodation (1 Night Houseboat + 3 Nights Hotel)",
      "Daily Breakfast & Dinner (MAP Plan)",
      "Private Sedan Cab (Etios/Dzire) for all days",
      "1 Hour Shikara Ride",
      "Honeymoon Inclusions (Cake, Flower Decoration, Milk)"
    ],
    exclusions: [
      "Flight Tickets",
      "Lunch",
      "Gondola Tickets / Pony Ride Charges",
      "Garden Entry Fees",
      "Personal Expenses"
    ]
  },

  // 2. FAMILY ESCAPE
  "family-escape": {
    title: "Kashmir Family Escape",
    price: "14,500",
    originalPrice: "18,999",
    duration: "6 Days / 5 Nights",
    description: "The complete Kashmir experience for families. Covers Srinagar, Gulmarg, and Pahalgam at a relaxed pace safe for kids and elders.",
    minPax: 4,
    rating: 4.8,
    reviews: 89,
    itinerary: [
      { day: 1, title: "Welcome to Paradise", desc: "Pickup from Airport. Check-in to Houseboat. Evening Shikara ride for the whole family." },
      { day: 2, title: "Gulmarg Day Excursion", desc: "Full day in Gulmarg. Enjoy snow activities like skiing or sledging. Kids love the snow park. Return to Srinagar." },
      { day: 3, title: "Srinagar to Pahalgam", desc: "Transfer to Pahalgam via Saffron fields. Check-in at Pahalgam Hotel. Evening free for leisure." },
      { day: 4, title: "Pahalgam Sightseeing", desc: "Visit Aru Valley and Betaab Valley. Relax by the Lidder river. Return to Srinagar." },
      { day: 5, title: "Sonamarg Day Trip", desc: "Day trip to Sonamarg (Meadow of Gold). Visit Thajiwas Glacier. Return to Srinagar." },
      { day: 6, title: "Airport Drop", desc: "Morning shopping at Lal Chowk (optional). Drop at Airport." }
    ],
    inclusions: [
      "05 Nights Stay (3 Star Hotels/Houseboat)",
      "Breakfast & Dinner included",
      "Private Innova/SUV for comfortable travel",
      "All Tolls, Taxes & Parking",
      "Driver Allowances"
    ],
    exclusions: [
      "Flights / Trains",
      "Lunch",
      "Union Cabs in Pahalgam",
      "Activity charges (Snow biking, etc.)"
    ]
  },

  // 3. ADVENTURE TREK
  "adventure-trek": {
    title: "Kashmir Adventure Trek",
    price: "12,500",
    originalPrice: "15,000",
    duration: "4 Days / 3 Nights",
    description: "For the thrill-seekers. Experience river rafting in Sonamarg, short treks, and camping under the stars.",
    minPax: 2,
    rating: 4.9,
    reviews: 56,
    itinerary: [
      { day: 1, title: "Arrival & Sonamarg", desc: "Pickup from Airport and direct drive to Sonamarg. Check-in to Camping site. Evening Bonfire." },
      { day: 2, title: "Thajiwas Glacier Trek", desc: "Short trek to Thajiwas Glacier. Sledging on snow. Afternoon White Water Rafting in Sindh River." },
      { day: 3, title: "Sonamarg to Srinagar", desc: "Drive back to Srinagar. Check-in to Houseboat. Evening Shikara ride to floating market." },
      { day: 4, title: "Departure", desc: "Early morning Shankaracharya Temple hike (optional). Drop at Airport." }
    ],
    inclusions: [
      "03 Nights Stay (1 Night Camp + 2 Nights Hotel/HB)",
      "Breakfast & Dinner",
      "Private Cab for transfers",
      "River Rafting Fees",
      "Guide for Thajiwas Trek"
    ],
    exclusions: [
      "Flights",
      "Lunch",
      "Personal Trekking Gear",
      "Tips for guides"
    ]
  },

  // 4. GUREZ EXPEDITION
  "gurez-expedition": {
    title: "Offbeat Gurez Valley",
    price: "16,000",
    originalPrice: "20,000",
    duration: "5 Days / 4 Nights",
    description: "Explore the untouched beauty of Gurez Valley, Razdan Pass, and the Kishanganga River. A true offbeat paradise.",
    minPax: 2,
    rating: 5.0,
    reviews: 32,
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", desc: "Pickup and transfer to Srinagar Hotel. Acclimatization and rest. Dal Lake evening walk." },
      { day: 2, title: "Srinagar to Gurez", desc: "Early morning drive to Gurez via Razdan Pass (11,672 ft). Breathtaking views. Check-in at Dawar." },
      { day: 3, title: "Exploring Gurez", desc: "Visit Habba Khatoon Peak and Spring. Walk along the Kishanganga river. Border village tour." },
      { day: 4, title: "Gurez to Srinagar", desc: "Drive back to Srinagar. Evening shopping for handicrafts. Overnight in Srinagar." },
      { day: 5, title: "Departure", desc: "Transfer to Srinagar Airport." }
    ],
    inclusions: [
      "04 Nights Stay (Guest Houses/Homestays in Gurez)",
      "Breakfast & Dinner",
      "Private SUV (Innova/Scorpio) mandatory for Gurez terrain",
      "Inner Line Permits",
      "Driver Allowances"
    ],
    exclusions: [
      "Flights",
      "Lunch",
      "Any extra food/drinks",
      "Personal expenses"
    ]
  },

  // 5. WINTER SPECIAL
  "winter-special": {
    title: "Snowy Winter Wonderland",
    price: "20,000",
    originalPrice: "28,000",
    duration: "5 Days / 4 Nights",
    description: "Experience the magic of snow in Kashmir. Stay in heated rooms, enjoy skiing in Gulmarg, and see the frozen Dal Lake.",
    minPax: 2,
    rating: 4.7,
    reviews: 45,
    itinerary: [
      { day: 1, title: "Arrival in Snow", desc: "Pickup and transfer to centrally heated hotel in Srinagar. Warm Kahwa welcome." },
      { day: 2, title: "Gulmarg Skiing", desc: "Day trip to Gulmarg. Skiing course (basic) or Snowboarding. Gondola ride over snow-covered pine trees." },
      { day: 3, title: "Pahalgam Winter Vibe", desc: "Drive to Pahalgam. The valley looks like Narnia in winter. Visit Aru Valley (using chains if needed)." },
      { day: 4, title: "Srinagar Sightseeing", desc: "Mughal Gardens and Hazratbal Shrine. Evening Shikara ride (with heating pot/Kangri)." },
      { day: 5, title: "Departure", desc: "Drop at Airport." }
    ],
    inclusions: [
      "04 Nights in Centrally Heated Hotels",
      "Breakfast & Dinner",
      "SUV with Snow Chains (Required for Tangmarg/Gulmarg)",
      "Skiing Instructor for 1 hour",
      "Electric Blanket/Heating"
    ],
    exclusions: [
      "Flights",
      "Lunch",
      "Gondola Tickets",
      "Heavy Winter Clothing Rental (Coats/Boots)"
    ]
  },

  // 6. SHORT ESCAPE
  "short-escape": {
    title: "Srinagar Weekend Escape",
    price: "9,500",
    originalPrice: "12,000",
    duration: "3 Days / 2 Nights",
    description: "A quick recharge in the lap of nature. Perfect for a long weekend trip to cover the highlights of Srinagar.",
    minPax: 2,
    rating: 4.6,
    reviews: 210,
    itinerary: [
      { day: 1, title: "Arrival & Dal Lake", desc: "Pickup from Airport. Transfer to Houseboat. 1 Hour Shikara Ride. Shopping at local market." },
      { day: 2, title: "Gulmarg Day Trip", desc: "Day trip to Gulmarg and back. Gondola Ride. Return to Srinagar Hotel for night stay." },
      { day: 3, title: "Gardens & Departure", desc: "Morning visit to Nishat & Shalimar Bagh. Drop at Airport by afternoon." }
    ],
    inclusions: [
      "02 Nights Accommodation (1 Night HB + 1 Night Hotel)",
      "Breakfast & Dinner",
      "Private Sedan Cab",
      "Shikara Ride",
      "Airport Transfers"
    ],
    exclusions: [
      "Flights",
      "Lunch",
      "Entry Tickets",
      "Garden Fees"
    ]
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
    <main className="min-h-screen bg-gray-50 pt-20 pb-24 font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#1E3A8A] text-white p-8 pb-16 relative">
        <Link href="/packages" className="absolute top-6 left-4 text-blue-200 hover:text-white flex items-center gap-1">
           <ArrowLeft size={18} /> Back
        </Link>
        <div className="container mx-auto max-w-4xl mt-6">
           <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
             Best Seller
           </span>
           <h1 className="text-3xl md:text-5xl font-serif font-bold mt-4 leading-tight">
             {pkg.title}
           </h1>
           <div className="flex flex-wrap gap-4 mt-4 text-blue-200 text-sm">
             <div className="flex items-center gap-1"><Clock size={16}/> {pkg.duration}</div>
             <div className="flex items-center gap-1"><MapPin size={16}/> Kashmir Valley</div>
           </div>
        </div>
      </div>

      {/* 2. OVERLAPPING CARD */}
      <div className="container mx-auto max-w-4xl px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-gray-500 text-sm line-through">₹ {pkg.originalPrice}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#1E3A8A]">₹ {pkg.price}</span>
              <span className="text-sm font-bold text-gray-500">/ person</span>
            </div>
            <p className="text-green-600 text-xs font-bold mt-1">*No Hidden Charges</p>
          </div>
          <div className="w-full md:w-auto">
             {/* LINK TO BOOKING PAGE */}
             <Link href={`/book?package=${pkg.title}&budget=${pkg.price}&message=I am interested in ${pkg.title} (${pkg.duration}).`}>
                <button className="w-full bg-[#D97706] hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                  Book Now <ArrowRight size={18} />
                </button>
             </Link>
          </div>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="container mx-auto max-w-4xl px-4 mt-8">
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
          {pkg.description}
        </p>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'itinerary' ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Day-Wise Itinerary
          </button>
          <button 
            onClick={() => setActiveTab('policies')}
            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'policies' ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Inclusions & Exclusions
          </button>
        </div>

        {/* Tab Content: ITINERARY */}
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {pkg.itinerary.map((item: any, index: number) => (
               <div key={index} className="flex gap-4">
                 <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.day}
                    </div>
                    {index !== pkg.itinerary.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
                 </div>
                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1 hover:border-blue-100 transition-colors">
                    <h3 className="font-bold text-[#1E3A8A] mb-2">Day {item.day}: {item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </div>
            ))}
          </div>
        )}

        {/* Tab Content: POLICIES */}
        {activeTab === 'policies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
               <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                 <CheckCircle size={20} /> Inclusions
               </h3>
               <ul className="space-y-3">
                 {pkg.inclusions.map((inc: string, i: number) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                     <CheckCircle size={14} className="text-green-600 mt-1 shrink-0" /> {inc}
                   </li>
                 ))}
               </ul>
             </div>

             <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
               <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                 <XCircle size={20} /> Exclusions
               </h3>
               <ul className="space-y-3">
                 {pkg.exclusions.map((exc: string, i: number) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                     <XCircle size={14} className="text-red-500 mt-1 shrink-0" /> {exc}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        )}

      </div>

      {/* 4. STICKY MOBILE FOOTER (Book Now) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-xs text-gray-500">Starting from</p>
          <p className="text-xl font-black text-[#1E3A8A]">₹ {pkg.price}</p>
        </div>
        <Link href={`/book?package=${pkg.title}&budget=${pkg.price}&message=I am interested in ${pkg.title}`}>
          <button className="bg-[#D97706] hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex items-center gap-2">
             Book Now <ArrowRight size={18} />
          </button>
        </Link>
      </div>

    </main>
  );
}