import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";
import { ROADMAP } from "../data";

const PHASE_COLORS = [
  "border-gold/40",
  "border-gold/40",
  "border-amber/40",
  "border-amber/40",
  "border-ember/40",
];

const ITEMS_ZH: Record<string, string[]> = {
  "01": ["品牌发展", "金库架构", "代币经济确定", "智能合约开发", "社区基础"],
  "02": ["合约测试", "安全审查与审计", "蝴蝶启动", "流动性部署"],
  "03": ["FOMO 金库开放", "创世 NFT 推出", "社区活动", "奖励生态系统激活"],
  "04": ["治理发展", "新效用", "战略整合", "全球扩展"],
  "05": ["协议优化", "社区基础设施", "去中心化产品", "生态系统增长"],
};

export default function Roadmap() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="roadmap" className="py-32 px-8 bg-charcoal/20 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="w-12 h-px bg-gold/50 mb-8" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-16">
            {t("ROADMAP", "路线图")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.08}>
              <div className={`p-8 bg-void border-t ${PHASE_COLORS[i]} hover:bg-charcoal/30 transition-colors duration-300`}>
                <span className="text-[10px] text-stone-500 font-mono mb-6 block">{r.phase}</span>
                <h3 className="text-sm tracking-widest text-cream mb-4 font-light uppercase">
                  {t(r.title, r.titleZh)}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {(isZh ? (ITEMS_ZH[r.phase] ?? r.items) : r.items).join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
