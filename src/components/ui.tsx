import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { copy, useLanguage } from "../i18n";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ kicker, title, sub, kickerZh, subZh }: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  kickerZh?: string;
  subZh?: string;
}) {
  const { isZh } = useLanguage();
  return (
    <div className="mb-20">
      <Reveal>
        <div className="w-12 h-px bg-gold/50 mb-8" />
      </Reveal>
      <Reveal delay={0.06}>
        <p className="text-[10px] tracking-[0.25em] text-stone-500 mb-4">
          {copy(kicker, kickerZh ?? kicker, isZh)}
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <h2 className="text-3xl md:text-4xl font-light tracking-wider text-cream">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.18}>
          <p className="mt-6 text-stone-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
            {copy(sub, subZh ?? sub, isZh)}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function GoldButton({ children, href = "#vault", ghost = false }: {
  children: ReactNode;
  href?: string;
  ghost?: boolean;
}) {
  if (ghost) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        className="btn-premium px-10 py-4 bg-transparent border border-stone-800 text-stone-300 text-[11px] tracking-widest hover:text-cream hover:border-stone-500 transition-all duration-300"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      className="btn-premium px-10 py-4 bg-charcoal border border-gold/40 text-cream text-[11px] tracking-widest hover:border-gold hover:bg-gold/5 transition-all duration-300"
    >
      {children}
    </motion.a>
  );
}
