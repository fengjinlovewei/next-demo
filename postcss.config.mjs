/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75, // 设计图宽度是720的，这里就写72， 750的，就写75
      propList: ['*', '!--van-*'],
      unitPrecision: 5,
      selectorBlackList: [], // 某些元素不需要转rem时，可以在此定义,
      exclude: /vant/i,
    },
  },
};

export default config;
