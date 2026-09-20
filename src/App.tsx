import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Vault from "./components/Vault";
import Tokenomics from "./components/Tokenomics";
import Nft from "./components/Nft";
import Ecosystem from "./components/Ecosystem";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLanguage } from "./i18n";

function LanguageDocument() {
  const { isZh } = useLanguage();
  useEffect(() => {
    document.title = isZh ? "FOMO人生 — 美好人生" : "FOMO Life — A Brilliant Life";
  }, [isZh]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-void text-cream noise antialiased">
      <LanguageDocument />
      <Navbar />
      <main id="top">
        <Hero />
        <Pillars />
        <Vault />
        <Nft />
        <Tokenomics />
        <Ecosystem />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
