import { TabMockDataType } from "./utils/types";

interface MenuOption {
  [key: string]: string[];
  size: string[];
  temperature: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  isSignature: boolean;
  description: string;
  image: string;
  options: MenuOption;
}

type MenuDetails = {
  [key: string]: MenuItem;
};

export const categories: TabMockDataType[] = [
  "커피",
  "라떼",
  "티",
  "주스",
  "디카페인",
];

export const menuList = {
  1: [
    { id: "아메리카노_0", name: "아메리카노", price: 4000, isSignature: true },
    { id: "콜드브루_1", name: "콜드브루", price: 4500, isSignature: false },
    { id: "에스프레소_2", name: "에스프레소", price: 3000, isSignature: true },
    { id: "카페모카_3", name: "카페모카", price: 4500, isSignature: true },
    {
      id: "아메리카노1_4",
      name: "아메리카노1",
      price: 4000,
      isSignature: false,
    },
    { id: "콜드브루1_5", name: "콜드브루1", price: 4500, isSignature: true },
    {
      id: "에스프레소1_6",
      name: "에스프레소1",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카1_7", name: "카페모카1", price: 4500, isSignature: true },
    {
      id: "아메리카노2_8",
      name: "아메리카노2",
      price: 4000,
      isSignature: false,
    },
    { id: "콜드브루2_9", name: "콜드브루2", price: 4500, isSignature: true },
    {
      id: "에스프레소2_10",
      name: "에스프레소2",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카2_11", name: "카페모카2", price: 4500, isSignature: false },
  ],
  2: [
    { id: "카페라떼1_0", name: "카페라떼1", price: 4500, isSignature: true },
    { id: "카페라떼2_1", name: "카페라떼2", price: 5500, isSignature: false },
    { id: "카페라떼3_2", name: "카페라떼3", price: 6500, isSignature: true },
    { id: "카페라떼4_3", name: "카페라떼4", price: 7500, isSignature: true },
    { id: "카페라떼5_4", name: "카페라떼5", price: 4500, isSignature: true },
    { id: "카페라떼6_5", name: "카페라떼6", price: 5500, isSignature: true },
    { id: "카페라떼7_6", name: "카페라떼7", price: 6500, isSignature: false },
    { id: "카페라떼8_7", name: "카페라떼8", price: 7500, isSignature: true },
    { id: "카페라떼9_8", name: "카페라떼9", price: 4500, isSignature: true },
    { id: "카페라떼10_9", name: "카페라떼10", price: 5500, isSignature: true },
    { id: "카페라떼11_10", name: "카페라떼11", price: 6500, isSignature: true },
    { id: "카페라떼12_11", name: "카페라떼12", price: 7500, isSignature: true },
  ],
  3: [
    { id: "아이스티1_0", name: "아이스티1", price: 4500, isSignature: true },
    { id: "아이스티2_1", name: "아이스티2", price: 5500, isSignature: true },
    { id: "아이스티3_2", name: "아이스티3", price: 6500, isSignature: false },
    { id: "아이스티4_3", name: "아이스티4", price: 7500, isSignature: true },
    { id: "아이스티5_4", name: "아이스티5", price: 4500, isSignature: false },
    { id: "아이스티6_5", name: "아이스티6", price: 5500, isSignature: true },
    { id: "아이스티7_6", name: "아이스티7", price: 6500, isSignature: true },
    { id: "아이스티8_7", name: "아이스티8", price: 7500, isSignature: false },
    { id: "아이스티9_8", name: "아이스티9", price: 4500, isSignature: true },
    { id: "아이스티10_9", name: "아이스티10", price: 5500, isSignature: true },
    { id: "아이스티11_10", name: "아이스티11", price: 6500, isSignature: true },
    { id: "아이스티12_11", name: "아이스티12", price: 7500, isSignature: true },
  ],
  4: [
    { id: "딸기쥬스1_0", name: "딸기쥬스1", price: 4500, isSignature: true },
    { id: "딸기쥬스2_1", name: "딸기쥬스2", price: 5500, isSignature: true },
    { id: "딸기쥬스3_2", name: "딸기쥬스3", price: 6500, isSignature: true },
    { id: "딸기쥬스4_3", name: "딸기쥬스4", price: 7500, isSignature: false },
    { id: "딸기쥬스5_4", name: "딸기쥬스5", price: 4500, isSignature: true },
    { id: "딸기쥬스6_5", name: "딸기쥬스6", price: 5500, isSignature: true },
    { id: "딸기쥬스7_6", name: "딸기쥬스7", price: 6500, isSignature: true },
    { id: "딸기쥬스8_7", name: "딸기쥬스8", price: 7500, isSignature: false },
    { id: "딸기쥬스9_8", name: "딸기쥬스9", price: 4500, isSignature: true },
    { id: "딸기쥬스10_9", name: "딸기쥬스10", price: 5500, isSignature: true },
    { id: "딸기쥬스11_10", name: "딸기쥬스11", price: 6500, isSignature: true },
    {
      id: "딸기쥬스12_11",
      name: "딸기쥬스12",
      price: 7500,
      isSignature: false,
    },
  ],
  5: [
    { id: "아메리카노_0", name: "아메리카노", price: 4000, isSignature: true },
    { id: "콜드브루_1", name: "콜드브루", price: 4500, isSignature: true },
    { id: "에스프레소_2", name: "에스프레소", price: 3000, isSignature: true },
    { id: "카페모카_3", name: "카페모카", price: 4500, isSignature: true },
    {
      id: "아메리카노1_4",
      name: "아메리카노1",
      price: 4000,
      isSignature: true,
    },
    { id: "콜드브루1_5", name: "콜드브루1", price: 4500, isSignature: false },
    {
      id: "에스프레소1_6",
      name: "에스프레소1",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카1_7", name: "카페모카1", price: 4500, isSignature: true },
    {
      id: "아메리카노2_8",
      name: "아메리카노2",
      price: 4000,
      isSignature: true,
    },
    { id: "콜드브루2_9", name: "콜드브루2", price: 4500, isSignature: false },
    {
      id: "에스프레소2_10",
      name: "에스프레소2",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카2_11", name: "카페모카2", price: 4500, isSignature: false },
  ],
  6: [
    { id: "아메리카노_0", name: "아메리카노", price: 4000, isSignature: true },
    { id: "콜드브루_1", name: "콜드브루", price: 4500, isSignature: true },
    { id: "에스프레소_2", name: "에스프레소", price: 3000, isSignature: true },
    { id: "카페모카_3", name: "카페모카", price: 4500, isSignature: true },
    {
      id: "아메리카노1_4",
      name: "아메리카노1",
      price: 4000,
      isSignature: true,
    },
    { id: "콜드브루1_5", name: "콜드브루1", price: 4500, isSignature: false },
    {
      id: "에스프레소1_6",
      name: "에스프레소1",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카1_7", name: "카페모카1", price: 4500, isSignature: true },
    {
      id: "아메리카노2_8",
      name: "아메리카노2",
      price: 4000,
      isSignature: true,
    },
    { id: "콜드브루2_9", name: "콜드브루2", price: 4500, isSignature: false },
    {
      id: "에스프레소2_10",
      name: "에스프레소2",
      price: 3000,
      isSignature: true,
    },
    { id: "카페모카2_11", name: "카페모카2", price: 4500, isSignature: false },
  ],
};

export const menuDetails: MenuDetails = {
  아메리카노_0: {
    id: "아메리카노_0",
    name: "아메리카노",
    price: 4000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  콜드브루_1: {
    id: "콜드브루_1",
    name: "콜드브루",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  에스프레소_2: {
    id: "에스프레소_2",
    name: "에스프레소",
    price: 3000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페모카_3: {
    id: "카페모카_3",
    name: "카페모카",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  아메리카노1_4: {
    id: "아메리카노1_4",
    name: "아메리카노1",
    price: 4000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  콜드브루1_5: {
    id: "콜드브루1_5",
    name: "콜드브루1",
    price: 4500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  에스프레소1_6: {
    id: "에스프레소1_6",
    name: "에스프레소1",
    price: 3000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페모카1_7: {
    id: "카페모카1_7",
    name: "카페모카1",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  아메리카노2_8: {
    id: "아메리카노2_8",
    name: "아메리카노2",
    price: 4000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  콜드브루2_9: {
    id: "콜드브루2_9",
    name: "콜드브루2",
    price: 4500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  에스프레소2_10: {
    id: "에스프레소2_10",
    name: "에스프레소2",
    price: 3000,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페모카2_11: {
    id: "카페모카2_11",
    name: "카페모카2",
    price: 4500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼1_0: {
    id: "카페라떼1_0",
    name: "카페라떼1",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼2_1: {
    id: "카페라떼2_1",
    name: "카페라떼2",
    price: 5500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼3_2: {
    id: "카페라떼3_2",
    name: "카페라떼3",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼4_3: {
    id: "카페라떼4_3",
    name: "카페라떼4",
    price: 7500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼5_4: {
    id: "카페라떼5_4",
    name: "카페라떼5",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼6_5: {
    id: "카페라떼6_5",
    name: "카페라떼6",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼7_6: {
    id: "카페라떼7_6",
    name: "카페라떼7",
    price: 6500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼8_7: {
    id: "카페라떼8_7",
    name: "카페라떼8",
    price: 7500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼9_8: {
    id: "카페라떼9_8",
    name: "카페라떼9",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼10_9: {
    id: "카페라떼10_9",
    name: "카페라떼10",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼11_10: {
    id: "카페라떼11_10",
    name: "카페라떼11",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  카페라떼12_11: {
    id: "카페라떼12_11",
    name: "카페라떼12",
    price: 7500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["hot", "ice"],
    },
  },
  아이스티1_0: {
    id: "아이스티1_0",
    name: "아이스티1",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티2_1: {
    id: "아이스티2_1",
    name: "아이스티2",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티3_2: {
    id: "아이스티3_2",
    name: "아이스티3",
    price: 6500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티4_3: {
    id: "아이스티4_3",
    name: "아이스티4",
    price: 7500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티5_4: {
    id: "아이스티5_4",
    name: "아이스티5",
    price: 4500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티6_5: {
    id: "아이스티6_5",
    name: "아이스티6",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티7_6: {
    id: "아이스티7_6",
    name: "아이스티7",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티8_7: {
    id: "아이스티8_7",
    name: "아이스티8",
    price: 7500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티9_8: {
    id: "아이스티9_8",
    name: "아이스티9",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티10_9: {
    id: "아이스티10_9",
    name: "아이스티10",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티11_10: {
    id: "아이스티11_10",
    name: "아이스티11",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  아이스티12_11: {
    id: "아이스티12_11",
    name: "아이스티12",
    price: 7500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스1_0: {
    id: "딸기쥬스1_0",
    name: "딸기쥬스1",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스2_1: {
    id: "딸기쥬스2_1",
    name: "딸기쥬스2",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스3_2: {
    id: "딸기쥬스3_2",
    name: "딸기쥬스3",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스4_3: {
    id: "딸기쥬스4_3",
    name: "딸기쥬스4",
    price: 7500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스5_4: {
    id: "딸기쥬스5_4",
    name: "딸기쥬스5",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스6_5: {
    id: "딸기쥬스6_5",
    name: "딸기쥬스6",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스7_6: {
    id: "딸기쥬스7_6",
    name: "딸기쥬스7",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스8_7: {
    id: "딸기쥬스8_7",
    name: "딸기쥬스8",
    price: 7500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스9_8: {
    id: "딸기쥬스9_8",
    name: "딸기쥬스9",
    price: 4500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스10_9: {
    id: "딸기쥬스10_9",
    name: "딸기쥬스10",
    price: 5500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스11_10: {
    id: "딸기쥬스11_10",
    name: "딸기쥬스11",
    price: 6500,
    isSignature: true,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
  딸기쥬스12_11: {
    id: "딸기쥬스12_11",
    name: "딸기쥬스12",
    price: 7500,
    isSignature: false,
    description: "",
    image:
      "https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png",
    options: {
      size: ["big", "medium", "small"],
      temperature: ["ice"],
    },
  },
};
