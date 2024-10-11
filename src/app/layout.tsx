import './globals.css';
// 1. 导入想要使用的字体
import { Ma_Shan_Zheng } from 'next/font/google';
import cls from 'classnames';

import { headers } from 'next/headers';

import ClientInit from './clientInit';

// 2. 实例化字体对象，设置使用子集等
const MaShanZheng = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-MaShanZheng',
});

/**
 *
 * 服务端渲染和客户端渲染的结果不一致，导致谁和失败，然后页面报错，
 * 具体原因看 https://juejin.cn/post/7365793739892228096，
 *
 * 在使用 amfe-flexible 时，由于内部修改了body的字体大小，导致前后渲染不一致
 * 虽然使用 suppressHydrationWarning 可以解决错误：
 * <body suppressHydrationWarning>{children}</body>
 *
 * 但是出现谁和错误时候客户端会丢弃服务端渲染的结果，然后客户端自己重新渲染，很浪费资源，
 * 所以忽略错误并不是一个好的做法，我选择修改 amfe-flexible 的源码。
 *
 */

// 强制 fetch 不缓存
export const fetchCache = 'force-no-store';

function Layout({ children }: never) {
  const nonce = headers().get('x-nonce');
  console.log('nonce-page', nonce);
  return (
    <html
      lang='en'
      // className={cls(MaShanZheng.className, MaShanZheng.variable)}>
      className={cls(MaShanZheng.variable)}>
      <head>
        <script src='/static/amfe-flexible.js'></script>
      </head>
      <body>
        <ClientInit />
        {children}
      </body>
    </html>
  );
}

export default Layout;
