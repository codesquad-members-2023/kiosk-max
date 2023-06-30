import { useState, useEffect } from 'react';
import styles from './App.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import MenuList from './components/Menu/MenuList';
import MenuModal from './components/Modal/Menu/MenuModal';
import Cart from './components/Cart/Cart';

export default function App() {
  const [categoryLists, setCategoryLists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('coffee');
  const [drinksLists, setDrinksLists] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalType, setModalType] = useState('');
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(`http://52.79.68.54:8080/drinks/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryLists(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://52.79.68.54:8080/drinks?type=${selectedTab}`)
      .then((response) => response.json())
      .then((data) => {
        setDrinksLists(data);
      });
  }, [selectedTab]);

  const handleTabSelect = (id) => {
    setSelectedTab(id);
  };

  const handleItemSelect = (key) => {
    const selectedItemObj = drinksLists.find((item) => item.id === key);
    setSelectedItem(selectedItemObj);
  };

  const handleAddCartItem = (cartItem) => {
    const sameDrinkIndex = cartList.findIndex(
      (item) =>
        item.drinkId === cartItem.drinkId &&
        item.size === cartItem.size &&
        item.temperature === cartItem.temperature
    );

    if (sameDrinkIndex >= 0) {
      const newCartList = cartList.map((item, index) => {
        return index === sameDrinkIndex
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item;
      });

      setCartList(newCartList);
      return;
    }

    const newCartList = [cartItem, ...cartList];

    setCartList(newCartList);
  };

  const handleRemoveCartItem = (target) => {
    const newCartList = cartList.filter(
      (item) => item.listId !== target.listId
    );
    setCartList(newCartList);
  };

  return (
    <div className={styles.main}>
      <CategoryTab
        categories={categoryLists}
        onTabSelect={handleTabSelect}
        selectedTab={selectedTab}
      />
      <MenuList
        menuItems={drinksLists}
        selectedTab={selectedTab}
        setModalType={setModalType}
        handleItemSelect={handleItemSelect}
      />
      <Cart
        cartList={cartList}
        setCartList={setCartList}
        handleRemoveCartItem={handleRemoveCartItem}
        modalType={modalType}
        setModalType={setModalType}
      />
      {modalType === 'menu' && (
        <MenuModal
          selectedItem={selectedItem}
          setModalType={setModalType}
          handleAddCartItem={handleAddCartItem}
        />
      )}
    </div>
  );
}
