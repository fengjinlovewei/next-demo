'use client';
// app/blog/blog-nav-link.js
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

export default function BlogNavLink({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  console.log('segment', slug, segment);
  const isActive = slug === segment;

  return (
    <Link
      href={`/16/${slug}` as any}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
      {children}
    </Link>
  );
}
