export const metadata = {
  title: 'kkkk',
  description: '...',
};

// export async function generateMetadata({ params, searchParams }, parent) {
//   console.log('params, searchParams', params, searchParams);

//   console.log(await parent);

//   return {
//     title: 'llll',
//     openGraph: {
//       images: ['/some-specific-page-image.jpg'],
//     },
//   };
// }

function Layout({ children }: never) {
  return <div className='eee'>{children}</div>;
}

export default Layout;
