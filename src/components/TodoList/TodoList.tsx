import styles from './TodoList.module.css';
import type { Todo } from '@/app/page';

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <section className={styles.listSection}>
      <h2 className={styles.heading}>タスク一覧</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            {todo.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
