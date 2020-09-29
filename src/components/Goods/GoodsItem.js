import React, { useContext } from "react";
import Context from "../../context";

export default function GoodsItem({ goodsItem }) {
  const { addClassnameMove } = useContext(Context);

  const buttonClasses = ["button-text-container"];
  const goodsItemClasses = ["goods-item"];

  if (goodsItem.at_cart === true) {
    buttonClasses.push("move");
    goodsItemClasses.push("at-cart");
  } else if (goodsItem.at_cart === false) {
    goodsItemClasses.push("out-cart");
  }

  return (
    <li className={goodsItemClasses.join(" ")}>
      <span style={{ fontWeight: "bold" }}>{goodsItem.name}</span>
      <span style={{ fontWeight: "lighter" }}>{goodsItem.type} </span>
      <span style={{ fontWeight: "lighter" }}>{goodsItem.price} ₽</span>

      <div className="button" onClick={() => addClassnameMove(goodsItem.id)}>
        <div className={buttonClasses.join(" ")}>
          <p className="button-text">Add to cart</p>
          <p className="button-text">Remove from cart</p>
        </div>
      </div>
    </li>
  );
}
