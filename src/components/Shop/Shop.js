import React from "react";
import AllCategories from "../AllCategories/AllCategories";
import AllProducts from "../AllProducts/AllProducts";
import Navigation from "../Navigation/Navigation";
import "./Shop.scss";
const Shop = () => {
  return (
    <div className="Shop">
      <Navigation />
      <div className=" container" style={{ display: "flex" }}>
        <AllCategories />
        <AllProducts />
      </div>
    </div>
  );
};

export default Shop;
