import React from 'react';
import { CONTACT_CONFIG } from '../config';

const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacnR8gkBoAslMZKSI5RplHbnmHJz5O3Iq75V4sIafYZ-jVv9VjHH1hm5ApQjLB-6YznMGCBZLaXdzIKXEv3vuxyF3VLQLd1FPk8S9nNJWorK8yoXhYzPxDjd66wvk1lCC1Vxa44jVWp1k-Rl65qIVJ3opFms_aQUMhb2Ft55fzjH0GphHZC2S1_vQAPNa-GkaWEuMvps3hgB23EcSLpP728q7e9344xUZLMqcy6Q';

export const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-12 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (Content & CTAs) */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          {/* Top Chips & Stickers */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#1B1B2F] font-bold text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] -rotate-1 hover:rotate-0 transition-transform">
              <span>👋 Kem Cho! I'm Ranpriyasinh</span>
              <span className="text-[#514532] font-semibold text-xs">(Vadodara, GJ)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#12A594] text-white font-bold text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] rotate-1 hover:rotate-0 transition-transform">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Taking 1 new project this month</span>
            </div>
          </div>

          {/* Main Headline & Narrative */}
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1B1B2F] tracking-tight leading-[1.18]">
              Your business, online.<br className="hidden sm:inline" />{' '}
              <span className="bg-[#FFB703] px-2.5 py-0.5 rounded-lg inline-block shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] rotate-[-0.5deg]">
                Built by one person
              </span>{' '}
              who actually answers the phone.
            </h1>
            <p className="text-base sm:text-lg text-[#514532] font-medium leading-relaxed max-w-xl">
              No agency runarounds. No tech jargon. I design and engineer swift websites, reliable web apps, and native-grade mobile apps for local clinics, retailers, coaches, and boutique founders.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              className="w-full sm:w-auto py-3.5 px-6 bg-[#12A594] text-white rounded-full font-bold text-sm sm:text-base shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#0f8e7f] transition-all cursor-pointer"
              href={`https://wa.me/${CONTACT_CONFIG.phoneRaw}?text=Hi%20Ranpriyasinh,%20I'd%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[1.25rem]">chat</span>
              <span>WhatsApp Me Directly</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium ml-1">~15 min reply</span>
            </a>
            <a
              className="w-full sm:w-auto py-3 px-6 bg-white text-[#1B1B2F] rounded-full font-bold text-sm sm:text-base shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#faf3e7] transition-all cursor-pointer"
              href="#work"
            >
              <span>See What I've Built</span>
              <span className="material-symbols-outlined text-[1.125rem]">arrow_downward</span>
            </a>
          </div>

          {/* Reassurance Pills */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2 text-center max-w-lg">
            <div className="bg-[#f4ede1] p-2.5 sm:p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col items-center justify-center">
              <span className="font-bold text-xs sm:text-sm text-[#1B1B2F]">⚡ Fixed Price</span>
              <span className="text-[0.6875rem] sm:text-xs text-[#514532] font-semibold mt-0.5">No surprise bills</span>
            </div>
            <div className="bg-[#f4ede1] p-2.5 sm:p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col items-center justify-center">
              <span className="font-bold text-xs sm:text-sm text-[#1B1B2F]">🗣️ English & Guj</span>
              <span className="text-[0.6875rem] sm:text-xs text-[#514532] font-semibold mt-0.5">Zero tech-jargon</span>
            </div>
            <div className="bg-[#f4ede1] p-2.5 sm:p-3 rounded-2xl shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col items-center justify-center">
              <span className="font-bold text-xs sm:text-sm text-[#1B1B2F]">📱 iOS + Android</span>
              <span className="text-[0.6875rem] sm:text-xs text-[#514532] font-semibold mt-0.5">Ready for App Store</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end my-2 sm:my-0">
          <div className="relative bg-white p-3.5 sm:p-4 rounded-3xl shadow-[5px_5px_0px_#1B1B2F] border-2 border-[#1B1B2F] -rotate-2 max-w-[340px] sm:max-w-[360px] w-full transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-2xl bg-[#f4ede1] aspect-square relative border border-[#1B1B2F]/20">
              <img
                alt="Ranpriyasinh - Solo Developer in Vadodara"
                className="w-full h-full object-cover object-top"
                src={AVATAR_URL}
              />
              <div className="absolute top-3 right-3 bg-[#FF5A4E] text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#1B1B2F] border border-[#1B1B2F] rotate-3">
                100% Solo Craft
              </div>
            </div>
            <div className="mt-3.5 flex items-center justify-between px-1">
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-[#1B1B2F] leading-tight">Ranpriyasinh</span>
                <span className="text-xs font-semibold text-[#514532]">Solo Developer • Vadodara, Gujarat</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 bg-[#f4ede1] text-[#1B1B2F] text-xs font-bold rounded-lg shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
                ☕ Adrak Chai & Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
