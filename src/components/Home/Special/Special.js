import React, { useState } from "react";
import "./Special.scss";
const countTime = (date) => {
  const offDate = new Date(date);
  const now = new Date();
  const difference = offDate - now;
  const timeLeft = {
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
  return timeLeft;
};
const Special = () => {
  const [time, setTime] = useState({});
  // setInterval(() => {
  //   setTime(countTime("03-22-2022"));
  // }, 1000);
  return (
    <div className="Special">
      <div className="container">
        <div className="text">
          <h1>Special Offer</h1>
          <p>
            Save<br></br> <strong>$20.00</strong>
          </p>
        </div>
        <div className="img">
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"
            alt=""
          />
        </div>
        <p className="name">Game Console Controller + USB 3.0 Cable</p>
        <p className="price">
          $79.00{" "}
          <span
            style={{
              textDecoration: "line-through",
              fontSize: "18px",
              color: "#768b9e",
            }}
          >
            $99.00
          </span>
        </p>
        <p className="notice">Hurry Up! Offer ends in:</p>
        <div className="timer">
          <p className="hour">
            {time.hours}
            <div className="text">HOURS</div>
          </p>
          <span>:</span>
          <p className="min">
            {time.minutes}
            <div className="text">MINS</div>
          </p>
          <span>:</span>
          <p className="sec">
            {time.seconds}
            <div className="text">SECS</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Special;
