import { ShieldAlert, CheckCircle2, Rocket, Users } from "lucide-react";
import { TELEGRAM } from "../data";
import { Reveal, SectionHead, GoldButton } from "./ui";
import { useLanguage } from "../i18n";

const FLOW = [
  "Check eligibility",
  "Complete required group task",
  "Register",
  "Verify with official admin",
  "Follow official payment instructions",
  "Receive confirmation",
];

export default function Ido() {
  const { isZh } = useLanguage();
  const flowZh = ["检查资格", "完成指定群任务", "登记", "由官方管理员核验", "遵循官方付款说明", "收到确认"];
  return (
    <section id="ido" className="border-y border-blood/25 bg-gradient-to-b from-blood/10 via-transparent to-transparent">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "发售结构" : "Launch Structure"}
          title={<>FOMO LIFE <span className="text-glow-red text-blood">IDO</span></>}
          sub={isZh ? "将在 Butterfly 上线。名额有限，管理员经过核验，对诈骗零容忍。" : "Launching on Butterfly. Limited allocations, verified admins, zero tolerance for scams."}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-gold uppercase">
                <Rocket size={15} /> {isZh ? "时间表与规模" : "Schedule & Size"}
              </h3>
              <div className="space-y-4">
                {[
                  isZh ? ["认购开放", "9 月 16 日 14:00（时区待确认）"] : ["Subscription opens", "September 16 — 14:00 (timezone TBC)"],
                  isZh ? ["零售结束", "500 个名额满额时"] : ["Retail closes", "When 500 allocations are filled"],
                  isZh ? ["上线窗口", "9 月 18–20 日，具体时间待定"] : ["Launch window", "September 18–20, exact time TBA"],
                  isZh ? ["公布规模", "总计 80 BNB：线上 50 + 线下 30"] : ["Stated size", "80 BNB total — 50 online + 30 field"],
                  isZh ? ["核验管理员", "Jing（静）• Yongwang（永旺）"] : ["Verification admins", "Jing (静) • Yongwang (永旺)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 border-b border-gold/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs font-bold tracking-widest text-cream/50 uppercase">{k}</span>
                    <span className="text-sm font-bold text-cream">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Users size={18} className="shrink-0 text-gold" />
                <p className="text-xs text-cream/60">
                  {isZh ? "状态面板：" : "Status panel: "}<span className="font-black text-amber">{isZh ? "开放" : "OPEN"}</span>{isZh ? "，此面板将追踪开放、即将满额、关闭、上线和完成状态。" : " — this panel is editable and will track OPEN / ALMOST FULL / CLOSED / LAUNCHING / COMPLETED."}
                </p>
              </div>
              <div className="mt-6">
                <GoldButton href={TELEGRAM}>Register via Telegram</GoldButton>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="border border-gold/25 bg-void p-8">
                <h3 className="mb-6 text-xs font-black tracking-[0.3em] text-gold uppercase">
                  {isZh ? "参与流程" : "Participation Flow"}
                </h3>
                <div className="space-y-3">
                  {FLOW.map((f, i) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-gold/15 font-display text-xs font-black text-gold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-cream/80">{isZh ? flowZh[i] : f}</p>
                      {i < FLOW.length - 1 && <span className="ml-1 text-gold/40">↓</span>}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-5 flex items-start gap-3 border-2 border-blood/60 bg-blood/10 p-6">
                <ShieldAlert size={26} className="shrink-0 text-blood" />
                <div>
                  <p className="font-display text-base font-black tracking-wider text-blood">{isZh ? "反诈骗警告" : "ANTI-SCAM WARNING"}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {isZh ? "不要向非官方账号提供的地址转账。请通过 FOMO Life 官方频道核验每个地址。管理员不会主动私信你。" : "Never send funds to an address received through an unofficial account. Verify every address through the official FOMO Life channel. Admins will never DM you first."}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-bold text-cream/70">
                    <CheckCircle2 size={14} className="text-gold" /> {isZh ? "仅限官方频道，本页链接均已核验。" : "Official channel only — links verified on this page."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
