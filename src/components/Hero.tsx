import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Flame, Send, ShieldCheck, Sparkles, Vault } from "lucide-react";
import { MARQUEE_ITEMS, TELEGRAM } from "../data";
import { GoldButton } from "./ui";
import { copy, useLanguage } from "../i18n";

function EmberCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);
    w /= devicePixelRatio;
    h /= devicePixelRatio;
    const parts = Array.from({ length: 85 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.35,
      vy: -(Math.random() * 0.55 + 0.08),
      vx: (Math.random() - 0.5) * 0.18,
      gold: Math.random() > 0.32,
      a: Math.random() * 0.52 + 0.14,
    }));
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(255,176,0,${p.a})` : `rgba(255,74,61,${p.a})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.gold ? "#FFB000" : "#FF4A3D";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onR = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    window.addEventListener("resize", onR);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onR);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" />;
}

function VaultCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-[8%] rounded-full border border-gold/10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,176,0,0.18),rgba(255,74,61,0.04)_32%,transparent_64%)] shadow-[0_0_120px_rgba(255,140,0,0.12)]" />
      <div className="vault-orbit absolute inset-[7%] rounded-full border border-dashed border-gold/30" />
      <div className="vault-orbit-reverse absolute inset-[19%] rounded-full border border-blood/25" />
      <div className="absolute inset-[30%] rounded-full border border-gold/50 bg-void/80 p-2 shadow-[0_0_70px_rgba(255,176,0,0.3)]">
        <div className="flex h-full flex-col items-center justify-center rounded-full border border-gold/20 bg-[radial-gradient(circle,rgba(255,176,0,0.16),transparent_65%)] text-center">
          <Vault className="mb-3 text-amber" size={34} strokeWidth={1.2} />
          <span className="font-display text-2xl font-black tracking-[0.12em] text-cream">VAULT</span>
          <span className="mt-1 text-[9px] font-bold tracking-[0.35em] text-gold/70">PROTOCOL CORE</span>
        </div>
      </div>
      <div className="absolute top-[10%] right-[2%] w-36 border border-gold/25 bg-void/90 p-3 backdrop-blur-md sm:w-44">
        <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.2em] text-cream/45 uppercase"><span>Network</span><span className="text-gold">01</span></div>
        <div className="mt-3 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_#ffb000]" /><span className="text-[10px] font-bold tracking-wider text-cream">CONSENSUS LIVE</span></div>
        <div className="mt-3 h-1 bg-white/10"><div className="h-full w-[72%] bg-gradient-to-r from-gold to-blood" /></div>
      </div>
      <div className="absolute bottom-[12%] left-0 w-44 border border-blood/30 bg-void/90 p-3 backdrop-blur-md sm:w-52">
        <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-blood uppercase"><Flame size={13} /> Deflation layer</div>
        <p className="mt-2 font-display text-xl font-black text-cream">50% <span className="font-body text-[9px] font-bold tracking-widest text-cream/45">TAX BURN</span></p>
      </div>
      <div className="absolute top-1/2 left-[1%] flex -translate-y-1/2 items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-gold/70 uppercase [writing-mode:vertical-rl]">
        <span>Stake</span><span className="text-blood">◆</span><span>Compete</span>
      </div>
      <div className="absolute right-[7%] bottom-[8%] flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] text-cream/45 uppercase"><ShieldCheck size={13} className="text-gold" /> Rules on-chain</div>
    </div>
  );
}

export default function Hero() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="top" className="hero-shell relative flex min-h-screen flex-col overflow-hidden">
      <div className="circuit-bg absolute inset-0 opacity-70" />
      <div className="hero-scan absolute inset-0" />
      <EmberCanvas />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.13),transparent_66%)] blur-2xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 pt-28 pb-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-2 lg:pt-28">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-7 flex items-center gap-3 text-[10px] font-black tracking-[0.35em] text-gold uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            {copy("Protocol / 001", "协议 / 001", isZh)}
            <span className="text-blood">●</span>
            {label("Now forming", "正在形成")}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-7 inline-flex items-center gap-3 border border-blood/40 bg-blood/5 px-4 py-2 text-[10px] font-bold tracking-[0.28em] text-cream/75 uppercase">
            <Sparkles size={13} className="text-blood" /> {label("FOMO人生 · Fear Of Missing Out", "FOMO人生 · 害怕错过")}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="font-display text-[clamp(3.8rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.07em] text-cream">
            FOMO
            <span className="hero-word block bg-gradient-to-r from-gold via-amber to-blood bg-clip-text text-transparent">LIFE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-7 max-w-xl text-base leading-relaxed text-cream/62 sm:text-lg">
            {label("A brilliant life, built around an on-chain vault where participation becomes position, position becomes pressure, and the protocol decides the rest.", "围绕链上金库构建的美好人生：参与成为位置，位置形成压力，一切由协议规则决定。")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.44 }} className="mt-9 flex flex-wrap items-center gap-3">
            <GoldButton href="#vault"><span className="flex items-center gap-2"><Vault size={15} /> {label("Enter the Vault", "进入金库")}</span></GoldButton>
            <GoldButton href="#pillars" ghost>Explore the Protocol</GoldButton>
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-3 py-3 text-[10px] font-black tracking-[0.24em] text-cream/55 uppercase transition hover:text-cream"><Send size={14} className="text-gold transition group-hover:translate-x-0.5" /> Community <ArrowDownRight size={13} className="text-blood" /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }} className="mt-12 grid max-w-xl grid-cols-2 border-y border-gold/20 sm:grid-cols-4">
            {[['03%', 'BUY / SELL TAX'], ['50%', 'TAX BURNED'], ['300', 'FIXED GENESIS'], ['5%', 'CLAIM FEE']].map(([value, label]) => <div key={label} className="border-r border-gold/15 px-3 py-4 first:pl-0 last:border-0"><p className="font-display text-2xl font-black text-gold">{value}</p><p className="mt-1 text-[8px] font-bold leading-tight tracking-[0.15em] text-cream/38">{label}</p></div>)}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:block"><VaultCore /></motion.div>
      </div>

      <div className="relative z-10 border-y border-gold/20 bg-char/75 py-3 backdrop-blur-sm">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">{[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => <span key={i} className="flex items-center gap-8 text-[10px] font-black tracking-[0.28em] text-gold/75 uppercase">{m}<span className="text-blood">◆</span></span>)}</div>
      </div>
    </section>
  );
}
