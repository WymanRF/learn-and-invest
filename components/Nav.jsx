import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import headshots from "../images/headshots-chicago-18.jpg";

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
              <div class="header">
                {this.props.first_name + " " + this.props.last_name}
              </div>
            </div>
          </li>
          <li>
            <div className="center">
              <img
                src={this.props.img}
                alt="profile_photo"
                class="circle"
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderBottom: "1px solid hotpink"
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
                <li>
                  <Link to="/market">
                    <i className="material-icons ">timeline</i>List of Stocks
                  </Link>
                </li>
              </tr>

              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <li>
                  <Link to="learn1">
                    <i className="material-icons">assistant</i>
                    Learn
                  </Link>
                </li>
              </tr>
              <tr style={{ borderBottom: " .5px solid #eceff1 " }}>
                <li>
                  <Link className="waves-effect" to="/dashboard">
                    <i className="material-icons">dashboard</i>
                    Dashboard
                  </Link>
                </li>
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
