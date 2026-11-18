import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#514532] tracking-wider uppercase block mb-1">
            Services
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            What I Can Build For You
          </h2>
        </div>
        <div className="bg-[#FFB703] text-[#1B1B2F] text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] rotate-2">
          Full Stack
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Card 1: Fast Business Websites */}
        <div className="bg-[#FFB703] p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 text-[#1B1B2F] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#1B1B2F] flex items-center justify-center shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
                <span className="material-symbols-outlined text-2xl">storefront</span>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider bg-white/90 text-[#1B1B2F] px-2.5 py-1 rounded-full border border-[#1B1B2F]">
                Web
              </span>
            </div>
            <h3 className="font-extrabold text-xl sm:text-2xl mt-1">Fast Business Websites</h3>
            <p className="text-sm sm:text-base leading-relaxed font-medium opacity-95">
              Fast, clean, mobile-first websites designed so nearby customers find you on Google, tap your phone number, or get directions on Google Maps without clunky page loads.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-extrabold">Ideal for:</span>
            <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Clinics & Doctors
            </span>
            <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Boutique Retail
            </span>
            <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Consultants
            </span>
          </div>
        </div>

        {/* Service Card 2: Custom Web Apps & Portals */}
        <div className="bg-[#3A86FF] p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#3A86FF] flex items-center justify-center shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
                <span className="material-symbols-outlined text-2xl">dashboard_customize</span>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider bg-white text-[#1B1B2F] px-2.5 py-1 rounded-full border border-[#1B1B2F]">
                Custom Tools
              </span>
            </div>
            <h3 className="font-extrabold text-xl sm:text-2xl mt-1 text-white">Custom Web Apps & Portals</h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/95 font-medium">
              Internal team dashboards, appointment booking systems, inventory sheets, and vendor portals that finally retire fragile, messy spreadsheets and manual notebooks.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Next.js
            </span>
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              FastAPI / Python
            </span>
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              PostgreSQL
            </span>
          </div>
        </div>

        {/* Service Card 3: Mobile Apps */}
        <div className="bg-[#12A594] p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#12A594] flex items-center justify-center shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider bg-white text-[#1B1B2F] px-2.5 py-1 rounded-full border border-[#1B1B2F]">
                Mobile
              </span>
            </div>
            <h3 className="font-extrabold text-xl sm:text-2xl mt-1 text-white">Mobile Apps (iOS & Android)</h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/95 font-medium">
              Single unified codebase using React Native. Smooth 60fps animations, push notifications, offline syncing, camera scanning, and submission directly to Apple App Store & Google Play Store.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Push Alerts
            </span>
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Offline Mode
            </span>
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              UPI / Stripe
            </span>
          </div>
        </div>

        {/* Service Card 4: Backend & WhatsApp Bots */}
        <div className="bg-[#FF5A4E] p-6 rounded-3xl shadow-[4px_4px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-4 text-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1B1B2F] transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-white text-[#FF5A4E] flex items-center justify-center shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider bg-white text-[#1B1B2F] px-2.5 py-1 rounded-full border border-[#1B1B2F]">
                Automation
              </span>
            </div>
            <h3 className="font-extrabold text-xl sm:text-2xl mt-1 text-white">Backend APIs & WhatsApp Chatbots</h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/95 font-medium">
              Custom WhatsApp bots that answer FAQs, confirm bookings, and take orders automatically at 2 AM — without robotic confusion or costly third-party subscriptions.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              WhatsApp Business API
            </span>
            <span className="text-xs bg-white text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              FastAPI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
