import { useState, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

export default function MenuList({
  menuItems,
  setModalType,
  handleItemSelect,
  selectedTab,
}) {
  const maxQuantity = Math.max(...menuItems.map((item) => item.totalQuantity));

  const animate = useTabAnimation(selectedTab);

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${animate ? styles.fadeInFromTop : ''}`}
      >
        {menuItems.map((menu) => (
          <MenuItem
            key={menu.id}
            menu={menu}
            setModalType={setModalType}
            handleItemSelect={handleItemSelect}
            isPopularDrink={
              menu.totalQuantity === maxQuantity && maxQuantity > 5
            }
          />
        ))}
      </div>
    </div>
  );
}

export function useTabAnimation(currentTab) {
  const previousTab = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentTab]);

  useEffect(() => {
    previousTab.current = currentTab;
  }, [currentTab]);

  return animate;
}
