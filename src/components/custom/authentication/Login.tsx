import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  return (
    <div className="absolute inset-0 w-full h-screen backdrop-blur-3xl flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, filter: "blur(2px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(2px)", y: -10 }}
          transition={{
            duration: 0.1,
          }}
          className=" rounded-xl top-1/2 left-1/2  w-100 h-100 bg-main-bg-1 "
        ></motion.div>
      </AnimatePresence>
    </div>
  );
}
