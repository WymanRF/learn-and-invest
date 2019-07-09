import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import SignInCard from "../components/signInCard";

class SignIn extends Component {
  state = {};

  render() {
    return (
      <>
        <HeaderBar />
        <div
          style={{
            height: "100vh" ,
            padding: "1.5rem"
          }}
        >
          <SignInCard {...this.props} />
        </div>
      </>
    );
  }
}

export default SignIn;


