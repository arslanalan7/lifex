'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Karanlık katman */}
      <div className="absolute inset-0 bg-black/50" />

      {/* (İsteğe bağlı) Partikül efekti */}
      <ParticlesBackground />

      {/* Hero İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 text-white">
        {/* Metin ve CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Transform Your Life & Finances
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6 text-white/90">
            Personalized coaching to help you take control of your lifestyle and money.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
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
            src="/hero-image.png"
            alt="Coaching visual"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
