import React from "react";
import Button from "../Button/Button";
import List from "../List/List";
import "../App.scss"
import { connect } from "react-redux";
import { cleanCart } from "../store/actionCreators/cleanCart";
import { bindActionCreators } from "redux";

function Cart(props) {
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
      <List goods={props.cart} />
      {props.cart.length ? (
        <div className="action-row">
          <span className="total-price">Итого: {getTotalPrice(props.cart)} ₽</span>
          <Button type="clean" action={() => props.cleanCart(props.cart)} />
        </div>
      ) : (
          <p>Корзина пуста!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => ({ cart: state.cart })

const mapDispatchToProps = dispatch => (bindActionCreators({ cleanCart }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
