import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates",
  description: "A libray with different avalink temapltes",
};

export default function Templates() {
  return (
    <div className="text-white w-full h-full  mt-17 px-[15%] max-xl:px-[10%] max-md:px-[8%] max-sm:px-[4%]">
      <div className="">
        <h1 className="font-geist">An AvaLink template to suit every brand and creator.</h1>
        <p>
          Different link apps, integrations, and visual styles can help you
          create an AvaLink that looks and feels like you and your brand.
          Explore our library of custom templates to grow and connect with your
          audience even more easily!
        </p>
      </div>
    </div>
  );
}
