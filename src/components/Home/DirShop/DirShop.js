import React from "react";
import { useNavigate } from "react-router-dom";
import "./dirShop.scss";
import { PlayCircleOutlined } from "@ant-design/icons";
const DirShop = () => {
  const navigate = useNavigate();
  return (
    <div className="DirShop">
      <div className="container">
        <div className="item" onClick={() => navigate("/shop")}>
          <div className="main">
            <img src="https://khuongduy.herokuapp.com/image/2-1.png" alt="" />
            <div className="text">
              <p>
                CATCH BIG<br></br> <strong>DEALS</strong> ON THE<br></br>{" "}
                CAMERAS
              </p>
              <p className="shop">
                Shop Now
                <PlayCircleOutlined />
              </p>
            </div>
          </div>
        </div>
        <div className="item" onClick={() => navigate("/shop")}>
          <div className="main">
            <img src="https://khuongduy.herokuapp.com/image/2-1.png" alt="" />
            <div className="text">
              <p>
                TABLETS,<br></br> SMARTPHONES<br></br> <strong>AND MORE</strong>{" "}
              </p>
              <p className="shop">
                Shop Now
                <PlayCircleOutlined />
              </p>
            </div>
          </div>
        </div>
        <div className="item" onClick={() => navigate("/shop")}>
          <div className="main">
            <img src="https://khuongduy.herokuapp.com/image/2-1.png" alt="" />
            <div className="text">
              <p>
                SHOP THE<br></br> <strong>HOTEST</strong> <br></br>PRODUCTS{" "}
              </p>
              <p className="shop">
                Shop Now
                <PlayCircleOutlined />
              </p>
            </div>
          </div>
        </div>
        <div className="item" onClick={() => navigate("/shop")}>
          <div className="main">
            <img src="https://khuongduy.herokuapp.com/image/2-1.png" alt="" />
            <div className="text">
              <p>
                SHOP THE<br></br> <strong>HOTEST</strong> <br></br>PRODUCTS{" "}
              </p>
              <p className="shop">
                Shop Now
                <PlayCircleOutlined />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirShop;
