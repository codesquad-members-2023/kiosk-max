import { useState } from "react";
import { TabMockDataType } from "./utils/types";
import { Navigation } from "./components/Navigation";
import styles from "./style/App.module.css";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState<TabMockDataType | "">("");

  const handleTabClick = (label: TabMockDataType | "") => {
    if (label !== selectedTab) {
      setSelectedTab(label);
    }
  };

  return (
    <div className={styles["app"]}>
      <Navigation selectedTab={selectedTab} handleTabClick={handleTabClick} />
    </div>
  );
};
