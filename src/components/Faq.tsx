import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, X, Send } from "lucide-react";
import { FAQS, TELEGRAM } from "../data";
import { Reveal, SectionHead } from "./ui";

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((f, i) => (
        <Reveal key={f.q} delay={Math.min(i * 0.04, 0.2)}>
          <div className={`border transition ${open === i ? "border-gold/60 bg-char" : "border-gold/20 bg-void"}`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-sm font-bold text-cream sm:text-base">{f.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-gold">
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-cream/65">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const GUIDE_RULES: [RegExp, string][] = [
  [/tax/i, "3% on every buy and sell — 50% burned, 49% to staking rewards, 1% split chain-wide to holders."],
  [/vault|allocat|40|30/i, "The Vault splits 40% Grand Prize, 30% Instant Rewards, 10% Burn, 10% Top 20 Stakers, 10% Genesis NFT. Of the Grand Prize pool: 60% to the final winner, 40% across the top 20 by weight."],
  [/nft|genesis|300/i, "300 fixed Genesis NFTs: 10 Leader (weight 5), 30 General (weight 3), 260 Common (weight 2). Never more."],
  [/ido|buy|participat|join/i, "IDO: subscription from Sep 16 14:00, 500 allocations, launch Sep 18–20 on Butterfly. Register only via the official Telegram — never trust DMs."],
  [/claim|fee|bnb/i, "Claims carry a 5% BNB fee routed 100% into the designated price-support contract. This describes mechanism design, not guaranteed appreciation."],
  [/audit|safe|scam|contract/i, "No audit is claimed until a report is published here. The contract address appears on this page only after verification. Verify everything through the official channel."],
  [/price|profit|guarantee|moon|pump/i, "FOMO Life describes mechanism design, not profit. Burns and fees are protocol flows — never a promise of price appreciation."],
  [/telegram|community|contact/i, `Official Telegram: ${TELEGRAM}`],
];

function GuideWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<[string, string][]>([
    ["bot", "I am the FOMO Guide. Ask me about the Vault, tax, NFTs, IDO, claims — or scams. I never give financial advice."],
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const q = input.trim();
    if (!q) return;
    const hit = GUIDE_RULES.find(([re]) => re.test(q));
    const a = hit
      ? hit[1]
      : "I can explain the Vault, 3% tax, 40/30/10/10/10 allocation, Genesis tiers, IDO rules, claim fees, or verification. Try one of those.";
    setMsgs((m) => [...m, ["you", q], ["bot", a]]);
    setInput("");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="mb-3 flex h-[420px] w-[320px] flex-col border border-gold/40 bg-void shadow-[0_0_60px_rgba(217,166,42,0.3)] sm:w-[360px]"
          >
            <div className="flex items-center justify-between border-b border-gold/25 bg-char px-4 py-3">
              <p className="text-xs font-black tracking-[0.25em] text-gold uppercase">FOMO Guide</p>
              <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-cream" aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map(([who, t], i) => (
                <div key={i} className={`max-w-[85%] p-3 text-xs leading-relaxed ${who === "bot" ? "border border-gold/25 bg-char text-cream/85" : "ml-auto bg-gold/20 text-cream"}`}>
                  {t}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-gold/25 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about the Vault…"
                className="flex-1 border border-gold/25 bg-char px-3 py-2 text-xs text-cream outline-none placeholder:text-cream/30 focus:border-gold/60"
              />
              <button onClick={send} className="bg-gold p-2 text-void hover:bg-amber" aria-label="Send">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-blood text-void shadow-[0_0_40px_rgba(217,166,42,0.55)]"
        aria-label="FOMO Guide"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="border-t border-gold/20 bg-char/40">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker="Knowledge Base"
          title={<>QUESTIONS, <span className="text-gold">ANSWERED.</span></>}
          sub="Still curious? The FOMO Guide bubble (bottom-right) answers Vault, tax, NFT and IDO questions on demand."
        />
        <FaqAccordion />
      </div>
      <GuideWidget />
    </section>
  );
}

export { TELEGRAM };
