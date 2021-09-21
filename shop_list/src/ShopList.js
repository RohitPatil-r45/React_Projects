import React from "react";
import Header from "./Header";
import Shops from "./Shops";
import Add from "./Add";
import Filter from "./Filter";

const ShopList = () => {
  return (
    <div className="shop-list-container">
      <Header />
      <Add />
      <Filter />
      <Shops />
    </div>
  );
};

export default ShopList;
