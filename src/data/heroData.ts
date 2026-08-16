import { IconType } from "react-icons";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiBrandfetch } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";

export type HeroType = {
  icon: IconType;
  text: string;
};

export const HeroTags: HeroType[] = [
  {
    icon: MdOutlinePhoneIphone,
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
