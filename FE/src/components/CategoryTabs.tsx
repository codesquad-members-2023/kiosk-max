import { useEffect, useRef, useState } from "react";
import styles from "./CategoryTabs.module.css";

export function CategoryTabs({
  categories,
  onClick,
  activeTab,
}: {
  categories: any[];
  onClick: (index: number) => void;
  activeTab: number;
}) {
  // const [activeTab, setActiveTab] = useState(-1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const handleTabClick = (index: number) => {
  //   onClick(index);
  //   setActiveTab(index);
  // };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += startX - e.clientX;
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.CategoryTabs}
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}>
      {categories.map((category, index) => (
        <Tab
          key={index}
          name={category}
          isLastTab={index === categories.length - 1}
          isActive={index === activeTab}
          // onClick={() => handleTabClick(index)}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}

function Tab({ name, isLastTab, isActive, onClick }: TabProps) {
  return (
    <div
      className={`${styles.Tab} ${isLastTab ? styles.LastTab : ""} ${isActive ? styles.ActiveTab : ""}`}
      onClick={onClick}>
      {name}
    </div>
  );
}

type TabProps = {
  name: string;
  isLastTab: boolean;
  isActive: boolean;
  onClick: () => void;
};
