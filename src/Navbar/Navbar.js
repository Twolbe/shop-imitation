import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

function Navbar(props) {

  return (
    <nav className="navbar">
      <div className="navbar-brand">SHOPing</div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active-nav-link"
            to="/"
            exact
          >
            Catalog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active-nav-link"
            to="/cart"
          >
            Cart
            {props.cart.length !== 0 ? (
              <span className="counter">
                {props.cart.length}
              </span>
            ) : (
                null
              )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({ cart: state.cart })

export default connect(mapStateToProps)(Navbar)
