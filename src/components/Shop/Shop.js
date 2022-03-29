import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCategories from "../AllCategories/AllCategories";
import AllProducts from "../AllProducts/AllProducts";
import Navigation from "../Navigation/Navigation";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./Shop.scss";
const Shop = () => {
  return (
    <div className="Shop">
      <Navigation />
      <div className="container">
        <div className="contain">
          <AllCategories width={"25%"} />
          <Routes>
            <Route path="/" element={<AllProducts />}></Route>
            <Route path=":id" element={<ProductDetail />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Shop;
