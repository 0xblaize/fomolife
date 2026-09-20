import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";
import { SOCIALS } from "../data";
import { Send, FileText } from "lucide-react";

function SocialIcon({ type }: { type: string }) {
  if (type === "telegram") return <Send size={20} className="text-stone-400" />;
  if (type === "x") return <span className="text-lg font-light text-stone-400">X</span>;
  return <FileText size={20} className="text-stone-400" />;
}

export default function Ecosystem() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="community" className="py-32 px-8 max-w-[1280px] mx-auto text-center">
      <Reveal>
        <div className="w-12 h-px bg-gold/50 mx-auto mb-8" />
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-4">
          {t("COMMUNITY IS CONSENSUS", "社区就是共识")}
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="text-[10px] tracking-widest text-stone-500 mb-20 uppercase">
          {t("CONSENSUS = ECOSYSTEM MOMENTUM", "共识 = 生态动力")}
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="relative w-64 h-64 mx-auto mb-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-4 rounded-full border border-white/5" />
          <div className="absolute inset-12 rounded-full border border-white/10" />
          <div className="text-center z-10 bg-void px-4 py-2">
            <span className="block text-sm tracking-widest text-gold/80 mb-2">FOMO LIFE</span>
            <span className="text-[9px] tracking-widest text-stone-500">
              {t("30 OFFLINE STUDIOS", "30 个线下工作室")}
            </span>
            <br />
            <span className="text-[9px] tracking-widest text-stone-500">
              {t("500 ONLINE COMMUNITIES", "500 个线上社区")}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {SOCIALS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="p-8 border border-white/10 bg-charcoal/20 hover:border-gold/30 hover:bg-charcoal/40 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <SocialIcon type={s.icon} />
              <span className="text-[10px] tracking-widest text-cream uppercase">
                {t(s.label === "X" ? "X / TWITTER" : s.label === "Telegram" ? "TELEGRAM" : "DEBOX", s.label === "X" ? "X / 推特" : s.label === "Telegram" ? "电报" : "DEBOX")}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
