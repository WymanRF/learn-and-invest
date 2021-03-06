import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import default_profile from "../images/default_profile.png";

class Nav extends Component {
  state = {};
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <ul id="slide-out" className="sidenav grey darken-2">
          <li>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <div className="header">
                Guest User
              </div>
            </div>
          </li>
          <li>
            <div className="center">
              <img
                src={default_profile}
                alt="profile_photo"
                className="circle"
                style={{
                  width: "10rem",
                  height: "10rem",
                  border: "1px solid hotpink"
                }}
              />
            </div>
          </li>

          <li>
            <div className="divider" />
          </li>

          <table>
            <tbody>
              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <td>
                <li>
                  <Link to="/market">
                    <i className="material-icons ">timeline</i>List of Stocks
                  </Link>
                </li>
                </td>
              </tr>

              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <td>
                <li>
                  <Link to="learn1">
                    <i className="material-icons">assistant</i>
                    Learn
                  </Link>
                </li>
                </td>
              </tr>
              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <td>
                <li>
                  <Link className="waves-effect" to="/dashboard">
                    <i className="material-icons">dashboard</i>
                    Dashboard
                  </Link>
                </li>
                </td>
              </tr>
              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <td>
                <li>
                  <Link className="waves-effect" to="/signIn">
                    <i className="material-icons">perm_identity</i>
                    Sign-in
                  </Link>
                </li>
                </td>
              </tr>

              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <td>
                <li>
                  <Link className="waves-effect" to="#!">
                    <i className="material-icons">arrow_back</i>
                    Sign-Out
                  </Link>
                </li>
                </td>
              </tr>
            </tbody>
          </table>
        </ul>

        <Link
          to="#!"
          data-target="slide-out"
          className="sidenav-trigger btn-floating btn-large grey"
        >
          <i
            className="material-icons grey darken-2"
            style={{ fontSize: "3rem" }}
          >
            menu
          </i>
        </Link>
      </>
    );
  }
}
export default Nav;
