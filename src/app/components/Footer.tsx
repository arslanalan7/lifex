import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-center sm:text-left">
        {/* Brand Section */}
        <div>
          <Link href="/" className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            <Image
              src="/lifex-logo.png"
              alt="LifeX logo"
              width={120}
              height={40}
              priority
              className="cursor-pointer transition dark:brightness-150"
            />
          </Link>
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
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
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
