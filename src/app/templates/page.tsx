import { Metadata } from "next";

import HeaderBtn from "@/components/custom/template/HeaderButtons/HeaderBtn";



export const metadata: Metadata = {
  title: "Templates",
  description: "A libray with different avalink temapltes",
};

export default function Templates() {
  return (
    <div className="flex flex-col  items-center w-full h-full pt-10 mt-17 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
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
        <HeaderBtn />
      </div>

      <div className="w-full mt-10 flex gap-4 flex-wrap">
        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer   hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm  text-main-secondary font-geist">
            All temapltes
          </span>
        </button>

        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">
            Fashion
          </span>
        </button>

        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">
            Health and fitness
          </span>
        </button>

        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary  font-geist">
            Marketing
          </span>
        </button>
        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">Music</span>
        </button>

        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">Sports</span>
        </button>
        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">Sports</span>
        </button>

        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">Sports</span>
        </button>
        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-main-secondary font-geist">Sports</span>
        </button>
      </div>
    </div>
  );
}
