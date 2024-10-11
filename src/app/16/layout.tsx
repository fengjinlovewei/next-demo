// app/blog/layout.js
import BlogNavLink from './blog-nav-link';
import getFeaturedPosts from './get-featured-posts';

export default async function Layout({ children }: any) {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <BlogNavLink slug={post.slug}>{post.title}</BlogNavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
