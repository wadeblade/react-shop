import React from "react";
import styles from "../Order/Order.module.css";
import { FaTrash } from "react-icons/fa";

export default function Order({ order, deleteOrder }) {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartImage}
        src={"./images/" + order.img}
        alt="Images of items"
      />
      <h2 className={styles.cartHeading}>{order.title}</h2>
      <b className={styles.cartPrice}>{order.price}$</b>
      <FaTrash
        className={styles.cartDeleteImage}
        onClick={() => deleteOrder(order.id)}
      />
    </div>
  );
}
