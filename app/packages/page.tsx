'use client';

import React from 'react';
import PackageCard, { Package } from '../../components/PackageCard';

const allPackages: Package[] = [
  {
    id: 'honeymoon-special',
    title: "Magical Kashmir Honeymoon",
    image: "/gulmarg.jpg",
    price: "₹18,500",
    rating: 5,
    reviews: 124,
    days: "5 Days / 4 Nights", 
    tag: "Bestseller",
    features: ["Candlelight Dinner", "Flower Decoration", "Shikara Ride", "Private Cab"]
  },
  {
    id: 'family-fun',
    title: "Family Fun in Paradise",
    image: "/pahalgam.jpg",
    price: "₹14,999",
    rating: 4.8,
    reviews: 89,
    days: "6 Days / 5 Nights",
    tag: "Value",
    features: ["Pahalgam Valley", "Houseboat Stay", "Mughal Gardens", "Breakfast & Dinner"]
  },
  {
    id: 'adventure-trek',
    title: "Kashmir Adventure Trek",
    image: "/sonamarg.jpg",
    price: "₹12,500",
    rating: 4.9,
    reviews: 56,
    days: "4 Days / 3 Nights",
    features: ["Sonamarg Glacier", "River Rafting", "Camping", "Bonfire Night"]
  },
  {
    id: 'gurez-expedition',
    title: "Offbeat Gurez Valley",
    image: "/gurez.jpg",
    price: "₹16,000",
    rating: 5.0,
    reviews: 32,
    days: "5 Days / 4 Nights",
    tag: "Trending",
    features: ["Habba Khatoon Peak", "Kishanganga River", "Camping", "Star Gazing"]
  },
  {
    id: 'winter-wonderland',
    title: "Snowy Winter Special",
    image: "/gulmarg.jpg",
    price: "₹20,000",
    rating: 4.7,
    reviews: 45,
    days: "5 Days / 4 Nights",
    tag: "Winter",
    features: ["Skiing Course", "Snow Chain Cab", "Heated Rooms", "Gondola"]
  },
  {
    id: 'spiritual-journey',
    title: "Spiritual Kashmir (Amarnath)",
    image: "/pahalgam.jpg",
    price: "₹15,500",
    rating: 4.8,
    reviews: 67,
    days: "4 Days / 3 Nights",
    features: ["Shankaracharya Temple", "Hazratbal Shrine", "Kheer Bhawani", "Vegetarian Meals"]
  }
];

export default function AllPackages() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">All Inclusive Tours</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Explore Our Packages</h1>
          <p className="text-gray-500 mt-2">Find the perfect itinerary for your budget and style.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages.map((pkg) => (
            <PackageCard key={pkg.id} data={pkg} />
          ))}
        </div>
      </div>
    </main>
  );
}