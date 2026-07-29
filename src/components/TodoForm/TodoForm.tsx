'use client';

import { useState } from 'react';
import styles from './TodoForm.module.css';

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const trimmedText = inputText.trim();
    if (trimmedText === '') return;
    onAddTodo(trimmedText);
    setInputText('');
  };

  return (
    <section>
      <h2>新しいタスクを追加</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className="sr-only">新しいタスク</label>
        <input id="new-todo" className={styles.input} type="text" placeholder="タスクを入力..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button className={styles.addButton} type="submit" disabled={inputText.trim() === ''} >
          追加
        </button>
      </form>
    </section>
  );
}
