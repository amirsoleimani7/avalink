import TextType from "@/components/custom/typewriter";
import Navigation from "@/components/custom/Navigation";
import HeroSection from "@/components/custom/HeroSection";
import Properties from "@/components/custom/Properties";
import Faq from "@/components/custom/faq/Faq";

export default async function Home() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("something");
  //   }, 10000);
  // });

  return (
    <div className="w-full h-[200vh] relative flex flex-col ">
      <Navigation />
      <HeroSection />
      <Properties />
      <Faq />
    </div>
  );
}
