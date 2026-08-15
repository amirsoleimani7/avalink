import TextType from "@/components/custom/typewriter";
import Navigation from "@/components/custom/Navigation";

export default async function Home() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("something");
  //   }, 10000);
  // });

  return (
    <div className="w-full h-full bg-green-400 flex  justify-center">
      <Navigation />
    </div>
  );
}
