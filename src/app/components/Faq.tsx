import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Are there any surprise or hidden fees?',
    answer:
      'None. What is written in your 1-page proposal is the exact final price you pay. The only recurring costs belong to third-party services you own directly (like your domain name or server hosting, usually ₹800–₹1,500/year).',
  },
  {
    question: 'How long does my site or app take?',
    answer:
      'A standard 5-page business site takes 10 to 14 days. Custom web apps take 3 to 4 weeks. Mobile apps take roughly 5 to 6 weeks including app store verification. You receive an exact date before we begin.',
  },
  {
    question: 'Who actually owns the code and domain?',
    answer:
      'You do, 100%. I never hold clients hostage. Upon project sign-off, every GitHub repository, server credential, database password, and domain account is transferred to your ownership.',
  },
  {
    question: 'What if something breaks after launch?',
    answer:
      'Every project includes 30 days of free, zero-excuse bug fixing. If anything behaves unexpectedly, I patch it on the spot. After 30 days, I offer an optional flat ₹3,000/month peace-of-mind retainer.',
  },
  {
    question: 'I am not tech-savvy. Can I update things?',
    answer:
      'Yes! I build intuitive admin interfaces and record custom 5-to-10-minute Loom screen video walkthroughs explaining how to change prices, upload new products, or post announcements yourself in 2 minutes.',
  },
];

export const Faq: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggle = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="faq" className="px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <span className="text-xs sm:text-sm font-bold text-[#3A86FF] tracking-wider uppercase block mb-1">
          Clear Answers
        </span>
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
          Questions Clients Ask Me
        </h2>
      </div>

      <div className="flex flex-col gap-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = !!openIndexes[idx];
          return (
            <div
              key={idx}
              className={`bg-white p-5 sm:p-6 rounded-3xl border-2 border-[#1B1B2F] transition-all cursor-pointer ${
                isOpen ? 'shadow-[4px_4px_0px_#1B1B2F]' : 'shadow-[3px_3px_0px_#1B1B2F]'
              }`}
              onClick={() => toggle(idx)}
            >
              <div className="font-extrabold text-base sm:text-lg text-[#1B1B2F] flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-2xl text-[#1B1B2F] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </div>
              {isOpen && (
                <p className="text-xs sm:text-sm text-[#514532] font-medium mt-3 pt-3 border-t border-[#1B1B2F]/10 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
