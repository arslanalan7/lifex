'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <FaCheckCircle className="text-green-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2">Thanks for Reaching Out!</h1>
        <p className="text-lg mb-6 max-w-lg">
          Your message has been sent successfully. I’ll get back to you as soon as possible!
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
