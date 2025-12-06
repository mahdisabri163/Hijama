
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import { translations } from './constants';
import { Language, Page } from './types';

// Lazy load components for performance (Code Splitting)
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Booking = React.lazy(() => import('./components/Booking'));
const Contact = React.lazy(() => import('./components/Contact'));
const GeminiAssistant = React.lazy(() => import('./components/GeminiAssistant'));
const Blog = React.lazy(() => import('./components/Blog'));

// Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-stone-50">
    <div className="w-12 h-12 border-2 border-emerald-900 rounded-full animate-spin border-t-transparent"></div>
  </div>
);

// Custom Cursor Component with Inertia
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
      
      if (outlineRef.current) {
        outlineRef.current.animate({
          transform: `translate(${clientX}px, ${clientY}px)`
        }, { duration: 800, fill: 'forwards', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('cursor-hover')) {
        document.body.classList.add('hovering');
      } else {
        document.body.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      <div ref={dotRef} className="cursor-dot hidden md:block absolute top-0 left-0 -ml-[5px] -mt-[5px]"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block absolute top-0 left-0 -ml-[20px] -mt-[20px]"></div>
    </div>
  );
};

// Preloader Component
const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 1200); // Wait for exit animation
    }, 2500); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-emerald-950 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none scale-110'}`} role="status" aria-label="Loading">
      <div className="relative">
         <div className="w-32 h-32 border border-gold-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute inset-0 w-32 h-32 border-t-2 border-gold-400 rounded-full animate-[spin_2s_ease-in-out_infinite]"></div>
         <div className="absolute inset-0 flex items-center justify-center font-serif text-5xl text-gold-100 font-bold animate-pulse">
            H
         </div>
      </div>
      <div className="mt-8 overflow-hidden">
        <p className="font-serif text-gold-200 text-sm tracking-[0.5em] uppercase animate-[revealText_1s_ease-out_forwards]">
          Hijama Harmony
        </p>
      </div>
    </div>
  );
};

function App() {
  const [lang, setLang] = useState<Language>('sv');
  const [activePage, setActivePage] = useState<Page>('home');
  const [loading, setLoading] = useState(true);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      home: 'Hijama Harmony - Premium Cupping',
      services: 'Behandlingar & Priser - Hijama Harmony',
      about: 'Om Oss - Hijama Harmony',
      booking: 'Boka Tid - Hijama Harmony',
      contact: 'Kontakt - Hijama Harmony',
      ai: 'AI Hälsorådgivning - Hijama Harmony',
      blog: 'Blogg & Kunskap - Hijama Harmony'
    };
    document.title = pageTitles[activePage] || 'Hijama Harmony';
  }, [activePage]);

  // Handle navigation with scroll for sections on home page
  const handleNavigate = (page: Page) => {
    if (page === 'services') {
      setActivePage('home');
      // Use setTimeout to ensure DOM is ready if switching from another page
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setActivePage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="antialiased selection:bg-gold-500 selection:text-white min-h-screen flex flex-col relative overflow-hidden">
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          
          <div className="noise-overlay" aria-hidden="true"></div>

          {/* Optimized Living Ambient Background with will-change-transform */}
          <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-800/10 rounded-full blur-[150px] animate-aurora will-change-transform"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-600/10 rounded-full blur-[150px] animate-aurora will-change-transform" style={{ animationDelay: '-5s' }}></div>
             <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-sage-500/10 rounded-full blur-[120px] animate-aurora will-change-transform" style={{ animationDelay: '-10s' }}></div>
          </div>
          
          <Navbar 
            t={t} 
            lang={lang} 
            setLang={setLang} 
            activePage={activePage} 
            onNavigate={handleNavigate} 
          />
          
          <main className="flex-grow relative z-10" role="main">
            <Suspense fallback={<PageLoader />}>
              {activePage === 'home' && (
                <>
                  <Hero t={t} onNavigate={handleNavigate} />
                  <Testimonials t={t} />
                  {/* Services section embedded in Home page as requested */}
                  <Services t={t} onNavigate={handleNavigate} />
                </>
              )}
              {/* Removed separate Services route as it is now part of Home */}
              {activePage === 'about' && <About t={t} />}
              {activePage === 'blog' && <Blog t={t} />}
              {activePage === 'ai' && <GeminiAssistant t={t} />}
              {activePage === 'booking' && <Booking t={t} />}
              {activePage === 'contact' && <Contact t={t} />}
            </Suspense>
          </main>

          <Footer t={t} />
        </>
      )}
    </div>
  );
}

export default App;
