import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p>Last Updated: December 2025</p>

            <h3 className="text-xl font-bold text-gray-900">1. Information We Collect</h3>
            <p>We collect information you provide directly to us when you book a trip, request a quote, or contact us. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, email address, and phone number.</li>
              <li>Travel preferences (dates, destination, dietary needs).</li>
              <li>Payment information (processed securely via third-party gateways).</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h3>
            <p>We use the information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process your bookings and send confirmations.</li>
              <li>Communicate with you regarding your trip updates.</li>
              <li>Improve our website and customer service.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900">3. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal data. We do not sell or trade your personal information to third parties.</p>

            <h3 className="text-xl font-bold text-gray-900">4. Contact Us</h3>
            <p>If you have questions about this policy, please contact us at bookings@dreamtrip.com.</p>
          </div>
        </div>
      </div>
    </main>
  );
}