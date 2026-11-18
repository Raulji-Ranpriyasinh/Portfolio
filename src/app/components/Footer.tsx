import React from 'react';
import { CONTACT_CONFIG } from '../config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center text-center gap-4 border-t-2 border-[#1B1B2F] bg-[#FFF8EC] w-full mt-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#1B1B2F] text-xs sm:text-sm font-extrabold rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F]">
        <span>Ranpriyasinh.dev</span>
        <span>•</span>
        <span>Vadodara, Gujarat</span>
      </div>

      <p className="text-xs sm:text-sm text-[#514532] font-medium max-w-md leading-relaxed">
        Handcrafted and maintained with clean code in Alkapuri, Vadodara. No cookies, zero tracking scripts, just honest craftsmanship.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-extrabold text-[#1B1B2F] pt-1">
        <a
          className="hover:text-[#FFB703] transition-colors underline decoration-2 underline-offset-4"
          href={CONTACT_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span>•</span>
        <a
          className="hover:text-[#FFB703] transition-colors underline decoration-2 underline-offset-4"
          href={CONTACT_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span>•</span>
        <a
          className="hover:text-[#FFB703] transition-colors underline decoration-2 underline-offset-4"
          href={`mailto:${CONTACT_CONFIG.email}`}
        >
          {CONTACT_CONFIG.email}
        </a>
      </div>

      <div className="pt-3">
        <button
          className="px-5 py-2.5 bg-white text-[#1B1B2F] text-xs sm:text-sm font-bold rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 active:shadow-none hover:bg-[#faf3e7] transition-all inline-flex items-center gap-1.5 cursor-pointer"
          onClick={scrollToTop}
        >
          <span>Back to Top</span>
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
        </button>
      </div>
    </footer>
  );
};
