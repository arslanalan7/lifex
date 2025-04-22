'use client';

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="min-h-screen bg-gray-50"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
