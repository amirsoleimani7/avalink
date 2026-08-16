import { IconType } from "react-icons";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { SiCssdesignawards } from "react-icons/si";
import { FaRocket } from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";

export type PropertiesType = {
  icon: IconType;
  text: string;
  desc: string;
};

export const PropertiesData: PropertiesType[] = [
  {
    icon: IoExtensionPuzzleSharp,
    text: "Basic",
    desc: "Avalink simplifies the process for creators to share multiple parts of themselves in one inclusive link.",
  },
  {
    icon: SiCssdesignawards,
    text: "Design",
    desc: "Modern yet professional desgin and rich temaplte library that you can choose from",
  },
  {
    icon: FaRocket,
    text: "Performance",
    desc: "Lightning-fast load times and 99.9% uptime ensure your links always work when your audience needs them.",
  },
  {
    icon: IoOptionsSharp,
    text: "Customization",
    desc: "Deep visual controls let you tweak colors, fonts, and layouts to match your brand identity perfectly.",
  },
];
