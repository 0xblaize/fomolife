import { Send, AlertTriangle } from "lucide-react";
import { TELEGRAM } from "../data";
import { Reveal } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-void">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-4xl font-black text-cream sm:text-6xl">
              FOMO LIFE
            </p>
            <p className="mt-2 text-sm tracking-[0.4em] text-gold">FOMO人生 • A BRILLIANT LIFE</p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-cream/55">
              A tribute to every holder who chooses faith over fear.
            </p>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber px-8 py-4 text-sm font-black tracking-widest text-void uppercase"
            >
              <Send size={16} /> t.me/FomoLife_Official
            </a>
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
