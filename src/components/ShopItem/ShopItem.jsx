import React from "react";
import styles from "../ShopItem/ShopItem.module.css";

export default function ShopItem({ item, addToOrder, onShowItem }) {
  return (
    <div className={styles.item}>
      <img
        className={styles.itemImage}
        src={"./images/" + item.img}
        alt="Images of items"
        onClick={() => onShowItem(item)}
      />
      <h2 className={styles.itemHeading}>{item.title}</h2>
      <p className={styles.itemDescription}>{item.desc}</p>
      <b className={styles.itemPrice}>{item.price}$</b>
      <button className={styles.addToCart} onClick={() => addToOrder(item)}>
        +
      </button>
    </div>
  );
}
