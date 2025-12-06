
import React from 'react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer id="contact" className="bg-sage-900 text-stone-300 py-20 border-t border-sage-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               {/* Logo with white filter for dark background */}
               <img 
                 src="/images/logo.png" 
                 alt="Hijama Harmony Logo" 
                 className="h-16 w-auto object-contain brightness-0 invert"
                 width="64"
                 height="64"
                 onError={(e) => {
                    // Fallback to text
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <h3 className="hidden font-serif text-3xl text-white font-bold flex items-center gap-2">
                 <span className="text-amber-500 bg-white/10 w-10 h-10 flex items-center justify-center rounded-full">H</span> 
                 Hijama Harmony
               </h3>
            </div>
            
            <p className="text-sage-200 leading-relaxed max-w-xs">
              Din destination för professionell koppningsterapi i Sandviken. Vi hjälper dig att återfå balansen i kropp och själ.
            </p>
            <div className="flex gap-4">
              {/* Instagram Icon Link */}
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-amber-600 transition-colors text-white" aria-label="Follow us on Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-white text-xl font-bold mb-6 border-b border-sage-800 pb-2 inline-block">{t.contact.title}</h4>
            <div className="space-y-4 text-sage-100">
              <div className="flex items-start gap-3">
                 <span className="text-amber-500 mt-1" aria-hidden="true">📍</span>
                 <div>
                    <p className="font-medium text-white">Besök oss</p>
                    <p>{t.contact.address}</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-1" aria-hidden="true">📞</span>
                <div>
                   <p className="font-medium text-white">Ring</p>
                   <a href={`tel:${t.contact.phone}`} className="hover:text-amber-500 transition-colors">{t.contact.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-1" aria-hidden="true">✉️</span>
                <div>
                   <p className="font-medium text-white">Maila</p>
                   <a href={`mailto:${t.contact.email}`} className="hover:text-amber-500 transition-colors">{t.contact.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours / Map Placeholder */}
          <div>
             <h4 className="font-serif text-white text-xl font-bold mb-6 border-b border-sage-800 pb-2 inline-block">Öppettider</h4>
             <p className="mb-6 text-sage-200">{t.contact.hours}</p>
             
             {/* Styled Map Placeholder */}
             <div className="w-full h-40 bg-sage-800 rounded-xl flex flex-col items-center justify-center text-sage-400 border-2 border-dashed border-sage-700 hover:border-amber-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-sage-900/50 z-0"></div>
                <span className="text-3xl mb-2 z-10 group-hover:scale-110 transition-transform" aria-hidden="true">🗺️</span>
                <span className="text-sm font-medium z-10">Sandviken, Sweden</span>
             </div>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-16 pt-8 text-center text-sm text-stone-400 flex flex-col md:flex-row justify-center gap-4">
           <span>{t.footer.copyright}</span>
           <span className="hidden md:inline" aria-hidden="true">•</span>
           <a href="#" className="hover:text-sage-300">{t.footer.links}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;