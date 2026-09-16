export const TELEGRAM = "https://t.me/FomoLife_Official";

export const VAULT_ALLOCATION = [
  {
    label: "Grand Prize Pool",
    pct: 40,
    color: "#FFB000",
    desc: "Primary competitive reward for the final qualifying position. Of this pool: 60% to the final winner, 40% split across the top 20 stakers by weight.",
  },
  {
    label: "Instant Rewards",
    pct: 30,
    color: "#D9A62A",
    desc: "Ongoing participation-based rewards distributed in real time by staking weight.",
  },
  {
    label: "Permanent Burn",
    pct: 10,
    color: "#FF4A3D",
    desc: "Permanently removed from circulation. Burned is burned — scarcity by code.",
  },
  {
    label: "Top 20 Stakers",
    pct: 10,
    color: "#F6E8B5",
    desc: "Dedicated allocation for qualifying high-weight participants, by staking weight.",
  },
  {
    label: "Genesis NFT Rewards",
    pct: 10,
    color: "#ff7a3d",
    desc: "Dedicated allocation feeding the Genesis NFT reward mechanism.",
  },
];

export const TAX_SPLIT = [
  { label: "Burn", pct: 50, color: "#FF4A3D", desc: "Extreme deflation — half of every 3% tax is destroyed." },
  { label: "Staking Rewards", pct: 49, color: "#FFB000", desc: "Routed to reward stakers in the Vault ecosystem." },
  { label: "Holder Distribution", pct: 1, color: "#F6E8B5", desc: "Split chain-wide across holder addresses." },
];

export const VAULT_STEPS = [
  { n: "01", title: "ENTER", desc: "Access the Vault when live. No backdoors, no whitelists — the contract is the gate." },
  { n: "02", title: "STAKE", desc: "Commit qualifying assets under the active protocol rules." },
  { n: "03", title: "WEIGH IN", desc: "Your stake becomes measurable weight inside the Vault." },
  { n: "04", title: "COMPETE", desc: "Position and timing interact against the round clock." },
  { n: "05", title: "DISTRIBUTE", desc: "Activity flows to prizes, rewards, burn and Genesis destinations." },
  { n: "06", title: "CLAIM & RECYCLE", desc: "Claims carry a 5% BNB fee routed 100% into the price-support contract." },
];

export const NFT_TIERS = [
  { tier: "Leader", count: 10, weight: 5, color: "#FFB000", perk: "Highest dividend weight. The inner circle of 10." },
  { tier: "General", count: 30, weight: 3, color: "#D9A62A", perk: "Command-tier weight for committed builders." },
  { tier: "Common", count: 260, weight: 2, color: "#F6E8B5", perk: "The broad base — 260 seats at the table." },
];

export const ROADMAP = [
  { phase: "01", title: "Foundation", items: ["Brand development", "Vault architecture", "Tokenomics finalization", "Smart-contract development", "Community foundation"] },
  { phase: "02", title: "Deployment", items: ["Contract testing", "Security review & audit", "Butterfly launch", "Liquidity deployment"] },
  { phase: "03", title: "Vault Activation", items: ["FOMO Vault opening", "Genesis NFT rollout", "Community campaigns", "Reward ecosystem activation"] },
  { phase: "04", title: "Ecosystem Expansion", items: ["Governance development", "New utilities", "Strategic integrations", "Global expansion"] },
  { phase: "05", title: "Long-Term Ecosystem", items: ["Protocol optimization", "Community infrastructure", "Decentralized products", "Ecosystem growth"] },
];

export const FAQS = [
  { q: "What is FOMO Life?", a: "A Web3 ecosystem centered on the FOMO Vault — a competitive staking environment — supported by a native token economy, a fixed 300-piece Genesis NFT layer, and a community growth model." },
  { q: "What is FOMO人生?", a: "The Chinese name shown in the official brand artwork, displayed alongside FOMO LIFE." },
  { q: "What is the FOMO Vault?", a: "The central participation mechanism. Vault activity is allocated 40% Grand Prize, 30% Instant Rewards, 10% Burn, 10% Top 20 Stakers, 10% Genesis NFT rewards. Of the Grand Prize pool, 60% goes to the final qualifying winner and 40% is split across the top 20 stakers by weight." },
  { q: "What is the token tax?", a: "3% on buys and sells — split 50% burn, 49% staking rewards, 1% chain-wide holder distribution." },
  { q: "What does claiming cost?", a: "Each applicable reward or principal claim carries a 5% BNB fee, directed 100% into the designated price-support contract. Claiming literally pumps the chart." },
  { q: "How many Genesis NFTs exist?", a: "300, fixed forever. 10 Leader (weight 5), 30 General (weight 3), 260 Common (weight 2). 10% of ecosystem staking profits and 10% of each Genesis multisig release feed the permanent NFT dividend pool." },
  { q: "How does the IDO work?", a: "Subscription opened September 16 at 14:00 (timezone TBC). Retail closes when 500 allocations are filled. Launch window September 18–20. Stated size: 80 BNB total (50 online + 30 field). Verify every payment address through the official channel only — never trust DMs." },
  { q: "Has the contract been audited?", a: "Audit status will be published here only when confirmed with a direct link to the official report. No audit claims are made until then." },
  { q: "Where is the contract address?", a: "The confirmed contract address and explorer link will appear on this site after official verification. Anything else is a scam." },
];

export const MARQUEE_ITEMS = [
  "FOMO LIFE",
  "FOMO人生",
  "FEAR OF MISSING OUT",
  "3% TAX — 50% BURN",
  "ETERNAL VAULT",
  "300 GENESIS NFTS",
  "CLAIM FEE → PRICE SUPPORT",
  "NO CEO — ONLY CODE",
];
