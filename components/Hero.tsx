
import React, { useEffect, useRef } from 'react';
import { Translation, Page } from '../types';

interface HeroProps {
  t: Translation;
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ t, onNavigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth 60fps scrolling performance
      rafId = requestAnimationFrame(() => {
        if (heroRef.current && imageRef.current && textRef.current) {
          const scrollY = window.scrollY;
          
          // Only animate if element is in viewport context
          if (scrollY < window.innerHeight) {
            // Advanced Parallax
            imageRef.current.style.transform = `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.5}px)`;
            textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            textRef.current.style.opacity = `${1 - scrollY / 600}`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden" aria-label="Welcome">
      
      {/* Background Image: Male Subject (Therapy/Massage) */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
           {/* Performance: fetchPriority high for LCP, explicit dimensions, async decoding */}
           <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1600&v=3"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/1920x1080/e3ebe6/2d433c?text=Male+Therapy+Session";
            }}
            alt="Male client receiving therapeutic back treatment" 
            width="1600"
            height="900"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform scale-110"
          />
        </div>
        
        {/* Artistic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/30 via-transparent to-stone-100/90 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-stone-900/10"></div>
      </div>

      <div ref={textRef} className="container mx-auto px-6 z-10 text-center pt-10 will-change-transform flex flex-col items-center">
        
        {/* Badge */}
        <div className="mb-12 overflow-hidden">
          <div className="animate-fade-in-up">
            <span className="inline-block py-3 px-8 border border-white/40 rounded-full text-emerald-950 text-xs font-bold tracking-[0.4em] uppercase bg-white/20 backdrop-blur-xl shadow-lg hover:bg-white/40 transition-colors duration-500 cursor-hover">
              {t.hero.welcome}
            </span>
          </div>
        </div>
        
        {/* Editorial Headline with Blend Mode */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[11rem] font-medium mb-12 leading-[0.8] tracking-tighter mix-blend-difference text-white/90 select-none">
          {t.hero.headline.split(' ').map((word, i) => (
             <span key={i} className="mask-text inline-block mx-4">
               <span className={`delay-${(i+1)*200} hover:text-emerald-200 transition-colors duration-700`}>{word}</span>
             </span>
          ))}
        </h1>
        
        {/* Description */}
        <div className="overflow-hidden mb-16">
           <p className="font-sans text-lg md:text-xl text-stone-800 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up mix-blend-hard-light" style={{ animationDelay: '1000ms' }}>
             {t.hero.subheadline}
           </p>
        </div>
        
        {/* Call to Actions */}
        <div className="flex flex-col md:flex-row gap-8 justify-center animate-fade-in-up items-center" style={{ animationDelay: '1200ms' }}>
          <button 
            onClick={() => onNavigate('booking')}
            className="cursor-hover group relative w-64 h-20 bg-emerald-950 text-white rounded-full overflow-hidden shadow-2xl transition-transform hover:scale-105"
            aria-label={t.hero.cta}
          >
            {/* Liquid Fill Effect */}
            <div className="absolute inset-0 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
            <span className="relative z-10 font-medium text-lg tracking-widest uppercase group-hover:text-emerald-950 transition-colors duration-500">{t.hero.cta}</span>
          </button>
          
          <button 
            onClick={() => onNavigate('services')}
            className="cursor-hover group px-12 py-6 text-emerald-950 font-medium text-lg tracking-widest uppercase relative"
          >
            <span className="relative z-10 group-hover:text-gold-600 transition-colors duration-300">{t.nav.services}</span>
            <span className="absolute bottom-4 left-1/2 w-0 h-px bg-gold-600 group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float opacity-60 cursor-hover mix-blend-difference text-white" 
        onClick={() => window.scrollTo(0, window.innerHeight)}
        role="button"
        aria-label="Scroll down"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.scrollTo(0, window.innerHeight)}
      >
         <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
         <p className="text-[10px] uppercase tracking-[0.3em] mt-4 font-bold text-center -ml-[1px]">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
