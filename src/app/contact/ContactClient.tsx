'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        router.push('/thank-you');
      } else {
        throw new Error('Form error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      
      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center shadow-md space-y-4">
          <FaMapMarkerAlt className="text-3xl text-red-600 mx-auto" />
          <h3 className="text-xl font-semibold">Address</h3>
          <p>123 Business Street<br />London, UK</p>
          <a
            href="https://maps.google.com/?q=123 Business Street, London, UK"
            target="_blank"
            className="text-blue-600 hover:underline inline-block mt-2"
          >
            View on Map
          </a>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center shadow-md space-y-4">
          <FaPhone className="text-3xl text-red-600 mx-auto" />
          <h3 className="text-xl font-semibold">Phone</h3>
          <p>+44 123 456 7890</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center shadow-md space-y-4">
          <FaEnvelope className="text-3xl text-red-600 mx-auto" />
          <h3 className="text-xl font-semibold">Email</h3>
          <p>hello@lifex.live</p>
          <div className="flex justify-center gap-4 mt-3 text-2xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div>
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">Let's Connect!</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Have a question or want to schedule a call? Fill out the form below!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none dark:text-gray-300 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none dark:text-gray-300 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none resize-none dark:text-gray-300 dark:bg-gray-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p className="text-red-500 mt-2">There was an error sending your message.</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
