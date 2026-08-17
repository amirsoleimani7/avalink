export default function Footer() {
  return (
    <div className="px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] mt-10 border-t">
      <div className="w-full  flex flex-col gap-1 py-4">
        <span className="font-bungee text-xl duration-200 transition-all ease-in-out hover:text-gray-300 cursor-pointer">
          AVA LINK
        </span>
        <p className="font-geist text-xs text-main-secondary duration-200 transition-all ease-in-out hover:text-white cursor-pointer">© 2026 AvaLink, LLC. All rights reserved</p>
      </div>
    </div>
  );
}
