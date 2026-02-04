import React from 'react';
import { BookOpen, Download, PlayCircle, FileText, ArrowUpRight } from 'lucide-react';
import { type Language, RECENT_RESOURCES } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface ResourcesProps {
  lang: Language;
}

const Resources: React.FC<ResourcesProps> = ({ lang }) => {
  const { text: label } = useTranslation('growWithUs', lang);
  const { text: title } = useTranslation('knowledgeResources', lang);
  const { text: desc } = useTranslation('resourceDesc', lang);
  const { text: browse } = useTranslation('browseCatalog', lang);

  const categories = [
    { 
      title: lang === 'en' ? 'Sermon Archive' : lang === 'fr' ? 'Archives des Sermons' : 'Preek Archief', 
      count: '1,200+', icon: <PlayCircle size={24} />, color: 'bg-blue-50 text-blue-600' 
    },
    { 
      title: lang === 'en' ? 'Leadership Manuals' : lang === 'fr' ? 'Manuels de Leadership' : 'Leiderschapshandleidingen', 
      count: '45', icon: <BookOpen size={24} />, color: 'bg-emerald-50 text-emerald-600' 
    },
    { 
      title: lang === 'en' ? 'Research Papers' : lang === 'fr' ? 'Documents de Recherche' : 'Onderzoekspapieren', 
      count: '120+', icon: <FileText size={24} />, color: 'bg-purple-50 text-purple-600' 
    },
    { 
      title: lang === 'en' ? 'Conference Assets' : lang === 'fr' ? 'Actifs de Conférence' : 'Conferentie Assets', 
      count: '300+', icon: <Download size={24} />, color: 'bg-orange-50 text-orange-600' 
    },
  ];

  return (
    <section id="resources" className="py-24 md:py-40 bg-white w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
              {label}
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black leading-tight text-gray-900">
              {title}
            </h2>
            <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">
              {desc}
            </p>
          </div>
          <button className="group flex items-center gap-3 bg-white text-[#8B1A1A] border-2 border-[#8B1A1A] px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#8B1A1A] hover:text-white transition-all duration-500">
            {browse}
            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="group p-10 rounded-[32px] border border-gray-100 hover:border-[#8B1A1A]/20 hover:bg-[#8B1A1A]/[0.02] transition-all duration-500 cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${cat.color}`}>
                {cat.icon}
              </div>
              <h4 className="font-black text-xl text-gray-900 mb-2">{cat.title}</h4>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{cat.count} Resources</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {RECENT_RESOURCES.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title[lang] || item.title.en} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md text-gray-900 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {item.type[lang] || item.type.en}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-[#8B1A1A] font-black uppercase tracking-[0.4em] mb-3">{item.date}</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-[#8B1A1A] transition-colors leading-tight">
                {item.title[lang] || item.title.en}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;