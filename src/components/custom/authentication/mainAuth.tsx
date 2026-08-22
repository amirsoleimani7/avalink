"use client";

import {
  motion,
  useAnimate,
  AnimatePresence,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import {
  hideAll,
  showLogin,
  showSignUp,
} from "@/lib/features/LoginForm/LoginShowSlice";
import { Children, useEffect, useRef, useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import Forgot from "./Forgot";
import { showSide } from "@/lib/features/Sidebar/SidebarSlice";

export default function MainAuth() {
  const [scope, animate] = useAnimate();
  const controls = useDragControls();
  const y = useMotionValue(0);

  const ShowAuth = useAppSelector((state) => state.show.showAuth);
  const LoginSec = useAppSelector((state) => state.show.LoginSec);
  const SignUpSec = useAppSelector((state) => state.show.SignUpSec);
  const forgotSec = useAppSelector((state) => state.show.forgotSec);

  const authDiv = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        authDiv.current &&
        !authDiv.current.contains(event.target as Node) &&
        ShowAuth
      ) {
        dispatch(hideAll());
      }
    }

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [authDiv, ShowAuth]);

  return (
    <AnimatePresence>
      {ShowAuth && (
        <div className="fixed inset-0 w-full h-full backdrop-blur-sm flex items-center justify-center z-20 ">
          <motion.div
            style={{
              transition: "height 0.1s ease",
              y,
            }}
            initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(2px)", y: -10 }}
            transition={{
              duration: 0.1,
              type: "tween",
              ease: "easeInOut",
            }}
            onDragEnd={() => {
              console.log(y.get());
              if (y.get() > 120) {
                dispatch(hideAll());
              }
            }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragMomentum={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            ref={authDiv}
            className="flex flex-col rounded-xl top-1/2 left-1/2  w-100  bg-main-bg max-sm:w-full max-sm:mt-auto max-sm:rounded-b-none p-5 pt-0  border duration-200 ease-in-out transition-all"
          >
            <div className="hidden max-sm:flex  justify-center ">
              <button
                className="cursor-grab active:cursor-grabbing touch-none  w-1/5 h-2  mx-auto rounded-xl mt-2 hover:w-1/4 duration-200 ease-in-out transition-all  bg-main-bg-1 hover:bg-main-secondary hover:scale-110"
                onPointerDown={(e) => {
                  controls.start(e);
                }}
              ></button>
            </div>

            {LoginSec && <Login />}
            {SignUpSec && <SignIn />}
            {forgotSec && <Forgot />}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
