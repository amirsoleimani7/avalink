"use client";


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
        <div className="absolute inset-0 w-full h-screen backdrop-blur-sm flex items-center justify-center  z-20">
          <motion.div
            initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(2px)", y: -10 }}
            transition={{
              duration: 0.1,
            }}
            ref={LoginDiv}
            className=" rounded-xl top-1/2 left-1/2  w-100 h-100 bg-main-bg-1"
          ></motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
