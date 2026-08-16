"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function SideBarNavigation() {
  const [showSide, setShowSide] = useState(false);

  return (
    <button
      className="hidden  max-lg:flex items-center justify-center active:scale-[.98] cursor-pointer duration-200 ease-in-out transition-all"
      onClick={() => {
        setShowSide(!showSide);
      }}
    >
      {showSide ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
    </button>
  );
}
