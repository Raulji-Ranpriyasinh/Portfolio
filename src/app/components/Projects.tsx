import React from 'react';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#12A594] tracking-wider uppercase block mb-1">
            Proof of Craft
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            Selected Work
          </h2>
        </div>
        <span className="text-xs sm:text-sm bg-white text-[#1B1B2F] font-bold px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
          Real Clients
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Case Study 1: Dr. Dave's Pediatric Clinic */}
        <div className="bg-white p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs bg-[#FFB703] text-[#1B1B2F] font-bold px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                Vadodara Healthcare
              </span>
              <span className="text-xs text-[#12A594] font-bold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#12A594] animate-pulse"></span>
                <span>Live & Active</span>
              </span>
            </div>
            <h3 className="font-extrabold text-xl text-[#1B1B2F]">
              Dr. Dave's Pediatric Clinic
            </h3>

            {/* Mini Mockup Frame */}
            <div className="bg-[#f4ede1] p-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-[#1B1B2F]/15 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-[#514532] font-bold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> Token #24 Serving
                </span>
                <span className="text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-semibold">
                  Avg Wait: 12 min
                </span>
              </div>
              <div className="h-2 w-full bg-[#eee7dc] rounded-full overflow-hidden border border-[#1B1B2F]/10">
                <div className="h-full bg-[#12A594] w-3/4 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#FF5A4E] uppercase tracking-wider">The Bottleneck:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Front desk swamped with 60+ daily calls for token booking. Distressed parents waiting up to 2 hours in a packed waiting lobby.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#12A594] uppercase tracking-wider">The Solution:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                A 3-tap mobile web app with instant automated WhatsApp token notifications and live queue tracker for parents to wait comfortably at home.
              </p>
            </div>
          </div>

          <div className="pt-2 bg-[#FFF8EC] p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-around text-center">
            <div>
              <span className="font-extrabold text-lg text-[#12A594] block">-45%</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">Clinic Wait Times</span>
            </div>
            <div className="w-[1.5px] h-8 bg-[#d5c4ac]"></div>
            <div>
              <span className="font-extrabold text-lg text-[#1B1B2F] block">1,200+</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">Monthly Bookings</span>
            </div>
          </div>
        </div>

        {/* Case Study 2: Surat Handloom & Fabrics */}
        <div className="bg-white p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs bg-[#3A86FF] text-white font-bold px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                Surat Textile
              </span>
              <span className="text-xs text-[#12A594] font-bold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#12A594] animate-pulse"></span>
                <span>Scaled 4G Shop</span>
              </span>
            </div>
            <h3 className="font-extrabold text-xl text-[#1B1B2F]">
              Surat Handloom & Fabrics
            </h3>

            {/* Mini Mockup Frame */}
            <div className="bg-[#f4ede1] p-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-[#1B1B2F]/15 flex items-center justify-between text-xs font-bold text-[#1B1B2F]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#3A86FF]">shopping_bag</span> 1-Click UPI Checkout
              </span>
              <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-[#1B1B2F]/20 text-[#12A594]">
                ⚡ 0.8s Load Time
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#FF5A4E] uppercase tracking-wider">The Bottleneck:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Managing orders through Instagram direct messages, losing customer details, and manually verifying UPI screenshot receipts one by one.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#12A594] uppercase tracking-wider">The Solution:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Lightweight, super-fast visual product catalog with instant Razorpay UPI checkout, zero manual verification, and automated courier label generation.
              </p>
            </div>
          </div>

          <div className="pt-2 bg-[#FFF8EC] p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-around text-center">
            <div>
              <span className="font-extrabold text-lg text-[#3A86FF] block">₹4.8 Lakh</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">1st Month Revenue</span>
            </div>
            <div className="w-[1.5px] h-8 bg-[#d5c4ac]"></div>
            <div>
              <span className="font-extrabold text-lg text-[#12A594] block">0</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">Lost Orders</span>
            </div>
          </div>
        </div>

        {/* Case Study 3: FieldForce Logistics App */}
        <div className="bg-white p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs bg-[#FF5A4E] text-white font-bold px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                Logistics & Fleet
              </span>
              <span className="text-xs text-[#12A594] font-bold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#12A594] animate-pulse"></span>
                <span>React Native</span>
              </span>
            </div>
            <h3 className="font-extrabold text-xl text-[#1B1B2F]">
              FieldForce Logistics App
            </h3>

            {/* Mini Mockup Frame */}
            <div className="bg-[#f4ede1] p-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-[#1B1B2F]/15 flex items-center justify-between text-xs font-bold text-[#1B1B2F]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#FF5A4E]">draw</span> Digital E-Sign on Glass
              </span>
              <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-[#1B1B2F]/20 text-[#12A594]">
                Offline Synced
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#FF5A4E] uppercase tracking-wider">The Bottleneck:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Delivery drivers carrying physical paper logbooks, resulting in lost signatures, delayed billings, and weekly invoice disputes with clients.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#12A594] uppercase tracking-wider">The Solution:</span>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Offline-first React Native Android & iOS app with GPS proof of delivery, on-screen customer signature, and instant automated PDF invoice dispatch.
              </p>
            </div>
          </div>

          <div className="pt-2 bg-[#FFF8EC] p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-around text-center">
            <div>
              <span className="font-extrabold text-lg text-[#12A594] block">Same-Day</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">Invoice Clearance</span>
            </div>
            <div className="w-[1.5px] h-8 bg-[#d5c4ac]"></div>
            <div>
              <span className="font-extrabold text-lg text-[#1B1B2F] block">Zero</span>
              <span className="text-[0.6875rem] text-[#514532] font-bold">Billing Disputes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
