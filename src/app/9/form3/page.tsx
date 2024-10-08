import { findToDos } from './actions';
import Form from './form';

export default async function Page() {
  console.log('PagePagePage');
  const todos = await findToDos();
  return <Form todos={todos} />;
}
