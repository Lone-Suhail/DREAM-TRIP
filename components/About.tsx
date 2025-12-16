import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side - UPDATED TO LOCAL FILE */}
          <div className="lg:w-1/2 relative">
            {/* Decorative colored blob behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D97706]/20 rounded-full blur-2xl"></div>
            
            <img 
              src="/about.jpg"   // <--- POINTS TO YOUR LOCAL FILE
              alt="Kashmiri Hospitality" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
            />
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border-l-4 border-[#D97706]">
              <p className="text-4xl font-bold text-[#1E3A8A]">15+</p>
              <p className="text-gray-600 text-sm font-medium">Years of<br/>Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <span className="text-[#D97706] font-bold tracking-wider uppercase text-sm">About Dream Trip</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2 mb-6">
              We Don't Just Plan Trips,<br/>We Craft Memories.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Born and raised in the valleys of Kashmir, we understand the soul of this land. From the hidden trails of Pahalgam to the authentic flavors of Wazwan, we guide you beyond the tourist maps.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "100% Local Kashmiri Guides",
                "24/7 On-Trip Support",
                "Best Price Guarantee for Houseboats",
                "Customized Itineraries"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#D97706] shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-lg">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;