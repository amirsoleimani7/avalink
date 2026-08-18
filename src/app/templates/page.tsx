import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Templates",
  description: "A libray with different avalink temapltes",
};

export default async function Templates() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("something");

    }, 2000);
  });

  return <div className="text-white w-full h-full  mt-17">temapltes</div>;
}
