"use client";
import { useState } from "react";
import TodoForm from "@/components/TodoForm/TodoForm";
import TodoFilter from "@/components/TodoFilter/TodoFilter";
import TodoList from "@/components/TodoList/TodoList";
import styles from "./page.module.css";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type FilterType = "all" | "active" | "completed";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todoアプリ</h1>
        <p className={styles.subtitle}>シンプルなTodoアプリ</p>
      </header>
      <TodoForm onAddTodo={addTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter}/>
      <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
    </main>
  );
}
