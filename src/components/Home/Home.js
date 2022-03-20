import React from "react";
import AllDepartments from "./AllDepartments/AllDepartments";
import SliderBoard from "./Slider/SliderBoard";
import "./home.scss";
import OverHead from "./OverHead/OverHead";
import DirShop from "./DirShop/DirShop";
import Special from "./Special/Special";
import TabProduct from "./TabProduct/TabProduct";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <OverHead />
      </div>
      <div className="above">
        <div className="container" style={{ display: "flex" }}>
          <AllDepartments />
          <SliderBoard />
        </div>
      </div>
      <DirShop />
      <div className="afterAbove">
        <div className="container" style={{ display: "flex" }}>
          <Special />
          <TabProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
