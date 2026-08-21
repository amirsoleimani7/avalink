"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { MenuData, MenuType, MenuLink } from "@/data/menuData";
import SideBarNavigation from "./SideBarNavigation";

import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { showSide, hideSide } from "@/lib/features/Sidebar/SidebarSlice";
import { showLogin } from "@/lib/features/LoginForm/LoginShowSlice";

export default function Navigation() {
  const showSide = useAppSelector((state) => state.side.value); // Read
  const dispatch = useAppDispatch(); // Get remote control

  const handleSideBar = () => {
    dispatch(hideSide());
    window.scroll(0 , 0);
  };

  return (
    <div className="fixed w-full z-10 backdrop-blur-2xl border-b  text-white flex items py-4  px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] justify-between select-none">
      <Link href={"/"} prefetch onClick={handleSideBar}>
        <span className="font-bungee text-3xl duration-200 transition-all ease-in-out hover:text-gray-300 cursor-pointer">
          AVA LINK
        </span>
      </Link>
      <div className="max-lg:hidden">
        <NavigationMenu className={""}>
          <NavigationMenuList>
            {MenuData.map((menuItem: MenuType, index: number) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className={"font-geist "}>
                  {menuItem.menuTrigger}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  {menuItem.menuLink.map((link: MenuLink, index: number) => (
                    <NavigationMenuLink
                      className={"font-geist flex flex-col items-start w-72"}
                      key={index}
                      href={link.href}
                    >
                      <div className="flex items-center  gap-1">
                        {link.icon && <link.icon />}
                        <h1 className="text-white font-bold">{link.mLink}</h1>
                      </div>
                      <p className="text-main-secondary">{link.desc}</p>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-2 max-lg:hidden">
          <button
            className=" h-full   border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98]"
            onClick={() => {
              dispatch(showLogin());
            }}
          >
            <span className="text-sm text-white font-geist">Login</span>
          </button>
          <button
            className=" h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] "
            onClick={() => {
              dispatch(showLogin());
            }}
          >
            <span className="text-sm text-black font-geist">Sign up free</span>
          </button>
        </div>
        <button
          className="hidden max-lg:flex items-center justify-center  h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] "
          onClick={() => {
            dispatch(showLogin());
          }}
        >
          <span className="text-sm text-black font-geist">Join us</span>
        </button>
        <SideBarNavigation />
      </div>
    </div>
  );
}
