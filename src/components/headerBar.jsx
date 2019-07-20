import React, { Component } from "react";
import Search from "./Search";
import Nav from "./Nav";
import Input from "./Input";
import "../index.css";

class HeaderBar extends Component {
  state = {
    visType: true,
    vis: "hide"
  };

  HandelClick = () => {
    const myBool = false;
    const myClass = "animated slideInDown fadeIn faster";
    if (this.state.visType) {
      this.setState({ visType: myBool, vis: myClass });
    } else {
      this.setState({
        visType: true,
        vis: "animated slideOutUp fadeOut faster"
      });
    }
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "White"
          }}
          className="#263238 grey darken-4 z-depth-3 "
        >
          <Search click={this.HandelClick} />
          {/* <img class="logo" src={learnInvest_App} /> */}
          <h3>Market</h3>
          <Nav {...this.props} />
        </div>
        <form className={`container ${this.state.vis}`}>
          <Input type="search" label="Search" />
        </form>
      </>
    );
  }
}

export default HeaderBar;
