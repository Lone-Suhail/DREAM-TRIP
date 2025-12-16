import React from 'react';
import { destinations } from '../../../data/destinations';
import { MapPin, Camera, ArrowLeft, Calendar, Mountain, Car, Sun, CloudSnow, Wind, Compass, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DestinationImage from '../../../components/DestinationImage';

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    id: dest.id,
  }));
}

export default async function DestinationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = destinations.find((d) => d.id === id);

  if (!place) return notFound();

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* --- 1. HERO SECTION (Fixed Overlap) --- */}
      <div className="relative h-[90vh] w-full bg-slate-900 overflow-hidden">
        <DestinationImage 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover opacity-90 animate-slow-zoom"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

        {/* Content Container - Split Top/Bottom to avoid Header Overlap */}
        {/* Added pt-32 to push the Top content down below the Navbar */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-20 pb-16 pt-32">
            
            {/* Top: Back Button */}
            <div>
                <Link 
                href="/destinations" 
                className="inline-flex items-center gap-2 text-white/90 hover:text-[#D97706] transition-colors font-medium tracking-wide w-fit group"
                >
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-[#D97706] transition-colors border border-white/20">
                    <ArrowLeft size={20} />
                    </div>
                    <span className="drop-shadow-md">Back to All Destinations</span>
                </Link>
            </div>

            {/* Bottom: Title & Info */}
            <div>
                <span className="text-[#D97706] font-bold tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up block">
                    Discover The Unseen
                </span>
                <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
                {place.name}
                </h1>
                <p className="text-xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed drop-shadow-lg border-l-4 border-[#D97706] pl-6 animate-fade-in-up delay-200">
                {place.brief}
                </p>
            </div>
        </div>
      </div>


      {/* --- 2. THE INTRO GRID --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Description */}
            <div className="lg:col-span-8">
                <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mb-8">About {place.name}</h2>
                <div className="prose prose-lg text-gray-600 leading-loose text-justify">
                   <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#D97706] first-letter:mr-3 first-letter:float-left">
                     {place.description}
                   </p>
                   <p className="mt-6">
                     Whether you are an adventure seeker looking for the thrill of the mountains or a peace lover seeking silence by the river, {place.name} offers a perfect blend of nature and culture. It is a place where time stands still, and every view is a masterpiece.
                   </p>
                </div>

                {/* Tags */}
                <div className="mt-10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Famous For</h3>
                    <div className="flex flex-wrap gap-3">
                        {place.famousFor.map((item, idx) => (
                            <span key={idx} className="bg-blue-50 text-[#1E3A8A] px-5 py-2 rounded-full font-bold text-sm border border-blue-100">
                                # {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Quick Stats Card */}
            <div className="lg:col-span-4">
                <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Traveler's Essentials</h3>
                    
                    <div className="space-y-8 relative z-10">
                        <div className="flex items-start gap-4">
                            <Mountain className="text-[#D97706] shrink-0" size={24} />
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Altitude</p>
                                <p className="text-xl font-bold">2,730 m</p>
                                <p className="text-white/40 text-xs">Above Sea Level</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Car className="text-[#D97706] shrink-0" size={24} />
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Connectivity</p>
                                <p className="text-xl font-bold">Good Roads</p>
                                <p className="text-white/40 text-xs">Accessible by Cab/Bus</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Compass className="text-[#D97706] shrink-0" size={24} />
                            <div>
                                <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Ideal Duration</p>
                                <p className="text-xl font-bold">2 Days / 1 Night</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                         <p className="text-sm text-white/70 mb-4">Ready to explore this place?</p>
                         <Link href={`/book?title=Trip to ${encodeURIComponent(place.name)}`}>
                            <button className="w-full bg-white text-[#1E3A8A] font-bold py-4 rounded-xl hover:bg-[#D97706] hover:text-white transition-all shadow-lg">
                                Get a Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* --- 3. SEASONS OF THE PLACE --- */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Best Time To Visit</span>
                <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Seasons of {place.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Summer */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                        <Sun size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Summer (Apr - Jun)</h3>
                    <p className="text-gray-500 text-sm mb-4">Pleasant weather (15°C to 30°C). Perfect for sightseeing, trekking, and Shikara rides.</p>
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">Peak Season</span>
                </div>

                {/* Autumn */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                        <Wind size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Autumn (Sep - Nov)</h3>
                    <p className="text-gray-500 text-sm mb-4">Golden Chinar leaves everywhere. Crisp air and stunning photography opportunities.</p>
                    <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-full">Photographer's Favorite</span>
                </div>

                {/* Winter */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <CloudSnow size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Winter (Dec - Mar)</h3>
                    <p className="text-gray-500 text-sm mb-4">Snow wonderland! Temperatures drop below freezing. Ideal for skiing and snow activities.</p>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Adventure</span>
                </div>
            </div>
        </div>
      </div>


      {/* --- 4. EXPERIENCES (Activity Cards) --- */}
      <div className="container mx-auto px-4 py-24">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Things To Do</span>
                <h2 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Curated Experiences</h2>
            </div>
            <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-right">
                Don't just visit, immerse yourself. Here are the top rated activities in {place.name}.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {place.activities.map((activity, idx) => (
                <div key={idx} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                    {/* Background (Blurred version of main image for variety) */}
                    <DestinationImage 
                        src={place.image} 
                        alt={activity} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[#1E3A8A]/80 group-hover:bg-[#1E3A8A]/60 transition-colors"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                        <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-[#1E3A8A] transition-all">
                            <span className="font-bold">{idx + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">{activity}</h3>
                    </div>
                </div>
            ))}
         </div>
      </div>


      {/* --- 5. GALLERY GRID --- */}
      <div className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
             <h2 className="text-4xl font-serif font-bold mb-12 flex items-center gap-3">
                <Camera className="text-[#D97706]" /> Captured Moments
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
                     <DestinationImage src={place.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="View 1" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                     <DestinationImage src={place.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" alt="View 2" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                     <DestinationImage src={place.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" alt="View 3" />
                </div>
             </div>
        </div>
      </div>


      {/* --- 6. CTA BANNER --- */}
      <div className="bg-[#D97706] py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Fallen in love with {place.name}?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Let us customize a trip that includes {place.name} and its hidden gems.</p>
            <Link href={`/book?title=Trip to ${encodeURIComponent(place.name)}`}>
                <button className="bg-white text-[#D97706] px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-colors">
                    Plan My Trip Here
                </button>
            </Link>
        </div>
      </div>

    </main>
  );
}