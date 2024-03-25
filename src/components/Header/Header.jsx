import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../Order/Order";

export default function Header({ ordersList, funcDeleteOrder }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleChangeCart() {
    setIsCartOpen((prev) => !prev);
  }

  function showOrders() {

    return ordersList.map((element, index) => {
      return (
        <Order deleteOrder={funcDeleteOrder} key={index} order={element} />
      );
    });
  }

  function showNothing() {
    return (
      <div className={styles.empty}>
        <h2 className={styles.emptyHeading}>Корзина пуста</h2>
      </div>
    );
  }

  return (
    <header>
      <div className="headerContainer">
        <span className={styles.logo}>House Staff</span>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>Про нас</li>
          <li className={styles.navigationItem}>Контакти</li>
          <li className={styles.navigationItem}>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={handleChangeCart}
          className={` ${styles.shopCart} ${isCartOpen && styles.active} `}
        />
        {isCartOpen && (
          <div className={styles.shopCartList}>
            {ordersList.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
}
