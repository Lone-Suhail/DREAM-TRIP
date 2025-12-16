import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p>Welcome to Dream Trip. By booking with us, you agree to the following terms.</p>

            <h3 className="text-xl font-bold text-gray-900">1. Booking & Payments</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>An advance payment of 50% is required to confirm the booking.</li>
              <li>The remaining balance must be cleared 15 days before the travel date.</li>
              <li>Prices are subject to change during peak seasons (Christmas, New Year, May-June).</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900">2. Cancellation Policy</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations made 30 days prior: 80% refund.</li>
              <li>Cancellations made 15-29 days prior: 50% refund.</li>
              <li>Cancellations made 07-14 days prior: 25% refund.</li>
              <li>Cancellations made less than 07 days prior: No refund.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900">3. Itinerary Changes</h3>
            <p>Dream Trip reserves the right to alter the itinerary in case of force majeure events like landslides, heavy snowfall, or political unrest. Any extra cost incurred due to these unforeseen circumstances will be borne by the guest.</p>

            <h3 className="text-xl font-bold text-gray-900">4. Jurisdiction</h3>
            <p>All disputes are subject to the jurisdiction of the courts in Srinagar, Jammu & Kashmir.</p>
          </div>
        </div>
      </div>
    </main>
  );
}