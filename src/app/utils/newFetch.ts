console.log(888);
if (typeof window !== 'undefined') {
  console.log(999);
  const ollFetch = window.fetch;
  window.fetch = (...arg) => {
    console.log('我的fetch');
    return ollFetch(...arg);
  };
}
