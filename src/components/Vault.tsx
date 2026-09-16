import { motion } from "framer-motion";
import { Trophy, Zap, Flame, Crown, Gem, Info } from "lucide-react";
import { VAULT_ALLOCATION, VAULT_STEPS } from "../data";
import { Reveal, SectionHead, GoldButton } from "./ui";

const ICONS = [Trophy, Zap, Flame, Crown, Gem];

export default function Vault() {
  return (
    <section id="vault" className="relative overflow-hidden">
      <div className="circuit-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full px-4 py-24 sm:px-6">
        <SectionHead
          kicker="The Core Engine"
          title={<>THE FOMO <span className="text-glow-gold text-gold">VAULT</span></>}
          sub="The Eternal Vault. Participants stake under the active protocol rules, and Vault activity is distributed across five defined destinations. Every participation has a destination."
        />

        {/* allocation bars */}
        <div className="panel mb-16 p-6 sm:p-10">
          <h3 className="mb-8 text-center text-xs font-black tracking-[0.35em] text-gold uppercase">
            Vault Allocation — 40 / 30 / 10 / 10 / 10
          </h3>
          <div className="space-y-6">
            {VAULT_ALLOCATION.map((a, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={a.label} delay={i * 0.06}>
                  <div className="group">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-sm font-bold tracking-wider text-cream uppercase">
                        <Icon size={16} style={{ color: a.color }} />
                        {a.label}
                      </span>
                      <span className="font-display text-2xl font-black" style={{ color: a.color }}>
                        {a.pct}%
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${a.pct * 2.2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${a.color}55, ${a.color})`, boxShadow: `0 0 18px ${a.color}` }}
                      />
                    </div>
                    <p className="mt-2 hidden text-xs leading-relaxed text-cream/50 group-hover:block sm:text-sm">
                      {a.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 flex items-start gap-3 border border-gold/30 bg-gold/5 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-gold" />
            <p className="text-xs leading-relaxed text-cream/70 sm:text-sm">
              <span className="font-bold text-gold">Grand Prize rule:</span> 60% of the Grand
              Prize Pool goes to the final qualifying winner — the remaining 40% is distributed
              across the top 20 stakers by staking weight.
            </p>
          </div>
        </div>

        {/* steps */}
        <h3 className="mb-8 text-center text-xs font-black tracking-[0.35em] text-gold uppercase">
          How the Vault Works
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VAULT_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-gold/20 bg-char p-6 transition hover:border-gold/60">
                <span className="font-display text-5xl font-black text-gold/15 transition group-hover:text-gold/30">
                  {s.n}
                </span>
                <h4 className="mt-2 font-display text-lg font-bold tracking-widest text-gold">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-blood transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <GoldButton href="#ido">Check IDO Access</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
