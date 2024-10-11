// app/blog/get-featured-posts.js
export default async function getFeaturedPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: '1', slug: 'article1', title: '文章 1' },
    { id: '2', slug: 'article2', title: '文章 2' },
    { id: '3', slug: 'article3', title: '文章 3' },
  ];
}
