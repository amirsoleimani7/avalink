import { IconType } from "react-icons";
import { GrResources } from "react-icons/gr";


export type MenuLink = {
  mLink: string;
  desc: string;
  icon ?: IconType;
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
        mLink: "link1",
        desc: "lorem asdasda  asd ad ",
      },
      {
        mLink: "link2",
        desc: "lorem asdasda  asd ad ",
      },
      {
        mLink: "link3",
        desc: "lorem asdasda  asd ad ",
      },
    ],
  },

  {
    menuTrigger: "Templates",
    menuLink: [
      {
        mLink: "link1",
        desc: "lorem asdasda  asd ad ",
      },
      {
        mLink: "link2",
        desc: "lorem asdasda  asd ad ",
      },
      {
        mLink: "link3",

        desc: "lorem asdasda  asd ad ",
      },
    ],
  },

  {
    menuTrigger: "Learn",
    menuLink: [
      {
        mLink: "How to use Ava Link",
        desc: "this section teaches you how to fully setup your profile and sharing it",
        icon : GrResources
      },
    ],
  },
];
