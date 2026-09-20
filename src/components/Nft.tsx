import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";

const TIERS = [
  { tier: "LEADER", tierZh: "领袖", qty: "10", weight: "5" },
  { tier: "GENERAL", tierZh: "将军", qty: "30", weight: "3" },
  { tier: "COMMON", tierZh: "普通", qty: "260", weight: "2" },
];

export default function Nft() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="genesis" className="py-32 px-8 max-w-[1280px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="w-12 h-px bg-gold/50 mb-8" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[10px] tracking-widest text-stone-500 mb-4">
              {t("FIXED SCARCITY", "固定稀缺性")}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-6">
              {t("GENESIS NFT", "创世 NFT")}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-stone-400 font-light leading-relaxed text-sm mb-12">
              {t(
                "A fixed-supply privilege and dividend layer within the FOMO Life ecosystem.",
                "FOMO Life 生态系统内的固定供应特权和分红层。"
              )}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="p-8 bg-charcoal/30 border-l border-ember/40">
              <p className="text-xs text-stone-400 leading-relaxed">
                {t(
                  "10% of ecosystem staking profits are allocated to the permanent NFT dividend pool, distributed according to fixed tier weights and applicable on-chain rules.",
                  "生态系统质押利润的 10% 分配给永久性 NFT 分红池，根据固定的等级权重和适用的链上规则进行分配。"
                )}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 bg-gold/10 p-6">
                <span className="text-[10px] tracking-widest text-gold">{t("TIER", "等级")}</span>
                <span className="text-[10px] tracking-widest text-gold">{t("QUANTITY", "数量")}</span>
                <span className="text-[10px] tracking-widest text-gold text-right">{t("WEIGHT", "权重")}</span>
              </div>
              {TIERS.map((tItem) => (
                <div key={tItem.tier} className="grid grid-cols-3 p-6 border-t border-white/5 bg-void hover:bg-charcoal/40 transition-colors duration-300">
                  <span className="text-sm text-cream font-light">{t(tItem.tier, tItem.tierZh)}</span>
                  <span className="text-sm text-stone-400 font-mono">{tItem.qty}</span>
                  <span className="text-sm text-stone-400 font-mono text-right">{tItem.weight}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 p-6 border-t border-white/5 bg-charcoal/20">
                <span className="text-[10px] tracking-widest text-stone-500">{t("TOTAL", "总计")}</span>
                <span className="text-[10px] tracking-widest text-stone-500 font-mono">300</span>
                <span className="text-[10px] tracking-widest text-stone-500 text-right">{t("NEVER INCREASED", "永不增发")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
