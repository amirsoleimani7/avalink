import TextType from "@/components/custom/typewriter";
import Navigation from "@/components/custom/Navigation";
import Grainient from "@/components/custom/Granient";

export default async function Home() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("something");
  //   }, 10000);
  // });

  return (
    <div className="w-full h-full relative ">
      <Navigation />
    </div>
  );
}
