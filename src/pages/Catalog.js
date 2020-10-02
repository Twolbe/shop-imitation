import React from "react";
import { Context } from "../App";
import List from "../List/List";

export const Catalog = () => {
  const {goods} = React.useContext(Context)

  return (
    <div>
      <h1>Catalog</h1>
      <List goods={goods}/>
    </div>
  );
};
