import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Vault from "./components/Vault";
import Tokenomics from "./components/Tokenomics";
import Nft from "./components/Nft";
import Ido from "./components/Ido";
import Ecosystem from "./components/Ecosystem";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { useLanguage } from "./i18n";

function LanguageDocument() {
  const { isZh } = useLanguage();
  document.title = isZh ? "FOMO人生 — 美好人生" : "FOMO Life — A Brilliant Life | FOMO人生";
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-void text-cream antialiased">
      <LanguageDocument />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Vault />
        <Tokenomics />
        <Nft />
        <Ido />
        <Ecosystem />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
