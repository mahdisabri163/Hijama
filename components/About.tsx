
import React from 'react';
import { Translation } from '../types';

interface AboutProps {
  t: Translation;
}

const MaleAvatar = () => (
  <svg className="w-full h-full text-stone-900" viewBox="0 0 512 512" fill="currentColor">
    {/* Detailed Male Silhouette matching the screenshot style */}
    <path d="M256 0c-74.4 0-138.8 32.7-183.3 84.7C46.6 118.8 30.5 160.8 30.5 206c0 5 .2 10 .5 14.9 3.5 61.2 33.6 116.1 80.8 153.2C138.6 403.1 193.3 421.5 256 421.5c62.6 0 117.4-18.4 163.2-47.4 47.2-37.1 77.3-92 80.8-153.2.3-4.9.5-9.9.5-14.9 0-45.2-16.1-87.2-42.2-121.3C414.8 32.7 330.4 0 256 0zM153.3 255.8c0-37.5 35.3-70.4 75-76.3-4.7-12.7-7.8-26.6-8.7-41.2-12.8-5.5-22.3-27-22.3-27s11.5-14 26.5-9.3c5-13.8 17.5-30.8 37.8-30.8 18 0 31.7 15.6 37.8 28.5 13.5-3.5 23.5 9.3 23.5 9.3s-9 22.2-22.3 27.8c-1.5 16.5-5.8 32-12 45.8 34.3 6.9 63.3 38.3 63.3 73.2v9.8c0 24.3-33.8 45-80.5 48.5-.7 13.8-5 28.3-15.5 37.2-14.2 11.9-46.8 12.5-46.8 12.5s-32.3-1.2-46.2-13.2c-10.3-9-14.5-23.3-15-37-46.7-3.5-79.8-24.3-79.8-48.5v-9.8z"/>
    {/* Body/Shoulders */}
    <path d="M256 443.5c-69.8 0-132.8-27.4-177.3-71.7-8.3 38.5 3.3 79.5 33.8 108.8C147.1 513.9 198.6 533.5 256 533.5c57.4 0 108.9-19.6 143.5-52.9 30.5-29.3 42.1-70.3 33.8-108.8-44.5 44.3-107.5 71.7-177.3 71.7z"/>
  </svg>
);

const FemaleAvatar = () => (
  <svg className="w-full h-full text-stone-900" viewBox="0 0 512 512" fill="currentColor">
    {/* Detailed Female Hijab Silhouette matching the screenshot style */}
    <path d="M256 0c-66.3 0-126.9 25.1-171.7 66.2C41.3 105.7 14 161.7 14 224c0 33.3 7.8 64.7 21.6 92.9 14.8 30.2 37.3 56.1 65.2 75.6 42.6 29.8 94.2 47.5 149.9 47.5s107.3-17.7 149.9-47.5c27.9-19.5 50.4-45.4 65.2-75.6C480.2 288.7 488 257.3 488 224c0-62.3-27.3-118.3-70.3-157.8C372.9 25.1 312.3 0 256 0zm0 64c50.3 0 94.2 24.8 121.2 63.2 16.8 24 26.8 53.3 26.8 84.8 0 6.6-1.5 12.8-4.2 18.5-5.3 11.2-14.2 20.3-25.2 25.8-15.5 7.7-32.8 9.3-48.5 4.3-8.8-2.8-18.2-2.8-27 0-15.8 5-33 3.3-48.5-4.3-11-5.5-19.9-14.6-25.2-25.8-2.7-5.7-4.2-11.9-4.2-18.5 0-31.5 10-60.8 26.8-84.8C151.8 88.8 195.7 64 256 64zm0 336c-48.3 0-93.5-13.8-132.3-37.5 6.1-23.7 28.3-40.5 53.7-40.5h157.2c25.4 0 47.6 16.8 53.7 40.5C349.5 386.2 304.3 400 256 400z"/>
  </svg>
);

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="pt-32 pb-24 bg-white overflow-hidden relative min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-stone-50/50 -skew-y-3 z-0 origin-top-left"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-sage-500"></span>
              Om Oss
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 font-medium mb-8 leading-tight">
              {t.about.title}
            </h2>
            
            <div className="prose prose-lg prose-stone mb-10 text-stone-600 font-light leading-relaxed">
               <p>{t.about.description}</p>
            </div>

            {/* USPs Grid */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 mb-12">
              {t.about.usps.map((usp, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-2xl text-sage-700 group-hover:bg-sage-600 group-hover:text-white transition-all duration-300">
                    <span aria-hidden="true">{usp.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg mb-2">{usp.title}</h4>
                    <p className="text-sm text-stone-500 leading-snug">{usp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-amber-400 pl-6 italic text-stone-600 text-lg bg-amber-50/50 py-4 pr-4 rounded-r-lg">
              "Vårt mål är att skapa en plats där kropp och själ kan mötas i harmoni."
            </div>
          </div>

          {/* Image Gallery Column */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col gap-6">
             
             {/* Main Featured Image - Action Shot (Pump) */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-video">
                {/* Analyzed Image: Hand with Pump */}
                <img 
                  src="/images/action.jpg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600/2d433c/fff?text=Professional+Treatment";
                  }}
                  alt="Therapist performing dry cupping with pump" 
                  width="800"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8">
                  <span className="text-white font-serif text-2xl font-medium">Professionell Behandling</span>
                </div>
             </div>

             <div className="flex gap-6 h-64">
                {/* Secondary Image - Tray Detail */}
                <div className="w-1/2 rounded-3xl overflow-hidden shadow-lg border border-stone-100 group relative">
                   {/* Analyzed Image: Hand placing Cup */}
                   <img 
                      src="/images/tray.jpg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x400/C5A059/fff?text=Sterile+Equipment";
                      }}
                      alt="Sterile cupping tray and equipment" 
                      width="400"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
                
                {/* Quote/Badge */}
                <div className="w-1/2 bg-sage-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center text-sage-100 shadow-lg">
                   <span className="text-4xl mb-3" aria-hidden="true">✨</span>
                   <p className="font-serif font-medium leading-tight">Alltid sterilt<br/>engångsmaterial</p>
                </div>
             </div>

             {/* Decorative Elements */}
             <div className="flex items-center gap-4 mt-2 opacity-60">
                <span className="h-px bg-stone-300 flex-grow"></span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Torggatan 5, Sandviken</span>
                <span className="h-px bg-stone-300 flex-grow"></span>
             </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl text-center text-emerald-950 font-medium mb-16 max-w-4xl mx-auto leading-tight">
            {t.about.teamTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {t.about.team.map((member, idx) => (
               <div key={idx} className="bg-orange-50/30 p-10 rounded-3xl text-center border border-stone-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Avatar - Silhouette Style */}
                  <div className="w-56 h-56 mx-auto mb-8 relative group-hover:scale-105 transition-transform duration-500">
                     {member.gender === 'male' ? <MaleAvatar /> : <FemaleAvatar />}
                  </div>
                  
                  <h4 className="font-serif text-2xl text-stone-900 font-bold mb-2">{member.name}</h4>
                  <p className="text-emerald-700 text-sm font-bold uppercase tracking-wider mb-6">{member.role}</p>
                  <p className="text-stone-600 font-light leading-relaxed">{member.description}</p>
               </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
