import { ShieldAlert, CheckCircle2, Rocket, Users } from "lucide-react";
import { TELEGRAM } from "../data";
import { Reveal, SectionHead, GoldButton } from "./ui";

const FLOW = [
  "Check eligibility",
  "Complete required group task",
  "Register",
  "Verify with official admin",
  "Follow official payment instructions",
  "Receive confirmation",
];

export default function Ido() {
  return (
    <section id="ido" className="border-y border-blood/25 bg-gradient-to-b from-blood/10 via-transparent to-transparent">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          kicker="Launch Structure"
          title={<>FOMO LIFE <span className="text-glow-red text-blood">IDO</span></>}
          sub="Launching on Butterfly. Limited allocations, verified admins, zero tolerance for scams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-gold uppercase">
                <Rocket size={15} /> Schedule & Size
              </h3>
              <div className="space-y-4">
                {[
                  ["Subscription opens", "September 16 — 14:00 (timezone TBC)"],
                  ["Retail closes", "When 500 allocations are filled"],
                  ["Launch window", "September 18–20, exact time TBA"],
                  ["Stated size", "80 BNB total — 50 online + 30 field"],
                  ["Verification admins", "Jing (静) • Yongwang (永旺)"],
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
                  Status panel: <span className="font-black text-amber">OPEN</span> — this panel
                  is editable and will track OPEN / ALMOST FULL / CLOSED / LAUNCHING / COMPLETED.
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
                  Participation Flow
                </h3>
                <div className="space-y-3">
                  {FLOW.map((f, i) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-gold/15 font-display text-xs font-black text-gold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-cream/80">{f}</p>
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
                  <p className="font-display text-base font-black tracking-wider text-blood">ANTI-SCAM WARNING</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    Never send funds to an address received through an unofficial account.
                    Verify every address through the official FOMO Life channel. Admins will
                    never DM you first.
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-bold text-cream/70">
                    <CheckCircle2 size={14} className="text-gold" /> Official channel only — links verified on this page.
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
