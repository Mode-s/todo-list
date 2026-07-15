"use client";

import { useState } from "react";
import styles from "./TodoList.module.css";
import type { Todo } from "@/app/page";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
};

export default function TodoList({ todos, onDeleteTodo, onToggleTodo, onEditTodo }: TodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const finishEditing = () => {
    if (editingId === null) return;
    if (editingText.trim() === "") return;
    onEditTodo(editingId, editingText);
    setEditingId(null);
  };

  return (
    <section className={styles.listSection}>
      <h2 className={styles.heading}>タスク一覧</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            {editingId === todo.id ? (
              <>
                <input type="text" className={styles.editInput} value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                <button type="button" className={styles.saveButton} onClick={finishEditing}>
                  保存
                </button>
              </>
            ) : (
              <>
                <input type="checkbox" className={styles.checkbox} checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />
                <span className={todo.completed ? `${styles.itemText} ${styles.itemTextCompleted}` : styles.itemText}>{todo.text}</span>
                <button type="button" className={styles.editButton} onClick={() => startEditing(todo)}>
                  編集
                </button>
                <button type="button" className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)}>
                  削除
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
