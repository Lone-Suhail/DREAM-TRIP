import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D97706]">
           <Search size={40} />
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-[#1E3A8A] mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="space-y-3">
          <Link href="/">
            <button className="w-full py-3 bg-[#1E3A8A] text-white font-bold rounded-xl hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
               <Home size={18} /> Go Back Home
            </button>
          </Link>
          <Link href="/plan">
            <button className="w-full py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors">
               Plan a Trip Instead
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}