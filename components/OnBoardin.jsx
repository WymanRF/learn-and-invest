import React from "react";
import MainButton from "../components/MainButton";
import { NavLink } from "react-router-dom";

const OnBoardingCard = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        height:'100vh'
      }}
    >
      <NavLink
        to="/market"
        style={{
          alignSelf: "flex-end",
          margin: "0 0 25px 0"
        }}
      >
        <i className="material-icons">clear</i>
      </NavLink>
      <div />
      
        <img src={props.image} alt='onboarding pic' style=
      {{Width:"20rem",
        height:"20rem"}}/>

      <h4 className="center-align">{props.title}</h4>
      <article
        style={{
          margin: "30px 0"
        }}
      >
        {props.tag}
      </article>
      <MainButton path={props.path} text="Learn More" />
    </div>
  );
};

export default OnBoardingCard;
