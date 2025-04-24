'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        router.push('/thank-you'); // ✅ Yönlendirme burada!
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
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">Let's Connect!</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Have a question or want to schedule a call? Fill out the form below!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
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
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
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
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
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
          className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'error' && (
          <p className="text-red-500 mt-2">There was an error sending your message.</p>
        )}
      </form>
    </div>
  );
}
