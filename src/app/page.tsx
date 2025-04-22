'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 overflow-hidden">
      {/* Arka plan efekti */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-blue-300 to-transparent rounded-full blur-3xl opacity-20"
      />

      {/* Hero içeriği */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6">
          Transform Your Life & Finances
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Personalized coaching to help you take control of your lifestyle and money.
        </p>
      </motion.div>
    </div>
  );
}
