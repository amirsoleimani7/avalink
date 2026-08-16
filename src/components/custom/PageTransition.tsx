// components/PageTransition.jsx
import { motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children }: { children: React.ReactElement }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for premium feel
        opacity: { duration: 0.5 },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
