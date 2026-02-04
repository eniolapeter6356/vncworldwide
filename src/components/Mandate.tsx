import React from 'react';
import { type Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface MandateProps {
  lang: Language;
}

const Mandate: React.FC<MandateProps> = ({ lang }) => {
  const { text: ourMandate } = useTranslation('ourMandate', lang);
  const { text: mandateIntro } = useTranslation('mandateIntro', lang);

  const m25en = useTranslation('mandateEN', lang).text || "The Year of Supernatural Expansion and Kingdom Influence.";
  const m25fr = useTranslation('mandateFR', lang).text || "L'année de l'expansion surnaturelle et de l'influence du Royaume.";
  const m25nl = useTranslation('mandateNL', lang).text || "Het jaar van bovennatuurlijke expansie en koninkrijksinvloed.";
  
  const m26en = useTranslation('mandate2026EN', lang).text || "The Year of Divine Manifestation and Greater Glory.";
  const m26fr = useTranslation('mandate2026FR', lang).text || "L'année de la manifestation divine et d'une plus grande gloire.";
  const m26nl = useTranslation('mandate2026NL', lang).text || "Het jaar van goddelijke manifestatie en grotere glorie.";

  return (
    <section id="mandate" className="py-24 md:py-40 bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <header className="max-w-4xl mx-auto text-center mb-24 space-y-8">
          <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
            {ourMandate || 'Divine Direction'}
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-gray-900">
            Our Prophetic Mandate
          </h2>
          <p className="text-gray-500 font-light text-xl md:text-2xl leading-relaxed">
            {mandateIntro || "The ministry receives a clear divine direction for each year, serving as our prophetic compass for growth and impact."}
          </p>
        </header>

        <div className="space-y-32">
            {/* 2025 Mandate */}
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <h3 className="font-serif text-4xl font-black text-gray-900">2025</h3>
                <div className="h-px bg-gray-100 flex-1" />
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { lang: "English", text: m25en },
                  { lang: "French", text: m25fr },
                  { lang: "Dutch", text: m25nl }
                ].map((m, i) => (
                  <div key={i} className="p-12 rounded-[40px] border-2 border-[#8B1A1A]/5 hover:border-[#8B1A1A]/20 transition-all bg-[#8B1A1A]/[0.02] relative group">
                      <div className="absolute top-8 left-12 text-[10px] font-black uppercase tracking-[0.3em] text-[#8B1A1A]/30">{m.lang}</div>
                      <p className="font-serif text-2xl font-black text-gray-800 leading-relaxed pt-8 group-hover:text-[#8B1A1A] transition-colors">"{m.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 Mandate */}
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <h3 className="font-serif text-4xl font-black text-gray-300">2026</h3>
                <div className="h-px bg-gray-100 flex-1" />
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { lang: "English", text: m26en },
                  { lang: "French", text: m26fr },
                  { lang: "Dutch", text: m26nl }
                ].map((m, i) => (
                  <div key={i} className="p-12 rounded-[40px] border border-gray-100 hover:border-gray-300 transition-all bg-gray-50/50 relative group">
                      <div className="absolute top-8 left-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">{m.lang}</div>
                      <p className="font-serif text-2xl font-black text-gray-400 leading-relaxed pt-8 group-hover:text-gray-600 transition-colors">"{m.text}"</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mandate;