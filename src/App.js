import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import OnBoarding1 from './pages/onBoardin1'
import OnBoarding2 from './pages/onBoarding2'
import OnBoarding3 from './pages/onBoarding3'
import SignUp from './pages/signUp'
import PageOne from './pages/page1'
import PageTwo from './pages/page2'
import Learn1 from './pages/learn1'
import Learn2 from './pages/learn2'
import Temp from './pages/temp'
import StockDetails from './pages/stockDetails'
import SignIn from './pages/signIn'
import './App.css'

class App extends Component {

  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Temp}/>
          <Route exact path="/onBoarding1" component={OnBoarding1}/>
          <Route exact path="/onBoarding2" component={OnBoarding2}/>
          <Route exact path="/onBoarding3" component={OnBoarding3}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/market" component={PageOne}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route path="/stock/:id" component={StockDetails}/>
          <Route exact path="/dashboard" component={PageTwo}/> 
          <Route exact path="/learn1" component={Learn1}/>
          <Route name='learn2' path="/learn2" component={Learn2}/>  
        </Switch>
      </BrowserRouter>
     )
  }
}
 
export default App
