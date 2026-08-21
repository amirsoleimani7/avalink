"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MenuData, MenuType, MenuLink } from "@/data/menuData";
import { motion, AnimatePresence } from "framer-motion";

import { hideSide, showSide } from "@/lib/features/Sidebar/SidebarSlice";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { showLogin, showSignUp } from "@/lib/features/LoginForm/LoginShowSlice";
export default function SideBarNavigation() {
  const showSideSec = useAppSelector((state) => state.side.value);
  const dispatch = useAppDispatch();

  const handleShowSide = () => {
    showSideSec === false ? dispatch(showSide()) : dispatch(hideSide());
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="hidden  max-lg:flex items-center justify-center active:scale-[.98] cursor-pointer duration-200 ease-in-out transition-all"
        onClick={handleShowSide}
      >
        {showSideSec ? <MdClose size={20} /> : <GiHamburgerMenu size={20} />}
      </button>

      <AnimatePresence>
        {showSideSec && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(2px)", y: 3 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(2px)", y: -3 }}
            transition={{
              duration: 0.1,
            }}
            className="absolute w-screen h-screen left-0 top-17 pt-4 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] hidden max-lg:flex flex-col backdrop-blur-2xl bg-black font-geist z-20"
          >
            <div className="flex w-full gap-2 mb-5 ">
              <button
                className="w-1/3 h-full  border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98] "
                onClick={() => {
                  dispatch(hideSide());
                  dispatch(showLogin());
                }}
              >
                <span className="text-sm text-white font-geist">Login</span>
              </button>
              <button
                className="w-2/3 h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] "
                onClick={() => {
                  dispatch(hideSide());
                  dispatch(showSignUp());
                }}
              >
                <span className="text-sm text-black font-geist ">
                  Sign up free
                </span>
              </button>
            </div>
            {MenuData.map((link: MenuType, index: number) => (
              <div className="flex flex-col gap-1 mb-5" key={index}>
                <h1 className="text-[15px]">{link.menuTrigger}</h1>
                <div className="pl-2 text-gray-400 duration-200 ease-out transition-all hover:text-white cursor-pointer">
                  {link.menuLink.map((i: MenuLink, index: number) => (
                    <Link
                      href={i.href}
                      key={index}
                      prefetch
                      onClick={() => {
                        dispatch(hideSide());
                      }}
                    >
                      <p className="text-sm">{i.mLink}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
