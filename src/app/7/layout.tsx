// app/layout.js
import Link from 'next/link';

export default function RootLayout({ children }: never) {
  return (
    <html lang='en'>
      <body>
        <div>
          <Link href='/7/a'>Link to /a</Link>
          <br />
          <Link href='/7/b'>Link to /b</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
