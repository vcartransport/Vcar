"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HeroAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-4xl mx-auto -mt-24"
    >
      {children}
    </motion.div>
  );
}
