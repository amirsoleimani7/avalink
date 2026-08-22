import { MdClose } from "react-icons/md";

// import { hideLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import * as EmailValidator from "email-validator";
import { useRef, useState } from "react";
import {
  hideAll,
  showForgot,
  showSignUp,
} from "@/lib/features/LoginForm/LoginShowSlice";

export default function Login() {
  const LoginSec = useAppSelector((state) => state.show.LoginSec);
  const dispatch = useAppDispatch();

  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    console.log(
      `email is : ", ${emailRef.current?.value} => ${EmailValidator.validate(emailRef.current?.value || "")}`,
    );

    // toast.add({
    //   title: "Event created",
    //   description: "Sunday, December 3 at 9:00 AM",
    // });
  };

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
      <h1 className="font-geist  font-bold text-lg">Login to your account</h1>
      <p className="font-geist  text-sm text-main-secondary">
        Enter your email below to login to your account
      </p>
      <div className="font-geist flex flex-col ">
        <label htmlFor="email-input" className="text-sm font-bold">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          id="email-input"
          autoFocus
          placeholder="m@example.com"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-500 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
        />
      </div>
      <div className="font-geist flex flex-col">
        <div className="flex justify-between">
          <label htmlFor="password-input" className="text-sm font-bold">
            Password
          </label>
          <span
            className="hover:underline cursor-pointer text-sm"
            onClick={() => {
              dispatch(showForgot());
            }}
          >
            forgot pass
          </span>
        </div>
        <input
          type="password"
          id="password-input"
          className="border rounded-lg mt-1 py-2 px-2 bg-main-bg-2 duration-200 ease-in-out transition-all focus:outline-1 focus:outline-main-secondary border-none "
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="h-10 bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] mb-1"
          onClick={handleLogin}
        >
          <span className="text-sm text-black font-geist">Login</span>
        </button>
        <button className=" h-10 bg-main-bg-2 border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-main-bg-1 hover:outline-gray-700 active:scale-[.98]">
          <span className="text-sm text-white font-geist">
            Login with Google
          </span>
        </button>
        <p className="font-geist text-center text-sm text-main-secondary">
          Don't have an account?{" "}
          <span
            className="underline text-main-secondary duration-200 ease-in-out transition-all hover:text-white cursor-pointer"
            onClick={() => {
              dispatch(showSignUp());
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
