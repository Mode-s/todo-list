import type { FilterType } from "@/app/page";
import styles from './TodoFilter.module.css';

type TodoFilterProps = {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export default function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  return (
    <section className={styles.filterSection}>
      <h2 className={styles.heading}>フィルタ</h2>
      <div className={styles.buttonGroup}>
        <button className={filter === 'all' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('all')}>すべて</button>
        <button className={filter === 'active' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('active')}>未完了</button>
        <button className={filter === 'completed' ? `${styles.filterButton} ${styles.filterButtonActive}` : styles.filterButton} type="button" onClick={() => onFilterChange('completed')}>完了</button>
      </div>
    </section>
  );
}
