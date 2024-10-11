// app/api/draft/route.js
import { draftMode } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 这个和下面的效果一样
  return NextResponse.json({ name: 'a', email: 'v' });
  // 返回json数据
  return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  // 这个只能范湖及字符串，浏览器可以当做html渲染，不能返回json数据
  return new Response('asdasdasd', {
    status: 200,
  });
}
