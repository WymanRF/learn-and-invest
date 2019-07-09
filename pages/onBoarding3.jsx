import React, { Component } from 'react'
import OnBoardingCard from '../components/OnBoardin'
import stock_sim from "../images/stock_sim.jpeg";


class OnBoarding3 extends Component {
    state = { animate: '' }

    componentDidMount() {
        this.setState({animate: "animated slideInRight"})
    }
    render() { 
        return (
             <div className={this.state.animate}>
                 <OnBoardingCard
                    title='Practice in our simulator'
                    tag='we provide realtime data to learn with'
                    path='/signUp'
                    image={stock_sim}
                    
                 />
             </div>
              )
    }
}
 
export default OnBoarding3