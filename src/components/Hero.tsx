import { GoldButton } from "./ui";
import { useLanguage, copy } from "../i18n";

export default function Hero() {
  const { isZh } = useLanguage();
  const t = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 vault-lighting pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center animate-fade-up">
        <p className="text-gold/70 tracking-[0.4em] text-[10px] mb-8 font-light">
          {t("A BRILLIANT LIFE", "精彩人生")}
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-tight font-light tracking-wider text-cream mb-4">
          FOMO {t("LIFE", "人生")}
        </h1>

        <p className="text-xl md:text-2xl text-stone-500 font-light tracking-[0.3em] mb-16">
          {t("A BRILLIANT LIFE", "精彩人生")}
        </p>

        {/* 3D FOMO Visual with Logo */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mb-16 perspective-container flex items-center justify-center">
          {/* Outer rotating text ring */}
          <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ animation: "float3D 20s linear infinite" }}>
            <div className="absolute w-full h-full rounded-full border border-gold/20 border-dashed preserve-3d" style={{ animation: "orbitX 16s linear infinite" }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_20px_#D9A62A] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-gold/50 rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Middle orbit ring */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-amber/15 preserve-3d" style={{ animation: "orbitY 24s linear infinite reverse" }}>
              <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-amber rounded-full shadow-[0_0_20px_#FFB000] translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-amber/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Inner glow ring */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-ember/10 preserve-3d" style={{ animation: "orbitX 12s linear infinite reverse" }}>
              <div className="absolute top-0 right-1/4 w-1 h-1 bg-ember/60 rounded-full" />
            </div>

            {/* Center: FOMO Logo with glow */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 preserve-3d flex items-center justify-center" style={{ animation: "pulseCore 4s ease-in-out infinite" }}>
              {/* Back diamond */}
              <div
                className="absolute inset-0 bg-void border border-gold/30 rotate-45 shadow-[inset_0_0_30px_rgba(217,166,42,0.15)]"
                style={{ transform: "translateZ(-30px)" }}
              />
              {/* Middle diamond */}
              <div
                className="absolute inset-3 bg-gradient-to-br from-void to-charcoal border border-amber/30 rotate-[20deg] shadow-[0_0_40px_rgba(255,176,0,0.1)]"
                style={{ transform: "translateZ(5px)" }}
              />
              {/* Front: FOMO Logo */}
              <div
                className="absolute inset-5 bg-charcoal border border-ember/50 rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(255,74,61,0.3)] overflow-hidden"
                style={{ transform: "translateZ(40px)" }}
              >
                <img
                  src="/image.png"
                  alt="FOMO Life"
                  className="w-[120%] h-[120%] object-cover -rotate-45 scale-110"
                />
                {/* Gold overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-gold/10" />
              </div>
            </div>
          </div>

          {/* Floating "FOMO LIFE" text orbiting */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[110%] h-[110%] relative" style={{ animation: "float3D 30s linear infinite" }}>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.5em] text-gold/30 font-light" style={{ transform: "translateZ(20px)" }}>
                FOMO LIFE
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.5em] text-gold/20 font-light" style={{ transform: "translateZ(-20px)" }}>
                FOMO LIFE
              </span>
              <span className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.5em] text-amber/20 font-light" style={{ transform: "translateZ(10px)" }}>
                {t("BRILLIANT", "精彩")}
              </span>
              <span className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 text-[9px] tracking-[0.5em] text-amber/20 font-light" style={{ transform: "translateZ(-10px)" }}>
                {t("BRILLIANT", "精彩")}
              </span>
            </div>
          </div>

          {/* Ground glow shadow */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-ember/15 blur-3xl rounded-full"
            style={{ animation: "pulseShadow 4s ease-in-out infinite" }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up delay-200">
          <GoldButton href="#vault">
            {t("CHECK VAULT", "查看金库")}
          </GoldButton>
          <GoldButton href="#community" ghost>
            {t("JOIN COMMUNITY", "加入社区")}
          </GoldButton>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center animate-fade-up delay-300">
        <p className="text-[9px] tracking-[0.4em] text-stone-600 uppercase">
          {t("FEAR OF MISSING OUT", "错失恐惧症")}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  );
}
