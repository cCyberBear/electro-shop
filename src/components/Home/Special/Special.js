import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(countTime("03-26-2025"));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
            src="https://khuongduy.herokuapp.com/uploads/image-1649690426830.png"
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
          <div className="time">
            {time.hours}
            <div className="text">HOURS</div>
          </div>
          <span>:</span>
          <div className="time">
            {time.minutes}
            <div className="text">MINS</div>
          </div>
          <span>:</span>
          <div className="time">
            {time.seconds}
            <div className="text">SECS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
