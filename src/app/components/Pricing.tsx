import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="bg-[#faf3e7] p-6 sm:p-10 rounded-3xl border-2 border-[#1B1B2F] flex flex-col gap-8 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)]">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#12A594] tracking-wider uppercase block mb-1">
            Flexible Engagement
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            Tailored Project Packages
          </h2>
          <p className="text-sm sm:text-base text-[#514532] font-medium mt-1">
            Every business is unique. We define your exact scope on a 20-min chat and provide an itemized fixed quote.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Package 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-6 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">Starter Business Site</h4>
                <span className="text-xs bg-[#f4ede1] text-[#514532] font-extrabold px-2.5 py-1 rounded-md border border-[#1B1B2F]/20">
                  ~10 Days
                </span>
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#12A594] uppercase tracking-wider block mb-0.5">
                  Fast Turnaround
                </span>
                <div className="font-extrabold text-2xl text-[#1B1B2F] leading-tight">
                  Custom Fixed Quote
                </div>
                <span className="text-xs font-semibold text-[#514532]">Tailored to your business needs</span>
              </div>
              <ul className="text-xs sm:text-sm text-[#514532] flex flex-col gap-2.5 font-medium border-t border-[#1B1B2F]/10 pt-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Up to 5 fast, responsive pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Google Maps + Local SEO Setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Contact inquiries direct to WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Free hosting setup on Cloudflare</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3 text-center bg-[#f4ede1] text-[#1B1B2F] font-bold text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 active:shadow-none hover:bg-[#e8e2d6] transition-all cursor-pointer"
              href="#contact"
            >
              Inquire for Starter Site
            </a>
          </div>

          {/* Package 2 (Most Popular) */}
          <div className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-6 relative hover:-translate-y-1 transition-transform">
            <div className="absolute -top-3.5 right-4 bg-[#FF5A4E] text-white text-xs font-extrabold px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#1B1B2F] border border-[#1B1B2F] rotate-1">
              Most Requested
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">Custom Web App / Portal</h4>
                <span className="text-xs bg-[#FFB703] text-[#1B1B2F] font-extrabold px-2.5 py-1 rounded-md border border-[#1B1B2F]">
                  ~3 Weeks
                </span>
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#3A86FF] uppercase tracking-wider block mb-0.5">
                  Full-Stack Solution
                </span>
                <div className="font-extrabold text-2xl text-[#1B1B2F] leading-tight">
                  Custom Fixed Quote
                </div>
                <span className="text-xs font-semibold text-[#514532]">Scoped to your exact workflow</span>
              </div>
              <ul className="text-xs sm:text-sm text-[#514532] flex flex-col gap-2.5 font-medium border-t border-[#1B1B2F]/10 pt-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>User auth & customer login portal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Admin dashboard to manage records</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Razorpay UPI / Stripe payment integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Automated WhatsApp/Email confirmations</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3.5 text-center bg-[#FFB703] text-[#1B1B2F] font-extrabold text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 active:shadow-none hover:bg-[#ffba27] transition-all cursor-pointer"
              href="#contact"
            >
              Build My Web App
            </a>
          </div>

          {/* Package 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-6 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">Full Mobile App (iOS & Android)</h4>
                <span className="text-xs bg-[#f4ede1] text-[#514532] font-extrabold px-2.5 py-1 rounded-md border border-[#1B1B2F]/20">
                  ~5 Weeks
                </span>
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#FF5A4E] uppercase tracking-wider block mb-0.5">
                  Cross-Platform Native
                </span>
                <div className="font-extrabold text-2xl text-[#1B1B2F] leading-tight">
                  Custom Fixed Quote
                </div>
                <span className="text-xs font-semibold text-[#514532]">Complete App Store & Play Store</span>
              </div>
              <ul className="text-xs sm:text-sm text-[#514532] flex flex-col gap-2.5 font-medium border-t border-[#1B1B2F]/10 pt-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>React Native app for both iPhone and Android</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Complete App Store & Play Store publishing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>Push notifications, camera access, offline mode</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0">
                    check_circle
                  </span>
                  <span>45 days priority support included</span>
                </li>
              </ul>
            </div>
            <a
              className="w-full py-3 text-center bg-[#f4ede1] text-[#1B1B2F] font-bold text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 active:shadow-none hover:bg-[#e8e2d6] transition-all cursor-pointer"
              href="#contact"
            >
              Inquire for Mobile App
            </a>
          </div>
        </div>

        {/* Custom Scope Callout */}
        <div className="p-4 bg-white rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] text-center">
          <p className="text-xs sm:text-sm text-[#514532] font-semibold">
            💡 Zero surprise bills: What is agreed in your 1-page proposal is the exact final price you pay. Free 20-min friendly chat with no sales pressure.
          </p>
        </div>
      </div>
    </section>
  );
};
