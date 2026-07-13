import TodoForm from '@/components/TodoForm/TodoForm';
import TodoList from '@/components/TodoList/TodoList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todoアプリ</h1>
        <p className={styles.subtitle}>シンプルなTodoアプリ</p>
      </header>
      <TodoForm />
      <TodoList />
    </main>
  );
}
