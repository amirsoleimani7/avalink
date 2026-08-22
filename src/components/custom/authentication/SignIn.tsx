import { MdClose } from "react-icons/md";
import { hideAll, showLogin } from "@/lib/features/LoginForm/LoginShowSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function SignIn() {
  const SignUpSec = useAppSelector((state) => state.show.SignUpSec);

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

      <h1 className="font-geist  font-bold text-lg">Create an account</h1>
      <p className="font-geist  text-sm text-main-secondary">
        Enter your information below to create your account
      </p>

      <div className="font-geist flex flex-col gap-1">
        <label htmlFor="name-input" className="text-sm font-bold">
          Full Name
        </label>
        <input
          type="text"
          id="name-input"
          placeholder="John Doe"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-500 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="font-geist flex flex-col ">
          <label htmlFor="email-input" className="text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            id="email-input"
            placeholder="m@example.com"
            className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-500 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
          />
        </div>
        <p className="text-sm text-main-secondary">
          We'll use this to contact you. We will not share your email with
          anyone else.
        </p>
      </div>

      <div>
        <div className="font-geist flex flex-col gap-1">
          <label htmlFor="pass-input" className="text-sm font-bold">
            Password
          </label>
          <input
            type="password"
            id="password-input"
            className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-200 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
          />
        </div>
        <p className="text-sm text-main-secondary">
          Must be at least 8 characters long.
        </p>
      </div>

      <div className="font-geist flex flex-col gap-1">
        <div className="font-geist flex flex-col">
          <label htmlFor="confirm-input" className="text-sm font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-input"
            className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-200 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
          />
        </div>
        <p className="text-sm text-main-secondary">
          Please confirm your password.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="h-10 bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] mb-1"
          //   onClick={handleLogin}
        >
          <span className="text-sm text-black font-geist">Create Acount</span>
        </button>
        <button className=" h-10 bg-main-bg-2 border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-main-bg-1 hover:outline-gray-700 active:scale-[.98]">
          <span className="text-sm text-white font-geist">
            SignUp with Google
          </span>
        </button>
        <p className="font-geist text-center text-sm text-main-secondary">
          Already have an account?{" "}
          <span className="underline text-main-secondary duration-200 ease-in-out transition-all hover:text-white cursor-pointer"
          onClick={() => {
            dispatch(showLogin());
          }}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
