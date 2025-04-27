import { NextResponse } from 'next/server';
import { container } from '@/lib/cosmosClient';
import { v4 as uuidv4 } from 'uuid'; // random id üretmek için

// GET: Tüm postları getir
export async function GET() {
  const { resources } = await container.items.readAll().fetchAll();
  return NextResponse.json(resources);
}

// POST: Yeni post oluştur
export async function POST(request: Request) {
  const body = await request.json();

  const { title, excerpt, content, image } = body;

  if (!title || !excerpt || !content) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const newItem = {
    id: uuidv4(), // random benzersiz id
    title,
    excerpt,
    content,
    image: image || '/blog/default.jpg', // eğer görsel yoksa default veriyoruz
    createdAt: new Date().toISOString(),
  };

  const { resource } = await container.items.create(newItem);

  return NextResponse.json(resource);
}
