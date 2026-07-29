'use client';

import { useState } from 'react';
import styles from './TodoList.module.css';
import type { Todo } from '@/types/todo';

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
};

export default function TodoList({ todos, onDeleteTodo, onToggleTodo, onEditTodo }: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const finishEditing: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (editingId === null) return;
    const trimmedText = editingText.trim();
    if (trimmedText === '') return;
    onEditTodo(editingId, trimmedText);
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  return (
    <section>
      <h2>タスク一覧</h2>
      {todos.length === 0 ? (
        <p className={styles.empty}>タスクはありません</p>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.item}>
              {editingId === todo.id ? (
                <form className={styles.editForm} onSubmit={finishEditing}>
                  <label htmlFor={`edit-todo-${todo.id}`} className="sr-only">
                    タスクを編集
                  </label>
                  <input id={`edit-todo-${todo.id}`} type="text" className={styles.editInput} value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                  {editingText.trim() === '' && (
                    <p className={styles.errorMessage} role="alert">
                      タスクを入力してください。
                    </p>
                  )}
                  <button type="submit" className={styles.saveButton} disabled={editingText.trim() === ''}>
                    保存
                  </button>
                  <button type="button" className={styles.cancelButton} onClick={cancelEditing}>
                    キャンセル
                  </button>
                </form>
              ) : (
                <>
                  <input type="checkbox" className={styles.checkbox} checked={todo.completed} onChange={() => onToggleTodo(todo.id)} aria-label={`${todo.text}を完了にする`} />
                  <span className={todo.completed ? `${styles.itemText} ${styles.itemTextCompleted}` : styles.itemText}>{todo.text}</span>
                  <button type="button" className={styles.editButton} onClick={() => startEditing(todo)} aria-label={`${todo.text}を編集`}>
                    編集
                  </button>
                  <button type="button" className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)} aria-label={`${todo.text}を削除`}>
                    削除
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
