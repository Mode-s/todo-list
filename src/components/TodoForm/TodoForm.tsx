import styles from './TodoForm.module.css';

export default function TodoForm() {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.heading}>新しいタスクを追加</h2>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="新しいタスクを入力..."/>
        <button className={styles.addButton} type="submit">追加</button>
      </form>
    </section>
  )
}