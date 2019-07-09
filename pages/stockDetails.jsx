import React, { Component } from 'react'
import HeaderBar from '../components/headerBar'
import StockCard from '../components/StockCard'
import MainButton from '../components/MainButton'
import Chart from '../assets/chart.png'
import axios from 'axios'

class StockDetails extends Component {
    state = { ind: [] }

    componentWillMount() {
       let tick = this.props.match.params
        axios.get('https://financialmodelingprep.com/api/v3/company/rating/'+ tick) 
        .then(res => console.log(res.data))
    }
    render() { 
        console.log(this.state.ind)
        return ( 
            <>
            <HeaderBar/>
            <StockCard/>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div
                    className="z-depth-2"
                    style={{
                        width:'80%',
                        height: '450px',
                        margin: '0 0 15px 0',
                        overflow: 'hidden'
                    }}
                >
                    <img 
                        src={Chart} 
                        alt="chart"
                        style={{
                            height: '100%',
                            scale: '50%'
                        }}
                    />
                </div>
                <MainButton path="#" text="Buy"/>
            </div>
        
            </>
         )
    }
}
 
export default StockDetails