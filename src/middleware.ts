// middleware.js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type MiddlewareFn = (
  request: NextRequest,
  response: NextResponse,
) => Promise<any>;

type WithMiddlewareFn = (middleware: any) => MiddlewareFn;

const send: MiddlewareFn = async (request, response) => response;

function chain(functions: WithMiddlewareFn[], index = 0): any {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return send;
}

const withMiddleware1: WithMiddlewareFn = (middleware) => {
  return async (request) => {
    let response = NextResponse.next();
    console.log('middleware11 ' + request.url);
    if (request.nextUrl.pathname.startsWith('/4/about')) {
      console.log(111);
      response = NextResponse.rewrite(new URL('/4/home', request.url));

      // 设置cookie
      response.cookies.set('vercel1', 'fast1');
      response.cookies.set({
        name: 'vercel2',
        value: 'fast2',
        path: '/',
      });

      // 设置header
      response.headers.set('x-hello-from-middleware1', 'hello');
    }
    if (request.nextUrl.pathname.startsWith('/4/home')) {
      console.log(222);
    }
    return middleware(request, response);
  };
};

const withMiddleware3: WithMiddlewareFn = (middleware) => {
  return async (request, response) => {
    console.log('middleware3 ' + request.url);
    return middleware(request, response);
  };
};

const withMiddleware2: WithMiddlewareFn = (middleware) => {
  return async (request, response) => {
    console.log('middleware2 ' + request.url);

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    console.log('nonce-middle', nonce);

    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
    const contentSecurityPolicyHeaderValue = cspHeader
      .replace(/\s{2,}/g, ' ')
      .trim();
    debugger;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue,
    );

    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue,
    );

    return middleware(request, response);
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
    '/((?!api|_next/static|_next/image|favicon.ico|static).*)',
  ],
};

export default chain([withMiddleware1, withMiddleware3]);
