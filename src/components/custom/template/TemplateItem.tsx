export default function TemplateItem() {
  return (
    <div className="  bg-main-hover  group   border ">
      <div className="w-full bg-black ">
        <img
          src="https://placehold.co/600x400/transparent/F00"
          alt=""
          className="object-cover block border-0 duration-300 ease-in-out transition-all group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col mt-5 ">
        <div className=" ">
          <h1 className="font-geist text-white font-bold ">card Title</h1>
          <p className="card descrition text-main-secondary font-geist">
            card descrition
          </p>
        </div>

        <div className="w-full p-2 bg-main-secondary flex justify-center items-cener">
          <button className="w-full  bg-white px-2 py-1 rounded-lg duration-200 ease-out my-auto cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
            <span className="text-sm text-black font-geist">Sign up free</span>
          </button>
        </div>
      </div>
    </div>
  );
}
