import React from 'react';

const LOGO_URL = 'https://lh3.googleusercontent.com/aida/ALJJyrCiweoSW2UEurn1BwG-9Ey9p5N7oqUzws2fh30xaTyPF84Sdd4s_Daxc3R49tFTQuGWfh02f_uTFoKa8dYnyn-7SNKqqwbsHDIvMAHpLl6WQl1CrhGlEOzccw0WcCvTAuVTLjkkTJanzISpIChNNmseM90yHnE6GsUSY7a3JrMiw_0N5s7PkFjvosllLdz8Ij0Juvf5eJmx6WpITmsUtuljt5Jd-BdalgyCZa5tL-g';
const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacnR8gkBoAslMZKSI5RplHbnmHJz5O3Iq75V4sIafYZ-jVv9VjHH1hm5ApQjLB-6YznMGCBZLaXdzIKXEv3vuxyF3VLQLd1FPk8S9nNJWorK8yoXhYzPxDjd66wvk1lCC1Vxa44jVWp1k-Rl65qIVJ3opFms_aQUMhb2Ft55fzjH0GphHZC2S1_vQAPNa-GkaWEuMvps3hgB23EcSLpP728q7e9344xUZLMqcy6Q';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#fff9ef]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#1B1B2F]/10">
      <div className="max-w-6xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand & Wordmark */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <img
            alt="Ranpriyasinh Wordmark Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
            onError={(e) => {
              // Graceful fallback if image CDN is unreachable offline
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-extrabold text-xl sm:text-2xl text-[#1e1b14] tracking-tight">
            Ranpriyasinh
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#514532] bg-[#f4ede1] px-2 py-0.5 rounded-full border border-[#1B1B2F]/20 ml-1 hidden xs:inline-block">
            Solo Dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#514532]">
          <a href="#services" className="hover:text-[#1B1B2F] transition-colors py-1">Services</a>
          <a href="#process" className="hover:text-[#1B1B2F] transition-colors py-1">Process</a>
          <a href="#work" className="hover:text-[#1B1B2F] transition-colors py-1">Selected Work</a>
          <a href="#comparison" className="hover:text-[#1B1B2F] transition-colors py-1">Why Solo?</a>
          <a href="#about" className="hover:text-[#1B1B2F] transition-colors py-1">About</a>
          <a href="#pricing" className="hover:text-[#1B1B2F] transition-colors py-1">Packages</a>
          <a href="#faq" className="hover:text-[#1B1B2F] transition-colors py-1">FAQ</a>
        </nav>

        {/* Right CTA & Avatar Indicator */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#ffb703] text-[#1B1B2F] font-bold text-sm shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] hover:bg-[#ffba27] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            Let's talk
          </a>
          <a
            href="#about"
            className="relative flex items-center justify-center p-0.5 rounded-full border-2 border-[#1B1B2F] shadow-[2px_2px_0px_#1B1B2F] cursor-pointer hover:scale-105 transition-transform"
            title="Ranpriyasinh - Available for 1 project"
          >
            <img
              alt="Ranpriyasinh Profile"
              className="w-8 h-8 rounded-full object-cover object-top"
              src={AVATAR_URL}
            />
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
