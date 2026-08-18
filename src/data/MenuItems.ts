import { IconType } from "react-icons";
import { GrResources } from "react-icons/gr";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";

export type MenuLink = {
  mLink: string;
  desc: string;
  icon?: IconType;
  href: string;
};

export type MenuType = {
  menuTrigger: string;
  menuLink: MenuLink[];
};

export const MenuData: MenuType[] = [
  {
    menuTrigger: "Products",
    menuLink: [
      {
        mLink: "Link in Bio",
        desc: "Create and customize your linktree",
        icon: FaLink,
        href: "/products",
      },
    ],
  },

  {
    menuTrigger: "Templates",
    menuLink: [
      {
        mLink: "Different Templates",
        desc: "Explore different templates for different vibes!",
        icon: LuLayoutTemplate,
        href: "/templates",
      },
    ],
  },

  {
    menuTrigger: "Learn",
    menuLink: [
      {
        mLink: "How to use Ava Link",
        desc: "this section teaches you how to fully setup your profile and sharing it",
        icon: GrResources,
        href: "/learn",
      },
    ],
  },
];
