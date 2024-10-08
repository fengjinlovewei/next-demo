'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { createToDo } from './actions';

const initialState = {
  message: '',
};

function SubmitButton() {
  // useFormStatus 相关用法
  // 这个组件必须摘出来，和form分离
  // 用法：1.在表单提交期间显示待定状态 2.查看正在提交的表单数据
  // 必须在form的子组件中调用，否则pending永远为true
  // https://zh-hans.react.dev/reference/react-dom/hooks/useFormStatus#pending-is-never-true
  const { pending, ...arg } = useFormStatus();
  console.log('arg', arg);
  return <button type='submit'>{pending ? 'Adding' : 'Add'}</button>;
}

export default function AddToDoForm() {
  // useFormState 相关用法（新版本使用 import { useActionState } from 'react' 代替 useFormState）
  //
  const [state, formAction] = useFormState(createToDo, initialState);

  return (
    <form action={formAction}>
      <input type='text' name='todo' />
      <SubmitButton />
      <p>{state?.message}</p>
    </form>
  );
}
