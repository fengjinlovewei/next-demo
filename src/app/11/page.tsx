// 'use client';
//
// 这个方案不好，next可以使用 dynamic
// import { Suspense, lazy } from 'react';

// const Children = lazy(() => import('./children'));

// export default function Page() {
//   return (
//     <>
//       <div>你好</div>
//       <Suspense fallback={'loading'}>
//         <h2>Preview</h2>
//         <Children />
//       </Suspense>
//     </>
//   );
// }

import dynamic from 'next/dynamic';

const Children = dynamic(() => import('./components/children'), {
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return (
    <div>
      <div>你好</div>
      <h2>Preview</h2>
      <Children />
    </div>
  );
}
