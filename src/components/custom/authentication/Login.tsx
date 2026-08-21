"use client";

import { MdClose } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { showLogin, hideLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useEffect, useRef } from "react";

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
            className="flex flex-col rounded-xl top-1/2 left-1/2  w-150 h-[50%] bg-main-bg-1 max-lg:w-full max-lg:mt-auto  p-5 border "
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
