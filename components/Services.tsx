
import React, { useState, useRef, MouseEvent } from 'react';
import { Translation, ServiceItem, CareInstruction, FAQItem, Page } from '../types';

interface ServicesProps {
  t: Translation;
  onNavigate: (page: Page) => void;
}

// 3D Tilt Card Component with Prismatic Effect
const TiltCard: React.FC<{ children: React.ReactNode; recommended?: boolean }> = ({ children, recommended }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Rotation (-5 to 5 degrees for subtle premium feel)
    const rotateY = ((x / rect.width) - 0.5) * 3; 
    const rotateX = ((y / rect.height) - 0.5) * -3;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    // Direct DOM manipulation for performance
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;

    if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
        glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
    if (glareRef.current) {
        glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full transition-transform duration-500 ease-out transform-gpu perspective-1000"
    >
      <div ref={cardRef} className={`relative h-full rounded-[2rem] p-8 flex flex-col transition-all duration-500 group overflow-hidden ${
        recommended 
          ? 'bg-[#FFFBF5] border border-gold-200/50 shadow-2xl shadow-gold-500/10' 
          : 'bg-white border border-stone-100 shadow-xl hover:shadow-2xl'
      }`}
      style={{ transformStyle: 'preserve-3d' }}>
        {children}
        
        {/* Prismatic Glare Effect */}
        <div 
          ref={glareRef}
          className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{ opacity: 0, transform: 'translateZ(1px)' }}
        />
        
        {/* Subtle Gradient Border on Hover */}
        <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 ${recommended ? 'border-gold-300/30' : 'border-emerald-900/10'}`}></div>
      </div>
    </div>
  );
};

const ServiceCardContent: React.FC<{ item: ServiceItem; recommended?: boolean; onBook: () => void }> = ({ item, recommended, onBook }) => {
  // Determine styling based on card type
  const iconStyle = item.id === 'wet' ? 'bg-blue-50 text-blue-500' : 
                    item.id === 'dry' ? 'bg-orange-50 text-orange-500' : 
                    'bg-amber-50 text-amber-500';
  
  return (
    <TiltCard recommended={recommended}>
      
      {/* Header Section: Icon & Badge */}
      <div className="flex justify-between items-start mb-6" style={{ transform: 'translateZ(20px)' }}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${iconStyle}`}>
            <span aria-hidden="true">{item.icon}</span>
          </div>
          
          {recommended && (
            <span className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-widest border border-stone-200">
              Populärast
            </span>
          )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-3xl text-emerald-950 font-medium mb-3 leading-tight" style={{ transform: 'translateZ(15px)' }}>
         {item.title}
      </h3>

      {/* Price - Prominent & Colored if recommended */}
      <div className="mb-6" style={{ transform: 'translateZ(15px)' }}>
         <span className={`font-serif text-4xl font-medium ${recommended ? 'text-amber-600' : 'text-emerald-950'}`}>
           {item.price}
         </span>
      </div>

      {/* Description */}
      <p className="text-stone-500 mb-8 leading-relaxed text-sm font-light min-h-[3rem]" style={{ transform: 'translateZ(10px)' }}>
        {item.description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-3 mb-10 flex-grow" style={{ transform: 'translateZ(10px)' }}>
        {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm group-inner">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${recommended ? 'bg-amber-100 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="group-inner-hover:text-emerald-900 transition-colors">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <button onClick={onBook} className={`w-full py-4 rounded-xl font-bold tracking-[0.2em] uppercase text-xs transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${
        recommended 
          ? 'bg-emerald-950 text-white hover:bg-emerald-900' 
          : 'bg-white text-emerald-950 border border-stone-200 hover:border-emerald-900'
      }`} style={{ transform: 'translateZ(20px)' }}>
        {recommended ? 'Boka Nu' : 'Boka Tid'}
      </button>
    </TiltCard>
  );
};

const GuideSection: React.FC<{ data: CareInstruction; number: string; type: 'pre' | 'post' | 'avoid' }> = ({ data, number, type }) => {
  const styles = {
    pre: { bg: 'bg-emerald-50/50', border: 'border-emerald-100' },
    post: { bg: 'bg-sage-50/50', border: 'border-sage-100' },
    avoid: { bg: 'bg-amber-50/50', border: 'border-amber-100' }
  };
  
  const s = styles[type];

  return (
    <div className={`cursor-hover relative p-8 rounded-[2rem] border ${s.bg} ${s.border} backdrop-blur-sm transition-all hover:shadow-xl hover:bg-white duration-500 h-full group hover:-translate-y-2`}>
      <div className="absolute top-4 right-6 font-serif text-6xl opacity-10 font-bold select-none text-emerald-950" aria-hidden="true">
        {number}
      </div>
      <h4 className="font-serif text-xl font-bold mb-6 text-emerald-950">
        {data.title}
      </h4>
      <ul className="space-y-4">
        {data.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-900/40 mt-1.5 flex-shrink-0" aria-hidden="true"></span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FAQItemDisplay: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-hover w-full text-left py-6 flex justify-between items-center group hover:bg-stone-50/50 rounded-lg px-2 -mx-2 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className={`font-serif text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-emerald-800' : 'text-stone-800 group-hover:text-emerald-900'}`}>{item.question}</span>
        <span className={`flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 text-lg font-thin text-sage-400 transition-all duration-300 ${isOpen ? 'rotate-45 bg-emerald-50 border-emerald-200 text-emerald-600' : 'group-hover:border-sage-300 group-hover:text-sage-600'}`} aria-hidden="true">
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2">
            <p className="text-stone-600 leading-relaxed text-base max-w-2xl font-light">
            {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ t, onNavigate }) => {
  return (
    <section id="services" className="py-24 min-h-screen relative overflow-hidden bg-stone-50/30">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-32 animate-fade-in-up text-center md:text-left">
           <span className="block text-gold-600 font-bold tracking-[0.3em] text-xs uppercase mb-6 pl-1">Våra Tjänster</span>
           <h2 className="font-serif text-6xl md:text-8xl text-emerald-950 font-medium tracking-tight mb-8">
             {t.services.title.split(' ')[0]} <br/>
             <span className="italic text-sage-600">{t.services.title.split(' ').slice(1).join(' ')}</span>
           </h2>
           <div className="w-24 h-1 bg-emerald-950 mx-auto md:mx-0"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-[1400px] mx-auto mb-40 items-stretch">
          <ServiceCardContent item={t.services.wetCupping} onBook={() => onNavigate('booking')} />
          <ServiceCardContent item={t.services.combined} recommended={true} onBook={() => onNavigate('booking')} />
          <ServiceCardContent item={t.services.dryCupping} onBook={() => onNavigate('booking')} />
        </div>

        {/* Artistic Divider */}
        <div className="max-w-[1400px] mx-auto mb-40 flex items-center justify-center" aria-hidden="true">
             <div className="w-px h-32 bg-gradient-to-b from-stone-200 via-emerald-900 to-stone-200"></div>
        </div>

        {/* Patient Guide - Asymmetrical Layout */}
        <div className="max-w-[1400px] mx-auto mb-40">
           <div className="flex flex-col xl:flex-row gap-20">
             
              {/* Image with Liquid Filter */}
              <div className="xl:w-5/12 relative group cursor-none">
                 <div className="absolute inset-0 bg-emerald-900/10 transform translate-x-4 translate-y-4 rounded-[3rem] transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                 <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                    <img 
                       src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
                       alt="Male client relaxing during treatment" 
                       width="600"
                       height="750"
                       loading="lazy"
                       decoding="async"
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 liquid-hover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                 </div>
              </div>

              <div className="xl:w-7/12 pt-10">
                 <h3 className="font-serif text-5xl text-emerald-950 mb-12">{t.services.processTitle}</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                    <GuideSection data={t.services.preCare} number="01" type="pre" />
                    <GuideSection data={t.services.afterCare} number="02" type="post" />
                    <div className="md:col-span-2">
                       <GuideSection data={t.services.afterCareAvoid} number="03" type="avoid" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Minimal FAQ */}
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">FAQ</span>
              <h2 className="font-serif text-4xl text-emerald-950 mt-4">{t.services.faqTitle}</h2>
           </div>
           <div className="space-y-2">
            {t.services.faq.map((item, idx) => (
                <FAQItemDisplay key={idx} item={item} />
            ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
