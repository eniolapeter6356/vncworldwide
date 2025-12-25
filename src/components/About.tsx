
import React from 'react';
import { ShieldCheck, Users, Network, Zap, ArrowUpRight, Calendar } from 'lucide-react';
import { type Language, NETWORK_STATS } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const { text: title } = useTranslation('unifiedVoice', lang);
  const { text: desc1 } = useTranslation('aboutDesc1', lang);
  const { text: desc2 } = useTranslation('aboutDesc2', lang);
  const { text: who } = useTranslation('whoWeAre', lang);
  const { text: quote } = useTranslation('quote', lang);
  const { text: aboutMinistry } = useTranslation('aboutMinistry', lang);
  
  const missionImg = "https://lh3.googleusercontent.com/d/1Ci4sKgLMTuFiXXQbr-W-Ax-wd81y-mpo";

  const l = NETWORK_STATS.labels[lang] || NETWORK_STATS.labels.en;
  const stats = [
    { label: l.churches, value: NETWORK_STATS.churches, icon: <Network size={20} /> },
    { label: l.countries, value: NETWORK_STATS.countries, icon: <ShieldCheck size={20} /> },
    { label: l.resources, value: NETWORK_STATS.resources, icon: <Zap size={20} /> },
    { label: l.members, value: NETWORK_STATS.members, icon: <Users size={20} /> },
  ];

  return (
    <section id="about" title={title} className="py-24 md:py-40 bg-white overflow-hidden relative w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 relative space-y-12">
            <header className="space-y-8">
              <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
                {aboutMinistry || 'About the Ministry'}
              </span>
              <h2 className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.15] text-gray-900">
                {who || 'Who We Are'}
              </h2>
            </header>
            
            <div className="space-y-10 text-gray-600 text-lg md:text-2xl leading-relaxed font-light">
              <p>{desc1}</p>
              <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">Vision</h3>
                  <p className="font-serif italic text-gray-800">"{quote}"</p>
              </div>
              <div className="pt-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">Mission</h3>
                  <p>{desc2}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 md:gap-16 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="group cursor-default border-l-2 border-[#8B1A1A]/10 pl-8 py-2">
                  <div className="text-[#8B1A1A] mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <p className="text-4xl md:text-6xl font-serif font-black text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.3em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group self-start lg:sticky lg:top-32">
            <div className="absolute -inset-10 bg-[#8B1A1A]/5 rounded-[60px] rotate-3 blur-3xl transition-transform duration-1000 group-hover:rotate-0"></div>
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(139,26,26,0.15)] bg-gray-100">
              <img 
                src={missionImg} 
                alt="Bishop Michael Oluyomi" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
              <div className="absolute bottom-16 left-12 right-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-[2px] bg-[#D4AF37]"></div>
                  <div>
                    <p className="text-[#D4AF37] font-black uppercase text-xs tracking-[0.5em]">Bishop Michael Oluyomi</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">General Overseer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Items preserved for future use */}
      <div className="hidden">
        <ArrowUpRight /> <Calendar />
      </div>
    </section>
  );
};

export default About;
