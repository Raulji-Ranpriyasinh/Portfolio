import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../config';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [budget, setBudget] = useState('Flexible / Starter');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sentVia, setSentVia] = useState<'resend' | 'whatsapp'>('whatsapp');
  const [errorMessage, setErrorMessage] = useState('');

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `👋 Hi Ranpriyasinh, I submitted a project inquiry on your portfolio!\n\n` +
      `👤 Name: ${name}\n` +
      `📱 Phone: ${phone}\n` +
      `🛠️ Project Type: ${projectType}\n` +
      `💰 Budget: ${budget}\n` +
      (message ? `📝 Details: ${message}\n` : '')
    );
    return `https://wa.me/${CONTACT_CONFIG.phoneRaw}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Attempt to send via Resend (/api/send-email)
      const resendRes = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          projectType,
          budget,
          message,
        }),
      });

      const resendData = await resendRes.json();

      if (resendRes.ok && resendData.success) {
        setSentVia('resend');
        setSubmitted(true);
        return;
      }

      // If Resend gave an error (e.g., missing API key during local test without .env)
      if (resendData?.error) {
        setErrorMessage(resendData.error);
      }

      // 2. Fallback to Web3Forms if configured in config.ts
      if (CONTACT_CONFIG.web3FormsAccessKey) {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: CONTACT_CONFIG.web3FormsAccessKey,
            subject: `New Project Inquiry from ${name}`,
            to_email: CONTACT_CONFIG.email,
            Name: name,
            Phone: phone,
            ProjectType: projectType,
            Budget: budget,
            Message: message,
          }),
        });

        const web3Data = await web3Res.json();
        if (web3Data.success) {
          setSentVia('resend');
          setSubmitted(true);
          return;
        }
      }

      // 3. Fallback: prompt WhatsApp direct dispatch
      setSentVia('whatsapp');
      setSubmitted(true);
      window.open(buildWhatsAppUrl(), '_blank');
    } catch (err: any) {
      setErrorMessage(err.message || 'Network error');
      setSentVia('whatsapp');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto w-full">
      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[5px_5px_0px_#1B1B2F] border-2 border-[#1B1B2F] flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FFB703] text-[#1B1B2F] font-bold text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border border-[#1B1B2F] -rotate-1 mb-3">
            <span>Direct Contact</span>
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1B1B2F]">
            Let's Build Your Project
          </h2>
          <p className="text-sm sm:text-base text-[#514532] font-medium mt-1">
            Tell me about your business. I'll review and reply within a few hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 bg-[#FFF8EC] rounded-2xl border-2 border-[#1B1B2F] shadow-[3px_3px_0px_#1B1B2F] text-center flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-[#12A594]">
              check_circle
            </span>
            <h3 className="font-extrabold text-xl sm:text-2xl text-[#1B1B2F]">
              Thank you, {name || 'friend'}!
            </h3>
            <p className="text-sm sm:text-base text-[#514532] font-medium max-w-md">
              {sentVia === 'resend'
                ? `Your message has been sent to Ranpriyasinh's email inbox! I will review and get back to you shortly.`
                : `Your inquiry has been formatted. You can also chat directly on WhatsApp for an immediate response!`}
            </p>

            {errorMessage && (
              <p className="text-xs text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-300 max-w-md text-left font-mono">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#12A594] text-white font-bold text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 flex items-center justify-center gap-2 hover:bg-[#0f8e7f] transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Open in WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                  setErrorMessage('');
                }}
                className="px-5 py-3 bg-white text-[#1B1B2F] font-bold text-sm rounded-full shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-y-0.5 hover:bg-[#faf3e7] transition-all"
              >
                Send Another Note
              </button>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-xs sm:text-sm text-[#1B1B2F]">Your Name *</label>
              <input
                className="w-full px-4 py-3 rounded-2xl bg-[#f4ede1] text-[#1B1B2F] placeholder-[#514532]/60 shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] focus:outline-none focus:bg-white transition-all text-sm font-semibold"
                placeholder="e.g. Dr. Dave or Priya Patel"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone / WhatsApp */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-xs sm:text-sm text-[#1B1B2F]">WhatsApp or Phone Number *</label>
              <input
                className="w-full px-4 py-3 rounded-2xl bg-[#f4ede1] text-[#1B1B2F] placeholder-[#514532]/60 shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] focus:outline-none focus:bg-white transition-all text-sm font-semibold"
                placeholder="+91 98XXX XXXXX"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Project Type Pill Selector */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs sm:text-sm text-[#1B1B2F]">
                What are you looking to build?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-extrabold">
                {[
                  'Business Website',
                  'Custom Web App',
                  'Mobile App (iOS/Android)',
                  'WhatsApp / AI Bot',
                ].map((item) => {
                  const isChecked = projectType === item;
                  return (
                    <label
                      key={item}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl cursor-pointer shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] transition-all select-none ${
                        isChecked ? 'bg-[#FFB703] text-[#1B1B2F]' : 'bg-[#f4ede1] text-[#1B1B2F] hover:bg-[#eee7dc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="project_type"
                        value={item}
                        checked={isChecked}
                        onChange={() => setProjectType(item)}
                        className="accent-[#1B1B2F] w-4 h-4 cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Estimated Budget / Scale */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs sm:text-sm text-[#1B1B2F]">
                Project Scale / Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-bold">
                {[
                  'Flexible / Starter',
                  'Growth Project',
                  'Comprehensive',
                  'Open to Discuss',
                ].map((item) => {
                  const isChecked = budget === item;
                  return (
                    <label
                      key={item}
                      className={`flex items-center justify-center p-2.5 rounded-2xl cursor-pointer shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] transition-all text-center select-none ${
                        isChecked ? 'bg-[#12A594] text-white' : 'bg-[#f4ede1] text-[#1B1B2F] hover:bg-[#eee7dc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={item}
                        checked={isChecked}
                        onChange={() => setBudget(item)}
                        className="hidden"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-xs sm:text-sm text-[#1B1B2F]">
                Tell me a bit about your idea
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-2xl bg-[#f4ede1] text-[#1B1B2F] placeholder-[#514532]/60 shadow-[2px_2px_0px_#1B1B2F] border-2 border-[#1B1B2F] focus:outline-none focus:bg-white transition-all text-sm font-medium"
                placeholder="What does your business do? What problem are you trying to solve?"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#FFB703] text-[#1B1B2F] font-extrabold text-base sm:text-lg rounded-full shadow-[3px_3px_0px_#1B1B2F] border-2 border-[#1B1B2F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#ffba27] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1 disabled:opacity-50"
              type="submit"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message & Get Quote'}</span>
              <span className="material-symbols-outlined text-[1.25rem]">send</span>
            </button>
          </form>
        )}

        {/* Quick Channels */}
        <div className="pt-4 border-t border-[#1B1B2F]/15 flex flex-col gap-2.5">
          <span className="text-xs text-[#514532] font-bold text-center">
            Prefer direct channels?
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-center">
            <a
              className="p-3 rounded-2xl bg-emerald-50 text-emerald-900 border-2 border-[#1B1B2F] shadow-[2px_2px_0px_#1B1B2F] flex items-center justify-center gap-2 active:translate-y-0.5 hover:bg-emerald-100 transition-all cursor-pointer"
              href={`https://wa.me/${CONTACT_CONFIG.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base text-emerald-700">chat</span>
              <span>WhatsApp Chat ({CONTACT_CONFIG.phone})</span>
            </a>
            <a
              className="p-3 rounded-2xl bg-[#f4ede1] text-[#1B1B2F] border-2 border-[#1B1B2F] shadow-[2px_2px_0px_#1B1B2F] flex items-center justify-center gap-2 active:translate-y-0.5 hover:bg-[#eee7dc] transition-all cursor-pointer"
              href={`mailto:${CONTACT_CONFIG.email}`}
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>Email: {CONTACT_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
