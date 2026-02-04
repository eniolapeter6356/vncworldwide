import React from 'react';
import { Camera, Image as ImageIcon, Download, ExternalLink } from 'lucide-react';
import { type Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface MediaProps {
  lang: Language;
}

const Media: React.FC<MediaProps> = ({ lang }) => {
  const { text: sectionTitle } = useTranslation('mediaSectionTitle', lang);
  const { text: sectionDesc } = useTranslation('mediaSectionDesc', lang);
  const { text: downloadBtn } = useTranslation('downloadGallery', lang);
  const { text: globalLabel } = useTranslation('globalEventGallery', lang);
  const { text: localLabel } = useTranslation('localHubGallery', lang);
  const { text: placeholderText } = useTranslation('galleryPlaceholderText', lang);

  const galleries = [
    {
      title: globalLabel || "Global Event Photos",
      desc: placeholderText || "Access high-resolution images from our latest global summits and fellowship encounters.",
      icon: <Camera size={32} />,
      link: "#", // Link can be pasted here
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      accent: "from-[#8B1A1A] to-red-900"
    },
    {
      title: localLabel || "Local Hub Highlights",
      desc: placeholderText || "Relive the highlights and regional church programs from our worldwide hub network.",
      icon: <ImageIcon size={32} />,
      link: "#", // Link can be pasted here
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
      accent: "from-gray-800 to-black"
    }
  ];

  return (
    <section id="media" className="py-24 md:py-40 bg-gray-50 overflow-hidden w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
            Media & Resource Center
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-gray-900">
            {sectionTitle || "Media & Galleries"}
          </h2>
          <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">
            {sectionDesc || "Relive the moments and download photos from our recent global events and local hub programs."}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {galleries.map((g, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-gray-100"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={g.image} 
                  alt={g.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-10 left-10">
                  <div className={`p-5 rounded-3xl bg-white/10 backdrop-blur-xl text-white shadow-xl group-hover:bg-[#8B1A1A] transition-colors duration-500`}>
                    {g.icon}
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 flex flex-col flex-1 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                    {g.title}
                  </h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">
                    {g.desc}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href={g.link}
                    className="w-full sm:w-auto bg-[#8B1A1A] text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                  >
                    <Download size={18} />
                    {downloadBtn || "Download Photos"}
                  </a>
                  <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
                    View Online <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;