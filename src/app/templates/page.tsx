"use client";
import { Metadata } from "next";

import HeaderBtn from "@/components/custom/template/HeaderButtons/HeaderBtn";
import FilterList from "@/components/custom/template/FilterList";
import TemplateItem from "@/components/custom/template/TemplateItem";
import { number } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// export const metadata: Metadata = {
//   title: "Templates",
//   description: "A libray with different avalink temapltes",
// };

const listItem = [1, 2, 3, , 2, 3, 3, 4, 4];

export default function Templates() {
  const FilterItem = useRef<HTMLDivElement>(null);
  const [locationY, setlocationY] = useState<number>(0);

  useEffect(() => {
    setlocationY(FilterItem.current?.clientHeight || 0);
  }, []);
  
  return (
    <div className="flex flex-col  items-center w-full  pt-10 mt-17 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
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
        <HeaderBtn itemsy={locationY} />
      </div>

      <div ref={FilterItem}>
        <FilterList />
      </div>

      <div
        className="w-full gap-2  grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  my-5"
        // ref={FilterItem}
      >
        {listItem.map((item, index: number) => {
          return <TemplateItem key={index} />;
        })}
      </div>
    </div>
  );
}

/*
      <div className="w-full h-full grid grid-cols-2 gap-2">
        {listItem.map(() => {
          return <TemplateItem />;
        })}
      </div>
 */
