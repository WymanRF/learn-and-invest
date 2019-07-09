import React from "react";
import Filler from "./filler";
import "../styles/progressBar.css";

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Filler />
    </div>
  );
};

export default ProgressBar;
