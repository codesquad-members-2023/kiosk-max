import React, { useState } from "react";
import styles from "./MenuOptionForm.module.css";

function MenuOptionForm() {
  const [count, setCount] = useState(1);

  function clickHandler(action: "increment" | "decrement") {
    if (action === "increment") {
      const nextCount = count + 1;
      if (nextCount < 100) {
        setCount(nextCount);
      }
    } else if (action === "decrement") {
      const nextCount = count - 1;
      if (nextCount > 0) {
        setCount(nextCount);
      }
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <figure className={styles.form__img}>
            <span>☕</span>
            <figcaption className="blind">커피</figcaption>
          </figure>
        </div>
        <div className={styles.right}>
          <fieldset className={styles.form__field}>
            <label className={styles.form__size_checker} htmlFor="large">
              <input
                className="blind"
                type="radio"
                name="size"
                id="large"
                required
              />
              큰거
            </label>
            <label className={styles.form__size_checker} htmlFor="small">
              <input
                className="blind"
                type="radio"
                name="size"
                id="small"
                required
              />
              작은거
            </label>
          </fieldset>
          <fieldset className={styles.form__field}>
            <label className={styles.form__temperature_checker} htmlFor="hot">
              <input
                className="blind"
                type="radio"
                name="temperature"
                id="hot"
                required
              />
              뜨거운 것
            </label>
            <label className={styles.form__temperature_checker} htmlFor="ice">
              <input
                className="blind"
                type="radio"
                name="temperature"
                id="ice"
                required
              />
              차가운 것
            </label>
          </fieldset>
          <fieldset className={styles.form__field} id={styles.count_field}>
            <button
              className={styles.count_button}
              type="button"
              onClick={() => clickHandler("decrement")}>
              -
            </button>
            <div className={styles.count_window}>
              <input
                className={styles.count_input}
                type="number"
                name="count"
                id="count"
                max="99"
                min="1"
                value={count}
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  if (input.value && input.value !== "0") {
                    setCount(Number(input.value));
                  }
                }}
                required
                disabled
              />
            </div>
            <button
              className={styles.count_button}
              type="button"
              onClick={() => clickHandler("increment")}>
              +
            </button>
          </fieldset>
        </div>
      </div>
      <button className={styles.form__submit} type="submit">
        담기
      </button>
    </form>
  );
}

export default MenuOptionForm;
