import React, { Component } from "react";
import OnBoardingCard from "../components/OnBoardin";
import Learn from "../images/Learn.jpeg";

class OnBoarding2 extends Component {
  state = { animate: "" };

  componentDidMount() {
    this.setState({ animate: "animated slideInRight" });
  }
  render() {
    return (
      <div className={this.state.animate}>
        <OnBoardingCard
          title="Learn from industry experts"
          tag="Read up on all the best in investing"
          path="/onBoarding3"
          image={Learn}
        />
      </div>
    );
  }
}

export default OnBoarding2;
