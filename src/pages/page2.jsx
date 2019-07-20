import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import Profile from "../components/ProfileHeader";
import ProgressBar from "../components/progressBar";
import DashCard from "../components/dashCard";

class PageTwo extends Component {

  render() {
    return (
      <div id='pageTwo'>
        <HeaderBar />
        <Profile />
        <ProgressBar />
        <div
          className="count"
          style={{
            backgroundColor:"black",
            margin: " 0 0 20px 0 ",
            textAlign: "center",
            color:"white"
          }}> 
          <table>
          <tbody>
            <tr style={{border:"solid 1px pink"}}>
              <th>Stock</th>
              <th>Symbol</th> 
              <th>Shares</th>
            </tr>
            <tr>
              <td>Microsoft</td>
              <td>MSFT</td> 
              <td>50</td>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>BTN</td> 
              <td>94</td>
            </tr>
          </tbody>
        </table>

          
        </div>
        <DashCard />
      </div>
    );
  }
}

export default PageTwo
