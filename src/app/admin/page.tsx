'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [success, setSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    // 1. Önizleme için geçici URL oluştur
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  
    // 2. Azure'a upload işlemi
    const formData = new FormData();
    formData.append('file', file);
  
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  
    const data = await res.json();
    setFormData(prev => ({ ...prev, image: data.url }));
  };
   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { title, excerpt, content, image } = formData;

    if (!title || !excerpt || !content) {
      alert('Please fill all required fields.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content, image }),
      });

      if (res.ok) {
        setSuccess(true); // ✅ Success toast'ı tetikle
        setFormData({ title: '', excerpt: '', content: '', image: '' });
        setTimeout(() => {
          setSuccess(false);
          router.push('/blog');
        }, 2000); // 2 saniye gösterip sonra blog sayfasına yönlendir
      } else {
        throw new Error('Error creating post');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-center">Create a New Post</h1>
      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md text-center animate-fade-in-down">
            🎉 Post created successfully!
        </div>
        )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Title *</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Excerpt *</label>
          <input
            name="excerpt"
            type="text"
            value={formData.excerpt}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select an image to upload *</label>
          <input
            name="image"
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-800 dark:text-gray-200"
           />
           {previewUrl && (
            <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Preview:</p>
                <img src={previewUrl} alt="Preview" className="w-48 rounded-lg shadow-md" />
            </div>
            )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Content *</label>
          <textarea
            name="content"
            rows={6}
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-800 dark:text-gray-200 resize-none"
          />
        </div>

        <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition disabled:opacity-50"
            >
            {loading && (
                <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                ></path>
                </svg>
            )}
            {loading ? 'Submitting...' : 'Create Post'}
        </button>

      </form>
    </div>
  );
}
