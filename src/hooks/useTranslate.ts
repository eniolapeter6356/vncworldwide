import { useState, useEffect } from 'react';
import { type Language, DICTIONARY } from '../constants/siteData.ts';
import { translateText } from '../services/translationService.ts';

export const useTranslation = (key: string, lang: Language) => {
  const [translated, setTranslated] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      // 1. Check if we have hardcoded translations in the dictionary
      const staticContent = DICTIONARY[lang]?.[key];
      if (staticContent) {
        setTranslated(staticContent);
        return;
      }

      // 2. Get source text from English dictionary or use the key as fallback
      const source = DICTIONARY['en'][key] || key;
      if (lang === 'en') {
        setTranslated(source);
        return;
      }

      // 3. Perform AI Translation
      setIsLoading(true);
      const res = await translateText(source, lang);
      setTranslated(res);
      setIsLoading(false);
    };

    run();
  }, [key, lang]);

  return { text: translated, isLoading };
};
