import { defaultLang, ui, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || (key as string);
  };
}

export function getLocalizedPath(targetLang: Lang, anchor: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanAnchor = anchor.startsWith('#') ? anchor : anchor ? `#${anchor}` : '';
  
  if (targetLang === defaultLang) {
    return `${base}/${cleanAnchor}`;
  }
  return `${base}/${targetLang}/${cleanAnchor}`;
}
