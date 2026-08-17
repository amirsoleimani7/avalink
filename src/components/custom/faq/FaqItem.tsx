"use client"
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function FaqItem() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="p-5 mt-5 rounded-xl border bg-main-bg">
      <div
        className="flex items-center justify-between select-none cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="font-geist text-xl">why use linktree</h1>
        <button>
          <FiPlus size={20} className={`${show ? "rotate-45" : "  "} duration-200 transition-all ease-in-out`}/>
        </button>{" "}
      </div>

      <p className="font-geist text-main-secondary mt-5">
        It's true. Nearly everything is technically free online. But so is the
        ability to learn brain surgery on YouTube. And so is the content you pay
        tens of thousands of dollars to university for. The question isn't
        whether information exists, it's whether you can find the right
        information, in the right order, at the right depth, in time for your
        interview.
      </p>
    </div>
  );
}
