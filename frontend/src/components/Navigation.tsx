import { useState, useEffect } from "react";
import styles from "../style/Navigation.module.css";

type TabMockDataType = {
  id: number;
  name: string;
};

type TabButtonProps = {
  categoryId: number;
  label: TabMockDataType;
  onClick: () => void;
};

type NavigationProps = {
  categoryId: number;
  handleTabClick: (id: number) => void;
};

export const Navigation = ({ categoryId, handleTabClick }: NavigationProps) => {
  const [navigationData, setNavigationData] = useState<TabMockDataType[]>([]);

  useEffect(() => {
    const fetchNavigation = async () => {
      const response = await fetch("http://43.201.168.11:8080/api/categories");
      const data = await response.json();

      setNavigationData(data);
    };

    fetchNavigation();
  }, []);

  return (
    <div className={styles.navigation}>
      {navigationData.map((item, index) => (
        <TabButton
          key={index}
          label={item}
          categoryId={categoryId}
          onClick={() => handleTabClick(item.id)}
        />
      ))}
    </div>
  );
};

const TabButton = ({ categoryId, label, onClick }: TabButtonProps) => {
  const className = `${styles.tabButton} ${
    label.id === categoryId && styles.selected
  }`;

  return (
    <button className={className} onClick={onClick}>
      {label.name}
    </button>
  );
};
