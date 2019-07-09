import React from "react";
import default_profile from "../images/default_profile.png";
const Profile = props => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem 0 0 0"
      }}
    >
      <section
        className="name"
        style={{
          color: "white",
          fontSize: "2.5rem"
        }}
      >
        {props.first_name + " " + props.last_name}
      </section>
      <div className="container" />
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel #fafafa  grey darken-3 z-depth-1">
          <div className="">
            <div className="col s2">
              <img
                src={default_profile}
                alt="profile_photo"
                className="circle"
                style={{
                  width: "15rem",
                  height: "15rem",
                  border: "3px solid hotpink"
                }}
              />

              <div className="col s10">
                <span className="black-text" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="pBar_text"
        style={{
          fontSize: "1.5rem"
        }}
      >
        Progress Bar
      </section>
    </div>
  );
};

export default Profile;
