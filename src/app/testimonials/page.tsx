'use client';

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

export default function TestimonialsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">What Clients Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            </div>
            <p className="text-gray-600 italic">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
