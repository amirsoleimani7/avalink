import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { MenuData, MenuType, MenuLink } from "@/data/MenuItems";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  return (
    <div className="fixed  w-full bg-black border-b border-gray-800 text-white flex items py-4  px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] justify-between select-none">
      <span className="font-bungee text-3xl duration-200 transition-all ease-in-out hover:text-gray-300 cursor-pointer">
        AVA LINK
      </span>

      <div className="max-md:hidden">
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
                    >
                      <div className="flex items-center  gap-1">
                        {link.icon && <link.icon />}
                        <h1 className="text-white font-bold">{link.mLink}</h1>
                      </div>
                      <p className="text-gray-300">{link.desc}</p>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-2 max-md:hidden">
          <button className=" h-full   border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98] ">
            <span className="text-sm text-white font-geist">Login</span>
          </button>
          <button className=" h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">Sign up free</span>
          </button>
        </div>

        <button className="hidden max-md:flex items-center justify-center  h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
          <span className="text-sm text-black font-geist">Join us</span>
        </button>
        <button className="hidden  max-md:flex items-center justify-center active:scale-[.98] cursor-pointer duration-200 ease-in-out transition-all ">
          <GiHamburgerMenu size={20} />
        </button>
      </div>
    </div>
  );
}
