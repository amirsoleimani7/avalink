export default function TemplateItem() {
  return (
    <div className="bg-main-hover group rounded-xl overflow-hidden border ">
      <div className="w-full overflow-hidden">
        <img
          src="https://placehold.co/600x400/transparent/F00"
          alt=""
          className="object-cover block border-0 duration-300 ease-in-out transition-all group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col mt-5 ">
        <div className="py-5 px-2 bg-main-bg">
          <div className="flex justify-between w-full">
            <h1 className="font-geist  text-white font-semibold">card Title</h1>
            <div className="bg-main-hover px-2 rounded-2xl ">
              <span className="font-geist text-xs">Featured</span>
            </div>
          </div>
          <p className="card descrition text-main-secondary font-geist text-sm">
            card descrition
          </p>
        </div>

        <div className="w-full p-4 bg-main-hover flex justify-center items-cener">
          <button className="w-full  bg-white px-2 py-1 rounded-lg duration-200 ease-out my-auto cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">get Template</span>
          </button>
        </div>
      </div>
    </div>
  );
}
