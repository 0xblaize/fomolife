import { motion } from "framer-motion";
import { Repeat, TrendingDown, Banknote, Flame } from "lucide-react";
import { TAX_SPLIT } from "../data";
import { Reveal, SectionHead } from "./ui";

const LOOP = ["PARTICIPATION", "PROTOCOL ACTIVITY", "REWARDS + BURN", "SCARCITY", "COMMUNITY ATTENTION", "REPEAT"];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="border-y border-gold/20 bg-char/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          kicker="The Native Economic Asset"
          title={<>TOKEN <span className="text-gold">TAX</span> & FLYWHEEL</>}
          sub="3% on every buy and sell. No team cut, no hidden wallets — the tax splits three ways, and half of it dies forever."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* tax visual */}
          <Reveal>
            <div className="panel p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full border-4 border-gold bg-void shadow-[0_0_60px_rgba(217,166,42,0.4)]"
              >
                <div>
                  <p className="font-display text-4xl font-black text-gold">3%</p>
                  <p className="text-[10px] font-bold tracking-[0.25em] text-cream/60">TAX NODE</p>
                </div>
              </motion.div>
              <div className="space-y-4 text-left">
                {TAX_SPLIT.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="border border-gold/20 bg-void p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-wider uppercase" style={{ color: t.color }}>
                        {t.label}
                      </span>
                      <span className="font-display text-xl font-black" style={{ color: t.color }}>{t.pct}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.12 }}
                        className="h-full rounded-full"
                        style={{ background: t.color }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-cream/55">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* flywheel */}
          <div>
            <Reveal>
              <div className="panel p-8">
                <h3 className="mb-2 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-gold uppercase">
                  <Repeat size={15} /> The FOMO Economic Engine
                </h3>
                <p className="mb-6 text-xs text-cream/50">Mechanism design — not a promise of profit.</p>
                <div className="flex flex-wrap items-center gap-2">
                  {LOOP.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        whileHover={{ scale: 1.08 }}
                        className={`border px-3 py-2 text-[11px] font-black tracking-wider ${
                          i === 2
                            ? "border-blood/60 bg-blood/15 text-blood"
                            : "border-gold/40 bg-gold/5 text-gold"
                        }`}
                      >
                        {s}
                      </motion.span>
                      {i < LOOP.length - 1 && <span className="text-gold/60">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 border border-blood/30 bg-gradient-to-br from-blood/15 to-transparent p-8">
                <h3 className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-blood uppercase">
                  <Flame size={15} /> Claim → Pump Loop
                </h3>
                <p className="text-sm leading-relaxed text-cream/75">
                  Every reward or principal claim carries a{" "}
                  <span className="font-black text-amber">5% BNB fee</span> — injected 100%
                  into the designated price-support contract. This is a protocol flow, not a
                  guarantee of price appreciation or profit.
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs font-bold tracking-wider text-cream/60 uppercase">
                  <Banknote size={15} className="text-gold" />
                  + protocol price-support operation every minute
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-5 flex items-start gap-3 border border-gold/30 bg-void p-5">
                <TrendingDown size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-xs leading-relaxed text-cream/65 sm:text-sm">
                  <span className="font-bold text-gold">Designed scarcity:</span> burns exist at
                  both the tax layer (50%) and the Vault layer (10%). Burns reduce the supply in
                  those flows — they are mechanism design, not a guarantee of price appreciation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
