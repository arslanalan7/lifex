import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

async function getPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/posts`, { cache: 'no-store' });
  const posts = await res.json();
  return posts.find((post: any) => post.id === id);
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // params'ı await ile çöz!

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Ana görsel */}
      <div className="relative w-full h-72 mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          src={post.image || '/blog/default.jpg'}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      {/* Geri dön linki */}
      <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      {/* Başlık ve İçerik */}
      <article className="prose prose-blue dark:prose-invert">
        <h1>{post.title}</h1>
        {post.createdAt && (
          <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
        )}
        <p className="mt-6 whitespace-pre-line">{post.content}</p>
      </article>
    </div>
  );
}
