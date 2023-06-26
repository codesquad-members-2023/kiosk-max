import { useState } from "react";
import { TabMockDataType } from "./utils/types";
import { Navigation } from "./components/Navigation";
import styles from "./style/App.module.css";
import { Content } from "./components/content/Content";

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
      <Content selectedTab={selectedTab} />
    </div>
  );
};
