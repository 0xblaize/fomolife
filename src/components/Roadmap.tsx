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

export default function Roadmap() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  const roadmapTitles = ["基础建设", "部署", "金库激活", "扩张", "长期"];

  return (
    <section id="roadmap" className="py-32 px-8 bg-charcoal/20 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="w-12 h-px bg-gold/50 mb-8" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream mb-16">
            {label("ROADMAP", "路线图")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.08}>
              <div className={`p-8 bg-void border-t ${PHASE_COLORS[i]} hover:bg-charcoal/30 transition-colors duration-300`}>
                <span className="text-[10px] text-stone-500 font-mono mb-6 block">{r.phase}</span>
                <h3 className="text-sm tracking-widest text-cream mb-4 font-light uppercase">
                  {isZh ? roadmapTitles[i] : r.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {r.items.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
