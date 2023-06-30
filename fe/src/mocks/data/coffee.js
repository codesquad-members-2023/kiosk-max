const coffeeDrinks = [
  {
    id: 1,
    type: 'coffee',
    name: '아메리카노',
    img: 'https://ediya.com/files/menu/IMG_1647320820317.png',
    price: 4000,
    totalQuantity: 50,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 1,
            value: 'S',
          },
          {
            id: 2,
            value: 'M',
          },
          {
            id: 3,
            value: 'L',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
          {
            id: 5,
            value: 'Ice',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'coffee',
    name: '화이트 비엔나',
    img: 'https://ediya.com/files/menu/IMG_1647320860534.png',
    price: 5000,
    totalQuantity: 30,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 1,
            value: 'S',
          },
          {
            id: 2,
            value: 'M',
          },
          {
            id: 3,
            value: 'L',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
          {
            id: 5,
            value: 'Ice',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'coffee',
    name: '카라멜 마끼아또',
    img: 'https://ediya.com/files/menu/IMG_1671585699141.png',
    price: 5000,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 1,
            value: 'S',
          },
          {
            id: 2,
            value: 'M',
          },
          {
            id: 3,
            value: 'L',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
          {
            id: 5,
            value: 'Ice',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: 'coffee',
    name: '에스프레소',
    img: 'https://ediya.com/files/menu/IMG_1647320254869.png',
    price: 3000,
    options: [
      {
        type: 'size',
        values: [
          {
            id: 10,
            value: 'one',
          },
          {
            id: 11,
            value: 'two',
          },
        ],
      },
      {
        type: 'temperature',
        values: [
          {
            id: 4,
            value: 'Hot',
          },
        ],
      },
    ],
  },
];

export default coffeeDrinks;
