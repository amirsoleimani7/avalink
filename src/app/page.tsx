import TextType from "@/components/custom/addons/typewriter";
import Navigation from "@/components/custom/navigation/Navigation";
import HeroSection from "@/components/custom/main/HeroSection";
import Properties from "@/components/custom/main/Properties";
import Faq from "@/components/custom/faq/Faq";
import Footer from "@/components/custom/footer/Footer";

export default async function Home() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("something");
  //   }, 10000);
  // });

  return (
    <div className="w-full relative flex flex-col ">
      <Navigation />
      <HeroSection />
      <Properties />
      <Faq />
      <Footer/>
          </div>
  );
}
