import React from 'react'
import {NavLink} from 'react-router-dom'

const Search = (props) => {
    return ( 
        <>
            <NavLink 
                to="#"
                onClick ={props.click}
                className='btn-floating btn-large grey'>
                <i 
                    className='material-icons grey darken-2'
                    style={{
                        fontSize: '3rem'
                        

                    }}
                >search
                </i>
            </NavLink>
        </>
     )
}
 
export default Search
