import TextType from "@/components/custom/addons/typewriter";
import Navigation from "@/components/custom/navigation/Navigation";
import HeroSection from "@/components/custom/main/HeroSection";
import Properties from "@/components/custom/main/Properties";
import Faq from "@/components/custom/faq/Faq";
import Footer from "@/components/custom/footer/Footer";


export default async function Home() {
  return (
    <div className="w-full relative flex flex-col relative">
      <HeroSection />
      <Properties />
      <Faq />
    </div>
  );
}
