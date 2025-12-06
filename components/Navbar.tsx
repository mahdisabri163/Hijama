
import React, { useState, useEffect } from 'react';
import { Translation, Language, Page } from '../types';

interface NavbarProps {
  t: Translation;
  lang: Language;
  setLang: (l: Language) => void;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, lang, setLang, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Use solid background if scrolled OR if not on the home page
  const useSolidBackground = isScrolled || activePage !== 'home';

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    useSolidBackground 
      ? 'bg-white/95 backdrop-blur-md shadow-md py-2 text-emerald-950' 
      : 'bg-transparent py-4 text-emerald-950'
  }`;

  const linkClass = (page: Page) => `font-medium transition-colors duration-200 cursor-pointer text-sm uppercase tracking-wider ${
    activePage === page 
      ? 'text-amber-600 font-bold' 
      : 'hover:text-amber-600'
  }`;

  return (
    <nav className={navClass} role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label={t.nav.home}>
          {/* Official Logo Image */}
          <img 
            src="/images/logo.png" 
            alt="Hijama Harmony" 
            className="h-16 w-auto object-contain"
            width="64"
            height="64"
            decoding="async"
            onError={(e) => {
              // Fallback if logo is missing: Show text
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
              target.nextElementSibling?.classList.add('flex');
            }}
          />
          {/* Fallback Text Logo (Hidden by default) */}
          <span className="hidden items-center gap-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-emerald-900">
             <span className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-lg">H</span>
             Hijama Harmony
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('services')} className={linkClass('services')}>{t.nav.services}</button>
          <button onClick={() => onNavigate('about')} className={linkClass('about')}>{t.nav.about}</button>
          <button onClick={() => onNavigate('blog')} className={linkClass('blog')}>{t.nav.blog}</button>
          <button onClick={() => onNavigate('ai')} className={linkClass('ai')}>{t.nav.aiAssistant}</button>
          <button onClick={() => onNavigate('contact')} className={linkClass('contact')}>{t.nav.contact}</button>
          
          <div className="border-l border-emerald-200 pl-6 flex gap-3">
             <button 
                onClick={() => setLang('sv')} 
                className={`font-semibold ${lang === 'sv' ? 'text-emerald-800' : 'text-stone-400 hover:text-emerald-800'}`}
                aria-label="Byt till Svenska"
             >
               SV
             </button>
             <button 
                onClick={() => setLang('en')} 
                className={`font-semibold ${lang === 'en' ? 'text-emerald-800' : 'text-stone-400 hover:text-emerald-800'}`}
                aria-label="Switch to English"
             >
               EN
             </button>
          </div>

          <button 
            onClick={() => onNavigate('booking')} 
            className="bg-emerald-800 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-900/10"
          >
            {t.nav.booking}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-emerald-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-4 animate-fade-in-down h-screen">
          <button onClick={() => { onNavigate('services'); setIsMenuOpen(false); }} className="text-lg font-medium text-emerald-900 text-left">{t.nav.services}</button>
          <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="text-lg font-medium text-emerald-900 text-left">{t.nav.about}</button>
          <button onClick={() => { onNavigate('blog'); setIsMenuOpen(false); }} className="text-lg font-medium text-emerald-900 text-left">{t.nav.blog}</button>
          <button onClick={() => { onNavigate('ai'); setIsMenuOpen(false); }} className="text-lg font-medium text-emerald-900 text-left">{t.nav.aiAssistant}</button>
          <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="text-lg font-medium text-emerald-900 text-left">{t.nav.contact}</button>
          <button onClick={() => { onNavigate('booking'); setIsMenuOpen(false); }} className="text-lg font-medium text-amber-600 text-left">{t.nav.booking}</button>
          <div className="flex gap-4 pt-4 border-t border-gray-100">
             <button onClick={() => { setLang('sv'); setIsMenuOpen(false); }} className={lang === 'sv' ? 'font-bold text-emerald-900' : 'text-gray-500'}>Svenska</button>
             <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={lang === 'en' ? 'font-bold text-emerald-900' : 'text-gray-500'}>English</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
