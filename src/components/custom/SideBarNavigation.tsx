"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MenuData, MenuType, MenuLink } from "@/data/MenuItems";

export default function SideBarNavigation() {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        className="hidden  max-lg:flex items-center justify-center active:scale-[.98] cursor-pointer duration-200 ease-in-out transition-all"
        onClick={() => {
          setShowSide(!showSide);
        }}
      >
        {showSide ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
      </button>
      {showSide ? (
        <div className="absolute w-screen h-screen left-0 top-18 pt-4 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] hidden max-lg:flex flex-col bg-black backdrop-blur-3xl font-geist">
          {MenuData.map((link: MenuType, index: number) => (
            <div>
              <h1>{link.menuTrigger}</h1>
              <div>
                {link.menuLink.map((i: MenuLink, index: number) => (
                  <p>{i.mLink}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
