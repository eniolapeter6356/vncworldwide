import { GoogleGenAI } from "@google/genai";
import { type Language } from "../constants/siteData.ts";

export const translateText = async (text: string, targetLang: Language): Promise<string> => {
  if (targetLang === 'en' || !text) return text;
  
  const cacheKey = `vnc_cache_${targetLang}_${btoa(text).slice(0, 16)}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_KEY });
    const prompt = `Translate this church network website text into ${
      targetLang === 'fr' ? 'French' : 'Dutch'
    }. Keep it professional, spiritual, and welcoming. Return ONLY the translated string: "${text}"`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const translated = response.text?.trim() || text;
    localStorage.setItem(cacheKey, translated);
    return translated;
  } catch (error) {
    console.warn("AI Translation fallback to source.", error);
    return text;
  }
};
