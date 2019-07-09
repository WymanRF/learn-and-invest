import React from 'react'

const Input = (props) => {
    return ( 
        <div className='input-field col s12 m8 l6' >
            <input type={props.type} id={props.label} className={props.cn} autoComplete='off'  required={true}/>
            <label htmlFor={props.label}>{props.label}</label>
           
        </div>
     )
}
 
export default Input