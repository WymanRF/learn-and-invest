import React, {Component} from 'react'
import Input from './Input'
import "../index.css"

class SignInCard extends Component {
  state = {}

  render() {
      return ( 
          <form className="card card-content" >
            <span style={{margin:"7.5rem"}} className="card-title center">Sign In</span>
            <Input type="email" label="email"/>
            <Input type="password" label="password"/>
            <button style={{margin:"0 0 1.5rem 6.5rem"}} className = 'btn-large  grey darken-4' type="submit">Coming Soon...</button> 
          </form>
       )      
  }
}
 
export default SignInCard