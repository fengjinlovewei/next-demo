'use client';
//'use server';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// export const metadata = {
//   title: '...',
//   description: '...',
// };

function Home() {
  // await sleep(5000);
  return (
    <main className='flex flex-row flex-wrap'>
      <div>children</div>
    </main>
  );
}

export default Home;
