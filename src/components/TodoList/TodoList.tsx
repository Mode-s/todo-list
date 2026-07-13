import styles from './TodoList.module.css';

export default function TodoList() {
  return (
    <section className={styles.listSection}>
      <h2 className={styles.heading}>タスク一覧</h2>
      <ul className={styles.list}>
        <li className={styles.item}>サンプルのTodo</li>
        <li className={styles.item}>サンプルのTodo</li>
        <li className={styles.item}>サンプルのTodo</li>
      </ul>
    </section>
  );
}
// liタグは現在表示確認要の仮データとして１件だけ直書きしている。動的実装の際にデータから生成する形へ書き換える。
