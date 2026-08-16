import { HeroTags, HeroType } from "@/data/heroData";
export default function HeroSection() {
  return (
    <div className="flex flex-col gap-5 justify-center w-full py-10 mt-17 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
      <div className="w-1/3 max-xl:w-3/5 max-md:w-4/5 max-sm:w-1/1 flex flex-col gap-4">
        <h1 className="font-roboto text-6xl max-lg:text-5xl max-md:text-4xl">A link in bio built for you.</h1>
        <p className="font-geist text-sm text-main-secondary">
          Join Ava Link family. One link to help you share everything you
          create, curate and sell from your Instagram, TikTok, Twitter, YouTube
          and other social media profiles.
        </p>

        <div className="flex gap-5 text-sm text-main-secondary flex-wrap">
          {HeroTags.map((item: HeroType, index: number) => (
            <div className="flex items-center gap-1 duration-200 ease-out cursor-pointer  active:scale-[.98] select-none hover:text-white" 
            key={index}>
              <item.icon />
              <span className="font-geist">{item.text}</span>
            </div>
          ))}
        </div>
        <button className="w-50  mt-5 h-full bg-white px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
          <span className="text-sm text-black font-geist">Make your Profile</span>
        </button>
      </div>
    </div>
  );
}
