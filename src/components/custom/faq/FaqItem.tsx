"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AnimateHeight from "react-animate-height";
import { faqType } from "@/data/faqData";

export default function FaqItem(faqitem: faqType) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="p-5 mt-3 rounded-xl border bg-main-bg w-full duration-200 ease-in-out transition-all hover:border-gray-800">
      <div
        className="flex items-center justify-between select-none cursor-pointer group"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="font-geist text-lg">{faqitem.Question}</h1>
        <button>
          <FiPlus
            size={20}
            className={`${show ? "rotate-45" : "  "} duration-200 transition-all ease-in-out  text-main-secondary group-hover:text-white`}
          />
        </button>{" "}
      </div>

      <AnimateHeight
        id="awnser-section"
        duration={200}
        height={show ? "auto" : 0}
      >
        <p className="font-geist text-main-secondary mt-5">{faqitem.Awnser}</p>
      </AnimateHeight>
    </div>
  );
}
