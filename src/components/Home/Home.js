import React from "react";
import AllDepartments from "./AllDepartments/AllDepartments";
import SliderBoard from "./Slider/SliderBoard";
import "./home.scss";
import OverHead from "./OverHead/OverHead";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <OverHead />
      </div>
      <div className="above">
        <div className="container">
          <AllDepartments />
          <SliderBoard />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
