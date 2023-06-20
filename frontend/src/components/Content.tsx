import { useEffect, useState } from "react";
import styles from "../style/Content.module.css";
import { MockData, Product, TabMockDataType } from "../utils/types";

interface ContentProps {
  selectedTab: TabMockDataType | "";
}

export const Content = ({ selectedTab }: ContentProps) => {
  const mockData: MockData = {
    커피: [
      { name: "아메리카노", price: 4000 },
      { name: "콜드브루", price: 4500 },
      { name: "에스프레소", price: 3000 },
      { name: "카페모카", price: 4500 },
      { name: "아메리카노1", price: 4000 },
      { name: "콜드브루1", price: 4500 },
      { name: "에스프레소1", price: 3000 },
      { name: "카페모카1", price: 4500 },
      { name: "아메리카노2", price: 4000 },
      { name: "콜드브루2", price: 4500 },
      { name: "에스프레소2", price: 3000 },
      { name: "카페모카2", price: 4500 },
    ],
    라떼: [
      { name: "카페라떼1", price: 4500 },
      { name: "카페라떼2", price: 5500 },
      { name: "카페라떼3", price: 6500 },
      { name: "카페라떼4", price: 7500 },
      { name: "카페라떼5", price: 4500 },
      { name: "카페라떼6", price: 5500 },
      { name: "카페라떼7", price: 6500 },
      { name: "카페라떼8", price: 7500 },
      { name: "카페라떼9", price: 4500 },
      { name: "카페라떼10", price: 5500 },
      { name: "카페라떼11", price: 6500 },
      { name: "카페라떼12", price: 7500 },
    ],
    티: [
      { name: "아이스티1", price: 4500 },
      { name: "아이스티2", price: 5500 },
      { name: "아이스티3", price: 6500 },
      { name: "아이스티4", price: 7500 },
      { name: "아이스티5", price: 4500 },
      { name: "아이스티6", price: 5500 },
      { name: "아이스티7", price: 6500 },
      { name: "아이스티8", price: 7500 },
      { name: "아이스티9", price: 4500 },
      { name: "아이스티10", price: 5500 },
      { name: "아이스티11", price: 6500 },
      { name: "아이스티12", price: 7500 },
    ],
    쥬스: [
      { name: "딸기쥬스1", price: 4500 },
      { name: "딸기쥬스2", price: 5500 },
      { name: "딸기쥬스3", price: 6500 },
      { name: "딸기쥬스4", price: 7500 },
      { name: "딸기쥬스5", price: 4500 },
      { name: "딸기쥬스6", price: 5500 },
      { name: "딸기쥬스7", price: 6500 },
      { name: "딸기쥬스8", price: 7500 },
      { name: "딸기쥬스9", price: 4500 },
      { name: "딸기쥬스10", price: 5500 },
      { name: "딸기쥬스11", price: 6500 },
      { name: "딸기쥬스12", price: 7500 },
    ],
    디카페인: [
      { name: "아메리카노", price: 4000 },
      { name: "콜드브루", price: 4500 },
      { name: "에스프레소", price: 3000 },
      { name: "카페모카", price: 4500 },
      { name: "아메리카노1", price: 4000 },
      { name: "콜드브루1", price: 4500 },
      { name: "에스프레소1", price: 3000 },
      { name: "카페모카1", price: 4500 },
      { name: "아메리카노2", price: 4000 },
      { name: "콜드브루2", price: 4500 },
      { name: "에스프레소2", price: 3000 },
      { name: "카페모카2", price: 4500 },
    ],
  };

  const [currentData, setCurrentData] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedTab === "") {
      return;
    }

    setCurrentData(mockData[selectedTab]);
  }, [selectedTab]);

  return (
    <div className={styles.content}>
      {currentData.length === 0 ? <Logo /> : <Menu currentData={currentData} />}
    </div>
  );
};

const Logo = () => {
  return (
    <img
      className={styles.logoImg}
      src="https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2021/07/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B89002-1.png"
    />
  );
};

const Menu = ({ currentData }: { currentData: Product[] }) => {
  return (
    <div className={styles.menuWrapper}>
      {currentData.map((item) => (
        <div className={styles.menu} key={item.name}>
          <img src="https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png" />
          <div>{`${item.name}`}</div>
          <div>{`${item.price}원`}</div>
        </div>
      ))}
    </div>
  );
};
