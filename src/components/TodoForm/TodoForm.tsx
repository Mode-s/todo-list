'use client';

import { SubmitEventHandler, useState } from 'react';
import styles from './TodoForm.module.css';

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    onAddTodo(inputText);
    setInputText('');
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.heading}>新しいタスクを追加</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="新しいタスクを入力..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button className={styles.addButton} type="submit">
          追加
        </button>
      </form>
    </section>
  );
}
