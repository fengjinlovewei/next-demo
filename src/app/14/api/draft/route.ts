// app/api/draft/route.js
import { draftMode } from 'next/headers';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('14-API-request', request);
  draftMode().enable();
  return new Response('Draft mode is enabled');
}
