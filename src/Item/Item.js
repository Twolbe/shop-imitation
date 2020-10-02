import React from "react";
import { Context } from "../App";
import Button from "../Button/Button";
import "./Item.scss";

export default function Item({ item }) {
  const { goods, cartGoods, setCartGoods } = React.useContext(Context);

  const classListForItem = ["item"];
  let atCart = null;

  if (cartGoods.includes(item)) {
    classListForItem.push("at-cart");
    atCart = true;
  } else {
    classListForItem.push("out-cart");
    atCart = false;
  }

  function addToCart(id) {
    goods.map((goodsItem) => {
      if (goodsItem.id === id) {
        let addPermission = cartGoods.every((cartItem) => {
          return cartItem !== goodsItem;
        });

        if (addPermission) {
          setCartGoods(cartGoods.concat(goodsItem));
        }
      }
      return goodsItem;
    });
  }

  function deleteFromCart(id) {
    goods.map((goodsItem) => {
      if (goodsItem.id === id) {
        setCartGoods(
          cartGoods.filter((cartGoodsItem) => cartGoodsItem !== goodsItem)
        );
      }
      return goodsItem;
    });
  }

  return (
    <li className={classListForItem.join(" ")}>
      <div className="goods-info">
        <span className="info-item name">{item.name}</span>
        <span className="info-item type">{item.type}</span>
        <span className="info-item price">{item.price} ₽</span>
      </div>
      <div className="button-container">
        {!atCart ? (
          <Button type="add" action={() => addToCart(item.id)} />
        ) : (
          <Button type="delete" action={() => deleteFromCart(item.id)} />
        )}
      </div>
    </li>
  );
}
