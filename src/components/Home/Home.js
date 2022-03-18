
import React from "react";
import AllDepartments from "./AllDepartments/AllDepartments";
import SliderBoard from "./Slider/SliderBoard";
import "./home.scss"

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <AllDepartments />
        <SliderBoard/>
      </div>
    </div>
  );
};

export default Home;
