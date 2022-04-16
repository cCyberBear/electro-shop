import React from "react";
import { HashLoader } from "react-spinners";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <HashLoader size={50} color="#fed700" />
    </div>
  );
};

export default Loader;
