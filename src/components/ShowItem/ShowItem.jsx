import React from "react";
import styles from "../ShowItem/ShowItem.module.css";
import { FaWindowClose } from "react-icons/fa";

export default function ShowItem({ item, addToOrder, onShowItem }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.fullItem}>
        <button className={styles.closeModal} onClick={() => onShowItem(item)}>
          <FaWindowClose />
        </button>
        <img
          className={styles.fullImage}
          src={"./images/" + item.img}
          alt="Images of items"
          onClick={() => onShowItem(item)}
        />
        <h2 className={styles.fullHeading}>{item.title}</h2>
        <p className={styles.fullDescription}>{item.desc}</p>
        <b className={styles.fullPrice}>{item.price}$</b>
        <button className={styles.addToCart} onClick={() => addToOrder(item)}>
          +
        </button>
      </div>
    </div>
  );
}
