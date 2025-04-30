import { container } from '@/lib/cosmosClient';
import { blobClient } from '@/lib/blobstorage';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } } // Updated type here
) {
  try {
    const { id } = params;

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
  req: NextRequest,
  { params }: { params: { id: string } } // Updated type here
) {
  try {
    const { id } = params;
    const body = await req.json();

    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const updatedItem = {
      ...resource,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await container.items.upsert(updatedItem);

    return NextResponse.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } } // Updated type here
) {
  try {
    const { id } = params;
    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const imageUrl = resource.image;
    if (imageUrl) {
      const urlParts = imageUrl.split('/');
      const blobName = urlParts[urlParts.length - 1];

      await blobClient.deleteBlob(blobName);
    }

    await container.item(id, id).delete();

    return NextResponse.json({ message: 'Post and image deleted successfully' });
  } catch (error) {
    console.error('Error deleting post and image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}