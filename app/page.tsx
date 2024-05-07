import DownloadSection from "@/components/DownloadSection/DownloadSection";
import FAQ from "@/components/FAQ/FAQ";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home: React.FC = () => {
  return (
    <main className=" bg-white">
      <Header />

      <Hero />
      <FeaturesSection />
      <DownloadSection />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
