import { PropertiesData, PropertiesType } from "@/data/propertiesData";

export default function Properties() {
  return (
    <div className="w-full px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] select-none ">
      <div className="rounded-2xl border  w-full divide-x grid grid-cols-4 max-lg:grid-cols-2 max-lg:divide-y-0 max-lg:divide-x-0  max-sm:grid-cols-1 max-sm:divide-x-0 max-sm:divide-y overflow-hidden bg-[url(/img/bg/gggrain5.svg)]">
        {PropertiesData.map((propData: PropertiesType, index: number) => (
          <div
            className="w-full h-full font-geist p-5 flex flex-col justify-center items-center
             max-lg:nth-[1]:border-r max-lg:nth-[1]:border-b
             max-lg:nth-[2]:border-b 
             max-lg:nth-[3]:border-r 

             
             max-sm:nth-[1]:border-r-0 
             max-sm:nth-[3]:border-r-0 max-sm:nth-[3]:border-b
              group
              duration-200 ease-in-out transition-all 
               "
            key={index}
          >
            <propData.icon
              className="text-main-secondary w-1/2 h-1/2 mt-5 group-hover:text-white duration-200 ease-in-out transition-all group-hover:rotate-6 "
          />
            <div className="mt-20 h-1/2 group">
              <h1 className="text-sm ">{propData.text}</h1>
              <p
                className="text-main-secondary text-xs group-hover:text-white duration-200 ease-in-out transition-all
"
              >
                {propData.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
