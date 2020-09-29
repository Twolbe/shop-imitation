import React, { useContext } from "react";
import GoodsList from "../components/Goods/GoodsList";
import Context from "../context";

export const Catalog = () => {
  const { goods } = useContext(Context);

  return (
    <div>
      <h1 className="header">Catalog</h1>
      <GoodsList goods={goods} />
    </div>
  );
};
