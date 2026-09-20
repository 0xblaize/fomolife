import { GoldButton } from "./ui";
import { useLanguage, copy } from "../i18n";

export default function Hero() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 vault-lighting pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center animate-fade-up">
        <p className="text-gold/70 tracking-[0.4em] text-[10px] mb-8 font-light">
          A BRILLIANT LIFE
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-tight font-light tracking-wider text-cream mb-4">
          FOMO LIFE
        </h1>

        <p className="text-xl md:text-2xl text-stone-500 font-light tracking-[0.3em] mb-16">
          {isZh ? "FOMO 人生" : "A BRILLIANT LIFE"}
        </p>

        {/* 3D FOMO Core */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-16 perspective-container flex items-center justify-center">
          <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ animation: "float3D 20s linear infinite" }}>
            <div className="absolute w-full h-full rounded-full border-[1px] border-gold/30 border-dashed preserve-3d" style={{ animation: "orbitX 16s linear infinite" }}>
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_15px_#D9A62A] -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute w-[75%] h-[75%] rounded-full border border-amber/20 preserve-3d" style={{ animation: "orbitY 22s linear infinite reverse" }}>
              <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-amber rounded-full shadow-[0_0_20px_#FFB000] translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 preserve-3d flex items-center justify-center" style={{ animation: "pulseCore 3.5s ease-in-out infinite" }}>
              <div className="absolute inset-0 bg-void border border-gold/40 rotate-45 shadow-[inset_0_0_20px_rgba(217,166,42,0.2)]" style={{ transform: "translateZ(-25px)" }} />
              <div className="absolute inset-2 bg-gradient-to-br from-void to-charcoal border border-amber/40 rotate-12 shadow-[0_0_30px_rgba(255,176,0,0.15)]" style={{ transform: "translateZ(5px)" }} />
              <div className="absolute inset-6 bg-charcoal border border-ember rotate-45 flex items-center justify-center shadow-[0_0_35px_rgba(255,74,61,0.4)]" style={{ transform: "translateZ(35px)" }}>
                <div className="w-3 h-3 bg-cream rounded-full shadow-[0_0_15px_#F6E8B5]" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-8 bg-ember/20 blur-2xl rounded-full" style={{ animation: "pulseShadow 3.5s ease-in-out infinite" }} />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up delay-200">
          <GoldButton href="#vault">
            {label("CHECK VAULT", "进入金库")}
          </GoldButton>
          <GoldButton href="#community" ghost>
            {label("JOIN COMMUNITY", "加入社区")}
          </GoldButton>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center animate-fade-up delay-300">
        <p className="text-[9px] tracking-[0.4em] text-stone-600 uppercase">
          FEAR OF MISSING OUT
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  );
}
