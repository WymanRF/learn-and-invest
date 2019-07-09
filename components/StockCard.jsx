import React from 'react'
import {Link} from 'react-router-dom'

const StockCard = () => {
    return ( 
        <section
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin:'15px 0'
            }}
        >
            <div>
                <div>Tesla</div>
                <div>TSLA</div>
                <div>12,000.00</div>
            </div>
            <Link to="#">
                <div
                    style={{
                        border: 'solid 1px lightgrey',
                        borderRadius: '20%',
                        width: '80px',
                        textAlign: "center",
                    }}
                >
                    <div>Rating</div>
                    <div>70%</div>
                    <div>BUY</div>
                </div>
            </Link>
        </section>
     )
}
 
export default StockCard