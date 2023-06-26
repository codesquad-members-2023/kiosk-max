import React from "react";
import { IMenuListProps } from "../../types/Tabs.ts";
import MenuItem from "./MenuItem.tsx";
import styles from "./MenuList.module.css";

function MenuList({ menuList }: IMenuListProps) {
  return (
    <ul className={styles.menu_list}>
      {menuList.map(({ name, price }) => (
        <MenuItem key={name} name={name} price={price} imgUrl="" />
      ))}
    </ul>
  );
}
export default MenuList;
