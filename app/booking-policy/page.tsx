import React from 'react';
import { Shield, CreditCard, Clock, AlertTriangle } from 'lucide-react';

export default function BookingPolicy() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">Legal & Terms</span>
          <h1 className="text-4xl font-serif font-bold text-[#1E3A8A] mt-2">Booking Policies</h1>
          <p className="text-gray-500 mt-2">Transparency is the key to a happy journey.</p>
        </div>

        <div className="space-y-12">
          
          {/* Section 1: Payment */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <CreditCard size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#1E3A8A]">Payment Policy</h2>
             </div>
             <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>To confirm a booking, an advance payment of <strong>30% to 50%</strong> of the total package cost is required.</li>
                <li>The remaining balance must be paid <strong>on arrival</strong> in Srinagar (Cash or UPI).</li>
                <li>For luxury packages (5-star hotels), 100% advance payment may be required depending on hotel policies.</li>
             </ul>
          </section>

          {/* Section 2: Cancellation */}
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                   <Clock size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#1E3A8A]">Cancellation & Refunds</h2>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-sm text-left text-gray-600">
                 <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                   <tr>
                     <th className="px-6 py-3 rounded-l-lg">Time Before Travel</th>
                     <th className="px-6 py-3 rounded-r-lg">Refund Amount</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="bg-white border-b">
                     <td className="px-6 py-4 font-medium">30 Days or more</td>
                     <td className="px-6 py-4 text-green-600 font-bold">80% Refund</td>
                   </tr>
                   <tr className="bg-white border-b">
                     <td className="px-6 py-4 font-medium">15 to 29 Days</td>
                     <td className="px-6 py-4 text-yellow-600 font-bold">50% Refund</td>
                   </tr>
                   <tr className="bg-white border-b">
                     <td className="px-6 py-4 font-medium">7 to 14 Days</td>
                     <td className="px-6 py-4 text-orange-600 font-bold">25% Refund</td>
                   </tr>
                   <tr className="bg-white">
                     <td className="px-6 py-4 font-medium">Less than 7 Days</td>
                     <td className="px-6 py-4 text-red-600 font-bold">No Refund</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </section>

          {/* Section 3: Force Majeure */}
          <section className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-orange-700">
                   <AlertTriangle size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#1E3A8A]">Important Note (Kashmir Specific)</h2>
             </div>
             <p className="text-gray-700 leading-relaxed">
                In case of <strong>natural calamities, heavy snowfall blocking roads, or political disturbances</strong> (Force Majeure):
             </p>
             <ul className="space-y-2 mt-3 text-gray-600 list-disc pl-5">
                <li>We will try our best to provide an alternative itinerary.</li>
                <li>Refunds will depend on the Hotel and Transporter's policy for that specific situation.</li>
                <li>If the Gondola/Cable car is closed due to bad weather, we will refund the ticket amount, but the service charge may be deducted.</li>
             </ul>
          </section>

        </div>
      </div>
    </main>
  );
}