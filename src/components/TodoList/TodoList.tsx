import styles from './TodoList.module.css';
import type { Todo } from '@/app/page';

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
};

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <section className={styles.listSection}>
      <h2 className={styles.heading}>タスク一覧</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span className={styles.itemText}>{todo.text}</span>
            <button type="button" className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
