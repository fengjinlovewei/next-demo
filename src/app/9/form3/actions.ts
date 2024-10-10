'use server';

import { revalidatePath } from 'next/cache';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(prevState: any, formData: any) {
  await sleep(2500);
  const todo = formData.get('todo');
  data.push(todo);
  revalidatePath('/9/form3');
  return {
    message: `add ${todo} success!`,
  };
}
