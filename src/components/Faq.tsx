import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, X, Send } from "lucide-react";
import { FAQS, TELEGRAM } from "../data";
import { Reveal, SectionHead } from "./ui";
import { useLanguage } from "../i18n";

const FAQ_ZH = [
  ["什么是 FOMO Life？", "这是一个围绕 FOMO 金库构建的 Web3 生态，包含竞争式质押环境、原生代币经济、固定 300 个创世 NFT 和社区增长模型。"],
  ["什么是 FOMO人生？", "这是官方品牌名称，与 FOMO LIFE 一同展示。"],
  ["什么是 FOMO 金库？", "这是核心参与机制。金库活动分配为：大奖池 40%、即时奖励 30%、销毁 10%、前 20 名质押者 10%、创世 NFT 奖励 10%。"],
  ["代币税是多少？", "买入和卖出收取 3%：50% 销毁、49% 用于质押奖励、1% 分配给全网持有者。"],
  ["领取需要什么费用？", "每次适用的奖励或本金领取都会产生 5% BNB 费用，100% 进入指定价格支持合约。"],
  ["有多少创世 NFT？", "固定 300 个：10 个领袖（权重 5）、30 个将军（权重 3）、260 个普通（权重 2），永不增加。"],
  ["IDO 如何进行？", "认购时间为 9 月 16 日 14:00，限 500 个名额，9 月 18–20 日上线 Butterfly。只通过官方 Telegram 登记，警惕私信。"],
  ["合约审计了吗？", "只有在此发布直接报告链接后才会声明审计完成。在此之前不作审计承诺。"],
  ["合约地址在哪里？", "官方核验后，确认的合约地址和浏览器链接才会出现在本网站。其他地址都可能是诈骗。"],
];

function FaqAccordion() {
  const { isZh } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((f, i) => (
        <Reveal key={f.q} delay={Math.min(i * 0.04, 0.2)}>
          <div className={`border transition ${open === i ? "border-gold/60 bg-char" : "border-gold/20 bg-void"}`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-sm font-bold text-cream sm:text-base">{isZh ? FAQ_ZH[i][0] : f.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-gold">
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-cream/65">{isZh ? FAQ_ZH[i][1] : f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const GUIDE_RULES: [RegExp, string][] = [
  [/tax/i, "3% on every buy and sell — 50% burned, 49% to staking rewards, 1% split chain-wide to holders."],
  [/vault|allocat|40|30/i, "The Vault splits 40% Grand Prize, 30% Instant Rewards, 10% Burn, 10% Top 20 Stakers, 10% Genesis NFT. Of the Grand Prize pool: 60% to the final winner, 40% across the top 20 by weight."],
  [/nft|genesis|300/i, "300 fixed Genesis NFTs: 10 Leader (weight 5), 30 General (weight 3), 260 Common (weight 2). Never more."],
  [/ido|buy|participat|join/i, "IDO: subscription from Sep 16 14:00, 500 allocations, launch Sep 18–20 on Butterfly. Register only via the official Telegram — never trust DMs."],
  [/claim|fee|bnb/i, "Claims carry a 5% BNB fee routed 100% into the designated price-support contract. This describes mechanism design, not guaranteed appreciation."],
  [/audit|safe|scam|contract/i, "No audit is claimed until a report is published here. The contract address appears on this page only after verification. Verify everything through the official channel."],
  [/price|profit|guarantee|moon|pump/i, "FOMO Life describes mechanism design, not profit. Burns and fees are protocol flows — never a promise of price appreciation."],
  [/telegram|community|contact/i, `Official Telegram: ${TELEGRAM}`],
];

const GUIDE_RULES_ZH = [
  "每次买入和卖出收取 3%：50% 销毁、49% 用于质押奖励、1% 分配给持有者。",
  "金库分配为大奖池 40%、即时奖励 30%、销毁 10%、前 20 名质押者 10%、创世 NFT 10%。",
  "固定 300 个创世 NFT：10 个领袖（权重 5）、30 个将军（权重 3）、260 个普通（权重 2），永不增加。",
  "IDO 认购从 9 月 16 日 14:00 开始，共 500 个名额，9 月 18–20 日在 Butterfly 上线。只通过官方 Telegram 登记。",
  "领取产生 5% BNB 费用，100% 进入指定价格支持合约。这是机制说明，不代表价格上涨。",
  "只有发布审计报告后才会声明完成审计。合约地址也只会在核验后出现在本页。",
  "FOMO Life 介绍的是机制设计，不是收益承诺。销毁和费用是协议流程。",
  `官方 Telegram：${TELEGRAM}`,
];

function GuideWidget() {
  const { isZh } = useLanguage();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<[string, string][]>([
    ["bot", isZh ? "我是 FOMO 指南。你可以问我金库、税费、NFT、IDO、领取或诈骗问题。我不提供财务建议。" : "I am the FOMO Guide. Ask me about the Vault, tax, NFTs, IDO, claims — or scams. I never give financial advice."],
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const q = input.trim();
    if (!q) return;
    const hitIndex = GUIDE_RULES.findIndex(([re]) => re.test(q));
    const a = hitIndex >= 0
      ? isZh ? GUIDE_RULES_ZH[hitIndex] : GUIDE_RULES[hitIndex][1]
      : isZh ? "我可以解释金库、3% 税费、40/30/10/10/10 分配、创世等级、IDO 规则、领取费用或核验。试着问其中一个吧。" : "I can explain the Vault, 3% tax, 40/30/10/10/10 allocation, Genesis tiers, IDO rules, claim fees, or verification.";
    setMsgs((m) => [...m, ["you", q], ["bot", a]]);
    setInput("");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="mb-3 flex h-[420px] w-[320px] flex-col border border-gold/40 bg-void shadow-[0_0_60px_rgba(217,166,42,0.3)] sm:w-[360px]"
          >
            <div className="flex items-center justify-between border-b border-gold/25 bg-char px-4 py-3">
              <p className="text-xs font-black tracking-[0.25em] text-gold uppercase">{isZh ? "FOMO 指南" : "FOMO Guide"}</p>
              <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-cream" aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map(([who, t], i) => (
                <div key={i} className={`max-w-[85%] p-3 text-xs leading-relaxed ${who === "bot" ? "border border-gold/25 bg-char text-cream/85" : "ml-auto bg-gold/20 text-cream"}`}>
                  {t}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-gold/25 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={isZh ? "询问金库相关问题……" : "Ask about the Vault…"}
                className="flex-1 border border-gold/25 bg-char px-3 py-2 text-xs text-cream outline-none placeholder:text-cream/30 focus:border-gold/60"
              />
              <button onClick={send} className="bg-gold p-2 text-void hover:bg-amber" aria-label="Send">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-blood text-void shadow-[0_0_40px_rgba(217,166,42,0.55)]"
        aria-label={isZh ? "FOMO 指南" : "FOMO Guide"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

export default function Faq() {
  const { isZh } = useLanguage();
  return (
    <section id="faq" className="border-t border-gold/20 bg-char/40">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6">
        <SectionHead
          kicker={isZh ? "知识库" : "Knowledge Base"}
          title={isZh ? <>问题<span className="text-gold">解答</span></> : <>QUESTIONS, <span className="text-gold">ANSWERED.</span></>}
          sub={isZh ? "还有疑问？右下角的 FOMO 指南可以随时回答金库、税费、NFT 和 IDO 问题。" : "Still curious? The FOMO Guide bubble (bottom-right) answers Vault, tax, NFT and IDO questions on demand."}
        />
        <FaqAccordion />
      </div>
      <GuideWidget />
    </section>
  );
}

export { TELEGRAM };
