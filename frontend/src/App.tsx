import React, { useState } from "react";
import Tabs from "./components/Tabs/Tabs.tsx";
import Modal from "./components/Modal/Modal.tsx";
import { ICategories } from "./types/Tabs.ts";
import EActiveModal from "./constants/EActiveModal.ts";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState<EActiveModal>(
    EActiveModal.MENU_OPTIONS
  );

  const mockData: ICategories = [
    {
      id: 1,
      name: "커피",
      menuList: [
        {
          name: "아메리카노",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "콜드브루",
          price: 4500,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 2,
      name: "라떼",
      menuList: [
        {
          name: "카페라떼",
          price: 5000,
          imgUrl: "#",
        },
        {
          name: "바닐라라떼",
          price: 5500,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 3,
      name: "티",
      menuList: [
        {
          name: "녹차",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "우롱차",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 3,
      name: "쥬스",
      menuList: [
        {
          name: "오렌지",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "포도",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 4,
      name: "디카페인",
      menuList: [
        {
          name: "디카페인 박카스",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "디카페인 아메리카노",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Tabs data={mockData} />

      {activeModal in EActiveModal && activeModal !== EActiveModal.NONE && (
        <>
          <article className="dimmed">
            <h1 className="blind">배경을 어둡게</h1>
          </article>

          <Modal {...{ activeModal, setActiveModal }} />
        </>
      )}
    </div>
  );
}

export default App;
