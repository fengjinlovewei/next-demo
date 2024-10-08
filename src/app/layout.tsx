import Script from 'next/script';
import './globals.css';

// 强制 fetch 不缓存
export const fetchCache = 'force-no-store';

function Layout({ children }: never) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <Script src='/amfe-flexible.js' />

      <body>{children}</body>
    </html>
  );
}

export default Layout;
