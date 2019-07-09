import React from 'react'
import {Link} from 'react-router-dom'

const HorizontalCard = (props) => {
    return (  
        <Link to={`stock/${props.ticker}`}>
            <div 
                style={{
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "space-around",
                    margin: ".5rem",
                    height: "10vh",
                    alignItems: "center"
                }}
                className="z-depth-2"
            >
                    <section>{props.ticker}</section>
                    <i 
                        className="material-icons"
                        style={{
                            fontSize: "2.5rem",
                            color: "green"
                        }}
                    >
                        trending_up
                    </i>
                    <div
                        style={{
                            border: ".2rem solid grey",
                            padding: ".2rem"
                        }}
                    >
                    ${props.price}
                    </div>
            </div>
        </Link>
    )
}
 
export default HorizontalCard