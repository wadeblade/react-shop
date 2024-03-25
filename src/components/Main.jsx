import React from "react";
import ShopItems from "./ShopItems/ShopItems";
import Categories from "./Categories/Categories";

export default function Main({
  shopItems,
  addToOrder,
  onShowItem,
  chooseCategory,
}) {
  return (
    <main>
      <Categories chooseCategory={chooseCategory} />
      <ShopItems
        items={shopItems}
        onShowItem={onShowItem}
        addToOrder={addToOrder}
      />
    </main>
  );
}
