import React from "react";
import { ITabListProps } from "../../types/Tabs.ts";
import styles from "./TabList.module.css";

function TabList({
  categoryNames,
  activeTabIdx,
  setActiveTabIdx,
}: ITabListProps) {
  return (
    <nav className={styles.tab_list}>
      <ul className={styles.tab_list__wrapper}>
        {categoryNames.map((name, index) => (
          <li className={styles.tab_list__li} key={name} data-index={index}>
            <button
              type="button"
              className={styles.tab_list__button}
              data-active={index === activeTabIdx}
              onClick={() => {
                setActiveTabIdx(index);
              }}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TabList;
