import { Metadata } from "next";

import HeaderBtn from "@/components/custom/template/HeaderButtons/HeaderBtn";
import FilterList from "@/components/custom/template/FilterList";

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
        <p className="text-main-secondary text-center w-2/3 max-lg:w-full max-lg:line-clamp-3">
          Different link apps, integrations, and visual styles can help you
          create an AvaLink that looks and feels like you and your brand.
          Explore our library of custom templates to grow and connect with your
          audience even more easily!
        </p>
        <HeaderBtn />
      </div>

      <FilterList />
    </div>
  );
}
