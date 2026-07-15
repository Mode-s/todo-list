import type { FilterType } from "@/app/page";
import styles from './TodoFilter.module.css';

type TodoFilterProps = {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  totalCount: number;
  activeCount: number;
  completedCount: number;
};

export default function TodoFilter({ filter, onFilterChange, totalCount, activeCount, completedCount, }: TodoFilterProps) {
  return (
    <section className={styles.filterSection}>
      <h2 className={styles.heading}>フィルタ</h2>
      <div className={styles.buttonGroup}>
        <button className={filter === 'all' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('all')}>すべて({totalCount})</button>
        <button className={filter === 'active' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('active')}>未完了({activeCount})</button>
        <button className={filter === 'completed' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('completed')}>完了({completedCount})</button>
      </div>
    </section>
  );
}
