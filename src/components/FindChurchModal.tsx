
import React, { useState } from 'react';
import { X, Search, MapPin, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { type Language, HUB_LOCATIONS } from '../constants/siteData.ts';
import { useTranslation } from '../hooks/useTranslate.ts';

interface FindChurchModalProps {
  onClose: () => void;
  lang: Language;
}

const FindChurchModal: React.FC<FindChurchModalProps> = ({ onClose, lang }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string | null>(null);
  const { text: title } = useTranslation('findChurch', lang);

  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setResults(null);
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_KEY });
      const prompt = `Find Victory Christian Network (VNC) or spirit-filled church locations in ${query}. Provide a concise list of names and addresses in ${lang === 'fr' ? 'French' : lang === 'nl' ? 'Dutch' : 'English'}.`;
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] }
      });
      setResults(response.text || "No results found.");
    } catch (e) {
      setResults("Unable to connect to search network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden p-8 sm:p-14 animate-in zoom-in slide-in-from-bottom-8">
        <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-all"><X size={24}/></button>
        <h2 className="font-serif text-4xl font-black mb-2">{title}</h2>
        <p className="text-gray-400 mb-10 font-light italic">Locate the nearest spirit-filled assembly in your region.</p>
        
        <form onSubmit={search} className="relative mb-10">
          <input 
            autoFocus
            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#8B1A1A] focus:bg-white rounded-2xl px-8 py-5 pr-16 outline-none transition-all text-xl"
            placeholder="City or Country..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button disabled={loading} className="absolute right-3 top-3 w-14 h-14 bg-[#8B1A1A] text-white rounded-xl flex items-center justify-center hover:bg-red-900 transition-all shadow-lg">
            {loading ? <Loader2 className="animate-spin" size={24} /> : <Search size={26} />}
          </button>
        </form>

        <div className="max-h-[350px] overflow-y-auto pr-4 space-y-4">
          {results ? (
            <div className="prose prose-sm text-gray-700 whitespace-pre-wrap leading-relaxed animate-in fade-in">
              {results}
            </div>
          ) : (
            <div className="grid gap-4 opacity-40">
              {HUB_LOCATIONS.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-gray-900">{h.name}</h4>
                    <p className="text-xs uppercase tracking-widest">{h.city}</p>
                  </div>
                  <MapPin size={20} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindChurchModal;