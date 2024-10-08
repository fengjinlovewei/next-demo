import { NextResponse } from 'next/server';
import type { NextRequest, MiddlewareConfig } from 'next/server';

export async function GET(request: NextRequest, context: MiddlewareConfig) {
  console.log('request', request);
  console.log('context', context);
  debugger;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 },
  );
}
