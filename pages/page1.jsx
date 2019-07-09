import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import Slider from "../components/carousel";
import HorizontalCard from "../components/HorizontalCard";
import Switch from "../components/switch";
import axios from "axios";

class PageOne extends Component {
  state = {
    active: []
  };

  componentDidMount() {
    axios
      .get("https://financialmodelingprep.com/api/v3/stock/actives")
      .then(res => {
        this.setState({ active: res.data.mostActiveStock });
      });
  }
  render() {
    const { active } = this.state;
    return (
      <section className="stock_card_page">
        <HeaderBar />
        <Switch />
        <Slider />
        <div
          style={{
            margin: "0 0 0 1.5rem"
          }}
        >
          Recomended
        </div>
        {active.map((stock, index) => {
          return (
            <HorizontalCard
              key={index}
              ticker={stock.ticker}
              price={stock.price}
            />
          );
        })}
      </section>
    );
  }
}

export default PageOne;
