import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import GoodsData from "./GoodsData.json";
import Navbar from "./Navbar/Navbar";

function App() {
  const [goods, setGoods] = React.useState(GoodsData);
  const [cartGoods, setCartGoods] = React.useState([]);

  return (
    <Context.Provider value={{ goods, cartGoods, setGoods, setCartGoods }}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={Catalog} path="/" exact />
            <Route component={Cart} path="/cart" />
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export const Context = React.createContext();
export default App;
