import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function SideBarNavigation() {
  return (
    <div>
      <button className="hidden  max-lg:flex items-center justify-center active:scale-[.98] cursor-pointer duration-200 ease-in-out transition-all ">
        <GiHamburgerMenu size={20} />
        <MdClose />
      </button>
    </div>
  );
}
