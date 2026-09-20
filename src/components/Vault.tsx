import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";

const ALLOCATIONS = [
  { pct: "40%", label: "GRAND PRIZE", labelZh: "大奖", span: "col-span-2 md:col-span-1", border: "border-b-2 border-gold/60" },
  { pct: "30%", label: "INSTANT REWARD", labelZh: "即时奖励", span: "", border: "" },
  { pct: "10%", label: "BURN", labelZh: "销毁", span: "", border: "" },
  { pct: "10%", label: "TOP STAKERS", labelZh: "顶级质押者", span: "", border: "" },
  { pct: "10%", label: "GENESIS NFT", labelZh: "创世 NFT", span: "", border: "" },
];

export default function Vault() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="vault" className="py-32 px-8 bg-charcoal/20 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="lg:w-1/3">
            <Reveal>
              <div className="w-12 h-px bg-gold/50 mb-8" />
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-[10px] tracking-widest text-stone-500 mb-4">
                {label("THE CORE ENGINE", "核心引擎")}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-6">
                {label("FOMO VAULT", "FOMO 金库")}
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-stone-400 font-light leading-relaxed text-sm">
                {label(
                  "Every participation has a destination. The supplied allocation architecture separates prize, reward, burn, staker and Genesis NFT flows.",
                  "每一次参与都有归宿。提供的分配架构将奖金、奖励、销毁、质押者和创世 NFT 流向分开。"
                )}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5">
            {ALLOCATIONS.map((a) => (
              <div
                key={a.label}
                className={`${a.span} p-10 bg-void flex flex-col justify-center items-center text-center ${a.border}`}
              >
                <span className="text-5xl font-light text-cream mb-4">{a.pct}</span>
                <span className="text-[10px] tracking-widest text-stone-500 uppercase">
                  {label(a.label, a.labelZh)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
