import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./Navbar/Navbar";
import Catalog from "./pages/Catalog";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={Catalog} path="/" exact />
          <Route component={Cart} path="/cart" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
