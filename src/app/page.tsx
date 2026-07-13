import TodoForm from '@/components/TodoForm/TodoForm';
import TodoList from '@/components/TodoList/TodoList';

export default function Home() {
  return (
    <main>
      <h1>Todoアプリ</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
