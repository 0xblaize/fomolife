import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { copy, useLanguage } from "../i18n";

export function LocalizedText({ en, zh }: { en: string; zh: string }) {
  const { isZh } = useLanguage();
  return <>{copy(en, zh, isZh)}</>;
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: .4, delay, ease: [0.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ kicker, title, sub, kickerZh, subZh }: { kicker: string; title: ReactNode; sub?: string; kickerZh?: string; subZh?: string }) {
  const { isZh } = useLanguage();
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Reveal><p className="mb-3 text-[10px] font-bold tracking-[.3em] text-blood uppercase">{copy(kicker, kickerZh ?? kicker, isZh)}</p></Reveal>
      <Reveal delay={.06}><h2 className="font-display text-3xl font-bold tracking-[-.03em] text-cream sm:text-5xl">{title}</h2></Reveal>
      {sub && <Reveal delay={.12}><p className="mt-4 text-sm leading-relaxed text-cream/55 sm:text-base">{copy(sub, subZh ?? sub, isZh)}</p></Reveal>}
    </div>
  );
}

export function GoldButton({ children, href = "#vault", ghost = false }: { children: ReactNode; href?: string; ghost?: boolean }) {
  return (
    <motion.a href={href} whileHover={{ y: -2 }} whileTap={{ y: 0 }} className={ghost ? "inline-block border border-cream/25 px-7 py-3.5 text-sm font-bold tracking-widest text-cream/75 uppercase transition hover:border-amber/70 hover:text-amber" : "inline-block bg-amber px-7 py-3.5 text-sm font-black tracking-widest text-void uppercase transition hover:bg-cream"}>
      {children}
    </motion.a>
  );
}
