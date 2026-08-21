"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { hideAll, showLogin } from "@/lib/features/LoginForm/LoginShowSlice";
import { useEffect, useRef } from "react";
import AnimateHeight from "react-animate-height";
import Login from "./Login";
import SignIn from "./SignIn";

export default function mainAuth() {
  const ShowAuth = useAppSelector((state) => state.show.showAuth);
  const LoginSec = useAppSelector((state) => state.show.LoginSec);
  const SignUpSec = useAppSelector((state) => state.show.SignUpSec);
  const forgotSec = useAppSelector((state) => state.show.forgotSec);

  const LoginDiv = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        LoginDiv.current &&
        !LoginDiv.current.contains(event.target as Node) &&
        ShowAuth
      ) {
        // dispatch(hideAll());
      }
    }

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [LoginDiv, ShowAuth]);

  return (
    <AnimatePresence>
      {ShowAuth && (
        <div className="fixed inset-0 w-full h-full backdrop-blur-sm flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(2px)", y: -10 }}
            transition={{
              duration: 0.1,
            }}
            ref={LoginDiv}
            className="flex flex-col rounded-xl top-1/2 left-1/2  w-100  bg-main-bg max-sm:w-full max-sm:mt-auto max-sm:rounded-b-none  p-5 border "
          >
            <AnimateHeight
              id="auth-section"
              duration={200}
              height={"auto"}
            >
              {LoginSec && <Login />} {SignUpSec && <SignIn />}
            </AnimateHeight>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/*

 */
