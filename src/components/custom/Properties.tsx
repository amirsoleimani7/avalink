import { PropertiesData, PropertiesType } from "@/data/propertiesData";

export default function Properties() {
  return (
    <div className="w-full px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
      <div className="rounded-2xl border w-full h-100 grid grid-cols-4 overflow-hidden">
        {PropertiesData.map((propData: PropertiesType, index: number) => (
          <div className="w-full h-full font-geist p-5 flex flex-col justify-center items-center border-l first:border-l-0" key={index}>
            <propData.icon className="text-main-secondary w-1/2 h-full" />
            <div className="mt-auto">
                <h1 className="text-sm">{propData.text}</h1>
                <p className="text-main-secondary text-xs">{propData.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
