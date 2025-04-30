'use client';

import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Post } from '@/types/posts';
import Image from 'next/image';

export default function AdminPage() {

  const [isOpen, setIsOpen] = useState(false); // Modal Aç/Kapa
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  /*Confirm Deletion*/
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  /*Edit Posts*/
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);


  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
    setLoadingPosts(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formDataUpload,
    });

    const data = await res.json();
    setFormData(prev => ({ ...prev, image: data.url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { title, excerpt, content, image } = formData;
    if (!title || !excerpt || !content) {
      toast.error('Please fill all required fields!');
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
        toast.success('🎉 Blog post created!');
        setFormData({ title: '', excerpt: '', content: '', image: '' });
        setPreviewUrl(null);
        closeModal();
        fetchPosts();
      } else {
        throw new Error('Post creation failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Manage Posts</h1>
        <button
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-semibold transition"
        >
          ➕ Add Post
        </button>
      </div>

      {/* --- Modal --- */}
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <Dialog.Panel className="w-full max-w-2xl rounded bg-white dark:bg-gray-800 p-6">
          <Dialog.Title className="text-2xl font-bold mb-4 text-center">Create New Post</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Post Title"
              className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100"
              required
            />
            <input
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Post Excerpt"
              className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100"
              required
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Post Content"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100 resize-none"
              required
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100"
            />
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
                width={128}
                height={128}
              />
            )}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Create'}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>

      {/* --- Post Listesi --- */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Existing Posts</h2>

      {loadingPosts ? (
        <p>Loading posts...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.excerpt}</p>
              </div>
              <div className="flex gap-4">
              <button
                onClick={() => {
                  setEditModalOpen(true);
                  setPostToEdit(post); // seçilen post verisini set et
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Edit
              </button>

                <button
                  onClick={() => {
                    setConfirmModalOpen(true);
                    setPostToDelete(post.id);
                  }}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white dark:bg-gray-800 p-6 text-center">
          <Dialog.Title className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            ⚡ Are you sure you want to delete this post?
          </Dialog.Title>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setConfirmModalOpen(false)}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                if (!postToDelete) return;
                const res = await fetch(`/api/posts/${postToDelete}`, {
                  method: 'DELETE',
                });
                if (res.ok) {
                  toast.success('🗑️ Post deleted!');
                  fetchPosts();
                } else {
                  toast.error('❌ Failed to delete!');
                }
                setConfirmModalOpen(false);
                setPostToDelete(null);
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Yes, Delete
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <Dialog.Panel className="w-full max-w-2xl rounded bg-white dark:bg-gray-800 p-6">
          <Dialog.Title className="text-2xl font-bold mb-4 text-center">Edit Post</Dialog.Title>

          {postToEdit && (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await fetch(`/api/posts/${postToEdit.id}`, {
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    title: postToEdit.title,
                    excerpt: postToEdit.excerpt,
                    content: postToEdit.content,
                  }),
                });
                if (res.ok) {
                  toast.success('🎉 Post updated!');
                  setEditModalOpen(false);
                  setPostToEdit(null);
                  fetchPosts();
                } else {
                  toast.error('❌ Failed to update!');
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                value={postToEdit.title}
                onChange={(e) => setPostToEdit({ ...postToEdit, title: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100"
                placeholder="Title"
                required
              />
              <input
                type="text"
                value={postToEdit.excerpt}
                onChange={(e) => setPostToEdit({ ...postToEdit, excerpt: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100"
                placeholder="Excerpt"
                required
              />
              <textarea
                value={postToEdit.content}
                onChange={(e) => setPostToEdit({ ...postToEdit, content: e.target.value })}
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-100 resize-none"
                placeholder="Content"
                required
              />
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setEditModalOpen(false);
                    setPostToEdit(null);
                  }}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold transition"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </Dialog.Panel>
      </Dialog>


    </div>
    
  );
}
