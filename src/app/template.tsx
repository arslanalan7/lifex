'use client';

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // custom bezier: ease-in-out
          }}
          className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
