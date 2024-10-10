'use client';
// app/page.js
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Client Components:
// 从效果上看，设置 ssr 为 false 的 <ComponentC> 会比 <ComponentA> 晚显示，<ComponentB> 在点击的时候才会显示。
const ComponentA = dynamic(() => import('./components/a'));
const ComponentB = dynamic(() => import('./components/b'));
const ComponentC = dynamic(() => import('./components/c'), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  const getId = async () => {
    const _ = await import('lodash-es');
    alert(_.uniqueId());
  };

  return (
    <div>
      {/* 立刻加载，但会使用一个独立的客户端 bundle */}
      <ComponentA />

      {/* 按需加载 */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      {/* 只在客户端加载 */}
      <ComponentC />
      <button onClick={getId}>getId</button>
    </div>
  );
}
