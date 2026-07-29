"use client";
import { useState } from "react";
import type { Todo, FilterType } from '@/types/todo';
import TodoForm from "@/components/TodoForm/TodoForm";
import TodoFilter from "@/components/TodoFilter/TodoFilter";
import TodoList from "@/components/TodoList/TodoList";
import TodoSummary from "@/components/TodoSummary/TodoSummary";
import styles from "./page.module.css";


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };
    setTodos((prev) =>[...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;
  });

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = totalCount - completedCount;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todoアプリ</h1>
        <p className={styles.subtitle}>シンプルなTodoアプリ</p>
      </header>
      <TodoForm onAddTodo={addTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter} totalCount={totalCount} activeCount={activeCount} completedCount={completedCount} />
      <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodo} />
      <TodoSummary totalCount={totalCount} completedCount={completedCount} />
    </main>
  );
}
