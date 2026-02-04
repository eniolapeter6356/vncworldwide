import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Video } from 'lucide-react';
import { SERVICE_TIMES, type Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const { text: label } = useTranslation('worshipTogether', lang);
  const { text: title } = useTranslation('serviceTimes', lang);
  const { text: desc } = useTranslation('serviceDesc', lang);
  const { text: cantJoin } = useTranslation('cantJoin', lang);
  const { text: livePlatforms } = useTranslation('livePlatforms', lang);
  const { text: watchLive } = useTranslation('watchLive', lang);

  return (
    <section id="services" className="py-24 md:py-40 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="max-w-4xl mx-auto mb-20 text-center space-y-6">
          <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
            {label}
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black leading-tight text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">
            {desc}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_TIMES.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#8B1A1A]/5 text-[#8B1A1A] flex items-center justify-center mb-8 group-hover:bg-[#8B1A1A] group-hover:text-white transition-all duration-500">
                {idx === 0 ? <Calendar size={24} /> : idx === 1 ? <Clock size={24} /> : idx === 2 ? <Clock size={24} /> : <Clock size={24} />}
              </div>
              <span className="text-[10px] font-black text-[#8B1A1A] uppercase tracking-[0.3em]">{item.day[lang] || item.day.en}</span>
              <h3 className="font-serif text-xl font-black mt-3 mb-4 text-gray-900 min-h-[3rem]">{item.title[lang] || item.title.en}</h3>
              <p className="text-[#8B1A1A] font-bold text-[11px] mb-6 bg-[#8B1A1A]/5 inline-block px-4 py-1 rounded-full w-fit">{item.time}</p>
              <p className="text-gray-500 font-light leading-relaxed text-sm mb-8 flex-1">{item.description[lang] || item.description.en}</p>
              
              <div className="mt-auto space-y-4">
                {item.physicalAddress && item.mapLink && (
                  <a 
                    href={item.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-[#8B1A1A] transition-colors"
                  >
                    <MapPin size={14} className="text-[#8B1A1A]" /> 
                    {item.physicalAddress}
                  </a>
                )}

                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#8B1A1A] hover:opacity-70 transition-opacity"
                  >
                    <Video size={14} /> Join via Teams
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#8B1A1A] text-white p-10 md:p-16 rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_40px_80px_-20px_rgba(139,26,26,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 text-center lg:text-left space-y-4">
            <h4 className="font-serif text-3xl md:text-4xl font-black">{cantJoin}</h4>
            <p className="text-white/70 text-lg font-light max-w-xl">{livePlatforms}</p>
          </div>
          <button 
            onClick={() => window.open('https://bit.ly/47NXHqF', '_blank')}
            className="relative z-10 bg-white text-[#8B1A1A] px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform whitespace-nowrap shadow-xl"
          >
            {watchLive}
          </button>
        </div>
      </div>
      {/* Items preserved for future use */}
      <div className="hidden">
        <ExternalLink />
      </div>
    </section>
  );
};

export default Services;