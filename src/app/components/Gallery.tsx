'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

type GalleryProps = {
  images: string[];            // Görsel isimleri
  title?: string;              // Başlık isteğe bağlı
  basePath?: string;           // Görsel yolu (varsayılan: /gallery)
};

export default function Gallery({
  images,
  title = 'Gallery',
  basePath = '/gallery',
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () => setCurrentIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
  const showNext = () => setCurrentIndex((prev) => (prev! === images.length - 1 ? 0 : prev! + 1));

  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((file, i) => (
          <Image
            key={i}
            src={`${basePath}/${file}`}
            alt={`Gallery image ${i + 1}`}
            width={400}
            height={300}
            className="rounded-lg shadow-md cursor-pointer object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl z-50"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 md:left-10 text-white text-3xl z-50"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className="max-w-4xl w-full px-6">
            <Image
              src={`${basePath}/${images[currentIndex]}`}
              alt="Gallery"
              width={1200}
              height={800}
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 md:right-10 text-white text-3xl z-50"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
