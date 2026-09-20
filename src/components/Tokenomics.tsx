import { motion } from "framer-motion";
import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";

const TAX_ITEMS = [
  { pct: "50%", label: "50% BURN", labelZh: "50% 销毁", desc: "DEFLATION", descZh: "通缩", color: "border-ember/60" },
  { pct: "49%", label: "49% STAKING REWARDS", labelZh: "49% 质押奖励", desc: "REWARDS", descZh: "奖励", color: "border-gold/60" },
  { pct: "1%", label: "1% HOLDER DISTRIBUTION", labelZh: "1% 持有者分配", desc: "HOLDERS", descZh: "持有者", color: "border-amber/60" },
];

export default function Tokenomics() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="token" className="py-32 px-8 bg-charcoal/20 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-24">
          <Reveal>
            <div className="w-12 h-px bg-gold/50 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream">
              {t("TOKEN ECONOMICS", "代币经济")}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center max-w-4xl mx-auto">
          <Reveal>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-64 h-64 rounded-full border border-gold/30 flex items-center justify-center"
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

          <div className="flex flex-col gap-6">
            {TAX_ITEMS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className={`p-6 bg-void border-l-2 ${item.color}`}>
                  <p className="text-sm tracking-wider text-cream mb-1 font-light">
                    {t(item.label, item.labelZh)}
                  </p>
                  <p className="text-[10px] text-stone-500 tracking-widest uppercase">
                    {t(item.desc, item.descZh)}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mt-4 text-[10px] tracking-widest text-stone-500 uppercase">
                {t("PRICE SUPPORT: 0.01 BNB/minute", "价格支撑：0.01 BNB/分钟")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
