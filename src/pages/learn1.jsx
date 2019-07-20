import React, { Component } from "react";
import axios from "axios";
import HeaderBar from "../components/headerBar";
import { Link } from "react-router-dom";

const articleStyle = {
  position: "relative",
  height: "150px",
  margin: "3rem",
  width: "90%"
};

const articleImgStyle = {
  position: "absolute",
  width: "90%",
  height: "100%",
  marginRight: "2rem",
  border: "1px solid black",
  borderRadius: "5%"
};

const articleTitleStyle = {
  position: "absolute",
  zIndex: "2",
  margin: "0 7rem .3rem 0",
  bottom: "0",
  right: "0",
  backgroundColor: "white",
  opacity: "0.75",
  width: "15rem",
  height: "4rem",
  color: "black",
  borderRadius: ".5rem",
  padding: "10px"
};

class Learn1 extends Component {
  state = { articles: [] };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Investing&pageSize=10&sortBy=relevancy&apiKey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(response => this.setState({ articles: response.data.articles }));
  }

  render() {
    return (
      <div id='learn1Page'>
        <HeaderBar />
        <div >
          {this.state.articles.map((article, index) => {
            return (
              <Link
                to={{
                  pathname: "/learn2",
                  state: {
                    title: article.title,
                    content: article.description,
                    image: article.urlToImage,
                    url: article.url
                  }
                }}
                key={index}
              >
                <div style={articleStyle}>
                  <img style={articleImgStyle} src={article.urlToImage} alt=''/>
                  <div style={articleTitleStyle}>{article.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Learn1;
