'use server';

import { revalidatePath } from 'next/cache';

const data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(formData: FormData) {
  const todo = formData.get('todo')! as string;
  data.push(todo);
  revalidatePath('/9/form1');
}

export async function createToDoDirectly(value: string) {
  const form = new FormData();
  form.append('todo', value);
  createToDo(form);
  return data;
}
