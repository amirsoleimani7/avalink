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
    <div className="fixed  w-full bg-black border-b border-gray-800 text-white flex items py-4 px-[15%] justify-between">
      <span className="font-bungee text-3xl">AVA LINK</span>

      <div>
        <button className=" h-full bg-white  px-2 py-1 rounded-xl duration-200 ease-in-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
          <span className="text-sm text-black font-geist">Sign up free</span>
        </button>
      </div>
    </div>
  );
}
