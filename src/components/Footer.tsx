import { useLanguage, copy } from "../i18n";

export default function Footer() {
  const { isZh } = useLanguage();
  const label = (en: string, zh: string) => copy(en, zh, isZh);

  return (
    <footer className="border-t border-gold/20 py-12 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex items-center gap-4">
          <img
            src="/image.png"
            alt="FOMO Life logo"
            className="w-10 h-10 rounded-full border border-gold/40 object-cover"
          />
          <div>
            <div className="tracking-widest font-light text-sm text-cream/90">
              FOMO<span className="text-gold/80"> LIFE</span>
            </div>
            <p className="text-[10px] tracking-widest text-stone-500 uppercase">
              {label("A BRILLIANT LIFE", "精彩人生")}
            </p>
          </div>
        </div>

        <div className="max-w-md">
          <p className="text-[10px] tracking-widest text-ember/80 mb-3 uppercase">
            {label("ANTI-SCAM NOTICE", "防骗防诈提示")}
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            {label(
              "Never send funds to an address received through an unofficial account. Verify every address through official FOMO Life channels. Contract address: TO BE CONFIRMED.",
              "切勿将资金发送到通过非官方账户收到的地址。请通过 FOMO Life 官方渠道验证每个地址。合约地址：待确认。"
            )}
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[10px] tracking-widest text-stone-500 mb-2 uppercase">
            © 2024 FOMO LIFE
          </p>
          <p className="text-[10px] tracking-widest text-stone-600 uppercase">
            {label("MECHANISM FIRST", "机制优先")}
          </p>
        </div>
      </div>
    </footer>
  );
}
