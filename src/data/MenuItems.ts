export type MenuLink = {
  mLink: string;
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
      },
      {
        mLink: "link2",
      },
      {
        mLink: "link3",
      },
    ],
  },

  {
    menuTrigger: "Templates",
    menuLink: [
      {
        mLink: "link1",
      },
      {
        mLink: "link2",
      },
      {
        mLink: "link3",
      },
    ],
  },

  {
    menuTrigger: "Learn",
    menuLink: [
      {
        mLink: "link1",
      },
      {
        mLink: "link2",
      },
      {
        mLink: "link3",
      },
    ],
  },
];
