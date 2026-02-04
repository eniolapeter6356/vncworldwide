import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { type Language, DICTIONARY } from '../constants/siteData.ts';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = DICTIONARY[lang] || DICTIONARY.en;
  const logoUrl = "https://lh3.googleusercontent.com/d/11OZvcCBigadDBFJUHpb_AWvG49HjGDB";

  const menuItems = {
    nav: lang === 'en' ? ['Our History', 'The Founders', 'Global Regions', 'Network Directory', 'Upcoming Events'] :
          lang === 'fr' ? ['Notre Histoire', 'Les Fondateurs', 'Régions Mondiales', 'Annuaire du Réseau', 'Événements'] :
          ['Onze Geschiedenis', 'De Oprichters', 'Wereldwijde Regio\'s', 'Netwerkgids', 'Evenementen'],
    res: lang === 'en' ? ['Pastoral Training', 'Media Kit', 'Giving', 'Statements of Faith', 'Member Portal'] :
          lang === 'fr' ? ['Formation Pastorale', 'Kit Média', 'Dons', 'Déclaration de Foi', 'Portail Membre'] :
          ['Pastorale Training', 'Media Kit', 'Geven', 'Geloofsverklaringen', 'Ledenportaal']
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-2xl overflow-hidden">
                <img src={logoUrl} alt="VNC Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-black tracking-tight text-white leading-none">VICTORY CHRISTIAN</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mt-1">Network of Churches</span>
              </div>
            </div>
            <p className="text-white/40 font-light leading-relaxed text-lg">
              {t.footerDesc}
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-[#8B1A1A] hover:border-[#8B1A1A] transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-black mb-10 text-white tracking-tight">Navigation</h4>
            <ul className="space-y-6">
              {menuItems.nav.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-black mb-10 text-white tracking-tight">Resources</h4>
            <ul className="space-y-6">
              {menuItems.res.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="font-serif text-xl font-black mb-6 text-white tracking-tight">{t.stayInformed}</h4>
              <p className="text-white/40 text-base font-light mb-8 leading-relaxed">{t.newsletterDesc}</p>
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder={t.emailPlaceholder} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/40 focus:border-[#8B1A1A] transition-all text-white placeholder:text-white/20"
                />
                <button type="submit" className="absolute right-3 top-3 w-11 h-11 rounded-xl bg-[#8B1A1A] text-white flex items-center justify-center hover:bg-red-900 transition-colors shadow-xl">
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] md:text-xs text-white/20 font-black uppercase tracking-[0.4em] text-center md:text-left">
            © {new Date().getFullYear()} VICTORY CHRISTIAN NETWORK OF CHURCHES WORLDWIDE. UNDER APOSTOLIC GRACE OF BISHOP MICHAEL OLUYOMI.
          </p>
          <div className="flex space-x-10 text-[10px] md:text-xs font-black text-white/20 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;