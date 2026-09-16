import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { copy, useLanguage } from "../i18n";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Reveal>
        <p className="mb-3 text-xs font-bold tracking-[0.35em] text-blood uppercase">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-bold text-cream sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-sm leading-relaxed text-cream/60 sm:text-base">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function GoldButton({
  children,
  href = "#vault",
  ghost = false,
}: {
  children: ReactNode;
  href?: string;
  ghost?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={
        ghost
          ? "inline-block border border-gold/60 px-8 py-4 text-sm font-bold tracking-widest text-gold uppercase transition hover:bg-gold/10"
          : "inline-block bg-gradient-to-r from-gold to-amber px-8 py-4 text-sm font-black tracking-widest text-void uppercase shadow-[0_0_40px_rgba(217,166,42,0.45)] transition hover:shadow-[0_0_60px_rgba(255,176,0,0.65)]"
      }
    >
      {children}
    </motion.a>
  );
}
