"use client";
import Link from "next/link";

export default function HeaderBtn() {
  return (
    <div className="flex gap-5 w-full justify-center items-center">
      <button
        className="  bg-white px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98]"
        onClick={() => {
          // scroll down a little
          window.scrollBy(0, 10);
        }}
      >
        <span className="text-sm text-black font-geist">Browse temapltes</span>
      </button>
      <Link prefetch href={"learn"}>
        <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer  hover:bg-main-hover active:scale-[.98] ">
          <span className="text-sm text-white font-geist">Learn</span>
        </button>
      </Link>
    </div>
  );
}
