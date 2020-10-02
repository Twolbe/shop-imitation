import React from "react";
import { Context } from "../App";
import Button from "../Button/Button";
import List from "../List/List";
import "../App.scss"

export const Cart = () => {
  const { cartGoods, setCartGoods } = React.useContext(Context);

  function cleanCart() {
    setCartGoods([]);
  }

  function getTotalPrice(cartGoods) {
    let totalPrice = 0;
    for (let cartItem of cartGoods) {
      totalPrice = totalPrice + Number.parseInt(cartItem.price);
    }
    return totalPrice;
  }

  return (
    <div>
      <h1>Cart</h1>
      <List goods={cartGoods} />
      {cartGoods.length ? (
        <div className="action-row">
          <span className="total-price">Итого: {getTotalPrice(cartGoods)} ₽</span>
          <Button type="clean" action={() => cleanCart(cartGoods)}/>
        </div>
      ) : (
        <p>Корзина пуста!</p>
      )}
    </div>
  );
};
