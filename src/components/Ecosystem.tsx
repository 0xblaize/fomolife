import { ShieldCheck, FileSearch, Lock, Users, Megaphone, Globe } from "lucide-react";
import { ROADMAP } from "../data";
import { Reveal, SectionHead } from "./ui";
import { useLanguage } from "../i18n";

export default function Ecosystem() {
  const { isZh } = useLanguage();
  const roadmapTitles = ["基础建设", "部署", "金库启动", "生态扩展", "长期生态"];
  const roadmapItems = [
    ["品牌建设", "金库架构", "代币经济定稿", "智能合约开发", "社区基础"],
    ["合约测试", "安全审查与审计", "Butterfly 上线", "流动性部署"],
    ["开启 FOMO 金库", "创世 NFT 发布", "社区活动", "奖励生态启动"],
    ["治理开发", "新实用功能", "战略整合", "全球扩展"],
    ["协议优化", "社区基础设施", "去中心化产品", "生态增长"],
  ];
  return (
    <>
      <section id="ecosystem" className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "一个相互连接的生态" : "One Connected Ecosystem"}
          title={isZh ? <>社区即共识。<span className="text-gold">共识即财富。</span></> : <>COMMUNITY IS CONSENSUS. <span className="text-gold">CONSENSUS IS WEALTH.</span></>}
          sub={isZh ? "代币 ↔ 金库 ↔ 奖励流 ↔ 创世 NFT ↔ 社区。社区层围绕并推动协议运行。" : "Token ↔ Vault ↔ Reward flows ↔ Genesis NFT ↔ Community. The community layer surrounds and powers the protocol."}
        />
        <div className="grid gap-5 text-center sm:grid-cols-3">
          {[
            { icon: Globe, v: "30", l: isZh ? "线下推广工作室" : "Offline promotion studios" },
            { icon: Megaphone, v: "500", l: isZh ? "线上社区" : "Online communities" },
            { icon: Users, v: "∞", l: isZh ? "推荐增长节点" : "Referral-driven growth nodes" },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 0.08}>
              <div className="panel p-8">
                <c.icon size={28} className="mx-auto mb-3 text-gold" />
                <p className="font-display text-5xl font-black text-cream">{c.v}</p>
                <p className="mt-2 text-xs font-bold tracking-[0.2em] text-cream/55 uppercase">{c.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-cream/40">
            {isZh ? "市场认知 • 用户教育 • 参与活动 • 推荐增长 • 区域推广 • 社区协调" : "Market awareness • User education • Participation campaigns • Referral growth • Regional promotion • Community coordination"}
          </p>
        </Reveal>
      </section>

      <section id="roadmap" className="border-y border-gold/20 bg-char/40">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
          <SectionHead
            kicker={isZh ? "发展方向" : "Development Direction"}
            title={isZh ? <>发展<span className="text-gold">路线图</span></> : <>THE <span className="text-gold">ROADMAP</span></>}
            sub={isZh ? "五个阶段。日期将在团队确认前保持可编辑，这是阶段规划而非承诺。" : "Five phases. Dates stay editable until confirmed by the team — phases, not promises."}
          />
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-gold via-blood to-transparent sm:left-1/2" />
            <div className="space-y-8">
              {ROADMAP.map((r, i) => (
                <Reveal key={r.phase} delay={0.05}>
                  <div className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${i % 2 ? "sm:ml-auto sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                    <span className={`absolute top-0 left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-void font-display text-xs font-black text-gold ${i % 2 ? "" : "sm:right-0 sm:left-auto sm:translate-x-1/2"}`} style={{ left: i % 2 ? undefined : undefined }}>
                      {r.phase}
                    </span>
                    <div className="panel p-6">
                      <h3 className="font-display text-xl font-bold tracking-wider text-gold">{isZh ? roadmapTitles[i] : r.title.toUpperCase()}</h3>
                      <ul className={`mt-3 space-y-1.5 ${i % 2 ? "" : "sm:text-right"}`}>
                        {r.items.map((it, itemIndex) => (
                          <li key={it} className="text-sm text-cream/65">• {isZh ? roadmapItems[i][itemIndex] : it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "信任中心" : "Trust Center"}
          title={isZh ? <>核验<span className="text-gold">机制</span></> : <>VERIFY <span className="text-gold">THE MECHANISM</span></>}
          sub={isZh ? "不要盲信，先核验。以下内容只有在确认后才会提供链接，在此之前均显示为不可用。" : "Don't trust. Verify. Every item below links out only when confirmed — until then, it reads UNAVAILABLE."}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FileSearch, t: isZh ? "安全审计" : "Security Audit", s: isZh ? "不可用" : "UNAVAILABLE", d: isZh ? "确认审计后将在此显示报告链接。" : "Report link appears here after a confirmed audit." },
            { icon: ShieldCheck, t: isZh ? "合约地址" : "Contract Address", s: isZh ? "待公布" : "TO BE ANNOUNCED", d: isZh ? "核验后公布确认地址和浏览器链接。" : "Confirmed address + explorer link after verification." },
            { icon: Lock, t: isZh ? "流动性锁定" : "Liquidity Lock", s: isZh ? "未核验" : "UNVERIFIED", d: isZh ? "只有链上证据才能证明，没证据就没有徽章。" : "Claimed only with on-chain proof. No badge without evidence." },
            { icon: Users, t: isZh ? "管理员权限" : "Admin Controls", s: isZh ? "待披露" : "TO BE DISCLOSED", d: isZh ? "部署后公布所有权和权限。" : "Ownership and permissions published from the deployment." },
            { icon: FileSearch, t: isZh ? "源代码" : "Source Code", s: isZh ? "待发布" : "PENDING", d: isZh ? "合约开源后公开显示。" : "Displayed publicly when the contracts are open-sourced." },
            { icon: Globe, t: isZh ? "官方频道" : "Official Channels", s: isZh ? "Telegram 已上线" : "TELEGRAM LIVE", d: isZh ? "目前本页只有 Telegram 链接经过核验。" : "Only the Telegram link on this page is verified today." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 0.08}>
              <div className="h-full border border-gold/20 bg-void p-6">
                <v.icon size={26} className="mb-3 text-gold" />
                <h3 className="font-display text-base font-bold tracking-wider text-cream">{v.t.toUpperCase()}</h3>
                <p className={`mt-1 text-[11px] font-black tracking-[0.25em] ${v.s === "TELEGRAM LIVE" ? "text-gold" : "text-blood"}`}>{v.s}</p>
                <p className="mt-2 text-xs leading-relaxed text-cream/55">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
