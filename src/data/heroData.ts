import { IconType } from "react-icons";
import { DiResponsive } from "react-icons/di";
import { SiBrandfetch } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";

export type HeroType = {
  icon: IconType;
  text: string;
};

export const HeroTags: HeroType[] = [
  {
    icon: DiResponsive,
    text: "responsive",
  },
  {
    icon: SiBrandfetch,
    text: "personalized",
  },
  {
    icon: BsFillLightningChargeFill,
    text: "Optimized",
  },
];
