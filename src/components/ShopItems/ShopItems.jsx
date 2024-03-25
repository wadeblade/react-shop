import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import styles from "../ShopItems/ShopItems.module.css";

export default function ShopItems({ items, addToOrder, onShowItem }) {
  return (
    <section className="itemsSection">
      <div className={styles.itemsContainer}>
        {items.map((element, index) => {
          return (
            <ShopItem
              item={element}
              key={index}
              addToOrder={addToOrder}
              onShowItem={onShowItem}
            />
          );
        })}
      </div>
    </section>
  );
}
