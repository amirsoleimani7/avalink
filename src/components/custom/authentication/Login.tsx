"use client";

import { MdClose } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { showLogin, hideLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useEffect, useRef } from "react";
import { LoginForm } from "@/components/login-form";

export default function Login() {
  const ShowLoginSec = useAppSelector((state) => state.show.value);
  const LoginDiv = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        LoginDiv.current &&
        !LoginDiv.current.contains(event.target as Node) &&
        ShowLoginSec
      ) {
        dispatch(hideLogin());
        console.log(ShowLoginSec);
      }
    }

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [LoginDiv, ShowLoginSec]);

  return (
    <AnimatePresence>
      {ShowLoginSec && (
        <div className="fixed inset-0 w-full h-full backdrop-blur-sm flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(2px)", y: -10 }}
            transition={{
              duration: 0.1,
            }}
            ref={LoginDiv}
            className="flex flex-col rounded-xl top-1/2 left-1/2  w-100  bg-main-bg-1 max-lg:w-full max-lg:mt-auto  p-5 border "
          >
            <div className="w-full flex justify-end">
              <button
                className="border rounded-full p-1.5 bg-main-hover duration-200 ease-in-out transition-all hover:bg-main-bg-1 cursor-pointer"
                onClick={() => {
                  dispatch(hideLogin());
                }}
              >
                <MdClose size={20} />
              </button>
            </div>
            <h1 className="font-geist  font-bold text-lg">
              Login to your account
            </h1>
            <p className="font-geist  text-sm text-main-secondary">
              Enter your email below to login to your account
            </p>
            <div className="font-geist flex flex-col">
              <label htmlFor="email-input text-sm ">Email</label>
              <input
                type="email"
                id="email-input"
                placeholder="m@example.com"
                className="border rounded-lg mt-2 py-1 px-2"
              />
            </div>
            <div className="font-geist flex flex-col">
              <label htmlFor="email-input text-sm ">Password</label>
              <input
                type="email"
                id="email-input"
                className="border rounded-lg mt-2 py-1 px-2"
              />
            </div>
            <button className=" h-full bg-white px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-gray-200 active:scale-[.98] ">
              <span className="text-sm text-black font-geist">Login</span>
            </button>
            <button className=" h-full  border-none outline outline-gray-800 px-2 py-1 rounded-lg duration-200 ease-out cursor-pointer  hover:inset-shadow-md hover:bg-black/70 hover:outline-gray-700 active:scale-[.98]">
              <span className="text-sm text-white font-geist">
                Login with Google
              </span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/*

 */
