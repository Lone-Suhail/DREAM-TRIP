// src/components/PackageCard.tsx
import React from 'react';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';
// CHANGE THIS LINE: Use '../' instead of '@/'
import { Package } from '../data/packages';

interface PackageCardProps {
  data: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ data }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-md">
          <span className="text-xs text-gray-500 block">Starting from</span>
          <span className="text-lg font-bold text-kashmir-sapphire">₹{data.price}</span>
        </div>
        {data.tag && (
          <div className="absolute top-4 left-4 bg-kashmir-saffron text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.tag}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm text-kashmir-pine font-semibold flex items-center gap-1">
            <MapPin size={14} /> {data.location}
          </div>
          <div className="flex items-center text-amber-500 text-sm font-bold gap-1">
            <Star size={14} fill="currentColor" /> {data.rating}
          </div>
        </div>

        <h3 className="font-serif text-2xl text-gray-900 font-bold mb-3 group-hover:text-kashmir-sapphire transition-colors">
          {data.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <Clock size={16} />
          <span>{data.days}</span>
        </div>

        {/* Highlights List */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-2">
            {data.highlights.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-kashmir-saffron rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full mt-auto bg-gray-50 hover:bg-kashmir-sapphire hover:text-white text-kashmir-sapphire font-semibold py-3 rounded-xl border border-kashmir-sapphire/20 transition-all flex items-center justify-center gap-2 group-hover:border-transparent">
          View Itinerary <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PackageCard;