import React, { Component } from "react";

import logo1 from "../images/logo1.png";

class Temp extends Component {
  state = {};

  render() {
    return (
      <div
        className="logo animated fadeIn slow"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src={logo1}
          alt="profile_photo"
          style={{
            width: "100%",
            //height: "100%",
            padding: "5%",
            margin: "50% 0 0 0"
          }}
        />
        <section
          style={{
            padding: "15px"
          }}
        >
          To add our Investment app from > setting select > add to Homescreen
        </section>
      </div>
    );
  }
}

export default Temp;