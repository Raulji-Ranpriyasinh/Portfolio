import React from 'react';

export const SoloVsAgency: React.FC = () => {
  return (
    <section id="comparison" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="bg-[#FFF8EC] p-6 sm:p-10 rounded-3xl border-2 border-[#1B1B2F] flex flex-col gap-8 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)]">
        <div>
          <span className="text-xs sm:text-sm font-bold text-[#3A86FF] tracking-wider uppercase block mb-1">
            Honest Comparison
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            Why Hire a Solo Developer?
          </h2>
          <p className="text-sm sm:text-base text-[#514532] font-medium mt-1">
            Direct contact, craftsmanship, and real accountability.
          </p>
        </div>

        {/* Agency vs Ranpriyasinh Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Traditional Agency */}
          <div className="bg-[#eee7dc] p-6 rounded-3xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-xl text-[#514532]">Traditional Agency</h4>
              <span className="text-xs bg-[#FFDAD6] text-[#93000a] font-bold px-2.5 py-1 rounded-md border border-[#93000a]/20">
                High Overhead
              </span>
            </div>
            <ul className="text-xs sm:text-sm text-[#514532] flex flex-col gap-3 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#BA1A1A] font-bold flex-shrink-0 mt-0.5">
                  close
                </span>
                <span>You talk to account managers who don't know how to code.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#BA1A1A] font-bold flex-shrink-0 mt-0.5">
                  close
                </span>
                <span>Unpaid interns or rotated contractors end up building your core project.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#BA1A1A] font-bold flex-shrink-0 mt-0.5">
                  close
                </span>
                <span>Simple 5-minute text changes take 2 weeks of formal tickets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#BA1A1A] font-bold flex-shrink-0 mt-0.5">
                  close
                </span>
                <span>Bloated agency minimums start at ₹3,00,000+ to pay fancy office rents.</span>
              </li>
            </ul>
          </div>

          {/* With Ranpriyasinh */}
          <div className="bg-white p-6 rounded-3xl shadow-[5px_5px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col gap-4 relative">
            <div className="absolute -top-3.5 right-4 bg-[#FFB703] text-[#1B1B2F] text-xs font-extrabold px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#1B1B2F] border border-[#1B1B2F] rotate-2">
              The Human Way
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-xl text-[#1B1B2F]">Working with Ranpriyasinh</h4>
            </div>
            <ul className="text-xs sm:text-sm text-[#1B1B2F] flex flex-col gap-3 font-semibold">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0 mt-0.5">
                  check
                </span>
                <span>You talk directly to the person typing every single line of code.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0 mt-0.5">
                  check
                </span>
                <span>Same-day turnaround on revisions and direct WhatsApp voice notes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0 mt-0.5">
                  check
                </span>
                <span>Honest advice if you DON'T need an expensive feature.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#12A594] font-bold flex-shrink-0 mt-0.5">
                  check
                </span>
                <span>Only 2 active clients at a time. Your project gets total attention.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Guarantees */}
        <div className="bg-white p-6 rounded-3xl shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col gap-4">
          <h4 className="font-extrabold text-lg sm:text-xl text-[#1B1B2F]">My 4 Personal Guarantees</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 bg-[#f4ede1] rounded-2xl border border-[#1B1B2F]/20 flex flex-col gap-1">
              <span className="font-extrabold text-sm text-[#1B1B2F]">1. Fixed Price</span>
              <span className="text-xs text-[#514532] font-medium leading-tight">
                If it takes extra time, that is my cost, never yours.
              </span>
            </div>
            <div className="p-3.5 bg-[#f4ede1] rounded-2xl border border-[#1B1B2F]/20 flex flex-col gap-1">
              <span className="font-extrabold text-sm text-[#1B1B2F]">2. Weekly Previews</span>
              <span className="text-xs text-[#514532] font-medium leading-tight">
                Test every screen on your phone every Friday.
              </span>
            </div>
            <div className="p-3.5 bg-[#f4ede1] rounded-2xl border border-[#1B1B2F]/20 flex flex-col gap-1">
              <span className="font-extrabold text-sm text-[#1B1B2F]">3. 100% Ownership</span>
              <span className="text-xs text-[#514532] font-medium leading-tight">
                All GitHub code, accounts, and domains belong to you.
              </span>
            </div>
            <div className="p-3.5 bg-[#f4ede1] rounded-2xl border border-[#1B1B2F]/20 flex flex-col gap-1">
              <span className="font-extrabold text-sm text-[#1B1B2F]">4. 30 Days Free Help</span>
              <span className="text-xs text-[#514532] font-medium leading-tight">
                Post-launch bug repairs and walkthroughs on the house.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
