import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Templates",
  description: "A libray with different avalink temapltes",
};

export default function Templates() {
  return (
    <div className="flex justify-center w-full h-full pt-10 mt-17 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
      <div className="font-geist  flex flex-col gap-4 items-center">
        <h1 className="font-bold text-4xl text-center max-lg:text-3xl ">
          An AvaLink template to suit every brand and creator.
        </h1>
        <p className="text-main-secondary text-center w-2/3 max-lg:w-full ">
          Different link apps, integrations, and visual styles can help you
          create an AvaLink that looks and feels like you and your brand.
          Explore our library of custom templates to grow and connect with your
          audience even more easily!
        </p>
        <div className="flex gap-5 w-full justify-center items-center">
          <button className="  bg-white px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">
              Browse temapltes
            </span>
          </button>
          <Link prefetch href={"learn"}>
            <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
              <span className="text-sm text-white font-geist">Learn</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
