import React, { Component } from "react";
import HeaderBar from "../components/headerBar";
import "../index.css";

const articleImgStyle = {
  width: "100vw",
  height: "100%",
  bottom: "0",
  right: "0",
  top: "0"
};

class Learn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.location.state.title || "Title",
      content: props.location.state.content || "",
      image: props.location.state.image || "",
      url: props.location.state.url || ""
    };
  }

  render() {
    const { title, content, image, url } = this.state;
    return (
      <section id='learn2Page' style={{ height: "100vh" }}>
        <HeaderBar />
        <div>
          <div className="title">{title}</div>
          <img style={articleImgStyle} src={image} alt="" />
          <div className="article_content ">{content}</div>
          
          <a className="link_to_more" href={url} target="_blank" rel="noopener noreferrer">
            {" "}
            Read More{" "}
          </a>
        </div>
      </section>
    );
  }
}

export default Learn2;
