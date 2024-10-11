'use client';

export default function Page() {
  const a = () => {
    fetch('/14/api/getData')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <main>
      <h1>qwerqweqweqwe</h1>
      <button onClick={a}>asdasd</button>
    </main>
  );
}
