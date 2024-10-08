// middleware.js
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 假设传入的请求 header 里 "Cookie:nextjs=fast"
  // 在 postman 中设置cookie：在header中添加键值对
  // cookie => nextjs=fast,haha=222
  console.log(111);
  const cookie = request.cookies.get('nextjs');
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has('nextjs'); // => true
  request.cookies.delete('nextjs');
  request.cookies.has('nextjs'); // => false

  // 设置 cookies
  const response = NextResponse.next();
  response.cookies.set('vercel1', 'fast1');
  response.cookies.set({
    name: 'vercel2',
    value: 'fast2',
    path: '/',
  });

  debugger;
  if (request.nextUrl.pathname.startsWith('/4/about')) {
    return NextResponse.rewrite(new URL('/4/home', request.url));
  }

  return response;

  // if (request.nextUrl.pathname.startsWith('/4/about')) {
  //   return NextResponse.rewrite(new URL('/4/home', request.url));
  // }

  // if (request.nextUrl.pathname.startsWith('/4/home')) {
  //   return NextResponse.redirect(new URL('/4/about', request.url));
  // }
}
