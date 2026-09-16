import { Coins, Vault, Gem, Users, AlertTriangle, Link2, EyeOff } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const PILLARS = [
  { icon: Vault, t: "FOMO Vault", d: "The central participation engine. Stake, compete, weigh in — the contract decides everything." },
  { icon: Coins, t: "FOMO Token", d: "The native economic asset: Vault fuel, staking math, holder splits and deflation flows." },
  { icon: Gem, t: "Genesis NFT", d: "300 fixed privilege positions. Permanent dividend layer for core contributors." },
  { icon: Users, t: "Community", d: "Community is consensus. Consensus is wealth. 30 studios • 500 communities strong." },
];

const PROBLEMS = [
  { icon: AlertTriangle, t: "Attention ≠ Participation", d: "Token-only hype is hard to convert into sustained ecosystem participation." },
  { icon: Link2, t: "Disconnected Incentives", d: "When community growth and protocol activity run as separate systems, both decay." },
  { icon: EyeOff, t: "Opaque Mechanics", d: "Poorly documented rules leave users unable to understand how an ecosystem works." },
];

export default function Pillars() {
  return (
    <>
      <section id="pillars" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          kicker="What is FOMO Life?"
          title={<>MECHANISM <span className="text-gold">FIRST.</span></>}
          sub="FOMO Life is a Web3 ecosystem centered on the FOMO Vault — on-chain participation, native token economy, reward distribution, deflationary flows and a fixed Genesis NFT layer. One architecture, not isolated features."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="panel group h-full p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(217,166,42,0.25)]">
                <p.icon size={34} className="mb-4 text-gold transition group-hover:scale-110 group-hover:text-amber" />
                <h3 className="font-display text-lg font-bold tracking-wider text-cream">{p.t.toUpperCase()}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-blood/20 bg-gradient-to-b from-blood/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHead
            kicker="The Design Problem"
            title={<>FROM ATTENTION <span className="text-glow-red text-blood">TO PARTICIPATION</span></>}
            sub="Many launches create attention without a coherent participation mechanism. FOMO Life's response: connect mechanism + economics + community + documentation in one visible architecture."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="h-full border border-blood/25 bg-void p-7">
                  <p.icon size={30} className="mb-4 text-blood" />
                  <h3 className="font-display text-lg font-bold text-cream">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
