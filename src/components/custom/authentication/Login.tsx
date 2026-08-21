import { MdClose } from "react-icons/md";

import { hideLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function Login() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-end ">
        <button
          className="border rounded-full p-1.5 bg-main-hover duration-200 ease-in-out transition-all hover:bg-main-bg-1 cursor-pointer"
          onClick={() => {
            dispatch(hideLogin());
          }}
        >
          <MdClose size={20} />
        </button>
      </div>
      <h1 className="font-geist  font-bold text-lg">Login to your account</h1>
      <p className="font-geist  text-sm text-main-secondary">
        Enter your email below to login to your account
      </p>
      <div className="font-geist flex flex-col ">
        <label htmlFor="email-input" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email-input"
          autoFocus
          placeholder="m@example.com"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-200 ease-in-out transition-all "
        />
      </div>
      <div className="font-geist flex flex-col">
        <div className="flex justify-between">
          <label htmlFor="password-input" className="text-sm">
            Password
          </label>
          <span className="hover:underline cursor-pointer text-sm">
            forgot pass
          </span>
        </div>
        <input
          type="password"
          id="password-input"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-200 ease-in-out transition-all"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="h-10 bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] mb-1">
          <span className="text-sm text-black font-geist">Login</span>
        </button>
        <button className=" h-10 bg-main-bg-2   border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-main-bg-1 hover:outline-gray-700 active:scale-[.98]">
          <span className="text-sm text-white font-geist">
            Login with Google
          </span>
        </button>
        <p className="font-geist text-center text-sm text-main-secondary">
          Don't have an account?{" "}
          <span className="underline text-main-secondary duration-200 ease-in-out transition-all hover:text-white cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
