import { Gem, BadgeCheck, ArrowLeftRight } from "lucide-react";
import { NFT_TIERS } from "../data";
import { Reveal, SectionHead } from "./ui";
import { useLanguage } from "../i18n";

export default function Nft() {
  const { isZh } = useLanguage();
  const tierNames = ["领袖", "将军", "普通"];
  const perks = ["最高分红权重，核心 10 个席位。", "为坚定建设者提供指挥级权重。", "广泛基础，共 260 个席位。"];
  return (
    <section id="nft" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(217,166,42,0.12),transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "300 个固定席位" : "300 Fixed Positions"}
          title={isZh ? <>FOMO LIFE <span className="text-glow-gold text-gold">创世</span></> : <>FOMO LIFE <span className="text-glow-gold text-gold">GENESIS</span></>}
          sub={isZh ? "固定供应的权益与分红层。供应量永不增加，权益随所有权转移，可自由交易并永久稀缺。" : "A fixed-supply privilege and dividend layer. Supply will never increase. Benefits transfer with ownership — freely tradable, forever scarce."}
        />

        <Reveal>
          <p className="mx-auto mb-10 flex max-w-xl items-center justify-center gap-3 text-center font-display text-6xl font-black text-gold sm:text-7xl">
            300
            <span className="text-left text-sm font-bold tracking-[0.25em] text-cream/60">{isZh ? <>固定<br />NFT</> : <>FIXED<br />NFTs</>}</span>
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {NFT_TIERS.map((n, i) => (
            <Reveal key={n.tier} delay={i * 0.1}>
              <div
                className="group relative h-full overflow-hidden p-8 transition duration-300 hover:-translate-y-2"
                style={{ border: `1px solid ${n.color}55`, background: `linear-gradient(160deg, ${n.color}14, transparent 55%), #0c0c0c` }}
              >
                <Gem size={36} style={{ color: n.color }} className="mb-4 transition group-hover:scale-110" />
                <p className="text-[11px] font-black tracking-[0.3em]" style={{ color: n.color }}>
                  {(isZh ? tierNames[i] : n.tier).toUpperCase()}
                </p>
                <p className="mt-2 font-display text-5xl font-black text-cream">
                  {n.count}
                  <span className="ml-2 align-middle text-sm font-bold text-cream/50">× weight {n.weight}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{isZh ? perks[i] : n.perk}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: BadgeCheck, t: isZh ? "质押利润的 10%" : "10% of staking profits", d: isZh ? "分配给永久 NFT 分红池。" : "Allocated to the permanent NFT dividend pool." },
            { icon: BadgeCheck, t: isZh ? "多签释放的 10%" : "10% of multisig releases", d: isZh ? "每次创世多签释放都会进入分红池。" : "Every Genesis multisig release feeds the dividend pool." },
            { icon: ArrowLeftRight, t: isZh ? "可交易权益" : "Tradable rights", d: isZh ? "权益按照合约规则随所有权转移。" : "Benefits transfer with ownership per contract rules." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="flex h-full items-start gap-3 border border-gold/20 bg-void p-5">
                <b.icon size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-bold text-cream">{b.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/55">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
