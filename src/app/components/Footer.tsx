import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-center sm:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">LifeX</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
            Lifestyle & Finance Coaching for a balanced and empowered life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a href="mailto:hello@lifex.com" className="hover:underline">Email</a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-lg" />
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 py-6 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Lifex. All rights reserved.
      </div>
    </footer>
  );
}
