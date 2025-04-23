'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden px-6 transition-colors">
      {/* Partikül arka plan */}
      <ParticlesBackground />

      {/* Hero grid yapısı */}
      <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Metin ve CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 transition dark:brightness-150">
            Transform Your Life & Finances
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xl mb-6">
            Personalized coaching to help you take control of your lifestyle and money.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Book a Free Discovery Call
          </a>
        </motion.div>

        {/* Görsel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block"
        >
          <Image
            src="/hero-image.png" // `public/` klasörüne eklenmeli
            alt="Coaching visual"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
