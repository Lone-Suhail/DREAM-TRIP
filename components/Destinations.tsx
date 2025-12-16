import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { destinations } from '../data/destinations'; // Import the data

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold tracking-wider uppercase text-sm">Explore the Valley</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Top Destinations</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From the popular tourist hubs to the untouched hidden gems, discover the true beauty of Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((place) => (
            <Link key={place.id} href={`/destinations/${place.id}`} className="block">
              <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-gray-100">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold font-serif mb-1">{place.name}</h3>
                  
                  <p className="text-sm text-gray-200 mb-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 leading-relaxed">
                    {place.brief}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm uppercase tracking-wide">
                    Explore Details <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;