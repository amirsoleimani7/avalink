import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <div className="fixed  w-full bg-black border-b border-gray-800 text-white flex items py-4 px-[15%] justify-around select-none">
      <span className="font-bungee text-3xl duration-200 transition-all ease-in-out hover:text-gray-300 cursor-pointer">
        AVA LINK
      </span>

      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className={""}>
              <NavigationMenuTrigger className={"font-geist "}>
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-geist "}>
                Templates
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={"font-geist "}>
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-2">
        <button className=" h-full   border-none outline outline-gray-800 px-2 py-1 rounded-xl duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98] ">
          <span className="text-sm text-white font-geist">Login</span>
        </button>
        <button className=" h-full bg-white px-2 py-1 rounded-xl duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
          <span className="text-sm text-black font-geist">Sign up free</span>
        </button>
      </div>
    </div>
  );
}
