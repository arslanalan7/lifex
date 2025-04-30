import { NextResponse } from 'next/server';
import { container } from '@/lib/cosmosClient';
import { blobClient } from '@/lib/blobstorage'; // yeni bir blob bağlantı dosyası yaptık varsayalım!

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(resource);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    // Mevcut veriyi çekiyoruz
    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Güncellenmiş yeni veri
    const updatedItem = {
      ...resource,
      ...body, // yeni gönderilen alanları mevcut resource'un üstüne yazıyoruz
      updatedAt: new Date().toISOString(), // optional: güncelleme tarihi
    };

    await container.items.upsert(updatedItem);

    return NextResponse.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // 1. Image URL'den blob adı çıkar
    const imageUrl = resource.image;
    if (imageUrl) {
      const urlParts = imageUrl.split('/');
      const blobName = urlParts[urlParts.length - 1];

      // 2. Blob Storage'dan resmi sil
      await blobClient.deleteBlob(blobName);
    }

    // 3. CosmosDB'den post'u sil
    await container.item(id, id).delete();

    return NextResponse.json({ message: 'Post and image deleted successfully' });
  } catch (error) {
    console.error('Error deleting post and image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


