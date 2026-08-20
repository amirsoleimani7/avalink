export default function TemplateItem() {
  return (
    <div className="w-full h-[500px]  bg-main-hover   rounded-xl p-3">
      <div className="w-full h-2/3  bg-black rounded-xl overflow-hidden">
        <img src="" alt="" className="w-full h-full" />
      </div>
      <div>
        <h1 className="font-geist text-white font-bold ">card Title</h1>
        <p className="card descrition text-main-secondary font-geist">
          {" "}
          card descrition
        </p>
      </div>
    </div>
  );
}
