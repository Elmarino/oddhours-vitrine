import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    env: process.env.NODE_ENV
  });
};

export const POST = async (request: NextRequest) => {
  const json = await request.formData();
  const data = {
    citataion: String(json.get('citation')),
    author: String(json.get('author'))
  };

  const newCitation = await prisma.citation.create({
    data: {
      author: data.author,
      text: data.citataion
    }
  });
  return NextResponse.json({
    citation: newCitation
  });
};
