import FaqItem from "./FaqItem";
import { faqType, faqData } from "@/data/faqData";

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%] ">
      <h1 className="font-geist text-4xl">FAQ</h1>
      <p className="font-geist text-main-secondary">
        Find answers to common questions about our platform, and process
      </p>
      <div className="flex flex-col  w-full">
        {faqData.map((item: faqType, index: number) => (
          <FaqItem {...item} key={index}/>
        ))}
      </div>
    </div>
  );
}
