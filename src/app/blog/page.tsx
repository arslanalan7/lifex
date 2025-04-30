import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/posts';

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/posts`, { cache: 'no-store' });
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 dark:text-blue-400">Our Latest Blog Posts</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.image || '/blog/default.jpg'}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
