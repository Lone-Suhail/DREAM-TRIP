import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E3A8A] mt-2">Start Your Journey</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="bg-[#1E3A8A] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#D97706]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Call Us Anytime</p>
                  <p className="text-xl font-bold">+91 9149726260</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#D97706]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email Us</p>
                  <p className="text-xl font-bold">info@dreamtrip.co.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#D97706]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Visit Our Office</p>
                  <p className="text-lg font-medium leading-relaxed">
                    Main Road Beehama, <br/>Ganderbal, J&K - 191201
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] outline-none" placeholder="+91..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] outline-none" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              <button className="w-full bg-[#D97706] hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;