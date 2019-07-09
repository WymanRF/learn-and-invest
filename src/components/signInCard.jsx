import React, {Component} from 'react'
import Input from './Input'
import axios from 'axios'
import M from "materialize-css"
import "../index.css"
class SignInCard extends Component {
  state = {}

  handleAuthenticate = (e) => {
    e.preventDefault()  
    const email = e.target.email.value
    const password = e.target.password.value
    const form = e.target
    console.log({email, password})
    axios.post('http://localhost:3001/authenticate', {email, password})
    .then( res => {
      console.log(res.data)
      if(res.data.auth_token){ 
        this.props.setToken(res.data.auth_token) 
        M.toast({html: 'You have successfully signed in!', classes: 'light-green accent-2'})
        this.props.history.push('/dashboard')
      }
    })
    .catch( err => {
      form.reset()
      M.toast({html: 'Invalid Credentials', classes: 'red accent-4'}) 
    })
  }

  render() {
      return ( 
          <form className="card card-content" onSubmit={this.handleAuthenticate}>
            <span style={{margin:"7.5rem"}} className="card-title center">Sign-In</span>
            <Input type="email" label="email"/>
            <Input type="password" label="password"/>
            <button style={{margin:"0 0 1.5rem 6.5rem"}} className = 'btn-large  grey darken-4' type="submit">Submit</button> 
          </form>
       )      
  }
}
 
export default SignInCard