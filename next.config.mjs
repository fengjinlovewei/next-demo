import mdx from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config
    console.log('webpack-config', buildId, dev, isServer);
    return config;
  },

  // output: 'export',
  // Next.js 接受具有以下扩展名的文件.tsx, .ts, .jsx, .js
  // 其他的需要自己加
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    typedRoutes: true, // 使用路由的地方可以检测是否是有效路由，否则eslint报错
  },

  eslint: {
    ignoreDuringBuilds: isProd, //即使有错误，也要构建生产代码，可以禁止内置的 ESLint
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: isProd, // 如果出现 TypeScript 错误，生产构建（next build）会失败。如果你希望即便有错误，也要构建生产代码
  },

  async rewrites() {
    return [
      {
        source: '/baidu',
        destination: 'https://baidu.com',
      },
    ];
  },
};

export default mdx()(nextConfig);
