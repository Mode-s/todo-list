'use client';
import { useState } from 'react';
import TodoForm from '@/components/TodoForm/TodoForm';
import TodoList from '@/components/TodoList/TodoList';
import styles from './page.module.css';

export type Todo = {
  id: number;
  text: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todoアプリ</h1>
        <p className={styles.subtitle}>シンプルなTodoアプリ</p>
      </header>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}
