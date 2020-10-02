import React from "react";
import Item from "../Item/Item";
import "./List.scss";

export default function List(props) {
  return (
    <ul className="list" >
      {props.goods.map((item) => {
        return <Item item={item} key={item.id}/>;
      })}
    </ul>
  );
}
