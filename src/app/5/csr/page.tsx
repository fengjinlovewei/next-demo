'use client';
// pages/csr.js
import useSWR from 'swr';

const fetcher: typeof fetch = (...args) => {
  return fetch(...args).then((res) => res.json());
};

export default function Page() {
  const { data, error, isLoading } = useSWR<{ title: string }>(
    'https://jsonplaceholder.typicode.com/todos/1',
    fetcher as any,
  );

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <p>Your Data: {data?.title}</p>;
}
