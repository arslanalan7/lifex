'use client';

import Image from 'next/image';
import { FaCertificate, FaGlobe, FaUserCheck } from 'react-icons/fa';
import Gallery from '../components/Gallery'; // ✅ Yol senin proje yapına göre değişebilir
import Testimonials from '../components/Testimonials';

const galleryImages = [
  'a-gym-with-a-view-of-the-city.jpg',
  'a-man-and-a-woman-doing-push-ups-with-kettles.jpg',
  'a-man-standing-triumphant-on-a-beach-in-new-romney-while-looking-out-into-the-water.jpg',
  'a-woman-doing-a-yoga-pose-in-a-field.jpg',
  'focus-photography-of-womans-fist.jpg',
  'man-in-black-shorts-and-green-nike-basketball-shoes-doing-exercise.jpg',
  'man-running-on-edge-near-mountain.jpg',
  'two-men-running-at-park.jpg',
  'two-women-in-yellow-tank-top-and-black-shorts-sitting-on-white-bench-during-daytime.jpg',
  'woman-in-black-tank-top-and-gray-leggings-doing-yoga.jpg',
  'woman-standing-in-front-of-exercise-equipment.jpg',
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Tanıtım */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            Helping You Live Better – Physically, Mentally & Financially
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I'm Jack – a coach who blends personal transformation with real-world financial wisdom to help you take control of your life.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
            <li className="flex items-center gap-2"><FaCertificate /> Certified Financial & Lifestyle Coach</li>
            <li className="flex items-center gap-2"><FaUserCheck /> 10+ Years of Experience</li>
            <li className="flex items-center gap-2"><FaGlobe /> Clients Across 5+ Countries</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Whether you're aiming for a healthier routine or better money management, my mission is to empower you with tools and insights to live your best life.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="Jack - Life Coach"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800">
            Jack Anderson — Coach & Mentor
          </div>
        </div>
      </section>

      {/* Hikaye */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">My Story</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Years ago, I found myself stuck – in poor habits, financial stress, and a lifestyle that didn’t align with who I wanted to be.
          That’s when I began studying behavior change, financial strategy, and holistic coaching.
          Now, I dedicate my life to helping others unlock that same shift.
        </p>
      </section>

      {/* Galeri */}
      <Gallery
        title="Gallery – Moments That Matter"
        images={galleryImages}
        basePath="/gallery"
      />

      {/* Felsefe */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">My Coaching Philosophy</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I believe that lasting change begins with mindset. My approach is rooted in accountability, goal-setting, and practical strategies tailored to your unique lifestyle and personality.
        </p>
      </section>

      {/* Sertifikalar */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Certifications & Credentials</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Certified Financial Coach (IFC)</li>
          <li>Bachelor’s in Behavioral Psychology</li>
          <li>Trained in CBT & Motivational Interviewing</li>
        </ul>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-blue-50 dark:bg-zinc-700 p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Ready to Take the First Step?</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Book a free discovery call and let’s build a plan tailored just for you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Your Free Call
        </a>
      </section>
    </div>
  );
}
