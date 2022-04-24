import React from "react";
import { Carousel } from "antd";
import "./sliderBoard.scss";
import { useNavigate } from "react-router-dom";

const SliderBoard = () => {
  const navigate = useNavigate();
  return (
    <div className="SliderBoard">
      <Carousel>
        <div className="item">
          <div className="text">
            <h1>THE NEW STANDARD</h1>
            <p className="above">UNDER FAVORABLE SMARTWATCHES</p>
            <p className="form">FROM</p>
            <p className="price">$799.99</p>
            <button onClick={() => navigate("/shop")}>Start Buying</button>
          </div>
          <img src="https://khuongduy.herokuapp.com/image/1-2.png" alt="" />
        </div>
        <div className="item2">
          <div className="text">
            <p className="shop">SHOP TO GET WHAT YOU LOVE</p>
            <h1>
              TIMEPIECES THAT<br></br> MAKE A STATEMENT<br></br> UP TO{" "}
              <strong>40% OFF</strong>
            </h1>
            <button onClick={() => navigate("/shop")}>Start Buying</button>
          </div>
          <img src="https://khuongduy.herokuapp.com/image/1-3.png" alt="" />
        </div>
        <div className="item2">
          <div className="text">
            <p className="shop">SHOP TO GET WHAT YOU LOVE</p>
            <h1>
              TIMEPIECES THAT<br></br> MAKE A STATEMENT<br></br> UP TO{" "}
              <strong>40% OFF</strong>
            </h1>
            <button onClick={() => navigate("/shop")}>Start Buying</button>
          </div>
          <img src="https://khuongduy.herokuapp.com/image/1-4.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderBoard;
