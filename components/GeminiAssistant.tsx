import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Translation } from '../types';

interface GeminiAssistantProps {
  t: Translation;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ t }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    setError('');
    setAnswer('');

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not available");
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `
        You are a helpful, calm, and professional medical assistant for 'Hijama Harmony', a premium cupping therapy clinic in Sweden. 
        Your goal is to answer patient questions about Hijama (cupping therapy) simply, reassuringly, and accurately.
        Keep answers concise (under 100 words).
        Tone: Luxurious, soothing, medically informed but accessible.
        If asked about medical diagnoses, disclaim that you are an AI and they should consult a doctor.
        Current context: Users are on the clinic's website.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: question,
        config: {
          systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
        setAnswer(text);
      } else {
        setError('No response generated.');
      }

    } catch (err) {
      console.error(err);
      setError("Unable to connect to the AI service right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="pt-32 pb-24 bg-stone-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Premium Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100 rounded-full blur-[100px] opacity-30 mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-100 rounded-full blur-[80px] opacity-30 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-5/12 pt-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/50 backdrop-blur border border-white rounded-full text-emerald-900 text-xs font-bold uppercase tracking-widest shadow-sm">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               Powered by Gemini
            </div>
            <h2 className="font-serif text-5xl md:text-7xl text-emerald-950 font-medium mb-8 leading-tight">
              {t.ai.title}
            </h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed font-light">
              {t.ai.description}
            </p>
            
            <div className="p-1.5 rounded-2xl shadow-2xl bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col sm:flex-row gap-2 relative group focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={t.ai.placeholder}
                className="flex-grow p-5 outline-none text-emerald-900 placeholder-emerald-900/40 bg-transparent text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              />
              <button 
                onClick={handleAsk}
                disabled={isLoading}
                className="bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-emerald-950 transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shadow-lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </span>
                ) : t.ai.button}
              </button>
            </div>
            <p className="text-xs text-stone-400 mt-4 italic pl-4">{t.ai.disclaimer}</p>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className={`transition-all duration-700 transform ${answer || error ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0'}`}>
              
               <div className="relative min-h-[400px] bg-white/60 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                  {/* Decorative Header inside the glass card */}
                  <div className="flex justify-between items-center mb-10 border-b border-emerald-900/5 pb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-900 flex-shrink-0 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">AI</div>
                        <div>
                          <h4 className="font-bold text-emerald-950 text-lg">Hijama Assistant</h4>
                          <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Medical Support</span>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-400/30"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-400/30"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400/30"></span>
                     </div>
                  </div>

                  {(answer || error) ? (
                    <div className="prose prose-lg prose-stone text-stone-700 animate-fade-in-up">
                       {error ? <p className="text-red-500 font-medium">{error}</p> : <p className="whitespace-pre-wrap leading-loose">{answer}</p>}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-stone-300">
                        <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        <p className="font-medium text-sm uppercase tracking-widest opacity-40">Waiting for your query</p>
                    </div>
                  )}
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;