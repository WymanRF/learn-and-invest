import React from "react";
import chartData from "../images/chartData.jpg";

const DashCard = props => {
  return (
    <div className="dash-card">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={chartData} alt="simage" />
              <span className="card-title">Add Stocks</span>
              <a
                href="#!"
                className="btn-floating halfway-fab waves-effect waves-light  pink"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="row" />
            <div className="card-content">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
