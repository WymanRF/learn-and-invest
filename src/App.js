import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import OnBoarding1 from './pages/onBoardin1'
import OnBoarding2 from './pages/onBoarding2'
import OnBoarding3 from './pages/onBoarding3'
import SignUpUtil from './pages/signUp'
import PageOne from './pages/page1'
import PageTwo from './pages/page2'
import Learn1 from './pages/learn1'
import Learn2 from './pages/learn2'
import Temp from './pages/temp'
import StockDetails from './pages/stockDetails'
import SignIn from './pages/signIn'
import './App.css'

class App extends Component {
  state = {
    auth_token: "",
    counter: 0,
  }

  setToken = (token) =>{
    this.setState({ auth_token: token })
  }

  componentDidMount = () => {
    const interval = setInterval(() => {
      SignUpUtil.getToken('anon@anon.com', 'password', this)
      this.setState({counter: this.state.counter + 1});
      if (this.state.counter === 5 || this.state.auth_token) {
        window.auth_token = this.state.auth_token
        clearInterval(interval)
      }
    }, 1000)
    
  }

  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Temp}/>
          <Route exact path="/onBoarding1" component={OnBoarding1}/>
          <Route exact path="/onBoarding2" component={OnBoarding2}/>
          <Route exact path="/onBoarding3" component={OnBoarding3}/>
          <Route exact path="/signUp" component={SignUpUtil.SignUp}/>
          <Route exact path="/market" component={PageOne}/>

          <Route exact path="/signIn" render={ (props) => <SignIn {...props} setToken={this.setToken}/> }/>
          <Route path="/stock/:id" component={StockDetails}/>

          <Route exact path="/dashboard" render={ (props) => <PageTwo {...props} getToken={this.getToken}/> }/> 
          <Route exact path="/learn1" component={Learn1}/>
          <Route name='learn2' path="/learn2" component={Learn2}/>  

        </Switch>
      </BrowserRouter>
     )
  }
}
 
export default App
