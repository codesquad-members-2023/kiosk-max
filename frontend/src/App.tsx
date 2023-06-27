import { useState } from "react";
import { Navigation } from "./components/Navigation";
import styles from "./style/App.module.css";
import { Content } from "./components/content/Content";
import { Basket } from "./components/Basket";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [basketList, setBasketList] = useState<any[]>([]);

  const handleTabClick = (label: string | "") => {
    if (label !== selectedTab) {
      setSelectedTab(label);
    }
  };

  return (
    <div className={styles["app"]}>
      <Navigation selectedTab={selectedTab} handleTabClick={handleTabClick} />
      <Content selectedTab={selectedTab} setBasketList={setBasketList} />
      {basketList.length > 0 ? (
        <Basket basketList={basketList} setBasketList={setBasketList} />
      ) : (
        ""
      )}
    </div>
  );
};
