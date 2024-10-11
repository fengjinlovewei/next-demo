// app/blog/[slug]/page.js
export default function Page({ params }: any) {
  return <div>当前 slug: {params.slug}</div>;
}
