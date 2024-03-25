import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShowItem from "./components/ShowItem/ShowItem";
import Main from "./components/Main";
import { useState } from "react";
import { shopItemsArray } from "./data";

function App() {
  const [shopItems, setShopItems] = useState(shopItemsArray);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(shopItems);
  const [isShowItem, setIsShowItem] = useState(false);
  const [fullItem, setFullItem] = useState();

  function onShowItem(item) {
    setFullItem(item);
    setIsShowItem((prev) => !prev);
  }

  function addToOrder(item) {
    let isInArray = false;

    orders.forEach((element) => {
      if (element.id === item.id) isInArray = true;
    });

    if (!isInArray) setOrders([...orders, item]);
  }

  function deleteOrder(id) {
    setOrders(
      orders.filter((element) => {
        if (element.id !== id) return true;
      })
    );
  }

  function chooseCategory(category) {
    if (category === "all") {
      setCurrentItems(shopItems);
      return;
    }

    setCurrentItems(
      shopItems.filter((element) => {
        if (element.category === category) return true;
      })
    );
  }

  return (
    <>
      <Header ordersList={orders} funcDeleteOrder={deleteOrder} />
      <Main
        shopItems={currentItems}
        onShowItem={onShowItem}
        addToOrder={addToOrder}
        chooseCategory={chooseCategory}
      />
      {isShowItem && (
        <ShowItem
          item={fullItem}
          onShowItem={onShowItem}
          addToOrder={addToOrder}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
