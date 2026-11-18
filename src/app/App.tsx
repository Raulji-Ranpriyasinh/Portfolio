import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { SoloVsAgency } from './components/SoloVsAgency';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fff9ef] text-[#1e1b14] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 pt-20 pb-36 md:pb-16 flex flex-col w-full">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <SoloVsAgency />
        <About />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </main>

      {/* Mobile Sticky Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
