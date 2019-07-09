import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Input from '../components/Input'
import axios from 'axios'
import M from "materialize-css"

const grabTokenAPI = (email, password, callback) => {
  axios.post('http://localhost:3001/authenticate',{
    email,
    password})
  .then( ({data}) => {
    if(data.auth_token){ 
      callback(data.auth_token)
    }
    else{
      console.error('something went wrong')
    }
  })}

const getToken = (email, password, component) => {
    const callback = (token) => {
      component.setState({auth_token: token})
    }
    grabTokenAPI(email, password, callback);
    
};

class SignUp extends Component {
    state = { animate: "" }

    createUser = (e) => {
        e.preventDefault()
        const firstName = e.target.First_Name.value
        const lastName = e.target.Last_Name.value
        const email = e.target.Email.value
        const password = e.target.password.value
        const adr1 = e.target[4].value
        const adr2 = e.target[5].value
        const mobile = e.target[6].value
        const city = e.target.City.value
        const state = e.target.State.value
        const zip = e.target[9].value

        let config = {
          headers: {
            'Authorization': window.auth_token,
            'Content-Type': 'application/json'}
        }

        //create the customer
        axios.post('http://localhost:3001/customers',{
          state,
          city,
          zip_code: zip,
          customer: {
              first_name: firstName,
              last_name: lastName,
              mobile,
              street1: adr1,
              street2: adr2,
              email,
              password
            },
              config    
        }).then( () => {
          M.toast({html: 'You have successfully signed up!', classes: 'light-green accent-2'})
          this.props.history.push('/dashboard')
        })
    }

    componentDidMount() {
        this.setState({animate: "animated slideInRight"})
    }
    render() {
        return (
           <div
           className={this.state.animate}
           >
                <div className='grey darken-4 z-depth-3'
                    style={{
                        textAlign: 'center',
                        padding: '10px 0'
                    }}
                >
                    <h3 className='white-text'
                        style = {{
                            padding: '0',
                            margin: '0'
                        }}
                    >Register to Invest!</h3>
                </div>
                <div>
                   <NavLink
                    to='/market'
                    className='grey-text right'
                    style={{
                        padding: '0 10px'
                    }}
                    >Skip
                    </NavLink>
                </div>
                <div
                    style= {{
                        padding: '10px'
                    }}
                >
                    <NavLink
                        to='#!'
                        className='btn grey darken-4 z-depth-3 white-text z-depth-2'
                        style={{
                            margin: '0 10px'
                        }}
                        >
                        Personal Info
                    </NavLink>
                    <NavLink
                        to='#!'
                        className='btn grey darken-4 z-depth-3 white-text z-depth-2'
                        style={{
                            margin: '0 10px'
                        }}
                        >
                        Bank Info
                    </NavLink>
                </div>
            <form
                onSubmit={this.createUser}
                style={{
                    margin: '30px'
                }}
                >
                <div
                    className='container z-depth-2'
                    style={{
                        padding: '30px'
                    }}
                >
                    <Input type='text' label='First_Name'/>
                    <Input type='text' label='Last_Name'/>
                    <Input type='email' label='Email'/>
                    <Input type='password' label='password'/>
                    <Input type='text' label='Address 1'/>
                    <Input type='text' label='Address 2'/>
                    <Input type='text' label='City'/>
                    <Input label='State'/>
                    <Input type='number' label='Zip Code'/>
                    <Input type='tel' label='Phone Number'/>
                <button
                    className="btn waves-effect waves-light grey darken-4"
                    type="submit"
                    name="action">
                        Submit
                    <i
                        className="material-icons left">
                            check
                    </i>
                </button>
                </div>
            </form>
           </div>
         )
    }
}
const SignUpUtil = {SignUp, getToken};
export default SignUpUtil;
