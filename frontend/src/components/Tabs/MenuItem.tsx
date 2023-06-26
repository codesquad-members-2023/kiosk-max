import React from "react";
import { IMenuItemProps } from "../../types/Tabs.ts";
import styles from "./MenuItem.module.css";

function MenuItem({ name, price }: IMenuItemProps) {
  return (
    <li className={styles.menu_item}>
      <span>☕</span>
      <br />
      <p>
        <strong>이름:</strong>
        {name}
      </p>
      <p>
        <strong>가격:</strong>
        {price}
        <em>원</em>
      </p>
    </li>
  );
}
export default MenuItem;
