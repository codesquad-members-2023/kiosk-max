import styles from './CategoryTab.module.css';

export default function CategoryTab({ categories, onTabSelect, selectedTab }) {
  const handleTabClick = (tabIndex) => {
    onTabSelect(tabIndex);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={
                  selectedTab === category.id ? styles.selectedTab : ''
                }
                onClick={() => handleTabClick(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
