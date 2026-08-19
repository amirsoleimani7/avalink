import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { MenuData, MenuType, MenuLink } from "@/data/MenuItems";
import SideBarNavigation from "./SideBarNavigation";

export default function Navigation() {

  return (
    <div className="fixed w-full z-10 backdrop-blur-2xl border-b  text-white flex items py-4  px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] justify-between select-none">
      <Link href={"/"} prefetch>
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
          <button className=" h-full   border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98] ">
            <span className="text-sm text-white font-geist">Login</span>
          </button>
          <button className=" h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">Sign up free</span>
          </button>
        </div>

        <button className="hidden max-lg:flex items-center justify-center  h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
          <span className="text-sm text-black font-geist">Join us</span>
        </button>

        <SideBarNavigation />
      </div>
    </div>
  );
}

/*

"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/docs">Docs</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}

*/
