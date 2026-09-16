import { Send, AlertTriangle, Globe2 } from "lucide-react";
import { SOCIALS, TELEGRAM } from "../data";
import { Reveal } from "./ui";
import { copy, useLanguage } from "../i18n";

const label = (en: string, zh: string, isZh: boolean) => copy(en, zh, isZh);

function LogoLockup() {
  return <img src="/image.png" alt="FOMO Life logo" className="mx-auto h-20 w-20 rounded-full border border-gold/50 object-cover shadow-[0_0_35px_rgba(217,166,42,0.35)]" />;
}

function SocialIcon({ type }: { type: (typeof SOCIALS)[number]["icon"] }) {
  if (type === "telegram") return <Send size={17} />;
  if (type === "debox") return <Globe2 size={17} />;
  return <span className="text-base font-black leading-none" aria-hidden="true">𝕏</span>;
}

export default function Footer() {
  const { isZh } = useLanguage();
  return (

    <footer className="border-t border-gold/25 bg-void">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center">
            <LogoLockup />
            <p className="mt-5 font-display text-4xl font-black text-cream sm:text-6xl">
              FOMO LIFE
            </p>
            <p className="mt-2 text-sm tracking-[0.4em] text-gold">FOMO人生 • {label("A BRILLIANT LIFE", "美好人生", isZh)}</p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-cream/55">
              {label("A tribute to every holder who chooses faith over fear.", "致敬每一位选择信念而非恐惧的持有者。", isZh)}
            </p>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber px-8 py-4 text-sm font-black tracking-widest text-void uppercase"
            >
              <Send size={16} /> {label("Join Telegram", "加入 Telegram", isZh)}
            </a>
            <div className="mt-5 flex justify-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/65 transition hover:border-amber hover:text-amber"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex items-start gap-3 border border-blood/40 bg-blood/5 p-5">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-blood" />
          <p className="text-[11px] leading-relaxed text-cream/55 sm:text-xs">
            <span className="font-bold text-blood">RISK DISCLOSURE:</span> Nothing on this page
            is financial advice. Token mechanics are described as protocol design — burns, fees
            and reward flows are not guarantees of profit, appreciation, exchange listing or
            success. Participation in on-chain protocols carries risk, including total loss.
            Verify contract addresses and payment instructions only through official channels.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 text-[11px] tracking-widest text-cream/40 uppercase sm:flex-row">
          <p>© 2026 FOMO Life • No CEO, only code</p>
          <div className="flex gap-6">
            <a href="#vault" className="hover:text-gold">Vault</a>
            <a href="#tokenomics" className="hover:text-gold">Tokenomics</a>
            <a href="#ido" className="hover:text-gold">IDO</a>
            <a href="#faq" className="hover:text-gold">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
