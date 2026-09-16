import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, Globe2 } from "lucide-react";
import { SOCIALS, TELEGRAM } from "../data";
import { useLanguage, copy } from "../i18n";

const LINKS = [
  { label: "Vault", href: "#vault" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Genesis NFT", href: "#nft" },
  { label: "IDO", href: "#ido" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

function SocialIcon({ type }: { type: (typeof SOCIALS)[number]["icon"] }) {
  if (type === "telegram") return <Send size={15} />;
  if (type === "debox") return <Globe2 size={15} />;
  return <span className="text-sm font-black leading-none" aria-hidden="true">𝕏</span>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isZh, toggle } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-cream/15 bg-void/95 backdrop-blur-xl" : "bg-void/35 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/image.png" alt="FOMO Life logo" className="h-11 w-11 rounded-full border border-gold/50 object-cover shadow-[0_0_24px_rgba(217,166,42,0.35)]" />
          <div className="leading-tight">
            <p className="font-display text-base font-bold tracking-wider text-cream">FOMO LIFE</p>
            <p className="text-[11px] tracking-[0.3em] text-gold/80">FOMO人生</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-[0.2em] text-cream/70 uppercase transition hover:text-gold"
            >
              {label(l.label, ({ Vault: "永恒金库", Tokenomics: "代币经济", "Genesis NFT": "创世 NFT", IDO: "IDO", Roadmap: "路线图", FAQ: "常见问题" } as Record<string, string>)[l.label] ?? l.label)}
            </a>
          ))}
          <button type="button" onClick={toggle} className="lang-toggle" aria-label={isZh ? "Switch to English" : "切换中文"}>
            {isZh ? "EN" : "中文"}
          </button>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-amber/60 bg-amber px-5 py-2.5 text-xs font-black tracking-widest text-void uppercase transition hover:bg-cream"
          >
            <Send size={14} /> {label("Join Community", "加入社区")}
          </a>
          <div className="flex items-center gap-2 border-l border-cream/15 pl-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/65 transition hover:border-amber hover:text-amber"
              >
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center lg:hidden">
          <button type="button" onClick={toggle} className="lang-toggle" aria-label={isZh ? "Switch to English" : "切换中文"}>
            {isZh ? "EN" : "中文"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-cream/75"
            aria-label="Menu"
          >
          {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-gold/25 bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gold/10 py-3 text-sm font-bold tracking-widest text-cream/80 uppercase"
                >
                  {label(l.label, ({ Vault: "永恒金库", Tokenomics: "代币经济", "Genesis NFT": "创世 NFT", IDO: "IDO", Roadmap: "路线图", FAQ: "常见问题" } as Record<string, string>)[l.label] ?? l.label)}
                </a>
              ))}
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 border border-amber/60 bg-amber px-5 py-3 text-xs font-black tracking-widest text-void uppercase transition hover:bg-cream"
              >
                <Send size={14} /> {label("Join Community", "加入社区")}
              </a>
              <div className="mt-3 flex gap-2 border-t border-cream/10 pt-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/65 transition hover:border-amber hover:text-amber"
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
