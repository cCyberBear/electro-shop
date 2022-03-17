import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./branding.scss"

const Branding = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
      <div className="Branding">
          <div className="container">
            <Carousel autoPlay={true} infinite={true} responsive={responsive}>
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png" alt="" />
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png" alt="" />
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png" alt="" />
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png" alt="" />
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png" alt="" />
                <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest6.png" alt="" />
            </Carousel>
          </div>
      </div>
  );
};

export default Branding;
