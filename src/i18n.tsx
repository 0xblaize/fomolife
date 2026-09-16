import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "zh" | "en";

type LanguageContextValue = {
  lang: Language;
  isZh: boolean;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "zh";
    return window.localStorage.getItem("fomo-language") === "en" ? "en" : "zh";
  });

  const value = useMemo(
    () => ({
      lang,
      isZh: lang === "zh",
      toggle: () => {
        const next = lang === "zh" ? "en" : "zh";
        setLang(next);
        window.localStorage.setItem("fomo-language", next);
        document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function copy(en: string, zh: string, isZh: boolean) {
  return isZh ? zh : en;
}
