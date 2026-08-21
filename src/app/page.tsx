import TextType from "@/components/custom/addons/typewriter";
import Navigation from "@/components/custom/navigation/Navigation";
import HeroSection from "@/components/custom/main/HeroSection";
import Properties from "@/components/custom/main/Properties";
import Faq from "@/components/custom/faq/Faq";
import Footer from "@/components/custom/footer/Footer";
import Login from "@/components/custom/authentication/Login";

export default async function Home() {
  return (
    <div className={`w-full  flex flex-col relative `}>
      <HeroSection />
      <Login />
      <Properties />
      <Faq />
    </div>
  );
}
