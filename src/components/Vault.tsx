import { motion } from "framer-motion";
import { Trophy, Zap, Flame, Crown, Gem, Info } from "lucide-react";
import { VAULT_ALLOCATION, VAULT_STEPS } from "../data";
import { Reveal, SectionHead, GoldButton } from "./ui";
import { useLanguage } from "../i18n";

const ICONS = [Trophy, Zap, Flame, Crown, Gem];

export default function Vault() {
  const { isZh } = useLanguage();
  const allocationLabels = ["大奖池", "即时奖励", "永久销毁", "前 20 名质押者", "创世 NFT 奖励"];
  const allocationDescriptions = ["最终合格排名的主要竞争奖励。大奖池中 60% 给最终获胜者，40% 由前 20 名质押者按权重分配。", "根据参与权重实时发放的奖励。", "永久从流通中移除，以代码创造稀缺性。", "按质押权重分配给符合条件的高权重参与者。", "用于创世 NFT 奖励机制。"];
  const stepTitles = ["进入", "质押", "计权", "竞争", "分配", "领取并循环"];
  const stepDescriptions = ["金库开放后进入。没有后门，没有白名单，合约就是唯一入口。", "按照当前协议规则锁定符合条件的资产。", "你的质押会在金库中形成可衡量的权重。", "排名和时间会共同影响每一轮结果。", "活动资金流向奖池、奖励、销毁和创世 NFT。", "领取需支付 5% BNB 费用，全部进入价格支持合约。"];
  return (
    <section id="vault" className="relative overflow-hidden">
      <div className="circuit-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "核心引擎" : "The Core Engine"}
          title={isZh ? <>FOMO <span className="text-glow-gold text-gold">金库</span></> : <>THE FOMO <span className="text-glow-gold text-gold">VAULT</span></>}
          sub={isZh ? "永恒金库。参与者依据当前协议规则质押，金库活动分配到五个明确方向，每一次参与都有归属。" : "The Eternal Vault. Participants stake under the active protocol rules, and Vault activity is distributed across five defined destinations. Every participation has a destination."}
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
                        {isZh ? allocationLabels[i] : a.label}
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
                      {isZh ? allocationDescriptions[i] : a.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 flex items-start gap-3 border border-gold/30 bg-gold/5 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-gold" />
            <p className="text-xs leading-relaxed text-cream/70 sm:text-sm">
              <span className="font-bold text-gold">{isZh ? "大奖规则：" : "Grand Prize rule:"}</span> {isZh ? "大奖池的 60% 给最终合格获胜者，剩余 40% 按质押权重分配给前 20 名质押者。" : "60% of the Grand Prize Pool goes to the final qualifying winner — the remaining 40% is distributed across the top 20 stakers by staking weight."}
            </p>
          </div>
        </div>

        {/* steps */}
        <h3 className="mb-8 text-center text-xs font-black tracking-[0.35em] text-gold uppercase">
          {isZh ? "金库如何运作" : "How the Vault Works"}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VAULT_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-gold/20 bg-char p-6 transition hover:border-gold/60">
                <span className="font-display text-5xl font-black text-gold/15 transition group-hover:text-gold/30">
                  {s.n}
                </span>
                <h4 className="mt-2 font-display text-lg font-bold tracking-widest text-gold">{isZh ? stepTitles[i] : s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{isZh ? stepDescriptions[i] : s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-blood transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <GoldButton href="#ido">{isZh ? "查看 IDO 入口" : "Check IDO Access"}</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
