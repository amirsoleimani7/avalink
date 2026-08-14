import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex w-full h-full items-center justify-center bg-black *:text-white">
      <div className="text-white font-semibold flex gap-1 text-center justify-center">
        <h1 className="font-bold font-bungee text-6xl max-md:text-5xl max-sm text-4xl text-white">
          ava Link
        </h1>
        <Spinner className="size-3"/>
      </div>
    </div>
  );
}
