import styles from './TodoList.module.css';
import type { Todo } from '@/app/page';

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

export default function TodoList({ todos, onDeleteTodo, onToggleTodo, }: TodoListProps) {
  return (
    <section className={styles.listSection}>
      <h2 className={styles.heading}>タスク一覧</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <input type="checkbox" className={styles.checkbox} checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />
            <span className={todo.completed ? `${styles.itemText} ${styles.itemTextCompleted}` : styles.itemText}>{todo.text}</span>
            <button type="button" className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
