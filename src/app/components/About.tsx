import React from 'react';

const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacnR8gkBoAslMZKSI5RplHbnmHJz5O3Iq75V4sIafYZ-jVv9VjHH1hm5ApQjLB-6YznMGCBZLaXdzIKXEv3vuxyF3VLQLd1FPk8S9nNJWorK8yoXhYzPxDjd66wvk1lCC1Vxa44jVWp1k-Rl65qIVJ3opFms_aQUMhb2Ft55fzjH0GphHZC2S1_vQAPNa-GkaWEuMvps3hgB23EcSLpP728q7e9344xUZLMqcy6Q';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto w-full">
      <div className="mb-8">
        <span className="text-xs sm:text-sm font-bold text-[#FF5A4E] tracking-wider uppercase block mb-1">
          The Craftsman
        </span>
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
          Meet Ranpriyasinh
        </h2>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[5px_5px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col gap-6">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex-shrink-0">
            <img
              alt="Ranpriyasinh Developer"
              className="w-full h-full object-cover object-top"
              src={AVATAR_URL}
            />
          </div>
          <div>
            <h3 className="font-extrabold text-2xl text-[#1B1B2F]">Ranpriyasinh</h3>
            <p className="text-sm sm:text-base text-[#514532] font-semibold">
              Independent Full-Stack Developer
            </p>
            <span className="inline-block mt-2 text-xs font-extrabold bg-[#12A594] text-white px-3 py-1 rounded-full shadow-[1px_1px_0px_#1B1B2F] border border-[#1B1B2F]">
              Vadodara, Gujarat, India
            </span>
          </div>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-3 text-sm sm:text-base text-[#514532] font-medium leading-relaxed">
          <p>
            I started coding because I loved building things people use every day. Over the past 6 years, I watched dozens of local Gujarat business owners get burned by big agencies who overpromised, charged heavy markups, and left them with broken templates.
          </p>
          <p>
            I believe in doing the exact opposite: simple, robust code that loads instantly, clear communication in English or Gujarati, and software that actually earns its keep.
          </p>
        </div>

        {/* Fast Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="bg-[#f4ede1] p-3.5 rounded-2xl border border-[#1B1B2F]/20 shadow-[2px_2px_0px_#1B1B2F]">
            <span className="text-xs text-[#514532] block font-semibold mb-0.5">📍 Based in</span>
            <span className="text-sm font-extrabold text-[#1B1B2F]">Alkapuri, Vadodara</span>
          </div>
          <div className="bg-[#f4ede1] p-3.5 rounded-2xl border border-[#1B1B2F]/20 shadow-[2px_2px_0px_#1B1B2F]">
            <span className="text-xs text-[#514532] block font-semibold mb-0.5">🗣️ Languages</span>
            <span className="text-sm font-extrabold text-[#1B1B2F]">English, Gujarati, Hindi</span>
          </div>
          <div className="bg-[#f4ede1] p-3.5 rounded-2xl border border-[#1B1B2F]/20 shadow-[2px_2px_0px_#1B1B2F]">
            <span className="text-xs text-[#514532] block font-semibold mb-0.5">☕ Daily Engine</span>
            <span className="text-sm font-extrabold text-[#1B1B2F]">Adrak & Masala Chai</span>
          </div>
          <div className="bg-[#f4ede1] p-3.5 rounded-2xl border border-[#1B1B2F]/20 shadow-[2px_2px_0px_#1B1B2F]">
            <span className="text-xs text-[#514532] block font-semibold mb-0.5">⏱️ Work Policy</span>
            <span className="text-sm font-extrabold text-[#1B1B2F]">Max 2 projects at once</span>
          </div>
        </div>

        {/* Core Tech Chips */}
        <div className="pt-2 border-t border-[#1B1B2F]/10">
          <span className="text-xs font-extrabold text-[#514532] uppercase tracking-wider block mb-3">
            Everyday Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'React / Next.js',
              'React Native',
              'Python (FastAPI)',
              'PostgreSQL',
              'Tailwind CSS',
              'Razorpay & Stripe',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-[#f4ede1] text-[#1B1B2F] font-bold text-xs sm:text-sm rounded-xl shadow-[2px_2px_0px_#1B1B2F] border border-[#1B1B2F] hover:bg-[#ffb703] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
