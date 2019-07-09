import React, { Component } from "react";
import OnBoardingCard from "../components/OnBoardin";
import comfort from "../images/comfort.jpeg";

class OnBoarding1 extends Component {
  state = { animate: "" };

  componentDidMount() {
    this.setState({ animate: "animated slideInRight" });
  }
  render() {
    return (
      <div className={this.state.animate}>
        <OnBoardingCard
          title="Get comfortable with investing"
          tag="We will hold your hand the whole way"
          path="/onBoarding2"
          image={comfort}
        />
      </div>
    );
  }
}

export default OnBoarding1;
