import { hideAll, showLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useAppDispatch } from "@/lib/hooks";
import { MdClose } from "react-icons/md";

export default function Forgot() {
  const dispatch = useAppDispatch();

  return (
    <div className={`flex flex-col gap-5 mt-5 max-sm:mt-0`}>
      <div className="w-full flex justify-end">
        <button
          className="border rounded-full p-1.5 bg-main-hover duration-200 ease-in-out transition-all hover:bg-main-bg-1 cursor-pointer"
          onClick={() => {
            dispatch(hideAll());
          }}
        >
          <MdClose size={20} />
        </button>
      </div>
      <h1 className="font-geist  font-bold text-lg">Forgot your password?</h1>
      <p className="font-geist  text-sm text-main-secondary">
        No worries, we'll send you reset instructions.
      </p>
      <div className="font-geist flex flex-col ">
        <label htmlFor="email-input" className="text-sm font-bold">
          Email
        </label>
        <input
          type="email"
          id="email-input"
          autoFocus
          placeholder="m@example.com"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-500 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
        />
      </div>

      <div className="flex flex-col gap-2">
        <button className="h-10 bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] mb-1">
          <span className="text-sm text-black font-geist">Send reset link</span>
        </button>
        <button
          className=" h-10 bg-main-bg-2 border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-main-bg-1 hover:outline-gray-700 active:scale-[.98]"
          onClick={() => {
            dispatch(showLogin());
          }}
        >
          <span className="text-sm text-white font-geist">back to Login</span>
        </button>
      </div>
    </div>
  );
}
