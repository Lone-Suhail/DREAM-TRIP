import React from 'react';
import Link from 'next/link';
import { Car, Users, Briefcase, CheckCircle, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function TaxiServices() {
  
  const fleet = [
    {
      id: 'sedan',
      name: "Premium Sedan",
      model: "Toyota Etios / Swift Dzire",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
      passengers: "4 Pax",
      luggage: "2 Bags",
      price: "₹3,500",
      features: ["AC Climate Control", "Bluetooth Music", "Experienced Local Driver", "Clean Interiors"],
      idealFor: "Couples & Small Families"
    },
    {
      id: 'suv',
      name: "Luxury SUV",
      model: "Toyota Innova Crysta",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
      passengers: "6-7 Pax",
      luggage: "4 Bags",
      price: "₹5,500",
      features: ["Captain Seats", "Double AC", "Hill Assist", "Sunroof (Optional)"],
      idealFor: "Families & Comfort Seekers"
    },
    {
      id: 'tempo',
      name: "Tempo Traveller",
      model: "Force Traveller (12/16 Seater)",
      image: "https://images.unsplash.com/photo-1566373714488-6c841cb83d65?q=80&w=800&auto=format&fit=crop",
      passengers: "12-16 Pax",
      luggage: "10+ Bags",
      price: "₹8,500",
      features: ["Push-back Seats", "Ample Leg Room", "Separate Luggage Space", "Group Sound System"],
      idealFor: "Large Groups & Corporate"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-12 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
         <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Road trip in Kashmir"
         />
         <div className="relative z-20 text-center px-4">
             <span className="text-[#D97706] font-bold tracking-widest uppercase text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-[#D97706]">Premium Transport</span>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-4">Ride in Comfort & Style</h1>
             <p className="text-gray-200 text-lg max-w-xl mx-auto">From Srinagar Airport pickups to Pahalgam day trips, our sanitized fleet is ready for your journey.</p>
         </div>
      </section>

      <div className="container mx-auto px-4">
        
        {/* --- WHY CHOOSE OUR TAXIS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#1E3A8A] shadow-sm"><ShieldCheck size={28} /></div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">Verified & Safe</h3>
                <p className="text-gray-500 text-sm">All drivers are police-verified locals with 10+ years of mountain driving experience.</p>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#D97706] shadow-sm"><Car size={28} /></div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">Clean & Sanitized</h3>
                <p className="text-gray-500 text-sm">Every car is deep-cleaned before arrival. We provide fresh water bottles and tissues.</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#1E3A8A] shadow-sm"><MapPin size={28} /></div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">Anywhere Pickup</h3>
                <p className="text-gray-500 text-sm">We pick you up from Srinagar Airport, Jammu Railway Station, or your hotel door.</p>
            </div>
        </div>

        {/* --- THE FLEET (Grid) --- */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A]">Choose Your Ride</h2>
            <p className="text-gray-500 mt-2">Transparent pricing per day. Fuel, Driver & Tolls included.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {fleet.map((car) => (
                <div key={car.id} className="group bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    
                    {/* Image Area */}
                    <div className="h-64 overflow-hidden relative">
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#1E3A8A] z-10 flex items-center gap-1">
                            <Users size={12} className="text-[#D97706]" /> {car.passengers}
                        </div>
                        <img 
                            src={car.image} 
                            alt={car.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-2xl font-bold">{car.name}</h3>
                            <p className="text-sm text-gray-200">{car.model}</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Briefcase size={16} /> {car.luggage}
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Starting From</p>
                                <p className="text-2xl font-bold text-[#D97706]">{car.price} <span className="text-sm text-gray-400 font-normal">/ day</span></p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {car.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                    <CheckCircle size={16} className="text-[#D97706] shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Link href={`/book-taxi?vehicle=${car.id}`} className="flex-1">
                                <button className="w-full py-3 rounded-xl bg-[#1E3A8A] text-white font-bold hover:bg-[#D97706] transition-colors">
                                    Book Now
                                </button>
                            </Link>
                            <a href={`https://wa.me/+919149726260?text=I want to inquire about ${car.name}`} target="_blank" className="px-4 py-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 text-green-600 transition-all">
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 bg-[#D97706]/20 z-0"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Not sure which car fits your group?</h2>
                <p className="text-gray-300 mb-8 text-lg">Give us a call. We'll suggest the best vehicle based on your luggage and comfort needs.</p>
                <a href="tel:+919999999999" className="inline-flex items-center gap-3 bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-bold hover:bg-[#D97706] hover:text-white transition-all">
                    <Phone size={20} /> Call Support Now
                </a>
            </div>
        </div>

      </div>
    </main>
  );
}