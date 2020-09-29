import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import Context from "./context";
import GoodsData from "./GoodsData.json";

function App() {
  const [goods, setGoods] = React.useState(GoodsData);
  const [goodsInCart, setGoodsInCart] = React.useState([]);

  function addClassnameMove(id) {
    setGoods(
      goods.map((item) => {
        if (item.id === id) {
          item.at_cart = !item.at_cart;
          if (item.at_cart) {
            let addToCart = goodsInCart.every((cartItem) => {
              return cartItem !== item;
            });
            if (addToCart) {
              setGoodsInCart(goodsInCart.concat([item]));
            }
          } else if (!item.at_cart) {
            setGoodsInCart(goodsInCart.filter((cartItem) => cartItem !== item));
          }
        }
        return item;
      })
    );
  }

  return (
    <Context.Provider
      value={{ goods, goodsInCart, addClassnameMove, setGoodsInCart, setGoods }}
    >
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path={"/"} exact component={Catalog} goods={goods} />
            <Route path={"/cart"} component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
