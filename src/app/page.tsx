import TextType from "@/components/custom/typewriter";
import Navigation from "@/components/custom/Navigation";
import HeroSection from "@/components/custom/HeroSection";

export default async function Home() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("something");
  //   }, 10000);
  // });

  return (
    <div className="w-full h-full relative flex flex-col">
      <Navigation />
      <HeroSection />
    </div>
  );
}
