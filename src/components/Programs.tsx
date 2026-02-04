import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { type Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface ProgramsProps {
  lang: Language;
}

const Programs: React.FC<ProgramsProps> = ({ lang }) => {
  const { text: ourPrograms } = useTranslation('ourPrograms', lang);
  const { text: programsIntro } = useTranslation('programsIntro', lang);
  const { text: upcomingLabel } = useTranslation('upcomingPrograms', lang);
  const { text: pastLabel } = useTranslation('pastPrograms', lang);

  return (
    <section id="programs" className="py-24 md:py-40 bg-gray-50 overflow-hidden w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="max-w-4xl mb-24 space-y-8">
          <span className="text-[#8B1A1A] font-black tracking-[0.5em] text-xs uppercase block">
            {ourPrograms || 'Ministry Activity'}
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-black leading-tight text-gray-900">
            Spirit-filled Impact through Our Programs
          </h2>
          <p className="text-gray-500 font-light text-xl md:text-2xl leading-relaxed max-w-3xl">
            {programsIntro || "Our programs are designed to build faith, equip believers, and advance the Kingdom through practical engagement and spiritual fellowship."}
          </p>
        </header>

        <div className="space-y-32">
          {/* Upcoming Programs */}
          <div className="space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#8B1A1A] pl-4 border-l-4 border-[#8B1A1A]">
              {upcomingLabel || 'Upcoming Programs'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Apostolic Empowerment Summit", date: "April 15-18, 2025 | Brussels Expo", desc: "Equipping leaders with spiritual tools for modern ministry challenges.", img: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=800" },
                { title: "Global Day of Worship", date: "June 22, 2025 | Online/Ghent Hub", desc: "A unified 24-hour prayer and worship encounter for all global VNC hubs.", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" }
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                  <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-10 space-y-6">
                      <div className="flex items-center gap-3 text-[#8B1A1A]">
                        <Calendar size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{p.date}</span>
                      </div>
                      <h4 className="font-serif text-2xl font-black text-gray-900">{p.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{p.desc}</p>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#8B1A1A] hover:opacity-70 transition-opacity pt-4">
                        Learn More <ArrowUpRight size={14} />
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Programs */}
          <div className="space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 pl-4 border-l-4 border-gray-200">
              {pastLabel || 'Past Programs'}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Night of Breakthrough 2024", date: "Dec 29, 2024 | Lagos", desc: "A powerful night of deliverance and prophetic word.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" },
                { title: "Foundations Training", date: "Oct 2024 | London", desc: "Intensive doctrinal training for ministers.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
                { title: "Youth Impact Week", date: "Aug 2024 | Ghent", desc: "Mobilizing the next generation for the gospel.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" }
              ].map((p, i) => (
                <div key={i} className="bg-white/50 rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-200/50">
                  <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 space-y-4">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{p.date}</p>
                      <h4 className="font-serif text-lg font-black text-gray-700">{p.title}</h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;