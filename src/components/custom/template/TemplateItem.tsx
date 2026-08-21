import { useState } from "react";
import MyImageComponent from "./ImgItem";

export default function TemplateItem() {
  return (
    <div className=" group rounded-xl overflow-hidden border ">
      <div
        className={`w-full relative overflow-hidden transition-all  duration-200 ease-in-out `}
      >
        <MyImageComponent url="https://placehold.co/600x400/000000/FFF" />
      </div>
      
      <div className="flex flex-col ">
        <div className="py-5 px-2 ">
          <div className="flex justify-between w-full mb-2">
            <h1 className="font-geist  text-white font-semibold">card Title</h1>
            <div className="bg-main-bg-1 px-2 rounded-2xl ">
              <span className="font-geist text-xs">Featured</span>
            </div>
          </div>
          <p className="card descrition text-main-secondary font-geist text-sm">
            card descrition asdasd da asdas dasda das dasd as asd asd asd
            asdasasdas sdasd
          </p>
        </div>

        <div className="w-full p-4 bg-main-hover flex justify-center items-cener ">
          <button className="w-full   bg-white px-2 py-1 rounded-lg duration-200 ease-out  cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">get Template</span>
          </button>
        </div>
      </div>
    </div>
  );
}
