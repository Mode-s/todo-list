import styles from './TodoSummary.module.css';

type TodoSummaryProps = {
  totalCount: number;
  completedCount: number;
};

export default function TodoSummary({ totalCount, completedCount }: TodoSummaryProps) {
  return (
    <footer className={styles.summary}>
      <p className={styles.summaryText}>
        {totalCount}件中 {completedCount}件が完了
      </p>
    </footer>
  );
}
