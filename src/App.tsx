import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Programs from './components/Programs.tsx';
import Mandate from './components/Mandate.tsx';
import Services from './components/Services.tsx';
import Resources from './components/Resources.tsx';
import Media from './components/Media.tsx';
import Footer from './components/Footer.tsx';
import FindChurchModal from './components/FindChurchModal.tsx';
import { type Language } from './constants/siteData.ts';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#8B1A1A] selection:text-white antialiased">
      <Navbar 
        onFindChurch={() => setModalOpen(true)} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main>
        <Hero onFindChurch={() => setModalOpen(true)} lang={lang} />
        <About lang={lang} />
        <Programs lang={lang} />
        <Mandate lang={lang} />
        <Services lang={lang} />
        <Resources lang={lang} />
        <Media lang={lang} />
      </main>

      <Footer lang={lang} />
      
      {modalOpen && (
        <FindChurchModal lang={lang} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
