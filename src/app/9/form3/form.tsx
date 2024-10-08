'use client';

import { useOptimistic } from 'react';
import { useFormState } from 'react-dom';
import { createToDo } from './actions';

export default function Form({ todos }) {
  const [state, sendFormAction] = useFormState(createToDo, { message: '' });

  const [optimistiToDos, addOptimisticTodo] = useOptimistic(
    todos.map((i) => ({ text: i })),
    (state, newTodo) => [
      ...state,
      {
        text: newTodo,
        sending: true,
      },
    ],
  );

  async function formAction(formData) {
    // 先把最新的数据丢给 useOptimistic 的第二个参数函数，页面上添加一个带loading的元素
    addOptimisticTodo(formData.get('todo'));
    // 然后再把数据丢给 useFormState 第一个参数函数 createToDo ，然后开始异步处理中...
    await sendFormAction(formData);
    // 执行到这时，页面新家的参数开始loading...
    // 等到 createToDo 处理完数据， 会更新路由，page页会重新执行，获取 findToDos ，然后执行form组件
    // 然后 form 组件开始新的周期，
    // useFormState 会吐出新的 state，useOptimistic 也在初始化没有 sending 属性的数据
  }

  console.log(optimistiToDos);
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);

  return (
    <>
      <form action={formAction}>
        <input type='text' name='todo' />
        <button type='submit'> Add </button>
        <p>{state?.message}</p>
      </form>
      <ul>
        {optimistiToDos.map(({ text, sending }, i) => (
          <li key={i}>
            {text}
            {!!sending && <small> (Sending...)</small>}
          </li>
        ))}
      </ul>
    </>
  );
}
