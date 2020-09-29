import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../context";

export const Navbar = () => {
  const { goodsInCart } = useContext(Context);

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
            {goodsInCart.length !== 0 ? (
              <span className="counter">
                {goodsInCart.length}
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
