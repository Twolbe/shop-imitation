import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../Button/Button";
import { addToCart } from "../store/actionCreators/addToCart";
import { deleteFromCart } from "../store/actionCreators/deleteFromCart";
import "./Item.scss";

function Item(props) {
  const classListForItem = ["item"];
  let atCart = null;

  if (props.cart.includes(props.item)) {
    classListForItem.push("at-cart");
    atCart = true;
  } else {
    classListForItem.push("out-cart");
    atCart = false;
  }

  return (
    <li className={classListForItem.join(" ")}>
      <div className="goods-info">
        <span className="info-item name">{props.item.name}</span>
        <span className="info-item type">{props.item.type}</span>
        <span className="info-item price">{props.item.price} ₽</span>
      </div>
      <div className="button-container">
        {!atCart ? (
          <Button type="add" action={() => props.addToCart(props.item)} />
        ) : (
            <Button type="delete" action={() => props.deleteFromCart(props.item)} />
          )}
      </div>
    </li>
  );
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addToCart, deleteFromCart }, dispatch)
)

const mapStateToProps = state => ({ cart: state.cart })

export default connect(mapStateToProps, mapDispatchToProps)(Item)
