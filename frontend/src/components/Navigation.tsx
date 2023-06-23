import { categories } from "../mockData";
import styles from "../style/Navigation.module.css";
import { NavigationProps, TabButtonProps } from "../utils/types";

const TabButton = ({ selectedTab, label, onClick }: TabButtonProps) => {
  const className = `${styles.tabButton} ${
    label === selectedTab ? styles.selected : ""
  }`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export const Navigation = ({
  selectedTab,
  handleTabClick,
}: NavigationProps) => {
  const mockData = categories;

  return (
    <div className={styles.navigation}>
      {mockData.map((item, index) => (
        <TabButton
          key={index}
          label={item}
          selectedTab={selectedTab}
          onClick={() => handleTabClick(item)}
        />
      ))}
    </div>
  );
};
