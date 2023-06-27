import { useState, useEffect } from "react";
import styles from "../style/Navigation.module.css";

type TabMockDataType = {
  id: number;
  name: string;
};

type TabButtonProps = {
  selectedTab: string;
  label: TabMockDataType;
  onClick: () => void;
};

type NavigationProps = {
  selectedTab: string;
  handleTabClick: (value: string) => void;
};

export const Navigation = ({
  selectedTab,
  handleTabClick,
}: NavigationProps) => {
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
          selectedTab={selectedTab}
          onClick={() => handleTabClick(item.name)}
        />
      ))}
    </div>
  );
};

const TabButton = ({ selectedTab, label, onClick }: TabButtonProps) => {
  const className = `${styles.tabButton} ${
    label.name === selectedTab && styles.selected
  }`;

  return (
    <button className={className} onClick={onClick}>
      {label.name}
    </button>
  );
};
