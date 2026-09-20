import { motion } from "framer-motion";
import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";
import { useState, useCallback } from "react";

const TAX_ITEMS = [
  { pct: "50%", label: "50% BURN", labelZh: "50% 销毁", desc: "DEFLATION", descZh: "通缩", color: "border-ember/60" },
  { pct: "49%", label: "49% STAKING REWARDS", labelZh: "49% 质押奖励", desc: "REWARDS", descZh: "奖励", color: "border-gold/60" },
  { pct: "1%", label: "1% HOLDER DISTRIBUTION", labelZh: "1% 持有者分配", desc: "HOLDERS", descZh: "持有者", color: "border-amber/60" },
];

function CopyAddress({ address, label, labelZh }: { address: string; label: string; labelZh: string }) {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [address]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p-6 bg-void border border-white/10 hover:border-gold/30 transition-all duration-300 text-left w-full cursor-pointer group"
    >
      <p className="text-[10px] tracking-widest text-stone-500 mb-3">
        {t(label, labelZh)}
      </p>
      <p className="text-xs text-gold/70 font-mono break-all leading-relaxed group-hover:text-gold transition-colors">
        {address}
      </p>
      <p className="text-[9px] tracking-widest text-stone-600 mt-2 uppercase">
        {copied ? "COPIED!" : t("TAP TO COPY", "点击复制")}
      </p>
    </button>
  );
}

const ALLOCATIONS = [
  { project: "Initial Technical Purchase", projectZh: "初始技术购买", qty: "940,000,000", pct: 94, color: "bg-gold" },
  { project: "Prize Pool", projectZh: "奖池", qty: "600,000,000", pct: 60, color: "bg-amber" },
  { project: "Community Promotion Rewards", projectZh: "社区推广奖励", qty: "100,000,000", pct: 10, color: "bg-ember" },
  { project: "\"Black Hole\" Absorption", projectZh: "\"黑洞\" 吸收", qty: "100,000,000", pct: 10, color: "bg-stone-500" },
  { project: "Market Value Management", projectZh: "市值管理", qty: "30,000,000", pct: 3, color: "bg-gold/60" },
  { project: "Private Placement", projectZh: "私募", qty: "44,750,000", pct: 4.5, color: "bg-amber/60" },
  { project: "Joint Venture Lock-up", projectZh: "合资锁仓", qty: "17,750,000", pct: 1.8, color: "bg-ember/60" },
  { project: "Remaining (shareholder release)", projectZh: "剩余（股东释放）", qty: "24,440,000", pct: 2.4, color: "bg-stone-600" },
  { project: "Community, KOL, Tech Airdrops", projectZh: "社区/KOL/技术空投", qty: "5,000,000", pct: 0.5, color: "bg-gold/40" },
  { project: "Initial Phase Suppression", projectZh: "初始阶段压制", qty: "~20,000,000", pct: 2, color: "bg-amber/40" },
];

