// middleware.js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type WithMiddlewareFn = (
  middleware: any,
) => (request: NextRequest) => Promise<any>;

function chain(functions: WithMiddlewareFn[], index = 0): any {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

const withMiddleware1: WithMiddlewareFn = (middleware) => {
  return async (request) => {
    console.log('middleware1 ' + request.url);
    if (request.nextUrl.pathname.startsWith('/4/about')) {
      console.log(111);
      const response = NextResponse.rewrite(new URL('/4/home', request.url));

      // 设置cookie
      response.cookies.set('vercel1', 'fast1');
      response.cookies.set({
        name: 'vercel2',
        value: 'fast2',
        path: '/',
      });

      // 设置header
      response.headers.set('x-hello-from-middleware1', 'hello');

      return response;
    }
    if (request.nextUrl.pathname.startsWith('/4/home')) {
      console.log(222);
    }
    return middleware(request);
  };
};

const withMiddleware2: WithMiddlewareFn = (middleware) => {
  return async (request) => {
    console.log('middleware2 ' + request.url);
    return middleware(request);
  };
};

export const config = {
  matcher: [
    /*
     * 匹配所有的路径除了以这些作为开头的：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default chain([withMiddleware1, withMiddleware2]);
