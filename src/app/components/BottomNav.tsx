import React, { useState, useEffect } from 'react';
import { CONTACT_CONFIG } from '../config';

export const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'services', 'process', 'about', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 150;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-[#fff9ef]/95 backdrop-blur-xl border-t-2 border-[#1B1B2F]/20 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      {/* Quick Action Buttons */}
      <div className="px-3 pt-2 pb-1.5 flex items-center gap-2">
        <a
          className="flex-1 h-11 rounded-full bg-white text-[#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-center gap-1.5 font-bold text-xs shadow-[2px_2px_0px_#1B1B2F] active:translate-y-0.5 active:shadow-none transition-all"
          href={`https://wa.me/${CONTACT_CONFIG.phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-lg text-emerald-600">chat</span>
          <span>WhatsApp</span>
        </a>
        <a
          className="flex-1 h-11 rounded-full bg-[#FFB703] text-[#1B1B2F] border-2 border-[#1B1B2F] flex items-center justify-center gap-1.5 font-bold text-xs shadow-[2px_2px_0px_#1B1B2F] active:translate-y-0.5 active:shadow-none transition-all"
          href="#contact"
        >
          <span className="material-symbols-outlined text-lg">calendar_today</span>
          <span>Book a Call</span>
        </a>
      </div>

      {/* Tab Navigation Icons */}
      <div className="flex justify-around items-center h-14 px-2">
        <a
          className={`flex flex-col items-center justify-center w-14 h-11 transition-colors ${
            activeTab === 'work' ? 'text-[#7d5800] font-extrabold' : 'text-[#514532] font-semibold'
          }`}
          href="#work"
          onClick={() => setActiveTab('work')}
        >
          <span className="material-symbols-outlined text-xl">folder_code</span>
          <span className="text-[0.6875rem]">Work</span>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-14 h-11 transition-colors ${
            activeTab === 'services' ? 'text-[#7d5800] font-extrabold' : 'text-[#514532] font-semibold'
          }`}
          href="#services"
          onClick={() => setActiveTab('services')}
        >
          <span className="material-symbols-outlined text-xl">handyman</span>
          <span className="text-[0.6875rem]">Services</span>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-14 h-11 transition-colors ${
            activeTab === 'process' ? 'text-[#7d5800] font-extrabold' : 'text-[#514532] font-semibold'
          }`}
          href="#process"
          onClick={() => setActiveTab('process')}
        >
          <span className="material-symbols-outlined text-xl">conversion_path</span>
          <span className="text-[0.6875rem]">Process</span>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-14 h-11 transition-colors ${
            activeTab === 'about' ? 'text-[#7d5800] font-extrabold' : 'text-[#514532] font-semibold'
          }`}
          href="#about"
          onClick={() => setActiveTab('about')}
        >
          <span className="material-symbols-outlined text-xl">person</span>
          <span className="text-[0.6875rem]">About</span>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-14 h-11 transition-colors ${
            activeTab === 'contact' ? 'text-[#7d5800] font-extrabold' : 'text-[#514532] font-semibold'
          }`}
          href="#contact"
          onClick={() => setActiveTab('contact')}
        >
          <span className="material-symbols-outlined text-xl">mail</span>
          <span className="text-[0.6875rem]">Contact</span>
        </a>
      </div>
    </nav>
  );
};
