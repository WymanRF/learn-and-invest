import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import Profile from "../components/ProfileHeader";
import ProgressBar from "../components/progressBar";
import DashCard from "../components/dashCard";
import axios from "axios";
import headshots from "../images/headshots-chicago-18.jpg";

class PageTwo extends Component {
  state = { first_name: "Guest", last_name: "User", img: "" };

  componentDidMount() {
    let config = {
      headers: {
        Authorization: window.auth_token,
        "Content-Type": "application/json"
      }
    };
    axios
      .get("https://learn-and-invest.herokuapp.com/customers/1", config)
      .then(response => {
        this.setState({
          first_name: response.data.customer.first_name,
          last_name: response.data.customer.last_name,
          img: headshots
        });
      });
  }

  render() {
    return (
      <>
        <HeaderBar {...this.state} />
        <Profile {...this.state} />
        <ProgressBar />
        <div
          className="count"
          style={{
            backgroundColor: "black",
            margin: " 0 0 20px 0 ",
            textAlign: "center",
            color: "white"
          }}
        >
          <table>
            <tbody>
              <tr style={{ border: "solid 1px pink" }}>
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
      </>
    );
  }
}

export default PageTwo;
