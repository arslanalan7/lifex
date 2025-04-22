import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Lifestyle Coach
        </Link>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
