import { useLanguage } from "../i18n";
import { TELEGRAM } from "../data";

const LINKS = [
  { label: "VAULT", href: "#vault" },
  { label: "TOKENOMICS", href: "#token" },
  { label: "GENESIS NFT", href: "#genesis" },
  { label: "ROADMAP", href: "#roadmap" },
];

export default function Navbar() {
  const { isZh, toggle } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-void/80 backdrop-blur-md border-b border-white/5">
      <a href="#top" className="flex items-center gap-4 group">
        <img
          src="/image.png"
          alt="FOMO Life logo"
          className="w-8 h-8 rounded-full border border-gold/40 object-cover transition-colors duration-300 group-hover:border-gold"
        />
        <span className="tracking-widest font-light text-xs text-cream/90">
          FOMO<span className="text-gold/80"> LIFE</span>
        </span>
      </a>

      <nav className="hidden lg:flex items-center gap-10 text-[11px] tracking-widest text-stone-400">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-cream transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={toggle}
          className="text-[10px] tracking-widest text-stone-400 hover:text-gold transition-colors duration-300 px-4 py-2 border border-transparent hover:border-gold/20 rounded"
        >
          {isZh ? "中文 / EN" : "EN / 中文"}
        </button>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-[10px] tracking-widest text-gold/80 border border-gold/30 px-5 py-2 hover:bg-gold/5 transition-all duration-300"
        >
          JOIN
        </a>
      </div>
    </header>
  );
}
