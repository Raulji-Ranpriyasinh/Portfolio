import React from 'react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="bg-[#faf3e7] p-6 sm:p-10 rounded-3xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)] border-2 border-[#1B1B2F] flex flex-col gap-8">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#FF5A4E] tracking-wider uppercase block mb-1">
            No Mysteries
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-[#514532] font-medium mt-1">
            4 transparent stages from first phone call to live launch.
          </p>
        </div>

        {/* 4 Steps: 1 col on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {/* Step 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-3 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#FFB703] text-[#1B1B2F] font-extrabold flex items-center justify-center text-sm shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                  1
                </span>
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">The Chai & Chat</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                A friendly 30-minute WhatsApp or Google Meet call. You explain your daily operational headache in plain words. Zero developer jargon, zero sales push.
              </p>
            </div>
            <span className="text-xs font-bold text-[#12A594] inline-flex items-center gap-1 pt-2">
              <span className="material-symbols-outlined text-[1rem]">schedule</span>
              <span>30 Mins • Free Advice</span>
            </span>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-3 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#3A86FF] text-white font-extrabold flex items-center justify-center text-sm shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                  2
                </span>
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">The 1-Page Clear Plan</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                I send a straightforward 1-page summary, wireframe sketch, exact fixed price quote, and an exact calendar launch date. If it takes longer, that's on me.
              </p>
            </div>
            <span className="text-xs font-bold text-[#FF5A4E] inline-flex items-center gap-1 pt-2">
              <span className="material-symbols-outlined text-[1rem]">lock</span>
              <span>Locked Price • No Hidden Extras</span>
            </span>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-3 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#12A594] text-white font-extrabold flex items-center justify-center text-sm shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                  3
                </span>
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">Weekly Live Previews</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                Every Friday afternoon, you receive a private testing link on your phone. You tap around, test real features, and watch the app come to life week by week.
              </p>
            </div>
            <span className="text-xs font-bold text-[#3A86FF] inline-flex items-center gap-1 pt-2">
              <span className="material-symbols-outlined text-[1rem]">visibility</span>
              <span>Friday Phone Demo</span>
            </span>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col justify-between gap-3 hover:-translate-y-1 transition-transform">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#FFB703] text-[#1B1B2F] font-extrabold flex items-center justify-center text-sm shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                  4
                </span>
                <h4 className="font-extrabold text-lg text-[#1B1B2F]">Launch & Warm Handoff</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#514532] font-medium leading-relaxed">
                We go live together. I record a short 10-minute video showing you how to update photos or prices yourself, transfer 100% of credentials, and stay on 30-day free standby.
              </p>
            </div>
            <span className="text-xs font-bold text-[#12A594] inline-flex items-center gap-1 pt-2">
              <span className="material-symbols-outlined text-[1rem]">verified</span>
              <span>30 Days Free Standby Support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
