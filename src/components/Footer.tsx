import { useLanguage, copy } from "../i18n";

export default function Footer() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <footer className="border-t border-gold/20 py-12 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex items-center gap-4">
          <img
            src="/image.png"
            alt="FOMO Life logo"
            className="w-10 h-10 rounded-full border border-gold/40 object-cover"
          />
          <div>
            <div className="tracking-widest font-light text-sm text-cream/90">
              FOMO<span className="text-gold/80"> {t("LIFE", "人生")}</span>
            </div>
            <p className="text-[10px] tracking-widest text-stone-500 uppercase">
              {t("A BRILLIANT LIFE", "精彩人生")}
            </p>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-[10px] tracking-widest text-stone-500 mb-2 uppercase">
            © 2026 FOMO LIFE
          </p>
          <p className="text-[10px] tracking-widest text-stone-600 uppercase">
            {t("MECHANISM FIRST", "机制优先")}
          </p>
        </div>
      </div>
    </footer>
  );
}
