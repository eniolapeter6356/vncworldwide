import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import {type  Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface HeroProps {
  onFindChurch: () => void;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ onFindChurch, lang }) => {
  const { text: title } = useTranslation('heroTitle', lang);
  const { text: desc } = useTranslation('heroDesc', lang);
  const { text: btn } = useTranslation('joinNetwork', lang);

  // Faint background image provided by user
  const heroBg = "https://lh3.googleusercontent.com/d/1yq7jUlLhcXNcEpYPsiwoDPbJMFEJRr0Y";

  return (
    <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center text-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 scale-105 animate-[kenburns_40s_infinite_alternate]"
        style={{ 
          backgroundImage: `url('${heroBg}')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black" />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center">
        <div className="space-y-6 md:space-y-10 mb-10 md:mb-14">
          <h1 className="font-serif text-[clamp(2.2rem,6.5vw,5rem)] text-white font-black leading-[1.1] tracking-tighter animate-in slide-in-from-bottom-12 duration-1000 max-w-5xl mx-auto drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/70 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300 px-4">
            {desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto animate-in slide-in-from-bottom-4 duration-500 delay-500">
          <button 
            onClick={onFindChurch} 
            className="bg-[#8B1A1A] text-white px-8 py-5 md:px-10 md:py-5 rounded-full font-black text-sm md:text-base hover:bg-red-900 transition-all flex items-center justify-center gap-4 shadow-[0_20px_50px_-10px_rgba(139,26,26,0.4)] active:scale-95 whitespace-nowrap"
          >
            {btn}
            <ArrowRight size={18} className="shrink-0" />
          </button>
          <button className="px-8 py-5 md:px-10 md:py-5 text-white font-black border-2 border-white/20 rounded-full hover:bg-white/10 backdrop-blur-md transition-all uppercase tracking-[0.3em] text-[10px] md:text-xs whitespace-nowrap">
            {lang === 'en' ? 'Our Vision' : lang === 'fr' ? 'Notre Vision' : 'Onze Visie'}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-[1px] h-16 rounded-full bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Items preserved for future use */}
      <div className="hidden">
        <Globe />
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1.02) translate(0, 0); }
          to { transform: scale(1.08) translate(-0.5%, 0.5%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;