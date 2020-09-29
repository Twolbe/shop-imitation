import React from "react";
import GoodsItem from "./GoodsItem";

export default function GoodsList({ goods }) {
  return (
    <ul className="goods-list">
      {goods.map((goodsItem) => {
        return <GoodsItem goodsItem={goodsItem} key={goodsItem.id} />;
      })}
    </ul>
  );
}
