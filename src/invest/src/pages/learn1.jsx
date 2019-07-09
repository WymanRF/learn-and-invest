import React, { Component } from 'react'
import axios from 'axios'
import HeaderBar from '../components/headerBar'
import { Link  } from "react-router-dom";


const articleStyle = { position: 'relative', height:'150px' }

const articleImgStyle = { position: 'absolute',
                          width: '100vw', height: '100%',
                          bottom: '0', right:'0', top: '0' }

const articleTitleStyle = { position:'absolute', zIndex: '2', 
                            bottom:'0', right:'0', 
                            backgroundColor:'white',
                            opacity: '0.75', width:'100vw' }

class Learn1 extends Component {

  state = { articles:[] }

  componentDidMount(){
     axios.get(`https://newsapi.org/v2/everything?q=Investing&pageSize=10&sortBy=relevancy&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => this.setState({articles: response.data.articles}))     
  }

  render(){
    return( 
      <>
        <HeaderBar/>
        <div>
          {
            this.state.articles.map((article, index) => {
              return (
                <Link to = {{ 
                  pathname: '/learn2',          
                  state: { title: article.title, 
                           content: article.description, 
                           image: article.urlToImage,
                           url: article.url } 
                  }} key={index}>

                  <div style = {articleStyle}>
                    <img style = {articleImgStyle} src= {article.urlToImage}></img> 
                    <div style = {articleTitleStyle}>{article.title}</div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </>
    )
  }

}

export default Learn1