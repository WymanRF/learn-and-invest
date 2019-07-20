import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Input from '../components/Input'

class SignUp extends Component {
    state = { animate: "" }

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
                    <Input type='text' label='First Name'/>
                    <Input type='text' label='Last Name'/>
                    <Input type='email' label='Email'/>
                    <Input type='password' label='Password'/>
                    <Input type='text' label='Address 1'/>
                    <Input type='text' label='Address 2'/>
                    <Input type='text' label='City'/>
                    <Input label='State'/>
                    <Input type='number' label='Zip Code'/>
                    <Input type='tel' label='Phone Number'/>
                <button
                    className="btn waves-effect waves-light grey darken-4">
                        Coming Soon...
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

export default SignUp
