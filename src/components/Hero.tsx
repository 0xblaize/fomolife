import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Send, ShieldCheck, Vault } from "lucide-react";
import { MARQUEE_ITEMS, TELEGRAM } from "../data";
import { copy, useLanguage } from "../i18n";
import { GoldButton } from "./ui";

function EmberCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * .35 + .08,
      size: Math.random() * 1.5 + .4,
      alpha: Math.random() * .4 + .15,
    }));
    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < -4) particle.y = height + 4;
        ctx.fillStyle = `rgba(224,179,106,${particle.alpha})`;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-70" />;
}

function LiquidVault() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px] xl:max-w-[540px]">
      <div className="hero-drops" />
      <div className="absolute inset-[10%] rounded-full border border-amber/15 bg-[radial-gradient(circle_at_50%_42%,rgba(224,179,106,.18),rgba(198,74,55,.06)_30%,transparent_68%)]" />
      <div className="vault-orbit absolute inset-[9%] rounded-full border border-dashed border-amber/30" />
      <div className="vault-orbit-reverse absolute inset-[21%] rounded-full border border-cream/15" />
      <div className="absolute inset-[32%] rounded-full border border-amber/45 bg-void p-2 shadow-[0_0_55px_rgba(200,146,75,.16)]">
        <div className="flex h-full flex-col items-center justify-center rounded-full border border-amber/15 bg-[radial-gradient(circle,rgba(224,179,106,.13),transparent_66%)] text-center">
          <Vault size={38} strokeWidth={1} className="mb-3 text-amber" />
          <span className="font-display text-2xl font-black tracking-[.15em] text-cream">VAULT</span>
          <span className="mt-2 text-[9px] font-bold tracking-[.3em] text-amber/65">ETERNAL / 001</span>
        </div>
      </div>
      <div className="absolute top-[12%] right-0 border-l border-amber/50 bg-char/90 px-4 py-3">
        <p className="text-[9px] font-bold tracking-[.24em] text-cream/45 uppercase">System state</p>
        <p className="mt-2 flex items-center gap-2 text-xs font-bold tracking-wider text-cream"><span className="h-1.5 w-1.5 rounded-full bg-amber" /> FORMING CONSENSUS</p>
      </div>
      <div className="absolute bottom-[12%] left-0 border-l border-blood/60 bg-char/90 px-4 py-3">
        <p className="flex items-center gap-2 text-[9px] font-bold tracking-[.24em] text-blood uppercase"><Flame size={13} /> Deflation layer</p>
        <p className="mt-2 font-display text-2xl font-black text-cream">50% <span className="font-body text-[9px] tracking-widest text-cream/45">BURNED</span></p>
      </div>
      <div className="absolute right-[8%] bottom-[5%] flex items-center gap-2 text-[9px] font-bold tracking-[.24em] text-cream/45 uppercase"><ShieldCheck size={13} className="text-amber" /> Rules on-chain</div>
    </div>
  );
}

export default function Hero() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);
  return (
    <section id="top" className="hero-shell relative flex min-h-screen flex-col overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <EmberCanvas />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 pt-28 pb-16 sm:px-8 lg:min-h-[calc(100vh-52px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-0 lg:px-10 lg:pt-20 lg:pb-10 xl:px-12">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="mb-8 flex items-center gap-3 text-[10px] font-bold tracking-[.3em] text-amber uppercase">
            <span className="h-px w-12 bg-amber/60" /> {label("FOMO LIFE / PROTOCOL 001", "FOMO人生 / 协议 001")}
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .1 }} className="mb-6 text-xs font-bold tracking-[.22em] text-cream/55 uppercase">{label("FOMO人生 · Fear Of Missing Out", "FOMO人生 · 害怕错过")}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .16 }} className="font-display text-[clamp(4.2rem,8vw,7.8rem)] font-black leading-[.8] tracking-[-.08em] text-cream">
            FOMO
            <span className="block text-amber">LIFE</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: .7, delay: .35 }} className="mt-8 h-px w-28 origin-left bg-gradient-to-r from-amber to-transparent" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .4 }} className="mt-6 max-w-lg text-sm leading-relaxed text-cream/62 sm:text-base lg:max-w-md xl:max-w-lg">{label("A decentralized on-chain ecosystem built around a vault, a native token, fixed Genesis positions and community consensus.", "一个围绕链上金库、原生代币、固定创世席位与社区共识构建的去中心化生态。")}</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .52 }} className="mt-9 flex flex-wrap items-center gap-3">
            <GoldButton href="#vault"><span className="flex items-center gap-2"><Vault size={15} /> {label("Enter the Vault", "进入金库")}</span></GoldButton>
            <GoldButton href="#pillars" ghost>{label("Explore the Protocol", "探索协议")}</GoldButton>
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-2 py-3 text-[10px] font-bold tracking-[.2em] text-cream/48 uppercase transition hover:text-cream"><Send size={14} className="text-amber" /> {label("Community", "社区")} <ArrowUpRight size={13} /></a>
          </motion.div>
          <div className="mt-9 grid max-w-xl grid-cols-2 border-y border-cream/15 sm:grid-cols-4 lg:mt-8">
            {[['3%', 'BUY / SELL TAX', '买卖税'], ['50%', 'TAX BURNED', '税费销毁'], ['300', 'GENESIS POSITIONS', '创世席位'], ['5%', 'CLAIM FEE', '领取费用']].map(([value, en, zh]) => <div key={en} className="border-r border-cream/10 px-3 py-4 first:pl-0 last:border-0"><p className="font-display text-2xl font-black text-amber">{value}</p><p className="mt-1 text-[8px] font-bold leading-tight tracking-[.14em] text-cream/38">{label(en, zh)}</p></div>)}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }} className="hidden lg:block"><LiquidVault /></motion.div>
      </div>
      <div className="relative z-10 overflow-hidden border-y border-cream/12 bg-char/70 py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">{[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => <span key={index} className="flex items-center gap-8 text-[10px] font-bold tracking-[.25em] text-cream/48 uppercase">{item}<span className="text-blood">◆</span></span>)}</div>
      </div>
    </section>
  );
}
