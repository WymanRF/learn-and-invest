import React, { Component } from 'react'
import Card from './cardTop'
import axios from 'axios'

class Slider extends Component {
    state={mil: []}

    componentDidMount() {
        axios.get('https://financialmodelingprep.com/api/v3/majors-indexes')
        .then(res => this.setState({mil: res.data.majorIndexesList}))
    }    
    render() { 
        let {mil} = this.state
        return ( 
            <>
                <div style={{
                    padding:'15px'
                }}>
                    <span style={{fontSize:'1.5rem'}}>Major Index</span>
                </div>
                <div style={{
                        display: 'flex', 
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        scrollSnapType: "mandatory x",
                        margin: '10px 0 0 0'}}>
                    { 
                        mil.map((mindex, index) => {
                            return(
                            <Card 
                                key={index} 
                                ticker={mindex.ticker.slice(1)} 
                                changes = {mindex.changes} 
                                indexName={mindex.indexName}
                            />)
                        })
                    }
                </div>
            </>
         )
    }
}
 
export default Slider
