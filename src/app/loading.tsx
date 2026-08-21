import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex w-full h-full mt-17 items-center justify-center bg-black *:text-white">
      <div className=" font-semibold flex gap-5 items-center  justify-between bg-main-bg py-2 px-4 rounded-xl group cursor-pointer active:scale-[.98]">
        <Spinner className="size-4 text-main-secondary duration-200 ease-in-out transition-all group-hover:text-white" />
        <h1 className="font-geist text-main-secondary duration-200 ease-in-out transition-all group-hover:text-white">
          Loading...
        </h1>
      </div>
    </div>
  );
}
