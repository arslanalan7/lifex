import { NextResponse } from 'next/server';
import { container } from '@/lib/cosmosClient';

export async function GET() {
  const { resources } = await container.items.readAll().fetchAll();
  return NextResponse.json(resources);
}
