import { useState } from "react";
import { Navigation } from "./components/Navigation";
import styles from "./style/App.module.css";
import { Content } from "./components/Content";
import { Basket } from "./components/Basket";

export type BasketList = {
  count: number;
  id: number;
  image: string;
  name: string;
  options: {
    [key: string]: string;
  };
  price: number;
};

export const App = () => {
  const [categoryId, setCategoryID] = useState<number>(0);
  const [basketList, setBasketList] = useState<any[]>([]);

  const handleTabClick = (id: number) => {
    if (id !== categoryId) {
      setCategoryID(id);
    }
  };

  return (
    <div className={styles["app"]}>
      <Navigation categoryId={categoryId} handleTabClick={handleTabClick} />
      <Content categoryId={categoryId} setBasketList={setBasketList} />
      {basketList.length > 0 && (
        <Basket basketList={basketList} setBasketList={setBasketList} />
      )}
    </div>
  );
};
