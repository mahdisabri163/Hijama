
import React from 'react';
import { Translation } from '../types';

interface BookingProps {
  t: Translation;
}

const Booking: React.FC<BookingProps> = ({ t }) => {
  return (
    <section id="booking" className="pt-32 pb-24 bg-emerald-900 text-white relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.booking.title}</h2>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
          {t.booking.description}
        </p>

        <div className="bg-white text-stone-800 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl">
           <form className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">Namn / Name</label>
                 <input type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Jane Doe" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                 <input type="email" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="jane@example.com" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">Telefon / Phone</label>
                 <input type="tel" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="070 123 45 67" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">Tjänst / Service</label>
                 <select className="w-full bg-stone-50 border border-stone-200 p-3 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>{t.services.wetCupping.title}</option>
                    <option>{t.services.dryCupping.title}</option>
                    <option>{t.services.combined.title}</option>
                 </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="button" className="w-full bg-amber-600 text-white font-bold text-lg py-4 rounded-md hover:bg-amber-700 transition-colors shadow-lg">
                  {t.booking.buttonText}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">{t.booking.disclaimer}</p>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
