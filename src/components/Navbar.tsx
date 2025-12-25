import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { type Language } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface NavbarProps {
  onFindChurch: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const NavLink: React.FC<{ label: string; href: string; lang: Language; scrolled: boolean }> = ({ label, href, lang, scrolled }) => {
  const { text, isLoading } = useTranslation(label.toLowerCase(), lang);
  return (
    <a 
      href={href} 
      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${isLoading ? 'animate-pulse opacity-50' : ''} ${scrolled ? 'text-gray-600 hover:text-[#8B1A1A]' : 'text-white/80 hover:text-white'}`}
    >
      {text || label}
    </a>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onFindChurch, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { text: findBtn } = useTranslation('findChurch', lang);

  const logoUrl = "https://lh3.googleusercontent.com/d/11OZvcCBxigadDBFJUHpb_AWvG49HjGDB";

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled || mobileOpen ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1 shadow-xl shrink-0 group-hover:scale-105 transition-transform overflow-hidden border border-gray-100">
            <img src={logoUrl} alt="VNC Logo" className="w-full h-full object-contain" />
          </div>
          <div className={`${scrolled || mobileOpen ? 'text-gray-900' : 'text-white'} hidden sm:block overflow-hidden`}>
            <h1 className="font-serif font-black text-sm leading-none tracking-tight">VICTORY CHRISTIAN</h1>
            <p className="text-[7px] tracking-[0.1em] font-black opacity-60 uppercase mt-1 whitespace-nowrap">Network of Churches Worldwide</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 items-center">
            {['About', 'Programs', 'Mandate', 'Services', 'Leadership', 'Media'].map(item => (
              <NavLink key={item} label={item} href={`#${item.toLowerCase()}`} lang={lang} scrolled={scrolled} />
            ))}
          </div>
          
          <div className="flex items-center gap-2 border-l border-gray-400/20 pl-8">
            {(['en', 'fr', 'nl'] as Language[]).map(l => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`w-9 h-9 rounded-lg text-[9px] font-black uppercase transition-all flex items-center justify-center ${lang === l ? 'bg-[#8B1A1A] text-white shadow-lg' : scrolled ? 'text-gray-400 hover:bg-gray-100' : 'text-white/50 hover:bg-white/10 hover:text-white'}`}
              >
                {l}
              </button>
            ))}
          </div>

          <button onClick={onFindChurch} className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg hover:scale-105 active:scale-95 ${scrolled ? 'bg-[#8B1A1A] text-white' : 'bg-white text-[#8B1A1A]'}`}>
            {findBtn || 'Find Hub'}
          </button>
        </div>

        <button 
          className="lg:hidden p-3 rounded-2xl transition-colors" 
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ backgroundColor: scrolled || mobileOpen ? '#8B1A1A10' : 'rgba(255,255,255,0.1)', color: scrolled || mobileOpen ? '#8B1A1A' : 'white' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-[90] p-8 flex flex-col animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
           <div className="flex-1 space-y-6 mt-10">
             {['About', 'Programs', 'Mandate', 'Services', 'Leadership', 'Media'].map(item => (
               <a 
                 key={item} 
                 href={`#${item.toLowerCase()}`} 
                 onClick={() => setMobileOpen(false)} 
                 className="block text-3xl font-serif font-black text-gray-900 active:text-[#8B1A1A]"
               >
                 {item}
               </a>
             ))}
           </div>

           <div className="space-y-8 pb-12 pt-8 border-t border-gray-100">
             <div className="flex gap-3">
               {(['en', 'fr', 'nl'] as Language[]).map(l => (
                 <button 
                   key={l} 
                   onClick={() => { setLang(l); setMobileOpen(false); }} 
                   className={`flex-1 py-4 rounded-xl font-black uppercase text-xs tracking-widest border-2 transition-all ${lang === l ? 'bg-[#8B1A1A] text-white border-[#8B1A1A]' : 'bg-white text-gray-400 border-gray-100'}`}
                 >
                   {l}
                 </button>
               ))}
             </div>
             <button 
               onClick={() => { onFindChurch(); setMobileOpen(false); }} 
               className="w-full bg-[#8B1A1A] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
             >
               {findBtn || 'Search Hubs'}
             </button>
           </div>
        </div>
      )}

      {/* Items preserved for future use */}
      <div className="hidden">
        <Globe /> <ChevronDown />
      </div>
    </nav>
  );
};

export default Navbar;