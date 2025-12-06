
import React from 'react';
import { Translation } from '../types';

interface TestimonialsProps {
  t: Translation;
}

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="bg-stone-50 py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-100 rounded-full blur-[100px] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
           <span className="text-sage-600 font-bold tracking-widest text-xs uppercase mb-4 block">
             Recensioner
           </span>
           <h2 className="font-serif text-5xl md:text-6xl text-emerald-950 font-medium mb-6">
             {t.testimonials.title}
           </h2>
           <p className="text-stone-500 max-w-xl mx-auto font-light text-lg">
             {t.testimonials.subtitle}
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.items.map((item, idx) => (
             <div 
               key={item.id} 
               className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-white relative group hover:-translate-y-2 transition-transform duration-500"
               style={{ transitionDelay: `${idx * 150}ms` }}
             >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-gold-200 text-6xl font-serif font-bold opacity-50 group-hover:text-gold-300 transition-colors">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-gold-400 mb-6 text-sm">
                   {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                   ))}
                </div>

                <p className="text-stone-600 font-light italic text-lg leading-relaxed mb-8 relative z-10">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      {item.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-emerald-950 text-sm">{item.name}</h4>
                      <p className="text-xs text-stone-400 uppercase tracking-wider">{item.role}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-24 pt-12 border-t border-stone-200 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2">
              <span className="text-3xl">🌿</span>
              <span className="font-serif text-lg text-stone-600">Naturlig Läkning</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="text-3xl">✨</span>
              <span className="font-serif text-lg text-stone-600">Steril Miljö</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              <span className="font-serif text-lg text-stone-600">Certifierad</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
