// app/page.js
import { draftMode } from 'next/headers';

async function getData() {
  const { isEnabled } = draftMode();

  console.log('isEnabled', isEnabled);

  const url = isEnabled ? { title: '1', desc: '2' } : { title: '3', desc: '4' };

  return url;
}

export default async function Page() {
  console.log('哈哈哈');
  const { title, desc } = await getData();

  return (
    <main>
      <h1>{title}</h1>
      <p>{desc}</p>
    </main>
  );
}
