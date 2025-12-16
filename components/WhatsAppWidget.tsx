import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  // REPLACE THIS WITH YOUR REAL NUMBER
  const phoneNumber = "919149726260"; 
  const message = "Hello! I am interested in planning a trip to Kashmir.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-bounce-slow flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      
      {/* Tooltip (Visible on Hover) */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppWidget;