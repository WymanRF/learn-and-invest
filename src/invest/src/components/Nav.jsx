import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import headshots from "../images/headshots-chicago-18.jpg";

class Nav extends Component {
  state = {};
  componentDidMount() {
    M.AutoInit();
    if(this.props.auth_token 
      && this.props.auth_token.length > 0){
        
    }
  }

  showSignOutToast = () =>{
    M.toast({html: "You've been signed out", classes: 'red accent-4'})
  }

  render() {
    return (
      <>
        <ul id="slide-out" className="sidenav indigo lighten-3">
          <li>
            <div style={{ textAlign: "center" }}>
              <h3>Jennifer Smith</h3>
            </div>
          </li>
          <li>
            <div className="center">
              <img
                src={headshots}
                alt="profile_photo"
                className="circle"
                style={{ width: "10rem", height: "10rem" }}
              />
            </div>
          </li>

          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to="#!">
              <i className="material-icons hidden">timeline</i>List of Stocks
            </Link>
          </li>
          <li>
            <Link to="#!">
              <i className="material-icons">timeline</i>
              Profile
            </Link>
          </li>

          <li>
            <Link to="learn1">
              <i className="material-icons">timeline</i>
              Learn
            </Link>
          </li>
          <li>
            <Link to='dashboard' className="waves-effect" to="#!">
              <i className="material-icons">timeline</i>
              Dashboard
            </Link>
          </li>
          <li>
              <Link to='/signin' className="waves-effect">
               <i className="material-icons">timeline</i> 
                Sign-in
              </Link>
              <Link to='/signin' className="waves-effect" onClick={this.showSignOutToast}>
               <i className="material-icons">timeline</i> 
                Sign-Out
              </Link>           
          </li>          
        </ul>
        <Link
          to="#!"
          data-target="slide-out"
          className="sidenav-trigger btn-floating btn-large grey"
        >
          <i className="material-icons" style={{ fontSize: "3rem" }}>
            menu
          </i>
        </Link>
      </>
    );
  }
}

export default Nav;
