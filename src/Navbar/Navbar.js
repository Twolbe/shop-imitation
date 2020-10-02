import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import './Navbar.scss'

export default function Navbar () {
  const { cartGoods } = React.useContext(Context);

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
            {cartGoods.length !== 0 ? (
              <span className="counter">
                {cartGoods.length}
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

