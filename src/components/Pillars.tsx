import { Reveal } from "./ui";
import { useLanguage, copy } from "../i18n";
import { Landmark, Coins, Gem, Orbit } from "lucide-react";

const PILLARS = [
  { icon: "landmark" as const, t: "FOMO VAULT", tZh: "FOMO 金库", d: "The competitive on-chain engine.", dZh: "具有竞争力的链上引擎。" },
  { icon: "coins" as const, t: "FOMO TOKEN", tZh: "FOMO 代币", d: "The native economic asset.", dZh: "原生经济资产。" },
  { icon: "gem" as const, t: "GENESIS NFT", tZh: "创世 NFT", d: "300 fixed positions.", dZh: "300 个固定席位。" },
  { icon: "orbit" as const, t: "COMMUNITY", tZh: "社区", d: "Consensus drives momentum.", dZh: "共识驱动动力。" },
];

const ICON_MAP = { landmark: Landmark, coins: Coins, gem: Gem, orbit: Orbit };

export default function Pillars() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section className="py-32 px-8 max-w-[1280px] mx-auto">
      <div className="mb-20">
        <div className="w-12 h-px bg-gold/50 mb-8" />
        <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream">
          WHAT IS FOMO LIFE?
        </h2>
        <p className="mt-6 text-stone-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
          {label(
            "A decentralized on-chain ecosystem built around participation, staking, rewards, deflationary mechanics and community consensus.",
            "一个围绕参与、质押、奖励、通缩机制和社区共识构建的去中心化链上生态系统。"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map((p, i) => {
          const Icon = ICON_MAP[p.icon];
          return (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group p-10 bg-charcoal/50 border border-gold/10 hover:border-amber/30 transition-colors duration-500">
                <Icon size={24} className="text-gold/60 mb-10" />
                <h3 className="text-sm tracking-widest text-cream mb-4 font-light uppercase">
                  {label(p.t, p.tZh)}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {label(p.d, p.dZh)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