export default function Tokenomics() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="token" className="py-32 px-8 bg-charcoal/20 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        {/* Header + 3% Circle + Tax Cards */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="w-12 h-px bg-gold/50 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-16">
              {t("TOKEN ECONOMICS", "代币经济")}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-24">
          <Reveal>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-56 h-56 rounded-full border border-gold/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="block text-5xl font-light text-cream mb-2">3%</span>
                  <span className="text-[10px] tracking-widest text-stone-500">
                    {t("BUY / SELL TAX", "买卖税")}
                  </span>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {TAX_ITEMS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className={`p-5 bg-void border-l-2 ${item.color}`}>
                  <p className="text-sm tracking-wider text-cream mb-1 font-light">
                    {t(item.label, item.labelZh)}
                  </p>
                  <p className="text-[10px] text-stone-500 tracking-widest uppercase">
                    {t(item.desc, item.descZh)}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <p className="mt-2 text-[10px] tracking-widest text-stone-500 uppercase">
                {t("PRICE SUPPORT: 0.01 BNB/minute", "价格支撑：0.01 BNB/分钟")}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Total Supply */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-widest text-stone-500 mb-3">
              {t("TOTAL TOKEN SUPPLY", "代币总供应量")}
            </p>
            <span className="text-4xl md:text-5xl font-light text-cream">1,000,000,000</span>
            <p className="text-xs text-stone-500 mt-2">
              {t("1 Billion FOMO Life Tokens", "10 亿 FOMO Life 代币")}
            </p>
          </div>
        </Reveal>

        {/* Allocation Pie */}
        <Reveal>
          <div className="mb-16">
            <div className="w-12 h-px bg-gold/50 mb-8" />
            <h3 className="text-xl tracking-widest text-cream mb-8 font-light">
              {t("ALLOCATION DETAILS", "分配详情")}
            </h3>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            {/* Donut Chart */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {(() => {
                  const total = ALLOCATIONS.reduce((s, a) => s + a.pct, 0);
                  let acc = 0;
                  const colors = ["#D9A62A", "#FFB000", "#FF4A3D", "#78716c", "rgba(217,166,42,0.6)", "rgba(255,176,0,0.6)", "rgba(255,74,61,0.6)", "#57534e", "rgba(217,166,42,0.4)", "rgba(255,176,0,0.4)"];
                  return ALLOCATIONS.map((a, i) => {
                    const pct = (a.pct / total) * 100;
                    const dash = pct * 2.51327;
                    const gap = 251.327 - dash;
                    const offset = -(acc / total) * 251.327;
                    acc += a.pct;
                    return (
                      <circle
                        key={i}
                        cx="100" cy="100" r="40"
                        fill="none"
                        stroke={colors[i]}
                        strokeWidth="28"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={offset}
                        className="transition-all duration-500"
                      />
                    );
                  });
                })()}
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-2xl font-light text-cream">1B</span>
                  <span className="text-[8px] tracking-widest text-stone-500">TOKENS</span>
                </div>
              </div>
            </div>

            {/* Allocation List */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5 gap-4 flex-1">
              {ALLOCATIONS.map((a, i) => {
                const colors = ["bg-gold", "bg-amber", "bg-ember", "bg-stone-500", "bg-gold/60", "bg-amber/60", "bg-ember/60", "bg-stone-600", "bg-gold/40", "bg-amber/40"];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${colors[i]} flex-shrink-0`} />
                    <div className="min-w-0">
                      <p className="text-[10px] text-cream truncate">{t(a.project, a.projectZh)}</p>
                      <p className="text-[9px] text-stone-500 font-mono">{a.qty}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Market Value Management */}
        <Reveal>
          <div className="mb-16">
            <div className="w-12 h-px bg-gold/50 mb-8" />
            <h3 className="text-xl tracking-widest text-cream mb-8 font-light">
              {t("MARKET VALUE MANAGEMENT", "市值管理机制")}
            </h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Reveal delay={0.05}>
            <div className="p-8 bg-charcoal/30 border-l-2 border-gold/40">
              <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
                {t("RBS MECHANISM", "RBS 机制")}
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t(
                  "The market value address uses the RBS (Rebase/Range Bound System) management mechanism for dynamic price stabilization.",
                  "市值地址采用 RBS（再基础/区间绑定系统）管理机制，进行动态价格稳定。"
                )}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-8 bg-charcoal/30 border-l-2 border-amber/40">
              <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
                {t("DAILY UPRISING PHASE", "每日上涨阶段")}
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t(
                  "Gradual buying to suppress overheating. Goal: 300 consecutive days of price increases.",
                  "逐步买入以抑制过热。目标：连续 300 天价格上涨。"
                )}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-8 bg-charcoal/30 border-l-2 border-ember/40">
              <h4 className="text-sm tracking-widest text-cream mb-3 font-light">
                {t("DAILY DECLINING PHASE", "每日下跌阶段")}
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t(
                  "Opportunistic repurchases to stabilize the price, reducing extreme volatility through dynamic adjustments.",
                  " opportunistic 回购以稳定价格，通过动态调整减少极端波动。"
                )}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Community Multi-Signature Wallets */}
        <Reveal>
          <div className="mb-16">
            <div className="w-12 h-px bg-gold/50 mb-8" />
            <h3 className="text-xl tracking-widest text-cream mb-8 font-light">
              {t("COMMUNITY MULTI-SIGNATURE WALLETS", "社区多签钱包")}
            </h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Reveal delay={0.05}>
            <CopyAddress
              address="0x0ea50f4c8fe26e0328b232d0045104336d19ec85"
              label="COMMUNITY WALLET"
              labelZh="社区钱包"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CopyAddress
              address="0x1160c22ef52e5ed5ef3ff7d70d8906aef6843fcb"
              label="MARKET VALUE MULTI-SIGNATURE"
              labelZh="市值多签"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="text-xs text-stone-500 leading-relaxed mb-20">
            {t(
              "All community fund flows are publicly available and subject to community oversight. These tokens have now been transferred to community management and are in the community CTO phase.",
              "所有社区资金流向公开透明，接受社区监督。这些代币现已转移至社区管理，处于社区 CTO 阶段。"
            )}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
