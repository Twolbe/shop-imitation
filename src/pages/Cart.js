import React, { useContext } from "react";
import GoodsList from "../components/Goods/GoodsList";
import Context from "../context";

export const Cart = () => {
  const { goodsInCart } = useContext(Context);
  const { setGoodsInCart } = useContext(Context);
  const { goods } = useContext(Context);
  const { setGoods } = useContext(Context);

  function cleanCart(cartItems) {
    for (let good of goods) {
      if (cartItems.includes(good)) {
        good.at_cart = !good.at_cart;
      }
    }
    setGoods(goods);
    setGoodsInCart([]);
  }

  function getTotalPrice(goodsInCart) {
    let totalPrice = 0;
    for (let cartItem of goodsInCart) {
      totalPrice = totalPrice + Number.parseInt(cartItem.price);
    }
    return totalPrice;
  }

  return (
    <div>
      <h1 className="header">Cart</h1>
      {goodsInCart.length ? (
        <div>
          <GoodsList goods={goodsInCart} />
          <div className="action-row">
            <span>Total price: {getTotalPrice(goodsInCart)} ₽</span>
            <div
              className="button"
              onClick={() => {
                cleanCart(goodsInCart);
              }}
            >
              Clean cart
            </div>
          </div>
        </div>
      ) : (
        <div>Cart is empty!</div>
      )}
    </div>
  );
};
