import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import Profile from "../components/ProfileHeader";
import ProgressBar from "../components/progressBar";
import DashCard from "../components/dashCard";
import axios from 'axios'

class PageTwo extends Component {
  state = { first_name: '',
            last_name:'',
            
  };

  componentDidMount(){
    let config = {
      headers: {
        'Authorization': window.auth_token,
        'Content-Type': 'application/json'}
    }

    axios.get(('http://localhost:3001/customers/'),
    config).then( response => {
      console.log(response.data)
    })  
  }

  render() {
    return (
      <>
        <HeaderBar />
        <Profile {...this.state} />
        <ProgressBar />
          <div className="count" style= {{textAlign:    "center"}}>
            <h5>Articles:0</h5>
            <h5>Shares:0</h5>
          </div>
        <DashCard />
      </>
    );
  }
}

export default PageTwo;
