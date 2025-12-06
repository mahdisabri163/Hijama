
import React from 'react';
import { Translation } from '../types';

interface ContactProps {
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="bg-stone-900 pt-32 pb-24 text-white relative overflow-hidden min-h-screen">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-sage-500/50 rounded-full text-sage-300 text-xs font-bold uppercase tracking-widest mb-6">
             {t.nav.contact}
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">
             Hitta din <span className="text-sage-400 italic">Harmoni</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
             Vi finns centralt i Sandviken. Välkommen att kontakta oss för tidsbokning eller rådgivning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-12">
             <div className="bg-white/5 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                 <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                       <div className="w-12 h-12 rounded-full bg-sage-900/50 border border-sage-700/30 flex items-center justify-center group-hover:bg-sage-500/20 transition-colors">
                          <span className="text-2xl" aria-hidden="true">📍</span>
                       </div>
                       <div>
                          <h4 className="text-sage-300 text-xs font-bold uppercase tracking-wider mb-1">Adress</h4>
                          <p className="text-xl font-serif text-white">{t.contact.address}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                       <div className="w-12 h-12 rounded-full bg-sage-900/50 border border-sage-700/30 flex items-center justify-center group-hover:bg-sage-500/20 transition-colors">
                          <span className="text-2xl" aria-hidden="true">📞</span>
                       </div>
                       <div>
                          <h4 className="text-sage-300 text-xs font-bold uppercase tracking-wider mb-1">Telefon</h4>
                          <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="text-xl font-serif text-white hover:text-sage-300 transition-colors">{t.contact.phone}</a>
                          <p className="text-stone-500 text-sm mt-1">Boka via samtal eller SMS</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                       <div className="w-12 h-12 rounded-full bg-sage-900/50 border border-sage-700/30 flex items-center justify-center group-hover:bg-sage-500/20 transition-colors">
                          <span className="text-2xl" aria-hidden="true">✉️</span>
                       </div>
                       <div>
                          <h4 className="text-sage-300 text-xs font-bold uppercase tracking-wider mb-1">Email</h4>
                          <a href={`mailto:${t.contact.email}`} className="text-xl font-serif text-white hover:text-sage-300 transition-colors">{t.contact.email}</a>
                       </div>
                    </div>
                 </div>

                 <div className="mt-10 flex gap-4">
                   <a 
                     href="https://instagram.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 py-4 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
                     aria-label="Follow us on Instagram"
                   >
                     <span>Instagram</span>
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                   </a>
                 </div>
             </div>
             
             {/* Map Section */}
             <div className="h-[300px] bg-stone-800 rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.776609999999!2d16.7766!3d60.6214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDM3JzE3LjAiTiAxNsKwNDYnMzUuOCJF!5e0!3m2!1sen!2sse!4v1635776609999!5m2!1sen!2sse" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
                   allowFullScreen 
                   loading="lazy"
                   title="Map to Hijama Harmony at Torggatan 5, Sandviken"
                 ></iframe>
             </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-stone-800 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
             <h3 className="font-serif text-3xl mb-8 text-white">{t.contact.formTitle}</h3>
             <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.contact.nameLabel}</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full bg-stone-900/50 border border-stone-700 text-white p-4 rounded-xl focus:ring-2 focus:ring-sage-500 outline-none transition-all placeholder-stone-600"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.contact.emailLabel}</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-stone-900/50 border border-stone-700 text-white p-4 rounded-xl focus:ring-2 focus:ring-sage-500 outline-none transition-all placeholder-stone-600"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{t.contact.messageLabel}</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-stone-900/50 border border-stone-700 text-white p-4 rounded-xl focus:ring-2 focus:ring-sage-500 outline-none transition-all placeholder-stone-600"
                    placeholder="..."
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-amber-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/20"
                >
                  {t.contact.sendButton}
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;