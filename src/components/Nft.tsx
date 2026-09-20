import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";

const TIERS = [
  { tier: "LEADER", tierZh: "领袖", qty: "10", weight: "5", desc: "Genesis Core Tier", descZh: "创世核心层" },
  { tier: "GENERAL", tierZh: "将军", qty: "30", weight: "3", desc: "30 local promotion teams, first-come first-served", descZh: "30 个本地推广团队，先到先得" },
  { tier: "COMMON", tierZh: "普通", qty: "260", weight: "2", desc: "For users who have staked their assets", descZh: "面向已质押资产的用户" },
];

export default function Nft() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="genesis" className="py-32 px-8 max-w-[1280px] mx-auto">
      {/* Top: Image + Heading + Table side by side */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        {/* Left: Image */}
        <div className="flex flex-col items-center lg:items-start">
          <Reveal>
            <div className="w-12 h-px bg-gold/50 mb-6" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[10px] tracking-widest text-stone-500 mb-3">
              {t("FIXED SCARCITY", "固定稀缺性")}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-6">
              {t("GENESIS NFT", "创世 NFT")}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <img
              src="/fomonft.jpg"
              alt="FOMO Genesis NFT"
              className="w-full max-w-sm border border-gold/20 opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </Reveal>
        </div>

        {/* Right: Intro + Table */}
        <div className="flex flex-col gap-6 lg:mt-16">
          <Reveal>
            <p className="text-stone-400 font-light leading-relaxed text-sm">
              {t(
                "A limited-edition privilege certificate within the FOMO Life ecosystem. Total supply fixed at 300, never increased.",
                "FOMO Life 生态系统内的限量版特权证书。总供应量固定为 300，永不增发。"
              )}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="border border-white/10 overflow-hidden">
              <div className="grid grid-cols-4 bg-gold/10 p-5">
                <span className="text-[10px] tracking-widest text-gold">{t("TIER", "等级")}</span>
                <span className="text-[10px] tracking-widest text-gold">{t("QTY", "数量")}</span>
                <span className="text-[10px] tracking-widest text-gold">{t("WEIGHT", "权重")}</span>
                <span className="text-[10px] tracking-widest text-gold text-right">{t("DETAIL", "详情")}</span>
              </div>
              {TIERS.map((tItem) => (
                <div key={tItem.tier} className="grid grid-cols-4 p-5 border-t border-white/5 bg-void hover:bg-charcoal/40 transition-colors duration-300">
                  <span className="text-sm text-cream font-light">{t(tItem.tier, tItem.tierZh)}</span>
                  <span className="text-sm text-stone-400 font-mono">{tItem.qty}</span>
                  <span className="text-sm text-stone-400 font-mono">{tItem.weight}</span>
                  <span className="text-xs text-stone-500 text-right">{t(tItem.desc, tItem.descZh)}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 p-5 border-t border-white/5 bg-charcoal/20">
                <span className="text-[10px] tracking-widest text-stone-500">{t("TOTAL", "总计")}</span>
                <span className="text-[10px] tracking-widest text-stone-500 font-mono">300</span>
                <span className="text-[10px] tracking-widest text-stone-500">—</span>
                <span className="text-[10px] tracking-widest text-stone-500 text-right">{t("NEVER INCREASED", "永不增发")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Core Benefits */}
      <Reveal>
        <div className="mb-16">
          <div className="w-12 h-px bg-gold/50 mb-8" />
          <h3 className="text-xl tracking-widest text-cream mb-8 font-light">
            {t("CORE BENEFITS", "核心权益")}
          </h3>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <Reveal delay={0.05}>
          <div className="p-8 bg-charcoal/30 border-l-2 border-gold/40">
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
              {t("1. STAKING DIVIDEND RIGHTS", "1. 质押分红权")}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "10% of profits from all user staking in the FOMO Life ecosystem are allocated to the NFT permanent dividend pool, distributed to all 300 NFTs by weight.",
                "FOMO Life 生态系统中所有用户质押产生的利润的 10% 分配给 NFT 永久分红池，按权重分配给全部 300 个 NFT。"
              )}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 bg-charcoal/30 border-l-2 border-amber/40">
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
              {t("2. GENESIS MULTISIG DIVIDEND", "2. 创世多签分红")}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "Each time the Genesis multisig releases funds, 10% of the released amount goes to the NFT dividend pool, distributed by NFT weight ratio.",
                "创世多签每次释放资金时，释放金额的 10% 分配给 NFT 分红池，按 NFT 权重比例分配。"
              )}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="p-8 bg-charcoal/30 border-l-2 border-ember/40">
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
              {t("3. FREE TRADING RIGHTS", "3. 自由交易权")}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "NFTs can be freely traded on the secondary market. Benefits transfer with ownership. Snapshot and claim rules based on on-chain contract and official announcements.",
                "NFT 可在二级市场自由交易。权益随所有权转移。快照和领取规则以链上合约和官方公告为准。"
              )}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="p-8 bg-charcoal/30 border-l-2 border-gold/40">
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
              {t("4. FIXED TOTAL SUPPLY", "4. 固定总供应量")}
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "Total supply fixed at 300, never increased or supplemented. Weight structure is fixed and will not change due to market trading.",
                "总供应量固定为 300，永不增发或补充。权重结构固定，不会因市场交易而改变。"
              )}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Distribution Rules */}
      <Reveal>
        <div className="mb-16">
          <div className="w-12 h-px bg-gold/50 mb-8" />
          <h3 className="text-xl tracking-widest text-cream mb-8 font-light">
            {t("DISTRIBUTION RULES", "分配规则")}
          </h3>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <Reveal delay={0.05}>
          <div className="p-8 bg-void border border-gold/20">
            <span className="text-3xl font-light text-gold mb-4 block">10</span>
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">LEADER NFT</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "Core tier. Specific allocation confirmed by Genesis multisig. Information based on official announcements and on-chain records. Must have staked 2M+ tokens.",
                "核心层。具体分配由创世多签确认。信息以官方公告和链上记录为准。需质押 200 万以上代币。"
              )}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-8 bg-void border border-amber/20">
            <span className="text-3xl font-light text-amber mb-4 block">30</span>
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">GENERAL NFT</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "Distributed to 30 local promotion teams, first-come first-served. Register through local outreach studio. Limited to 30 teams.",
                "分配给 30 个本地推广团队，先到先得。通过当地推广工作室注册。限 30 个团队。"
              )}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="p-8 bg-void border border-ember/20">
            <span className="text-3xl font-light text-ember mb-4 block">260</span>
            <h4 className="text-sm tracking-widest text-cream mb-3 font-light">COMMON NFT</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              {t(
                "Distributed to users who have staked assets. Acquisition conditions, snapshot time, and claim method based on official notifications after launch.",
                "分配给已质押资产的用户。获取条件、快照时间和领取方式以启动后的官方通知为准。"
              )}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Key Rules */}
      <Reveal>
        <div className="p-8 bg-charcoal/20 border border-white/5">
          <div className="w-12 h-px bg-gold/50 mb-8" />
          <h3 className="text-xl tracking-widest text-cream mb-6 font-light">
            {t("KEY RULES", "关键规则")}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { en: "Total NFTs: 300, never increased.", zh: "NFT 总数：300，永不增发。" },
              { en: "Weights: Leader 5, General 3, Common 2.", zh: "权重：领袖 5，将军 3，普通 2。" },
              { en: "10% of staking profit dividends go to NFT pool.", zh: "质押利润分红的 10% 进入 NFT 池。" },
              { en: "10% of each Genesis multisig release goes to NFT pool.", zh: "创世多签每次释放金额的 10% 进入 NFT 池。" },
              { en: "NFTs trade freely; benefits transfer with ownership.", zh: "NFT 自由交易；权益随所有权转移。" },
              { en: "All rules subject to on-chain contract and official announcements.", zh: "所有规则以链上合约和官方公告为准。" },
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-gold/40 mt-1 text-xs">▸</span>
                <p className="text-xs text-stone-400 leading-relaxed">{t(rule.en, rule.zh)}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
