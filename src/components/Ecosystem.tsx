import { ShieldCheck, FileSearch, Lock, Users, Megaphone, Globe } from "lucide-react";
import { ROADMAP } from "../data";
import { Reveal, SectionHead } from "./ui";

export default function Ecosystem() {
  return (
    <>
      <section id="ecosystem" className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker="One Connected Ecosystem"
          title={<>COMMUNITY IS CONSENSUS. <span className="text-gold">CONSENSUS IS WEALTH.</span></>}
          sub="Token ↔ Vault ↔ Reward flows ↔ Genesis NFT ↔ Community. The community layer surrounds and powers the protocol."
        />
        <div className="grid gap-5 text-center sm:grid-cols-3">
          {[
            { icon: Globe, v: "30", l: "Offline promotion studios" },
            { icon: Megaphone, v: "500", l: "Online communities" },
            { icon: Users, v: "∞", l: "Referral-driven growth nodes" },
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
            Market awareness • User education • Participation campaigns • Referral growth •
            Regional promotion • Community coordination
          </p>
        </Reveal>
      </section>

      <section id="roadmap" className="border-y border-gold/20 bg-char/40">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
          <SectionHead
            kicker="Development Direction"
            title={<>THE <span className="text-gold">ROADMAP</span></>}
            sub="Five phases. Dates stay editable until confirmed by the team — phases, not promises."
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
                      <h3 className="font-display text-xl font-bold tracking-wider text-gold">{r.title.toUpperCase()}</h3>
                      <ul className={`mt-3 space-y-1.5 ${i % 2 ? "" : "sm:text-right"}`}>
                        {r.items.map((it) => (
                          <li key={it} className="text-sm text-cream/65">• {it}</li>
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
          kicker="Trust Center"
          title={<>VERIFY <span className="text-gold">THE MECHANISM</span></>}
          sub="Don't trust. Verify. Every item below links out only when confirmed — until then, it reads UNAVAILABLE."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FileSearch, t: "Security Audit", s: "UNAVAILABLE", d: "Report link appears here after a confirmed audit." },
            { icon: ShieldCheck, t: "Contract Address", s: "TO BE ANNOUNCED", d: "Confirmed address + explorer link after verification." },
            { icon: Lock, t: "Liquidity Lock", s: "UNVERIFIED", d: "Claimed only with on-chain proof. No badge without evidence." },
            { icon: Users, t: "Admin Controls", s: "TO BE DISCLOSED", d: "Ownership and permissions published from the deployment." },
            { icon: FileSearch, t: "Source Code", s: "PENDING", d: "Displayed publicly when the contracts are open-sourced." },
            { icon: Globe, t: "Official Channels", s: "TELEGRAM LIVE", d: "Only the Telegram link on this page is verified today." },
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
