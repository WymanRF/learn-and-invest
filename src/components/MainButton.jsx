import React from 'react'
import {NavLink} from 'react-router-dom'

const MainButton = (props) => {
    return ( 
        <NavLink 
            to={props.path} 
            className={`btn-large indigo lighten-3 ${props.addClass}`}
            style={{
                width: '60vw'
            }}
        >
            {props.text}
        </NavLink>
     )
}
 
export default MainButton