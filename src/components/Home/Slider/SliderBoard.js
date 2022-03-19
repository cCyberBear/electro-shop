import React from "react";
import { Carousel } from "antd";
import "./sliderBoard.scss";

const SliderBoard = () => {
  return (
    <div className="SliderBoard">
      <Carousel >
        <div className="item">
          <div className="text">
              <h1>THE NEW STANDARD</h1>
              <p className="above">UNDER FAVORABLE SMARTWATCHES</p>
              <p className="form">FROM</p>
              <p className="price">
                $799.99 
              </p>
              <button>Start Buying</button>
          </div>
          <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/Smartwatchess.png" alt="" />
        </div>
        <div className="item2">
          <div className="text">
              <p className="shop">SHOP TO GET WHAT YOU LOVE</p>
              <h1>TIMEPIECES THAT<br></br> MAKE A STATEMENT<br></br> UP TO <strong>40% OFF</strong></h1>
              <button>Start Buying</button>
          </div>
          <img src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png" alt="" />
        </div>
        <div className="item2">
        <div className="text">
              <p className="shop">SHOP TO GET WHAT YOU LOVE</p>
              <h1>TIMEPIECES THAT<br></br> MAKE A STATEMENT<br></br> UP TO <strong>40% OFF</strong></h1>
              <button>Start Buying</button>
          </div>
          <img src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderBoard;
