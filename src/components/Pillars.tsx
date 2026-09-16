import { Coins, Vault, Gem, Users, AlertTriangle, Link2, EyeOff } from "lucide-react";
import { Reveal, SectionHead, LocalizedText } from "./ui";
import { useLanguage } from "../i18n";

const ZH_PILLARS = ["永恒金库", "FOMO 代币", "创世 NFT", "社区共识"];
const ZH_PILLAR_DESC = ["核心参与引擎。质押、竞争、计算权重，一切由合约决定。", "生态的原生经济资产：金库燃料、质押计算、持有者分配与通缩机制。", "300 个固定权益席位，为核心贡献者提供长期分红层。", "社区即共识，共识即财富。30 个线下工作室与 500 个线上社区。"];
const ZH_PROBLEMS = ["注意力不等于参与", "激励彼此割裂", "机制不够透明"];
const ZH_PROBLEM_DESC = ["仅靠代币热度很难转化为持续的生态参与。", "当社区增长与协议活动彼此独立时，两者都会逐渐衰减。", "文档不足会让用户难以理解生态系统的运行方式。"];

const Text = ({ en, zh }: { en: string; zh: string }) => <LocalizedText en={en} zh={zh} />;

export { ZH_PILLARS, ZH_PILLAR_DESC, ZH_PROBLEMS, ZH_PROBLEM_DESC };

function Dual({ en, zh }: { en: string; zh: string }) {
  return <Text en={en} zh={zh} />;
}

export { Dual };

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
  const { isZh } = useLanguage();
  return (
    <>
      <section id="pillars" className="relative mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker="What is FOMO Life?"
          title={<><Dual en="MECHANISM" zh="机制" /> <span className="text-gold"><Dual en="FIRST." zh="优先。" /></span></>}
          sub="FOMO Life is a Web3 ecosystem centered on the FOMO Vault — on-chain participation, native token economy, reward distribution, deflationary flows and a fixed Genesis NFT layer. One architecture, not isolated features."
          kickerZh="什么是 FOMO人生？"
          subZh="FOMO人生是一个以 FOMO 金库为核心的 Web3 生态：连接链上参与、原生代币经济、奖励分配、通缩机制与固定创世 NFT 层。不是孤立功能，而是一套完整架构。"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="panel group h-full p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(217,166,42,0.25)]">
                <p.icon size={34} className="mb-4 text-gold transition group-hover:scale-110 group-hover:text-amber" />
                <h3 className="font-display text-lg font-bold tracking-wider text-cream">{(isZh ? ZH_PILLARS[i] : p.t).toUpperCase()}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{isZh ? ZH_PILLAR_DESC[i] : p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-blood/20 bg-gradient-to-b from-blood/5 to-transparent">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
          <SectionHead
            kicker="The Design Problem"
            title={<><Dual en="FROM ATTENTION" zh="从注意力" /> <span className="text-glow-red text-blood"><Dual en="TO PARTICIPATION" zh="到参与" /></span></>}
            sub="Many launches create attention without a coherent participation mechanism. FOMO Life's response: connect mechanism + economics + community + documentation in one visible architecture."
            kickerZh="设计命题"
            subZh="许多项目能够制造注意力，却缺少连贯的参与机制。FOMO人生的回应是：将机制、经济、社区与文档连接成一套可见的完整架构。"


          />
          <div className="grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="h-full border border-blood/25 bg-void p-7">
                  <p.icon size={30} className="mb-4 text-blood" />
                  <h3 className="font-display text-lg font-bold text-cream">{isZh ? ZH_PROBLEMS[i] : p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{isZh ? ZH_PROBLEM_DESC[i] : p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
